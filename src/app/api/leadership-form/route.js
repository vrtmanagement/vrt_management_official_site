import connectDB from "@/config/db";
import LeadershipForm from "@/models/LeadershipForm";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_START_REGEX = /^[A-Za-z]/;
const EMPLOYEE_STAGES = new Set([
  "Stage 1: 1-10 employees",
  "Stage 2: 11-19 employees",
  "Stage 3: 20-34 employees",
  "Stage 4: 35-57 employees",
  "Stage 5: 58-95 employees",
  "Stage 6: 96-160 employees",
  "Stage 7: 161-500 employees",
]);

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim().toLowerCase();
    const companyName = String(body?.companyName || "").trim();
    const numberOfEmployees = String(body?.numberOfEmployees || "").trim();
    const website = String(body?.website || "").trim();

    if (!name || !email || !companyName || !numberOfEmployees) {
      return Response.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    if (!NAME_START_REGEX.test(name)) {
      return Response.json(
        { error: "Name cannot start with number or special character." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (name.length > 40 || email.length > 40 || companyName.length > 40) {
      return Response.json(
        { error: "Name, email, and company name allow up to 40 characters only." },
        { status: 400 }
      );
    }

    if (!EMPLOYEE_STAGES.has(numberOfEmployees)) {
      return Response.json(
        { error: "Please select a valid employee stage." },
        { status: 400 }
      );
    }

    const existingEmail = await LeadershipForm.findOne({ email });
    if (existingEmail) {
      return Response.json(
        { error: "Email already in use." },
        { status: 409 }
      );
    }

    const saved = await LeadershipForm.create({
      name,
      email,
      companyName,
      numberOfEmployees,
      website,
    });

    try {
      const smtpPort = Number(process.env.SMTP_PORT);
      const smtpSecure = String(process.env.SMTP_SECURE).toLowerCase() === "true";
      const ebookUrl = process.env.EBOOK_PUBLIC_URL || "";

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

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Leadership Form Submitted - Hiring Ebook",
        text:
          `Hi ${name},\n\n` +
          `Thank you for submitting the leadership registration form.\n` +
          `You can access the Hiring Ebook here: ${ebookUrl}\n\n` +
          `Regards,\nVRT`,
        html:
          `<p>Hi ${name},</p>` +
          `<p>Thank you for submitting the leadership registration form.</p>` +
          `<p>You can access the Hiring Ebook here: <a href="${ebookUrl}" target="_blank" rel="noopener noreferrer">Download Hiring Ebook PDF</a></p>` +
          `<p>Regards,<br/>VRT</p>`,
      });

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
        subject: `New Leadership Form Submission: ${name}`,
        text:
          `Hey Team,\n\n` +
          `${name} submitted the Leadership Form.\n\n` +
          `Details:\n` +
          `- Name: ${name}\n` +
          `- Email: ${email}\n` +
          `- Company: ${companyName}\n` +
          `- Employees: ${numberOfEmployees}\n` +
          `- Website: ${website || "N/A"}\n\n` +
          `— VRT Website`,
        html:
          `<p>Hey Team,</p>` +
          `<p><strong>${name}</strong> submitted the Leadership Form.</p>` +
          `<p><strong>Details:</strong></p>` +
          `<ul>` +
          `<li><strong>Name:</strong> ${name}</li>` +
          `<li><strong>Email:</strong> ${email}</li>` +
          `<li><strong>Company:</strong> ${companyName}</li>` +
          `<li><strong>Employees:</strong> ${numberOfEmployees}</li>` +
          `<li><strong>Website:</strong> ${website || "N/A"}</li>` +
          `</ul>` +
          `<p>— VRT Website</p>`,
      });

      await LeadershipForm.findByIdAndUpdate(saved._id, { emailSent: true });
    } catch (mailError) {
      console.error("Leadership form email failed:", mailError?.message || mailError);
    }

    return Response.json(
      {
        message: "Leadership form submitted successfully",
        data: {
          id: saved._id,
          name: saved.name,
          email: saved.email,
          companyName: saved.companyName,
          numberOfEmployees: saved.numberOfEmployees,
          website: saved.website,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error?.code === 11000) {
      return Response.json({ error: "Email already in use." }, { status: 409 });
    }

    return Response.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
