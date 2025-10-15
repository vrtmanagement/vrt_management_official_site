
// import InteractiveForm from '@/components/sections/interactive-form';
// import ClientResultsCarousel from '@/components/sections/client-results-carousel';
// import VideoSection from '@/components/sections/video-section';
// import InsightsSection from '@/components/sections/insights-section';
// import CtaSection from '@/components/sections/cta-section';
// import NewsletterSection from '@/components/sections/newsletter-section';
// import Footer from '@/components/sections/footer';

import CardsGrid from "@/components/home/Cardgrid";
import GrowthProgram from "@/components/home/GrowthProgram";
import HeroSection from "@/components/home/hero-section";
import StatsShowcase from "@/components/home/StatsShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import CardsStackExample from "@/components/ui/cards-stack-example";
import CircularTestimonialsDemo from "@/components/ui/circular-testimonials-demo";
import HoverCardExample from "@/components/ui/hover-card-example";
import HoverCardsDemo from "@/components/ui/hover-cards-demo";
import CardsStackDemoPage from "./(navbar)/cards-stack-demo/page";
import Obstacles from "@/components/home/Obstacle";
import MarqueeSection from '@/components/home/Marquee';
// In your main page.js or layout
import AboutUs from '@/components/home/AboutUs';
// Import the UI version for more customization
import AboutUsSection from '@/components/ui/about-us-section';
// Import the new AboutMe component
import AboutMe from '@/components/home/AboutMe';
// Add to your page structure
import VideoSection from '@/components/home/VideoSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* Cards section */}
      {/* <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 sm:pb-28">
        <CardsGrid />
      </div> */}
      <Obstacles />
      {/* <BusinessObstacles /> */}
      {/* <HoverCardsDemo /> */}

      {/* <GrowthProgram /> */}
      <CardsStackDemoPage />
      {/* VideoSection demo */}
      <VideoSection />
      <MarqueeSection />
      <AboutMe />
      <StatsShowcase />
      {/* <Testimonials  /> */}
      <CircularTestimonialsDemo />
      {/* <AboutUs /> */}
      {/* <InteractiveForm />
      <VideoSection />
      <ClientResultsCarousel />
      <InsightsSection />
      <NewsletterSection />
      <CtaSection />
      */}
    </main>
  );
}