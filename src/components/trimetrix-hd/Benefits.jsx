"use client";

import { useEffect, useRef, useState } from "react";

const keyBenefits = [
    {
        heading: "Uncover Your True Drive (The 'Why')",
        description: "Stop guessing what motivates or stresses you. The report reveals your Driving Forces so you can focus on energizing work and increase life satisfaction.",
    },
    {
        heading: "Master Your Decision-Making (The 'How You Think')",
        description: "See how your mind analyzes experiences (Acumen). This clearer self-view boosts performance and helps you make sound, timely decisions for you and your business.",
    },
    {
        heading: "Know Your Entrepreneurial Superpowers (The 'What You Do Well')",
        description: "Pinpoint your top 25 natural professional skills (Competencies). Use them to concentrate on high-impact work and delegate tasks that drain you.",
    },
    {
        heading: "Build a Better Personal Brand (The 'How You Act')",
        description: "Understand how you approach challenges and influence others (Behaviors). Knowing strengths and gaps lets you adapt to demands and connect more effectively.",
    },
    {
        heading: "A Clear Roadmap for Growth (The 'Where to Focus')",
        description: "The assessment integrates all four dimensions to map your talents. It provides a solid foundation for growth and highlights specific improvement areas.",
    },
];

const capabilities = [
    {
        heading: "Strategic Talent Deployment",
        description: "The report pinpoints the measurable value each person brings. You can place the right people in the right roles where they naturally perform best.",
    },
    {
        heading: "Predictive Conflict Resolution",
        description: "Knowing deep motivations (Driving Forces) reveals the roots of conflict before they flare. This enables quick resolutions that protect relationships and improve outcomes.",
    },
    {
        heading: "Data-Driven Leadership",
        description: "Each style includes \"Keys to Motivating\" and \"Keys to Managing.\" Leaders get practical coaching cues to inspire confidence and maximize every individual.",
    },
    {
        heading: "Future-Proof Innovation",
        description: "The assessment spots forward-looking, status-quo-challenging thinkers. They become your pioneers for new directions and tough assignments.",
    },
    {
        heading: "Enhanced Organizational Clarity",
        description: "Assessing all key members creates a \"Dimensional Balance\" view of people, tasks, and systems. This collective lens clarifies problem-solving capacity so strategy reflects reality.",
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
                    Transform Yourself And Your Organization With Science-Backed Insights
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

                                {/* Main Heading */}
                                <h3
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 leading-tight group-hover:text-red-600 transition-colors duration-300"
                                    style={{ fontFamily: 'Lora, serif' }}
                                >
                                    The Value You Get
                                </h3>

                                {/* Body Paragraph */}
                                <p
                                    className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                                    style={{ fontFamily: 'Lato, sans-serif' }}
                                >
                                    The TriMetrix assessment gives you the ultimate self-awareness toolkit to master your performance and satisfaction.

                                </p>

                                {/* Bulleted List with Stagger Animation */}
                                <ul className="space-y-4 sm:space-y-5">
                                    {keyBenefits.map((benefit, index) => (
                                        <li 
                                            key={index} 
                                            className={`group transition-all duration-500 transform hover:translate-x-2 ${
                                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                            }`}
                                            style={{ transitionDelay: `${400 + (index * 100)}ms` }}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-red-600/50 transition-all duration-300" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4
                                                        className="text-base sm:text-lg font-semibold text-black mb-2 group-hover:text-red-600 transition-colors duration-300 leading-tight"
                                                        style={{ fontFamily: 'Lora, serif' }}
                                                    >
                                                        {benefit.heading}
                                                    </h4>
                                                    <p
                                                        className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 leading-relaxed transition-colors duration-300"
                                                        style={{ fontFamily: 'Lato, sans-serif' }}
                                                    >
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                            </div>
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

                                {/* Main Heading */}
                                <h3
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 leading-tight group-hover:text-red-600 transition-colors duration-300"
                                    style={{ fontFamily: 'Lora, serif' }}
                                >
                                    The Value for Your Business</h3>

                                {/* Body Paragraph */}
                                <p
                                    className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                                    style={{ fontFamily: 'Lato, sans-serif' }}
                                >
                                   Leverage Tri Metrix insights to drive operational efficiency, strategic growth, and team cohesion.

                                </p>

                                {/* Bulleted List with Stagger Animation */}
                                <ul className="space-y-4 sm:space-y-5">
                                    {capabilities.map((capability, index) => (
                                        <li 
                                            key={index} 
                                            className={`group transition-all duration-500 transform hover:translate-x-2 ${
                                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                            }`}
                                            style={{ transitionDelay: `${600 + (index * 100)}ms` }}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="flex-shrink-0 mt-1.5">
                                                    <div className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-red-600/50 transition-all duration-300" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4
                                                        className="text-base sm:text-lg font-semibold text-black mb-2 group-hover:text-red-600 transition-colors duration-300 leading-tight"
                                                        style={{ fontFamily: 'Lora, serif' }}
                                                    >
                                                        {capability.heading}
                                                    </h4>
                                                    <p
                                                        className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 leading-relaxed transition-colors duration-300"
                                                        style={{ fontFamily: 'Lato, sans-serif' }}
                                                    >
                                                        {capability.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
