"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, ArrowRight, BookOpen } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const QuizPage = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const questions = [
    {
      id: 1,
      question: "What is your primary challenge when building high-performing teams?",
      options: [
        "Finding the right talent",
        "Retaining top performers",
        "Building team culture",
        "Managing remote teams",
        "Developing leadership skills"
      ]
    },
    {
      id: 2,
      question: "Which hiring metric do you prioritize most?",
      options: [
        "Time to hire",
        "Quality of hire",
        "Cost per hire",
        "Candidate experience",
        "Retention rate"
      ]
    },
    {
      id: 3,
      question: "What's your biggest concern about AI in recruitment?",
      options: [
        "Bias in AI algorithms",
        "Losing human touch",
        "Implementation complexity",
        "Data privacy issues",
        "Job displacement"
      ]
    },
    {
      id: 4,
      question: "How do you currently measure hiring success?",
      options: [
        "Manager satisfaction",
        "New hire performance",
        "Time to productivity",
        "Cultural fit assessment",
        "Long-term retention"
      ]
    },
    {
      id: 5,
      question: "What leadership skill would you like to develop most?",
      options: [
        "Strategic thinking",
        "Emotional intelligence",
        "Change management",
        "Team building",
        "Decision making"
      ]
    }
  ];

  // Load user data from localStorage on component mount
  useEffect(() => {
    const loadUserData = () => {
      try {
        const storedUserData = localStorage.getItem('lban_user_data');
        if (storedUserData) {
          const parsedData = JSON.parse(storedUserData);
          setUserData(parsedData);
          console.log("✅ User data loaded:", parsedData);
        } else {
          console.warn("⚠️ No user data found in localStorage");
          toast.error("Please complete the form first before taking the quiz.");
          setTimeout(() => {
            router.push('/lban/form');
          }, 2000);
        }
      } catch (error) {
        console.error("❌ Error loading user data:", error);
        toast.error("Error loading user data. Please try again.");
        router.push('/lban/form');
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, [router]);

  const handleAnswerChange = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!userData) {
      toast.error("User data not found. Please complete the form first.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Prepare the complete quiz data for backend
      const quizData = {
        timestamp: new Date().toISOString(),
        answers: answers,
        questionResponses: questions.map((question, index) => ({
          questionId: question.id,
          question: question.question,
          selectedAnswer: answers[index] || null,
          questionNumber: index + 1
        })),
        totalQuestions: questions.length,
        completedQuestions: Object.keys(answers).length,
        completionRate: (Object.keys(answers).length / questions.length) * 100
      };

      // Console log the complete data structure for backend integration
      console.log("=== QUIZ SUBMISSION DATA ===");
      console.log("Complete Quiz Data:", quizData);
      console.log("User Data:", userData);
      console.log("Formatted for Backend:", {
        userData: userData,
        userResponses: quizData.questionResponses,
        metadata: {
          submittedAt: quizData.timestamp,
          totalQuestions: quizData.totalQuestions,
          completionRate: quizData.completionRate
        }
      });
      console.log("=== END QUIZ DATA ===");

      // Submit to backend API
      // const response = await axios.post('/api/quiz-submission', {
      //   userData: userData,
      //   userResponses: quizData.questionResponses,
      //   metadata: {
      //     submittedAt: quizData.timestamp,
      //     totalQuestions: quizData.totalQuestions,
      //     completionRate: quizData.completionRate
      //   }
      // });

      if (response.status === 201) {
        toast.success("Quiz completed successfully!");
        console.log("✅ Quiz submitted successfully:", response.data);
        
        // Clear user data from localStorage
        localStorage.removeItem('lban_user_data');
        
        setIsCompleted(true);
        
        // Redirect to LBAN page after 3 seconds
        setTimeout(() => {
          router.push('/lban');
        }, 3000);
      } else {
        throw new Error("Unexpected response status");
      }
      
    } catch (error) {
      console.error("❌ Error submitting quiz:", error);
      
      if (error.response?.status === 409) {
        toast.error("Quiz already submitted for this email address.");
      } else if (error.response?.data?.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Show loading state while user data is being loaded
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white flex items-center justify-center px-4 pt-20 pb-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <Loader2 className="w-16 h-16 text-[#DC143C] mx-auto mb-4 animate-spin" />
            <h2 className="text-xl font-bold text-slate-900 mb-2">Loading Quiz...</h2>
            <p className="text-slate-600">
              Please wait while we prepare your personalized quiz.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show error state if no user data
  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white flex items-center justify-center px-4 pt-20 pb-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <BookOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-slate-900 mb-2">Access Required</h2>
            <p className="text-slate-600 mb-4">
              Please complete the form first to access the quiz.
            </p>
            <Button 
              onClick={() => router.push('/lban/form')}
              className="bg-[#DC143C] hover:bg-[#B00000] text-white font-semibold py-2 px-6 rounded-lg"
            >
              Go to Form
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white flex items-center justify-center px-4 pt-20 pb-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h2>
            <p className="text-slate-600 mb-4">
              Your responses will help us create a customized ebook tailored to your specific needs.
            </p>
            <p className="text-sm text-slate-500">
              Redirecting you back to the program page in 3 seconds...
            </p>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-[#DC143C] h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white flex items-center justify-center px-4 pt-20 pb-8">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#DC143C]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-slate-100/50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl w-full">
        {/* Main Quiz Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#DC143C] to-[#B00000] rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Leadership Assessment Quiz
            </h1>
            <p className="text-slate-600 leading-relaxed">
              These quiz questions will help us send you customized ebooks tailored to your hiring challenges.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-700">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-slate-500">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className="bg-[#DC143C] h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 leading-relaxed">
              {questions[currentQuestion].question}
            </h2>

            <RadioGroup
              value={answers[currentQuestion] || ""}
              onValueChange={handleAnswerChange}
              className="space-y-3"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-slate-200 hover:border-[#DC143C]/50 hover:bg-slate-50/50 transition-all duration-200">
                  <RadioGroupItem 
                    value={option} 
                    id={`option-${index}`}
                    className="text-[#DC143C] border-slate-300"
                  />
                  <Label 
                    htmlFor={`option-${index}`}
                    className="flex-1 text-slate-700 cursor-pointer font-medium"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-2 border-slate-300 text-slate-700 hover:border-[#DC143C] hover:text-[#DC143C]"
            >
              Previous
            </Button>

            {currentQuestion === questions.length - 1 ? (
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={!answers[currentQuestion] || isSubmitting}
                className="px-8 py-2 bg-[#DC143C] hover:bg-[#B00000] text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Quiz
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                className="px-6 py-2 bg-[#DC143C] hover:bg-[#B00000] text-white font-semibold"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Footer Note */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center leading-relaxed">
              Your responses are confidential and will only be used to personalize your ebook.
            </p>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default QuizPage;