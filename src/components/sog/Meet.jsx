'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon, CheckCircle2 } from "lucide-react";

const Meet = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  // deploy trigger

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Original Meet section commented out as requested */}
      {/*
      ... original meet code ...
      */}

      {/* New section from sog/frontend/src/components/ExpertGuideSection.js */}
      <section
        ref={sectionRef}
        className={`bg-[#FFE9E9] transition-all duration-700 ease-out mb-15 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-10 md:flex-row md:items-end md:justify-between">

          {/* Left content */}
          <div className="order-2 max-w-2xl space-y-5 text-left md:order-1">
            <h2 className="text-[36px] font-semibold leading-snug text-gray-900 md:text-[40px]">
              Meet Your Masterful
              <br />
              Thinking Expert Guide
            </h2>
            <p className="text-xl font-semibold text-[#E53935]">
              I&apos;m Rajesh Tedla
            </p>
            <p className="text-[15px] leading-relaxed text-gray-700">
              With over 39+ years of business excellence, I have partnered with
              entrepreneurs to achieve extraordinary growth and success, helping
              transform 1,420 businesses. As a former Senior Vice President at
              General Electric (GE) and a Stanford Entrepreneurship expert, I
              specialize in People, Process, and Strategy transformation,
              empowering business leaders to scale effectively, overcome
              challenges, and realize their full potential with my proven
              strategies.
            </p>
            <Link
              href="https://vrtmanagementgroup.com/rajesh-tedla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mb-6 cursor-pointer rounded-full bg-[#FF4B4B] px-12 py-3 text-base font-semibold text-white shadow-md shadow-[#FF4B4B]/40 hover:bg-[#E53935] transition-transform duration-300 hover:-translate-y-0.5">
                Know More About Rajesh Tedla
              </button>
            </Link>
          </div>

          {/* Right image with circle background, image clearly above circle edge */}
          <div className="order-1 relative h-[420px] w-full max-w-2xl md:order-2">
            <div className="absolute right-[0px] top-[40px] h-[360px] w-[360px] rounded-full bg-[#FFD6D6]" />
            <div className="relative z-10 flex h-full items-end justify-end">
              <div className="relative h-[600px] w-[360px] drop-shadow-[0_18px_40px_rgba(15,23,42,0.4)]">
                <Image
                  src="/about/rajesh_sir.png"
                  alt="Rajesh Tedla"
                  fill
                  className=" "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Meet;
