"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function GrowthSystemInstallationPage() {
  const router = useRouter();
  const modules = [
    {
      number: 1,
      title: "Change or Die • Learn | Unlearn | Relearn",
      purpose: "Build adaptability as a leadership capability",
      description: "Leaders learn how to recognize outdated assumptions and intentionally evolve in a VUCA + AI environment.",
    },
    {
      number: 2,
      title: "Stages of Growth (SOG)",
      purpose: "Apply the right solutions at the right time",
      description: "Participants diagnose their true growth stage and focus only on what matters now, not distractions.",
    },
    {
      number: 3,
      title: "Vision, Purpose, Values, Accountabilities & Norms",
      purpose: "Align people before scaling execution",
      description: "Creates clarity on why the company exists, how decisions are made, and who owns what.",
    },
    {
      number: 4,
      title: "Trust as an Execution Multiplier",
      purpose: "Increase speed without chaos",
      description: "Shows how trust directly impacts decision velocity, accountability, and execution consistency.",
    },
    {
      number: 5,
      title: "Dynamic Communication & TriMetrix HD",
      purpose: "Improve leadership effectiveness and team dynamics",
      description: "Includes TriMetrix HD Personal Report covering DISC (Behaviors), Driving Forces (Motivators), Competencies (Soft Skills), and Leadership Team Report Debrief.",
    },
    {
      number: 6,
      title: "One-Year & Three-Year Strategic Planning",
      purpose: "Create strategy you can actually execute",
      description: "Participants build One-Page Strategic Plan, Year 1 and Year 3 outcomes, and strategic priorities tied to execution.",
    },
    {
      number: 7,
      title: "SWOT with Strategic Anchors",
      purpose: "Make better decisions faster",
      description: "Moves beyond generic SWOT to create decision filters that prevent distraction.",
    },
    {
      number: 8,
      title: "GRPI (Goals, Roles, Process, Interpersonal Relations)",
      purpose: "Fix execution breakdowns",
      description: "Used to diagnose and resolve team execution issues quickly and practically.",
    },
    {
      number: 9,
      title: "Execution Cadence & Strategy Execution Calendar",
      purpose: "Turn plans into results",
      description: "Installs weekly, monthly, and quarterly rhythms that keep strategy alive.",
    },
    {
      number: 10,
      title: "Reflection, Emotional Intelligence & Leadership Discipline",
      purpose: "Improve decision quality over time",
      description: "Includes Emotional Intelligence Assessment & Debrief, Power of Reflection, and Five Levels of Leadership.",
    },
  ];

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Online Cohort: Growth System Installation
          </h1>
          <p className="text-xl text-red-100">Core Learning & Alignment</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div>
            <p className="text-lg mb-6 text-center text-gray-700">
              This phase installs the <strong className="text-red-600">foundational leadership and execution systems</strong> every scaling business needs.
            </p>
          </div>
          <div>
            <div className="bg-white border-2 border-red-200 rounded-2xl p-8 mb-8 shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-red-800">Core Focus Areas (Top 10 Models)</h2>
              <p className="text-gray-700 mb-2 text-center">These are not academic frameworks.</p>
              <p className="text-gray-700 font-semibold text-center text-lg">
                They are <strong className="text-red-600">practical operating tools</strong> applied directly to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div key={module.number}>
                <div className="bg-white border-2 border-red-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 shadow-md hover:-translate-y-1 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                      {module.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">
                        {module.title}
                      </h3>
                      <p className="text-lg font-semibold text-red-600 mb-3">
                        Purpose: {module.purpose}
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 px-4 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
              <p className="text-lg text-red-100 mb-6">
                After completing the Online Cohort, you'll move into In-Person: Mentoring & Implementation
              </p>
            </div>
          </div>
          
          <div>
            <div className="flex justify-center items-center">
              <Link
                href="/ega/registration-form"
                className="ripple inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                Contact Us to Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

