"use client";

import Image from "next/image";
import { useState } from "react";

export default function WhatSuccessLooksLikeSection() {
  const [image1Loading, setImage1Loading] = useState(true);
  const [image2Loading, setImage2Loading] = useState(true);

  const successItems = [
    "A quick diagnosis of where you're stuck (People / Process / Strategy).",
    "Top 5 business strengths and top 5 business weaknesses will be identified.",
    "Action plan to address your top 5 strengths and weaknesses identified.",
    "Strategy execution plans for your 1-year and 3-year goals.",
    "12 months of teaching, coaching, and learning will happen to implement and ensure you achieve your vision and reach your goals."
  ];

  return (
    <section className="relative bg-gray-50 py-10 md:py-12 lg:py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
          What Success Looks Like at{" "}
          <span className="text-red-600">
            Entrepreneurs Growth Alliance<sup className="text-md align-super">©</sup>
          </span>
        </h2>

        </div>
        <div className="grid md:grid-cols-2 gap-5 md:gap-7 items-stretch">
          <div className="space-y-4 h-full flex flex-col order-last md:order-first">
            {successItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-red-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-base md:text-lg flex-1 group-hover:text-gray-900 transition-colors">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4 h-full flex flex-col order-first md:order-last">
            <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex-1 min-h-[180px] group">
              {image1Loading && (
                <div className="absolute inset-0 z-10 bg-gray-200 animate-pulse" />
              )}
              <Image
                src="/section2/business-speaker-giving-presentation-to.webp"
                alt="Business Meeting"
                fill
                className={`object-cover transition-all duration-500 ${
                  image1Loading ? "blur-sm scale-105" : "blur-0 scale-100"
                } group-hover:scale-110`}
                onLoad={() => setImage1Loading(false)}
              />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex-1 min-h-[180px] group">
              {image2Loading && (
                <div className="absolute inset-0 z-10 bg-gray-200 animate-pulse" />
              )}
              <Image
                src="/section2/professional-business-presentation-1.webp"
                alt="Professional Business Presentation"
                fill
                className={`object-cover transition-all duration-500 ${
                  image2Loading ? "blur-sm scale-105" : "blur-0 scale-100"
                } group-hover:scale-110`}
                onLoad={() => setImage2Loading(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

