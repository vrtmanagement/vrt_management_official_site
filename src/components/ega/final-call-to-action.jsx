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
import LoadingButton from "@/components/ui/LoadingButton"


const FinalCallToAction = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingType, setLoadingType] = useState(null);
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-[280px] md:h-[280px] lg:h-[360px]">
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
              <h2 className="text-xl md:text-xl lg:text-3xl font-bold text-white">
                Final Call to Action
              </h2>

              {/* Subheading */}
              <h3 className="text-base md:text-base lg:text-xl font-bold text-white">
                Growth Is No Longer About Working Harder{" "}
                <span className="text-red-400 mx-2">•</span>{" "}
                It's About Working Differently
              </h3>

              {/* Descriptive Paragraph */}
              <p className="text-xs md:text-xs lg:text-base text-white max-w-3xl mx-auto">
                If your business has outgrown your current way of operating, EGA<sup>©</sup> was built for this moment.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col lg:flex-row gap-2 md:gap-3 justify-center items-center pt-2">
                {/* Left Button */}
                <LoadingButton
                    href={`/ega/registration-form?cohortType=${encodeURIComponent("Online Cohort")}`}
                    spinnerColor="text-gray-900"
                    className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs md:text-sm cursor-pointer flex items-center justify-center"
                  >
                    <>
                      Join Online EGA<sup>©</sup> Cohort{" "}
                      <span className="text-gray-600 px-2"> • </span>{" "}
                      Starts April 16
                    </>
                  </LoadingButton>

                                  {/* Right Button */}
                  <LoadingButton
                    href={`/ega/registration-form?cohortType=${encodeURIComponent("In-Person Cohort")}`}
                    spinnerColor="text-gray-900"
                    className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs md:text-sm cursor-pointer flex items-center justify-center"
                  >
  <>
    Join In-Person EGA<sup>©</sup> Cohort{" "}
    <span className="text-gray-600 px-2">•</span>{" "}
    Starts April 14
  </>
</LoadingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCallToAction;
