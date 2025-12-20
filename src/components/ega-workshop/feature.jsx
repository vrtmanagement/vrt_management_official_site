import React from "react";
import { ArrowUpRight } from "lucide-react";

const FeaturedProjects = () => {
  return (
    <section className="pt-12 pb-24">
      <h2 className="text-4xl md:text-5xl text-center mb-16 tracking-tight text-gray-900"
        style={{ fontFamily: "ebgaramond, serif" }}

      >
        Workshop Agenda
      </h2>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto relative">
        {/* Project 1 (Top Stack) */}
        <div className="group sticky top-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-sm transition-transform hover:-translate-y-2">
          <div className="flex justify-between items-start text-xs md:text-sm text-gray-600 mb-8 md:mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 font-medium shadow-sm">
              Day 1: April 24, 2025 · Thursday
            </span>
            <span className="hidden sm:inline-flex items-center rounded-full bg-blue-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-50 shadow-sm">
              10AM – 6PM EST
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-4 md:mb-6">
                Topics to be covered
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-6">
                A full-day intensive designed to deepen leadership capacity,
                strengthen trust, and give you practical tools you can apply
                immediately with your team.
              </p>

              <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left text-gray-800">
                {[
                  "Change or Die",
                  "The Speed of Trust",
                  "The 5 Levels of Leadership",
                  "The Power of Reflection",
                  "Dynamic Communication and Team Effectiveness",
                  "Stages of Growth (SOG)",
                ].map((label, index) => (
                  <li
                    key={label}
                    className="flex items-start gap-3 rounded-xl bg-white/80 px-3 py-2 text-xs md:text-sm leading-snug shadow-sm"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-[11px] font-semibold text-white shadow-sm">
                      {index + 1}
                    </div>
                    <span className="flex-1">{label}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col items-end justify-between gap-6">
              <div className="w-32 sm:w-36 rounded-3xl bg-white shadow-xl overflow-hidden border border-blue-100">
                <div className="bg-red-500 py-2 text-center text-sm font-semibold tracking-wide uppercase text-white">
                  April
                </div>
                <div className="bg-white py-5 text-center">
                  <div className="text-5xl font-bold tracking-tight text-gray-900">
                    24
                  </div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500">
                    2025
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-blue-900 shadow-md transition-transform hover:-translate-y-0.5 hover:bg-blue-50"
              >
                View full agenda
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="group sticky top-28 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 md:p-12 border border-purple-100 shadow-sm transition-transform hover:-translate-y-2">
          <div className="flex justify-between items-start text-xs md:text-sm text-gray-600 mb-8 md:mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 font-medium shadow-sm">
              Day 2: April 25, 2025 · Friday
            </span>
            <span className="hidden sm:inline-flex items-center rounded-full bg-purple-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-purple-50 shadow-sm">
              10AM – 6PM EST
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-4 md:mb-6">
                Topics to be covered
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-6">
                Building on Day 1, this day focuses on aligning culture, strategy,
                and execution so your growth plans turn into measurable results.
              </p>

              <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left text-gray-800">
                {[
                  "Review Stages of Growth (SOG) Assessments",
                  "Prioritize Initiatives for Action",
                  "Define Company Culture",
                  "Vision, Purpose, Accountabilities",
                  "Growth as a Process",
                  "OKRs Objectives & Key Result Areas",
                ].map((label, index) => (
                  <li
                    key={label}
                    className="flex items-start gap-3 rounded-xl bg-white/80 px-3 py-2 text-xs md:text-sm leading-snug shadow-sm"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-[11px] font-semibold text-white shadow-sm">
                      {index + 1}
                    </div>
                    <span className="flex-1">{label}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col items-end justify-between gap-6">
              <div className="w-32 sm:w-36 rounded-3xl bg-white shadow-xl overflow-hidden border border-purple-100">
                <div className="bg-red-500 py-2 text-center text-sm font-semibold tracking-wide uppercase text-white">
                  April
                </div>
                <div className="bg-white py-5 text-center">
                  <div className="text-5xl font-bold tracking-tight text-gray-900">
                    25
                  </div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500">
                    2025
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-purple-900 shadow-md transition-transform hover:-translate-y-0.5 hover:bg-purple-50"
              >
                View full agenda
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="group sticky top-32 bg-gradient-to-br from-[#EAF9C2] to-[#F2FCD6] rounded-3xl p-8 md:p-12 border border-lime-100 shadow-sm transition-transform hover:-translate-y-2">
          <div className="flex justify-between items-start text-xs md:text-sm text-gray-600 mb-8 md:mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 font-medium shadow-sm">
              Day 3: May 1, 2025 · Thursday
            </span>
            <span className="hidden sm:inline-flex items-center rounded-full bg-emerald-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-50 shadow-sm">
              10AM – 6PM EST
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-4 md:mb-6">
                Topics to be covered
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-6">
                Day 3 pulls everything together into a coherent, actionable
                strategic plan your team can own and execute with confidence.
              </p>

              <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left text-gray-800">
                {[
                  "Annual Strategy Calendar",
                  "One-page Strategy Plan",
                  "Go To Market and SWOT Analysis",
                  "Dynamic Communication Team Report",
                  "Project Charter",
                  "Communication Cadence",
                  "GRPI tool for execution",
                ].map((label, index) => (
                  <li
                    key={label}
                    className="flex items-start gap-3 rounded-xl bg-white/80 px-3 py-2 text-xs md:text-sm leading-snug shadow-sm"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-[11px] font-semibold text-white shadow-sm">
                      {index + 1}
                    </div>
                    <span className="flex-1">{label}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col items-end justify-between gap-6">
              <div className="w-32 sm:w-36 rounded-3xl bg-white shadow-xl overflow-hidden border border-lime-100">
                <div className="bg-red-500 py-2 text-center text-sm font-semibold tracking-wide uppercase text-white">
                  May
                </div>
                <div className="bg-white py-5 text-center">
                  <div className="text-5xl font-bold tracking-tight text-gray-900">
                    1
                  </div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500">
                    2025
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-emerald-900 shadow-md transition-transform hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                View full agenda
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="group sticky top-36 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-100 rounded-3xl p-8 md:p-12 border border-orange-100 shadow-sm transition-transform hover:-translate-y-2">
          <div className="flex justify-between items-start text-xs md:text-sm text-gray-600 mb-8 md:mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 font-medium shadow-sm">
              Day 4: May 2, 2025 · Friday
            </span>
            <span className="hidden sm:inline-flex items-center rounded-full bg-orange-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-50 shadow-sm">
              10AM – 6PM EST
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-4 md:mb-6">
                Topics to be covered
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-6">
                Day 4 focuses on innovation, emotional intelligence, and rigorous
                performance review to ensure your strategy stays alive in the real world.
              </p>

              <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left text-gray-800">
                {[
                  "Innovation and 3-Year Strategy Plan",
                  "Emotional Intelligence",
                  "Power of Reflection",
                  "Target Selling Insights",
                  "Growth As a Process",
                  "Strategy Performance Review",
                  "Strategy Execution Review",
                ].map((label, index) => (
                  <li
                    key={label}
                    className="flex items-start gap-3 rounded-xl bg-white/80 px-3 py-2 text-xs md:text-sm leading-snug shadow-sm"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-[11px] font-semibold text-white shadow-sm">
                      {index + 1}
                    </div>
                    <span className="flex-1">{label}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col items-end justify-between gap-6">
              <div className="w-32 sm:w-36 rounded-3xl bg-white shadow-xl overflow-hidden border border-orange-100">
                <div className="bg-red-500 py-2 text-center text-sm font-semibold tracking-wide uppercase text-white">
                  May
                </div>
                <div className="bg-white py-5 text-center">
                  <div className="text-5xl font-bold tracking-tight text-gray-900">
                    2
                  </div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500">
                    2025
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-orange-900 shadow-md transition-transform hover:-translate-y-0.5 hover:bg-orange-50"
              >
                View full agenda
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
