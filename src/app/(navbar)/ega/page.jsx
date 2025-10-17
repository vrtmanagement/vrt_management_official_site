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
    <>
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



        {/* CTA Section */}
        <section className="relative z-30 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 text-center text-slate-100">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-black">
              Ready to accelerate your growth?
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-600">
              Book a complimentary strategy call to map your next best moves.
            </p>
            <a
              href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2025-06"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:scale-[1.02] hover:bg-red-500 hover:shadow-xl"
              aria-label="Book 45 minute free call"
            >
              Book Your Free 45 Minutes Strategy Call Now
            </a>
          </div>
        </section>

      </div>
    </>
  )
}

export default page