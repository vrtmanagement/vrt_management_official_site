'use client';

import React from 'react';

const cards = [
  {
    icon: '⏳',
    title: 'The cost of delay',
    body: 'Every month without the right structure is a month of lost momentum, burned-out employees, and preventable decisions.',
  },
  {
    icon: '💸',
    title: 'The cost of misdiagnosis',
    body: "Generic advice for your specific stage doesn't fix things - it burns cash and time while the real issue deepens.",
  },
  {
    icon: '🔄',
    title: 'The cost of repetition',
    body: 'Without the right playbook, the same problems come back. Different faces, same patterns, same results.',
  },
];

const UrgencySection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#fff7f7] py-16 md:py-20 mb-10">
      <div className="pointer-events-none absolute -top-16 right-0 h-52 w-52 rounded-full bg-[#DC2626]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-[#ef4444]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 rounded-3xl border border-red-100 bg-white p-6 shadow-[0_18px_45px_rgba(220,38,38,0.10)] md:p-10">
          <h2 className="text-2xl font-bold leading-tight text-neutral-900 md:text-4xl">
            The real cost isn&apos;t the problem. 
            <br />
            It&apos;s every month you manage it instead of solving it.
         
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group h-full rounded-2xl border border-red-100 bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(220,38,38,0.14)]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#fff1f1] text-2xl">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#DC2626]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-[15px]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
