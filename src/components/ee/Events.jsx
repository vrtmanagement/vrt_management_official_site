"use client";

import React, { useRef } from "react";
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
      title: "Success Patterns",
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
      text: "A clear, teachable EntrepreneurEDGE© blueprint that founders can apply immediately",
    },
  ];

  const researchHighlights = [
    {
      label: "Title",
      badge: "01",
      title: "EntrepreneurEDGE©",
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

            {/* Section 2: About the Research */}
            <motion.div id="research" variants={itemVariants} className="mb-16 lg:mb-20">
              <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative">
                    <div className="hidden lg:block absolute inset-0 w-[340px] h-[340px] rounded-full border border-red-100/40" />
                    <div className="hidden lg:block absolute inset-0 w-[420px] h-[420px] rounded-full border border-red-100/30" />
                    <div className="hidden lg:block absolute inset-0 w-[500px] h-[500px] rounded-full border border-red-100/20" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 lg:gap-8 relative">
                  {/* Top Left Card */}
                  {researchHighlights.map((highlight, index) => {
                    const isLeft = index === 0 || index === 1;
                    const isTop = index === 0 || index === 2;

                    const gridClasses = [
                      "lg:col-start-1 lg:row-start-1",
                      "lg:col-start-1 lg:row-start-2",
                      "lg:col-start-3 lg:row-start-1",
                      "lg:col-start-3 lg:row-start-2",
                    ];

                    return (
                      <motion.div
                        key={highlight.badge}
                        variants={itemVariants}
                        className={`relative bg-white/80 backdrop-blur border border-red-100 shadow-sm rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl lg:max-w-sm ${
                          index === 0 || index === 2 ? "lg:justify-self-start" : "lg:justify-self-end"
                        } ${gridClasses[index]}`}
                        whileHover={{ y: -6 }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <p
                            style={{ fontFamily: 'Inter, sans-serif' }}
                            className="text-xs sm:text-sm font-semibold  tracking-[0.3em] text-red-600"
                          >
                            {highlight.label}
                          </p>
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-xs font-semibold">
                            {highlight.badge}
                          </span>
                        </div>
                        <h3
                          style={{ fontFamily: 'ebgaramond, serif' }}
                          className="text-xl sm:text-2xl font-semibold text-black mb-3"
                        >
                          {highlight.title}
                        </h3>
                        <p
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          className="text-sm sm:text-base text-gray-700 leading-relaxed"
                        >
                          {highlight.description}
                        </p>
                        {highlight.footnote && (
                          <p
                            style={{ fontFamily: 'Inter, sans-serif' }}
                            className="text-xs sm:text-sm text-gray-500 italic mt-3"
                          >
                            {highlight.footnote}
                          </p>
                        )}
                      </motion.div>
                    );
                  })}

                  {/* Center Headline */}
                  <div className="relative flex flex-col items-center justify-center text-center bg-white/70 backdrop-blur-sm border border-red-100 rounded-full py-16 sm:py-20 lg:py-24 px-10 lg:px-16 shadow-inner lg:col-start-2 lg:row-span-2 order-first lg:order-none">
                    <h2
                      style={{ fontFamily: 'ebgaramond, serif' }}
                      className="text-3xl sm:text-5xl font-bold text-black tracking-tight"
                    >
                      About the Research
                    </h2>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 3: What We Expect to Learn */}
            <motion.div id="learnings" variants={itemVariants} className="mb-16 lg:mb-20">
              <h2
                style={{ fontFamily: 'ebgaramond, serif' }}
                className="text-3xl sm:text-4xl font-bold text-black text-center mb-12 sm:mb-16"
              >
                What We Expect to Learn
              </h2>

              {/* Learning Outcomes - Three Column Premium Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto border border-gray-200 overflow-hidden">
                {learnItems.map((item, index) => {
                  const isMiddle = index === 1;
                  
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className={`relative flex flex-col items-center text-center p-8 sm:p-10 lg:p-12 transition-all duration-300 overflow-hidden ${
                        isMiddle
                          ? 'bg-gradient-to-br from-red-600 to-red-700 text-white'
                          : 'bg-white text-black hover:bg-gray-50'
                      } ${
                        index !== 2 ? 'md:border-r border-gray-200' : ''
                      }`}
                    >
                      <motion.div
                        className={`pointer-events-none absolute inset-0 ${
                          isMiddle
                            ? 'bg-white/10'
                            : 'bg-gradient-to-br from-red-50/0 via-red-50/0 to-red-100/0'
                        }`}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: isMiddle ? 0.2 : 0.35 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      />

                      {/* Title */}
                      <h3
                        style={{ fontFamily: 'ebgaramond, serif' }}
                        className={`text-2xl sm:text-3xl font-bold mb-6 tracking-tight ${
                          isMiddle ? 'text-white' : 'text-black'
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* Accent line below title */}
                      <motion.div
                        className={`w-full h-0.5 mb-6 ${
                          isMiddle ? 'bg-white' : 'bg-red-600'
                        }`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformOrigin: 'left' }}
                      />

                      {/* Description */}
                      <motion.p
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        className={`text-sm sm:text-base leading-relaxed max-w-xs mx-auto ${
                          isMiddle ? 'text-white/95' : 'text-gray-600'
                        }`}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {item.text.split(' ').map((word, i) => {
                          const lowerWord = word.toLowerCase().replace(/[.,]/g, '');
                          if (lowerWord === 'behavior' || lowerWord === 'motivation' || lowerWord === 'acumen' || 
                              lowerWord === 'competencies' || lowerWord === 'stall' || lowerWord === 'points' ||
                              lowerWord === 'edge' || lowerWord === 'entrepreneuredge©' || lowerWord === 'blueprint' || lowerWord === '+' ||
                              lowerWord === 'scaling' || lowerWord === 'success' || lowerWord === 'founders' ||
                              lowerWord === 'teachable' || lowerWord === 'apply' || lowerWord === 'immediately') {
                            return (
                              <span
                                key={i}
                                className={`font-semibold ${
                                  isMiddle ? 'text-white' : 'text-red-600'
                                }`}
                              >
                                {word}{' '}
                              </span>
                            );
                          }
                          return <span key={i}>{word} </span>;
                        })}
                      </motion.p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
