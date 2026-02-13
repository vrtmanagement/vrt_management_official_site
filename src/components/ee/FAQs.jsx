
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="h-auto w-full">
      <div className="gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 sm:mt-4 px-2 sm:px-3 text-center">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600"
            style={{ fontFamily: "ebgaramond, serif" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="px-2 sm:px-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl pt-2 sm:pt-3 text-gray-800">
            Get your answers and insights by exploring our FAQ section!
          </p>
        </div>

        <div className="lg:col-span-3 mt-6 sm:mt-8 md:mt-10 lg:mt-20 px-2 sm:px-4">
          <div className="flex flex-col gap-4 items-center mb-16">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="w-full max-w-5xl mx-auto">
                  <div className="bg-[#fdecec] rounded-2xl shadow-md overflow-hidden transition-all duration-300">
                    {/* Question */}
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                    >
                      <h2
                        className="text-xl md:text-2xl lg:text-3xl font-semibold text-black"
                        style={{ fontFamily: "ebgaramond, serif" }}
                      >
                        {index + 1}, {faq.question}
                      </h2>

                      <span
                        className={`text-2xl transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`px-6 md:px-8 pb-6 md:pb-8 transition-all duration-300 ${
                        isOpen
                          ? "max-h-[600px] opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      {Array.isArray(faq.answer) ? (
                        <div className="tracking-tight text-sm md:text-base text-zinc-700 leading-relaxed">
                          <p className="mb-2">{faq.answer[0]}</p>
                          <ul className="mt-2 list-disc list-inside space-y-1 pl-4">
                            {faq.answer[1].map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="tracking-tight text-sm md:text-base text-zinc-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section — unchanged */}
     <section className="relative w-full mb-12">
  {/* Image height controlled here */}
  <div className="relative w-full aspect-[16/6] sm:aspect-[16/5] lg:aspect-[16/4]">

    {/* Background Image */}
    <Image
      src="/EE/section6/img4.jpeg"
      alt="CTA background"
      fill
      priority
      className="object-cover"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between gap-8 px-6 sm:px-10 lg:px-20">
      
      <div className="text-center lg:text-left max-w-3xl">
        <h3
          style={{ fontFamily: "ebgaramond, serif" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
        >
          Do you want to grow your Business <br />
          aggressively by{" "}
          <span className="text-red-400">50–70%?</span>
        </h3>
      </div>

      <Link
        href="https://www.surveymonkey.com/r/New_Edge"
        className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-red-600 hover:text-white"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        participate in survey
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
          ↗
        </span>
      </Link>

    </div>
  </div>
</section>


    </div>
  );
};

const faqData = [
  {
    question: "How long is the survey?",
    answer:
      "About 5 minutes for eligibility. Then you'll receive the TriMetrix® HD link (45 minutes).",
  },
  {
    question: "What will I see in my results?",
    answer:
      "A clear view of your behavioral style, motivators, acumen, and 25 business competencies, with practical coaching pointers. (24 hours after completing the TriMetrix® HD assessment).",
  },
  {
    question: "Is TriMetrix® HD trusted?",
    answer:
      "Yes. It's a validated, bias-free assessment suite that integrates four sciences and meets EEOC/OFCCP requirements.",
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
