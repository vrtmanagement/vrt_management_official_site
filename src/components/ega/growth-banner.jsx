"use client";

import Image from "next/image";
import LoadingButton from "@/components/ui/LoadingButton"
import { useSiteSchedule } from "@/contexts/SiteScheduleContext";
import { resolveGrowthBanner } from "@/lib/site-schedule-defaults";


const GrowthBanner = () => {
  const { ega } = useSiteSchedule();
  const highlightText = resolveGrowthBanner(ega);
  return (
    <section className="relative w-full overflow-hidden mt-8 md:mt-12 lg:mt-16 mb-2 md:mb-3 lg:mb-4">
      {/* Main Background Image */}
      <div className="relative w-full aspect-[1024/377]">
        <Image
          src="/get_started/girl_longDiv.png"
          alt="Professional woman"
          fill
          className="object-contain object-center"
        />

        {/* Light fade overlay on mobile & tablet (hidden on large+) */}
        <div className="absolute inset-0 bg-white/60 lg:bg-transparent pointer-events-none" />
        
        {/* Content Overlay on Left Side (center on mobile, left on large) */}
        <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full h-full flex items-center">
            <div className="max-w-xl md:max-w-2xl mx-auto md:mx-0 text-center md:text-left space-y-3 md:space-y-4">
              {/* Top Announcement */}
              <p className="text-xs md:text-sm text-gray-900 font-medium">
                Limited Entrepreneurs Allowed - Register Now!
              </p>

              {/* Main Heading */}
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold leading-tight">
                <span className="text-red-600">Make 2026 the Year of Unstoppable</span>
                <span className="text-gray-900"> Growth for Your Business</span>
              </h2>

              {/* Descriptive Paragraph */}
              <p className="text-sm md:text-lg text-gray-900 leading-relaxed">
                Join a select group of Entrepreneurs and SMB leaders committed to scaling their businesses with proven strategies and expert mentorship -{" "}
                <span className="text-red-600 font-medium">{highlightText}</span>
              </p>

              {/* CTA Button */}
              <LoadingButton
                href="/ega/registration-form"
                spinnerColor="text-white"
                className="inline-flex w-full sm:w-auto items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs md:text-sm cursor-pointer justify-center"
              >
                Register Now
                {/* <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg> */}
              </LoadingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthBanner;

