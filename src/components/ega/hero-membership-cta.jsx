 'use client';
 
 import React, { useState, useEffect } from 'react';
 
 import { Play, ArrowRight, Calendar, Award, Users, GraduationCap, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import HeroSection from './hero-section';
import HeroMembershipContent from './HeroMembershipContent';
import { useSiteSchedule } from '@/contexts/SiteScheduleContext';
import { resolveMembershipStats } from '@/lib/site-schedule-defaults';
 
 // Simple CountUp component (animates from 0 to end)
 function CountUp({ end, duration = 1200, format = false }) {
   const [value, setValue] = useState(0);
   useEffect(() => {
     let rafId;
     let start = null;
     const step = (timestamp) => {
       if (!start) start = timestamp;
       const progress = Math.min((timestamp - start) / duration, 1);
       const current = Math.floor(progress * end);
       setValue(current);
       if (progress < 1) {
         rafId = requestAnimationFrame(step);
       } else {
         setValue(end);
       }
     };
     rafId = requestAnimationFrame(step);
     return () => cancelAnimationFrame(rafId);
   }, [end, duration]);

   if (format) {
     return <>{new Intl.NumberFormat().format(value)}</>;
   }
   return <>{value}</>;
 }
const HeroMembershipCta = () => {
    const { ega } = useSiteSchedule();
    const {
        yearsExperience,
        companiesCount,
        financialImpactMillions,
        captionYears,
        captionCompanies,
        captionFinancial,
    } = resolveMembershipStats(ega);
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
    const [loadingJoin, setLoadingJoin] = useState(false);
    const handleJoinProgram = () => {
        setLoadingJoin(true);
        router.push('/ega/registration-form');
    };
    return (
        <section className="bg-background">
            <div className="container pt-24 pb-12 md:py-20 lg:py-24 lg:pt-18">
                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <div className="text-center ">
                        {/* Heading Section */}
                       

                       
                        {/* Date Badge */}
                        {/* <div className="inline-flex items-center gap-2 rounded-full border-2 border-red-200 bg-red-50 px-4 py-2.5 shadow-sm mb-8"
                            style={{ fontFamily: 'Inter, serif' }}
                        >
                            <Calendar className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                            <span className="text-base md:text-lg lg:text-xl font-semibold tracking-wide text-red-700">
                                Cohort starts on 19<sup>th</sup> March 2026
                            </span>
                        </div> */}
                  
                    </div>
                </div>
                <HeroMembershipContent />
                {/* <HeroSection /> */}
                {/* Stats/Points Section */}
                <div className="mt-16 md:mt-20 lg:mt-24 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="font-serif text-text-primary text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ fontFamily: 'Lora, serif' }}>
                            What is{' '}
                            <span className="text-red-600">
                                Entrepreneurs Growth Alliance
                                <sup className="text-md  ml-0.5">©</sup>
                                </span> ?
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-medium max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Most entrepreneurs have the vision. Few have the system to scale it.
EGA<sup>©</sup> is a proven growth workshop that gives you structured training, hands on support, and strategic advisory to stop spinning your wheels and start scaling with confidence.

                        </p>
                    </div>
                    
                    <div className="max-w-6xl mx-auto">
                        <div className='flex justify-center mb-8'>
                    <p className="inline-flex items-center justify-center px-4 py-2 text-red-500 bg-red-200 rounded-lg">
  Proven results
</p>
</div>


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                            {/* Point 1 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-red-600 flex items-center justify-center mb-6">
                                    <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-red-600" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4  tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    <CountUp end={yearsExperience} duration={900} key={yearsExperience} />+ Years
                                </h3>
                                <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-sm" style={{ fontFamily: 'Inter, serif' }}>
                                    {captionYears}
                                </p>
                            </div>

                            {/* Point 2 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-red-600 flex items-center justify-center mb-6">
                                    <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-red-600" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    <CountUp end={companiesCount} duration={1200} format key={companiesCount} />+ Companies
                                </h3>
                                <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-sm" style={{ fontFamily: 'Inter, serif' }}>
                                    {captionCompanies}
                                </p>
                            </div>

                            {/* Point 3 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-red-600 flex items-center justify-center mb-6">
                                    <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-red-600" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    ${<CountUp end={financialImpactMillions} duration={1200} key={financialImpactMillions} /> }M+
                                </h3>
                                <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-sm" style={{ fontFamily: 'Inter, serif' }}>
                                    {captionFinancial}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='my-8'>
                    <div className="mb-8 flex items-center justify-center">
                            <div className="flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-gray-50 to-red-50 border-2 border-gray-200 hover:border-red-300 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0" />
                                    <p className="text-base md:text-lg font-semibold text-text-primary" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Do you want to scale your business through EGA<sup>©</sup>?{' '}
                                        {/* <span className="text-red-600 font-bold">Check Eligibility</span> */}
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-3 sm:mt-0">
                            <Button
                                onClick={() => handleJoinProgram()}
                                disabled={loadingJoin}
                                className="group relative p-5 bg-red-600 border-2 border-red-600 text-white cursor-pointer font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-red-600 hover:border-red-600 w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                                style={{ fontFamily: 'Inter, serif' }}
                            >
                                <span className="relative z-10 flex items-center gap-3 justify-center">
                                    {loadingJoin && (
                                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" aria-hidden="true"></span>
                                    )}
                                    <span className="flex items-center gap-2">
                                        Click Here
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </span>
                            </Button>

                            {/* <Button
                                onClick={scrollToEGAModule}
                                className="group relative p-5 bg-white border-2 border-black text-black font-semibold rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:border-black w-full sm:w-auto"
                                style={{ fontFamily: 'Inter, serif' }}
                            >
                                <span className="relative z-10 flex items-center gap-2 justify-center">
                                    See program content
                                    <Play className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                </span>
                            </Button> */}
                        </div>
                            </div>
                        </div>                        {/* CTA Buttons */}
                        
                        </div>
                </div>
            </div>
        </section>
    );
};

export default HeroMembershipCta;
