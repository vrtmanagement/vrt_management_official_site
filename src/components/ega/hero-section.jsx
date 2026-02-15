// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect, useRef, useState } from "react";

// export default function HeroSection() {
//   const router = useRouter();
//   const parallaxRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [loadingType, setLoadingType] = useState(null);

//   const handleButtonClick = (type) => {
//     localStorage.setItem('selectedCohortType', type);
//     router.push(`/get-started?type=${type}`);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (parallaxRef.current) {
//         const scrolled = window.pageYOffset;
//         const rate = scrolled * 0.3;
//         parallaxRef.current.style.transform = `translateY(${rate}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-12 px-4 animate-fadeIn overflow-hidden animated-bg-pattern">
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 opacity-10 animated-bg-dots"></div>
//       {/* Parallax background layer */}
//       <div 
//         ref={parallaxRef}
//         className="absolute inset-0 opacity-5" 
//       style={{
//           willChange: 'transform'
//       }}
//     >
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
//           backgroundSize: '200% 200%',
//           animation: 'shimmer 8s ease-in-out infinite'
//         }}></div>
//         </div>
        
//       <div className="max-w-7xl mx-auto text-center relative z-10">
//         <div className="mb-3 text-sm font-semibold tracking-[0.2em] uppercase text-red-100 opacity-90">
//           Inspire - Action - Growth
//         </div>
//         <h1 className="text-2xl mb-8 sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//           VRT Entrepreneurs Growth Alliance<sup>©</sup> (EGA)
//         </h1>
//         {/* <p className="text-base md:text-lg lg:text-xl mb-4 text-red-50 font-medium max-w-4xl mx-auto">
//           A 12-Month Growth & Execution Journey for Entrepreneur-Led Companies and SMBs
//         </p>
//         <p className="text-base md:text-lg mb-6 max-w-3xl mx-auto text-red-100 leading-relaxed">
//           Scale your business with people, process, and strategy transformation.
//         </p> */}
//         {/* <div className="text-xl md:text-2xl font-semibold mb-6 text-red-50 italic">
//           Growth is not an event. Growth is a process.
//         </div> */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button
//             onClick={() => {
//               setLoading(true);
//               setLoadingType("online");
//               router.push(`/ega/registration-form?cohortType=${encodeURIComponent("Online Cohort")}`);
//             }}
//             disabled={loading}
//             className="ripple group bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer text-base md:text-lg min-w-[280px] text-center disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
//           >
//             {loading && loadingType === "online" ? (
//               <svg className="animate-spin h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//             ) : (
//               <>
//                 Join Online Cohort • Starts March 19, 2026
//                 <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </>
//             )}
//           </button>
//           <button
//             onClick={() => {
//               setLoading(true);
//               setLoadingType("inperson");
//               router.push(`/ega/registration-form?cohortType=${encodeURIComponent("In-Person Cohort")}`);
//             }}
//             disabled={loading}
//             className="ripple group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer text-base md:text-lg min-w-[280px] text-center disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
//         >
//             {loading && loadingType === "inperson" ? (
//               <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//             ) : (
//               <>
//                 Join In-Person Cohort • Starts April 15, 2026
//                 <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </>
//             )}
//           </button>
//         </div>
//         <div className="text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-4 text-white max-w-5xl mx-auto">
//           $1M+ in measurable financial impact through stronger systems, leadership depth, and execution discipline.
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const router = useRouter();
  const parallaxRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [loadingType, setLoadingType] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-12 px-4 animate-fadeIn overflow-hidden animated-bg-pattern">
      <div className="absolute inset-0 opacity-10 animated-bg-dots"></div>

      <div
        ref={parallaxRef}
        className="absolute inset-0 opacity-5"
        style={{
          willChange: "transform",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
            animation: "shimmer 8s ease-in-out infinite",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-3 text-sm font-semibold tracking-[0.2em] uppercase text-red-100 opacity-90">
          Inspire - Action - Growth
        </div>

        <h1 className="text-2xl mb-8 sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          VRT Entrepreneurs Growth Alliance<sup>©</sup> (EGA)
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* ONLINE BUTTON */}
          <button
            onClick={() => {
              setLoading(true);
              setLoadingType("online");
              router.push(
                `/ega/registration-form?cohortType=${encodeURIComponent(
                  "Online Cohort"
                )}`
              );
            }}
            disabled={loading && loadingType === "online"}
            className="ripple group bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer text-base md:text-lg min-w-[280px] text-center disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading && loadingType === "online" ? (
              <svg
                className="animate-spin h-5 w-5 text-red-600"
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
                Join Online Cohort • Starts March 19, 2026
                <svg
                  className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </>
            )}
          </button>

          {/* IN-PERSON BUTTON */}
          <button
            onClick={() => {
              setLoading(true);
              setLoadingType("inperson");
              router.push(
                `/ega/registration-form?cohortType=${encodeURIComponent(
                  "In-Person Cohort"
                )}`
              );
            }}
            disabled={loading && loadingType === "inperson"}
            className="ripple group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer text-base md:text-lg min-w-[280px] text-center disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading && loadingType === "inperson" ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
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
                Join In-Person Cohort • Starts April 15, 2026
                <svg
                  className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </>
            )}
          </button>
        </div>

        <div className="text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-4 text-white max-w-5xl mx-auto">
          $1M+ in measurable financial impact through stronger systems,
          leadership depth, and execution discipline.
        </div>
      </div>
    </section>
  );
}
