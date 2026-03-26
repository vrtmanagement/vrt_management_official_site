'use client';

import React from 'react';

const cards = [
  {
    icon: '/sog/icon-1.png',
    title: 'The cost of delay',
    body: 'Every month without the right structure is a month of lost momentum, burned-out employees, and preventable decisions.',
  },
  {
    icon: '/sog/icon-2.png',
    title: 'The cost of misdiagnosis',
    body: "Generic advice for your specific stage doesn't fix things, it burns cash and time while the real issue deepens.",
  },
  {
    icon: '/sog/icon-3.png',
    title: 'The cost of repetition',
    body: 'Without the right playbook, the same problems come back. Different faces, same patterns, same results.',
  },
];

const UrgencySection = () => {
  return (
    <section className="bg-[#FFF9F9] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold leading-tight md:text-4xl">
            <span className="text-[#FF0000]">
              The real cost isn&apos;t the problem.
            </span>
            <br />
            <span className="text-neutral-900">
              It&apos;s every month you manage it instead of solving it.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
  {cards.map((card) => (
    <div key={card.title} className="relative group">

      {/* Floating Icon */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="flex h-17 w-17 items-center justify-center rounded-full border border-red-200 bg-white text-3xl shadow-sm transition-all duration-300 group-hover:scale-110">
        <img
          src={card.icon}
          alt={card.title}
          className="h-8 w-8 object-contain"
        />
        </div>
      </div>

      {/* Card */}
      <article className="rounded-2xl border border-[#FFE4E4] bg-[#FFF3F3] p-6 pt-16 text-left transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,0,0,0.12)] hover:border-[#FF0000]/30">
        <h3 className="text-[24px] font-bold text-[#FF0000]">
          {card.title}
        </h3>
        <p className="mt-3 text-[20px] leading-relaxed text-black-700 md:text-[15px]">
          {card.body}
        </p>
      </article>

    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default UrgencySection;