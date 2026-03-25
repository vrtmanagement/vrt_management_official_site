"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const assessmentsData = [
  {
    image: "/assessment_tool/img1.png",
    title: "Leadership and Personal Assessments",
    items: [
      "TriMetrix HD (Behaviors, Driving Forces, Competencies, Acumen).",
      "Emotional Intelligence Assessment.",
      "Target Selling Insights.",
      "Team Dynamics Report."
    ]
  },
  {
    image: "/assessment_tool/img2.png",
    title: "Business and Growth Diagnostics",
    items: [
     
      "Stage-Specific Non-Negotiables (Stages 1-7).",
      "Builder vs Protector Ratio.",
       "27 Business Growth Challenges Assessment.",
    ]
  },
  {
    image: "/assessment_tool/img3.png",
    title: "Custom Deliverables",
    items: [
      "Personalized 3D Job Description (3D-JD).",
      "Personal Development Plan (PDP).",
      "Project Charters for your Top 5 Priorities.",
      "Yearly Strategy Execution Calendar.",
      "KPIs, owners, timelines, and communication plans.",
      "GRPI (Goals, Roles, Process, Interpersonal Relations)."
    ]
  }
];

export function AssessmentsSection() {
  return (
    <section className="relative bg-gray-800 py-12 md:py-16 lg:py-20 border border-gray-100 rounded-2xl shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-5 md:mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            Assessments, Tools and Resources Included
        </h2>
          <p className="text-sm md:text-base text-gray-300">
            Participants receive a comprehensive growth toolkit, including:
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {assessmentsData.map((assessment, index) => (
            <div
              key={index}
            className="bg-white rounded-lg border-2 border-red-600 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-red-500 group"
            >
              {/* Image */}
              <div className="relative w-full h-36 md:h-40 overflow-hidden">
                <Image
                  src={assessment.image}
                  alt={assessment.title}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-red-600 mb-3 group-hover:text-red-700 transition-colors">
                  {assessment.title}
                </h3>

                {/* Bullet Points */}
                <ul className="space-y-2">
                  {assessment.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                    <ArrowRight className="text-red-600 flex-shrink-0 mt-0.5 w-4 h-4 stroke-[2.5]" />
                    <span className="text-xs md:text-sm text-gray-700 flex-1">
                      {item}
                    </span>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
