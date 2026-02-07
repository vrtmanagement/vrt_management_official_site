"use client";

import Image from "next/image";
import Link from "next/link";

const ScaleBusinessSection = () => {
  return (
    <section className="relative bg-white py-16 md:py-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading at Top */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-2">
            Scale your business faster
          </h2>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
            by fixing the People, Processes, and Strategy holding you back.
          </h2>
        </div>

        {/* Image and Content Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left Side - Image */}
          <div className="h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
              <Image
                src="/ega/scale_business.png"
                alt="Business professional scaling business"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6">
            {/* Description Paragraph */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              VRT Management Group helps USA-focused SMB owners/CEOs turn "stuck" into clear priorities, strong execution, and predictable profit without guessing what to do next.
            </p>

            {/* Cohort Information */}
            <div className="space-y-4">
              {/* Online Cohort */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  Online EGA™ Cohort
                </h3>
                <div className="flex items-center gap-2 text-base md:text-lg text-gray-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Start Date: March 19</span>
                </div>
              </div>

              {/* In-Person Cohort */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  In-Person EGA™ Cohort (Premium Immersive)
                </h3>
                <div className="flex items-center gap-2 text-base md:text-lg text-gray-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Start Dates: April 14–15</span>
                </div>
              </div>
            </div>

            {/* Contact Us Button */}
            <div className="pt-4">
              <Link 
                href="/ega/registration-form"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-red-700 transition-colors duration-300 w-full md:w-auto text-center cursor-pointer"
              >
                contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleBusinessSection;

