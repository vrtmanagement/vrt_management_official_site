"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Rocket, Users, Target } from "lucide-react";

const OverviewSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  return (
    <section
      ref={sectionRef}
      id="overview"
      className="bg-white py-16 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className={`flex items-center gap-4 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>

          <div>
            <h2 className="font-bold text-[36px] md:text-[42px] leading-[1.2] text-black tracking-tight"
            style={{ fontFamily: 'Lora, serif' }}
            >
              Workshop Overview
            </h2>
            <div className="mt-3 h-1.5 w-24 bg-red-600 rounded-full"></div>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Content Section */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-[1.7] text-black" 
                style={{ fontFamily: 'Inter, serif' }}
              >
                What you've just downloaded is just one piece of a much bigger system being used by 1420     businesses like you.
              </p>

              <div className="relative p-6 bg-white rounded-lg border border-red-200 border-l-4 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.35)]">
                <p className="text-lg md:text-xl leading-[1.7] text-black pl-4">
                  It’s called <span className="font-semibold text-red-600">EGA™, Entrepreneur Growth Alliance.</span>
                </p>
              </div>

              <p className="text-lg md:text-xl leading-[1.7] text-black"
              style={{ fontFamily: 'Inter, serif' }}>

                EGA is a workshop where you’ll learn and apply the proven and practical tools, frameworks, and systems that help you to grow your business faster.
              </p>
            </div>

          </div>

          {/* Image Section */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-lg shadow-xl shadow-black/10 ring-1 ring-black/10">
                <Image
                  src="/lban/teach-pic.jpg"
                  alt="A lecture scene with a professor addressing attendees in a classroom"
                  width={475}
                  height={356}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;