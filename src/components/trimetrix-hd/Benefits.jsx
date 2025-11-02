"use client";

import { Users, TrendingUp, Target, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const keyBenefits = [
    "Identify strengths and development areas with precision",
    "Build high-performing teams with complementary skills",
    "Make smarter hiring decisions based on data",
    "Increase employee satisfaction and motivation",
];

const capabilities = [
    {
        icon: Users,
        title: "Build High-Performing Teams",
    },
    {
        icon: TrendingUp,
        title: "Accelerate Professional Growth",
    },
    {
        icon: Target,
        title: "Cultivate Next-Gen Leadership",
    },
    {
        icon: ShieldCheck,
        title: "Mitigate Organizational Challenges",
    },
];

export default function Benefits() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} id="benefits" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-white relative overflow-hidden">
            <div className="container px-4 sm:px-6 lg:px-8 relative">
                <div 
                    className={`text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider text-center md:text-lg mb-8 sm:mb-12 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ fontFamily: 'Lora, sans-serif' }}
                >
                    Transform Your Organization With Science-Backed Insights
                </div>

                {/* Card Design - Matching Image Style with Animations */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        {/* Key Benefits Card */}
                        <div 
                            className={`relative bg-white rounded-xl shadow-sm hover:shadow-xl p-6 sm:p-8 md:p-10 overflow-hidden transition-all duration-700 transform hover:-translate-y-2 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                            style={{ transitionDelay: '200ms' }}
                        >
                            {/* Animated gradient from top-right */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-50/30 via-red-50/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />

                            <div className="relative">
                                {/* Section Label */}
                                <div 
                                    className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider mb-4 animate-fade-in"
                                    style={{ fontFamily: 'Lato, sans-serif' }}
                                >
                                    Key Benefits
                                </div>

                                {/* Main Heading */}
                                <h3
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 leading-tight group-hover:text-red-600 transition-colors duration-300"
                                    style={{ fontFamily: 'Lora, serif' }}
                                >
                                    Unlock Your Team's Potential
                                </h3>

                                {/* Body Paragraph */}
                                <p
                                    className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                                    style={{ fontFamily: 'Lato, sans-serif' }}
                                >
                                    Discover actionable insights that drive organizational success through comprehensive assessment and analysis.
                                </p>

                                {/* Bulleted List with Stagger Animation */}
                                <ul className="space-y-3 sm:space-y-4">
                                    {keyBenefits.map((benefit, index) => (
                                        <li 
                                            key={index} 
                                            className={`flex items-start gap-3 group transition-all duration-500 transform hover:translate-x-2 ${
                                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                            }`}
                                            style={{ transitionDelay: `${400 + (index * 100)}ms` }}
                                        >
                                            <div className="flex-shrink-0 mt-1.5">
                                                <div className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-red-600/50 transition-all duration-300" />
                                            </div>
                                            <span
                                                className="text-sm sm:text-base text-gray-600 group-hover:text-black leading-relaxed transition-colors duration-300"
                                                style={{ fontFamily: 'Lato, sans-serif' }}
                                            >
                                                {benefit}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Core Capabilities Card */}
                        <div 
                            className={`relative bg-white rounded-xl shadow-sm hover:shadow-xl p-6 sm:p-8 md:p-10 overflow-hidden transition-all duration-700 transform hover:-translate-y-2 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                            style={{ transitionDelay: '400ms' }}
                        >
                            {/* Animated gradient from top-right */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-50/30 via-red-50/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />

                            <div className="relative">
                                {/* Section Label */}
                                <div 
                                    className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider mb-4"
                                    style={{ fontFamily: 'Lato, sans-serif' }}
                                >
                                    Core Capabilities
                                </div>

                                {/* Main Heading */}
                                <h3
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 leading-tight group-hover:text-red-600 transition-colors duration-300"
                                    style={{ fontFamily: 'Lora, serif' }}
                                >
                                    Comprehensive Solutions for Growth</h3>

                                {/* Body Paragraph */}
                                <p
                                    className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                                    style={{ fontFamily: 'Lato, sans-serif' }}
                                >
                                    Leverage advanced methodologies and expert guidance to transform your organization's performance and culture.
                                </p>

                                {/* Bulleted List with Stagger Animation */}
                                <ul className="space-y-3 sm:space-y-4">
                                    {capabilities.map((capability, index) => {
                                        const Icon = capability.icon;
                                        return (
                                            <li 
                                                key={index} 
                                                className={`flex items-start gap-3 group transition-all duration-500 transform hover:translate-x-2 ${
                                                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                                }`}
                                                style={{ transitionDelay: `${600 + (index * 100)}ms` }}
                                            >
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-red-600/50 transition-all duration-300" />
                                                </div>
                                                <span
                                                    className="text-sm sm:text-base text-gray-600 group-hover:text-black leading-relaxed transition-colors duration-300"
                                                    style={{ fontFamily: 'Lato, sans-serif' }}
                                                >
                                                    {capability.title}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
