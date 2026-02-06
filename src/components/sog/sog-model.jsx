'use client';

import React, { useEffect, useRef, useState } from "react";
import { sogData } from "./sog-data";
import SogCard from "./Sog-card";

// New stages data from sog/frontend/src/components/GrowthStagesStrip.js
const stages = [
  { number: "01", label: "Start Up", employees: "1 - 10", gradient: "from-[#FF6B6B] to-[#E74C3C]" },
  { number: "02", label: "Ramp Up", employees: "11 - 19", gradient: "from-[#A070FF] to-[#8E44AD]" },
  { number: "03", label: "Delegation", employees: "20 - 34", gradient: "from-[#FFC107] to-[#F39C12]" },
  { number: "04", label: "Professional", employees: "35 - 57", gradient: "from-[#4CAF50] to-[#27AE60]" },
  { number: "05", label: "Integration", employees: "58 - 95", gradient: "from-[#9C27B0] to-[#673AB7]" },
  { number: "06", label: "Strategic", employees: "96 - 160", gradient: "from-[#2196F3] to-[#3498DB]" },
  { number: "07", label: "Visionary", employees: "161 - 500", gradient: "from-[#A1887F] to-[#795548]" },
];
{/* deploy trigger */}


const SogModel = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

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
    <div ref={sectionRef}>
      {/* Original SOG model grid commented out as requested */}
      {/*
      <div className="flex flex-col justify-center items-center h-auto py-20 bg-white">
        <h1
          className="lg:text-5xl text-[#0c0c0c] text-3xl gsans font-semibold text-center"
          style={{ fontFamily: "Lora, serif" }}
        >
          The 7 Stages of Growth Model
        </h1>
        <p
          className="mt-6 px-2 text-zinc-800 text-md lg:text-xl small text-center"
          style={{ fontFamily: "Inter, serif" }}
        >
          The 7 Stages of Growth Model is a framework for understanding how
          companies grow and the challenges they face as they grow.
        </p>
        <div className="grid  px-4 lg:px-10 mt-20 gap-12 w-full lg:grid-cols-7 ">
          {sogData.map((item) => (
            <SogCard
              key={item.id}
              color={item.color}
              height={item.height}
              textSize={item.textSize}
              zone={item.zone}
              id={item.id}
              title={item.title}
              stage={item.stage}
              employeeCount={item.employeeCount}
            />
          ))}
        </div>
      </div>
      */}

      {/* New section from sog/frontend/src/components/GrowthStagesStrip.js */}
      <section
        className={`bg-white py-14 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-3 text-center text-2xl font-semibold text-[#E74C3C] md:text-[28px]">
            The 7 Stages of Growth Model
          </h2>
          <p className="mb-10 text-center text-sm leading-relaxed text-gray-700 md:text-[15px]">
            The 7 Stages of Growth Model is a framework for understanding how
            companies grow and the challenges they face as they grow.
          </p>
          <div className="overflow-x-auto pb-3">
            <div className="flex min-w-[800px] items-stretch justify-between gap-6">
              {stages.map((stage, idx) => (
                <div
                  key={stage.number}
                  className="flex flex-1 flex-col items-center gap-2 transition-all duration-500 ease-out"
                  style={{
                    transitionDelay: inView ? `${idx * 70}ms` : "0ms",
                    transform: inView ? "translateY(0)" : "translateY(12px)",
                    opacity: inView ? 1 : 0,
                  }}
                >
                  {/* Circle with gradient */}
                  <div className="relative">
                    <div
                      className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${stage.gradient} text-center text-white shadow-lg`}
                      style={{
                        border: "3px solid rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <div>
                        <div className="text-xl font-bold">{stage.number}</div>
                        <div className="text-[10px] font-medium tracking-wide">
                          Stage
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stage info */}
                  <div className="mt-2 text-center">
                    <div className="text-sm font-semibold text-gray-900">
                      {stage.label}
                    </div>
                    <div className="mt-1 text-xs text-gray-600">
                      Employees
                    </div>
                    <div className="text-xs font-medium text-gray-800">
                      {stage.employees}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SogModel;
