'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Target, Droplet, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Image */}
        <div className="flex justify-center mb-10 sm:mb-12 lg:mb-16">
          <div className="relative w-full max-w-3xl h-auto">
            <Image
              src="/newsletter/product.png"
              alt="Product showcase"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-24">
          {/* Left Side - Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-black leading-[1.1]">
              Unforgettable, Websites, Brands & Visuals for Bold Visionaries.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed max-w-xl">
              We're not your typical design agency. Founded in 2014, we're a collective of designers, developers, and strategists who believe great digital experiences should be beautiful, functional, and human-centered. From startups to global brands, we help ambitious businesses stand out.
            </p>
            <div className="pt-2">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-[12px] px-8 py-5 text-base font-medium shadow-sm hover:shadow-md"
              >
                Know More About Us
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] order-1 lg:order-2">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Team collaborating on a project"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-12 lg:mb-16"></div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {/* First Metric */}
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-100 flex items-center justify-center">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 text-gray-800" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-2 leading-none">72</div>
              <div className="text-base sm:text-lg text-black font-normal">Hour Prototype Guarantee</div>
            </div>
          </div>

          {/* Second Metric */}
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-100 flex items-center justify-center">
              <Droplet className="w-10 h-10 sm:w-12 sm:h-12 text-gray-800" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-2 leading-none">100+</div>
              <div className="text-base sm:text-lg text-black font-normal">Brands Transformed</div>
            </div>
          </div>

          {/* Third Metric */}
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-100 flex items-center justify-center">
              <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-gray-800" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-2 leading-none">10+</div>
              <div className="text-base sm:text-lg text-black font-normal">Years of Pixel-Perfect Craft</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

