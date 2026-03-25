// "use client";

// // ORIGINAL HERO SECTION (commented out per request)
// // ------------------------------------------------------------------------
// // The component below was the previous implementation. It's preserved here
// // as single-line comments so it won't interfere with parsing.
// //
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { ChevronDown } from "lucide-react";

// export default function HeroSection() {
//   const [showNotification, setShowNotification] = useState(true);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       image:"/home/hero-section/hero-section-img-1.png",// <-- use file from /public
//       eyebrow: "2026 Sustainability Guide",
//       titleLine1: "Are you ready",
//       titleLine2: "to become a successful entrepreneur",
//       titleLine3: "in 2026?",
//       cta: "READ MORE",
//     },
//     {
//       image:"/home/hero-section/hero-section-img-2.png",
//       eyebrow: "Growth Playbook",
//       titleLine1: "Scale with confidence",
//       titleLine2: "proven strategies for each stage",
//       titleLine3: "of your journey",
//       cta: "EXPLORE PLAYBOOK",
//     },
//     {
//       image:"/home/hero-section/hero-section-img-3.png",
//       eyebrow: "Founder Stories",
//       titleLine1: "Learn from leaders",
//       titleLine2: "who turned ideas into impact",
//       titleLine3: "and scaled sustainably",
//       cta: "READ STORIES",
//     },
//     {
//       image:"/home/hero-section/hero-section-img-4.png",
//       eyebrow: "Tools & Templates",
//       titleLine1: "Execute faster",
//       titleLine2: "with ready-to-use frameworks",
//       titleLine3: "and checklists",
//       cta: "BROWSE TOOLS",
//     },
//   ];

//   useEffect(() => {
//     const intervalMs = 3500; // 3.5 seconds per slide
//     const id = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, intervalMs);
//     return () => clearInterval(id);
//   }, [slides.length]);

//   return (
//     <section className="relative h-screen bg-neutral-900 text-white overflow-hidden font-sans">
//       {/* Notification Bar */}
//       {/* {showNotification && (
//         <div className="fixed top-0 left-0 right-0 bg-[#1a1a1a] z-50 animate-in fade-in slide-in-from-top-4 duration-500">
//           <div className="max-w-[1200px] mx-auto px-6">
//             <div className="flex items-center justify-between h-[52px]">
//               <p className="text-sm">Content added to saved items</p>
//               <div className="flex items-center space-x-6">
//                 <a
//                   href="#"
//                   className="bg-[#D22630] text-white text-[11px] font-bold px-3 py-1.5 rounded-[4px] tracking-wider"
//                 >
//                   SAVED ITEMS (0)
//                 </a>
//                 <button
//                   onClick={() => setShowNotification(false)}
//                   className="text-white text-[11px] font-bold tracking-[1.1px]"
//                 >
//                   CLOSE
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )} */}
//       {/* Slides */}
//       <div className="absolute inset-0 z-0">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.eyebrow + index}
//             className={`absolute inset-0 transition-opacity duration-700 ease-out ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//             aria-hidden={index !== currentIndex}
//           >
//             <Image
//               src={slide.image}
//               alt={slide.eyebrow}
//               fill
//               sizes="100vw"
//               priority={index === 0}
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-black/60" />
//           </div>
//         ))}
//       </div>

//       <div className="relative z-20 flex flex-col h-full">
//         <div className="flex-grow flex items-center">
//           <div className="w-full max-w-[1200px] mx-auto px-6">
//             <div className="max-w-2xl">
//               <p className="text-base font-normal tracking-[0.3em] uppercase mb-4">
//                 {slides[currentIndex].eyebrow}
//               </p>
//               <h1 className="font-bold text-[56px] leading-[1.1] text-white"
//               style={{ fontFamily: 'Merriweather, serif' }}
//                 >
//                 {slides[currentIndex].titleLine1}
//                 <br />
//                 {slides[currentIndex].titleLine2}
//                 <br />
//                 {slides[currentIndex].titleLine3}
//               </h1>
//               <a
//                 href="#"
//                 className="mt-8 inline-block text-neutral-300 text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors duration-300"
//               >
//                 {/* {slides[currentIndex].cta} <span aria-hidden="true">→</span> */}
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* <div className="w-full bg-black/80 backdrop-blur-sm"> 
//           <div className="max-w-[1200px] mx-auto px-6">
//             <div className="grid grid-cols-[1fr_auto_1fr] items-center h-20">
//               <div></div>
//               <nav className="flex justify-center space-x-12 h-full">
//                 <a
//                   href="#"
//                   className="flex items-center text-sm font-semibold tracking-wider text-neutral-300 hover:text-white transition-colors"
//                 >
//                   Luxury Report
//                 </a>
//                 <div className="flex items-center border-t-2 border-[#D22630]">
//                   <a
//                     href="#"
//                     className="text-sm font-semibold tracking-wider text-white"
//                   >
//                     Sustainability Guide
//                   </a>
//                 </div>
//                 <a
//                   href="#"
//                   className="flex items-center text-sm font-semibold tracking-wider text-neutral-300 hover:text-white transition-colors"
//                 >
//                   Innovation Report
//                 </a>
//                 <a
//                   href="#"
//                   className="flex items-center text-sm font-semibold tracking-wider text-neutral-300 hover:text-white transition-colors"
//                 >
//                   AI Search
//                 </a>
//               </nav>
//               <div className="flex justify-end">
//                 <div className="flex items-center space-x-2 text-sm font-semibold tracking-wider text-neutral-300 cursor-pointer">
//                   <span>Scroll</span>
//                   <div className="w-8 h-8 rounded-full border border-neutral-400 flex items-center justify-center">
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         {/* Slide indicators */}
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
//           {slides.map((_, i) => (
//             <span
//               key={`dot-${i}`}
//               className={`h-2 w-2 rounded-full transition-colors duration-300 ${
//                 i === currentIndex ? "bg-red-500" : "bg-white/40"
//               }`}
//               aria-label={`Go to slide ${i + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import LoadingButton from "@/components/ui/LoadingButton"

export default function HeroSection() {
  const [activeBtn, setActiveBtn] = React.useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "/home/hero-section/hero-main.png",
    "/home/hero-section/hero-section-img-1.png",
    "/home/hero-section/hero-section-img-2.png",
    "/home/hero-section/hero-section-img-3.png",
    "/home/hero-section/hero-section-img-4.png",
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "770px", height: "auto" }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {slides.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={image}
              alt="VRT Management Group event"
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
        ))}
        {/* Dark blue/purple gradient overlay — heavier on the left, lighter on right */}
        <div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(270.51deg, rgba(0, 0, 0, 0) 1.23%, rgba(3, 21, 114, 0.7) 62.26%)",
  }}
/>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col justify-center h-full" style={{ minHeight: "770px" }}>
        <div className="max-w-[892px] lg:-ml-6">
          {/* Main Heading */}
          <h1
            className="text-white font-extrabold leading-[1.08] mb-5"
            style={{
              fontFamily: "'Inter', 'Regular'",
              fontSize: "clamp(28px, 4vw, 60px)",
              letterSpacing: "-0.01em",
            }}
          >
            You Built Something Real.
            <br />
            Now It's Time to Build It to 
            <br />
            Last, to Scale, and to Lead.
          </h1>

          {/* Body Text */}
          <p
            className="text-white mb-8"
            style={{
              fontFamily: "Inter, Regular",
              fontSize: "clamp(13px, 1.2vw, 19px)",
              lineHeight: "1.65",
              maxWidth: "800px",
              maxHeight: "158",
              opacity: 0.93,
            }}
          >
           For 18 years, VRT Management Group has done one thing exceptionally well: helping 
           entrepreneur-led companies with 20 to 500 employees break through growth ceilings  not with motivation, but with systems, leadership, and disciplined execution. We specialize in the businesses where decisions hit hardest, resources are finite, and the cost of standing still is real.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
  {/* Primary */}
  <LoadingButton
  href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2026-03"
  disabled={activeBtn !== null}
  onClick={() => setActiveBtn("primary")}
  className="inline-flex cursor-pointer items-center justify-center font-semibold transition-all duration-300 hover:opacity-90 hover:brightness-110 active:scale-[0.98]"
  style={{
    width: "450px",
    height: "55px",
    padding: "10px",
    gap: "10px",
    borderRadius: "16px",
    background: "linear-gradient(90deg, #FF0000 0%, #FF6262 100%)",
    color: "#FFFFFF",
    fontFamily: "Inter",
    letterSpacing: "0.02em",
  }}
>
  Book Your Free 45-Minute Growth Strategy Call
</LoadingButton>

  {/* Secondary */}
  <div
  className="inline-flex items-center justify-center overflow-hidden text-black font-semibold transition-all duration-300 bg-white/90 hover:bg-[#ddd] active:scale-[0.98]"
  style={{
    width: "257px",
    height: "55px",
    borderRadius: "16px",
    // background: "linear-gradient(90deg, #FF0000 0%, #FF6262 100%)",
    fontFamily: "Inter",
    letterSpacing: "0.02em",
  }}
>
  {/* Static Text */}
  <div className="px-3 text-[16px] font-semibold whitespace-nowrap">
    Explore
  </div>

  {/* EGA */}
  <LoadingButton
    href="/ega"
    className="h-full px-2 flex cursor-pointer items-center justify-center font-semibold hover:bg-white/20 transition-all duration-200"
  >
    EGA
  </LoadingButton>

  {/* Dot Separator */}
  <div className="px-1 text-black/80">·</div>

  {/* EE */}
  <LoadingButton
    href="/ee"
    className="h-full px-2 flex items-center cursor-pointer justify-center font-semibold hover:bg-white/20 transition-all duration-200"
  >
    EE
  </LoadingButton>
</div>
</div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center space-x-2">
        {slides.map((_, i) => (
          <span
            key={`hero-dot-${i}`}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              i === currentIndex ? "bg-red-500" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}