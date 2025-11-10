"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    hidden: { x: -20, opacity: 0 },
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
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const lineExpand = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-white pt-20 sm:pt-12 md:pt-16 lg:pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden pb-6 sm:pb-8 lg:pb-12">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-red-50 rounded-full blur-3xl opacity-20 sm:opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gray-100 rounded-full blur-3xl opacity-15 sm:opacity-20"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] items-start lg:items-center gap-4 sm:gap-6 lg:gap-8 w-full relative z-10 py-4 sm:py-6 md:py-8 lg:py-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Section - Image */}
        <motion.div
          className="flex items-center justify-center lg:justify-end overflow-hidden"
          variants={slideInLeft}
        >
          <motion.div
            className="relative w-full max-w-md h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-100"
            style={{ y: imageY }}
          >
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
            alt="Diverse group of entrepreneurs and business professionals in a modern meeting room"
            fill
            className="object-cover"
            priority
          />
          {/* Red accent overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-red-600/0"
            whileHover={{ backgroundColor: "rgba(220, 38, 38, 0.05)" }}
            transition={{ duration: 0.3 }}
          />
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 border-2 border-red-600/0 rounded-lg"
            whileHover={{ borderColor: "rgba(220, 38, 38, 0.3)" }}
            transition={{ duration: 0.3 }}
          />
          </motion.div>
        </motion.div>

        {/* Right Section - Text Content */}
        <motion.div
          className="flex items-center justify-start bg-white px-2 sm:px-4 lg:px-0 lg:pr-8 py-4 sm:py-6 md:py-8 lg:py-0 overflow-hidden"
          variants={slideInRight}
          style={{ y: textY }}
        >
          <motion.div
            className="w-full max-w-2xl"
            variants={containerVariants}
          >
            {/* Headline */}
            <motion.h1
              style={{ fontFamily: 'Inter, sans-serif' }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-5"
              variants={itemVariants}
            >
              <motion.span
                className="block sm:whitespace-nowrap"
                style={{ fontFamily: 'Merriweather, serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Entrepreneur 
                <motion.span
                  className="text-red-600 inline-block"
                  animate={{
                    backgroundPosition: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundImage: "linear-gradient(90deg, #dc2626, #ef4444, #dc2626)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  EDGE©
                </motion.span>
              </motion.span>
              <motion.span
                className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal mt-2 sm:mt-3 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ fontFamily: 'Lora, serif' }}
              >
                A Psychometric Blueprint for Entrepreneurial Success
              </motion.span>
            </motion.h1>

            {/* Separator Line 1 */}
            <motion.div
              className="flex items-center mb-4 sm:mb-5"
              variants={itemVariants}
            >
              <motion.div
                className="h-px bg-black w-full"
                initial={{ scaleX: 0 }}
                animate={isLoaded ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              style={{ fontFamily: 'Inter, sans-serif' }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-5 leading-relaxed"
              variants={itemVariants}
            >
              Scale smarter. Lead stronger. Join the research that's mapping the{" "}
              <motion.span
                className="font-semibold text-black"
                whileHover={{ color: "#dc2626" }}
                transition={{ duration: 0.2 }}
              >
                psychometric blueprint
              </motion.span>{" "}
              of{" "}
              <motion.span
                className="font-semibold text-red-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                high-growth entrepreneurs
              </motion.span>
              .
            </motion.p>

            {/* Separator Line 2 */}
            <motion.div
              className="flex items-center mb-4 sm:mb-6"
              variants={itemVariants}
            >
              <motion.div
                className="h-px bg-black w-full"
                initial={{ scaleX: 0 }}
                animate={isLoaded ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>

            {/* CTA Button - Red */}
            <motion.div variants={itemVariants}>
              <Link
                href="https://www.surveymonkey.com/r/New_Edge"
                className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-sm sm:text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start touch-manipulation"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <motion.span
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                  className="text-center sm:text-left"
                >
                  Start the 5-minute eligibility survey
                </motion.span>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Subheading Section - Below Two Columns */}
        <motion.div
          className="col-span-1 lg:col-span-2 mt-4 sm:mt-6 lg:mt-8 px-2 sm:px-4"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-gradient-to-r from-red-50 via-white to-red-50 border-t-2 border-b-2 border-red-600/20 py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-7 rounded-lg shadow-sm"
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                style={{ fontFamily: 'Inter, sans-serif' }}
                className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed sm:leading-relaxed text-center"
              >
                We're enrolling{" "}
                <span className="font-bold text-black">
                  250+ entrepreneurs and SMB leaders
                </span>{" "}
                to take part in a breakthrough study.{" "}
                <br />
                <span className="font-semibold text-red-600">
                  Eligible Entrepreneurs
                </span>{" "}
                receive their customized{" "}
                <span className="font-bold text-black">
                  complimentary TriMetrix
                  <span className="text-xs align-top">®</span> HD leadership report
                </span>
                , and <br />{" "}
                <span className="font-bold text-red-600">
                  $2,500 Masterclass
                </span>{" "}
                on the{" "}
                <span className="font-bold text-black">
                  EntrepreneurEDGE©
                </span>{" "}
                framework.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}