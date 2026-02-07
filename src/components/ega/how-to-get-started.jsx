"use client";

import Image from "next/image";

const HowToGetStarted = () => {
  const steps = [
    {
      number: 1,
      image: "/get_started/step1.png",
      description: "Choose Online (March 19) & In-Person (April 14-15)"
    },
    {
      number: 2,
      image: "/get_started/step2.png",
      description: "Register or apply via email : coachrajesh@vrt9.com",
      hasEmail: true
    },
    {
      number: 3,
      image: "/get_started/step3.png",
      description: "Complete diagnostics & onboarding"
    },
    {
      number: 4,
      image: "/get_started/step4.png",
      description: "Begin the 12-month EGA™ Growth Journey"
    }
  ];

  return (
    <section className="relative bg-white py-12 md:py-12 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            How to Get Started
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            A clear process designed for leaders ready to execute and scale.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-3 md:gap-4 lg:gap-6">
              {/* Step Card */}
              <div className="flex flex-col items-center max-w-[200px] md:max-w-[220px] lg:max-w-[240px]">
                {/* Image */}
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2">
                  <Image
                    src={step.image}
                    alt={`Step ${step.number}`}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Description */}
                <p className="text-center text-sm md:text-base text-gray-900 leading-relaxed">
                  {step.hasEmail ? (
                    <>
                      Register or apply via email :{" "}
                      <span className="text-red-600 font-medium">coachrajesh@vrt9.com</span>
                    </>
                  ) : (
                    step.description
                  )}
                </p>
              </div>

              {/* Double Chevron Arrow (except after last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block flex-shrink-0">
                  <svg 
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-red-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToGetStarted;

