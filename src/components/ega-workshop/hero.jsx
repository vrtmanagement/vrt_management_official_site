"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HERO_HEADING_LINES = [
  "Entrepreneur Growth Alliance™",
  "Workshop",
];

export function Hero() {
  const [displayedLines, setDisplayedLines] = useState(["", ""]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  // Typing animation for the main heading (similar to newsletter page)
  useEffect(() => {
    if (currentLineIndex >= HERO_HEADING_LINES.length) return;

    const currentText = HERO_HEADING_LINES[currentLineIndex];
    const currentDisplayed = displayedLines[currentLineIndex];

    if (currentDisplayed.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLineIndex] = currentText.substring(
            0,
            currentDisplayed.length + 1
          );
          return newLines;
        });
      }, 100);

      return () => clearTimeout(timeout);
    } else if (currentLineIndex < HERO_HEADING_LINES.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [displayedLines, currentLineIndex]);
  return (
    <section className="relative w-full mt-12 sm:mt-16">
      {/* Upper Hero Section with Red Background */}
      <div className="relative w-full bg-red-600">
        <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-14">
          {/* Left Side - Content (60% width) */}
          <div className="relative z-10 w-full md:w-[55%] flex flex-col justify-center order-2 md:order-1">

            {/* Main Title - Typing animation (two lines) */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 tracking-tight min-h-[100px] sm:min-h-[120px] md:min-h-[150px] lg:min-h-[170px]"
              style={{ fontFamily: "Merriweather, serif" }}
            >
              {/* Invisible full text to reserve space and prevent layout shift */}
              <span className="opacity-0 block">
                <span className="block">
                  {HERO_HEADING_LINES[0]}
                </span>
                <span className="block">
                  {HERO_HEADING_LINES[1]}
                </span>
              </span>

              {/* Absolutely positioned animated text on top */}
              <span className="absolute inset-0 flex flex-col justify-center">
                <span className="block text-white">
                  {displayedLines[0]}
                  {currentLineIndex === 0 &&
                    displayedLines[0].length < HERO_HEADING_LINES[0].length && (
                      <span className="cursor-blink text-white">|</span>
                    )}
                </span>
                <span className="block text-white">
                  {displayedLines[1]}
                  {currentLineIndex === 1 &&
                    displayedLines[1].length < HERO_HEADING_LINES[1].length && (
                      <span className="cursor-blink text-white">|</span>
                    )}
                </span>
              </span>
            </motion.h1>

            {/* Speakers Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <p className="text-white text-sm sm:text-base font-semibold mb-3 sm:mb-4">
                Speakers:
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <p className="text-white text-sm sm:text-base md:text-lg font-bold mb-1">
                    Rajesh Tedla
                  </p>
                  <p className="text-red-100 text-xs sm:text-sm md:text-base italic leading-relaxed">
                    Founder & CEO of VRT Management Group, LLC. Stanford LBAN Mentor with 36+ years of experience guiding entrepreneurs to sustainable scalable growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button - White background on red */}
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold text-sm sm:text-base md:text-lg tracking-wide hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] w-full sm:w-fit"
            >
              JOIN NOW!
            </motion.button>
          </div>

          {/* Right Side - Logo Image (40% width) */}
          <div className="relative w-full md:w-[45%] flex items-center justify-center order-1 md:order-2 mb-4 sm:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[4/3] bg-white rounded-lg shadow-2xl p-4 sm:p-6 md:p-8"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/ega/egalogo.png"
                  alt="Entrepreneur Growth Alliance™"
                  fill
                  priority
                  className="object-contain object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Curvy Wave Separator */}
        <div className="relative w-full overflow-hidden h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px]">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,180 
                 C120,150 240,100 360,110 
                 C480,120 600,80 720,95 
                 C840,110 960,75 1080,90 
                 C1200,105 1320,85 1380,95 
                 C1410,100 1425,105 1440,100 
                 L1440,180 
                 L0,180 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Section - White background */}
      <div className="relative w-full bg-white">
        <div
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 md:mb-32 animate-on-scroll reveal-active pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6 md:px-8"
          data-delay="100"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic text-gray-900 tracking-tight font-playfair mb-4 sm:mb-6 md:mb-8 leading-tight"
            style={{ fontFamily: "ebgaramond, serif" }}
          >
            Simple Systems.
            <span className="text-red-600 font-playfair tracking-tight italic">
              {" "}
              Lasting Change.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed italic text-gray-700 tracking-tight font-playfair">
            The Entrepreneur Growth Alliance™ workshop provides comprehensive tools and frameworks to help you build a business that grows with clarity, leads with purpose, and scales with systems. No complex theories. No empty promises. Just proven methodologies that transform your business from the inside out.
          </p>
        </div>
      </div>

      {/* Cursor blink animation for heading typing effect */}
      <style jsx>{`
        @keyframes cursor-blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }

        .cursor-blink {
          animation: cursor-blink 1s infinite;
        }
      `}</style>
    </section>
  );
}
