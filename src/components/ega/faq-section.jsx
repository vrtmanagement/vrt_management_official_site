"use client";

import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    num: "01",
    question: "Is the strategy call really complementary?",
    answer: "Yes. It's a working session designed to deliver clarity and next steps.",
  },
  {
    id: 2,
    num: "02",
    question: "What if I'm not sure what the real problem is?",
    answer:
      "That's exactly what we diagnose and then prioritize based on what matters most.",
  },
  {
    id: 3,
    num: "03",
    question: "Do you work with any industry?",
    answer:
      "VRT focuses on USA based SMBs and entrepreneurs. If you're scaling complexity in people, operations, and execution, this applies to you.",
  },
  {
    id: 4,
    num: "04",
    question: "What is included in the workshop?",
    answer:
      "Comprehensive modules on team building, process optimization, leadership, strategic planning, talent management, and company culture, plus expert assessments and personalized mentorship.",
  },
  {
    id: 5,
    num: "05",
    question: (
      <span>
        Will you give me a plan even if I don't join EGA
        <span className="align-super text-xs ml-0.5">©</span>?
      </span>
    ),
    answer:
      "You'll leave the call with clearer priorities and next actions either way.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="w-full py-16 sm:py-20 font-sans relative z-30"
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center font-bold text-[#000000] mb-10 sm:mb-12"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden transition-colors duration-200"
                style={{
                  backgroundColor: "#FBEBF0",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full grid grid-cols-[auto_1fr_auto] gap-4 sm:gap-5 items-start text-left py-5 px-5 sm:py-6 sm:px-6 cursor-pointer border-0 bg-transparent"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  <span
                    className="flex-shrink-0 font-bold pt-0.5"
                    style={{
                      color: "#FB0000",
                      fontSize: "1.25rem",
                    }}
                  >
                    {item.num}
                  </span>
                  <div className="min-w-0 pr-2 flex flex-col gap-2">
                    <span
                      className="font-bold text-[#000000]"
                      style={{ fontSize: "1.125rem" }}
                    >
                      {item.question}
                    </span>
                    {isOpen && (
                      <p
                        className="text-[#1f2937] mt-1"
                        style={{
                          fontSize: "1.0625rem",
                          fontWeight: 400,
                          lineHeight: 1.6,
                        }}
                      >
                        {item.answer}
                      </p>
                    )}
                  </div>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5"
                    style={{
                      backgroundColor: isOpen ? "#000000" : "#e5e7eb",
                      color: isOpen ? "#ffffff" : "#000000",
                    }}
                  >
                    {isOpen ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M2 2l10 10M12 2L2 12" />
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M2 7h10M7 2v10" />
                      </svg>
                    )}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
