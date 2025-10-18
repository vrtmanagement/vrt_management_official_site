"use client"

import React from 'react'
import ProgramOutcomes from '@/components/ega/program-outcomes'
import AssessmentSection from '@/components/ega/assessments'
import FaqSection from '@/components/ega/faq-section'
import HeroSection from '@/components/ega/hero-section'
import EventsSection from '@/components/ega/events'
import { HeroDemo1 } from '@/components/ega/hero-gallery-demo'
import CEOProgramPage from '@/components/ega/hero-program'
import EGAModule from '@/components/ega/ega-module'

const page = () => {
  return (

    <div className="min-h-screen relative overflow-x-hidden">
      {/* <ScrollExpansionDemo /> */}
      <CEOProgramPage />
      {/* <HeroSection /> */}
      {/* <EventsSection /> */}
      <ProgramOutcomes />
      <AssessmentSection />
      <div id="ega-module" className="scroll-mt-24">
        <EGAModule />
      </div>
      <FaqSection />
      <HeroDemo1 />
    </div>

  )
}

export default page