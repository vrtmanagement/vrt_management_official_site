// "use client";

// import React from "react";
// import Image from "next/image";

// const LEFT_CARD_ITEMS = [
//   "Complete growth system",
//   "Practical implementation tools",
//   "Personalized to your profile",
//   "Science-backed psychometric analysis",
//   "75-page detailed assessment",
// ];

// const RIGHT_CARD_ITEMS = [
//   "Generic training modules",
//   "Motivational content only",
//   "One-size-fits-all approach",
//   "No data or assessment",
// ];

// const STATS = [
//   { value: "1,424+", label: "entrepreneurs served" },
//   { value: "95%", label: "clarity improvement" },
//   { value: "40%", label: "productivity gain" },
// ];

// export default function EEWhyItsDifferent() {
//   return (
//     <section
//       className="w-full font-sans"
//       style={{ fontFamily: "var(--font-sans)" }}
//     >
//       {/* Top section - Why It's Different + comparison cards */}
//       <div className="bg-white py-16 sm:py-20">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2
//             className="text-center font-bold mb-10 sm:mb-12"
//             style={{
//               color: "#FB0000",
//               fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
//             }}
//           >
//             Why It&apos;s Different
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//             {/* Left card - EntrepreneurExcellence */}
//             <div className="relative rounded-xl bg-white p-6 sm:p-8 shadow-md border border-gray-100 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-red-200 hover:scale-[1.01]">
//               <h3
//                 className="font-bold mb-5"
//                 style={{ color: "#FB0000", fontSize: "1.40rem" }}
//               >
//                 EntrepreneurExcellence<sup>©</sup>
//               </h3>
//               <ul className="space-y-3">
//                 {LEFT_CARD_ITEMS.map((item) => (
//                   <li key={item} className="flex gap-2 items-center">
//                     <span
//                       className="flex-shrink-0"
//                       style={{ color: "#FB0000", fontSize: "1.20rem" }}
//                     >
//                       →
//                     </span>
//                     <span
//                       style={{
//                         color: "#1f2937",
//                         fontSize: "1rem",
//                         fontWeight: 400,
//                       }}
//                     >
//                       {item}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Bottom ring icon - bottom-right */}
//               <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 opacity-40 brightness-110 pointer-events-none transition-transform duration-500 group-hover:scale-105 ">
//                 <Image
//                   src="/ee_new/section7/icon1.png"
//                   alt=""
//                   fill
//                   className="object-contain object-bottom-right"
//                   sizes="112px"
//                 />
//               </div>
//             </div>

//             {/* Right card - Generic Training */}
//             <div className="group relative rounded-xl bg-white p-6 sm:p-8 shadow-md border border-gray-200 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-red-200 hover:scale-[1.01]">
//               <h3
//                 className="font-bold mb-5"
//                 style={{ color: "#FB0000", fontSize: "1.40rem" }}
//               >
//                 Generic Training
//               </h3>
//               <ul className="space-y-3">
//                 {RIGHT_CARD_ITEMS.map((item) => (
//                   <li key={item} className="flex gap-2 items-center">
//                     <span
//                       className="flex-shrink-0"
//                       style={{ color: "#FB0000", fontSize: "1.20rem" }}
//                     >
//                       →
//                     </span>
//                     <span
//                       style={{
//                         color: "#1f2937",
//                         fontSize: "1rem",
//                         fontWeight: 400,
//                       }}
//                     >
//                       {item}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//               {/* Bottom ring icon - bottom-right */}
//               <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 opacity-40 pointer-events-none">
//                 <Image
//                   src="/ee_new/section7/icon1.png"
//                   alt=""
//                   fill
//                   className="object-contain object-bottom-right"
//                   sizes="112px"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom section - stats on video-gif background */}
//       <div className="relative min-h-[280px] sm:min-h-[320px] w-4/5 mx-auto rounded-2xl flex items-center justify-center overflow-hidden">
//         {/* Video-gif as background */}
//         <div className="absolute inset-0 z-0 w-340 ">
//           <Image
//             src="/ee_new/section7/video-gif.gif"
//             alt=""
//             fill
//             className="object-cover  object-center scale-[1.05] -translate-x-[2px]"
//             sizes="100vw"
//             unoptimized
//           />
//           <div className="absolute inset-0 bg-black/50 z-[1]" />
//         </div>

//         {/* Stats overlay */}
//         <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 sm:py-16">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 text-center">
//             {STATS.map((stat) => (
//               <div key={stat.label}>
//                 <p
//                   className="text-white font-bold mb-1"
//                   style={{
//                     fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
//                     lineHeight: 1.1,
//                   }}
//                 >
//                   {stat.value}
//                 </p>
//                 <p
//                   className="text-white/90"
//                   style={{
//                     fontSize: "1rem",
//                     fontWeight: 400,
//                   }}
//                 >
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// Above is old content code which is commented for now and Below is updated content code

"use client";

import React from "react";
import Image from "next/image";

const LEFT_CARD_ITEMS = [
  "Founders, SMB owners, and CEOs leading teams of 20 to 500.",
  "Entrepreneurs who have hit a growth ceiling they cannot fully explain.",
  "Leaders who know the problem is internal but not exactly what to fix.",
  "Business owners who want to scale without burning out themselves or their team.",
  "Leaders serious about execution, accountability, and customer value creation.",
  "Those who understand that personal growth and business growth are the same thing.",
  "Entrepreneurs who have the right mindset and are ready for a proven system.",
];

const RIGHT_CARD_ITEMS = [
  "Passive learners looking for another motivational workshop.",
  "Leaders who want results without investing in themselves.",
  "Founders unwilling to evolve how they lead and communicate.",
  "Businesses chasing trends without a long-term growth plan.",
  "Those who believe effort alone is the answer to scale.",
  "Leaders not open to identifying and confronting their own blind spots",
  <>
  Teams with fewer than 20 employees (not yet the right stage for EE
  <sup className="text-[10px] ">©</sup>)
</>,
];

const STATS = [
  { value: "1,424+", label: "entrepreneurs served" },
  { value: "95%", label: "clarity improvement" },
  { value: "40%", label: "productivity gain" },
];

export default function EEWhyItsDifferent() {
  return (
    <section
      className="w-full font-sans"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Top section */}
      <div className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2
            className="text-center font-bold mb-6"
            style={{
              color: "#FB0000",
              fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
            }}
          >
           WHO THIS IS FOR
          </h2>

          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          EE<sup>&copy;</sup> is not for everyone. It's designed for leaders who are done reacting, done guessing, and ready to lead their business with intention, structure, and precision for rapid growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

            {/* LEFT CARD */}
            <div className="group relative rounded-xl bg-white p-6 sm:p-8 shadow-md border border-gray-200 overflow-hidden 
            transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-green-200 hover:scale-[1.01]">

              <h3 className="font-bold mb-5 text-green-600 text-[1.35rem]">
                EE<sup className=" text-[0.65em] opacity-100">©</sup> Is Built For
              </h3>

              <ul className="space-y-4">
                {LEFT_CARD_ITEMS.map((item) => (
                  <li key={item} className="flex gap-3 items-start">

                    <span className="text-green-600 text-[18px] mt-[-2px]">
                      ➜
                    </span>

                    <span className="text-gray-800 text-[15.5px] leading-relaxed">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

              {/* Decorative ring */}
              <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 opacity-40 brightness-110 
              pointer-events-none transition-transform duration-500 group-hover:scale-105">

                <Image
                  src="/ee_new/section7/icon1.png"
                  alt=""
                  fill
                  className="object-contain object-bottom-right"
                  sizes="112px"
                />

              </div>

            </div>

            {/* RIGHT CARD */}
            <div className="group relative rounded-xl bg-white p-6 sm:p-8 shadow-md border border-gray-200 overflow-hidden 
            transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-red-200 hover:scale-[1.01]">

              <h3 className="font-bold mb-5 text-[#FB0000] text-[1.35rem]">
                EE<sup className=" text-[0.65em] opacity-100">©</sup> Is Not For
              </h3>

              <ul className="space-y-4">
                {RIGHT_CARD_ITEMS.map((item) => (
                  <li key={item} className="flex gap-3 items-start">

                    <span className="text-[#FB0000] text-[18px] mt-[-2px]">
                      ➜
                    </span>

                    <span className="text-gray-800 text-[15.5px] leading-relaxed">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

              {/* Decorative ring */}
              <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 opacity-40 brightness-110 
              pointer-events-none transition-transform duration-500 group-hover:scale-105">

                <Image
                  src="/ee_new/section7/icon1.png"
                  alt=""
                  fill
                  className="object-contain object-bottom-right"
                  sizes="112px"
                />

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom section - stats on video-gif background */}
      {/* <div className="relative min-h-[280px] sm:min-h-[320px] w-4/5 mx-auto rounded-2xl flex items-center justify-center overflow-hidden">
       
        <div className="absolute inset-0 z-0 w-340 ">
          <Image
            src="/ee_new/section7/stats-gif.gif"
            alt=""
            fill
            className="object-cover  object-center scale-[1.05] -translate-x-[2px]"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50 z-[1]" />
        </div>

      
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-white font-bold mb-1"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-white/90"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
