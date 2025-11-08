"use client";

import { ArrowRight, Users } from "lucide-react";
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
                            Know Yourself
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
                                Lead Better. Scale Faster.
                            </motion.span>
                        </motion.h1>
                    </motion.div>

                    {/* Description */}
                    <motion.p 
                        variants={fadeInUp}
                        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed font-medium px-4"
                        style={{ fontFamily: 'Lato, serif' }}
                    >
                        TriMetrix HD is the world’s most advanced assessment, giving you deep insights into how you behave, what drives you, how you think, and what you’re truly capable of. It helps you unlock your leadership style and fuel your company’s growth.
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
                                Get My TriMetrix HD Report 
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

                    {/* Social Proof Banner - Enhanced Premium Design */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-12 sm:mt-16 relative bg-white rounded-xl shadow-sm hover:shadow-xl p-8 sm:p-10 md:p-12 overflow-hidden transition-all duration-700 transform hover:-translate-y-1 group w-full max-w-4xl"
                    >
                        {/* Subtle gradient from top-right */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-50/30 via-red-50/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />

                        <div className="relative">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                                {/* Left Side - Content */}
                                <div className="flex items-center gap-4 sm:gap-6 flex-1">
                                    <div className="flex-1">
                                        <div
                                            className="font-black text-xl sm:text-2xl md:text-3xl text-black mb-2 group-hover:text-red-600 transition-colors duration-300"
                                            style={{ fontFamily: 'Lora, serif' }}
                                        >
                                            Over 14573+ People
                                        </div>
                                        <p
                                            className="text-sm sm:text-base text-gray-600 leading-relaxed"
                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                        >
                                            Who have transformed their careers with expert TriMetrix guidance with us.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Side - Stats or Visual Element */}
                                <div className="flex items-center gap-6 sm:gap-8 border-l-0 md:border-l-2 border-gray-200 pl-0 md:pl-6 md:pl-8">
                                    <div className="text-center">
                                        <div
                                            className="text-2xl sm:text-3xl md:text-4xl font-black text-red-600 mb-1"
                                            style={{ fontFamily: 'Lora, serif' }}
                                        >
                                            95%
                                        </div>
                                        <div
                                            className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider font-semibold"
                                            style={{ fontFamily: 'Lato, sans-serif' }}
                                        >
                                            Satisfaction
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}