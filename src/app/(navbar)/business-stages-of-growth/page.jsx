
import { Growth } from '@/components/sog/Growth'
import Hero from '@/components/sog/Hero'
import LastCta from '@/components/sog/Last-cta'
import Meet from '@/components/sog/Meet'
import SogModel from '@/components/sog/sog-model'
import StruggleStats from '@/components/sog/struggle-stats'
import React from 'react'

const page = () => {
  return (
    <>
     <Hero/>
    <StruggleStats />
    <SogModel />
    {/* <Growth /> */}
    {/* <Forea/> */}
    <Meet />
    <LastCta />

    </>
  )
}

export default page