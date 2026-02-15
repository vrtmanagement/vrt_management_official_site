'use client';

import React from 'react';
import OnlineCohortSection from './online-cohort-section';
import { AssessmentsSection } from './assessments';
import NewComponent from './NewComponent';
import ProgramOverview from './program-overview';

export default function EgaMasterclassOverview() {
  return (
    <section className="py-12 bg-gray-100" style={{ backgroundColor: '#f3f4f6' }}>
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
      </div>
    </section>
  );
}


