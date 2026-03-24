
// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const PILLARS = [
//   {
//     title: "Strategic Clarity",
//     text: "You Stop Guessing And Start Using A Repeatable System To Drive Your Business Forward By Identifying The Gaps Through Your Psychometric Assessment.",
//   },
//   {
//     title: "Leadership Alignment",
//     text: "You Understand Your Top 4 Behavioral Blind Spots, Allowing You To Build Stronger Teams And Manage Uncertainty With Ease By Mastering Your Gaps From The Report.",
//   },
//   {
//     title: "Operational Discipline",
//     text: "You Master The Top 4 Driving Forces And 7 Critical Competencies That Align With Top Performers Through Given Personal Development Plan And Allow You To Translate Strategy Into Measurable Financial Impact And Business Growth.",
//   },
// ];

// const container = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.25 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, x: -40 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// export default function EEWhoIsThisFor() {
//   return (
//     <section className="w-full py-20 font-sans">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-16 max-w-4xl mx-auto">
//           <h2 className="font-bold text-[42px] leading-tight mb-6 text-black">
//             What Success Looks Like At EE
//             <sup className="align-super text-[0.55em] opacity-100">©</sup>
//           </h2>

//           <p className="text-[18px] text-gray-700 leading-relaxed">
//             At <span className="font-bold" >Entrepreneur Excellence
//             <sup className="text-[0.65em] opacity-100">©</sup>(EE
//               <sup className="align-super text-[0.55em] opacity-100">©</sup>)</span> ,
//             success isn't just about surviving, it is about joining the top 4%
//             of Entrepreneur and founders who build businesses that are profitable,
//             sustainable, and resilient long term.
//           </p>
//         </div>

//         {/* MOBILE + TABLET LAYOUT */}
//         <div className="lg:hidden">

//           {/* Heading */}
//           <h3 className="text-[#FB0000] font-bold text-[26px] leading-snug mb-6 md:px-12">
//             The Three Pillars Of An "Elite" Entrepreneur After Excellence Masterclass
//           </h3>

//           {/* Image */}
//           <div className="relative w-full h-[380px] rounded-[24px] overflow-hidden shadow-lg mb-8">
//             <Image
//               src="/ee_new/section7/img1.png"
//               alt="Entrepreneur working"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Text */}
//           <p className="text-gray-700 mb-8 text-[17px] leading-relaxed md:px-12">
//             When you complete the <span className="font-bold">EE
//             <sup className="align-super text-[0.55em] opacity-100">©</sup></span> {" "}
//             program, success is measured by your ability to align with the
//             proven benchmarks of high growth leaders:
//           </p>

//           <motion.div
//             className="space-y-7 md:px-12"
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             {PILLARS.map((itemData) => (
//               <motion.div
//                 key={itemData.title}
//                 variants={item}
//                 className="flex gap-4"
//               >
//                 <div className="relative w-[20px] h-[20px] mt-[4px] flex-shrink-0">
//                   <Image
//                     src="/ee_new/section7/check.png"
//                     alt="check icon"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-[18px] text-black mb-1">
//                     {itemData.title}
//                   </h4>

//                   <p className="text-gray-700 text-[15px] leading-relaxed">
//                     {itemData.text}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* DESKTOP LAYOUT (UNCHANGED) */}
//         <div className="hidden lg:grid lg:grid-cols-2 gap-14 items-center">

//           <div>

//             <h3 className="text-[#FB0000] font-bold text-[26px] leading-snug mb-6 md:px-12 lg:px-0">
//               The Three Pillars Of An "Elite" Entrepreneur After Excellence Masterclass
//             </h3>

//             <p className="text-gray-700 mb-8 text-[17px] leading-relaxed md:px-12 lg:px-0">
//               When you complete the <span className="font-bold">EE
//               <sup className="align-super text-[0.55em] opacity-100">©</sup></span> {" "}
//               program, success is measured by your ability to align with the
//               proven benchmarks of high growth leaders:
//             </p>

//             <motion.div
//               className="space-y-7"
//               variants={container}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//             >
//               {PILLARS.map((itemData) => (
//                 <motion.div
//                   key={itemData.title}
//                   variants={item}
//                   className="flex gap-4"
//                 >
//                   <div className="relative w-[20px] h-[20px] mt-[4px] flex-shrink-0">
//                     <Image
//                       src="/ee_new/section7/check.png"
//                       alt="check icon"
//                       fill
//                       className="object-contain"
//                     />
//                   </div>

//                   <div>
//                     <h4 className="font-semibold text-[18px] text-black mb-1">
//                       {itemData.title}
//                     </h4>

//                     <p className="text-gray-700 text-[15px] leading-relaxed">
//                       {itemData.text}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>

//           </div>

//           <div className="relative w-full h-[540px] rounded-[24px] overflow-hidden shadow-lg">
//             <Image
//               src="/ee_new/section7/img1.png"
//               alt="Entrepreneur working"
//               fill
//               className="object-cover"
//               sizes="(max-width: 1024px) 100vw, 50vw"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PILLARS = [
  {
    // title: "Strategic Clarity",
    text: "You make smarter decisions that save time and money replacing gut-driven mistakes with self-aware, data-backed choices that keep your business moving in the right direction.",
  },
  {
    // title: "Leadership Alignment",
    text: "You build a high-performing team by understanding who to hire, how to lead them effectively, and what has been causing friction and underperformance.",
  },
  {
    // title: "Operational Discipline",
    text: "You stop being your own biggest bottleneck identifying the blind spots that have been quietly limiting your leadership, relationships, and growth.",
  },
  {
    // title: "Strategic Clarity",
    text: "You know exactly where to focus to grow faster, concentrating your energy on the priorities that create the greatest business impact.",
  },
  {
    // title: "Leadership Alignment",
    text: "You scale with confidence instead of chaos following a clear, personalized roadmap that makes growth structured, sustainable, and predictable.",
  },
  {
    // title: "Operational Discipline",
    text: "You increase enterprise value by implementing proven leadership strategies that make your business 10× more scalable and financially robust.",
  },  
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function EEWhoIsThisFor() {
  return (
    <section className="w-full py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-bold text-[42px] leading-tight mb-6 text-black">
            What Success Looks Like At EE
            <sup className="align-super text-[0.55em] opacity-100">©</sup>
          </h2>

          <p className="text-[18px] text-gray-700 leading-relaxed">
            At <span className="font-bold" >Entrepreneur Excellence
            <sup className="text-[0.65em] opacity-100">©</sup>(EE
              <sup className="align-super text-[0.55em] opacity-100">©</sup>)</span> ,
            success isn't just about surviving, it is about joining the top 4%
            of Entrepreneur and founders who build businesses that are profitable,
            sustainable, and resilient long term.
          </p>
        </div>

        {/* MOBILE + TABLET LAYOUT */}
        <div className="lg:hidden">

          {/* Heading */}
          <h3 className="text-[#FB0000] font-bold text-[26px] leading-snug mb-6 md:px-12">
            The Three Pillars Of An "Elite" Entrepreneur After Excellence Masterclass
          </h3>

          {/* Image */}
          <div className="relative w-full h-[380px] rounded-[24px] overflow-hidden shadow-lg mb-8">
            <Image
              src="/ee_new/section7/img1.png"
              alt="Entrepreneur working"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <p className="text-gray-700 mb-8 text-[17px] leading-relaxed md:px-12">
            When you complete the <span className="font-bold">EE
            <sup className="align-super text-[0.55em] opacity-100">©</sup></span> {" "}
            program, success is measured by your ability to align with the
            proven benchmarks of high growth leaders:
          </p>

          <motion.div
            className="space-y-7 md:px-12"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {PILLARS.map((itemData) => (
              <motion.div
                key={itemData.title}
                variants={item}
                className="flex gap-4"
              >
                <div className="relative w-[20px] h-[20px] mt-[4px] flex-shrink-0">
                  <Image
                    src="/ee_new/section7/check.png"
                    alt="check icon"
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  {/* <h4 className="font-semibold text-[18px] text-black mb-1">
                    {itemData.title}
                  </h4> */}

                  <p className="text-black-700 text-[15px] leading-relaxed">
                    {itemData.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT (UNCHANGED) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <h3 className="text-[#FB0000] font-bold text-[26px] leading-snug mb-6 md:px-12 lg:px-0">
            Entrepreneur After Excellence Masterclass
            </h3>

            <p className="text-gray-700 mb-8 text-[17px] leading-relaxed md:px-12 lg:px-0">
              When you complete the <span className="font-bold">EE
              <sup className="align-super text-[0.55em] opacity-100">©</sup></span> {" "}
              program, success is measured by your ability to align with the
              proven benchmarks of high growth leaders:
            </p>

            <motion.div
              className="space-y-7"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {PILLARS.map((itemData) => (
                <motion.div
                  key={itemData.title}
                  variants={item}
                  className="flex gap-4"
                >
                  <div className="relative w-[20px] h-[20px] mt-[4px] flex-shrink-0">
                    <Image
                      src="/ee_new/section7/check.png"
                      alt="check icon"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div>
                    {/* <h4 className="font-semibold text-[18px] text-black mb-1">
                      {itemData.title}
                    </h4> */}

                    <p className="text-black-700 text-[15px] leading-relaxed">
                      {itemData.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          <div className="relative w-full h-[540px] rounded-[24px] overflow-hidden shadow-lg">
            <Image
              src="/ee_new/section7/img1.png"
              alt="Entrepreneur working"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}