'use client';

import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import axios from 'axios';

const HeroNewsletter = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post('/api/newsletter', {
        email
      })
      setEmail('');
      console.log(response);
      if (response.status === 201) {
        console.log(response.data);
      } else {
        console.log(response.data);      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="relative bg-black overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center">
      {/* Background Image */}
      <div className="">
        <Image
          src="https://www.forbes.com/advisor/wp-content/uploads/2023/04/ai_business_survey_-_article_image.jpg"
          alt="Business professionals collaborating"
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="text-center flex flex-col items-center">
          {/* Title/Name with red accent */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-white mb-2">
              The Growth Edge
            </h2>

          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl  font-bold text-white leading-[1.1] tracking-tight max-w-5xl mb-6 sm:mb-8">
            Concrete Tips to Grow Profit, Build a Stronger Team, and Buy Back Your Time
          </h1>

          {/* Sub-Headline */}
          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-3xl leading-relaxed mb-8 sm:mb-10 lg:mb-12">
            In under 4 minutes, you'll get practical moves to grow profit, sharpen your team, and take back control of your time.
          </p>

          {/* CTA Form */}
          <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                required
                className="text-base sm:text-lg py-6 sm:py-7 px-5 sm:px-6 flex-[2] min-w-0 bg-white text-black placeholder:text-gray-500 rounded-lg border-2 border-white focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-bold py-6 sm:py-7 px-4 sm:px-6 rounded-lg transition-all hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-red-600 hover:border-red-700 whitespace-nowrap flex-shrink-0"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm sm:text-base text-white/80">
              Join thousands of entrepreneurs getting actionable insights every week.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroNewsletter;