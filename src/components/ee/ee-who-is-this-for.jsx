"use client";

import React from "react";
import Image from "next/image";

const BULLET_ITEMS = [
  "Owners Tired Of Firefighting And Chaos",
  "Founders Of Small And Mid-Sized Businesses",
  "Entrepreneurs Stuck At A Plateau",
  "Leaders Preparing For High Growth",
  "Operators Transitioning To Strategic Leadership",
  "CEOs Who Want Stronger Teams And Better Alignment",
];

export default function EEWhoIsThisFor() {
  return (
    <section
      className="w-full py-16 sm:py-20 font-sans"
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top heading - centered, two lines */}
        <div className="text-center mb-10 sm:mb-12">
          <h2
            className="font-bold text-[#FB0000] leading-tight"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            }}
          >
            Who Is This Program For?
          </h2>
        
        </div>

        {/* Mobile & tablet: image directly under headline, then content */}
        <div className="block lg:hidden">
          <div className="flex flex-col gap-8 items-center">
          <div className="relative w-full aspect-[3/4] max-h-[350px] rounded-xl overflow-hidden mx-auto">
              <Image
                src="/ee_new/section7/img1.png"
                alt="Entrepreneur at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="w-full">
              <p
                className="font-bold mb-6"
                style={{
                  color: "#FB0000",
                  fontSize: "1.50rem",
                }}
              >
                EntrepreneurExcellence<sup>©</sup> Is Ideal For:
              </p>

              <ul className="space-y-3 mb-8">
                {BULLET_ITEMS.map((item) => (
                  <li key={item} className="flex gap-3 items-center">
                    <span
                      className="flex-shrink-0"
                      style={{ color: "#FB0000", fontSize: "1.155rem" }}
                    >
                      ✔
                    </span>
                    <span
                      style={{
                        color: "#000000",
                        fontSize: "1.155rem",
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Highlight box - light reddish-pink bg, rounded corners */}
              <div
                className="rounded-lg py-5 px-6"
                style={{
                  backgroundColor: "#F7DADA",
                }}
              >
                <p
                  className="font-medium"
                  style={{
                    color: "#1f2937",
                    fontSize: "1.15rem",
                    lineHeight: 1.5,
                  }}
                >
                  If Your Business Depends Too Much On You, This Program Will
                  Transform How You Lead.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: preserve original two-column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left - text content */}
          <div>
            <p
              className="font-bold mb-6"
              style={{
                color: "#FB0000",
                fontSize: "1.50rem",
              }}
            >
              EntrepreneurExcellence<sup>©</sup> Is Ideal For:
            </p>

            <ul className="space-y-3 mb-8">
              {BULLET_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 items-center">
                  <span
                    className="flex-shrink-0"
                    style={{ color: "#FB0000", fontSize: "1.155rem" }}
                  >
                    ✔
                  </span>
                  <span
                    style={{
                      color: "#000000",
                      fontSize: "1.155rem",
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Highlight box - light reddish-pink bg, rounded corners */}
            <div
              className="rounded-lg py-5 px-6"
              style={{
                backgroundColor: "#F7DADA",
              }}
            >
              <p
                className="font-medium"
                style={{
                  color: "#1f2937",
                  fontSize: "1.15rem",
                  lineHeight: 1.5,
                }}
              >
                If Your Business Depends Too Much On You, This Program Will
                Transform How You Lead.
              </p>
            </div>
          </div>

          {/* Right - image */}
          <div className="relative w-full aspect-[3/4] max-h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/ee_new/section7/img1.png"
              alt="Entrepreneur at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
