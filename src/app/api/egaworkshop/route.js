import connectDB from "@/config/db";
import EgaWorkshop from "@/models/Egaworkshop";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectDB();
        const { fullName, companyEmail, companyName, numberOfEmployees, revenue } = await request.json();
        
        if (!fullName || !companyEmail || !companyName || !numberOfEmployees) {
            return NextResponse.json(
                { error: "Missing required fields: fullName, companyEmail, companyName, numberOfEmployees" },
                { status: 400 }
            );
        }

        const newForm = new EgaWorkshop({
            fullName,
            email: companyEmail,
            companyName,
            numberOfEmployees,
            revenue,
        });
        const savedForm = await newForm.save();

        return NextResponse.json(
            {
                message: "Form submitted successfully",
                data: {
                    id: savedForm._id,
                    fullName: savedForm.fullName,
                    email: savedForm.email,
                    companyName: savedForm.companyName,
                    numberOfEmployees: savedForm.numberOfEmployees,
                    revenue: savedForm.revenue,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error submitting EGA Workshop form:", error);
        
        if (error?.code === 11000) {
            return NextResponse.json(
                { error: "Email already exists. Please use a different email address." },
                { status: 409 }
            );
        }
        
        return NextResponse.json(
            { error: "Internal server error. Please try again later." },
            { status: 500 }
        );
    }
}