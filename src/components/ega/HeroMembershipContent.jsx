 'use client';

import React, { useState } from "react";

export default function HeroMembershipContent() {
  const [loading, setLoading] = React.useState(false);
  const [loadingType, setLoadingType] = React.useState(null);

  return (
    <div
      className="min-h-[95vh] relative flex items-center justify-center -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-black hero-membership-bg-large"
      style={{
        backgroundColor: "#fff7f7",
      }}
    >
      {/* Subtle light overlay so content stays readable on image */}
      <div className="absolute inset-0 bg-white/40 z-0" />
      {/* Running line across the section border */}
      <div className="absolute -top-4 left-0 right-0 flex justify-center pointer-events-none">
        <div className="w-full max-w-6xl h-[2px] bg-red-500 opacity-80 rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-full text-center w-full space-y-6 px-2 sm:px-4">
        <div className="space-y-4 max-w-4xl mx-auto">
          <p className="text-black max-w-4xl mx-auto text-lg sm:text-2xl md:text-3xl leading-tight mb-4">
            The{" "}
            <span className="font-bold text-red-600 text-2xl md:text-3xl">
              Entrepreneur Growth Alliance<sup className="align-super text-md">©</sup>  (EGA<sup className="align-super text-sm">©</sup> ) Workshop
            </span>{" "}
            helps Entrepreneurs and SMB leaders with{" "}
            <span className="font-bold text-black">20–500 employee companies</span>{" "}
            to break through growth ceilings, build scalable systems, and lead companies by{" "}
            <span className="font-bold text-red-600">transforming their people, process, and strategy</span>.
          </p>
        </div>

        {/* Scale heading */}
        {/* <h1 className="font-bold text-white text-[34px] sm:text-[44px] md:text-[56px] leading-tight">
          Scale your business faster <span className="text-red-400 font-semibold">through EGA</span>
        </h1> */}

        {/* Mission card placed on top of the section background */}
        <div className="max-w-4xl mx-auto mb-8 relative z-10 w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-md border border-black/10">

            {/* Top accent line (small) */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>

            <div className="relative px-6 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10">
              <div className="text-lg sm:text-2xl md:text-3xl font-semibold text-black leading-relaxed animated-mission space-y-2">
                <p className="m-0 text-2xl sm:text-xl md:text-2xl">
                  If you’re serious about scaling faster in this{" "}
                  <span className="font-bold text-red-600"> VUCA Environment</span> then schedule a 45-minute strategy call with <span className="font-bold text-black">Rajesh Tedla</span> to see if the workshop is right for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center items-center">
          <a
            href="/ega/registration-form"
            onClick={(e) => {
              e.preventDefault();
              setLoading(true);
              setLoadingType("register");
              setTimeout(() => {
                window.location.href = "/ega/registration-form";
              }, 600);
            }}
            className={`relative inline-flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded-lg font-semibold shadow hover:bg-red-600 transition disabled:opacity-70 disabled:cursor-not-allowed`}
            aria-disabled={false}
          >
            <span className={`transition-opacity duration-200 ${loading && loadingType === "register" ? "opacity-30" : "opacity-100"}`}>
              Register
            </span>
            <span className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${loading && loadingType === "register" ? "opacity-100" : "opacity-0"}`}>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            </span>
          </a>
          <a
            href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2025-06"
            onClick={(e) => {
              e.preventDefault();
              setLoading(true);
              setLoadingType("call");
              setTimeout(() => {
                // navigate in the same tab so the current page will unload and the spinner stops
                window.location.href = "https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2025-06";
              }, 600);
            }}
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-black rounded-lg font-semibold border border-gray-300 hover:bg-white/20 transition"
          >
            <span className={`transition-opacity duration-200 ${loading && loadingType === "call" ? "opacity-30" : "opacity-100"}`}>
              Set up a complimentary strategy call
            </span>
            <span className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${loading && loadingType === "call" ? "opacity-100" : "opacity-0"}`}>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Animated growth chart at bottom-right over the image (visible on laptop only) */}
      {/*
      <svg className="hidden lg:block absolute right-8 bottom-0 w-96 h-64 z-20 pointer-events-none" viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polyline points="10,120 60,80 120,95 180,50 240,30 300,12 380,6" stroke="#34D399" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" className="growth-line"/>
        <polyline points="10,120 60,80 120,95 180,50 240,30 300,12 380,6" stroke="rgba(52,211,153,0.22)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
      */}
    </div>
  );
}

/* Inline animations for mission paragraph and numbers */
/* Placed outside the component return to keep JSX clean */
const _styles = `
  .animated-mission {
    opacity: 0;
    transform: translateY(8px);
    animation: fadeUp 700ms ease-out forwards;
    animation-delay: 200ms;
  }
  .animated-number {
    display: inline-block;
    transform-origin: center;
    opacity: 0;
    transform: scale(0.92);
    animation: popIn 500ms cubic-bezier(.2,.9,.2,1) forwards;
  }
  .animated-number.delay-0 { animation-delay: 550ms; }
  .animated-number.delay-1 { animation-delay: 800ms; }
  .animated-number.delay-2 { animation-delay: 1050ms; }
  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes popIn {
    0% { opacity: 0; transform: scale(0.92); }
    60% { opacity: 1; transform: scale(1.06); }
    100% { opacity: 1; transform: scale(1); }
  }
  .growth-line {
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation: drawLine 6s linear infinite;
  }
  @media (min-width: 1024px) {
    .hero-membership-bg-large {
      background-image: url('/ega/image-.jpeg'), url('/ega/Image.png');
      background-size: 90% auto, cover;
      background-position: center center, center;
      background-repeat: no-repeat, no-repeat;
    }
  }
  @keyframes drawLine {
    0% { stroke-dashoffset: 1200; opacity: 0.5; }
    50% { stroke-dashoffset: 0; opacity: 1; }
    100% { stroke-dashoffset: -1200; opacity: 0.5; }
  }
`;

if (typeof window !== 'undefined') {
  const id = 'hero-membership-content-animations';
  if (!document.getElementById(id)) {
    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = _styles;
    document.head.appendChild(style);
  }
}

