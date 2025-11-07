'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Left sliding side cards are rendered conditionally (lg+)

  return (
    <section className="relative min-h-[75vh] sm:min-h-[80vh] md:min-h-[85vh] lg:h-screen flex items-center justify-center overflow-hidden py-10 sm:py-12 pt-24 sm:pt-28 md:pt-32">
      {/* Premium Video Background */}
      <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
          playsInline
          className="w-full h-full object-cover scale-110"
      >
        <source src="https://vrt9.net/sog/heros.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
        {/* Sophisticated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/50" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 hidden md:block">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#DC143C]/30 to-transparent rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-slate-500/15 to-transparent rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Sliding Side Cards (Bottom Left, Desktop Only) */}
      <div className="absolute bottom-8 left-8 z-30 hidden xl:block">
        <div className="space-y-4">
          <div
            className={`transform transition-all duration-1200 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="w-[220px] bg-white/8 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl hover:bg-white/12 transition-all duration-300 hover:scale-105">
              <div className="p-4">
                <h3 style={{ fontFamily: 'Merriweather, serif' }} className="text-white text-lg font-bold mb-1.5">Pinpoint Your Stage</h3>
                <p style={{ fontFamily: 'Inter, serif' }} className="text-white/75 text-xs leading-relaxed">Proven Instantly identify your company's true stage of growth to apply the right rules at the right time and proactively plan for the next stage.</p>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1200 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="w-[220px] bg-white/8 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl hover:bg-white/12 transition-all duration-300 hover:scale-105">
              <div className="p-4">
                <h3 style={{ fontFamily: 'Merriweather, serif' }} className="text-white text-lg font-bold mb-1.5">Resolve Core Issues</h3>
                <p style={{ fontFamily: 'Inter, serif' }} className="text-white/75 text-xs leading-relaxed">See precisely where your team stands on the 27 Challenges. Get to the root cause of problems like Hiring Quality Staff, Staff Buy In, and No Systems In Place.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Side Cards (Bottom Right, Desktop Only) */}
      <div className="absolute bottom-8 right-8 z-30 hidden xl:block">
        <div className="space-y-4">
          <div
            className={`transform transition-all duration-1200 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            style={{ transitionDelay: '900ms' }}
          >
            <div className="w-[220px] bg-white/8 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl hover:bg-white/12 transition-all duration-300 hover:scale-105">
              <div className="p-4">
                <h3 style={{ fontFamily: 'Merriweather, serif' }} className="text-white text-lg font-bold mb-1.5">Uncover Your Hidden Mindset</h3>
                <p style={{ fontFamily: 'Inter, serif' }} className="text-white/75 text-xs leading-relaxed">Measure your organization's internal "mental health" with the critical Builder/Protector Ratio to understand your culture's capacity for change and risk.</p>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1200 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            style={{ transitionDelay: '1100ms' }}
          >
            <div className="w-[220px] bg-white/8 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl hover:bg-white/12 transition-all duration-300 hover:scale-105">
              <div className="p-4">
                <h3 style={{ fontFamily: 'Merriweather, serif' }} className="text-white text-lg font-bold mb-1.5">Access Your Treatment Plan</h3>
                <p style={{ fontFamily: 'Inter, serif' }} className="text-white/75 text-xs leading-relaxed">Receive the specific, actionable 5 Non-Negotiable Rules for your stage of growth to ensure you focus on the right solution at the right time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 ">
        <div className={`transition-all duration-1500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

          {/* Main Headline with Staggered Animation */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h1 
              style={{ fontFamily: 'Merriweather, serif' }}
              className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl leading-[1.05] tracking-tight text-white mb-5 sm:mb-4 lg:mb-6"
            >
              <span 
                className={`block text-white/95 mb-4 sm:mb-3 lg:mb-4 transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '400ms' }}
              >
             What Stage Is Your Business in 
              </span>
              <span 
                className={`block bg-gradient-to-r from-[#DC143C] via-red-500 to-[#DC143C] bg-clip-text text-transparent transition-all duration-1500 pb-3 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '800ms' }}
              >
               Right Now?
              </span>
            </h1>
            
            <p 
              style={{ fontFamily: 'Inter, serif', transitionDelay: '1000ms' }}
              className={`text-base sm:text-base md:text-lg lg:text-xl xl:text-xl text-white/85 max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-normal sm:leading-relaxed font-light transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              The stages of growth assessment is a definitive growth framework, proven by research, that gives your business a complete 'X-Ray' pinpointing the exact stage you’re in, defining your unique 27 Challenges, and delivering the 5 Must-Do Priorities for scaling faster.’
            </p>

            <div className={`flex justify-center mt-6 sm:mt-8 lg:mt-10 transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1200ms' }}>
              <Link 
                href="/stages-of-growth-form"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#DC143C] via-red-500 to-[#DC143C] text-white font-semibold text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ fontFamily: 'Inter, serif' }}
              >
                Take Your Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;