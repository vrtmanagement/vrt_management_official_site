"use client";

import React, { useState } from "react";

const FAQ_ITEMS = [
  {
    id: 1,
    num: "01",
    question: "How long does the program take?",
    answer:
      "The assessment takes 30-45 minutes to complete. You'll receive your 75-page report within 48 hours. The masterclass is self-paced and most entrepreneurs complete it within 4-6 weeks while implementing the strategies.",
  },
  {
    id: 2,
    num: "02",
    question: "Do I need to involve my team?",
    answer:
      "Not initially. The program starts with you understanding your leadership profile. However, we provide tools to share insights with your team and assess them later",
  },
  {
    id: 3,
    num: "03",
    question: "I'm early-stage. Is this too advanced?",
    answer:
      "If you have at least 1-2 employees or contractors and are looking to build systems for growth, this is perfect timing. The earlier you understand your leadership style, the better your foundation.",
  },
  {
    id: 4,
    num: "04",
    question: "How accurate is the psychometric data?",
    answer:
      "TriMetrix® HD is a scientifically validated assessment used by thousands of organizations worldwide. It combines three proven methodologies (DISC, Motivators, and Competencies) for comprehensive accuracy.",
  },
  {
    id: 5,
    num: "05",
    question: "What tools and resources are included?",
    answer:
      "You get the full 75-page TriMetrix® report, benchmark comparison, GAP analysis, 8-module masterclass with worksheets, 90-day action plan, hiring frameworks, delegation templates, and communication guides.",
  },
];

export default function EEFaq() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="w-full py-16 sm:py-20 font-sans"
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2
          className="text-center font-bold text-[#000000] mb-10 sm:mb-12"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
          }}
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ list - same light pink bg per item, question + answer in one block */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden transition-colors duration-200"
                style={{
                  backgroundColor: "#FBEBF0",
                }}
              >
                {/* One row: number | content (question + answer) | icon - answer aligns with question, never under icon */}
                <div
                  className="w-full grid grid-cols-[auto_1fr_auto] gap-4 sm:gap-5 items-start text-left py-5 px-5 sm:py-6 sm:px-6 border-0 bg-transparent"
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
                  {/* Plus (closed) or X (open) icon - answer stays left of this */}
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5 cursor-pointer"
                    style={{
                      backgroundColor: isOpen ? "#000000" : "#e5e7eb",
                      color: isOpen ? "#ffffff" : "#000000",
                    }}
                    aria-label={isOpen ? "Collapse answer" : "Expand answer"}
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
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
