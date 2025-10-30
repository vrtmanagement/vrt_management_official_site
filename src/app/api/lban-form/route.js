import connectDB from "@/config/db";
import FormLban from "@/models/FormLbanSchema";

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

    const newForm = new FormLban({ name, email, companyName, numberOfEmployees });
    const savedForm = await newForm.save();

    return Response.json(
      {
        message: "LBAN form submitted successfully",
        data: {
          id: savedForm._id,
          name: savedForm.name,
          email: savedForm.email,
          companyName: savedForm.companyName,
          numberOfEmployees: savedForm.numberOfEmployees,
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
