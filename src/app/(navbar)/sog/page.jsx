
import { Growth } from '@/components/sog/Growth'
import Hero from '@/components/sog/Hero'
import LastCta from '@/components/sog/Last-cta'
import Meet from '@/components/sog/Meet'
import SogModel from '@/components/sog/sog-model'
import StrategySessionCta from '@/components/sog/StrategySessionCta'
import UrgencySection from '@/components/sog/UrgencySection'
import StruggleStats from '@/components/sog/struggle-stats'
import React from 'react'
import CTASection from '@/components/trimetrix-hd/CTASection'
import { CtaSection } from '@/components/ega/ega-cta'

const page = () => {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <Hero/>
      {/* <StruggleStats /> */}
      <SogModel />
      <Growth />
      {/* <Forea/> */}
      {/* <Meet /> */}
      <CtaSection />
      <StrategySessionCta />
      <UrgencySection />
      {/* <LastCta /> */}
    </div>
  )
}

export default page