"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function EEHeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] md:h-auto lg:h-screen flex items-center overflow-hidden pt-6 md:pt-0 lg:pt-10">
      {/* Background image - buildings/skyscrapers */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ee_new/section1/bg-image.png"
          alt="EntrepreneurExcellence workshop background"
          fill
          className="object-cover object-[70%_center] sm:object-center"
          priority
          sizes="100vw"
        />
      </div>


      {/* Reddish-purple gradient overlay - exact from image */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
           "linear-gradient(252deg, rgba(165,37,61,0.35) 0%, rgba(121,24,60,0.30) 40%, rgba(69,15,48,0.28) 100%)"
        }}
      />

      {/* People image - bottom right, crisp, no blur (above overlay) */}
      {/* <div className="absolute bottom-0 right-0 top-0 w-full lg:w-[50%] z-[10] flex items-end justify-end pointer-events-none">
        <div className="relative h-[75%] min-h-[420px] w-full max-w-[700px]">
          <Image
            src="/EE/section1/image1.png"
            alt="Business professionals"
            fill
            className="object-contain object-right object-bottom select-none"
            priority
            quality={95}
            sizes="(max-width: 1024px) 0px, 50vw"
          />
        </div>
      </div> */}

      {/* Left content - exact font styles and sizes from image */}
      <div className="relative z-[10] max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 md:py-0 lg:py-28">
        <div className="max-w-5xl md:max-w-5xl max-w-[92%]">
          {/* EntrepreneurExcellence© - Inter 800, 40px, white */}
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 4vw, 40px)",
              lineHeight: "100%",
              letterSpacing: 0,
            }}
          >
            EntrepreneurExcellence<sup className="align-super text-[0.55em] opacity-100">©</sup>
          </h1>
          {false && <Check />}

          {/* A Psychometric Workshop For Entrepreneurial Success - Impact 400, 80px, 90px line-height */}
          {/* <h2
            className="text-white mb-10"
            style={{
              fontFamily: "Impact, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(30px, 6vw, 80px)",
              lineHeight: "clamp(42px, 7vw, 90px)",
              letterSpacing: 0,
            }}
          >
            <span className="block whitespace-nowrap">A Psychometric Workshop</span>
            <span className="block whitespace-nowrap">For Entrepreneurial Success</span>
          </h2> */}

          {/* Checklist - white, Inter regular, smaller than heading */}
          {/* <ul
            className="flex flex-wrap gap-x-8 gap-y-3 text-white mb-10"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(15px, 2.4vw, 19px)",
              lineHeight: 1.4,
            }}
          >
            <li className="flex items-center gap-2 text-xl">
              <Check className="shrink-0 w-8 h-8 stroke-[2.5]" />
              Lead with clarity
            </li>
            <li className="flex items-center gap-2 text-xl">
              <Check className="shrink-0 w-8 h-8 stroke-[2.5]" />
              Build aligned teams
            </li>
            <li className="flex items-center gap-2 text-xl">
              <Check className="shrink-0 w-8 h-8 stroke-[2.5]" />
              Scale confidently
            </li>
          </ul> */}

          {/* Buttons - same hover effect as other EE page buttons */}
          {/* <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/ega/registration-form"
              className="inline-flex items-center justify-center font-bold text-white px-14 py-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 active:scale-[0.98]"
              style={{
                background: "linear-gradient(90deg, #c80506 0%, #e85c2a 100%)",
                fontFamily: "Inter, sans-serif",
                fontSize: 17,
              }}
            >
              Enroll now
            </Link>
            <Link
              href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2026-03"
              className="inline-flex items-center justify-center font-bold px-14 py-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-gray-300 active:scale-[0.98]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 17,
                backgroundColor: "#E5E5E5",
                color: "#1a1a1a",
              }}
            >
              Book strategy call
            </Link>
          </div> */}

          {/* Updated content (keep old content above commented) */}
          {/* Research-Driven Psychometric Masterclass */}
            <p
              className="text-white mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(18px, 2.2vw, 25px)",
                lineHeight: "clamp(28px, 3vw, 40.5px)",
                letterSpacing: 0,
              maxWidth: "min(1063px, 100%)",
              }}
            >
              A Research-Driven Psychometric Masterclass That Reveals the Leadership Traits Required to
              Scale Your Business Beyond the Growth Ceiling.
            </p>

            {/* EntrepreneurExcellence  */}
          <p
            className="text-white/90 mb-10"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(15px, 1.8vw, 23px)",
              lineHeight: "clamp(22px, 2.4vw, 31.5px)",
              letterSpacing: 0,
              width: "min(890px, 100%)",
            }}
          >
            EntrepreneurExcellence<sup className="align-super text-[0.55em] opacity-100">©</sup> (EE<sup className="align-super text-[0.55em] opacity-100">©</sup>)
            is a research driven psychometric workshop that measures the behaviors, motivations, and
            leadership competencies that separate struggling founders from high growth entrepreneurs
            helping you scale smarter, stronger, and more intentionally.
          </p>

          {/* Unlock My Entrepreneurial Excellence - link  */}
          <div className="flex flex-wrap gap-4 mb-10">
          <Link
             href="/ega/registration-form"
             className="inline-flex items-center justify-center font-bold text-white px-6 py-3 sm:px-14 sm:py-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 active:scale-[0.98]"
              style={{
                 background: "linear-gradient(90deg, #FF0000 0%, #DA7500 100%)",
                 fontFamily: "Inter, sans-serif",
                 fontSize: "clamp(12px, 3.5vw, 18px)",
                   }}
                  >
              Unlock My Entrepreneurial Excellence<sup className="align-super text-[0.55em] opacity-100">©</sup>
            </Link>
          </div>

          {/* Trusted by - smaller white Inter */}
          <p
            className="text-white text-2xl"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2.8vw, 25px)",
              lineHeight: 1.4,
            }}
          >
            Trusted by 1,5000+ Entrepreneurs
          </p>
        </div>
      </div>
    </section>
  );
}
