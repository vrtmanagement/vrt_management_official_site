"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const GrowthJourney = () => {
  const router = useRouter();
  const phases = [
    {
      number: "1",
      image: "/ega/egaJourney1.png",
      heading: "Online Cohort",
      subHeading: "Growth System Installation",
      details: [
        "Core Learning & Alignment",
        "10 Weeks (Online) or 4 Days (In-Person)"
      ]
    },
    {
      number: "2",
      image: "/ega/egaJourney2.png",
      heading: "In-Person",
      subHeading: "Mentoring & Implementation",
      details: [
        "10 Months of Growth Alliance",
        "Monthly sessions, peer learning, accountability"
      ]
    }
  ];

  return (
    <section className="relative bg-white py-6 md:py-6 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            The EGA™ Growth Journey
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            How the Program Works
          </p>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            EGA™ is intentionally designed in two phases.
          </p>
        </div>

        {/* Two Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative rounded-xl p-3 md:p-4 shadow-md overflow-hidden bg-gradient-to-br from-red-200 via-red-100 to-red-50 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group"
            >
              {/* Large Phase Number */}
              <div className="absolute top-2 right-2 md:top-3 md:right-3">
                <span className="text-4xl md:text-5xl font-bold text-red-600 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
                  {phase.number}
                </span>
              </div>

              {/* Profile Image */}
              <div className="relative mb-3">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={phase.image}
                    alt={phase.heading}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-2">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {phase.heading}
                </h3>
                <h4 className="text-sm md:text-base font-semibold text-gray-700">
                  {phase.subHeading}
                </h4>
                
                {/* Details List */}
                <ul className="space-y-1">
                  {phase.details.map((detail, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-gray-600">
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <div className="pt-2">
                  <button 
                    onClick={() => {
                      if (phase.number === "1") {
                        router.push("/ega/growth-system-installation");
                      } else if (phase.number === "2") {
                        router.push("/ega/mentoring-implementation");
                      }
                    }}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-xs md:text-sm hover:bg-red-700 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg cursor-pointer"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthJourney;

