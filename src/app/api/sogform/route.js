import connectDB from "@/config/db";
import FormSOG from "@/models/FormSOG";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, companyName, numberOfEmployees, revenue } = body || {};

    if (!name || !email || !companyName || !numberOfEmployees) {
      return Response.json(
        { error: "Missing required fields: name, email, companyName, numberOfEmployees" },
        { status: 400 }
      );
    }

    // Prevent duplicates by email for clearer error than relying on unique index alone
    const existing = await FormSOG.findOne({ email });
    if (existing) {
      return Response.json(
        { error: "Email already exists. Please use a different email address." },
        { status: 409 }
      );
    }
    
    const newForm = new FormSOG({ name, email, companyName, numberOfEmployees, revenue });
    const saved = await newForm.save();

    // Notify internal team (do not fail submission on email issues)
    try {
      const smtpPort = Number(process.env.SMTP_PORT);
      const smtpSecure = String(process.env.SMTP_SECURE).toLowerCase() === "true";

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

      // Success email to the user
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Thanks for submitting",
        text:
          `Thank you for registering with us.\n` +
          `We have successfully received your details, and our team is currently reviewing your application.\n` +
          `We’ll reach out to you soon with the next steps.\n\n` +
          `Best regards,\n` +
          `VRT`,
        html:
          `<p>Thank you for registering with us.</p>` +
          `<p>We have successfully received your details, and our team is currently reviewing your application.</p>` +
          `<p>We’ll reach out to you soon with the next steps.</p>` +
          `<p>Best regards,<br/>VRT</p>`,
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: ["coachrajesh@vrt9.com", "akumar@vrt9.com"],
        replyTo: email,
        subject: `New SOG Form Submission: ${name}`,
        text:
          `Hey Team,\n\n` +
          `${name} submitted the Stages of Growth (SOG) form.\n\n` +
          `Details:\n` +
          `- Name: ${name}\n` +
          `- Email: ${email}\n` +
          `- Company: ${companyName}\n` +
          `- Employees: ${numberOfEmployees}\n` +
          `- Revenue: ${revenue || "N/A"}\n\n` +
          `— VRT Website`,
        html:
          `<p>Hey Team,</p>` +
          `<p><strong>${name}</strong> submitted the Stages of Growth (SOG) form.</p>` +
          `<p><strong>Details:</strong></p>` +
          `<ul>` +
          `<li><strong>Name:</strong> ${name}</li>` +
          `<li><strong>Email:</strong> ${email}</li>` +
          `<li><strong>Company:</strong> ${companyName}</li>` +
          `<li><strong>Employees:</strong> ${numberOfEmployees}</li>` +
          `<li><strong>Revenue:</strong> ${revenue || "N/A"}</li>` +
          `</ul>` +
          `<p>— VRT Website</p>`,
      });
    } catch (mailError) {
      console.error("❌ Failed to send SOG notification email:", mailError?.message || mailError);
    }

    return Response.json(
      {
        message: "SOG form submitted successfully",
        data: {
          id: saved._id,
          name: saved.name,
          email: saved.email,
          companyName: saved.companyName,
          numberOfEmployees: saved.numberOfEmployees,
          revenue: saved.revenue,
          createdAt: saved.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error?.code === 11000) {
      return Response.json(
        { error: "Email already exists. Please use a different email address." },
        { status: 409 }
      );
    }
    return Response.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const records = await FormSOG.find({}).sort({ createdAt: -1 });
    const data = records.map((doc) => ({
      _id: doc._id,
      name: doc.name,
      email: doc.email,
      companyName: doc.companyName,
      numberOfEmployees: doc.numberOfEmployees,
      revenue: doc.revenue,
      createdAt: doc.createdAt,
    }));
    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}


