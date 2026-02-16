 "use client";
 
 import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function EntrepreneurExcellenceHero() {
  const [showTopArrow, setShowTopArrow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = Math.max(3000, window.innerHeight * 3);
      setShowTopArrow(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <section className="relative w-full overflow-hidden bg-cover bg-center pt-20" style={{backgroundImage: "url('/EE/section1/bg1.png')"}}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Right Image - Positioned at bottom */}
      <div className="absolute bottom-0 right-0 hidden lg:block h-[600px] w-1/2 z-0 ">
        <Image
          src="/EE/section1/image1.png"
          alt="Rajesh Sir"
          fill
          className="object-contain object-right object-bottom"
          priority
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full min-h-[600px] px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full lg:w-1/2">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Entrepreneur<span className="text-red-600">Excellence</span><sup className='text-red-600'>©</sup>
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
              A Psychometric Workshop for Entrepreneurial Success
            </h2>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-100 max-w-md leading-relaxed">
              Scale smarter. Lead stronger. Join the research that's mapping the psychometric blueprint of high-growth entrepreneurs.
            </p>
            
            {/* CTA Button */}
            <Link href="#ee-assessment">
              <button className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded transition-colors duration-300 text-lg">
                Start the Quick 5 Minute Survey
                <ArrowRight size={24} />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`fixed right-6 bottom-8 z-50 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-opacity duration-300 ${
          showTopArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </section>
  );
}
