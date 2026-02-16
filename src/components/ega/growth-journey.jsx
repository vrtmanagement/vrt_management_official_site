// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const GrowthJourney = () => {
//   const router = useRouter();
//   const phases = [
//   {
//     number: "1",
//     image: "/ega/egaJourney1.png",
//     heading: "Online Cohort",
//     subHeading: "Growth as a  process Installation",
//     details: [
//       "10-week online cohort program",
//       "Live Zoom sessions (3 hours each)weekly",
//       "Session timing: 11:00 AM – 1:00 PM EST"
//     ]
//   },
//   {
//     number: "2",
//     image: "/ega/egaJourney2.png",
//     heading: "In-Person (4 Days)",
//     subHeading: "Mentoring & Implementation",
//     details: [
//       "2 full in-person days (8:30 AM – 5:00 PM)",
//       "2-3 week implementation break",
//       "Final 2 full in-person days (8:30 AM – 5:00 PM)",
      
//     ]
//   }
// ];


//   return (
//     <section className="relative bg-white py-6 md:py-6 lg:py-6">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-12 md:mb-16">
//       <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
//         The EGA<sup>©</sup> Growth Journey
//       </h2>
//       <p className="text-base md:text-lg text-gray-700 mb-4">
//         How the Program Works?
//       </p>
//       <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
//         EGA<sup>©</sup> is intentionally designed in two phases.
//       </p>


//         </div>

//         {/* Two Phase Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
//           {phases.map((phase, index) => (
//             <div
//               key={index}
//               className="relative rounded-xl p-3 md:p-4 shadow-md overflow-hidden bg-gradient-to-tl from-red-200 via-red-100 to-red-50
//  transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group"
//             >
//               {/* Large Phase Number */}
//               <div className="absolute top-2 right-2 md:top-3 md:right-3">
//                 <span className="text-4xl md:text-5xl font-bold text-red-600 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
//                   {phase.number}
//                 </span>
//               </div>

//               {/* Profile Image */}
//               <div className="relative mb-3">
//                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-300">
//                   <Image
//                     src={phase.image}
//                     alt={phase.heading}
//                     width={64}
//                     height={64}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="relative z-10 space-y-2">
//                 <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
//                   {phase.heading}
//                 </h3>
//                 <h4 className="text-sm md:text-base font-semibold text-gray-700">
//                   {phase.subHeading}
//                 </h4>
                
//                 {/* Details List */}
//                 <ul className="space-y-2">
//   {phase.details.map((detail, idx) => (
//     <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
//       <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600 flex-shrink-0"></span>
//       <span>{detail}</span>
//     </li>
//   ))}
// </ul>


//                 {/* Learn More Button */}
//                 <div className="pt-2">
//                   <button 
//                     onClick={() => {
//                       if (phase.number === "1") {
//                         router.push("/ega/growth-system-installation");
//                       } else if (phase.number === "2") {
//                         router.push("/ega/mentoring-implementation");
//                       }
//                     }}
//                     className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-xs md:text-sm hover:bg-red-700 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg cursor-pointer"
//                   >
//                     Learn more
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>
//         <p className="flex items-center justify-center mt-4">All 10-month mentoring and execution sessions are conducted once a month for 3 hours online via Zoom.</p>
//       </div>
//     </section>
//   );
// };

// export default GrowthJourney;

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const GrowthJourney = () => {
  const router = useRouter();
  const [loadingPhase, setLoadingPhase] = useState(null);

  const phases = [
    {
      number: "1",
      image: "/ega/egaJourney1.png",
      heading: "Online Cohort",
      subHeading: "Growth as a  process Installation",
      details: [
        "10-week online cohort program",
        "Live Zoom sessions (3 hours each)weekly",
        "Session timing: 11:00 AM – 1:00 PM EST"
      ]
    },
    {
      number: "2",
      image: "/ega/egaJourney2.png",
      heading: "In-Person (4 Days)",
      subHeading: "Mentoring and Implementation",
      details: [
        "2 full in-person days (8:30 AM – 5:00 PM)",
        "2-3 week implementation break",
        "Final 2 full in-person days (8:30 AM – 5:00 PM)"
      ]
    }
  ];

  return (
    <section className="relative bg-white py-6 md:py-6 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            The EGA<sup>©</sup> Growth Journey
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            How the Program Works?
          </p>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            EGA<sup>©</sup> is intentionally designed in two phases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative rounded-xl p-3 md:p-4 shadow-md overflow-hidden bg-gradient-to-tl from-red-200 via-red-100 to-red-50 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group"
            >
              <div className="absolute top-2 right-2 md:top-3 md:right-3">
                <span className="text-4xl md:text-5xl font-bold text-red-600 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
                  {phase.number}
                </span>
              </div>

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

              <div className="relative z-10 space-y-2">
                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {phase.heading}
                </h3>
                <h4 className="text-sm md:text-base font-semibold text-gray-700">
                  {phase.subHeading}
                </h4>

                <ul className="space-y-2">
                  {phase.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600 flex-shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setLoadingPhase(phase.number);

                      if (phase.number === "1") {
                        router.push("/ega/growth-system-installation");
                      } else if (phase.number === "2") {
                        router.push("/ega/mentoring-implementation");
                      }
                    }}
                    disabled={loadingPhase === phase.number}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-xs md:text-sm hover:bg-red-700 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {loadingPhase === phase.number ? (
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-100"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      "Learn more"
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="flex items-center justify-center mt-4">
          All 10-month mentoring and execution sessions are conducted once a month for 3 hours online via Zoom.
        </p>
      </div>
    </section>
  );
};

export default GrowthJourney;
