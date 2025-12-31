'use client';

import React from 'react';
import { Users, Workflow, Target, ArrowRight } from 'lucide-react';

const vrtmethod = () => {
  const fundamentals = [
    {
      icon: Users,
      title: 'People',
      description: 'Right seats, leadership, accountability, trust',
      number: '1',
    },
    {
      icon: Workflow,
      title: 'Processes',
      description: 'How work gets done, consistently and measurably',
      number: '2',
    },
    {
      icon: Target,
      title: 'Strategy',
      description: 'A clear plan that turns into quarterly execution',
      number: '3',
    },
  ];

  return (
    <section className="py-24 bg-background border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-text-primary text-4xl mt-2" style={{ fontFamily: 'Lora, serif' }}>
            We help you scale by strengthening{' '}
            <br />
            <span className="text-red-600">three fundamentals</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-red-200 before:to-transparent">
          {fundamentals.map((fundamental, index) => {
            const Icon = fundamental.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div
                key={index}
                className={`relative flex items-center justify-between md:justify-normal group ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon Circle */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-200 bg-red-50 shadow shrink-0 md:order-1 z-10 ${
                  isEven ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'
                }`}>
                  <Icon className="w-5 h-5 text-red-600" />
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border-2 border-gray-100 hover:border-red-300 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-serif text-xl text-text-primary" style={{ fontFamily: 'Merriweather, serif' }}>
                      {fundamental.title}
                    </span>
                    <span className="text-xs font-bold text-red-600 bg-red-100/50 px-2 py-1 rounded">
                      {fundamental.number}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {fundamental.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-gray-50 border-2 border-gray-200 hover:border-red-300 transition-colors">
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
            <p className="text-base md:text-lg text-text-primary font-semibold leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              And we do it through a repeatable operating approach:{' '}
              <span className="text-red-600 italic">"Growth As A Process"</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default vrtmethod;
