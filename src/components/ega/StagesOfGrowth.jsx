 "use client";
 
 import React, { useState, useEffect } from 'react';

const StagesOfGrowth = () => {
  const [showTopArrow, setShowTopArrow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = Math.max(3000, window.innerHeight * 3);
      setShowTopArrow(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="bg-white rounded-2xl shadow-md p-10 mb-12 border border-gray-100">
      
      <h2 className="text-3xl font-bold text-red-600 mb-8">
        4. Stages Of Growth (SOG) – Diagnostic Assessment & Feedback
      </h2>

      <div className="space-y-10 text-gray-700 leading-relaxed">

        {/* Introduction */}
        <div className="space-y-6">
          <p>
            Most entrepreneurs run into chaos as their business grows —
            not because they’re doing something wrong, but because they
            don’t realize their business is entering a new stage.
          </p>

          <p>
            What worked when you had 5 employees starts to break when you
            hit 25. And if you don’t adjust how you lead, structure your
            team, or manage operations, growth can slow you down.
          </p>

          <p>
            This module gives you a clear roadmap through the 7 predictable
            stages that businesses typically move through as they grow —
            based on employee count, complexity, and leadership requirements.
          </p>

          <p>
            You’ll learn about the <strong>7 Stages of Growth</strong> and
            how complexity increases as your team expands. It also introduces
            key warning signs like <strong>Flood Zones</strong> (where communication
            breaks down) and <strong>Wind Tunnels</strong> (where roles and systems
            get out of sync).
          </p>

          <p>
            These are the hidden problem areas most business owners don’t see
            coming. This module helps you spot issues early and fix them before
            they turn into bigger messes that slow everything down.
          </p>
        </div>

        {/* What You'll Get */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            What You’ll Get:
          </h3>

          <ul className="list-disc ml-6 space-y-3">
            <li>
              A clear picture of which growth stage you’re in and what
              problems are normal at that level.
            </li>
            <li>
              An understanding of the 3 Growth Zones —
              Preparation, Performance, and Pressure — and how each
              one affects your daily decisions.
            </li>
            <li>
              Tools to identify upcoming bottlenecks before they hit
              (like confusion, people drama, and lost productivity).
            </li>
            <li>
              A leadership map to shift your focus as your team grows —
              so you stop doing everything and start leading smarter.
            </li>
            <li>
              A proven framework to scale without burnout,
              breakdowns, or guesswork.
            </li>
          </ul>
        </div>

        {/* Why Important */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Why is this important?
          </h3>

          <div className="space-y-4">
            <p>
              Because every stage of growth comes with its own challenges —
              and if you treat them all the same, you’ll keep solving the
              wrong problems.
            </p>

            <p>
              This session gives you the clarity to lead your business with
              precision, adapt to change faster, and unlock the next level
              of sustainable growth.
            </p>
          </div>
        </div>

      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`fixed right-6 bottom-8 z-50 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-opacity duration-300 ${
          showTopArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default StagesOfGrowth;
