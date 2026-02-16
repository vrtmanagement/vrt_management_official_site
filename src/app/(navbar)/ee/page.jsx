import React from 'react'
import EntrepreneurExcellenceHero from '@/components/ee/EntrepreneurExcellenceHero'
import EnrollmentInfo from '@/components/ee/EnrollmentInfo'
import WhyThisMatters from '@/components/ee/WhyThisMatters'
import Hero from '@/components/ee/Hero'
import ClaimYourSpace from '@/components/ee/ClaimYourSpace'
import WorkspaceDetails from '@/components/ee/WorkspaceDetails'
import Events from '@/components/ee/Events'
import TenantHighlights from '@/components/ee/TenantHighlights'
import EntrepreneurSupport from '@/components/ee/EntrepreneurSupport'
import Newsletter from '@/components/ee/Newsletter'
import ContactInfo from '@/components/ee/ContactInfo'
import FAQ from '@/components/ee/FAQs'
import { CtaSection } from '@/components/ega/ega-cta'

const page = () => {
  return (
    <div className="min-h-screen">
      <EntrepreneurExcellenceHero />
      <EnrollmentInfo />
      <WhyThisMatters />
      {/* <Hero /> */}
      <WorkspaceDetails />
      <Events />
      {/* <TenantHighlights /> */}
      {/* <EntrepreneurSupport /> */}
      {/* <Newsletter /> */}
      {/* <ContactInfo /> */}
      <CtaSection />
      <ClaimYourSpace />
      <FAQ />
    </div>
  )
}

export default page