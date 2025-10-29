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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 z-10">
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
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-[#DC143C] rounded-full animate-pulse" />
                  <p style={{ fontFamily: 'Inter, serif' }} className="text-[10px] tracking-wider uppercase text-white/60 font-medium">Growth Framework</p>
                </div>
                <h3 style={{ fontFamily: 'Merriweather, serif' }} className="text-white text-lg font-bold mb-1.5">Strategic Playbook</h3>
                <p style={{ fontFamily: 'Inter, serif' }} className="text-white/75 text-xs leading-relaxed">Proven frameworks to scale your business with clarity and systematic growth.</p>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1200 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="w-[220px] bg-white/8 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl hover:bg-white/12 transition-all duration-300 hover:scale-105">
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                  <p style={{ fontFamily: 'Inter, serif' }} className="text-[10px] tracking-wider uppercase text-white/60 font-medium">Assessment Tool</p>
                </div>
                <h3 style={{ fontFamily: 'Merriweather, serif' }} className="text-white text-lg font-bold mb-1.5">Stage Analysis</h3>
                <p style={{ fontFamily: 'Inter, serif' }} className="text-white/75 text-xs leading-relaxed">Identify your current growth stage and discover your next strategic moves.</p>
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
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-[#DC143C] rounded-full animate-pulse" />
                  <p style={{ fontFamily: 'Inter, serif' }} className="text-[10px] tracking-wider uppercase text-white/60 font-medium">Success Metrics</p>
                </div>
                <h3 style={{ fontFamily: 'Merriweather, serif' }} className="text-white text-lg font-bold mb-1.5">Performance Track</h3>
                <p style={{ fontFamily: 'Inter, serif' }} className="text-white/75 text-xs leading-relaxed">Monitor indicators and measure business growth with precision analytics.</p>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1200 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            style={{ transitionDelay: '1100ms' }}
          >
            <div className="w-[220px] bg-white/8 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl hover:bg-white/12 transition-all duration-300 hover:scale-105">
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                  <p style={{ fontFamily: 'Inter, serif' }} className="text-[10px] tracking-wider uppercase text-white/60 font-medium">Expert Guide</p>
                </div>
                <h3 style={{ fontFamily: 'Merriweather, serif' }} className="text-white text-lg font-bold mb-1.5">Mentorship</h3>
                <p style={{ fontFamily: 'Inter, serif' }} className="text-white/75 text-xs leading-relaxed">Get personalized guidance from experts to accelerate your growth journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`transition-all duration-1500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

          {/* Main Headline with Staggered Animation */}
          <div className="text-center mb-10 sm:mb-8 lg:mb-12">
            <h1 
              style={{ fontFamily: 'Merriweather, serif' }}
              className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl leading-[1.05] tracking-tight text-white mb-6 sm:mb-4 lg:mb-6"
            >
              <span 
                className={`block text-white/95 mb-4 sm:mb-3 lg:mb-4 transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '400ms' }}
              >
                Entrepreneurs, can you
              </span>
              <span 
                className={`block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text pb-3 text-transparent transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '600ms' }}
              >
                predict your  
              </span>
              <span 
                className={`block bg-gradient-to-r from-[#DC143C] via-red-500 to-[#DC143C] bg-clip-text text-transparent transition-all duration-1500 pb-3 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '800ms' }}
              >
                growth trajectory?
              </span>
            </h1>
            
            <p 
              style={{ fontFamily: 'Inter, serif', transitionDelay: '1000ms' }}
              className={`text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/85 max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              95% of entrepreneurs can't predict their growth trajectory, which is why they're out of business within 5 years.
            </p>
          </div>

          {/* Premium CTA Section with Enhanced Animation */}
          <div className="text-center">
            <Link 
              href="https://vrt9.net/ega/contact-us/" 
              className={`group inline-flex items-center justify-center gap-3 sm:gap-3 lg:gap-4 bg-gradient-to-r from-[#DC143C] to-red-600 hover:from-red-600 hover:to-[#DC143C] text-white font-semibold text-sm sm:text-sm md:text-base lg:text-lg px-8 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-3 md:py-4 lg:py-5 rounded-xl sm:rounded-xl lg:rounded-2xl shadow-2xl shadow-[#DC143C]/30 transition-all duration-500 hover:scale-110 hover:shadow-[#DC143C]/50 active:scale-105 w-full max-w-sm sm:max-w-none sm:w-auto ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '1200ms' }}
            >
              <span style={{ fontFamily: 'Inter, serif' }} className="text-center">Book Your Free 45-Minute Strategy Session</span>
              <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;