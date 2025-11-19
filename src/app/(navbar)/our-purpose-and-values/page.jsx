import HeroSection from '@/components/our-purpose-and-values/HeroSection'
import ValueSection from '@/components/our-purpose-and-values/ValueSection'
import Quote from '@/components/our-purpose-and-values/Quote'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <HeroSection />
      <ValueSection />
      <Quote />
    </div>
  )
}

export default page