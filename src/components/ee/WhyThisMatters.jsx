"use client";

import React from 'react';
import Image from 'next/image';
// using local icons from public/ee/icons instead of lucide-react

export default function WhyThisMatters() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-start">
          {/* Left Side - Images with Overlay */}
          <div className="relative h-[500px] sm:h-[600px]">
            {/* Above Image (large) */}
            <div className="absolute top-0 left-0 w-3/5 h-auto z-10 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/EE/section2/imageBelow.jpeg"
                alt="Business professionals"
                width={440}
                height={640}
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
            
            {/* Badge Image */}
            <div className="absolute top-70 -left-15 z-30">
              <Image
                src="/EE/section2/badge.png"
                alt="badge"
                width={96}
                height={96}
              />
            </div>
            
            {/* Below Image - Overlayed (smaller) */}
            <div className="absolute bottom-15 right-30 w-2/5 h-auto z-20 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/EE/section2/imageAbove.jpeg"
                alt="Business collaboration"
                width={420}
                height={520}
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-10">
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-bold text-red-600">
              Why this matters
            </h2>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Working with 1,420+ entrepreneurs worldwide, I've seen a clear pattern: the most successful founders/entrepreneurs share a distinct set of measurable traits and deploy them deliberately. This practical research will validate those traits, create a benchmark for success, and pair it with training that shows you how to use your blueprint. The outcome: a repeatable process to assist entrepreneurs in leading smarter and scaling profitably, inspiring success stories across the globe.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Benefit 1 */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Image src="/EE/section2/logo1.png" alt="logo1" width={28} height={28} className="object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Turns ideas into results</h4>
                </div>
              </div>
              
              {/* Benefit 2 */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Image src="/EE/section2/logo2.png" alt="logo2" width={28} height={28} className="object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Builds strong foundations</h4>
                </div>
              </div>
              
              {/* Benefit 3 */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Image src="/EE/section2/logo3.png" alt="logo3" width={28} height={28} className="object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Reduces costly mistakes</h4>
                </div>
              </div>
              
              {/* Benefit 4 */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Image src="/EE/section2/logo4.png" alt="logo4" width={28} height={28} className="object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Enables sustainable growth</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
