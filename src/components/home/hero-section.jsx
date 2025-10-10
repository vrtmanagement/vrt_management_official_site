"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [showNotification, setShowNotification] = useState(true);

  const backgroundImage =
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5c1003fe-ab22-47a7-b234-401ed78318df-bain-com/assets/images/sustainabilityguide25_hero_1920x1080-2.jpg?";

  return (
    <section className="relative h-screen bg-neutral-900 text-white overflow-hidden font-sans">
      {/* Notification Bar */}
      {/* {showNotification && (
        <div className="fixed top-0 left-0 right-0 bg-[#1a1a1a] z-50 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-center justify-between h-[52px]">
              <p className="text-sm">Content added to saved items</p>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="bg-[#D22630] text-white text-[11px] font-bold px-3 py-1.5 rounded-[4px] tracking-wider"
                >
                  SAVED ITEMS (0)
                </a>
                <button
                  onClick={() => setShowNotification(false)}
                  className="text-white text-[11px] font-bold tracking-[1.1px]"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}

      <Image
        src={backgroundImage}
        alt="Atmospheric lake landscape with a boat at sunset"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 flex flex-col h-full">
        <div className="flex-grow flex items-center">
          <div className="w-full max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-base font-normal tracking-[0.3em] uppercase mb-4">
                2025 Sustainability Guide
              </p>
              <h1 className="font-bold text-[56px] leading-[1.1] text-white">
                Are you ready
                <br />
                to become a successful entrepreneur
                <br />
                in 2025?
              </h1>
              <a
                href="#"
                className="mt-8 inline-block text-neutral-300 text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors duration-300"
              >
                READ MORE <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="w-full bg-black/80 backdrop-blur-sm">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center h-20">
              <div></div>
              <nav className="flex justify-center space-x-12 h-full">
                <a
                  href="#"
                  className="flex items-center text-sm font-semibold tracking-wider text-neutral-300 hover:text-white transition-colors"
                >
                  Luxury Report
                </a>
                <div className="flex items-center border-t-2 border-[#D22630]">
                  <a
                    href="#"
                    className="text-sm font-semibold tracking-wider text-white"
                  >
                    Sustainability Guide
                  </a>
                </div>
                <a
                  href="#"
                  className="flex items-center text-sm font-semibold tracking-wider text-neutral-300 hover:text-white transition-colors"
                >
                  Innovation Report
                </a>
                <a
                  href="#"
                  className="flex items-center text-sm font-semibold tracking-wider text-neutral-300 hover:text-white transition-colors"
                >
                  AI Search
                </a>
              </nav>
              <div className="flex justify-end">
                <div className="flex items-center space-x-2 text-sm font-semibold tracking-wider text-neutral-300 cursor-pointer">
                  <span>Scroll</span>
                  <div className="w-8 h-8 rounded-full border border-neutral-400 flex items-center justify-center">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}