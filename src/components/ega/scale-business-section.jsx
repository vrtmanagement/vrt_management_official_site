// "use client";

// import Image from "next/image";
// import Link from "next/link";

// const ScaleBusinessSection = () => {
//   return (
//     <section className="relative bg-white py-16 md:py-16 lg:py-16">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
//         {/* Main Heading at Top */}
//         <div className="mb-12 md:mb-16 text-center">
//           <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-2">
//             Scale your business faster
//           </h2>
//           <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
//             by fixing the People, Processes, and Strategy holding you back.
//           </h2>
//         </div>

//         {/* Image and Content Side by Side */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
//           {/* Left Side - Image */}
//           <div className="h-full">
//             <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
//               <Image
//                 src="/ega/scale_business.png"
//                 alt="Business professional scaling business"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           {/* Right Side - Text Content */}
//           <div className="space-y-6">
//             {/* Description Paragraph */}
//             <p className="text-base md:text-lg text-gray-700 leading-relaxed">
//               VRT Management Group, LLC helps Entrepreneurs and SMB owners/CEOs turn <span className="font-bold">"stuck"</span> into clear priorities, strong execution, and predictable profit without guessing what to do next.
//             </p>

//             {/* Cohort Information */}
//             <div className="space-y-4">
//               {/* Online Cohort */}
//               <div>
//                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
//                   Online EGA<sup>©</sup> Cohort
//                 </h3>

//                 <div className="flex items-center gap-2 text-base md:text-lg text-gray-700">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                   </svg>
//                   <span>Start Date: March 19</span>
//                 </div>
//               </div>

//               {/* In-Person Cohort */}
//               <div>
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
//                   In-Person EGA<sup>©</sup> Cohort
//                 </h3>
//                 <div className="flex items-center gap-2 text-base md:text-lg text-gray-700">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                   </svg>
//                   <span>Start Dates: April 14–15</span>
//                 </div>
//                   <p className="mt-4 bg-amber-100 px-2 py-1 items-center flex justify-center rounded-2xl">Busy on these dates? Join our upcoming online or offline cohorts</p>
//               </div>
//             </div>

//             {/* Contact Us Button */}
//             <div className="pt-4">
//               <Link 
//                 href="/ega/registration-form"
//                 className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-red-700 transition-colors duration-300 w-full md:w-auto text-center cursor-pointer"
//               >
//                 contact us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScaleBusinessSection;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";



const ScaleBusinessSection = () => {
  const router = useRouter();
  const [loadingPhase, setLoadingPhase] = useState(null);

  const phases = [
    {
      number: "1",
      image: "/ega/egaJourney1.png",
      heading: "Online Cohort",
      subHeading: "Growth as a process Installation",
      details: [
        "10-week online cohort workshop",
        "Live Zoom sessions (3 hours each) weekly",
        "Session timing: 11:00 AM – 1:00 PM EST",
      ],
    },
    {
      number: "2",
      image: "/ega/egaJourney2.png",
      heading: "In-Person (4 Days)",
      subHeading: "Growth and Implementation",
      details: [
        "2 full in-person days (8:30 AM – 5:00 PM)",
        "2-3 week implementation break",
        "Final 2 full in-person days (8:30 AM – 5:00 PM)",
      ],
    },
  ];

  return (
    <>
      {/* -------------------- SCALE BUSINESS SECTION -------------------- */}
      <section className="relative bg-white mt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          {/* Heading */}
          <div className="mb-6 text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-2">
             Are You Ambitious to Scale Your Business Faster
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              by transforming the People, Processes, and Strategy.
            </h2>

            {/* Mission / Lead Paragraph - centered and full width of component */}
            <p className="mt-6 max-w-3xl mx-auto w-full text-center text-base md:text-lg text-gray-700 leading-relaxed">
              VRT Management Group, LLC helps Entrepreneurs and SMB owners/CEOs turn{" "}
              <span className="font-bold">"stuck"</span> into clear priorities,
              strong execution, and predictable profit.
            </p>
          </div>

          {/* Image + Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

            {/* Left Image */}
            {/* <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
              <Image
                src="/ega/scale_business.png"
                alt="Business professional scaling business"
                fill
                className="object-cover"
              />
            </div> */}

            {/* Right Content */}
            <div className="space-y-6">

              {/* <div className="space-y-6">

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    Online EGA<sup>©</sup> Cohort
                  </h3>
                  <p className="text-gray-700">Start Date: March 19</p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    In-Person EGA<sup>©</sup> Cohort
                  </h3>
                  <p className="text-gray-700">Start Dates: April 14–15</p>
                 
                </div>

              </div> */}
               {/* <p className="mt-4 bg-amber-100 px-3 py-2 text-center rounded-xl text-sm">
                    Busy on these dates? Join our upcoming cohorts.
                  </p> */}

          
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- GROWTH JOURNEY SECTION (MERGED) -------------------- */}
     {/* -------------------- GROWTH JOURNEY SECTION -------------------- */}
<section className="relative bg-white py-12">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

    {/* Heading */}
    {/* <div className="text-center mb-12 md:mb-16">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
        The EGA<sup>©</sup> Growth Journey
      </h2>
      <p className="text-base md:text-lg text-gray-700 mb-2">
        How the Program Works?
      </p>
      <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
        EGA<sup>©</sup> is intentionally designed in two phases.
      </p>
    </div> */}

    {/* Phases Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {phases.map((phase, index) => (
        <div
          key={index}
          className="relative rounded-xl p-4 shadow-md overflow-hidden 
          bg-gradient-to-tl from-red-200 via-red-100 to-red-50 
          transition-all duration-300 
          hover:shadow-xl hover:scale-105 hover:-translate-y-2 group"
        >

          {/* Big Background Number */}
          <div className="absolute top-3 right-4">
            <span className="text-5xl font-bold text-red-600 opacity-20 
            group-hover:opacity-40 transition-opacity duration-300">
              {phase.number}
            </span>
          </div>

          {/* Phase Icon */}
          <div className="mb-4 relative z-10">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md 
            group-hover:scale-110 transition-transform duration-300">
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
            <h3 className="text-lg font-bold text-gray-900 
            group-hover:text-red-600 transition-colors duration-300">
              {phase.heading}
            </h3>

            <h4 className="text-sm font-semibold text-gray-700">
              {phase.subHeading}
            </h4>

            <ul className="space-y-2 mt-2">
              {phase.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600 flex-shrink-0"></span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {/* Animated Button */}
            <div className="pt-4 text-left">
            <button
                onClick={() => {
                  setLoadingPhase(phase.number);              

                  if (phase.number === "1") {
                    router.push("/ega/growth-system-installation");
                  } else {
                    router.push("/ega/mentoring-implementation");
                  }
                }}
                disabled={loadingPhase === phase.number}
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm
                hover:bg-red-700 hover:scale-105 hover:shadow-lg transition-transform duration-300
                disabled:opacity-70 disabled:cursor-not-allowed 
                inline-flex items-center gap-2 cursor-pointer"
              >
                {loadingPhase === phase.number ? (
                  <>
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
                      />
                      <path
                        className="opacity-100"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Learn more
                  </>
                ) : (
                  "Learn more"
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
          {/* <Link
                href="/ega/registration-form"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-red-700 transition w-full md:w-auto text-center"
              >
                Contact Us
              </Link> */}

    {/* Footer Note */}
    <p className="text-center mt-8 text-lg text-gray-900">
    All 10-month execution review sessions are conducted once a month for 2 hours online via Zoom.
    </p>
  </div>
</section>

    </>
  );
};

export default ScaleBusinessSection;
