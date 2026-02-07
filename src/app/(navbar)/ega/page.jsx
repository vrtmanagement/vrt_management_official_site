"use client"

import React from 'react'
import ProgramOutcomes from '@/components/ega/program-outcomes'
import FaqSection from '@/components/ega/faq-section'
import HeroSection from '@/components/ega/hero-section'
import EventsSection from '@/components/ega/events'
import { HeroDemo1 } from '@/components/ega/hero-gallery-demo'
import CEOProgramPage from '@/components/ega/hero-program'
import EGAModule from '@/components/ega/ega-module'
import HeroMembershipCta from '@/components/ega/hero-membership-cta'
import CaseStudiesSuccess from '@/components/ega/case-studies-success'
import { CtaSection } from '@/components/ega/ega-cta'
import Egadate from '@/components/ega/egadate'
import Registernow from '@/components/ega/register-now'
import { AssessmentsSection } from '@/components/ega/assessments'
import DualLogoSlider from '@/components/ega/slider'
import NewComponent from '@/components/ega/NewComponent'
import VRTMethod from '@/components/ega/vrtmethod'
import Testimonial from '@/components/ega/testimonial'
import Qualification from '@/components/ega/qualification'
import WhyEGAExists from '@/components/ega/why-ega-exists'
import ProgramOverview from '@/components/ega/program-overview'
import WhatSuccessLooksLikeSection from '@/components/ega/what-success-looks-like'
import ScaleBusinessSection from '@/components/ega/scale-business-section'
import GrowthJourney from '@/components/ega/growth-journey'
import OnlineCohortSection from '@/components/ega/online-cohort-section'
import InPersonSection from '@/components/ega/in-person-section'
import ParticipantCommitments from '@/components/ega/participant-commitments'
import WhoEGAIsFor from '@/components/ega/who-ega-is-for'
import HowToGetStarted from '@/components/ega/how-to-get-started'
import GrowthBanner from '@/components/ega/growth-banner'
import FinalCallToAction from '@/components/ega/final-call-to-action'
import PaymentSection from '@/components/ega/payment-section'

const page = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* <ScrollExpansionDemo /> */}
      {/* <CEOProgramPage /> */}
      <HeroMembershipCta />
      <HeroSection />
      <WhyEGAExists />
      <ProgramOverview />
      <PaymentSection />
      <WhatSuccessLooksLikeSection />
      {/* <EventsSection /> */}
      {/* <ProgramOutcomes /> */}
      <NewComponent />
      <ScaleBusinessSection />
      <GrowthJourney />
      <OnlineCohortSection />
      <InPersonSection />
      <AssessmentsSection />
      <ParticipantCommitments />
      <WhoEGAIsFor />
      <HowToGetStarted />
      <GrowthBanner />
      <VRTMethod />
      <Qualification />

      <div id="ega-module" className="scroll-mt-24">
        <EGAModule />
      </div>
      <Registernow />
      {/* <CaseStudiesSuccess /> */}
      <DualLogoSlider />
      <FaqSection />
      <PaymentSection />
      {/* <Egadate /> */}
      <CtaSection />
      {/* <HeroDemo1 /> */}
      <Testimonial />
      <FinalCallToAction />
    </div>
  )
}

export default page
