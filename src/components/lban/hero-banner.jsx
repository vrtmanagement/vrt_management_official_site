import React from 'react';

const HeroBanner = () => {
  return (
    <section className="bg-white border-b border-[#E0E0E0]">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Title */}
        <h1 className="font-bold text-[28px] md:text-[42px] leading-[1.2] tracking-tight text-black mb-3">
          The Berkeley Transformative CHRO Leadership Program co-led by Laszlo Bock
        </h1>
        
        {/* Subtitle */}
        <p className="text-[18px] md:text-[20px] text-[#333333] mb-6">
          Transforming Organizations through HR Leadership
        </p>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="inline-block bg-[#F5F5F5] text-[#333333] text-sm font-medium px-3 py-1 rounded">
            COBE Eligible
          </span>
          <span className="inline-block bg-[#F5F5F5] text-[#333333] text-sm font-medium px-3 py-1 rounded">
            CLP
          </span>
        </div>
        
        {/* Program Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          <div>
            <p className="text-[13px] font-semibold text-[#666666] mb-1">Formats</p>
            <p className="text-[15px] text-black">Blended</p>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#666666] mb-1">Length</p>
            <p className="text-[15px] text-black">3 Modules</p>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#666666] mb-1">Time</p>
            <p className="text-[15px] text-black">3 Months</p>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#666666] mb-1">Cost</p>
            <p className="text-[15px] text-black">$21,700.00</p>
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <p className="text-[13px] font-semibold text-[#666666] mb-1">Next program</p>
            <p className="text-[15px] text-black">Mar 24 - May 21, 2026</p>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#666666] mb-1">Certificate</p>
            <p className="text-[15px] text-black">Certificate of Completion</p>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-[#666666] mb-1">COBE eligible</p>
            <p className="text-[15px] text-black">7 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;