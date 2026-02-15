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
                  Entrepreneurs don’t fail because they lack knowledge; they fail
                  because they keep repeating the same patterns. It’s a wake-up
                  call for leaders who are stuck in routine, avoiding the critical
                  changes their business needs to survive and grow.
                </p>

                <p>
                  <strong>Change or Die<sup>©</sup></strong> helps you understand why change
                  feels so uncomfortable and why your brain resists it, even when
                  you know it’s the right move. It shows how your habits,
                  behaviors, and outdated systems could be quietly dragging your
                  business down.
                </p>

                <p>
                  You’ll learn how to move past resistance, take ownership, and
                  apply change in real, practical ways — before you’re forced to.
                </p>
              </div>

              {/* What You'll Get */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  What You’ll Get:
                </h3>

                <ul className="list-disc ml-6 space-y-3">
                  <li>
                    A clear understanding of why change is hard and how to make
                    it constant.
                  </li>
                  <li>
                    A personalized view of where you are on the Change Curve
                    (from denial to ownership).
                  </li>
                  <li>
                    A practical toolkit to help you shift from awareness to real
                    behavior change.
                  </li>
                  <li>
                    The ability to apply FAST goal setting across your teams for
                    better alignment and accountability.
                  </li>
                  <li>
                    A powerful mindset to lead in uncertainty, make decisions
                    quicker, and outpace competitors.
                  </li>
                </ul>
              </div>

              {/* Actionable Impact */}
              <div className="space-y-4">
                <p>
                  You won’t just learn theory — you’ll get actionable strategies
                  you can apply immediately in your leadership, operations, team
                  structure, and decision-making.
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
                    slow down — it’ll get left behind.
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
