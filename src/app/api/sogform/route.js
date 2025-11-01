import connectDB from "@/config/db";
import FormSOG from "@/models/FormSOG";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, companyName, numberOfEmployees } = body || {};

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
    
    const newForm = new FormSOG({ name, email, companyName, numberOfEmployees });
    const saved = await newForm.save();

    return Response.json(
      {
        message: "SOG form submitted successfully",
        data: {
          id: saved._id,
          name: saved.name,
          email: saved.email,
          companyName: saved.companyName,
          numberOfEmployees: saved.numberOfEmployees,
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


