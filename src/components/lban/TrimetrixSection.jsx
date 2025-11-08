"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const TrimetrixSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const router = useRouter();

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const slideInLeft = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
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
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    return (
        <section 
            id="trimetrix"
            ref={sectionRef}
            className="relative bg-white py-8 sm:py-10 md:py-12 lg:py-14"
        >
            <div className="container relative px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Asymmetric Layout with Left Border Accent */}
                    <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
                        {/* Left Border Accent - Desktop */}
                        <motion.div 
                            className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-red-600"
                            variants={slideInLeft}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        />

                        {/* Mobile Top Border */}
                        <motion.div 
                            className="md:hidden absolute top-0 left-0 right-0 h-1 bg-red-600"
                            variants={fadeInUp}
                        />

                        {/* Content Area */}
                        <div className="flex-1 pt-4 md:pt-0 md:pl-8 lg:pl-12">
                            <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                {/* Section Label */}
                                <motion.div 
                                    variants={fadeInUp}
                                    className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider"
                                    style={{ fontFamily: 'Lato, sans-serif' }}
                                >
                                    TriMetrix HD
                                </motion.div>

                                {/* Main Heading */}
                                <motion.h2 
                                    variants={slideInLeft}
                                    className="text-[32px] md:text-[42px] leading-[1.2] font-bold tracking-tight text-black leading-[1.1] sm:leading-[1.15]"
                                    style={{ fontFamily: 'Lora, serif' }}
                                >
                                    Know Yourself. Lead Better. Scale Faster.
                                </motion.h2>

                                {/* Sub-headline / Value Proposition */}
                                <motion.div 
                                    variants={fadeInUp}
                                    className="pt-1 sm:pt-2"
                                >
                                    <p 
                                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed max-w-4xl"
                                        style={{ fontFamily: 'Lato, sans-serif' }}
                                    >
                                        TriMetrix HD is the world's most advanced assessment, giving you deep insights into how you behave, what drives you, how you think, and what you're truly capable of. It helps you unlock your leadership style and fuel your company's growth.
                                    </p>
                                </motion.div>

                                {/* CTA Button */}
                                <motion.div 
                                    variants={fadeInUp}
                                    className="pt-3 sm:pt-4 md:pt-5"
                                >
                                    <Button 
                                        size="lg" 
                                        className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 h-11 sm:h-12 md:h-14 font-semibold transition-all duration-300 rounded-md"
                                        onClick={() => router.push('/trimetrix')}
                                    >
                                        <span className="flex items-center justify-center sm:justify-start">
                                            Get My TriMetrix HD Report
                                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                                        </span>
                                    </Button>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Side Visual Element - Geometric Shape */}
                        <motion.div 
                            className="hidden lg:flex items-center justify-center flex-shrink-0"
                            variants={fadeInUp}
                        >
                            <div className="relative w-32 h-32 md:w-40 md:h-40">
                                {/* Geometric shapes */}
                                <motion.div
                                    className="absolute inset-0 border-4 border-red-600/20 rotate-45"
                                    animate={{
                                        rotate: [45, 405],
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                                <motion.div
                                    className="absolute inset-4 border-4 border-red-600/30 rotate-12"
                                    animate={{
                                        rotate: [12, 372],
                                    }}
                                    transition={{
                                        duration: 15,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                                <div className="absolute inset-8 bg-red-600/10 rounded-full" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TrimetrixSection;