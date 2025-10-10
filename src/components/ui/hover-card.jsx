"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const HoverCard = ({ 
  card, 
  className = "",
  onHover,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover?.(false);
  };

  return (
    <motion.div
      className={`relative h-[400px] w-full overflow-hidden rounded-2xl bg-white shadow-lg ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      <motion.div
        className="size-full"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img
          src={card.imageUrl}
          alt={card.title}
          className="size-full object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 20,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.h3
          className="mb-2 text-2xl font-semibold text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {card.title}
        </motion.h3>
        <motion.p
          className="text-sm text-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          {card.description}
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
        animate={{
          borderColor: isHovered ? "rgba(59, 130, 246, 0.5)" : "rgba(59, 130, 246, 0)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default HoverCard;