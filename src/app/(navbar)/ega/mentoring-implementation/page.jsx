"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MentoringImplementationPage() {
  const router = useRouter();
  const assessments = [
    {
      category: "Leadership & Personal Assessments",
      items: [
        "TriMetrix HD (Behaviors, Driving Forces, Competencies, Acumen)",
        "Emotional Intelligence Assessment",
        "TARGET Selling Insights",
        "Team Dynamics Report",
      ],
    },
    {
      category: "Business & Growth Diagnostics",
      items: [
        
        "Stage-Specific Non-Negotiables (Stages 1-7)",
        "Builder vs Protector Ratio",
        "27 Business Growth Challenges Assessment",
      ],
    },
    {
      category: "Custom Deliverables",
      items: [
        "Personalized 3D Job Description (3D-JD)",
        "Personal Development Plan (PDP)",
        "Project Charters (6–12 month initiatives)",
        "Strategy Execution Calendar",
        "KPIs, owners, timelines, and communication plans",
      ],
    },
  ];

  const commitments = [
    "Daily & Weekly Reflection",
    "Quarterly priorities review",
    "Project charter updates",
    "Team alignment discussions",
    "Article summaries (HBR, leadership, strategy)",
    "Preparation of questions for mentoring sessions",
  ];

  const outcomes = [
    "Faster, clearer decision-making",
    "Consistent execution across teams",
    "Reduced owner dependence",
    "Stronger leadership bench",
    "Higher predictability and resilience",
    "$1M+ in measurable valuation impact",
  ];

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            In-Person: Mentoring & Implementation
          </h1>
          <p className="text-xl text-red-100">10 Months of Growth Alliance</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div>
            <p className="text-lg mb-6 text-gray-700">
              This is where EGA™ becomes a true growth alliance. For the next <strong>10 months</strong>, participants will engage in:
            </p>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6 text-lg">
              <li><strong>Monthly 3-Hour Live Mentoring Sessions</strong></li>
              <li>Conducted on Zoom</li>
              <li>Combined Online + In-Person cohort members</li>
              <li>Real implementation reviews</li>
              <li>Peer learning and strategic problem-solving</li>
              <li>Accountability and course correction</li>
            </ul>
          </div>
          <div>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-2xl">
              <p className="text-lg font-semibold text-red-900">
                This phase ensures learning turns into <strong>execution</strong>, and execution turns into <strong>measurable results</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessments & Tools */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Assessments, Tools & Resources Included</h2>
          </div>
          <div>
            <p className="text-lg mb-8 text-center text-gray-700">
              Participants receive a comprehensive growth toolkit, including:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {assessments.map((category, idx) => (
              <div key={idx}>
                <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:-translate-y-1 group">
                  <h3 className="text-xl font-bold mb-4 text-red-800">{category.category}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Weekly & Monthly Participant Commitments</h2>
          </div>
          <div>
            <p className="text-lg mb-6 text-center text-gray-700 font-semibold">
              Participants are expected to <strong className="text-red-600">implement</strong>, not just attend.
            </p>
          </div>
          <div>
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-red-800">Ongoing Expectations:</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                {commitments.map((commitment, idx) => (
                  <li key={idx}>{commitment}</li>
                ))}
              </ul>
              <p className="mt-6 text-red-900 font-semibold italic text-lg">
                This is how results compound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-4 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">The Result: Real Business Value</h2>
          </div>
          <div>
            <p className="text-lg mb-8 text-center text-gray-700 max-w-3xl mx-auto">
              When leaders learn and implement <strong>correctly</strong>, EGA™ is designed to help businesses achieve:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="bg-white border-2 border-red-200 rounded-2xl p-8 shadow-lg h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-red-800">Key Outcomes</h3>
                <ul className="space-y-3 text-gray-700 text-lg">
                  {outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-white border-2 border-red-200 rounded-2xl p-8 shadow-lg h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-red-800">Value is created through:</h3>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🔧</span>
                    <span><strong>Systems</strong></span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">👥</span>
                    <span><strong>Leadership depth</strong></span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">⚡</span>
                    <span><strong>Execution discipline</strong></span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🎯</span>
                    <span><strong>Strategic clarity</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg mb-6 text-red-100">
                Join EGA™ and start your 12-month growth journey today.
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

