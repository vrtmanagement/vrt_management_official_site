"use client";

import { Clock, Cpu, FileText, Rocket } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        number: "01",
        icon: Clock,
        title: "Complete Assessment",
        description: "Take our comprehensive 30-45 minute online assessment covering behaviors, motivators, and competencies.",
    },
    {
        number: "02",
        icon: Cpu,
        title: "AI-Powered Analysis",
        description: "Advanced algorithms process your responses across four scientific dimensions to build your unique profile.",
    },
    {
        number: "03",
        icon: FileText,
        title: "Detailed Report",
        description: "Receive an in-depth report with actionable insights about your behavioral style, driving forces, and more.",
    },
    {
        number: "04",
        icon: Rocket,
        title: "Performance",
        description: "Apply insights for career development, team building, leadership growth, and performance optimization.",
    },
];

export default function HowItWorks() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const stepsRef = useRef(null);
    
    const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
    const isStepsInView = useInView(stepsRef, { once: true, amount: 0.2 });

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
                staggerChildren: 0.2,
                delayChildren: 0.1,
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

    const stepCardVariants = {
        hidden: { y: 80, opacity: 0, scale: 0.9 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.15,
                duration: 0.7,
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
                delay: 0.2,
            },
        },
    };

    const numberBadgeVariants = {
        hidden: { scale: 0, rotate: -90 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 250,
                damping: 20,
                delay: 0.3,
            },
        },
    };

    return (
        <section 
            id="how-it-works" 
            ref={sectionRef}
            className="sm:py-12 bg-white relative overflow-hidden"
        >
            {/* Animated background gradients */}
            <motion.div 
                className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-red-50/20 via-transparent to-transparent blur-3xl pointer-events-none"
                style={{ y: backgroundY }}
                animate={{
                    x: [0, 25, 0],
                    y: [0, -25, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div 
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-gray-50/25 via-transparent to-transparent blur-3xl pointer-events-none"
                style={{ y: backgroundY }}
                animate={{
                    x: [0, -20, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.12, 1],
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
                        From Assessment to
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
                            Transformation
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Four simple steps to unlock unprecedented insights into human potential
                    </motion.p>
                </motion.div>

                <div className="relative max-w-6xl mx-auto" ref={stepsRef}>
                    {/* Animated Connection line */}
                    <motion.div 
                        className="hidden lg:block absolute top-[3.5rem] left-0 right-0 h-[2px]"
                        style={{ width: "calc(100% - 14rem)", marginLeft: "7rem", marginRight: "7rem" }}
                        initial={{ scaleX: 0 }}
                        animate={isStepsInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="h-full bg-gradient-to-r from-transparent via-red-600/40 via-black/10 to-transparent"
                            initial={{ opacity: 0 }}
                            animate={isStepsInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        />
                        {/* Animated dot moving along the line */}
                        <motion.div
                            className="absolute top-1/2 left-0 w-3 h-3 bg-red-600 rounded-full -translate-y-1/2"
                            initial={{ x: 0 }}
                            animate={isStepsInView ? { x: "100%" } : { x: 0 }}
                            transition={{
                                duration: 2,
                                delay: 1,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 3,
                            }}
                        />
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isStepsInView ? "visible" : "hidden"}
                    >
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div 
                                    key={index} 
                                    className="relative"
                                    custom={index}
                                    variants={stepCardVariants}
                                    whileHover={{ 
                                        y: -8,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6 group cursor-default">
                                        {/* Icon Container - Enhanced rectangular design */}
                                        <div className="relative">
                                            {/* Glow effect on hover */}
                                            <motion.div
                                                className="absolute inset-0 bg-red-600/20 rounded-lg blur-xl opacity-0"
                                                whileHover={{ 
                                                    opacity: 1,
                                                    scale: 1.2
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            
                                            <motion.div 
                                                className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-2 border-red-600 bg-white flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 z-10 shadow-sm group-hover:shadow-lg group-hover:shadow-red-600/20 overflow-hidden"
                                                variants={iconVariants}
                                                whileHover={{ 
                                                    scale: 1.1,
                                                    rotate: [0, -5, 5, 0],
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
                                                {/* Shimmer effect */}
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                    initial={{ x: "-100%" }}
                                                    whileHover={{ x: "100%" }}
                                                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
                                                />
                                                <motion.div
                                                    initial={{ rotate: 0 }}
                                                    whileHover={{ rotate: [0, -3, 3, 0] }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <Icon className="relative z-10 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-red-600 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                                                </motion.div>
                                            </motion.div>
                                            
                                            {/* Step Number Badge - Enhanced design */}
                                            <motion.div 
                                                className="absolute -top-2 -right-2 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 border-2 border-black bg-white text-black flex items-center justify-center text-xs sm:text-sm font-black group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-md relative overflow-hidden z-20"
                                                variants={numberBadgeVariants}
                                                whileHover={{ 
                                                    scale: 1.15,
                                                    rotate: [0, -10, 10, 0],
                                                }}
                                                transition={{
                                                    scale: { type: "spring", stiffness: 400 },
                                                    rotate: { duration: 0.4 }
                                                }}
                                            >
                                                {/* Background fill on hover */}
                                                <motion.div
                                                    className="absolute inset-0 bg-black"
                                                    initial={{ scale: 0 }}
                                                    whileHover={{ scale: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                    style={{ transformOrigin: "center" }}
                                                />
                                                <span className="relative z-10">{step.number}</span>
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <motion.div 
                                            className="space-y-3 sm:space-y-4 px-2"
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            <motion.h3
                                                className="text-xl sm:text-2xl md:text-2xl font-black text-black group-hover:text-red-600 transition-colors duration-300"
                                                style={{ fontFamily: 'Lora, serif' }}
                                                whileHover={{ x: 3 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                {step.title}
                                            </motion.h3>
                                            <motion.p
                                                className="text-sm sm:text-base text-gray-600 leading-relaxed"
                                                style={{ fontFamily: 'Inter, sans-serif' }}
                                                whileHover={{ x: 2 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {step.description}
                                            </motion.p>
                                        </motion.div>

                                        {/* Animated decorative bottom border */}
                                        <motion.div 
                                            className="w-20 h-0.5 bg-red-600 mt-2"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            style={{ transformOrigin: "center" }}
                                        />
                                    </div>

                                    {/* Connecting arrow (visible on larger screens, between steps) */}
                                    {index < steps.length - 1 && (
                                        <motion.div
                                            className="hidden lg:block absolute top-[3.5rem] right-[-3rem] text-red-600"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isStepsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                            transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
                                        >
                                            <motion.svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 1.5 + index * 0.2
                                                }}
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </motion.svg>
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}