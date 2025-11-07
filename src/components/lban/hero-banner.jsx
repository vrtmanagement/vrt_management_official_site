'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const HeroBanner = () => {
  const router = useRouter();

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/lban/EGA Brochure 2601.pdf';
    link.download = 'EGA Brochure 2601.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden min-h-[calc(100vh-80px)] flex items-center pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#DC143C]/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100/50 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-center">

          {/* LEFT SIDE - Premium Text Content - Centered on Mobile */}
          <div className="space-y-6 max-w-[600px] mx-auto lg:mx-0 text-center lg:text-left">

            {/* Premium Title */}
            <div className="space-y-4">
              <h1
                className="font-bold text-[40px] md:text-[52px] lg:text-[60px] leading-[1.1] tracking-[-0.02em] text-black animate-fade-in-up"
                style={{ fontFamily: 'Merriweather, serif', animationDelay: '0.1s' }}
              >
                Entrepreneur Growth Alliance Workshop
              </h1>
            </div>

            {/* Refined Description */}
            <div
              className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <p className="text-[18px] md:text-[20px] lg:text-[22px] text-black leading-[1.6] font-light">
                Build a Team That Grows Your Business
              </p>
            </div>
            <div
              className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-0 h-0.5 bg-gradient-to-r from-[#DC143C] to-transparent animate-slide-in" style={{ animationDelay: '0.4s' }} />
              <p className="text-[18px] md:text-[22px] font-semibold text-[#DC143C] tracking-wide">
                by Rajesh Tedla
              </p>
            </div>
            {/* Premium CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <button
                className="bg-white border-2 border-slate-200 hover:border-[#DC143C] hover:text-[#DC143C] text-slate-900 font-semibold text-[18px] md:text-[20px] px-12 py-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 active:scale-95 transform hover:scale-105"
                onClick={handleDownloadBrochure}
              >
                Download Brochure
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Premium Image */}
          <div
            className="relative lg:h-[500px] h-[400px] group animate-fade-in-up mx-auto lg:mx-0 max-w-full"
            style={{ animationDelay: '0.5s' }}
          >
            {/* Animated Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#DC143C]/20 to-slate-200/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />

            {/* Main Image */}
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/lban/hero.jpg"
                alt="Executive Leadership Team"
                width={500}
                height={500}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Elegant Badge Overlay */}
              <div
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 md:p-5 shadow-xl border border-white/20 animate-fade-in-up group-hover:translate-y-0 transition-transform duration-500"
                style={{ animationDelay: '0.7s' }}
              >
                <p className="text-[10px] sm:text-xs font-bold text-[#DC143C] uppercase tracking-wider mb-1 text-center">VRT Management Group, LLC</p>
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-semibold text-slate-700 text-center">
                  <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-slate-100 via-white to-slate-100 border border-slate-200 shadow-sm text-slate-900">
                    Learn
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#DC143C]/50 md:w-1.5 md:h-1.5" />
                  <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-white via-slate-100 to-white border border-slate-200 shadow-sm text-slate-900">
                    Unlearn
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#DC143C]/50 md:w-1.5 md:h-1.5" />
                  <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-slate-100 via-white to-slate-100 border border-slate-200 shadow-sm text-slate-900">
                    Relearn
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Elegant Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in {
          from {
            width: 0;
          }
          to {
            width: 2.5rem;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;