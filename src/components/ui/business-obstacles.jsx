"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const OBSTACLES_DATA = [
  {
    id: "obstacle-1",
    title: "OVERWHELMED?",
    description: "Are you overwhelmed by the work and responsibilities piling up around you?",
    icon: "😰"
  },
  {
    id: "obstacle-2", 
    title: "CONFUSED?",
    description: "Are you confused about what the right moves actually are to grow your business?",
    icon: "🤔"
  },
  {
    id: "obstacle-3",
    title: "SCARED?",
    description: "Are you scared you're going to fail like so many other small businesses?",
    icon: "😨"
  }
];

const ObstacleCard = ({ obstacle, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center text-center max-w-sm mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Circular Icon with Animation */}
      <motion.div
        className="relative mb-6"
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center bg-white shadow-lg"
          animate={{
            borderColor: isHovered ? "#dc2626" : "#ef4444",
            boxShadow: isHovered 
              ? "0 10px 25px rgba(239, 68, 68, 0.3)" 
              : "0 4px 15px rgba(239, 68, 68, 0.2)"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-2xl"
            animate={{
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {obstacle.icon}
          </motion.div>
        </motion.div>
        
        {/* Animated Checkmark */}
        <motion.div
          className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white" />
        </motion.div>
      </motion.div>

      {/* Title with Staggered Animation */}
      <motion.h3
        className="text-2xl font-bold text-black mb-4 uppercase tracking-wide"
        animate={{
          color: isHovered ? "#dc2626" : "#000000",
        }}
        transition={{ duration: 0.3 }}
      >
        {obstacle.title.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              color: isHovered ? "#dc2626" : "#000000"
            } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.3, 
              delay: (index * 0.2) + (i * 0.05),
              ease: "easeOut"
            }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h3>

      {/* Description with Fade Animation */}
      <motion.p
        className="text-gray-700 text-sm leading-relaxed max-w-xs"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: (index * 0.2) + 0.3,
          ease: "easeOut"
        }}
      >
        {obstacle.description}
      </motion.p>
    </motion.div>
  );
};

export const BusinessObstacles = ({ 
  title = "The Most Common Obstacles to Growing a Small Business",
  subtitle = "CAN YOU RELATE TO THESE STRUGGLES?",
  ctaText = "BOOK YOUR FREE DISCOVERY CALL",
  onCtaClick = () => {},
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <div 
      ref={ref}
      className={`min-h-screen bg-white py-20 px-6 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          
          <motion.h2
            className="text-sm uppercase tracking-widest text-gray-600 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {subtitle}
          </motion.h2>
        </motion.div>

        {/* Obstacles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {OBSTACLES_DATA.map((obstacle, index) => (
            <ObstacleCard
              key={obstacle.id}
              obstacle={obstacle}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <motion.button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-sm uppercase tracking-widest transition-all duration-300 shadow-lg"
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            onClick={onCtaClick}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: ctaHovered 
                ? "0 10px 30px rgba(239, 68, 68, 0.4)" 
                : "0 4px 15px rgba(239, 68, 68, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              animate={{
                x: ctaHovered ? 5 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {ctaText}
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessObstacles;
