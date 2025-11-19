'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-black relative overflow-hidden py-12 sm:py-16 ">
      {/* Subtle background pattern with red accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(220, 38, 38, 0.1) 10px,
            rgba(220, 38, 38, 0.1) 20px
          )`
        }}></div>
      </div>

      {/* Red accent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          {/* Profile Picture */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 sm:mb-8">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-red-600/30 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                alt="Lead designer profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 max-w-3xl">
            Meet the Minds Behind the Magic
          </h2>

          {/* Sub-heading */}
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
            Get a free 30-minute strategy session with our lead designer.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-base sm:text-lg px-8 py-5 sm:py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 mb-6 sm:mb-8 border-2 border-red-600 hover:border-red-700"
          >
            Book a Free Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

