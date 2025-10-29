import connectDB from "@/config/db";
import FormLban from "@/models/FormLbanSchema";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // Connect to database
    await connectDB();
    
    const body = await request.json();
    const { name, email, companyName, numberOfEmployees } = body;
    
    console.log("Received LBAN form data:", body);
    
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
    };
    
    const newForm = new FormLban(formData);
    const savedForm = await newForm.save();

    // Attempt to send the hiring ebook email, but don't fail the submission if email sends fails
    try {
      const ebookUrl = process.env.EBOOK_PUBLIC_URL;
      const transporter = nodemailer.createTransport({
        secure: true,
        host: process.env.EMAIL_HOST,
        port: 465,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });

      await transporter.sendMail({
        // from: `"EGA Team" <${process.env.EMAIL_USER}>`,
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your Free Hiring Ebook 📘",
        text: `Hey ${name},\n\nThanks for signing up! Here’s your hiring ebook: ${ebookUrl}\n\nBest,\nVRT Management Group`,
        html: `<p>Hey ${name},</p><p>Thanks for signing up! Here’s your hiring ebook:</p><p><a href="${ebookUrl}" target="_blank" rel="noopener noreferrer">Download the ebook</a></p><p>Best,<br/>VRT Management Group</p>`,
      });
      console.log("Hiring ebook email sent successfully");
      // Mark email as sent in the database
      await FormLban.findByIdAndUpdate(savedForm._id, { emailSent: true });
    } catch (mailError) {
      console.error("❌ Failed to send hiring ebook email:", mailError);
    }

    return Response.json(
      { 
        message: "LBAN form submitted successfully", 
        data: {
          id: savedForm._id,
          name: savedForm.name,
          email: savedForm.email,
          companyName: savedForm.companyName,
          numberOfEmployees: savedForm.numberOfEmployees
        }
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error("❌ Error processing LBAN form submission:", error.message);
    
    // Handle duplicate email error
    if (error.code === 11000) {
      return Response.json(
        { error: "Email already exists. Please use a different email address." },
        { status: 409 }
      );
    }
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return Response.json(
        { error: "Validation failed", details: validationErrors },
        { status: 400 }
      );
    }
    
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
