// "use client";

// import React from "react";
// import LoadingButton from "@/components/ui/LoadingButton";

// function withCopyrightSup(text) {
//   if (typeof text !== "string") return text;

//   return text
//     .split(
//       /(Entrepreneur Growth Alliance(?:[™©])?|Entrepreneur Growth Operating System(?:[™©])?|Entrepreneur Excellence(?:[™©])?|\b(?:EGOS|EGA|EE)\b(?:[™©])?|[A-Za-z]+(?:[™©]))/g
//     )
//     .map((part, idx) => {
//       if (!part) return null;

//       const phraseMatch = part.match(
//         /^(Entrepreneur Growth Alliance|Entrepreneur Growth Operating System|Entrepreneur Excellence)(?:[™©])?$/
//       );
//       if (phraseMatch) {
//         return (
//           <React.Fragment key={`${phraseMatch[1]}-${idx}`}>
//             {phraseMatch[1]}
//             <sup className="text-[0.7em] leading-none">©</sup>
//           </React.Fragment>
//         );
//       }

//       const egaMatch = part.match(/^(EGOS|EGA|EE)(?:[™©])?$/);
//       if (egaMatch) {
//         return (
//           <React.Fragment key={`${egaMatch[1]}-${idx}`}>
//             {egaMatch[1]}
//             <sup className="text-[0.7em] leading-none">©</sup>
//           </React.Fragment>
//         );
//       }

//       const genericCopyrightMatch = part.match(/^([A-Za-z]+)[™©]$/);
//       if (genericCopyrightMatch) {
//         return (
//           <React.Fragment key={`${genericCopyrightMatch[1]}-${idx}`}>
//             {genericCopyrightMatch[1]}
//             <sup className="text-[0.7em] leading-none">©</sup>
//           </React.Fragment>
//         );
//       }

//       return <React.Fragment key={`text-${idx}`}>{part}</React.Fragment>;
//     });
// }

// function renderPointText(text) {
//   if (typeof text !== "string") return withCopyrightSup(text);

//   const colonIndex = text.indexOf(":");
//   if (colonIndex === -1) return withCopyrightSup(text);

//   const headingPart = text.slice(0, colonIndex + 1);
//   const remainingPart = text.slice(colonIndex + 1);

//   return (
//     <>
//       <strong>{withCopyrightSup(headingPart)}</strong>
//       {withCopyrightSup(remainingPart)}
//     </>
//   );
// }

// const PROGRAMS = [
//   {
//     title: "EGA© — Entrepreneur Growth Alliance",
//     subtitle: "Cohort Based · 50+ Hours · 12 Month Journey",
//     description:
//       "The EGA is a cohort based mentorship program built for entrepreneur-led businesses ready to move from complexity and inconsistency to clarity and scalable growth. You are not coached in theory; you build, implement, and measure results alongside a curated group of peers who are equally serious about doing the work.",
//       whyTitle: "Why entrepreneurs choose EGA:",
//   icons: [
//     "/home/our-icon-1.png",
//     "/home/our-icon-2.png",
//     "/home/our-icon-3.png",
//     "/home/our-icon-4.png",
//   ],
//     points: [
//       "Rapid, accountable change: a 90-day pilot with clear outcomes so you see real progress before committing long-term.",
//       "Plug-and-play tools:  practical templates and scorecards that install the weekly routines your leadership team will actually follow.",
//       "Peer accountability + mentor coaching: cohort peers push you to implement while mentors remove roadblocks in real time.",
//       "Built to produce business outcomes: increased revenue, improved margins, and stronger leadership capability as measurable results, not side effects.",
//     ],
//     primaryBtn: "Book an EGA Workshop",
//     secondaryBtn: "Learn More About EGA",
//     primaryLink: "/ega/registration-form",
// secondaryLink: "/ega",
//   },
//   {
//     title: "EGOS© — Entrepreneur Growth Operating System",
//     subtitle: "Company Specific · Custom Built · Your Leadership Team Only",
//     description:(
//         <>
//         EGOS<sup>©</sup> is built exclusively for one company at a time. Unlike cohort programs, this is a fully customized operating system and execution playbook installed directly inside your business, aligning your strategy, your people, and your daily operations so your company runs with clarity, discipline, and predictability at every level. <br />
//         Using Stages-of-Growth diagnostics, non-negotiable leadership accountability rules, project charters, and daily/weekly scorecards, EGOS<sup>©</sup> transforms how your entire organization executes, permanently.
//         </>
//     ),
      
//       whyTitle: "Why entrepreneurs choose EGOS:",
//   icons: [
//     "/home/our-icon-5.png",
//     "/home/our-icon-6.png",
//     "/home/our-icon-7.png",
//     "/home/our-icon-8.png",
//   ],
//     points: [
//       "Repeatable execution: a single prioritized plan and daily/weekly scorecards.",
//       "Transform ad: hoc work into predictable outcomes.",
//       "Leadership clarity: defined roles, non-negotiable accountability rules, and structured reviews eliminate ambiguity at every level.",
//       "Stronger financial controls: routines that generate, track, and protect cash so margins and cash flow improve alongside growth.",
//     ],
//     // primaryBtn: "Book an EGOS Workshop",
//     // secondaryBtn: "Learn More About EGOS©",
//     // primaryLink: "/ega",
//     // secondaryLink: "/ega",
//   },
//   {
//     title: "EE© — Entrepreneur Excellence",
//     subtitle: "Personal Leadership Development · Research Driven · Psychometric Assessment",
//     description:
//       "Entrepreneur Excellence is a research driven psychometric workshop designed to identify the behaviors, motivators, and leadership competencies that may be quietly limiting your growth. Using a validated psychometric assessment, EE compares your results with benchmark patterns of highly successful entrepreneurs, pinpointing the exact gaps holding your business back.You receive a precise gap report and a customized personal development plan: a clear, actionable roadmap to strengthen yourself as a leader and scale your business with confidence.",
//       whyTitle: "Why entrepreneurs choose EE:",
//   icons: [
//     "/home/our-icon-9.png",
//     "/home/our-icon-10.png",
//     "/home/our-icon-11.png",
//     "/home/our-icon-12.png",
//     "/home/our-icon-13.png",
//   ],
//     points: [
//       "Make smarter decisions: stop costly gut driven mistakes; gain the self-awareness to know when to move fast, when to pause, and what the decision actually costs.",
//       "Build a high-performing team: hire the right people, lead them effectively, and remove the friction that causes underperformance.",
//       "Stop being the bottleneck: identify the blind spots limiting your leadership, your relationships, and your business growth.",
//       "Focus on what drives results: get clear on your highest value priorities so you spend less time on noise and more time on the work that compounds.",
//       "Scale with confidence: replace overwhelm with a structured, tailored roadmap built specifically for your stage and personality.",
//     ],
//     primaryBtn: "Book an EE Workshop",
//     secondaryBtn: "Learn More About EE",
//     primaryLink: "/ega/registration-form",
// secondaryLink: "/ee",
//   },
// ];

// export default function OurProgram() {
//   return (
//     <section className="w-full bg-[#ff2f2] py-16">
//       <div className="max-w-[1100px] mx-auto px-6">

//         {/* Top Label */}
//         <div className="flex justify-center mb-4">
//           <span className="bg-red-600 text-white text-[12px] px-4 py-1 rounded-full font-semibold">
//             OUR PROGRAMS
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="text-center font-bold text-[32px] md:text-[40px] leading-tight mb-4">
//           <span className="text-red-600">Three Programs. One Mission:</span>{" "}
//           <span className="whitespace-nowrap">
//             Growth That Is Predictable, Not Just Possible.
//           </span>
//         </h2>

//         {/* Subtext */}
//         <p className="text-center text-gray-700 max-w-[1000px] mx-auto text-[15px] md:text-[19px] mb-12">
//           Each program is practical, execution focused, and results driven.
//           Together, they address every dimension of the growth challenge from
//           personal leadership to company wide operating systems to cohort based
//           accountability.
//         </p>

//         {/* Cards */}
//         <div className="space-y-15">
//           {PROGRAMS.map((item, i) => (
//             <div
//               key={i}
//               className="relative bg-[#FFF6F6] rounded-[16px] p-8 pl-10 border border-red-100"
//             >
//               {/* Left red strip */}
//               <div className="absolute left-0 top-0 h-full w-[25px] bg-red-500 rounded-l-[16px]" />

//               {/* Title */}
//               <h3 className="text-[32px] font-bold text-[#FF0000] mb-1">
//                 {withCopyrightSup(item.title)}
//               </h3>

//               {/* Subtitle */}
//               <p className="text-[25px] text-black font-medium mb-4">
//                 {item.subtitle}
//               </p>

//               {/* Description */}
//               <p className="text-[18px] text-[#343434 ] leading-[1.6] mb-6 max-w-[900px]">
//                 {withCopyrightSup(item.description)}
//               </p>

//            {/* WHY HEADING */}
//                 <p className="font-semibold text-black text-[22px] mb-5">
//                   {withCopyrightSup(item.whyTitle)}
//                 </p>

//                 {/* POINTS */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   {item.points.map((p, idx) => (
//                     <div key={idx} className="flex items-start gap-4">
                    
//                       {/* ICON */}
//                       <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
//                         <img
//                           src={item.icons[idx]}
//                           alt="icon"
//                           className="w-6 h-6 object-contain"
//                         />
//                       </div>
                
//                       {/* TEXT */}
//                       <p className="text-[17px] text-gray-700 leading-[1.5]">
//                         {renderPointText(p)}
//                       </p>
                
//                     </div>
//                   ))}
//                 </div>

//                 {item.primaryBtn && item.secondaryBtn && item.primaryLink && item.secondaryLink ? (
//                 <div className="flex gap-4 flex-wrap">
//   <LoadingButton
//     href={item.primaryLink}
//     spinnerColor="text-white"
//     disabled={item.title.includes("EGOS")}
//     className="bg-red-600 text-white px-5 py-3 rounded-[8px] text-[15px] font-semibold hover:opacity-90 transition cursor-pointer disabled:cursor-pointer"
//   >
//     {withCopyrightSup(item.primaryBtn)}
//   </LoadingButton>

//   <LoadingButton
//     href={item.secondaryLink}
//     spinnerColor="text-red-600"
//     disabled={item.title.includes("EGOS")}
//     className="border border-red-500 text-red-600 px-5 py-3 rounded-[8px] text-[15px] font-semibold hover:bg-red-50 transition cursor-pointer disabled:cursor-pointer"
//   >
//     {withCopyrightSup(item.secondaryBtn)}
//   </LoadingButton>
// </div>
//                 ) : null}
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

  "use client";

  import React from "react";
  import LoadingButton from "@/components/ui/LoadingButton";

  function withCopyrightSup(text) {
    if (typeof text !== "string") return text;

    return text
      .split(
        /(Entrepreneur Growth Alliance(?:[™©])?|Entrepreneur Growth Operating System(?:[™©])?|Entrepreneur Excellence(?:[™©])?|\b(?:EGOS|EGA|EE)\b(?:[™©])?|[A-Za-z]+(?:[™©]))/g
      )
      .map((part, idx) => {
        if (!part) return null;

        const phraseMatch = part.match(
          /^(Entrepreneur Growth Alliance|Entrepreneur Growth Operating System|Entrepreneur Excellence)(?:[™©])?$/
        );
        if (phraseMatch) {
          return (
            <React.Fragment key={`${phraseMatch[1]}-${idx}`}>
              {phraseMatch[1]}
              <sup className="text-[0.7em] leading-none">©</sup>
            </React.Fragment>
          );
        }

        const egaMatch = part.match(/^(EGOS|EGA|EE)(?:[™©])?$/);
        if (egaMatch) {
          return (
            <React.Fragment key={`${egaMatch[1]}-${idx}`}>
              {egaMatch[1]}
              <sup className="text-[0.7em] leading-none">©</sup>
            </React.Fragment>
          );
        }

        const genericCopyrightMatch = part.match(/^([A-Za-z]+)[™©]$/);
        if (genericCopyrightMatch) {
          return (
            <React.Fragment key={`${genericCopyrightMatch[1]}-${idx}`}>
              {genericCopyrightMatch[1]}
              <sup className="text-[0.7em] leading-none">©</sup>
            </React.Fragment>
          );
        }

        return <React.Fragment key={`text-${idx}`}>{part}</React.Fragment>;
      });
  }

  function getAcronym(title) {
    if (title.includes("EGOS")) return "EGOS";
    if (title.includes("EGA")) return "EGA";
    if (title.includes("EE")) return "EE";
    return "";
  }

  const PROGRAMS = [
    {
      title: "EGA — Entrepreneur Growth Alliance",
      subtitle: "Entrepreneur Growth Alliance",
      tags: ["Cohort based", "50+ Hours", "12 Month Journey"],
      description:
          " The EGA is a cohort based mentorship program built for entrepreneur led businesses ready to move from complexity and inconsistency to clarity and scalable growth. You are not coached in theory; you build, implement, and measure results alongside a curated group of peers who are equally serious about doing the work.",
      whyTitle: "Why Choose EGA",
      cardIcon: "/home/icon-1.png",
      points: [
        "Rapid, accountable change: a 90-day pilot with clear outcomes so you see real progress before committing long-term.",
        "Plug-and-play tools: practical templates and scorecards that install the weekly routines your leadership team will actually follow.",
        "Peer accountability + mentor coaching: cohort peers push you to implement while mentors remove roadblocks in real time.",
        "Built to produce business outcomes: increased revenue, improved margins, and stronger leadership capability as measurable results, not side effects.",
      ],
      primaryBtn: "Book an EGA Workshop",
      secondaryBtn: "Learn More",
      primaryLink: "/ega/registration-form",
      secondaryLink: "/ega",
    },
    {
      title: "EGOS© — Entrepreneur Growth Operating System",
      subtitle: "Entrepreneur Growth Operating System©",
      tags: ["Company Specific", "Custom Built"],
      description:"EGOS© is built exclusively for one company at a time. Unlike cohort programs, this is a fully customized operating system and execution playbook installed directly inside your business, aligning your strategy, your people, and your daily operations so your company runs with clarity, discipline, and predictability at every level. Using Stages of Growth diagnostics, non negotiable leadership accountability rules, project charters, and daily/weekly scorecards, EGOS© transforms how your entire organization executes, permanently. ",  
      whyTitle: "Why Choose EGOS©",
      cardIcon: "/home/icon-2.png",
      points: [
        "Repeatable execution: a single prioritized plan and daily/weekly scorecards.",
        "Leadership clarity: defined roles, non-negotiable accountability rules, and structured reviews eliminate ambiguity at every level.",
        "Stronger financial controls: routines that generate, track, and protect cash so margins and cash flow improve alongside growth.",
        "Transform ad: hoc work into predictable outcomes.",
      ],
      // primaryBtn: "Book an EGOS Workshop",
      // secondaryBtn: "Learn More ",
      //  primaryLink: "/ega",
      //  secondaryLink: "/ega",
    },
    {
      title: "EE© — Entrepreneur Excellence",
      subtitle: "Entrepreneur Excellence©",
      tags: [ "Research Driven", "Psychometric Assessment"],
      description:
        "Entrepreneur Excellence is a research driven psychometric workshop designed to identify the behaviors, motivators, and leadership competencies that may be quietly limiting your growth. Using a validated psychometric assessment, EE© compares your results with benchmark patterns of highly successful entrepreneurs, pinpointing the exact gaps holding your business back. You receive a precise gap report and a customized personal development plan: a clear, actionable roadmap to strengthen yourself as a leader and scale your business with confidence.",
      whyTitle: "Why Choose EE©",
      cardIcon: "/home/icon-3.png",
      points: [
        "Make smarter decisions: stop costly gut driven mistakes; gain the self-awareness to know when to move fast, when to pause, and what the decision actually costs.",
        "Build a high-performing team: hire the right people, lead them effectively, and remove the friction that causes underperformance.",
        "Stop being the bottleneck: identify the blind spots limiting your leadership, your relationships, and your business growth.",
        "Focus on what drives results: get clear on your highest value priorities so you spend less time on noise and more time on the work that compounds.",
        "Scale with confidence: replace overwhelm with a structured, tailored roadmap built specifically for your stage and personality.",
      ],
      primaryBtn: "Book an EE Workshop",
      secondaryBtn: "Learn More",
      primaryLink: "/ega/registration-form",
      secondaryLink: "/ee",
    },
  ];

  export default function OurProgram() {
    return (
      <section className="w-full">

        {/* RED HEADER PART ONLY */}
        <div className="w-full bg-red-600 py-4  pb-8">
          <div className="max-w-[1100px] mx-auto px-6">

            {/* Top Label */}
            <div className="flex justify-center mb-4">
              <span className="bg-white text-[16px] px-4 py-1 rounded-full font-extrabold">
                OUR PROGRAMS
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-center font-bold text-[32px] md:text-[40px] leading-tight mb-4 text-white">
              Three Programs. One Mission:{" "}
              <br />
              Growth That Is Predictable, Not Just Possible.
            </h2>

            {/* Subtext */}
            <p className="text-center text-white/90 max-w-[1000px] mx-auto text-[15px] md:text-[19px]">
              Each program is practical, execution focused, and results driven.
              Together, they address every dimension of the growth challenge from
              personal leadership to company wide operating systems to cohort based
              accountability.
            </p>

          </div>
        </div>

        {/* WHITE CARDS PART */}
        <div className="w-full  py-16">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="space-y-8">
              {PROGRAMS.map((item, i) => {
                const acronym = getAcronym(item.title);
                return (
                  <div
                    key={i}
                    className=" rounded-[20px] p-8 shadow-sm border border-gray-100"
                  >
                    <div className="grid md:grid-cols-2 gap-8">

                      {/* LEFT SIDE */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-red-600 rounded-[14px] flex items-center justify-center flex-shrink-0">
                           <img src={item.cardIcon} alt="icon" className="w-8 h-8 object-contain" />
                          </div>
                          <div>
                            <h3 className="text-[25px] font-extrabold text-black leading-tight">
                              {acronym}<sup className="text-[0.6em]">©</sup>
                            </h3>
                            <p className="text-[18px]  font-semibold">
                              {withCopyrightSup(item.subtitle)}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-5">
                          {item.tags.map((tag, idx) => (
                            <span key={idx} className="bg-red-50 text-red-500 text-[16px]  px-3 py-2 rounded-full border border-red-100">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="text-[15px] text-gray-600 leading-[1.7] mb-6">
                          {withCopyrightSup(item.description)}
                        </p>

                        {item.primaryBtn && item.secondaryBtn && (
                          <div className="flex gap-5 flex-wrap mt-6">
                            <LoadingButton
                              href={item.primaryLink}
                              spinnerColor="text-white"
                              className="bg-red-600 text-white px-5 py-3 rounded-[8px] text-[14px] font-semibold hover:opacity-90 transition"
                            >
                              {withCopyrightSup(item.primaryBtn)}
                            </LoadingButton>
                            <LoadingButton
                              href={item.secondaryLink}
                              spinnerColor="text-gray-700"
                              className="border border-gray-300 text-gray-700 px-5 py-3 rounded-[8px] text-[14px] font-semibold hover:bg-gray-50 transition"
                            >
                              {item.secondaryBtn}
                            </LoadingButton>
                          </div>
                        )}
                      </div>

                      {/* RIGHT SIDE — Why Choose */}
                      <div className="bg-red-50 rounded-[16px] p-6">
                        <h4 className="text-red-600 font-semibold text-[20px] mb-5">
                          {withCopyrightSup(item.whyTitle)}
                        </h4>
                        <div className="space-y-5">
                          {item.points.map((p, idx) => {
                            const colonIndex = p.indexOf(":");
                            const heading = colonIndex !== -1 ? p.slice(0, colonIndex) : p;
                            const body = colonIndex !== -1 ? p.slice(colonIndex + 1).trim() : "";
                            return (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-white text-[13px] font-bold">{idx + 1}</span>
                                </div>
                                <div>
                                  <p className="text-[16px] font-semibold text-gray-900">
                                    {withCopyrightSup(heading)}
                                  </p>
                                  {body && (
                                    <p className="text-[14px] text-gray-700 mt-0.5 leading-[1.5]">
                                      {withCopyrightSup(body)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </section>
    );
  }