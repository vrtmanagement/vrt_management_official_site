
import { Growth } from '@/components/sog/Growth'
import Hero from '@/components/sog/Hero'
import LastCta from '@/components/sog/Last-cta'
import Meet from '@/components/sog/Meet'
import SogModel from '@/components/sog/sog-model'
import StruggleStats from '@/components/sog/struggle-stats'
import React from 'react'

const page = () => {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <Hero/>
      <StruggleStats />
      <SogModel />
      <Growth />
      {/* <Forea/> */}
      <Meet />
      {/* <LastCta /> */}
    </div>
  )
}

export default page