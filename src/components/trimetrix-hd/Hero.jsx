"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
export default function Hero() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const router = useRouter();
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
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

    const fadeInUp = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const scaleIn = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const statsVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15,
            },
        }),
    };

    return (
        <section 
            ref={sectionRef}
            className="relative overflow-hidden bg-white min-h-screen flex items-center"
        >
            {/* Animated Rectangular Border Pattern Background */}
            <motion.div 
                className="absolute inset-0 opacity-[0.10]"
                style={{ y: backgroundY }}
            >
                <motion.div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #000 1px, transparent 1px),
                            linear-gradient(to bottom, #000 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                    }}
                    animate={{
                        backgroundPosition: ["0px 0px", "40px 40px"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </motion.div>

            {/* Animated floating gradient orbs */}
            <motion.div 
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-red-50/30 via-transparent to-transparent blur-3xl pointer-events-none"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div 
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gray-50/40 via-transparent to-transparent blur-3xl pointer-events-none"
                animate={{
                    x: [0, -20, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            {/* Floating particles decoration */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-red-600/20 rounded-full"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 30}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                    }}
                />
            ))}

            {/* Container */}
            <motion.div 
                className="container relative px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 lg:py-20"
                style={{ opacity }}
            >
                <motion.div 
                    className="flex flex-col items-center text-center space-y-5 sm:space-y-6 md:space-y-7 max-w-5xl mx-auto pt-8 sm:pt-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Main Heading */}
                    <motion.div variants={itemVariants}>
                        <motion.h1 
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black leading-[1.1] px-2" 
                            style={{ fontFamily: 'Merriweather, serif' }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            Decode Human
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
                                Potential
                            </motion.span>
                        </motion.h1>
                    </motion.div>

                    {/* Description */}
                    <motion.p 
                        variants={fadeInUp}
                        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed font-medium px-4"
                        style={{ fontFamily: 'Lato, serif' }}
                    >
                        TriMetrix HD combines behavioral science, motivational drivers, cognitive abilities, and professional competencies into one comprehensive assessment platform
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div 
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center pt-2 sm:pt-3 w-full sm:w-auto"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Button 
                                size="lg" 
                                className="bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg px-7 sm:px-9 h-11 sm:h-14 font-bold shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 w-full sm:w-auto relative overflow-hidden group"
                                onClick={() => router.push('/trimetrix/form')}
                            >
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.6 }}
                                />
                                <span className="relative flex items-center">
                                    Register for Assessment
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                    </motion.span>
                                </span>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div 
                        variants={scaleIn}
                        className="flex justify-center w-full"
                    >
                        <div className="grid grid-cols-3 gap-3 sm:gap-10 md:gap-14 pt-6 sm:pt-8 md:pt-10 mt-4 sm:mt-6 px-4 max-w-3xl w-full">
                            {[
                                { value: "4", label: "Sciences" },
                                { value: "25+", label: "Competencies" },
                                { value: "360°", label: "View" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    variants={statsVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    className="flex flex-col items-center space-y-1 sm:space-y-2 cursor-default group"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-red-600 relative"
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: [0, -5, 5, 0],
                                        }}
                                        transition={{
                                            scale: { type: "spring", stiffness: 400 },
                                            rotate: { duration: 0.5 },
                                        }}
                                    >
                                        {stat.value}
                                        <motion.div
                                            className="absolute -inset-2 bg-red-600/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100"
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                    <motion.div 
                                        className="text-[10px] sm:text-sm font-semibold text-gray-600 uppercase tracking-wider"
                                        whileHover={{ color: "#dc2626" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {stat.label}
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}