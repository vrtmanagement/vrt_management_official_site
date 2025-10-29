'use client'
import React, { useEffect, useRef, useState } from "react";

const StepCard = ({
  imgSrc,
  title,
  focus,
  takeaway,
  leadershipStyle,
  bgColor,
  challenges,
  stepNumber,
  isLeft,
  totalSteps
}) => {
  // Scroll reveal animation
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -top-6 -left-6 w-16 h-16 bg-red-500/5 rounded-full blur-xl" />
      <div className="pointer-events-none absolute -bottom-6 -right-6 w-20 h-20 bg-blue-500/5 rounded-full blur-xl" />

      <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
        }`}>

        {/* Content Card */}
        <div className={`lg:w-5/12 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>
          <div className="relative bg-white rounded-3xl p-8 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.1)] border border-gray-100 hover:shadow-[0_25px_80px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 group">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-50/50 to-transparent opacity-50" />

            <div className="relative z-10">
              {/* Step Number and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {stepNumber}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    Stage {stepNumber} of {totalSteps}
                  </div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent"></div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-red-600 transition-colors duration-300">
                {title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                {focus}
              </p>

              {/* Key Information Cards */}
              <div className="space-y-4 mb-8">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-5 border border-red-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <h4 className="font-semibold text-gray-900">Critical Takeaway</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{takeaway}</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h4 className="font-semibold text-gray-900">Leadership Style</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{leadershipStyle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Dot */}
        <div className="hidden lg:block relative z-20">
          <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Image Card */}
        <div className={`lg:w-5/12 ${isLeft ? 'lg:pl-12' : 'lg:pr-12'}`}>
          <div className="relative group">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] border border-gray-100 bg-white">
              <div
                className="w-full h-80 flex items-center justify-center p-12 transition-transform duration-500 group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${bgColor}15, ${bgColor}05), linear-gradient(45deg, #f8fafc, #ffffff)`
                }}
              >
                <img
                  src={imgSrc}
                  alt={title}
                  className="w-36 h-36 object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Decorative elements around image */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500/20 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-blue-500/20 rounded-full"></div>
              <div className="absolute top-1/2 -left-4 w-4 h-4 bg-yellow-500/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div className={`mt-12 ${isLeft ? 'lg:ml-0' : 'lg:mr-0'}`}>
        <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.1)] border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900">Key Challenges</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
