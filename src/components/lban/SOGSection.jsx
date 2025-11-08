"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const SOGSection = () => {
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

    return (
        <section 
            id="sog"
            ref={sectionRef}
            className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24"
        >
            {/* Container */}
            <motion.div 
                className="container relative px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Main Card */}
                <motion.div 
                    className="relative bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 transition-all duration-300 group max-w-5xl mx-auto"
                    variants={itemVariants}
                >

                    <div className="relative space-y-5 sm:space-y-6 md:space-y-8">
                        {/* Section Label */}
                        <motion.div 
                            variants={fadeInUp}
                            className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider"
                            style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                            Stages of Growth
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h2 
                            variants={itemVariants}
                            className="text-[32px] md:text-[42px] leading-[1.2] font-bold tracking-tight text-black leading-[1.1] sm:leading-[1.15]"
                            style={{ fontFamily: 'Lora, serif' }}
                        >
                            What Stage Is Your Business in Right Now?
                        </motion.h2>

                        {/* Description */}
                        <motion.p 
                            variants={fadeInUp}
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed max-w-4xl"
                            style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                            The Stages of growth assessment is the definitive growth framework, proven by research, that gives your business a complete 'X-Ray'—pinpointing the exact stage you're in, defining your unique 27 Challenges, and delivering the 5 Must-Do Priorities for scaling faster.
                        </motion.p>

                        {/* Highlighted Callout */}
                        <motion.div 
                            variants={fadeInUp}
                            className="relative bg-red-50/50 border-l-4 border-red-600 rounded-r-lg p-4 sm:p-6 md:p-8 my-4 sm:my-6 md:my-8"
                        >
                            <p 
                                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-medium"
                                style={{ fontFamily: 'Lato, sans-serif' }}
                            >
                                The real difference between a company that survives and one that scales is <span className="font-semibold text-red-600">Stage-fit execution</span>, knowing your current stage and running the right playbook for it. When your priorities, people, and processes are aligned to your current stage of growth, you can grow your business faster.
                            </p>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div 
                            variants={fadeInUp}
                            className="pt-2 sm:pt-4"
                        >
                            <Button 
                                size="lg" 
                                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base md:text-lg px-5 sm:px-7 md:px-9 h-10 sm:h-11 md:h-14 font-semibold transition-all duration-300"
                                onClick={() => router.push('/sog')}
                            >
                                <span className="flex items-center justify-center sm:justify-start">
                                    <span className="hidden sm:inline">Want to know more details click here</span>
                                    <span className="sm:hidden">Learn More</span>
                                    <ArrowRight className="ml-2 h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                                </span>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SOGSection;