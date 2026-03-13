
'use client';

import Image from 'next/image';
import React from 'react';

const features = [
  { title: 'Clear Goal Setting', desc: 'Achieve growth and scaling goals with strategic planning and execution.', emoji: '🎯' },
  { title: 'Problem Solving', desc: 'Tackle challenges effectively for productivity and cost savings.', emoji: '🛠️' },
  { title: 'Guidance and Advice', desc: 'Avoid pitfalls with expert guidance.', emoji: '📚' },
  { title: 'Focused Execution', desc: 'Drive prioritized initiatives to completion with disciplined execution.', emoji: '⚡' },
  { title: 'Confidence Building', desc: 'Boost self-esteem and leadership skills to step out of your comfort zone.', emoji: '💡' },
  { title: 'Accountability', desc: 'Stay focused and achieve milestones.', emoji: '✅' },
  { title: 'Skill Development', desc: 'Enhance essential strategy and operational skills with feedback.', emoji: '💪' },
  { title: 'Networking', desc: 'Expand your professional network for enhanced collaboration.', emoji: '🌐' },
  { title: 'Feedback', desc: 'Continuous improvement through constructive feedback and reflection.', emoji: '📝' },
  { title: 'Industry Insights', desc: 'Stay ahead with the latest trends, tools, and best practices.', emoji: '🔍' },
];

export default function ForEntrepreneurs() {
  return (
    <section className="py-12 mt-26 md:mt-6 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Title */}
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-red-600">
            Are You One of Those Entrepreneurs Struggling to Scale?
          </h3>

          <div className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-semibold mt-4">
            This is for you
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Image */}
          <div className="order-first lg:order-last w-full h-[420px] lg:h-auto">
            <Image
              src="/ega/scalling_problem.jpg"
              alt="Business growth"
              width={1200}
              height={900}
              className="w-full h-full object-cover rounded-xl"
              priority
            />
          </div>

          {/* Features */}
          <div className="order-last lg:order-first h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">

              {features.map((f, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 p-4 bg-red-50 rounded-xl transition-transform duration-200 hover:shadow-lg hover:scale-102 hover:bg-red-100"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-500 rounded-full transition-transform duration-200 group-hover:scale-110">
                    <span className="text-white text-base">
                      {f.emoji}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {f.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}