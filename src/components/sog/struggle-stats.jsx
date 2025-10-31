"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const StruggleStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ first: 0, second: 0, third: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate the stats
          setTimeout(() => {
            setAnimatedStats({ first: 50, second: 80, third: 95 });
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('Research');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      percentage: animatedStats.first,
      text: "of businesses fail in their first year",
      color: "text-red-600"
    },
    {
      percentage: animatedStats.second,
      text: "don't make it past five years",
      color: "text-red-600"
    },
    {
      percentage: animatedStats.third,
      text: "have closed their doors by year ten",
      color: "text-red-600"
    }
  ];

  return (
    <div id="Research" className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center py-16 lg:py-32 px-4 lg:px-8 w-full">
        {/* Main Heading */}
        <div className={`text-center max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="lg:text-6xl text-4xl font-bold text-black leading-tight mb-6 tracking-tight" style={{ fontFamily: 'Lora, serif' }}>
            Why Do Some Entrepreneurs{" "}
            <span className="text-black font-extrabold">
              Succeed
            </span>
            <br className="hidden lg:block" />
            While Others{" "}
            <span className="text-black font-extrabold">
              Struggle?
            </span>
          </h1>
        </div>

        {/* Stats Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-xl"
            >
              {/* Animated Percentage */}
              <div className="text-center mb-4">
                <div className={`text-5xl lg:text-6xl font-black ${stat.color} tracking-tight`} style={{ fontFamily: 'Lora, serif' }}>
                  {stat.percentage}%
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 text-center text-base font-medium leading-relaxed" style={{ fontFamily: 'Inter, serif' }}>
                {stat.text}
              </p>
            </div>
          ))}
        </div>

        {/* Why Section */}
        <div className={`text-center max-w-4xl mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="lg:text-5xl text-3xl font-black text-black mb-8 tracking-tight" style={{ fontFamily: 'Lora, serif' }}>
            <span className="text-red-600 font-black">
              Why?
            </span>
          </h2>
          
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 hover:border-red-600 hover:shadow-xl transition-all duration-300 group">
            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium group-hover:text-black transition-colors duration-300" style={{ fontFamily: 'Inter, serif' }}>
              It's not just about hard work, funding, or strategy. The key
              differentiator?{" "}
              <span className="font-bold text-red-600">
                Team collaboration and effective communication
              </span>{" "}
              - aligning everyone toward a shared goal. That's what sets successful
              entrepreneurs apart.
            </p>
          </div>
           {/* Premium CTA Section with Enhanced Animation */}
           <div className="text-center mt-10">
            <Link 
              href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2025-06" 
              className={`group inline-flex items-center justify-center gap-3 sm:gap-3 lg:gap-4 bg-gradient-to-r from-[#DC143C] to-red-600 hover:from-red-600 hover:to-[#DC143C] text-white font-semibold text-sm sm:text-sm md:text-base lg:text-lg px-8 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-3 md:py-4 lg:py-5 rounded-xl sm:rounded-xl lg:rounded-2xl shadow-2xl shadow-[#DC143C]/30 transition-all duration-500 hover:scale-110 hover:shadow-[#DC143C]/50 active:scale-105 w-full max-w-sm sm:max-w-none sm:w-auto`}
              style={{ transitionDelay: '1200ms' }}
            >
              <span style={{ fontFamily: 'Inter, serif' }} className="text-center">Book Your Free 45-Minute Strategy Session</span>
              <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StruggleStats;
