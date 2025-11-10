import React from 'react'
import Hero from '@/components/ee/Hero'
import ClaimYourSpace from '@/components/ee/ClaimYourSpace'
import WorkspaceDetails from '@/components/ee/WorkspaceDetails'
import Events from '@/components/ee/Events'
import TenantHighlights from '@/components/ee/TenantHighlights'
import EntrepreneurSupport from '@/components/ee/EntrepreneurSupport'
import Newsletter from '@/components/ee/Newsletter'
import ContactInfo from '@/components/ee/ContactInfo'
import FAQ from '@/components/ee/FAQs'

const page = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WorkspaceDetails />
      <Events />
      {/* <TenantHighlights /> */}
      {/* <EntrepreneurSupport /> */}
      {/* <Newsletter /> */}
      <ContactInfo />
      <ClaimYourSpace />
      <FAQ />
    </div>
  )
}

export default page