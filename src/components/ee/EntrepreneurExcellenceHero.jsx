"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function EntrepreneurExcellenceHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-cover bg-center pt-20" style={{backgroundImage: "url('/ee/section1/bgImage.jpeg')"}}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Right Image - Positioned at bottom */}
      <div className="absolute bottom-0 right-0 hidden lg:block h-screen w-1/2 z-0 ">
        <Image
          src="/EE/section1/rajesh_sir_image.png"
          alt="Rajesh Sir"
          fill
          className="object-contain object-right object-bottom"
          priority
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full h-screen px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full lg:w-1/2">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Entrepreneur<span className="text-red-600">Excellence</span><sup className='text-red-600'>©</sup>
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
              A Psychometric Blueprint for Entrepreneurial Success
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
    </section>
  );
}
