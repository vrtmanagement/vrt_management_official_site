"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function EntrepreneurSupport() {
  return (
    <section className="relative bg-gray-900 text-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Entrepreneur Support Services
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              The culture of entrepreneurialism can be experienced all across The University of Alabama campus. From academics that offer instruction in the art of launching a business, to competitions that put ideas through the crucible, to technical facilities that allow rapid prototyping and testing, the Capstone is a place where business dreams can become reality.
            </p>
            <a
              href="https://aei.culverhouse.ua.edu/"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-red-600 text-white font-semibold hover:bg-red-600 transition-all duration-300 group"
            >
              <span>Learn More from Alabama Entrepreneurship Institute</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              alt="The EDGE interior reception area"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

