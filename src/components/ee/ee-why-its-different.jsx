"use client";

import React from "react";
import Image from "next/image";

const LEFT_CARD_ITEMS = [
  "Complete growth system",
  "Practical implementation tools",
  "Personalized to your profile",
  "Science-backed psychometric analysis",
  "75-page detailed assessment",
];

const RIGHT_CARD_ITEMS = [
  "Generic training modules",
  "Motivational content only",
  "One-size-fits-all approach",
  "No data or assessment",
];

const STATS = [
  { value: "1,424+", label: "entrepreneurs served" },
  { value: "95%", label: "clarity improvement" },
  { value: "40%", label: "productivity gain" },
];

export default function EEWhyItsDifferent() {
  return (
    <section
      className="w-full font-sans"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Top section - Why It's Different + comparison cards */}
      <div className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center font-bold mb-10 sm:mb-12"
            style={{
              color: "#FB0000",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            }}
          >
            Why It&apos;s Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left card - EntrepreneurExcellence */}
            <div className="relative rounded-xl bg-white p-6 sm:p-8 shadow-lg border border-gray-100 overflow-hidden transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-gray-200">
              <h3
                className="font-bold mb-5"
                style={{ color: "#FB0000", fontSize: "1.40rem" }}
              >
                EntrepreneurExcellence©
              </h3>
              <ul className="space-y-3">
                {LEFT_CARD_ITEMS.map((item) => (
                  <li key={item} className="flex gap-2 items-center">
                    <span
                      className="flex-shrink-0"
                      style={{ color: "#FB0000", fontSize: "1.20rem" }}
                    >
                      →
                    </span>
                    <span
                      style={{
                        color: "#1f2937",
                        fontSize: "1rem",
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Bottom ring icon - bottom-right */}
              <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 opacity-40 pointer-events-none">
                <Image
                  src="/ee_new/section7/icon1.png"
                  alt=""
                  fill
                  className="object-contain object-bottom-right"
                  sizes="112px"
                />
              </div>
            </div>

            {/* Right card - Generic Training */}
            <div className="relative rounded-xl bg-white p-6 sm:p-8 shadow-lg border border-gray-100 overflow-hidden transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-gray-200">
              <h3
                className="font-bold mb-5"
                style={{ color: "#FB0000", fontSize: "1.40rem" }}
              >
                Generic Training
              </h3>
              <ul className="space-y-3">
                {RIGHT_CARD_ITEMS.map((item) => (
                  <li key={item} className="flex gap-2 items-center">
                    <span
                      className="flex-shrink-0"
                      style={{ color: "#FB0000", fontSize: "1.20rem" }}
                    >
                      →
                    </span>
                    <span
                      style={{
                        color: "#1f2937",
                        fontSize: "1rem",
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Bottom ring icon - bottom-right */}
              <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 opacity-40 pointer-events-none">
                <Image
                  src="/ee_new/section7/icon1.png"
                  alt=""
                  fill
                  className="object-contain object-bottom-right"
                  sizes="112px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - stats on video-gif background */}
      <div className="relative min-h-[280px] sm:min-h-[320px] w-4/5 mx-auto rounded-2xl flex items-center justify-center overflow-hidden">
        {/* Video-gif as background */}
        <div className="absolute inset-0 z-0 w-340 ">
          <Image
            src="/ee_new/section7/video-gif.gif"
            alt=""
            fill
            className="object-cover object-[60%_50%]"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50 z-[1]" />
        </div>

        {/* Stats overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-white font-bold mb-1"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-white/90"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
