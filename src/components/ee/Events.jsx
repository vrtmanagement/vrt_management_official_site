"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Monitor, Target, Download, Users, Brain, ArrowRight, ChevronRight } from "lucide-react";
import TTI from "./tti";

export default function Events() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  const learnItems = [
    {
      icon: Brain,
      title: "Success Formula",
      text: "Which combinations of behavior + motivation + acumen + competencies most strongly correlate with scaling success",
    },
    {
      icon: ArrowRight,
      title: "Gap Analysis",
      text: "Which gaps predict stall points and how founders can address them with targeted habits and team design",
    },
   {
  icon: Target,
  title: "Actionable Blueprint",
  text: (
    <>
      A clear, teachable EntrepreneurExcellence<sup>©</sup> blueprint that founders can apply immediately
    </>
  ),
},

  ];

  const researchHighlights = [
{
  label: "Title",
  badge: "01",
  title: (
    <>
      EntrepreneurExcellence<sup>©</sup>
    </>
  ),
  description: "A psychometric blueprint for entrepreneurial success.",
},

    {
      label: "Goal",
      badge: "02",
      title: "Validated Benchmark",
      description: "Build a validated success benchmark and practical playbook for entrepreneurs by analyzing key psychometric traits and their relationship to business outcomes.",
      footnote: "(Concept paper & preliminary literature review available.)",
    },
    {
      label: "Assessment Platform",
      badge: "03",
      title: "TriMetrix® HD",
      description: "TriMetrix® HD (TTI Success Insights).",
    },
    {
      label: "Participants Needed",
      badge: "04",
      title: "250+ Leaders",
      description: "Qualified Entrepreneurs/SMB leaders (limited seats).",
    },
  ];

  return (
    <div className="relative w-full bg-white min-h-screen">
      <section
        ref={sectionRef}
        className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <TTI itemVariants={itemVariants} />

            {/* Section 2: About the Research (updated to match screenshot) */}
            <motion.div id="research" variants={itemVariants} className="mb-16 lg:mb-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                  <h2 style={{ fontFamily: 'ebgaramond, serif' }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-6">
                    About the Research
                  </h2>
                  <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-base sm:text-lg text-gray-700">
                    Our work is grounded in extensive research across entrepreneurship, organizational performance, leadership, and behavioral science. The insights behind our programs come from a combination of academic studies, industry data, and real-world analysis of high-performing small and mid-sized businesses.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-6xl mx-auto">
                  {researchHighlights.map((h, i) => (
                    <motion.div key={h.badge} variants={itemVariants} whileHover={{ y: -6 }} className="relative bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-2xl p-6 sm:p-8 shadow-lg">
                      {/* Step badge */}
                        <div className="absolute -top-5 left-5">
                        <div className="w-14 h-14 bg-white rounded-full flex flex-col items-center justify-center shadow-sm border border-red-100">
                          <span className="text-[10px] text-red-500">Step</span>
                          <span className="text-lg font-bold text-red-600">{h.badge}</span>
                        </div>
                      </div>

                      {/* Top-right small label */}
                      <div className="flex justify-end">
                        <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-sm text-red-600">{h.label}</p>
                      </div>

                      <h3 style={{ fontFamily: 'ebgaramond, serif' }} className="mt-6 text-lg sm:text-xl font-semibold text-red-800">
                        {h.title}
                      </h3>
                      <p style={{ fontFamily: 'Inter, sans-serif' }} className="mt-3 text-sm text-red-700/90">
                        {h.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Section 3: What We Expect to Learn (styled to match screenshot) */}
            <motion.div  className=" bg-red-100 p-4 rounded-3xl ">
              <div className="max-w-7xl mx-auto">
                  <h2 style={{ fontFamily: 'ebgaramond, serif' }} className="text-3xl sm:text-4xl font-bold text-center mb-10">
                    <span className="text-black">What We </span>
                    <span className="text-red-600">Expect to Learn</span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    {learnItems.map((item, index) => {
                      const isMiddle = index === 1;
                      return (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          whileHover={{ y: -6 }}
                          transition={{ duration: 0.35 }}
                          className="flex flex-col items-center text-center py-8"
                        >
                            <div className={`h-20 w-20 rounded-full overflow-hidden border-2 ${isMiddle ? 'border-red-600' : 'border-red-500'} shadow-sm mb-4`}>
                            <Image src={`/EE/section6/img${index + 1}.jpeg`} alt={item.title} width={80} height={80} className="object-cover w-full h-full" />
                          </div>

                          <h3 style={{ fontFamily: 'ebgaramond, serif' }} className="text-lg font-semibold text-red-600 mb-3">
                            {item.title}
                          </h3>

                          <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-sm text-gray-800 max-w-xs">
                            {item.text}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
