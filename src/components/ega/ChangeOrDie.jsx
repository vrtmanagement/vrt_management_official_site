// "use client";

// const CoreModulesPage = () => {
//   const modules = [
//     {
//       id: 1,
//       title: "Change or Die",
//       detailed: true,
//     },
// ]

//   return (
//     <div className="min-h-screen bg-gray-50  ">
//       {/* <h1 className="text-4xl font-bold text-center mb-20 text-gray-900">
//         Growth as a Process – 10 Core Models
//       </h1> */}

//       {modules.map((module) => (
//         <div
//           key={module.id}
//           className="bg-white rounded-2xl shadow-md p-10 mb-12 border border-gray-100"
//         >
//           <h2 className="text-2xl font-bold text-red-600 mb-6">
//             {module.id}. {module.title}
//           </h2>

//           {/* Only Change or Die shows full detailed content */}
//           {module.detailed && (
//             <div className="space-y-14 text-gray-700 leading-relaxed">

//               {/* Section 1 */}
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">
//                   Key Learning Objectives
//                 </h3>
//                 <ol className="list-decimal ml-6 space-y-3">
//                   <li>Understand why adaptation is no longer optional.</li>
//                   <li>Shift from fixed thinking to growth-oriented leadership.</li>
//                   <li>Apply the Learn → Unlearn → Relearn framework.</li>
//                   <li>Adopt modern goal setting (FAST vs SMART).</li>
//                   <li>Navigate resistance to change.</li>
//                   <li>Translate mindset change into leadership action.</li>
//                 </ol>
//               </div>

//               {/* Section 2 */}
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">
//                   Why These Concepts Are Critical
//                 </h3>
//                 <ol className="list-decimal ml-6 space-y-3">
//                   <li>What got you here will not get you there.</li>
//                   <li>Markets change faster than internal systems.</li>
//                   <li>VUCA punishes slow decision-making.</li>
//                   <li>Growth demands unlearning—not just learning.</li>
//                   <li>Teams mirror the leader’s mindset.</li>
//                   <li>Scaling requires intentional transformation.</li>
//                 </ol>
//               </div>

//               {/* Section 3 */}
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">
//                   Key Benefits After Mastery
//                 </h3>
//                 <ol className="list-decimal ml-6 space-y-3">
//                   <li>Greater leadership agility and confidence.</li>
//                   <li>Faster organizational adaptation.</li>
//                   <li>Stronger execution in dynamic environments.</li>
//                   <li>Reduced resistance to change.</li>
//                   <li>Sustainable personal and business growth.</li>
//                   <li>Future-ready leadership capability.</li>
//                 </ol>
//               </div>

//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CoreModulesPage;
"use client";

const CoreModulesPage = () => {
  const modules = [
    {
      id: 1,
      title: "Change or Die",
      detailed: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      {modules.map((module) => (
        <div
          key={module.id}
          className="bg-white rounded-2xl shadow-md p-10 mb-12 border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-red-600 mb-8">
            {module.id}. {module.title}
          </h2>

          {module.detailed && (
            <div className="space-y-10 text-gray-700 leading-relaxed">

              {/* Introduction */}
              <div className="space-y-6">
                <p>
                  <span className="font-bold">Change or Die:</span> The Mindset Shift That Separates Leaders Who
                  Scale from Leaders Who Stall
                </p>

                <p>
                  In today&apos;s business environment, the greatest threat to your
                  company isn&apos;t your competition - it&apos;s your comfort zone. The
                  strategies, habits, and thinking that built your business to
                  where it is today are often the very things quietly capping its
                  potential. Change or Die is a session that pulls no punches. It
                  challenges entrepreneurs and SMB leaders to confront an
                  uncomfortable but liberating truth: what got you here will not
                  get you there.
                </p>

                <p>
                  This is not a motivational talk. It is a structured, high-impact
                  experience that guides you through the shift from a fixed to a
                  growth mindset and, more importantly, shows you exactly how that
                  shift translates into faster decisions, stronger leadership, and
                  measurable business results. You will learn how to make
                  continuous learning, unlearning, and relearning a built-in
                  competitive advantage rather than a reactive afterthought.
                </p>

                <p>
                  Leaders who thrive in uncertainty don&apos;t wait for the storm to
                  pass. They build the capability to navigate it. If you are
                  serious about scaling your business, elevating your leadership,
                  and building an organization that not only survives disruption
                  but also leads through it, this session will fundamentally
                  change how you think, decide, and act.
                </p>
              </div>

              {/* What You'll Get */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Five Key Takeaways Participants Can Immediately Implement
                </h3>

                <ol className="list-decimal ml-6 space-y-4">
                  <li>
                    <strong>Shift from Fixed to Growth Mindset</strong>
                    <br />
                    Participants will learn how to replace &quot;Why is this happening
                    to me?&quot; with &quot;What is this trying to teach me?&quot; - a powerful
                    reframe that transforms challenges into growth opportunities.
                  </li>
                  <li>
                    <strong>Apply the Learn | Unlearn | Relearn Cycle</strong>
                    <br />
                    Leaders will adopt a practical discipline of continuously
                    learning new skills, unlearning outdated assumptions, and
                    relearning better strategies to stay relevant in a VUCA world.
                  </li>
                  <li>
                    <strong>Move from SMART to FAST Execution Goals</strong>
                    <br />
                    Participants will understand how to use FAST goals (Frequently
                    discussed, Ambitious, Specific, Transparent) to improve
                    alignment, accountability, and speed of execution in dynamic
                    environments.
                  </li>
                  <li>
                    <strong>Identify Their Current Stage of Competence</strong>
                    <br />
                    Using the Conscious Competence Model, leaders will assess where
                    they stand, from unconscious incompetence to expertise, and
                    create a clear development path.
                  </li>
                  <li>
                    <strong>
                      Develop Foundational Entrepreneurial Skills for Uncertain
                      Times
                    </strong>
                    <br />
                    Participants will strengthen critical capabilities, including
                    adaptability, speed with timing, courageous decision-making,
                    and disciplined daily habits, that drive long-term success.
                  </li>
                </ol>
              </div>

              {/* Actionable Impact */}
              <div className="space-y-4">
                <p>
                  You won&apos;t just learn theory - you&apos;ll leave with practical
                  frameworks you can apply immediately in your leadership,
                  operations, team culture, and decision-making.
                </p>
              </div>

              {/* Why Important */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Why is this module so important?
                </h3>

                <div className="space-y-4">
                  <p>
                    Because what worked for your business even 6 months ago may
                    not work tomorrow.
                  </p>

                  <p>
                    And if you’re not actively changing, your business won’t just
                    slow down, it’ll get left behind.
                  </p>

                  <p>
                    This session helps you recognize that and gives you the tools
                    to stay ahead, adapt faster, and lead stronger.
                  </p>
                </div>
              </div>

            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CoreModulesPage;
