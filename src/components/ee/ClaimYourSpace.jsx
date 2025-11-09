"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Heart, Target, BarChart3, Award, CheckCircle2 } from "lucide-react";

const ClaimYourSpace = () => {
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
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const promiseItems = [
    {
      title: "CONFIDENTIAL",
      description: "Your assessment data is handled securely and reported in aggregate for research.",
    },
    {
      title: "VALUE-FIRST",
      description: "Every qualified participant receives actionable insights and the full EDGE Masterclass (a $2,500 value) at no cost.",
    },
    {
      title: "NO FLUFF",
      description: "Practical, evidence-based findings you can use to hire, lead, and scale.",
    },
  ];

  const receiveItems = [
    {
      icon: BarChart3,
      title: "TRI METRIX® HD LEADERSHIP REPORT",
      description: "Behaviors, 12 Driving Forces™, acumen, and competencies to spotlight your strengths and blind spots.",
    },
    {
      icon: Award,
      title: "EDGE MASTERCLASS ($2,500 VALUE)",
      description: "Learn the Entrepreneur EDGE© model, see how top performers are profiled, and get your personalized GAP analysis with practical tips to close gaps. Begins April 1, 2026.",
    },
    {
      icon: CheckCircle2,
      title: "BENCHMARK INSIGHTS",
      description: "Where your profile aligns with the success blueprint—and where to focus next. (Informed by sample TriMetrix® HD leadership & talent reports.)",
    },
  ];

  const whyMattersPoints = [
    "After coaching and advising 1,420+ entrepreneurs worldwide",
    "Identified a repeatable pattern in successful founders",
    "Distinct set of measurable traits used deliberately",
    "Study designed to identify, validate, and teach that pattern",
    "Enable more entrepreneurs to scale profitably",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Top Section - Participant Promise */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <motion.h2
              variants={itemVariants}
              style={{ fontFamily: 'ebgaramond, serif' }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-10 md:mb-12 text-center px-2"
            >
              Participant promise (ethics & privacy)
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {promiseItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <h3
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        className="text-base sm:text-lg md:text-xl font-bold text-black uppercase tracking-wide"
                      >
                        {item.title}
                      </h3>
                    </div>
                    <div className="h-px bg-black w-full sm:w-2/3 mb-4 sm:mb-6" />
                    <p
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className="text-sm sm:text-base md:text-lg text-black leading-relaxed"
                    >
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClaimYourSpace;
