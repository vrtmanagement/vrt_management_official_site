import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import QuizSubmission from "@/models/QuizSchema";

export async function POST(request) {
  try {
    // Connect to database
    await connectDB();

    // Parse the request body
    const body = await request.json();
    const { userResponses, metadata, userData } = body;

    // Validate required fields
    if (!userResponses || !Array.isArray(userResponses) || userResponses.length === 0) {
      return NextResponse.json(
        { error: "User responses are required" },
        { status: 400 }
      );
    }

    if (!userData || !userData.name || !userData.email) {
      return NextResponse.json(
        { error: "User data (name and email) is required" },
        { status: 400 }
      );
    }

    // Check if user has already submitted a quiz
    const existingSubmission = await QuizSubmission.findOne({
      'user.email': userData.email.toLowerCase()
    });

    if (existingSubmission) {
      return NextResponse.json(
        { error: "Quiz already submitted for this email address" },
        { status: 409 }
      );
    }

    // Create new quiz submission
    const quizSubmission = new QuizSubmission({
      user: {
        name: userData.name.trim(),
        email: userData.email.toLowerCase().trim()
      },
      responses: userResponses.map(response => ({
        questionId: response.questionId,
        question: response.question,
        selectedAnswer: response.selectedAnswer,
        questionNumber: response.questionNumber
      })),
      metadata: {
        submittedAt: new Date(metadata.submittedAt),
        totalQuestions: metadata.totalQuestions,
        completedQuestions: userResponses.length,
        completionRate: metadata.completionRate
      },
      status: 'completed'
    });

    // Save to database
    const savedSubmission = await quizSubmission.save();

    // Log successful submission
    console.log("✅ Quiz submission saved:", {
      id: savedSubmission._id,
      email: savedSubmission.user.email,
      completionRate: savedSubmission.metadata.completionRate,
      recommendedEbookType: savedSubmission.analysis.recommendedEbookType
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Quiz submitted successfully",
        data: {
          submissionId: savedSubmission._id,
          recommendedEbookType: savedSubmission.analysis.recommendedEbookType,
          analysis: savedSubmission.analysis
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("❌ Error saving quiz submission:", error);

    // Handle specific MongoDB errors
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Quiz already submitted for this email address" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    // Connect to database
    await connectDB();

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (email) {
      // Get specific user's submission
      const submission = await QuizSubmission.findOne({
        'user.email': email.toLowerCase()
      }).select('-__v');

      if (!submission) {
        return NextResponse.json(
          { error: "No quiz submission found for this email" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: submission
      });
    } else {
      // Get all quiz submissions for dashboard
      const submissions = await QuizSubmission.find({}).sort({ 'metadata.submittedAt': -1 });
      
      return NextResponse.json(submissions, { status: 200 });
    }

  } catch (error) {
    console.error("❌ Error fetching quiz data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
