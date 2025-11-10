"use client";
import React from "react";
import Link from "next/link";

const FAQ = () => {
  return (
    <div className="h-auto w-full">
      <div className="gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 sm:mt-4 px-2 sm:px-3 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold gsans text-[#0c0c0c]"
            style={{ fontFamily: 'ebgaramond, serif' }}
          >
            Frequently Asked Questions
          </h1>
          <p className="px-2 sm:px-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl pt-2 sm:pt-3 text-gray-800">
            Get your answers and insights by exploring our FAQ section!
          </p>
        </div>
        <div className="lg:col-span-3 mt-6 sm:mt-8 md:mt-10 lg:mt-20 px-2 sm:px-4 overflow-y-auto">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center sm:items-end justify-start mb-12 sm:mb-16 md:mb-20">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="w-full p-4 sm:p-5 md:p-6 flex max-w-5xl mx-auto flex-col bg-[#ececec]/60 h-auto rounded-2xl sm:rounded-3xl"
              >
                <div className="mb-3 sm:mb-4">
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl tracking-tight font-semibold text-[#0c0c0c] leading-snug sm:leading-normal">
                    {faq.question}
                  </h1>
                </div>
                <div className="mt-3 sm:mt-4">
                  {Array.isArray(faq.answer) ? (
                    <div className="tracking-tight text-xs sm:text-sm md:text-base lg:text-lg text-zinc-700 leading-relaxed">
                      <p className="mb-2">{faq.answer[0]}</p>
                      <ul className="mt-2 list-disc list-inside space-y-1 sm:space-y-1.5 pl-1">
                        {faq.answer[1].map((point, i) => (
                          <li key={i} className="mt-1">{point}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="tracking-tight text-xs sm:text-sm md:text-base lg:text-lg text-zinc-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative mt-8 sm:mt-6  px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-red-50 via-white to-red-50 border border-red-100 shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12 px-6 sm:px-10 lg:px-16 py-12 sm:py-14">
            <div className="flex items-center lg:items-start gap-4 sm:gap-6">
              <div className="flex-1 text-center lg:text-left">
                <h3
                  style={{ fontFamily: "ebgaramond, serif" }}
                  className="mt-3 text-3xl sm:text-4xl font-bold leading-tight text-black"
                >
                  Do you want to grow your Business 
                  <br />
                   aggressively by <span className="text-red-600">50-70% ?</span>
                </h3>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-4 w-full lg:w-auto">
              <Link
                href="https://www.surveymonkey.com/r/New_Edge"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-red-600"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                participate in survey
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const faqData = [
  {
    question: "How long is the survey?",
    answer: "About 5 minutes for eligibility. Then you'll receive the TriMetrix® HD link (45 minutes).",
  },
  {
    question: "What will I see in my results?",
    answer: "A clear view of your behavioral style, motivators, acumen, and 25 business competencies, with practical coaching pointers. (24 hours after completing the TriMetrix HD assessment).",
  },
  {
    question: "Is TriMetrix® HD trusted?",
    answer: "Yes. It's a validated, bias-free assessment suite that integrates four sciences and meets EEOC/OFCCP requirements.",
  },
  {
    question: "When is the Masterclass?",
    answer: [
      "Two sessions:",
      [
        "Scheduled for December 2025 and January 2026, for qualified participants who complete the assessment.",
      ],
    ],
  },
];

export default FAQ;
