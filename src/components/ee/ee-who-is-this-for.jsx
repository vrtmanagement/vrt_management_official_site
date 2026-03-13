  // "use client";

  // import React from "react";
  // import Image from "next/image";

  // const BULLET_ITEMS = [
  //   "Owners Tired Of Firefighting And Chaos",
  //   "Founders Of Small And Mid-Sized Businesses",
  //   "Entrepreneurs Stuck At A Plateau",
  //   "Leaders Preparing For High Growth",
  //   "Operators Transitioning To Strategic Leadership",
  //   "CEOs Who Want Stronger Teams And Better Alignment",
  // ];

  // export default function EEWhoIsThisFor() {
  //   return (
  //     <section
  //       className="w-full py-16 sm:py-20 font-sans"
  //       style={{
  //         backgroundColor: "#FFFFFF",
  //         fontFamily: "var(--font-sans)",
  //       }}
  //     >
  //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  //         {/* Top heading - centered, two lines */}
  //         <div className="text-center mb-10 sm:mb-12">
  //           <h2
  //             className="font-bold text-[#FB0000] leading-tight"
  //             style={{
  //               fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
  //             }}
  //           >
  //             Who Is This Program For?
  //           </h2>
          
  //         </div>

  //         {/* Mobile & tablet: image directly under headline, then content */}
  //         <div className="block lg:hidden">
  //           <div className="flex flex-col gap-8 items-center">
  //           <div className="relative w-full aspect-[3/4] max-h-[350px] rounded-xl overflow-hidden mx-auto">
  //               <Image
  //                 src="/ee_new/section7/img1.png"
  //                 alt="Entrepreneur at work"
  //                 fill
  //                 className="object-cover"
  //                 sizes="(max-width: 1024px) 100vw, 50vw"
  //               />
  //             </div>

  //             <div className="w-full">
  //               <p
  //                 className="font-bold mb-6"
  //                 style={{
  //                   color: "#FB0000",
  //                   fontSize: "1.50rem",
  //                 }}
  //               >
  //                 EntrepreneurExcellence<sup>©</sup> Is Ideal For:
  //               </p>

  //               <ul className="space-y-3 mb-8">
  //                 {BULLET_ITEMS.map((item) => (
  //                   <li key={item} className="flex gap-3 items-center">
  //                     <span
  //                       className="flex-shrink-0"
  //                       style={{ color: "#FB0000", fontSize: "1.155rem" }}
  //                     >
  //                       ✔
  //                     </span>
  //                     <span
  //                       style={{
  //                         color: "#000000",
  //                         fontSize: "1.155rem",
  //                         fontWeight: 400,
  //                       }}
  //                     >
  //                       {item}
  //                     </span>
  //                   </li>
  //                 ))}
  //               </ul>

  //               {/* Highlight box - light reddish-pink bg, rounded corners */}
  //               <div
  //                 className="rounded-lg py-5 px-6"
  //                 style={{
  //                   backgroundColor: "#F7DADA",
  //                 }}
  //               >
  //                 <p
  //                   className="font-medium"
  //                   style={{
  //                     color: "#1f2937",
  //                     fontSize: "1.15rem",
  //                     lineHeight: 1.5,
  //                   }}
  //                 >
  //                   If Your Business Depends Too Much On You, This Program Will
  //                   Transform How You Lead.
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Desktop: preserve original two-column layout */}
  //         <div className="hidden lg:grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
  //           {/* Left - text content */}
  //           <div>
  //             <p
  //               className="font-bold mb-6"
  //               style={{
  //                 color: "#FB0000",
  //                 fontSize: "1.50rem",
  //               }}
  //             >
  //               EntrepreneurExcellence<sup>©</sup> Is Ideal For:
  //             </p>

  //             <ul className="space-y-3 mb-8">
  //               {BULLET_ITEMS.map((item) => (
  //                 <li key={item} className="flex gap-3 items-center">
  //                   <span
  //                     className="flex-shrink-0"
  //                     style={{ color: "#FB0000", fontSize: "1.155rem" }}
  //                   >
  //                     ✔
  //                   </span>
  //                   <span
  //                     style={{
  //                       color: "#000000",
  //                       fontSize: "1.155rem",
  //                       fontWeight: 400,
  //                     }}
  //                   >
  //                     {item}
  //                   </span>
  //                 </li>
  //               ))}
  //             </ul>

  //             {/* Highlight box - light reddish-pink bg, rounded corners */}
  //             <div
  //               className="rounded-lg py-5 px-6"
  //               style={{
  //                 backgroundColor: "#F7DADA",
  //               }}
  //             >
  //               <p
  //                 className="font-medium"
  //                 style={{
  //                   color: "#1f2937",
  //                   fontSize: "1.15rem",
  //                   lineHeight: 1.5,
  //                 }}
  //               >
  //                 If Your Business Depends Too Much On You, This Program Will
  //                 Transform How You Lead.
  //               </p>
  //             </div>
  //           </div>

  //           {/* Right - image */}
  //           <div className="relative w-full aspect-[3/4] max-h-[420px] rounded-xl overflow-hidden">
  //             <Image
  //               src="/ee_new/section7/img1.png"
  //               alt="Entrepreneur at work"
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

  // Above is old content code which is commented for now and Below is updated content code
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PILLARS = [
  {
    title: "Strategic Clarity",
    text: "You Stop Guessing And Start Using A Repeatable System To Drive Your Business Forward By Identifying The Gaps Through Your Psychometric Assessment.",
  },
  {
    title: "Leadership Alignment",
    text: "You Understand Your Top 4 Behavioral Blind Spots, Allowing You To Build Stronger Teams And Manage Uncertainty With Ease By Mastering Your Gaps From The Report.",
  },
  {
    title: "Operational Discipline",
    text: "You Master The Top 4 Driving Forces And 7 Critical Competencies That Align With Top Performers Through Given Personal Development Plan And Allow You To Translate Strategy Into Measurable Financial Impact And Business Growth.",
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
            At Entrepreneur Excellence
            <sup className="text-[0.65em] opacity-100">©</sup> (EE
            <sup className="align-super text-[0.55em] opacity-100">©</sup>),
            success isn't just about surviving, it is about joining the top 4%
            of Ent and founders who build businesses that are profitable,
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
            When you complete the EE
            <sup className="align-super text-[0.55em] opacity-100">©</sup>{" "}
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
                  <h4 className="font-semibold text-[18px] text-black mb-1">
                    {itemData.title}
                  </h4>

                  <p className="text-gray-700 text-[15px] leading-relaxed">
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
              The Three Pillars Of An "Elite" Entrepreneur After Excellence Masterclass
            </h3>

            <p className="text-gray-700 mb-8 text-[17px] leading-relaxed md:px-12 lg:px-0">
              When you complete the EE
              <sup className="align-super text-[0.55em] opacity-100">©</sup>{" "}
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
                    <h4 className="font-semibold text-[18px] text-black mb-1">
                      {itemData.title}
                    </h4>

                    <p className="text-gray-700 text-[15px] leading-relaxed">
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