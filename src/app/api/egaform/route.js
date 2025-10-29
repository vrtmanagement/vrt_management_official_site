import connectDB from "@/config/db";
import FormEGA from "@/models/Formschema";

export async function POST(request) {
  try {
    // Connect to database
    await connectDB();
    
    const body = await request.json();
    const { fullName, email, companyName, numberOfEmployees, website } = body;
    
    console.log("Received form data:", body);
    console.log("numberOfEmployees type:", typeof numberOfEmployees, "value:", numberOfEmployees);
    
    // Validate required fields
    if (!fullName || !email || !companyName) {
      return Response.json(
        { error: "Missing required fields: fullName, email, and companyName are required" },
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
      name: fullName, // Map fullName to name as per schema
      email,
      companyName,
      numberOfEmployees: numberOfEmployees || undefined, // Store as string (e.g., "1-10", "11-50")
      website: website || undefined
    };
    
    console.log("Form data to save:", formData);
    console.log("FormEGA schema:", FormEGA.schema.paths.numberOfEmployees);
    
    const newForm = new FormEGA(formData);
    const savedForm = await newForm.save();
    
    console.log("Form saved successfully:", savedForm);
    
    return Response.json(
      { 
        message: "Form submitted successfully", 
        data: {
          id: savedForm._id,
          name: savedForm.name,
          email: savedForm.email,
          companyName: savedForm.companyName
        }
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error("❌ Error processing form submission:", error.message);
    
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
    
    // Fetch all form submissions
    const forms = await FormEGA.find({}).sort({ createdAt: -1 });
    
    // Transform data to match dashboard expectations
    const transformedForms = forms.map(form => ({
      _id: form._id,
      fullName: form.name, // Map name back to fullName for consistency
      email: form.email,
      companyName: form.companyName,
      numberOfEmployees: form.numberOfEmployees,
      website: form.website,
      createdAt: form.createdAt
    }));
    
    return Response.json(transformedForms, { status: 200 });
    
  } catch (error) {
    console.error("❌ Error fetching form submissions:", error.message);
    
    return Response.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}