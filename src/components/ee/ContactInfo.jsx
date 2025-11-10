"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

export default function ContactInfo() {
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

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const qualifications = [
    "36+ years leading transformation, growth, and operational excellence former. GE Capital senior executive (Business Transformation, global quality, customer loyalty, Lean Six Sigma).",
    "Lean Six Sigma Master Black Belt, certified in TriMetrix® HD and multiple human-capital analytics disciplines.",
    "Board director and advisor to high-growth SMBs; coach to 1,420+ entrepreneurs globally.",
    "Currently pursuing a DBA in Entrepreneurship, Growth, and Success.",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-4  px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Content */}
          <motion.div variants={slideInLeft} className="space-y-4 order-2 lg:order-1 text-center lg:text-left">
            <motion.h3
              style={{ fontFamily: 'ebgaramond, serif' }}
              className="text-4xl sm:text-4xl md:text-5xl font-bold text-red-600"
              variants={itemVariants}
            >
              Rajesh Tedla
            </motion.h3>
            <motion.div
              variants={containerVariants}
              className="space-y-3 mt-4 text-center lg:text-left"
            >
              <motion.p
                style={{ fontFamily: 'Inter, sans-serif' }}
                className="text-sm sm:text-base font-semibold text-black mb-2"
                variants={itemVariants}
              >
                Your principal investigator
              </motion.p>
              <motion.p
                style={{ fontFamily: 'Inter, sans-serif' }}
                className="text-sm sm:text-base text-gray-800 mb-4"
                variants={itemVariants}
              >
                Founder and CEO, VRT Management Group, LLC
              </motion.p>

              <ul className="space-y-3">
                {qualifications.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-red-600" />
                    </div>
                    <p
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className="text-sm sm:text-base text-gray-800 leading-relaxed"
                    >
                      {item.includes("1,420+") ? (
                        <>
                          {item.split("1,420+")[0]}
                          <span className="font-bold text-black">1,420+</span>
                          {item.split("1,420+")[1]}
                        </>
                      ) : (
                        item
                      )}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={slideInRight}
            className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-lg mx-auto lg:ml-auto lg:mr-0 order-1 lg:order-2"
          >
            <Image
              src="/sog/rajesh-sir-image.webp"
              alt="Rajesh Tedla - Founder and CEO, VRT Management Group"
              fill
              className="object-cover object-center rounded-full"
              priority
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 350px, 400px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
