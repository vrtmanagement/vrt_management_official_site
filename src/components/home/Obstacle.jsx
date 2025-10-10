"use client";
import { ChevronDown, Users, Settings, Target } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const obstacles = [
  {
    title: 'People',
    description: 'Empower your team to achieve extraordinary results. From building high-performing teams to enhancing leadership capabilities, we ensure your people become your greatest asset in driving business success.',
    icon: Users,
  },
  {
    title: 'Process',
    description: 'Say goodbye to inefficiencies. Our tailored process optimization strategies streamline your operations, boost productivity, and ensure your systems scale seamlessly as your business grows.',
    icon: Settings,
  },
  {
    title: 'Strategy',
    description: 'Create focused growth plans using data-driven insights and market trends. We design strategies tailored to your unique challenges, ensuring steady progress and measurable results.',
    icon: Target,
  },
];

const ObstacleCard = ({ obstacle, index, isInView }) => {
  const IconComponent = obstacle.icon;
  
  return (
    <motion.div
      className="flex flex-col items-center text-center group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
    >
      {/* Icon Container */}
      <motion.div 
        className="relative mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-black bg-white shadow-lg group-hover:shadow-xl transition-all duration-300">
          <ChevronDown className="h-8 w-8 text-black" />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h3 
        className="mb-4 text-xl font-semibold text-black uppercase tracking-wide"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: (index * 0.2) + 0.3 }}
      >
        {obstacle.title}
      </motion.h3>

      {/* Description */}
      <motion.p 
        className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: (index * 0.2) + 0.5 }}
      >
        {obstacle.description}
      </motion.p>
    </motion.div>
  );
};

const Obstacles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section 
      ref={ref}
      className="bg-white py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            What We Solve
          </h2>
          <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">
            Can You Relate to These Struggles?
          </p>
        </motion.div>

        {/* Obstacles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {obstacles.map((obstacle, index) => (
            <ObstacleCard
              key={index}
              obstacle={obstacle}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <Link
            href="/discovery-call"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Free Discovery Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Obstacles;