import connectDB from "@/config/db";
import FormLban from "@/models/FormLbanSchema";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    console.log("🚀 Starting LBAN form submission...");
    
    // Check environment variables first (original working setup)
    const requiredEnvVars = ['MONGO_URI', 'SMTP_HOST', 'SMTP_PORT', 'SMTP_SECURE', 'SMTP_USER', 'SMTP_PASS', 'EBOOK_PUBLIC_URL'];
    const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
    
    if (missingEnvVars.length > 0) {
      console.error("❌ Missing environment variables:", missingEnvVars);
      return Response.json(
        { error: "Server configuration error. Missing required environment variables." },
        { status: 500 }
      );
    }
    
    // Connect to database
    console.log("📡 Connecting to database...");
    await connectDB();
    console.log("✅ Database connected successfully");
    
    const body = await request.json();
    const { name, email, companyName, numberOfEmployees, revenue } = body || {};
    
    console.log("📝 Received LBAN form data:", { name, email, companyName, numberOfEmployees, revenue });
    
    // Validate required fields
    if (!name || !email || !companyName || !numberOfEmployees) {
      return Response.json(
        { error: "Missing required fields: name, email, companyName, and numberOfEmployees are required" },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }
    
    // Create new form entry
    const formData = {
      name,
      email,
      companyName,
      numberOfEmployees,
      revenue,
    };
    
    const newForm = new FormLban(formData);
    const savedForm = await newForm.save();

    // Attempt to send the hiring ebook email, but don't fail the submission if email sends fails
    try {
      console.log("📧 Preparing to send email...");
      const ebookUrl = process.env.EBOOK_PUBLIC_URL;
      
      const smtpPort = Number(process.env.SMTP_PORT);
      const smtpSecure = String(process.env.SMTP_SECURE).toLowerCase() === "true";

      console.log("📧 Email configuration:", {
        host: process.env.SMTP_HOST,
        port: smtpPort,
        secure: smtpSecure,
        user: process.env.SMTP_USER,
        ebookUrl: ebookUrl
      });
      
      // Use the original SMTPS port (465) as before,
      // but relax TLS verification to work around the
      // current certificate issue on the SMTP server.
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      console.log("📧 Sending email to:", email);
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Your Free Hiring Ebook 📘",
        text: `Hey ${name},\n\nThanks for signing up! Here's your hiring ebook: ${ebookUrl}\n\nBest,\nVRT Management Group`,
        html: `<p>Hey ${name},</p><p>Thanks for signing up! Here's your hiring ebook:</p><p><a href="${ebookUrl}" target="_blank" rel="noopener noreferrer">Download the ebook</a></p><p>Best,<br/>VRT Management Group</p>`,
      });
      console.log("✅ Hiring ebook email sent successfully");
      // Mark email as sent in the database
      await FormLban.findByIdAndUpdate(savedForm._id, { emailSent: true });
    } catch (mailError) {
      console.error("❌ Failed to send hiring ebook email:", mailError.message);
      console.error("❌ Mail error details:", mailError);
    }

    return Response.json(
      { 
        message: "LBAN form submitted successfully", 
        data: {
          id: savedForm._id,
          name: savedForm.name,
          email: savedForm.email,
          companyName: savedForm.companyName,
          numberOfEmployees: savedForm.numberOfEmployees,
          revenue: savedForm.revenue,
        }
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error("❌ Error processing LBAN form submission:", error.message);
    console.error("❌ Full error details:", error);
    console.error("❌ Error stack:", error.stack);
    
    // Handle duplicate email error
    if (error.code === 11000) {
      console.log("❌ Duplicate email error detected");
      return Response.json(
        { error: "Email already exists. Please use a different email address." },
        { status: 409 }
      );
    }
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      console.log("❌ Validation error detected:", error.errors);
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return Response.json(
        { error: "Validation failed", details: validationErrors },
        { status: 400 }
      );
    }
    
    // Handle database connection errors
    if (error.name === 'MongoNetworkError' || error.name === 'MongoServerError') {
      console.log("❌ Database connection error detected");
      return Response.json(
        { error: "Database connection failed. Please try again later." },
        { status: 503 }
      );
    }
    
    console.log("❌ Unhandled error type:", error.name);
    return Response.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    // Connect to database
    await connectDB();
    
    // Fetch all LBAN form submissions
    const forms = await FormLban.find({}).sort({ createdAt: -1 });
    
    // Transform data for dashboard
    const transformedForms = forms.map(form => ({
      _id: form._id,
      name: form.name,
      email: form.email,
      companyName: form.companyName,
      numberOfEmployees: form.numberOfEmployees,
      revenue: form.revenue,
      createdAt: form.createdAt
    }));
    
    return Response.json(transformedForms, { status: 200 });
    
  } catch (error) {
    console.error("❌ Error fetching LBAN form submissions:", error.message);
    
    return Response.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
