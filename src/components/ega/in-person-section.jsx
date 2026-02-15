"use client";

const InPersonSection = () => {
  const keyBenefits = [
    "Real-time strategy and decision support for a year",
    "Faster execution and measurable progress",
    "Clear accountability and follow-through",
    "Hands-on implementation with your team"
  ];

  const whatsIncluded = [
    "Business assessment & goal alignment",
    "Step-by-step implementation plan",
    "Live mentoring sessions (online)",
    "Team collaboration & leadership support",
    "Post-session action roadmap"
  ];

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-3">
            Mentoring and Execution Implementation (10 months)
          </h2>
         {/* <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          This is where EGA© becomes a true growth alliance. For the next{" "}
          <span className="text-red-600 font-semibold">10 months</span>, participants will engage in:
        </p> */}

        </div>

        {/* Sub-heading */}
        {/* <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 text-center">
          Monthly 3-Hour Live Mentoring Sessions
        </h3> */}

        {/* Two Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
          {/* Left Card - Key Benefits */}
          <div className="bg-gray-100 rounded-lg p-5 md:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
              Key Benefits
            </h4>
            <ul className="space-y-2">
              {keyBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2.5">
                  <span className="text-red-600 font-bold leading-none">•</span>
                  <span className="text-sm md:text-base text-gray-700">
                    {benefit}
                  </span>
                </li>

              ))}
            </ul>
          </div>

          {/* Right Card - What's Included */}
          <div className="bg-gray-100 rounded-lg p-5 md:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
              What's Included (Structured)
            </h4>
            <ul className="space-y-2">
              {whatsIncluded.map((item, index) => (
                <li key={index} className="flex items-center gap-2.5">
                  <span className="text-red-600 font-bold leading-none">•</span>
                  <span className="text-sm md:text-base text-gray-700">
                    {item}
                  </span>
                </li>

              ))}
            </ul>
          </div>
        </div>
{/* <p className="text-center text-sm md:text-base text-gray-700 mt-4">" What gets Measured gets done "</p> */}
      </div>
    </section>
  );
};

export default InPersonSection;

