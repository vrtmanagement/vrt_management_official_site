'use client';

import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight, Users, TrendingDown } from 'lucide-react';

const qualification = () => {
  const qualificationPoints = [
    "You're growing, but execution can't keep up (constant firefighting)",
    "People are busy, but outcomes are inconsistent",
    "Profitability isn't scaling with revenue",
    "Leadership gaps are creating bottlenecks",
    "Your strategy isn't translating into execution",
    "You're too central to decisions and delivery",
  ];

  const problemSymptoms = [
    "Unclear roles + weak accountability",
    "Inconsistent processes",
    "Priorities that change too often",
    "Meetings without decisions",
    "Execution without measurement",
    "Culture that can't scale",
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Who This Is For Section */}
        

          {/* The Problem Section - Split design */}
          <div className="relative">
            {/* Diagonal divider effect */}
            <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-red-200 to-transparent"></div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left side - Header and description */}
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-text-primary text-3xl sm:text-4xl md:text-5xl leading-tight mb-6" style={{ fontFamily: 'Lora, serif' }}>
                  The real reason{' '}
                  <span className="text-red-600">most businesses stall</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Most businesses don't get stuck because the owner lacks ambition. They stall because
                  growth increases complexity and the business lacks a process to handle it.
                </p>
              </div>

              {/* Right side - Symptoms */}
              <div className="bg-gradient-to-br from-gray-50 to-red-50/30 rounded-2xl p-8 md:p-10 border-2 border-gray-200">
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <XCircle className="w-6 h-6 text-red-600" />
                  Common symptoms:
                </h3>
                <div className="space-y-4">
                  {problemSymptoms.map((symptom, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white border-2 border-gray-200 hover:border-red-300 hover:bg-red-50/50 transition-all duration-300 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                      <p className="text-sm md:text-base text-text-secondary leading-relaxed flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {symptom}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default qualification;
