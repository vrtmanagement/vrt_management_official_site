"use client";

import { Brain, Target, Lightbulb, Award } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
    {
        icon: Brain,
        title: "DISC Behavioral Analysis",
        subtitle: "HOW",
        description: "Understand how you prefer to behave and communicate through proven behavioral science methodology.",
    },
    {
        icon: Target,
        title: "Driving Forces",
        subtitle: "WHY",
        description: "Discover why you take action by identifying your core motivators, values, and internal drivers.",
    },
    {
        icon: Lightbulb,
        title: "Acumen Indicators",
        subtitle: "WHAT",
        description: "It reveals how you balance your internal (self-view) and external (world-view) perspectives. Essentially, it determines the quality of your decisions, judgments, and interactions.",
    },
    {   
        icon: Award,
        title: "Competency Assessment",
        subtitle: "WHICH",
        description: "Evaluate which professional skills and competencies you have been mastered through experience.",
    },
];

export default function Features() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const summaryRef = useRef(null);
    
    const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
    const isFeaturesInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const isSummaryInView = useInView(summaryRef, { once: true, amount: 0.5 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const headerVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const featureCardVariants = {
        hidden: { y: 60, opacity: 0, scale: 0.95 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
            },
        },
    };

    const summaryVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section 
            id="features" 
            ref={sectionRef}
            className="pt-16 pb-16 sm:pt-20 sm:pb-20 md:pb-4 bg-white relative overflow-hidden"
        >
            {/* Animated accent gradients */}
            <motion.div 
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-red-50/20 via-transparent to-transparent blur-3xl pointer-events-none"
                style={{ y: backgroundY }}
                animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div 
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-gray-50/30 via-transparent to-transparent blur-3xl pointer-events-none"
                style={{ y: backgroundY }}
                animate={{
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            <div className="container px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div 
                    ref={headerRef}
                    className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 md:mb-20"
                    variants={headerVariants}
                    initial="hidden"
                    animate={isHeaderInView ? "visible" : "hidden"}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight"
                        style={{ fontFamily: 'Lora, serif' }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                       The 360º View of Your 
                        <br />
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
                            Leadership DNA
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed px-4"
                        style={{ fontFamily: 'Inter, serif' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Traditional assessments only scratch the surface. TriMetrix HD reveals the complete picture through four interconnected scientific dimensions.
                    </motion.p>
                </motion.div>
                            

                {/* Features Grid - Unique Bordered Design */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto border border-black/10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isFeaturesInView ? "visible" : "hidden"}
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isLastInRow = (index === 1 || index === 3);
                        const isLastRow = index >= 2;

                        return (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={featureCardVariants}
                                className={`group relative bg-white p-6 sm:p-8 md:p-10 lg:p-12 hover:bg-red-50/30 transition-all duration-300 ${!isLastInRow ? 'border-r-0 md:border-r border-black/10' : 'border-r-0'
                                    } ${!isLastRow ? 'border-b border-black/10' : ''
                                    }`}
                                whileHover={{ 
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {/* Animated top border accent on hover */}
                                <motion.div 
                                    className="absolute top-0 left-0 right-0 h-0.5 bg-red-600"
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    whileHover={{ scaleX: 1, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    style={{ transformOrigin: "left" }}
                                />

                                {/* Animated corner accent */}
                                <motion.div
                                    className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-600 opacity-0"
                                    whileHover={{ opacity: 0.3 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Shimmer effect on hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
                                    whileHover={{ 
                                        opacity: 1,
                                        x: ["-100%", "100%"]
                                    }}
                                    transition={{
                                        x: { duration: 0.6 },
                                        opacity: { duration: 0.3 }
                                    }}
                                />

                                {/* Content */}
                                <div className="relative flex flex-col space-y-4 sm:space-y-5 md:space-y-6 z-10">
                                    {/* Icon and Badge Row */}
                                    <div className="flex items-start justify-between gap-4">
                                        <motion.div 
                                            className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-red-600 bg-white flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 overflow-hidden"
                                            variants={iconVariants}
                                            whileHover={{ 
                                                scale: 1.1,
                                                rotate: [0, -10, 10, 0],
                                            }}
                                            transition={{
                                                scale: { type: "spring", stiffness: 400 },
                                                rotate: { duration: 0.5 }
                                            }}
                                        >
                                            {/* Animated background fill */}
                                            <motion.div
                                                className="absolute inset-0 bg-red-600"
                                                initial={{ scale: 0 }}
                                                whileHover={{ scale: 1 }}
                                                transition={{ duration: 0.3 }}
                                                style={{ transformOrigin: "center" }}
                                            />
                                            <motion.div
                                                initial={{ rotate: 0 }}
                                                whileHover={{ rotate: [0, -5, 5, 0] }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Icon className="relative z-10 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-red-600 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                                            </motion.div>
                                        </motion.div>
                                        <motion.div 
                                            className="text-[10px] sm:text-xs font-black text-black uppercase tracking-wider border-2 border-black px-2 sm:px-3 py-1 sm:py-1.5 bg-white group-hover:bg-black group-hover:text-white transition-all duration-300 relative overflow-hidden"
                                            style={{ fontFamily: 'Lora, serif' }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <motion.span
                                                className="absolute inset-0 bg-black"
                                                initial={{ scaleX: 0 }}
                                                whileHover={{ scaleX: 1 }}
                                                transition={{ duration: 0.3 }}
                                                style={{ transformOrigin: "left" }}
                                            />
                                            <span className="relative z-10 block">{feature.subtitle}</span>
                                        </motion.div>
                                    </div>

                                    {/* Title and Description */}
                                    <div className="space-y-2 sm:space-y-3">
                                        <motion.h3
                                            className="text-xl sm:text-2xl md:text-3xl font-black text-black group-hover:text-red-600 transition-colors duration-300"
                                            style={{ fontFamily: 'Lora, serif' }}
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            {feature.title}
                                        </motion.h3>
                                        <motion.p
                                            className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-medium"
                                            style={{ fontFamily: 'Inter, serif' }}
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            {feature.description}
                                        </motion.p>
                                    </div>

                                    {/* Animated decorative line */}
                                    <motion.div 
                                        className="relative w-16 h-0.5 bg-red-600 mt-2"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        style={{ transformOrigin: "left" }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}