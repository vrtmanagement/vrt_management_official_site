'use client';

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();
  const whyRef = useRef(null);
  const [whyInView, setWhyInView] = useState(false);
  {/* deploy trigger */}


  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Reveal "Why Entrepreneurs" section on scroll
  useEffect(() => {
    if (!whyRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(whyRef.current);
    return () => observer.disconnect();
  }, []);

  // Reuse the navigation behavior of the original "Take Your Assessment" link
  const handleTakeAssessment = () => {
    router.push("/stages-of-growth-form");
  };

  // Left sliding side cards are rendered conditionally (lg+)

  return (
    <>
      {/* Original section commented out as requested, preserving the
          "Take Your Assessment" button and its structure */}
      {/*
      ... original hero section ...
      */}

      {/* New section from sog/frontend/src/components/HeroSection.js */}
      <section className="relative min-h-[700px] overflow-hidden transition-all duration-700 ease-out">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/background.png"
            alt="Business team background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Global dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Blur effect: starts from left, goes up to 50%, then fades out smoothly */}
        <div
          className="absolute inset-y-0 left-0 w-[50%]"
          style={{
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            maskImage:
              "linear-gradient(to right, black 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 40%, transparent 100%)",
          }}
        />

        {/* Additional dark gradient for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 50%, transparent 60%)",
          }}
        />

        <div className="relative mx-auto flex max-w-7xl items-center px-6 py-20 min-h-[700px]">
          <div className="max-w-2xl space-y-6 text-white transition-all duration-700 ease-out hover:translate-y-[-4px]">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
              What Stage Is Your Business in Right Now?
            </h1>
            <p className="text-lg leading-relaxed text-white/90">
              VRT Management partners with entrepreneurs and organizations to
              build clarity, structure, and scalable growth through proven
              management frameworks.
            </p>
            <button
              className="cursor-pointer rounded-lg bg-[#DC2626] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-black/40 transition-all duration-300 hover:bg-[#B91C1C] hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 active:translate-y-0"
              onClick={handleTakeAssessment}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* About section copied from sog/frontend/src/components/AboutSection.js */}
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:flex-row md:items-start">
          {/* Left Section - Composite Image */}
          <div className="relative w-full md:w-1/2 transition-transform duration-500 ease-out hover:-translate-y-1">
            {/* Main rounded rectangular container */}
            <div className="relative h-[400px] w-full overflow-visible">
              {/* Base image - aboutUs_1 (man in suit) - smaller size with border radius */}
              <div className="absolute inset-0 scale-90 overflow-hidden rounded-3xl">
                <Image
                  src="/about/aboutUs_1.png"
                  alt="Professional business portrait"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Overlay image - aboutUs_2 positioned to align with first image's right edge at bottom -30 with top border radius */}
              <div
                className="absolute bottom-[-30px] h-[60%] w-[50%] overflow-hidden"
                style={{
                  right: "5%",
                  borderTopLeftRadius: "1.5rem",
                  borderTopRightRadius: "1.5rem",
                  borderBottomLeftRadius: "1.5rem",
                  borderBottomRightRadius: "1.5rem",
                }}
              >
                <Image
                  src="/about/aboutUs_2.png"
                  alt="Business growth and teamwork overlay"
                  fill
                  className="object-contain object-right-bottom"
                  style={{
                    mixBlendMode: "normal",
                    borderTopLeftRadius: "1.5rem",
                    borderTopRightRadius: "1.5rem",
                    borderBottomLeftRadius: "1.5rem",
                    borderBottomRightRadius: "1.5rem",
                  }}
                />
              </div>

              {/* Decorative dots pattern inside image section */}
              <div
                className="absolute"
                style={{
                  left: "10%",
                  bottom: "-8%",
                }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-gray-300"
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-gray-300"
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-gray-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="w-full space-y-5 md:w-1/2 md:pl-8">
            <h3 className="text-base font-bold text-gray-900">About Us</h3>
            <h2 className="text-3xl font-bold leading-tight text-[#DC2626] md:text-4xl">
              Trusted Management for Growth &amp; Governance
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-800">
              <p>
                VRT Management Group &amp; Business is a professional organization
                focused on delivering reliable management and operational
                solutions for institutions and businesses. We specialize in
                structured administration, process optimization, and responsible
                governance.
              </p>
              <p>
                Our approach blends experience, integrity, and modern business
                practices to help organizations operate smoothly and grow
                sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "Why Entrepreneurs" section with scroll-in animation */}
      <section
        ref={whyRef}
        className={`bg-white py-16 transition-all duration-700 ease-out ${
          whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-2xl font-semibold leading-snug text-neutral-900 md:text-[28px]">
            Why Do Some Entrepreneurs Succeed
            <br />
            While Others Struggle?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Lack of Clear Strategy",
                body: "Many entrepreneurs start with passion but without a clear roadmap. Successful entrepreneurs follow structured strategies instead of guesswork.",
                icon: "/section3/target.png",
              },
              {
                title: "Poor Decision-Making",
                body: "Struggling businesses often react emotionally. Successful entrepreneurs rely on data, insights, and expert guidance.",
                icon: "/section3/idea.png",
              },
              {
                title: "Weak Systems & Processes",
                body: "Without proper systems, businesses become chaotic. Strong processes help successful entrepreneurs scale.",
                icon: "/section3/system.png",
              },
              {
                title: "Limited Financial Planning",
                body: "Cash flow issues and poor resource allocation are common reasons for failure. Successful entrepreneurs plan finances.",
                icon: "/section3/wealth.png",
              },
              {
                title: "Fear of Change",
                body: "Markets evolve constantly. Entrepreneurs who resist change struggle, while those who adapt grow.",
                icon: "/section3/cycle.png",
              },
              {
                title: "No Expert Support",
                body: "Trying to do everything alone leads to burnout. Successful entrepreneurs seek mentors, consultants, and structured frameworks.",
                icon: "/section3/maintainance.png",
              },
              {
                title: "Inconsistent Execution",
                body: "Ideas don't create success—execution does. Consistency separates success from struggle.",
                icon: "/section3/consistancy.png",
              },
              {
                title: "Ineffective Leadership",
                body: "Leadership gaps create confusion. Clear direction builds confident teams and results.",
                icon: "/section3/leadership.png",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-500 ease-out hover:shadow-[0_18px_36px_rgba(220,38,38,0.18)] hover:-translate-y-1.5"
                style={{
                  transitionDelay: whyInView ? `${idx * 60}ms` : "0ms",
                  transform: whyInView ? "translateY(0)" : "translateY(12px)",
                  opacity: whyInView ? 1 : 0,
                }}
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ff8888] transition-all duration-300 group-hover:bg-[#ff7070] group-hover:scale-110">
                  <div className="relative h-8 w-8">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="mb-2 text-[15px] font-semibold text-[#DC2626] transition-colors duration-300 group-hover:text-[#B91C1C]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;