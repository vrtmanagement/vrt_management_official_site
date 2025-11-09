"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Target, Download, Users, Brain, ArrowRight, ChevronRight } from "lucide-react";

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

  const researchCards = [
    {
      icon: Monitor,
      title: "Project Title & Overview",
      description: "Entrepreneur EDGE®—A Psychometric Blueprint for Entrepreneurial Success, designed to unlock entrepreneurial potential.",
    },
    {
      icon: Target,
      title: "Core Goal & Methodology",
      description: "Build a validated success benchmark and practical playbook for entrepreneurs by analyzing key psychometric traits and their relationship to business outcomes. (Concept paper & preliminary literature review available.)",
    },
    {
      icon: Download,
      title: "Advanced Assessment Platform",
      description: "Leveraging TriMetrix® HD by TTI Success Insights for comprehensive psychometric evaluation and deep behavioral analysis.",
    },
    {
      icon: Users,
      title: "Participant Requirements",
      description: "Seeking 250+ qualified entrepreneurs and SMB leaders to contribute to groundbreaking research and insights.",
      button: "Limited Seats Available",
    },
  ];

  const learnItems = [
    {
      icon: Brain,
      text: "Which combinations of behavior + motivation + acumen + competencies most strongly correlate with scaling success",
    },
    {
      icon: ArrowRight,
      text: "Which gaps predict stall points and how founders can address them with targeted habits and team design",
    },
    {
      icon: Target,
      text: "A clear, teachable EDGE blueprint that founders can apply immediately",
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
            {/* Section 1: What is TriMetrix® HD */}
            <motion.div id="introduction" variants={itemVariants} className="mb-16 lg:mb-20 text-center">
              <h2
                className="text-3xl sm:text-4xl  font-bold text-black mb-6 max-w-4xl mx-auto"
                style={{ fontFamily: 'ebgaramond, serif' }} 
              >
                What is TriMetrix® HD and why we're using it
              </h2>
              <div className="max-w-3xl mx-auto space-y-4 mb-8">
                <p
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  className="text-base sm:text-lg text-black leading-relaxed"
                >
                  TriMetrix® HD integrates{" "}
                  <span className="font-bold">four sciences</span> <span className="font-bold">Behaviors (DISC)</span>,{" "}
                  <span className="font-bold">12 Driving Forces™</span> (motivation),{" "}
                  <span className="font-bold">Acumen</span> (judgment), and{" "}
                  <span className="font-bold">Competencies</span> to reveal the how, why, how-well, and can-do behind performance.
                </p>
                <p
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  className="text-base sm:text-lg text-black leading-relaxed"
                >
                  The suite is <span className="font-bold">validated, bias-free</span>, and in compliance with EEOC/OFCCP guidelines.
                </p>
                <p
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  className="text-base sm:text-lg text-black leading-relaxed"
                >
                  This multidimensional view lets us pinpoint patterns common to top-performing entrepreneurs.
                </p>
              </div>
            </motion.div>

            {/* Section 2: About the Research */}
            <motion.div id="research" variants={itemVariants} className="mb-16 lg:mb-20">
              <h2
                style={{ fontFamily: 'ebgaramond, serif' }}
                className="text-3xl sm:text-4xl font-bold text-black text-center mb-8 sm:mb-12"
              >
                About the Research
              </h2>
              <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
                {/* Title */}
                <motion.div 
                  variants={itemVariants} 
                  className="bg-gray-50 border-l-4 border-red-600 p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-center">
                    <h3
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className="text-base sm:text-lg font-semibold text-gray-600 uppercase tracking-wide mb-3"
                    >
                      Title
                    </h3>
                    <p
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className="text-lg sm:text-xl text-black leading-relaxed font-medium"
                    >
                      <span className="font-bold text-red-600">Entrepreneur EDGE©</span>  A Psychometric Blueprint for Entrepreneurial Success
                    </p>
                  </div>
                </motion.div>

                {/* Goal */}
                <motion.div 
                  variants={itemVariants} 
                  className="bg-gray-50 border-l-4 border-red-600 p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-center">
                    <h3
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className="text-base sm:text-lg font-semibold text-gray-600 uppercase tracking-wide mb-3"
                    >
                      Goal
                    </h3>
                    <p
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className="text-base sm:text-lg text-black leading-relaxed"
                    >
                      Build a validated success benchmark and practical playbook for entrepreneurs by analyzing key psychometric traits and their relationship to business outcomes. <span className="text-gray-600 italic">(Concept paper & preliminary literature review available.)</span>
                    </p>
                  </div>
                </motion.div>

                {/* Assessment Platform */}
                <motion.div 
                  variants={itemVariants} 
                  className="bg-gray-50 border-l-4 border-red-600 p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-center">
                    <h3
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className="text-base sm:text-lg font-semibold text-gray-600 uppercase tracking-wide mb-3"
                    >
                      Assessment Platform
                    </h3>
                    <p
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className="text-lg sm:text-xl text-black leading-relaxed font-medium"
                    >
                      TriMetrix® HD (TTI Success Insights)
                    </p>
                  </div>
                </motion.div>

                {/* Participants Needed */}
                <motion.div 
                  variants={itemVariants} 
                  className="bg-gray-50 border-l-4 border-red-600 p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-center">
                    <h3
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className="text-base sm:text-lg font-semibold text-gray-600 uppercase tracking-wide mb-3"
                    >
                      Participants Needed
                    </h3>
                    <p
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className="text-lg sm:text-xl text-black leading-relaxed font-medium"
                    >
                      250+ qualified entrepreneurs/SMB leaders            
                        Limited Seats

                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Section 3: What We Expect to Learn */}
            <motion.div id="learnings" variants={itemVariants} className="mb-16 lg:mb-20">
              <h2
                style={{ fontFamily: 'ebgaramond, serif' }}
                className="text-3xl sm:text-4xl font-bold text-black text-center mb-8 sm:mb-12"
              >
                What We Expect to Learn
              </h2>

              {/* Learning Outcomes */}
              <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 mb-10">
                {learnItems.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <p
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        className="text-base sm:text-lg text-black leading-relaxed text-center"
                      >
                        {item.text.split(' ').map((word, i) => {
                          const lowerWord = word.toLowerCase().replace(/[.,]/g, '');
                          if (lowerWord === 'behavior' || lowerWord === 'motivation' || lowerWord === 'acumen' || 
                              lowerWord === 'competencies' || lowerWord === 'stall' || lowerWord === 'points' ||
                              lowerWord === 'edge' || lowerWord === 'blueprint' || lowerWord === '+' ||
                              lowerWord === 'scaling' || lowerWord === 'success' || lowerWord === 'founders' ||
                              lowerWord === 'teachable' || lowerWord === 'apply' || lowerWord === 'immediately') {
                            return <span key={i} className="font-bold text-red-600">{word} </span>;
                          }
                          return <span key={i}>{word} </span>;
                        })}
                      </p>
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
