"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export default function AboutMe() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-4 bg-black text-white overflow-hidden relative"
    >
      {/* Geometric background patterns */}
      <div className="absolute inset-0 opacity-5">
        {/* Triangle patterns */}
        <motion.div
          className="absolute top-20 left-20 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-red-500"
          style={{ y: y1, rotate: rotate1 }}
        />
        <motion.div
          className="absolute top-40 left-40 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-red-500"
          style={{ y: y2, rotate: rotate2 }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[40px] border-l-transparent border-r-transparent border-b-red-500"
          style={{ y: y1, rotate: rotate1 }}
        />
        
        {/* Polygon patterns */}
        <motion.div
          className="absolute top-60 right-40 w-16 h-16 border border-red-500 transform rotate-45"
          style={{ y: y2, rotate: rotate2 }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-12 h-12 border border-red-500 transform rotate-12"
          style={{ y: y1, rotate: rotate1 }}
        />
        
        {/* Line patterns */}
        <motion.div
          className="absolute top-1/3 left-10 w-32 h-px bg-red-500"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-24 h-px bg-red-500"
          style={{ y: y2 }}
        />
      </div>

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mobile: Image first, then content */}
          {/* Desktop: Content first, then image */}
          <motion.div className="space-y-8 order-2 lg:order-1" variants={itemVariants}>
            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-wide text-white"
              variants={itemVariants}
            >
              RAJESH TEDLA
            </motion.h1>

            {/* Tagline */}
            <motion.div
              className="text-lg sm:text-xl md:text-2xl font-sans font-light leading-relaxed"
              variants={itemVariants}
            >
              <span className="text-white">Your Mentor for Growth</span>
            </motion.div>

            {/* About Paragraph */}
            <motion.p
              className="text-sm sm:text-base md:text-lg font-sans font-normal leading-relaxed text-white/80 max-w-lg"
              variants={itemVariants}
            >
              Michal Prekop has been working as digital graphic designer since finishing applied arts studies 15 years ago. His passion for clear visual communication enabled him to work with startups, big agencies as well as freelancing. Clients always benefited from his complex approach and analytical problem solving. Intelligent web design stands at the core of his interests but he is also an excellent guitarist and has an interest in philosophy.
            </motion.p>

            {/* Call to Action */}
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl font-serif font-light leading-relaxed text-white"
              variants={itemVariants}
            >
              Stay connected and let the good
              <br />
              work begin.
            </motion.div>

            {/* Contact Icons */}
            <motion.div className="flex items-center gap-6" variants={itemVariants}>
              <motion.a
                href="mailto:ahoy@uncutcorners.com"
                className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-red-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/michalprekop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-red-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Portrait Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <img
                  src="http://www.vrt9.net/edge/RajeshTedla.jpg"
                  alt="Michal Prekop - Designer and Frontend Developer"
                  className="w-full h-auto object-cover  hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Subtle overlay for depth */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.div>

              {/* Decorative frame elements */}
              <motion.div
                className="absolute -inset-4 border border-red-500/20"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              
              <motion.div
                className="absolute -inset-8 border border-red-500/10"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
