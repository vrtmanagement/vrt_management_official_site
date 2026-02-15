// "use client";

// import Image from "next/image";

// const HowToGetStarted = () => {
//   const steps = [
//     {
//       number: 1,
//       image: "/get_started/step1.png",
//       // description: "Choose Online (March 19) & In-Person (April 14-15)",
//       description: "Register here for Online or Offline cohorts.",
//     },
//     {
//       number: 2,
//       image: "/get_started/step2.png",
//       // description: "Register here to begin your EGA© Growth Journey",
//       description: "If you would like additional information, book a free strategy call.",
//       hasEmail: true,
//     },
//     {
//       number: 3,
//       image: "/get_started/step3.png",
//       description: "Complete diagnostics & onboarding",
//     },
//     {
//       number: 4,
//       image: "/get_started/step4.png",
//       description:
//         "Begin the 12-month EGA© Growth Journey & scale your company",
//     },
//   ];

//   return (
//     <section className="relative bg-white py-12 md:py-12 lg:py-12">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
//         {/* Title */}
//         <div className="text-center mb-6 md:mb-8">
//           <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
//             How to Get Started
//           </h2>
//         </div>

//         {/* Steps */}
//         <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 md:gap-4 lg:gap-6">
//           {steps.map((step, index) => (
//             <div key={step.number} className="flex items-center gap-3 md:gap-4 lg:gap-6">
//               {/* Step Card */}
//               <div className="flex flex-col items-center justify-between h-full min-h-[340px] max-w-[200px] md:max-w-[220px] lg:max-w-[240px]">
//                 {/* Image */}
//                 <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2">
//                   <Image
//                     src={step.image}
//                     alt={`Step ${step.number}`}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Description */}
//                 {/* <p className="text-center text-sm md:text-base text-gray-900 leading-relaxed">
//                   {step.hasEmail ? (
//                     <>
//                       <span
//                         onClick={() =>
//                           (window.location.href =
//                             "https://www.vrt9.net/ega/registration-form")
//                         }
//                         className="text-red-600 underline cursor-pointer font-medium"
//                       >
//                         Register
//                       </span>{" "}
//                       here to begin your EGA<sup>©</sup> Growth Journey
//                     </>
//                   ) : (
//                     <>
//                       {step.description.replace(
//                         "EGA©",
//                         "EGA"
//                       )}
//                       {step.description.includes("EGA©") && <sup>©</sup>}
//                     </>
//                   )}
//                 </p> */}
//                 {/* <p className="text-center text-sm md:text-base text-gray-900 leading-relaxed">
//   {step.number === 2 && (
//     <>
//       <span className="text-red-600 underline cursor-pointer font-medium">
//         Register
//       </span>{" "}
//       here to begin your EGA<sup>©</sup> Growth Journey
//     </>
//   )}

//   {step.number === 4 && (
//     <>
//       Begin the 12-month EGA<sup>©</sup> Growth Journey & scale your company
//     </>
//   )}

//   {step.number !== 2 && step.number !== 4 && step.description}
// </p> */}
// <p className="text-center text-sm md:text-base text-gray-900 leading-relaxed">

//   {/* Step 1 */}
//   {step.number === 1 && (
//     <>
//       <span
//         onClick={() =>
//           (window.location.href =
//             "https://www.vrt9.net/ega/registration-form")
//         }
//         className="text-red-600 underline cursor-pointer font-medium"
//       >
//         Register
//       </span>{" "}
//       here for Online or Offline cohorts
//     </>
//   )}

//   {/* Step 2 */}
//   {step.number === 2 && (
//     <>
//       If you would like additional information,{" "}
//       <span className="text-red-600 underline cursor-pointer font-medium whitespace-nowrap">
//   book a free strategy call
// </span>
//     </>
//   )}

//   {/* Step 3 (unchanged) */}
//   {step.number === 3 && step.description}

//   {/* Step 4 (unchanged) */}
//   {step.number === 4 && (
//     <>
//       Begin the 12-month EGA<sup>©</sup> Growth Journey & scale your company
//     </>
//   )}
// </p>

//               </div>

//               {/* Arrow */}
//               {index < steps.length - 1 && (
//                 <div className="hidden md:block flex-shrink-0">
//                   <svg
//                     className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-red-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={3}
//                       d="M13 5l7 7-7 7M5 5l7 7-7 7"
//                     />
//                   </svg>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowToGetStarted;

"use client";

import Image from "next/image";
import { useState } from "react";

const HowToGetStarted = () => {
  const [loadingStep, setLoadingStep] = useState(null);

  const handleRedirect = (stepNumber, url, openInNewTab = false) => {
    setLoadingStep(stepNumber);
    setTimeout(() => {
      if (openInNewTab) {
        window.open(url, "_blank");
      } else {
        window.location.href = url;
      }
    }, 800); // small delay for spinner effect
  };

  const steps = [
    {
      number: 1,
      image: "/get_started/step1.png",
      description: "Enroll in a Cohort",
    },
    {
      number: 2,
      image: "/get_started/step2.png",
      description:
        "Schedule a Complimentary Strategy Session",
    },
    {
      number: 3,
      image: "/get_started/step3.png",
      description: "Complete Your Growth Diagnostics & Onboarding",
    },
    {
      number: 4,
      image: "/get_started/step4.png",
      description:
        "Execute the 12-Month EGA© Framework",
    },
  ];

  return (
    <section className="relative bg-white py-12 md:py-12 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            How to Get Started
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 md:gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-3 md:gap-4 lg:gap-6">
              
              <div className="flex flex-col items-center justify-between h-full min-h-[340px] max-w-[200px] md:max-w-[220px] lg:max-w-[240px]">

                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2">
                  <Image
                    src={step.image}
                    alt={`Step ${step.number}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-center text-sm md:text-base text-gray-900 leading-relaxed">

                  {/* Step 1 */}
                  {step.number === 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          handleRedirect(
                            1,
                            "https://www.vrt9.net/ega/registration-form"
                          )
                        }
                        disabled={loadingStep === 1}
                        className="text-red-600 underline cursor-pointer font-medium inline-flex items-center gap-2 disabled:opacity-70"
                      >
                        Register
                        {loadingStep === 1 && (
                          <span className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></span>
                        )}
                      </button>{" "}
                       here to Enroll in a Cohort
                    </>
                  )}

                  {/* Step 2 */}
                  {step.number === 2 && (
                    <>
                      If you would like additional information,{" "}
                      <button
                        type="button"
                        onClick={() =>
                          handleRedirect(
                            2,
                            "https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2025-06",
                            true
                          )
                        }
                        disabled={loadingStep === 2}
                        className="text-red-600 underline cursor-pointer font-medium whitespace-nowrap inline-flex items-center gap-2 disabled:opacity-70"
                      >
                        Schedule a Complimentary Strategy Session
                        {loadingStep === 2 && (
                          <span className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></span>
                        )}
                      </button>
                    </>
                  )}

                  {/* Step 3 */}
                  {step.number === 3 && step.description}

                  {/* Step 4 */}
                  {step.number === 4 && (
                    <>
                      Execute the 12-Month EGA<sup>©</sup> Framework
                    </>
                  )}

                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center flex-shrink-0 h-[340px]">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
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
