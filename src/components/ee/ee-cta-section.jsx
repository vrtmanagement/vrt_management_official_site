"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function EECTASection() {
  return (
    <section
      className="relative w-full py-16 sm:py-20 overflow-hidden font-sans"
      style={{
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ee_new/section7/cta-bg.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 z-[1]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading - two lines */}
        <h2
          className="text-white font-bold leading-tight mb-4"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
          }}
        >
          Stop Leading by Instinct.
          <br />
          Start Leading with a Blueprint.
        </h2>

        {/* Description */}
        <p
          className="text-white mb-8 max-w-2xl mx-auto"
          style={{
            fontSize: "1.125rem",
            fontWeight: 400,
            lineHeight: 1.5,
            opacity: 0.95,
          }}
        >
          Get your complete leadership assessment, personalized growth plan, and
          implementation system.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link
            href="/ega/registration-form"
            className="inline-flex items-center justify-center font-bold px-12 py-4 rounded-lg bg-white text-red-600 hover:bg-gray-100 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 active:scale-[0.98]"
            style={{ fontSize: "1rem" }}
          >
            Enroll now
          </Link>
          <Link
            href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2026-03"
            className="inline-flex items-center justify-center font-bold px-12 py-4 rounded-lg bg-transparent text-white border-2 border-white hover:bg-white/10 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-[0.98]"
            style={{ fontSize: "1rem" }}
          >
            Book strategy call
          </Link>
        </div>

        {/* Footnote */}
        <p
          className="text-white"
          style={{
            fontSize: "0.875rem",
            fontWeight: 400,
            opacity: 0.9,
          }}
        >
          Limited onboarding slots available
        </p>
      </div>
    </section>
  );
}
