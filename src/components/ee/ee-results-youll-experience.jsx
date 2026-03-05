"use client";

import React from "react";
import Image from "next/image";

const CARDS = [
  {
    id: 1,
    icon: "/ee_new/section6/icon1.png",
    title: "Faster Decisions",
    description: "Make Better Decisions Faster",
  },
  {
    id: 2,
    icon: "/ee_new/section6/icon2.png",
    title: "Less Stress",
    description: "Experience Less Stress And More Clarity",
  },
  {
    id: 3,
    icon: "/ee_new/section6/icon3.png",
    title: "Stronger Team",
    description: "Build A Stronger, More Aligned Team",
  },
  {
    id: 4,
    icon: "/ee_new/section6/icon4.png",
    title: "Scalable Systems",
    description: "Scale Confidently And Sustainably",
  },
  {
    id: 5,
    icon: "/ee_new/section6/icon5.png",
    title: "Clear Leadership",
    description: "Know Exactly Who You Are As A Leader",
  },
  {
    id: 6,
    icon: "/ee_new/section6/icon6.png",
    title: "Reduced Chaos",
    description: "Reduce Conflict, Confusion, And Operational Chaos",
  },
  {
    id: 7,
    icon: "/ee_new/section6/icon7.png",
    title: "Better Hiring",
    description: "Hire People Who Complement Your Strengths",
  },
  {
    id: 8,
    icon: "/ee_new/section6/icon8.png",
    title: "Increased Productivity",
    description: "Communicate Clearly And Influence Effectively",
  },
];

export default function EEResultsYoullExperience() {
  return (
    <section className="relative w-full py-16 sm:py-20 overflow-hidden font-sans">
      {/* Background image - dark city skyline */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ee_new/section6/bg-image.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-50 bg-black/10 z-[1]" />
      </div>

      {/* Top-right decorative image - concentric arcs */}
      <div className="absolute -top-45 -right-10 w-full max-w-md h-80 sm:max-w-lg sm:h-96 z-[2] pointer-events-none">
        <Image
          src="/ee_new/section6/topright.png"
          alt=""
          fill
          className="object-contain object-top-right opacity-60"
          sizes="500px"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <h2
          className="text-white font-bold text-center mb-12 sm:mb-14"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontFamily: "var(--font-sans)",
          }}
        >
          The Results You&apos;ll Experience
        </h2>

        {/* Cards grid - 2 rows x 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="group rounded-xl p-5 sm:p-6 border border-white/20 bg-white/10 backdrop-blur-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10 hover:bg-white/15 hover:border-white/30"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-4">
                <Image
                  src={card.icon}
                  alt=""
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  sizes="48px"
                />
              </div>
              <h3
                className="text-white font-bold mb-2"
                style={{ fontSize: "1.25rem" }}
              >
                {card.title}
              </h3>
              <p
                className="text-white/90"
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
