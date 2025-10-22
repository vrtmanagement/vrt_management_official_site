'use client';

import { Play, ArrowRight, Calendar } from 'lucide-react';
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
            <div className="container py-12 md:py-20 lg:py-20 lg:pt-36">
                <div className="flex flex-wrap lg:items-center justify-center">
                    {/* Left Column: Text Content */}
                    <div className="w-full lg:w-5/12 xl:w-2/5 order-2 lg:order-1 text-center lg:text-left mt-8 lg:mt-0 px-4 sm:px-6 md:px-8 lg:px-4 xl:px-6">
                        <h1 className="font-serif font-bold text-text-primary text-[28px] lg:text-[52px] leading-[1.1] tracking-[-0.02em]" style={{ fontFamily: 'Merriweather, serif' }}>
                        Standardize the Work and Scale the Team 
                        </h1>

                        <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0"
                            style={{ fontFamily: 'Inter, serif' }}>
                            Cut 80% of noise. Focus on the 20% that grows margin, capacity, and cash flow.
                        </p>
                        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-sm mt-4"
                            style={{ fontFamily: 'Inter, serif' }}
                        >
                            <Calendar className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                            <span className="text-base md:text-lg lg:text-xl font-semibold tracking-wide">
                                Cohort starts on 5<sup>th</sup> Feb 2026
                            </span>
                        </div>
                            <br />

                        <Button
                            onClick={() => handleJoinProgram()}
                            className="group relative p-5 bg-red-600 border-2 border-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-red-600 hover:border-red-600 mt-4 mr-4"
                            style={{ fontFamily: 'Inter, serif' }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Join Program
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </Button>

                        <Button
                            onClick={scrollToEGAModule}
                            className="group relative p-5 bg-white border-2 border-black text-black font-semibold rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:border-black mt-4"
                            style={{ fontFamily: 'Inter, serif' }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                See program content
                                <Play className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                            </span>
                          
                        </Button>
                    </div>

                    {/* Right Column: Video Player */}
                    <div className="w-full lg:w-6/12 xl:w-2/5 order-1 lg:order-2 lg:pl-6 xl:pl-8 mx-4 sm:mx-8 md:mx-0 mt-8 sm:mt-16 lg:mt-0">
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-black shadow-lg max-h-[400px]">
                            {/* <video
                                src="https://assets.mindvalley.com/api/v1/assets/419adf75-1cab-400c-88b0-0236c32bce03.mp4"
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" // Tiny black pixel poster to avoid flash of empty container
                            >
                                To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video
                            </video> */}

                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    aria-label="Play class trailer"
                                    className="flex items-center gap-2 rounded-sm border border-white/20 bg-black/30 px-5 py-2.5 text-white backdrop-blur-[2px] transition-colors hover:bg-black/50"
                                    onClick={(e) => {
                                        const video = e.currentTarget.parentElement?.previousElementSibling;
                                        if (video) {
                                            video.muted = false;
                                            video.play();
                                            e.currentTarget.style.display = 'none'; // Hide button after click
                                        }
                                    }}
                                >
                                    <Play className="h-4 w-4 fill-white" />
                                    <span className="text-sm font-medium tracking-wide">Class Trailer</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroMembershipCta;