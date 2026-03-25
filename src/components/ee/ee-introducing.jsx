"use client";

import React from "react";
import Image from "next/image";

const FEATURES = [
  {
    title: "Personalized Leadership Blueprint",
    description: "Understand exactly how you work, think and lead.",
  },
  {
    title: "Scientific Psychometric Analysis",
    description: "Data-driven insights into your leadership style and team dynamics.",
  },
  {
    title: "Growth Operating System",
    description: "A repeatable framework to scale yourself and your team.",
  },
];

export default function EEIntroducing() {
  return (
    <section
      className="w-full py-16 sm:py-20 font-sans"
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Introducing + title (full width, centered, #FB0000) */}
        <div className="mb-10 lg:mb-12 text-center">
          <p
            className="mb-2"
            style={{
              color: "#FB0000",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            Introducing
          </p>
          <h2
            className="font-bold"
            style={{
              color: "#FB0000",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              lineHeight: 1.2,
            }}
          >
            Entrepreneur Excellence
            <sup className=" text-[0.6em]">©</sup>
          </h2>
        </div>

        {/* Mobile & tablet: images directly under headline, then text content */}
        <div className="block lg:hidden">
          <div className="flex flex-col gap-10">
            {/* Images */}
            <div className="relative">
              <div className="relative w-full aspect-[4/5] max-h-[520px] rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80">
                <Image
                  src="/ee_new/section3/main-image.png"
                  alt="Leadership and team performance program"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="absolute -right-2 sm:right-4 -bottom-9  w-[55%] sm:w-[50%] max-w-[280px] aspect-[4/3] rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-200/80 z-10">
                <Image
                  src="/ee_new/section3/above-image.png"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>

            {/* Text content */}
            <div>
              <p
                className="font-bold mb-6 leading-relaxed"
                style={{
                  color: "#000000",
                  fontSize: "24px",
                }}
              >
                A $2,000 premier leadership and team-performance program designed
                to give entrepreneurs a precise, personalized blueprint for:
              </p>

              <ul className="space-y-4 mb-8 flex flex-col">
                {FEATURES.map((item) => (
                  <li key={item.title} className="flex flex-col   max-w-md">
                    <div className="flex flex-row items-center  gap-2">
                      <span
                        className="flex-shrink-0"
                        style={{ color: "#FB0000", fontSize: "18px" }}
                      >
                        ✔
                      </span>
                      <p
                        className="font-bold"
                        style={{
                          color: "#000000",
                          fontSize: "17px",
                        }}
                      >
                        {item.title}
                      </p>
                    </div>
                    <p
                      className="mt-1 pl-0 sm:pl-6"
                      style={{
                        color: "#000000",
                        fontSize: "15px",
                        fontWeight: 400,
                      }}
                    >
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>

              <div
                className="rounded-lg py-4 px-5 max-w-md"
                style={{
                  backgroundColor: "#F7DADA",
                }}
              >
                <p
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: 400,
                  }}
                >
                  This is not generic leadership training. This is a scientific
                  blueprint.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: keep original side‑by‑side layout (text left, images right) */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left column - text content */}
          <div>
            <p
              className="font-bold mb-6 leading-relaxed"
              style={{
                color: "#000000",
                fontSize: "24px",
              }}
            >
              A $2,000 premier leadership and team-performance program designed to
              give entrepreneurs a precise, personalized blueprint for:
            </p>

            <ul className="space-y-4 mb-8 flex flex-col">
              {FEATURES.map((item) => (
                <li key={item.title} className="flex flex-col   max-w-md">
                  <div className="flex flex-row items-center  gap-2">
                    <span
                      className="flex-shrink-0"
                      style={{ color: "#FB0000", fontSize: "18px" }}
                    >
                      ✔
                    </span>
                    <p
                      className="font-bold"
                      style={{
                        color: "#000000",
                        fontSize: "17px",
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                  <p
                    className="mt-1 pl-0 sm:pl-6"
                    style={{
                      color: "#000000",
                      fontSize: "15px",
                      fontWeight: 400,
                    }}
                  >
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <div
              className="rounded-lg py-4 px-5 max-w-md"
              style={{
                backgroundColor: "#F7DADA",
              }}
            >
              <p
                style={{
                  color: "#000000",
                  fontSize: "15px",
                  fontWeight: 400,
                }}
              >
                This is not generic leadership training. This is a scientific
                blueprint.
              </p>
            </div>
          </div>

          {/* Right column - images */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] max-h-[520px] rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80">
              <Image
                src="/ee_new/section3/main-image.png"
                alt="Leadership and team performance program"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="absolute -right-2 sm:right-4 -bottom-9  w-[55%] sm:w-[50%] max-w-[280px] aspect-[4/3] rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-200/80 z-10">
              <Image
                src="/ee_new/section3/above-image.png"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
