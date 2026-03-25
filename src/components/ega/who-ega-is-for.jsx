"use client";

import Image from "next/image";

const WhoEGAIsFor = () => {
  const builtFor = [
    "Entrepreneurs, SMB Owners, Founders, CEOs.",
    "Entrepreneur-led companies and Entrepreneur.",
    "Leaders ready to install proven systems.",
    "Businesses serious about execution and value creation."
  ];

  const notFor = [
    "Passive learners.",
    "Shortcut seekers.",
    "Leaders who want results without process.",
    "Leaders unwilling to change how they operate.",
    "Businesses chasing trends without a long-term plan."
  ];

  return (
    <section className="relative bg-white py-12 md:py-12 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-4">
            Who EGA<sup className="text-md ">©</sup> Is For
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
            It's designed for founders, executives, and operators who are done reacting and ready to run their business with intention, structure, and precision.
          </p>
        </div>

        {/* Main Content - Image and Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* Left Side - Image */}
          <div className="order-first md:order-1 h-full flex justify-center items-center">
          <div className="relative w-full max-w-lg mx-auto h-full rounded-lg overflow-hidden min-h-[220px] md:min-h-[300px] lg:min-h-[220px]">
              <Image
                src="/ega_for-v2.png"
                alt="Professional business executive"
                fill
                className="object-cover md:object-center object-top"
              />
            </div>
          </div>

          {/* Right Side - Lists */}
          <div className="order-1 md:order-2 h-full flex flex-col md:flex-row lg:flex-col gap-8 md:px-8 lg:px-0">
            {/* EGA™ Is Built For */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-4">
                EGA<sup className="text-md ">©</sup> Is Built For:
              </h3>
              <ul className="space-y-3">
                {builtFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base md:text-lg text-gray-700 flex-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* EGA™ Is Not For */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
                EGA<sup className="text-md">©</sup> Is Not For:
              </h3>
              <ul className="space-y-3">
                {notFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-base md:text-lg text-gray-700 flex-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoEGAIsFor;

