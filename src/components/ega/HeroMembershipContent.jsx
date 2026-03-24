 'use client';

import React, { useState, useEffect } from "react";

export default function HeroMembershipContent() {
  const [loading, setLoading] = React.useState(false);
  const [loadingType, setLoadingType] = React.useState(null);

  useEffect(() => {
    const handlePageShow = () => {
      setLoading(false);
      setLoadingType(null);
    };
  
    window.addEventListener("pageshow", handlePageShow);
  
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <div className="h-[95vh] flex items-center justify-center w-screen relative hero-membership-bg-large left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Red gradient overlay on top of background image */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#f53838]/90 via-[#f53838]/80 to-[#5a001f]/95 z-0" /> */}
      {/* Running line across the section border */}
  

      <div className="relative z-10 flex flex-col items-center justify-center min-h-full text-center w-full space-y-8 px-2 sm:px-4">
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* <p className="max-w-4xl mx-auto text-2xl sm:text-3xl md:text-[32px] leading-snug font-semibold text-white">
            The{" "}
            <span className="font-extrabold text-white">
              Entrepreneur Growth Alliance<sup className="align-super text-md">©</sup> (EGA
              <sup className="align-super text-sm">©</sup> ) Workshop
            </span>{" "}
            helps Entrepreneurs and SMB leaders with{" "}
            <span className="font-extrabold text-white">20–500 employee companies</span> to break
            through growth ceilings, build scalable systems, and lead companies by{" "}
            <span className="font-extrabold text-white">
              transforming their people, process, and strategy.
            </span>
          </p> */}
                          <p className="max-w-4xl mx-auto text-2xl sm:text-3xl md:text-[32px] leading-snug font-bold text-black">
                    <span className="font-extrabold text-red-500">
                    The{" "} Entrepreneur Growth Alliance
                      <sup className=" text-md">©</sup> 
                    </span>{" "}
                    (EGA
                      <sup className=" text-md">©</sup>)
                      Workshop
                    helps entrepreneurs and SMB leaders of{" "}
                    <span className="font-extrabold text-black">
                      20–500 employee companies
                    </span>{" "}
                    overcome growth barriers, build scalable systems, and strengthen their{" "}
                    <span className="font-extrabold text-red-500">
                      people, processes, and strategy.
                    </span>
                  </p>
                          </div>

        {/* Scale heading */}
        {/* <h1 className="font-bold text-white text-[34px] sm:text-[44px] md:text-[56px] leading-tight">
          Scale your business faster <span className="text-red-400 font-semibold">through EGA</span>
        </h1> */}

        {/* Mission card placed on top of the section background */}
        <div className="max-w-4xl mx-auto mb-8 relative z-10 w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.45)] bg-gradient-to-br from-white/15 via-white/10 to-white/5 border border-white/25 backdrop-blur-md">
            {/* Top accent line (small) */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-40 h-[3px] bg-gradient-to-r from-[#ff7b7b] via-[#ff4b4b] to-[#ffaf7b] rounded-full" />

            <div className="relative px-6 py-7 sm:px-10 sm:py-9 md:px-12 md:py-10">
              <div className="text-base sm:text-lg md:text-xl font-bold text-black leading-relaxed animated-mission">
                <p className="m-0">
                  If you’re serious about scaling faster in this
                  <span className="font-extrabold text-black"> VUCA Environment</span> then schedule a
                  45-minute strategy call with{" "}
                  <span className="font-extrabold text-black">Rajesh Tedla</span> to see if the workshop
                  is right for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center items-center mt-3">
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
            disabled={loading}
            className={`relative inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold shadow-[0_12px_25px_rgba(0,0,0,0.35)] bg-gradient-to-r from-[#ff4b4b] via-[#ff3333] to-[#ff7b7b] text-white hover:brightness-110 transition disabled:opacity-70 disabled:cursor-not-allowed`}
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
            disabled={loading}
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold border border-white/70 bg-white/50 text-black hover:bg-white/20 transition shadow-[0_12px_25px_rgba(0,0,0,0.25)]"
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

      {/* Curved bottom edge to blend into next white section (curve opening upward) */}
      {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-white rounded-b-[50%]" /> */}
      {/* U-shaped curved bottom */}
{/* <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
  <svg
    className="relative block w-full h-[120px]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0 C360,120 1080,120 1440,0 L1440,120 L0,120 Z"
      className="fill-white"
    ></path>
  </svg>
</div> */}

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
  .hero-membership-bg-large {
   background-image: url(/ega/ega-bg.png);
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
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
    style.innerHTML = _styles
    document.head.appendChild(style);
  }
}

