'use client';

import Image from 'next/image';
import React from 'react';

const features = [
  { title: 'Guidance & Advice', desc: 'Avoid pitfalls with expert guidance.', emoji: '📚' },
  { title: 'Skill Development', desc: 'Enhance essential strategy and operational skills with feedback.', emoji: '💪' },
  { title: 'Networking', desc: 'Expand your professional network for enhanced collaboration.', emoji: '🌐' },
  { title: 'Goal Setting', desc: 'Achieve growth and scaling goals with strategic planning and execution.', emoji: '🎯' },
  { title: 'Feedback', desc: 'Continuous improvement through constructive feedback and reflection.', emoji: '📝' },
  { title: 'Industry Insights', desc: 'Stay ahead with the latest trends, tools, and best practices.', emoji: '🔍' },
  { title: 'Problem-Solving', desc: 'Tackle challenges effectively for productivity and cost savings.', emoji: '🛠️' },
  { title: 'Confidence Building', desc: 'Boost self-esteem and leadership skills to step out of your comfort zone.', emoji: '💡' },
  { title: 'Accountability', desc: 'Stay focused and achieve milestones.', emoji: '✅' },
  { title: 'Focused Execution', desc: 'Drive prioritized initiatives to completion with disciplined execution.', emoji: '⚡' },
];

export default function ForEntrepreneurs() {
  return (
    <section className="py-12 mt-6 bg-white w-full">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

    {/* Title + Description (Centered) */}
    <div className="mb-12 text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-red-600">
        Are you one of those entrepreneurs struggling to scale?
      </h3>

      <div className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-semibold mt-4">
        This is for you
      </div>

      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        If scaling feels hard, EGA provides practical support — strategy,
        systems, and accountability — so you can grow predictably.
      </p>
    </div>

    {/* Two Column Layout */}
   {/* Two Column Layout */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

{/* Left: Features */}
<div className="h-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">

    {features.map((f, i) => (
      <div
        key={i}
        className="group flex items-start gap-3 p-4 bg-red-50 rounded-xl transition-transform duration-200 hover:shadow-lg hover:scale-102 hover:bg-red-100"
      >
        {/* Icon Circle */}
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

{/* Right: Image */}
<div className="h-full">
  <Image
    src="/ega/scalling_problem.jpg"
    alt="Business growth"
    width={1200}
    height={900}
    className="w-full h-full object-cover rounded-xl"
    priority
  />
</div>

</div>

  </div>
</section>

  
  );
}


