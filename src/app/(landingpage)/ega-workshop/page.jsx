import React from 'react'
import { Hero } from '@/components/ega-workshop/hero'
import FeaturedProjects from '@/components/ega-workshop/feature';
import ServicesSection from '@/components/ega-workshop/services';
import TestimonialSection from '@/components/ega-workshop/testimonial';
import AboutMe from '@/components/ega-workshop/aboutme';
import VenueDetails from '@/components/ega-workshop/venue-details';

const Page = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <FeaturedProjects />
      <VenueDetails />
      <ServicesSection />
      <AboutMe />
      {/* <TestimonialSection /> */}
    </main>
  )
}

export default Page;