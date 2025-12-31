'use client';

import { Play, ArrowRight, Calendar, Award, Users, GraduationCap, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
const HeroMembershipCta = () => {
    const scrollToEGAModule = () => {
        const egaModule = document.getElementById('ega-module');
        if (egaModule) {
            egaModule.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    const router = useRouter();
    const handleJoinProgram = () => {
        router.push('/ega/registration-form');
    };
    return (
        <section className="bg-background">
            <div className="container pt-24 pb-12 md:py-20 lg:py-24 lg:pt-36">
                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <div className="text-center ">
                        {/* Heading Section */}
                        <div className="mb-6 lg:mb-8">
                            <h1 className="font-serif font-bold text-text-primary text-[36px] sm:text-[48px] md:text-[56px]  text-center  leading-[1.1] tracking-[-0.02em] mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                                <span className="text-red-600">Scale your business faster</span>
                                <br className="hidden sm:block" />
                                <span className="block mt-2 sm:mt-0">by fixing the People, Processes,</span>
                                <span className="block">and Strategy holding you back.</span>
                            </h1>
                        </div>

                        {/* Subheading Section */}
                        <div className="mb-8 lg:mb-10 max-w-3xl mx-auto">
                            <p className="text-base text-center sm:text-lg md:text-xl lg:text-2xl text-text-secondary leading-relaxed font-medium"
                                style={{ fontFamily: 'Inter, sans-serif' }}>
                                VRT Management Group helps USA-focused SMB owners/CEOs turn "stuck" into
                                clear priorities, strong execution, and predictable profit without guessing what to do next.
                            </p>
                        </div>

                        {/* Date Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border-2 border-red-200 bg-red-50 px-4 py-2.5 shadow-sm mb-8"
                            style={{ fontFamily: 'Inter, serif' }}
                        >
                            <Calendar className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                            <span className="text-base md:text-lg lg:text-xl font-semibold tracking-wide text-red-700">
                                Cohort starts on 19<sup>th</sup> Feb 2026
                            </span>
                        </div>
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-gray-50 to-red-50 border-2 border-gray-200 hover:border-red-300 transition-all duration-300 shadow-sm hover:shadow-md">
                                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0" />
                                <p className="text-base md:text-lg font-semibold text-text-primary" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    Do you want to scale your business through EGA?{' '}
                                    <span className="text-red-600 font-bold">Check Eligibility</span>
                                </p>
                            </div>
                        </div>                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                onClick={() => handleJoinProgram()}
                                className="group relative p-5 bg-red-600 border-2 border-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-red-600 hover:border-red-600 w-full sm:w-auto"
                                style={{ fontFamily: 'Inter, serif' }}
                            >
                                <span className="relative z-10 flex items-center gap-2 justify-center">
                                    Click Here
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Button>

                            <Button
                                onClick={scrollToEGAModule}
                                className="group relative p-5 bg-white border-2 border-black text-black font-semibold rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:border-black w-full sm:w-auto"
                                style={{ fontFamily: 'Inter, serif' }}
                            >
                                <span className="relative z-10 flex items-center gap-2 justify-center">
                                    See program content
                                    <Play className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Stats/Points Section */}
                <div className="mt-16 md:mt-20 lg:mt-24 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="font-serif text-text-primary text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ fontFamily: 'Lora, serif' }}>
                            What is{' '}
                            <span className="text-red-600">Entrepreneur Growth Alliance™</span>?
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                        EGA is a mentorship program built to help entrepreneurs scale faster by turning strategy into execution through proven processes and hands-on coaching.  
                        </p>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                            {/* Point 1 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-red-600 flex items-center justify-center mb-6">
                                    <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-red-600" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4  tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    40+ Years
                                </h3>
                                <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-sm" style={{ fontFamily: 'Inter, serif' }}>
                                    of leadership and business experience
                                </p>
                            </div>

                            {/* Point 2 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-red-600 flex items-center justify-center mb-6">
                                    <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-red-600" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    1,420+ Entrepreneurs
                                </h3>
                                <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-sm" style={{ fontFamily: 'Inter, serif' }}>
                                    Coached and mentored to success
                                </p>
                            </div>

                            {/* Point 3 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-red-600 flex items-center justify-center mb-6">
                                    <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-red-600" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    $520M+

                                </h3>
                                <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-sm" style={{ fontFamily: 'Inter, serif' }}>
                                    Millions in economic value generated for clients

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroMembershipCta;