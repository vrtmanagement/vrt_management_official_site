// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const OnlineCohortSection = () => {
//   const router = useRouter();
//   // Column 1 (left) - odd numbers: 1, 3, 5, 7, 9
//   const column1 = [
//     { num: 1, text: "Change or Die • Learn | Unlearn | Relearn" },
//     { num: 3, text: "Vision, Purpose, Values, Accountabilities" },
//     { num: 5, text: "Dynamic Communication & TriMetrix HD" },
// {
//   num: 7,
//   text: (
//     <>
//       SWOT – Strengths, Weaknesses, Opportunities, and Threats
//       <br />
//       SWOT analysis for 1-year and 3-year horizons
//     </>
//   )
// },
//     { num: 9, text: "Reflection, Emotional Intelligence & Leadership Discipline" }
//   ];

//   // Column 2 (right) - even numbers: 2, 4, 6, 8, 10
//   const column2 = [
//     { num: 2, text: "Stages of Growth (SOG)" },
//     { num: 4, text: "Trust as an Execution Multiplier" },
//     { num: 6, text: "One-Year & Three-Year Strategic Planning" },
//     { num: 8, text: "GRPI (Goals, Roles, Process, Interpersonal Relations)" },
//     { num: 10, text: "Execution Cadence & Strategy Execution Calendar" }
//   ];

//   return (
//     <section className="relative bg-white py-8 md:py-10 lg:py-12 w-full">
//       <div className="w-full px-4 md:px-6 lg:px-8">
//         {/* Title and Description */}
//         <div className="mb-6 md:mb-8 text-center">
//           <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-2">
//             " Growth as a Process " Implementation
//           </h2>
//           <p className="text-sm md:text-base text-gray-700">
//             This phase installs the foundational leadership and execution systems every scaling business needs.
//           </p>
//         </div>

//         {/* Main Content Grid - Same Height */}
//         <div className="flex justify-center mb-4 w-full ml-16">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-center max-w-7xl">
//           {/* Left Side - Core Focus Areas */}
//           <div className="flex flex-col h-full justify-center">
//             <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
//               Core Focus Areas (Top 10 Models)
//             </h3>
//             <div className="grid grid-cols-2 gap-5 md:gap-6 flex-1">
//               {/* Column 1 */}
//               <div className="space-y-5 flex flex-col">
//                 {column1.map((item) => (
//                   <div
//                     key={item.num}
//                     className="relative p-5 border-2 border-red-600 rounded-lg bg-red-200 flex-1 min-h-[70px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-red-700 hover:-translate-y-1 group"
//                   >
//                     {/* Number Circle - Top Left */}
//                     <div className="absolute -top-1.5 -left-1.5 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs group-hover:scale-110 group-hover:bg-red-700 transition-all duration-300">
//                       {item.num}
//                     </div>
//                     {/* Model Text */}
//                     <p className="text-xs text-gray-800 flex-1 flex items-center justify-center text-center group-hover:text-gray-900 transition-colors">
//                       {item.text}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               {/* Column 2 */}
//               <div className="space-y-5 flex flex-col">
//                 {column2.map((item) => (
//                   <div
//                     key={item.num}
//                     className="relative p-2.5 border-2 border-red-600 rounded-lg bg-red-200 flex-1 min-h-[70px] flex flex-col transition-all duration-300 hover:shadow-lg hover:border-red-700 hover:-translate-y-1 group"
//                   >
//                     {/* Number Circle - Top Left */}
//                     <div className="absolute -top-1.5 -left-1.5 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs group-hover:scale-110 group-hover:bg-red-700 transition-all duration-300">
//                       {item.num}
//                     </div>
//                     {/* Model Text */}
//                     <p className="text-xs text-gray-800 flex-1 flex items-center justify-center text-center group-hover:text-gray-900 transition-colors">
//                       {item.text}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Full Image */}
//           <div className="flex items-center justify-center h-full pt-10">
//             <div className="relative w-full max-w-lg h-full">
//               <div className="relative w-full h-full rounded-xl overflow-hidden">
//                 <Image
//                   src="/online_cohort.png"
//                   alt="Business meetings and collaboration"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//           </div>
//         </div>

//         {/* Call to Action Button */}
//         <div className="flex justify-center">
//           <button 
//             onClick={() => router.push("/ega/growth-system-installation")}
//             className="bg-red-600 text-white px-5 py-2.5 mr-32 rounded-lg font-semibold text-xs md:text-sm hover:bg-red-700 transition-all duration-300 flex items-center gap-2 cursor-pointer"
//           >
//             View All 10 Core Models
//             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OnlineCohortSection;

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const OnlineCohortSection = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeNum, setActiveNum] = useState(null);

  const column1 = [
    { num: 1, text: "Change or Die" },
    {
      num: 3,
      text: (
        <>
          Dynamic Communication
          <br />
          Your Personal TriMetrix HD Report
        </>
      )
    },

    {
      num: 5,
      text: (
        <>
          Strategic Planning and Execution
          <br />
          One-page strategy plan (BHAG, SWOT and Other tools)
          <br />
          Objectives and Key Result Areas
        </>
      )
    },

    {
      num: 7, // keep your original number if different
      text: (
        <>
          The Five Levels of Leadership
          <br />
          SWOT analysis for 1-year and {" "}
          <br className="hidden lg:block" />
          3-year horizons
          <br />
          Team Report / Comparison Report
        </>
      )
    },

    {
      num: 9, // keep your original number if different
      text: (
        <>
          Emotional Intelligence
          <br />
          Your Personal EQ Report
          <br />
          Target Selling Methodology
          <br />
          Your Personal Target Selling Report
        </>
      )
    },

  ];

  const column2 = [
    { num: 2, text: "How to build “TRUST” with all Stakeholders" },
    {
      num: 4,
      text: (
        <>
          Stages Of Growth (SOG)
          <br />
          SOG Diagnostic Assessments Feedback (Five different reports based on your SOG)
        </>
      )
    },
    {
      num: 6,
      text: (
        <>
          Calendar for Continuous Success
          <br />
          Project Charters Templates and {" "}
          <br className="hidden lg:block" />
           Associated Details
          <br />
          Innovation and Long-term Strategy Plan
        </>
      )
    },

    {
      num: 8, // keep your original number if different
      text: (
        <>
          Vision / Purpose / Values / Key Accountabilities / Norms
          <br />
          {/* GRPI (Goals, Roles, Process, Interpersonal Relations) */}
        </>
      )
    },

    {
      num: 10, // keep your original number if different
      text: (
        <>
          Building Your Company’s Vision
          <br />
          Turning Goals into Results
          <br />
          {/* Grit – The Power of Passion and Perseverance */}
        </>
      )
    },

  ];

  return (
    <section className="relative bg-white py-8 md:py-10 lg:py-12 w-full border border-gray-100 rounded-2xl shadow-sm">
      <div className="w-full px-4 md:px-6 lg:px-8">

        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            " Growth as a Process " Implementation
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            This phase installs the foundational leadership and execution systems every scaling business needs.
          </p>
        </div>

        {/* FIXED CENTERING ONLY FOR TABLET */}
        <div className="flex justify-center mb-4 w-full md:ml-0 lg:ml-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-center max-w-7xl">

            <div className="flex flex-col h-full justify-center order-last lg:order-first">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                Core Focus Areas (Top 10 Modules)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 flex-1">

                <div className="space-y-5 flex flex-col">
                  {column1.map((item) => (
                    <div
                      key={item.num}
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        setActiveNum(item.num);
                        setLoading(true);
                        router.push(`/ega/core-modules#module-${item.num}`);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveNum(item.num);
                          setLoading(true);
                          router.push(`/ega/core-modules#module-${item.num}`);
                        }
                      }}
                      className={`relative p-5 border-2 ${activeNum === item.num ? 'border-4 border-red-700' : 'border-red-600'} rounded-lg bg-red-200 flex-1 min-h-[70px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-red-700 group cursor-pointer`}
                    >
                      <div className="absolute -top-1.5 -left-1.5 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs group-hover:scale-110 group-hover:bg-red-700 transition-all duration-300">
                        {item.num}
                      </div>
                      <p className="text-xs text-gray-800 flex-1 flex items-center justify-center text-center group-hover:text-gray-900 transition-colors">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-5 flex flex-col">
                  {column2.map((item) => (
                    <div
                      key={item.num}
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        setActiveNum(item.num);
                        setLoading(true);
                        router.push(`/ega/core-modules#module-${item.num}`);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveNum(item.num);
                          setLoading(true);
                          router.push(`/ega/core-modules#module-${item.num}`);
                        }
                      }}
                      className={`relative p-2.5 border-2 ${activeNum === item.num ? 'border-4 border-red-700' : 'border-red-600'} rounded-lg bg-red-200 flex-1 min-h-[70px] flex flex-col transition-all duration-300 hover:shadow-lg hover:border-red-700 group cursor-pointer`}
                    >
                      <div className="absolute -top-1.5 -left-1.5 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs group-hover:scale-110 group-hover:bg-red-700 transition-all duration-300">
                        {item.num}
                      </div>
                      <p className="text-xs text-gray-800 flex-1 flex items-center justify-center text-center group-hover:text-gray-900 transition-colors">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* IMAGE HIDDEN ONLY ON TABLET */}
            <div className="hidden lg:flex items-center justify-center h-full pt-10 order-first lg:order-last px-4">
              <div className="relative w-full max-w-lg mx-auto h-full">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/online_cohort.png"
                    alt="Business meetings and collaboration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <div className="flex justify-center">
          <button
            onClick={() => {
              setLoading(true);
              router.push("/ega/core-modules")
            }}
            disabled={loading}
            className="bg-red-600 text-white px-5 py-2.5 mr-32 rounded-lg font-semibold text-xs md:text-sm hover:bg-red-700 transition-all duration-300 flex items-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
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
              <>
                View All 10 Core Models
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </div> */}

      </div>
      {/* <h2 className="text-center  text-red-600 mt-14">" What gets Measured gets done "</h2> */}
    </section>
  );
};

export default OnlineCohortSection;