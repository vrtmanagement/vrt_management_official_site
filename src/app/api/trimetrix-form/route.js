import connectDB from "@/config/db";
import FormTriMetrix from "@/models/FormTriMetrix";

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
    const existing = await FormTriMetrix.findOne({ email });
    if (existing) {
      return Response.json(
        { error: "Email already exists. Please use a different email address." },
        { status: 409 }
      );
    }
    
    const newForm = new FormTriMetrix({ name, email, companyName, numberOfEmployees, revenue });
    const saved = await newForm.save();

    return Response.json(
      {
        message: "TriMetrix form submitted successfully",
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
    const records = await FormTriMetrix.find({}).sort({ createdAt: -1 });
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

