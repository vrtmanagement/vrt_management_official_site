import connectDB from "@/config/db";

export async function GET() {
  try {
    await connectDB();
    return Response.json({ db: "MongoDB connected ✅" });
  } catch (err) {
    return Response.json(
      { db: "MongoDB connection failed ❌", error: err.message },
      { status: 500 }
    );
  }
}
