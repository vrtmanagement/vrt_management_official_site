"use client";

import React from "react";
import { Plus, ArrowRight } from "lucide-react";

const ServicesSection = ({
  title = "Why Entrepreneur Growth Alliance™ Program?",
  services = [
    {
      title: "Comprehensive Growth Mindset",
      description:
        "The EGA™ program emphasizes the importance of adopting a growth mindset, using the Change or Die principle to ensure entrepreneurs are mentally prepared for scaling challenges.",
    },
    {
      title: "Leadership Development",
      description:
        "The program hones leadership skills crucial for driving business success through the Five Levels of Leadership and Entrepreneur Excellence - CEO Responsibilities & Mindset.",
    },
    {
      title: "Strategic Planning and Execution",
      description:
        " Entrepreneurs can develop and execute effective strategic plans (Growth As A Process) with tools like the One-page strategic plan, SER, SPR, OKRs (Objectives and Key Result areas), and a detailed Strategy Execution Calendar",
    },
    {
      title: "Personalized Assessments and Debriefs",
      description:
        "The program includes in-depth personal assessments, such as the TriMetrix HD Personal Report and Emotional Intelligence Assessment, which provide valuable insights into personal and team strengths and areas for improvement",
    },
    {
      title: "Systematic Growth Process",
      description:
        " Utilizing The Seven Stages of Growth for Scaling Your Business Profitably, the program provides a structured approach to scaling and ensures sustainable growth.",
    },
    {
      title: "Dynamic Communication and Reporting",
      description:
        " Focus on effective communication and team dynamics through tools like Leadership Team Report Debrief and project navigation for seamless initiative execution.",
    },
    {
      title: "Sales and Marketing Mastery",
      description:
        "The program offers a comprehensive Marketing and Sales playbook and TSI - Target Selling Methodology, equipping entrepreneurs with the strategies to drive revenue growth.",
    },
    {
      title: "Vision, Purpose, and Values Alignment",
      description:
        " EGA™ ensures that all employees are aligned with the company's vision, purpose, values, accountabilities, and norms, fostering a cohesive and motivated workforce.",
    }
  ],
}) => {
  return (
    <section
      id="services"
      className="mt-40 mb-20 scroll-mt-32 px-6 md:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Side */}
        <div className="md:col-span-4 flex flex-col items-start">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-red-600 mb-4">
            Program Benefits
          </span>
          <h2 className="md:text-5xl text-3xl md:text-4xl font-semibold leading-tight text-stone-900 mb-4"
          style={{ fontFamily: "ebgaramond, serif" }}
          >
            {title}
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-md">
            Explore the core pillars of the Entrepreneur Growth Alliance™
            program designed to help you scale with clarity, confidence, and
            a proven roadmap.
          </p>
        </div>

        {/* Right Side: Services */}
        <div className="md:col-span-8 flex flex-col">
          {services.map((service, index) => (
            <div
              key={index}
              className="group py-5 border-b border-stone-300 cursor-pointer overflow-hidden transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="md:text-2xl text-xl font-semibold text-stone-500 group-hover:text-stone-900 transition-colors duration-300">
                  {service.title}
                </span>
                <div className="w-9 h-9 flex items-center justify-center rounded-full border border-stone-200 group-hover:border-stone-900 group-hover:bg-stone-900 transition-all duration-300">
                  <Plus
                    className="w-5 h-5 text-stone-400 group-hover:text-white group-hover:rotate-90 transition-all duration-300"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                <div className="overflow-hidden">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 max-w-2xl pt-3 pb-2">
                    <p className="leading-relaxed text-base text-stone-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

