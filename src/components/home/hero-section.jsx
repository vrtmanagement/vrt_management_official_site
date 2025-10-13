"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [showNotification, setShowNotification] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5c1003fe-ab22-47a7-b234-401ed78318df-bain-com/assets/images/sustainabilityguide25_hero_1920x1080-2.jpg?",
      eyebrow: "2025 Sustainability Guide",
      titleLine1: "Are you ready",
      titleLine2: "to become a successful entrepreneur",
      titleLine3: "in 2025?",
      cta: "READ MORE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529336953121-c9e3a9e62fd3?q=80&w=1920&auto=format&fit=crop",
      eyebrow: "Growth Playbook",
      titleLine1: "Scale with confidence",
      titleLine2: "proven strategies for each stage",
      titleLine3: "of your journey",
      cta: "EXPLORE PLAYBOOK",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop",
      eyebrow: "Founder Stories",
      titleLine1: "Learn from leaders",
      titleLine2: "who turned ideas into impact",
      titleLine3: "and scaled sustainably",
      cta: "READ STORIES",
    },
    {
      image:
        "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1920&auto=format&fit=crop",
      eyebrow: "Tools & Templates",
      titleLine1: "Execute faster",
      titleLine2: "with ready-to-use frameworks",
      titleLine3: "and checklists",
      cta: "BROWSE TOOLS",
    },
  ];

  useEffect(() => {
    const intervalMs = 3500; // 3.5 seconds per slide
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length]);

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
      {/* Slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.eyebrow + index}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={slide.image}
              alt={slide.eyebrow}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      <div className="relative z-20 flex flex-col h-full">
        <div className="flex-grow flex items-center">
          <div className="w-full max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-base font-normal tracking-[0.3em] uppercase mb-4">
                {slides[currentIndex].eyebrow}
              </p>
              <h1 className="font-bold text-[56px] leading-[1.1] text-white">
                {slides[currentIndex].titleLine1}
                <br />
                {slides[currentIndex].titleLine2}
                <br />
                {slides[currentIndex].titleLine3}
              </h1>
              <a
                href="#"
                className="mt-8 inline-block text-neutral-300 text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors duration-300"
              >
                {slides[currentIndex].cta} <span aria-hidden="true">→</span>
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

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
          {slides.map((_, i) => (
            <span
              key={`dot-${i}`}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                i === currentIndex ? "bg-red-500" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}