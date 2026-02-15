 'use client';

import React, { useState } from "react";

export default function HeroMembershipContent() {
  const [loading, setLoading] = React.useState(false);
  const [loadingType, setLoadingType] = React.useState(null);

  return (
      <div
      className="mb-6 h-screen lg:mb-8 relative -mx-6 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Subtle dark overlay so content stays readable on image */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      {/* Running line across the section border */}
      <div className="absolute -top-4 left-0 right-0 flex justify-center pointer-events-none">
        <div className="w-full max-w-6xl h-[2px] bg-red-500 opacity-80 rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center w-full space-y-6">
        {/* Vision 2030 */}
        <div className="space-y-4">
          <div className="text-3xl font-bold uppercase tracking-wider text-white/90">Our Vision — 2030</div>
          <p className="text-white max-w-4xl mx-auto text-2xl md:text-3xl leading-tight mb-4">
            By 2030, <span className="font-bold text-red-400 text-2xl md:text-3xl">Entrepreneur Growth Alliance (EGA)<sup className="align-super text-md">©</sup></span> will partner with{" "}
            <span className="font-semibold text-white">1,000 entrepreneurs and SMBs</span> to build scalable, resilient, high-value companies.
          </p>
          <p className="text-white max-w-4xl mx-auto text-xl md:text-2xl font-semibold">
            creating <span className="font-bold text-red-300 text-xl md:text-2xl">$1M+ in measurable financial value per business</span> and{" "}
            <span className="font-bold text-red-300 text-xl md:text-2xl">$1B+ in total value</span>.
          </p>
        </div>

        {/* Scale heading */}
        {/* <h1 className="font-bold text-white text-[34px] sm:text-[44px] md:text-[56px] leading-tight">
          Scale your business faster <span className="text-red-400 font-semibold">through EGA</span>
        </h1> */}

        {/* Mission card placed on top of the section background */}
        <div className="max-w-4xl mx-auto mb-8 relative z-10 w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/10">

            {/* Top accent line (small) */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>

            <div className="relative px-8 py-8 md:px-12 md:py-10">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-relaxed animated-mission space-y-2">
                <p className="m-0 text-4xl">
                  Through <span className="text-red-400 font-bold">EGA<sup className="align-super text-md">©</sup></span> we scale your business faster
                </p>
                <p className="m-0 text-4xl text-white/90">
                  by transforming the <span className="font-semibold text-white">People</span>, <span className="font-semibold text-white">Processes</span>, and <span className="font-semibold text-white">Strategy</span> holding you back.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex gap-4">
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
                window.open("https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2025-06", "_blank");
              }, 600);
            }}
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition"
          >
            <span className={`transition-opacity duration-200 ${loading && loadingType === "call" ? "opacity-30" : "opacity-100"}`}>
              Book a free strategy call with Raj
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

      {/* Animated growth chart at bottom-right over the image */}
      <svg className="absolute right-8 bottom-0 w-96 h-64  z-20 pointer-events-none" viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polyline points="10,120 60,80 120,95 180,50 240,30 300,12 380,6" stroke="#34D399" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" className="growth-line"/>
        <polyline points="10,120 60,80 120,95 180,50 240,30 300,12 380,6" stroke="rgba(52,211,153,0.22)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
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

