"use client";
import React from "react";

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
