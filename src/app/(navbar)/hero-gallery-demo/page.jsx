import React from 'react'
import { HeroDemo1, HeroDemo2, HeroDemo3 } from '@/components/ega/hero-gallery-demo'

const HeroGalleryDemoPage = () => {
  return (
    <div className="min-h-screen">
      <div className="mb-8 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Hero Gallery Scroll Animation Demo</h1>
        <p className="text-gray-600">Scroll down to see the different hero gallery animations in action</p>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Demo 1: Default Layout</h2>
        <HeroDemo1 />
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Demo 2: Four Cells Layout</h2>
        <HeroDemo2 />
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Demo 3: Three Cells Layout (Dark Theme)</h2>
        <HeroDemo3 />
      </div>
    </div>
  )
}

export default HeroGalleryDemoPage
