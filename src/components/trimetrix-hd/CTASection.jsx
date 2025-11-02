"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Shield, Clock, TrendingUp, Users, Award, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CTASection() {
    const router = useRouter();
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

    const handleScheduleCall = () => {
        router.push('/trimetrix/form');
    };

    return (
        <section ref={sectionRef} className="pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32 bg-white relative overflow-hidden">
            {/* Subtle accent gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-50/20 via-transparent to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-50/30 via-transparent to-transparent blur-3xl pointer-events-none" />

            <div className="container px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto">
                    {/* Main CTA Content - Two Column Layout */}
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
                        {/* Left Side - Content */}
                        <div className="space-y-5 sm:space-y-6 text-left">

                            {/* Main Heading */}
                            <h2
                                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                    }`}
                                style={{ fontFamily: 'Lora, serif', transitionDelay: '200ms' }}
                            >
                                Transform Your Leadership Journey
                            </h2>

                            {/* Subheading */}
                            <h3
                                className={`text-xl sm:text-2xl md:text-3xl font-bold text-red-600 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                    }`}
                                style={{ fontFamily: 'Lato, serif', transitionDelay: '300ms' }}
                            >
                                <span className="text-black">
                                    Unlock the Full Power of Your TriMetrix HD Report with{' '}
                                    <span className="text-red-600">Rajesh Tedla</span>
                                </span>
                            </h3>

                            <p
                                className={`text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                    }`}
                                style={{ fontFamily: 'Inter, sans-serif', transitionDelay: '400ms' }}
                            >
                                Schedule a personalized consultation with our certified analysts to dive deep into your assessment results and discover actionable insights tailored to your goals.
                            </p>

                            <div
                                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                    }`}
                                style={{ transitionDelay: '600ms' }}
                            >
                                <Link href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2025-06">
                                    <Button
                                        size="lg"
                                        className="bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 font-bold shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto"

                                    >
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Schedule Your Consultation
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div
                            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                                }`}
                            style={{ transitionDelay: '400ms' }}
                        >
                            <div className="relative w-full aspect-square max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/trimetrix/rajeshsirimage.png"
                                    alt="Expert Consultation"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Trust Indicators Grid - Premium Card Design */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
                        {/* Trust Badge 1 */}
                        <div
                            className={`group relative bg-white rounded-xl shadow-sm hover:shadow-xl p-6 sm:p-8 overflow-hidden transition-all duration-700 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '800ms' }}
                        >
                            {/* Subtle gradient from top-right */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-red-50/30 via-red-50/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
                            <div className="flex flex-col items-center text-center space-y-4 relative">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-red-600 bg-white flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                                    <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-red-600 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                                </div>
                                <h3
                                    className="text-lg sm:text-xl font-black text-black group-hover:text-red-600 transition-colors duration-300"
                                    style={{ fontFamily: 'Lora, serif' }}
                                >
                                    Certified Experts
                                </h3>
                                <p
                                    className="text-sm sm:text-base text-gray-600 leading-relaxed"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    Work with certified TriMetrix analysts with years of experience in talent optimization
                                </p>
                            </div>
                        </div>

                        {/* Trust Badge 2 */}
                        <div
                            className={`group relative bg-white rounded-xl shadow-sm hover:shadow-xl p-6 sm:p-8 overflow-hidden transition-all duration-700 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '1000ms' }}
                        >
                            {/* Subtle gradient from top-right */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-red-50/30 via-red-50/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
                            <div className="flex flex-col items-center text-center space-y-4 relative">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-red-600 bg-white flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                                    <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-red-600 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                                </div>
                                <h3
                                    className="text-lg sm:text-xl font-black text-black group-hover:text-red-600 transition-colors duration-300"
                                    style={{ fontFamily: 'Lora, serif' }}
                                >
                                    60-Minute Deep Dive
                                </h3>
                                <p
                                    className="text-sm sm:text-base text-gray-600 leading-relaxed"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    Comprehensive session covering all four sciences with personalized recommendations
                                </p>
                            </div>
                        </div>

                        {/* Trust Badge 3 */}
                        <div
                            className={`group relative bg-white rounded-xl shadow-sm hover:shadow-xl p-6 sm:p-8 overflow-hidden transition-all duration-700 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: '1200ms' }}
                        >
                            {/* Subtle gradient from top-right */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-red-50/30 via-red-50/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
                            <div className="flex flex-col items-center text-center space-y-4 relative">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-red-600 bg-white flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                                    <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-red-600 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                                </div>
                                <h3
                                    className="text-lg sm:text-xl font-black text-black group-hover:text-red-600 transition-colors duration-300"
                                    style={{ fontFamily: 'Lora, serif' }}
                                >
                                    Actionable Strategies
                                </h3>
                                <p
                                    className="text-sm sm:text-base text-gray-600 leading-relaxed"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    Walk away with concrete action plans to maximize your potential and performance
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Social Proof Banner - Enhanced Premium Design */}
                    <div
                        className={`mt-12 sm:mt-16 relative bg-white rounded-xl shadow-sm hover:shadow-xl p-8 sm:p-10 md:p-12 overflow-hidden transition-all duration-700 transform hover:-translate-y-1 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '1400ms' }}
                    >
                        {/* Subtle gradient from top-right */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-50/30 via-red-50/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />

                        <div className="relative">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                                {/* Left Side - Content */}
                                <div className="flex items-center gap-4 sm:gap-6 flex-1">
                                    <div className="relative">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-red-600 bg-white flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 rounded-lg">
                                            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                                        </div>

                                    </div>
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
                                            Who have transformed their careers with expert TriMetrix guidance with us
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
                    </div>

                    {/* What to Expect - Centered with Animations */}
                    <div
                        className={`mt-12 sm:mt-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '1600ms' }}
                    >
                        <h3
                            className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-8 sm:mb-10"
                            style={{ fontFamily: 'Lora, serif' }}
                        >
                            What You'll Gain From Your Consultation
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto text-left">
                            {[
                                "In-depth interpretation of your DISC behavioral profile",
                                "Clarity on your intrinsic motivators and driving forces",
                                "Strategic insights into your acumen and decision-making capacity",
                                "Personalized development plan based on your competency assessment",
                                "Career alignment recommendations and growth opportunities",
                                "Team dynamics optimization strategies"
                            ].map((benefit, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg bg-white border-2 border-black/10 hover:border-red-600/50 hover:bg-red-50/30 transition-all duration-500 transform hover:translate-x-2 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                        }`}
                                    style={{ transitionDelay: `${1800 + (index * 100)}ms` }}
                                >
                                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                        <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-red-600 bg-white flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                                            <Check className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <span
                                        className="text-sm sm:text-base text-gray-600 group-hover:text-black transition-colors duration-300 leading-relaxed"
                                        style={{ fontFamily: 'Lato, sans-serif' }}
                                    >
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
