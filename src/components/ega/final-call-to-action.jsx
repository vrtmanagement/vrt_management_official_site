// "use client";

// import Image from "next/image";
// import Link from "next/link";

// const FinalCallToAction = () => {
//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* Background Image */}
//       <div className="relative w-full h-[280px] md:h-[320px] lg:h-[360px]">
//         <Image
//           src="/get_started/final_call.jpeg"
//           alt="Professional woman"
//           fill
//           className="object-cover"
//         />
        
//         {/* Content Overlay - Centered */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
//             <div className="space-y-2 md:space-y-3">
//               {/* Main Heading */}
//               <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
//                 Final Call to Action
//               </h2>

//               {/* Subheading */}
//               <h3 className="text-base md:text-lg lg:text-xl font-bold text-white">
//                 Growth Is No Longer About Working Harder{" "}
//                 <span className="text-red-400 mx-2">•</span>{" "}
//                 It's About Working Differently
//               </h3>

//               {/* Descriptive Paragraph */}
//               <p className="text-xs md:text-sm lg:text-base text-white max-w-3xl mx-auto">
//                 If your business has outgrown your current way of operating, EGA™ was built for this moment.
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center pt-2">
//                 {/* Left Button - White Background */}
//                 <Link 
//                   href="/ega/registration-form" 
//                   className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs md:text-sm cursor-pointer"
//                 >
//                   Join Online EGA™ Cohort{" "}
//                   <span className="text-gray-600">•</span>{" "}
//                   Starts March 19
//                 </Link>

//                 {/* Right Button - Light Gray Background */}
//                 <Link 
//                   href="/ega/registration-form" 
//                   className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs md:text-sm cursor-pointer"
//                 >
//                   Join In-Person EGA™ Cohort{" "}
//                   <span className="text-gray-600">•</span>{" "}
//                   Starts April 14-15
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FinalCallToAction;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FinalCallToAction = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingType, setLoadingType] = useState(null);
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-[280px] md:h-[320px] lg:h-[360px]">
        <Image
          src="/get_started/final_call.jpeg"
          alt="Professional woman"
          fill
          className="object-cover"
        />
        
        {/* Content Overlay - Centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <div className="space-y-2 md:space-y-3">
              {/* Main Heading */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                Final Call to Action
              </h2>

              {/* Subheading */}
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-white">
                Growth Is No Longer About Working Harder{" "}
                <span className="text-red-400 mx-2">•</span>{" "}
                It's About Working Differently
              </h3>

              {/* Descriptive Paragraph */}
              <p className="text-xs md:text-sm lg:text-base text-white max-w-3xl mx-auto">
                If your business has outgrown your current way of operating, EGA<sup>©</sup> was built for this moment.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center pt-2">
                {/* Left Button */}
                <button
                  onClick={() => {
                    setLoading(true);
                    setLoadingType("online");
                    router.push(`/ega/registration-form?cohortType=${encodeURIComponent("Online Cohort")}`);
                  }}
                  disabled={loading}
                  className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs md:text-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading && loadingType === "online" ? (
                    <svg className="animate-spin h-4 w-4 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      Join Online EGA<sup>©</sup> Cohort{" "}
                      <span className="text-gray-600 px-2"> • </span>{" "}
                      Starts March 19
                    </>
                  )}
                </button>

                {/* Right Button */}
                <button
                  onClick={() => {
                    setLoading(true);
                    setLoadingType("inperson");
                    router.push(`/ega/registration-form?cohortType=${encodeURIComponent("In-Person Cohort")}`);
                  }}
                  disabled={loading}
                  className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs md:text-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading && loadingType === "inperson" ? (
                    <svg className="animate-spin h-4 w-4 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      Join In-Person EGA<sup>©</sup> Cohort{" "}
                      <span className="text-gray-600 px-2">•</span>{" "}
                      Starts April 14-15
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCallToAction;
