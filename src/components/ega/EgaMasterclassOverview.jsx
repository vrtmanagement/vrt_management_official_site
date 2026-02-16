 'use client';
 
 import React, { useRef, useState, useEffect } from 'react';
import OnlineCohortSection from './online-cohort-section';
import { AssessmentsSection } from './assessments';
import NewComponent from './NewComponent';
import ProgramOverview from './program-overview';

export default function EgaMasterclassOverview() {
  const sectionRef = useRef(null);
  const [showTopArrow, setShowTopArrow] = useState(false);

  useEffect(() => {
    // show arrow only after the user has scrolled at least 3 window-heights
    // use a minimum of 3000px to match the requested behavior
    const onScroll = () => {
      const threshold = Math.max(3000, window.innerHeight * 3);
      setShowTopArrow(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <section ref={sectionRef} className="py-12 bg-gray-100" style={{ backgroundColor: '#f3f4f6' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600">EGA Masterclass Overview</h2>
        </div>

        <div className="space-y-10">
          <OnlineCohortSection />
          <AssessmentsSection />
          <NewComponent />
          <ProgramOverview />
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-450 h-1 bg-gray-500 rounded"></div>
        </div>
        {/* Footer program links */}
        {/* <div className="mt-6 text-center space-x-4">
          <a href="/ega" className="text-sm text-red-600 hover:underline cursor-pointer">EGA©</a>
          <a href="/entrepreneur-excellence" className="text-sm text-red-600 hover:underline cursor-pointer">EntrepreneurExcellence©</a>
          <a href="/sog" className="text-sm text-red-600 hover:underline cursor-pointer">Business Stages of Growth</a>
        </div> */}
        {/* Top arrow button (visible when this section is in view) */}
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
    </section>
  );
}


