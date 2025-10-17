"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react'
import ProgramOutcomes from '@/components/ega/program-outcomes'
import AssessmentSection from '@/components/ega/assessments'
import FaqSection from '@/components/ega/faq-section'
import HeroSection from '@/components/ega/hero-section'
import EventsSection from '@/components/ega/events'
import { HeroDemo1 } from '@/components/ega/hero-gallery-demo'
import CEOProgramPage from '@/components/ega/hero-program'
import EGAModule from '@/components/ega/ega-module'

const page = () => {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const formContainerRef = useRef(null)

  const openWaitlist = useCallback(() => setShowWaitlist(true), [])
  const closeWaitlist = useCallback(() => setShowWaitlist(false), [])

  // initialize ConvertKit when modal opens
  useEffect(() => {
    if (!showWaitlist) return
    if (!formContainerRef.current) return
    const exists = formContainerRef.current.querySelector('script[data-uid="186b09c8cc"]')
    if (exists) return
    const script = document.createElement('script')
    script.src = 'https://rajesh-tedla.kit.com/186b09c8cc/index.js'
    script.async = true
    script.dataset.uid = '186b09c8cc'
    formContainerRef.current.appendChild(script)
  }, [showWaitlist])

  // lock body scroll and esc to close
  useEffect(() => {
    document.body.style.overflow = showWaitlist ? 'hidden' : 'auto'
    if (!showWaitlist) return
    const onKey = (e) => { if (e.key === 'Escape') setShowWaitlist(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showWaitlist])
  return (
    <>
      <div className="min-h-screen relative overflow-x-hidden">
        {/* <ScrollExpansionDemo /> */}
        <CEOProgramPage onJoinWaitlist={openWaitlist} />
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

        {showWaitlist && (
          <div
            className="fixed inset-0 z-[999] bg-black/70 p-4 flex items-center justify-center overflow-hidden"
            onClick={closeWaitlist}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ega-waitlist-title"
          >
            <div
              className="relative bg-slate-900 border border-slate-700 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-xl px-4 sm:px-6 py-5 sm:py-6 max-h-[90vh] md:max-h-[85vh] overflow-y-auto overflow-x-hidden overscroll-contain mx-auto no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeWaitlist}
                className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 text-slate-400 hover:text-slate-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500/50"
              >
                ✕
              </button>
              <h2 id="ega-waitlist-title" className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Join</h2>
              <div ref={formContainerRef} className="min-w-0">
                <div className="formkit-form" data-uid="186b09c8cc"></div>
              </div>
            </div>
          </div>
        )}
        <style jsx global>{`
          .no-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari and Opera */
          }
        `}</style>
      </div>
    </>
  )
}

export default page