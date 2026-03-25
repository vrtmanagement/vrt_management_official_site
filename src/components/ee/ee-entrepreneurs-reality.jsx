// "use client";

// import React from "react";
// import Image from "next/image";

// const STATS = [
//   {
//     id: 1,
//     label: "The 4% Survival Club",
//     description:
//       "By year ten, only about 4% of entrepreneurs are still successfully scaling and sustaining a profitable business.",
//     icon: "/ee_new/section2/ic1.png", 
//   },
//   {
//     id: 2,
//     label: "The 80% Failure Rate",
//     description:
//       "Nearly 80% of entrepreneurs fail within their first five years.",
//     icon: "/ee_new/section2/ic2.png", 
//   },
//   {
//     id: 3,
//     label: "The Missing 96%",
//     description:
//       "Most founders don't fail because of the economy or the market they fail because they lack the specific leadership traits required to manage growth.",
//     icon: "/ee_new/section2/ic3.png", 
//   },
// ];

// export default function EEEntrepreneursReality() {
//   return (
//     <section
//       className="w-full py-16 sm:py-20 font-sans"
//       style={{
//         backgroundColor: "#F9FAFB",
//         fontFamily: "var(--font-sans)",
//       }}
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Top headings */}
//         <p
//           className="text-center mb-2"
//           style={{
//             color: "#FB0000",
//             fontSize: "22px",
//             fontWeight: 600,
//           }}
//         >
//           Why EE Came To Existence
//         </p>

//         <h2
//           className="text-center mb-6"
//           style={{
//             color: "#FB0000",
//             fontSize: "40px",
//             fontWeight: 800,
//             lineHeight: 1.1,
//           }}
//         >
//           Why Most Businesses Never Truly Scale
//         </h2>

//         {/* Subtitle paragraph */}
//         <p
//           className="text-center max-w-3xl mx-auto mb-2"
//           style={{
//             color: "#333333",
//             fontSize: "17px",
//             fontWeight: 400,
//           }}
//         >
//           Most entrepreneurs focus on strategy, marketing, and products yet they
//           still hit a growth ceiling they cannot break.
//         </p>

//         {/* Supporting line */}
//         <p
//           className="text-center mb-10"
//           style={{
//             color: "#4B5563",
//             fontSize: "15px",
//             fontWeight: 400,
//           }}
//         >
//           As per US Business Statistics{" "}
//           <span className="font-semibold text-[#FB0000]">Brutal Reality</span>
//         </p>

//         {/* Statistic cards */}
//         <div className="grid gap-6 sm:grid-cols-3 mb-12">
//           {STATS.map((item) => (
//             <div
//               key={item.id}
//               className="flex flex-col items-start justify-between h-full rounded-2xl bg-white border border-[#F97373] px-6 py-6 shadow-sm"
//             >
//               <div className="mb-4">
//                 <div className="flex items-center justify-center w-10 h-10 text-[#FB0000] text-xl mb-4">
//                 <Image
//                 src={item.icon}
//                 alt={item.label}
//                 width={30}
//                 height={30}
//                 />
//                 </div>
//                 <h3
//                   className="mb-2"
//                   style={{
//                     color: "#111827",
//                     fontSize: "18px",
//                     fontWeight: 700,
//                   }}
//                 >
//                   {item.label}
//                 </h3>
//                 <p
//                   style={{
//                     color: "#4B5563",
//                     fontSize: "14px",
//                     fontWeight: 400,
//                     lineHeight: 1.5,
//                   }}
//                 >
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom banner text block */}
//         <div
//           className="max-w-4xl mx-auto rounded-xl py-6 px-6 sm:px-8 text-left"
//           style={{
//             backgroundColor: "#FEE2E2",
//           }}
//         >
//           <p
//             className="text-[#333333]"
//             style={{
//               fontSize: "15px",
//               fontWeight: 400,
//               lineHeight: 1.6,
//             }}
//           >
//             You&apos;ve reached your current level through hard work, but the traits that
//             got you here aren&apos;t the same ones required to get you there. Without
//             knowing your behavioral blind spots or your core motivations and skill
//             gaps you have, unintentionally you become the &quot;ceiling&quot; that
//             stops your company from reaching the next level of Growth.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import Image from "next/image";

const STATS = [
  {
    id: 1,
    label: "The 4% Survival Club",
    description: (
      <>
        Who sustain and scale share measurable behavioral, motivational, and leadership patterns and EE
        <sup className="text-[10px] ">©</sup> benchmarks you against them exactly.
      </>
    ),
    icon: "/ee_new/section2/ic1.png",
  },
  {
    id: 2,
    label: "The 80% Failure Rate",
    description:
      "Of entrepreneurs fail within their first five years  not because of the market, but because of who they are as leaders at that moment.",
    icon: "/ee_new/section2/ic2.png",
  },
  {
    id: 3,
    label: "The Missing 96%",
    description:
      "Of founders never reach the top tier. They mistake busyness for momentum and hustle for a growth strategy.",
    icon: "/ee_new/section2/ic3.png",
  },
];

export default function EEEntrepreneursReality() {
  return (
    <section
      className="w-full py-16 sm:py-20 font-sans"
      style={{
        backgroundColor: "#F9FAFB",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top headings */}
        <p
          className="text-center mb-2"
          style={{
            color: "#FB0000",
            fontSize: "22px",
            fontWeight: 600,
          }}
        >
          Why EE<sup className=" text-[0.65em] opacity-100">©</sup> Came To Existence
        </p>

        <h2
          className="text-center mb-6"
          style={{
            color: "#FB0000",
            fontSize: "40px",
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Why Most Businesses Never Truly Scale
        </h2>

        {/* Subtitle paragraph */}
        <p
          className="text-center max-w-3xl mx-auto mb-2"
          style={{
            color: "#333333",
            fontSize: "17px",
            fontWeight: 400,
          }}
        >
          Most entrepreneurs focus on strategy, marketing, and products yet they
          still hit a growth ceiling they cannot break.
        </p>

        {/* Supporting line */}
        <p
          className="text-center mb-10"
          style={{
            color: "#4B5563",
            fontSize: "15px",
            fontWeight: 400,
          }}
        >
          As per US Business Statistics{" "}
          <span className="font-semibold text-[#FB0000]">Brutal Reality</span>
        </p>

        {/* Statistic cards */}
        <div className="grid gap-6 sm:grid-cols-3 mb-12">

          {STATS.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-start justify-between h-full rounded-2xl bg-white border border-[#F97373] px-6 py-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-red-500 hover:bg-red-50/40 cursor-pointer"
            >
              <div className="mb-4">

                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-red-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-100">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={28}
                    height={28}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-2 transition-colors duration-300 group-hover:text-red-600"
                  style={{
                    color: "#111827",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  {item.label}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "#4B5563",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom banner text block */}
        <div
          className="max-w-4xl mx-auto rounded-xl py-6 px-6 sm:px-8 text-left transition-all duration-300 hover:shadow-md"
          style={{
            backgroundColor: "#FEE2E2",
          }}
        >
          <p
            className="text-[#333333]"
            style={{
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            The Leadership Ceiling: You've reached your current level through hard work
             but the traits that got you here are not the same ones required to get you there. 
             Without knowing your behavioral blind spots, core motivations, and skill gaps, you 
             unintentionally become the ceiling that keeps your company from reaching its next level.
          </p>
        </div>

      </div>
    </section>
  );
}