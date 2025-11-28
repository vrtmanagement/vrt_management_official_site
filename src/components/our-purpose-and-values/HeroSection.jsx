"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative flex items-center justify-center px-4 md:px-6 bg-white py-12 md:py-20 mt-22">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 order-1 lg:order-1"
                >
                    {/* Header with decorative elements */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mt-15 lg:mt-0" >
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 bg-red-500 rotate-45"></div>
                                <div className="w-3 h-3 bg-red-500 rotate-45"></div>
                                <div className="w-3 h-3 bg-red-500 rotate-45"></div>
                            </div>
                            <div className="h-px flex-1 bg-black/20 dark:bg-white/20"></div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white"
                        style={{ fontFamily: 'Merriweather, serif' }}
                        >
                            Our Mission
                        </h1>

                        <div className="flex items-center gap-3">
                            <div className="h-px flex-1 bg-black/20 dark:bg-white/20"></div>
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 bg-red-500 rotate-45"></div>
                                <div className="w-3 h-3 bg-red-500 rotate-45"></div>
                                <div className="w-3 h-3 bg-red-500 rotate-45"></div>
                            </div>
                        </div>
                    </div>


                    {/* Purpose Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex gap-6 items-start group"
                    >
                        <div className="space-y-2 flex-1">
                            <h2 className="text-2xl font-bold text-red-600"
                            style={{ fontFamily: 'Lora, serif' }}
                            >Purpose</h2>
                            <p className="text-black dark:text-white/80 leading-relaxed">
                                Our purpose is to ignite entrepreneurial
                                excellence, accelerate sustainable growth and
                                innovation, and build thriving businesses that
                                strengthen communities.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex gap-6 items-start group"
                    >
                        <div className="space-y-2 flex-1">
                            <h2 className="text-2xl font-bold text-red-600"
                            style={{ fontFamily: 'Lora, serif' }}
                            >Vision</h2>
                            <p className="text-black dark:text-white/80 leading-relaxed">Empowering 5,000 entrepreneur-led
                                businesses to scale, enhance leadership, and create $1 billion in economic impact by 2030.
                            </p>
                        </div>
                    </motion.div>

                </motion.div>


                {/* Right Side - Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex items-center justify-center order-2 lg:order-2 w-full mt-10 lg:mt-0"
                >
                    <div className="w-full relative aspect-[5/3] md:aspect-square lg:h-[400px]">
                        <Image
                            src="/purpose-value/hero.jpg"
                            alt="Purpose and values highlight"
                            fill
                            className="object-cover rounded-lg"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 640px"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}