'use client';
import React from 'react';
import { Award, Calendar, Clock, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
const HeroBanner = () => {
  const router = useRouter();
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden min-h-[calc(100vh-80px)] flex items-center pt-24">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#DC143C]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100/50 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Main Container */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Premium Text Content */}
          <div className="space-y-6 max-w-[600px]">
      
            
            {/* Premium Title */}
            <div className="space-y-4">
              <h1 className="font-bold text-[32px] md:text-[42px] lg:text-[48px] leading-[1.1] tracking-[-0.02em] text-black">
                Entrepreneur Growth Leadership Program
              </h1>
              <div className="flex items-center gap-3">
                <div className="w-10 h-0.5 bg-gradient-to-r from-[#DC143C] to-transparent" />
                <p className="text-[16px] md:text-[18px] font-semibold text-[#DC143C] tracking-wide">
                   by Rajesh Tedla
                </p>
              </div>
            </div>
            
            {/* Refined Description */}
            <p className="text-[16px] md:text-[17px] text-slate-600 leading-[1.6] font-light">
              Transform your organization through strategic HR leadership. Learn from industry pioneers and Berkeley faculty to drive meaningful change.
            </p>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-white border-2 border-slate-200 hover:border-[#DC143C] hover:text-[#DC143C] text-slate-900 font-semibold text-[16px] px-10 py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
              onClick={() => router.push('/lban/form')}>
                Download Ebook
              </button>
            </div>
          </div>
          
          {/* RIGHT SIDE - Premium Image */}
          <div className="relative lg:h-[500px] h-[400px] group">
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#DC143C]/20 to-slate-200/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            {/* Main Image */}
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8664c370-dcc7-401d-b6f0-5c6639941abc/generated_images/professional-executive-leadership-team-m-f1e84c18-20251023101708.jpg"
                alt="Executive Leadership Team"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Elegant Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-xl border border-white/20">
                <p className="text-xs font-bold text-[#DC143C] uppercase tracking-wider mb-1.5">VRT Management Group </p>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  VRT Management Group 
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Elegant Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
};

export default HeroBanner;