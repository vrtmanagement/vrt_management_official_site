"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CHALLENGES = [
  "misaligned hires",
  "slow execution",
  "conflict and confusion",
  "wasted time",
  "burnout",
  "stalled growth",
];

export default function EEWhySuccess() {
  return (
    <section
      className="relative w-full py-16 sm:py-20 font-sans overflow-hidden"
      style={{
        backgroundColor: "#0a0a0a",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Corner images from /ee_new/section4 */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none">
        <Image src="/ee_new/section4/topleft.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none">
        <Image src="/ee_new/section4/topright.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute -bottom-15 -left-15 w-32 h-32 sm:w-50 sm:h-50 pointer-events-none">
        <Image src="/ee_new/section4/bottomleft.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute -bottom-5 -right-5 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none">
        <Image src="/ee_new/section4/bottomright.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <p
              className="mb-2 mt-10 sm:mt-0 md:mt-20 lg:mt-0"
              style={{
                color: "white",
                fontSize: "25px",
                fontWeight: 600,
              }}
            >
              Why
            </p>
            <h2
              className="font-bold text-white leading-tight mb-6"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
              }}
            >
              Entrepreneurial 
              <br />
              Success feels hard
            </h2>
            <p
              className="text-white leading-relaxed mb-8"
              style={{
                fontSize: "17px",
                fontWeight: 400,
              }}
            >
              EntrepreneurExcellence<sup>©</sup> gives you the self-awareness, strategy, and
              tools to align your business around who you truly are not who you
              think you should be.
            </p>
            {/* Desktop button (keeps original position) */}
            <Link
              href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2026-03"
              className="hidden lg:inline-flex items-center justify-center font-semibold text-white bg-red-600 hover:bg-red-700 py-4 px-8 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 active:scale-[0.98]"
              style={{ fontSize: "16px" }}
            >
              Get free strategy session
            </Link>
          </div>

          {/* Right column */}
          <div>
            <h3
              className="font-bold text-white mb-4"
              style={{ fontSize: "20px" }}
            >
              Because Every Entrepreneur Is Wired Differently.
            </h3>
            <div
              className="text-white mb-6 space-y-1"
              style={{ fontSize: "16px", fontWeight: 400 }}
            >
              <p>some thrive in fast-paced innovation.</p>
              <p>some excel in structured execution.</p>
              <p>some lead with empathy.</p>
              <p>some lead with analysis.</p>
            </div>
            <h3
              className="font-bold text-white mb-4"
              style={{ fontSize: "20px" }}
            >
              But most founders build teams and systems without understanding
              their wiring, leading to:
            </h3>
            <ul
              className="text-white space-y-2"
              style={{ fontSize: "16px", fontWeight: 400 }}
            >
              {CHALLENGES.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-white flex-shrink-0">&gt;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile & tablet button at bottom */}
        <div className="mt-10 lg:mt-0 flex lg:hidden">
          <Link
            href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2026-03"
            className="inline-flex items-center justify-center font-semibold text-white bg-red-600 hover:bg-red-700 py-4 px-8 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 active:scale-[0.98]"
            style={{ fontSize: "16px" }}
          >
            Get free strategy session
          </Link>
        </div>
      </div>
    </section>
  );
}
