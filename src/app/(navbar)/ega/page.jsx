import React from 'react'
import ProgramOutcomes from '@/components/ega/program-outcomes'
import AssessmentSection from '@/components/ega/assessments'
import FaqSection from '@/components/ega/faq-section'
import HeroSection from '@/components/ega/hero-section'
import EventsSection from '@/components/ega/events'
import { HeroDemo1 } from '@/components/ega/hero-gallery-demo'


const page = () => {
  return (
    <>
      <div className="min-h-screen relative">
        {/* <ScrollExpansionDemo /> */}
        
          <HeroSection />
          <EventsSection />
          <AssessmentSection />
          <ProgramOutcomes />
        <FaqSection />
          <HeroDemo1 />
        
       
      </div>
    </>
  )
}

export default page