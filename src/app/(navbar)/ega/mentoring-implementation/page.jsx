"use client";

import Link from "next/link";

export default function MentoringImplementationPage() {

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl line-height-1 font-bold mb-4">
            If Your Business Can't Grow Without You in the Middle of Everything, You Don't Own a Business, You Own a Job, and EGA
            <sup className="align-super text-sm">©</sup> Exists to Change That
          </h1>
          <p className="text-xl text-red-100">
            A structured and proven workshop designed for ambitious entrepreneurs ready to scale their business to the next level.
          </p>
        </div>
      </section>

      {/* Introduction / About VRT */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-800">
            About Us – VRT Management Group, LLC.
          </h2>
          <p className="text-lg mb-4 text-gray-700">
            For 18 years, VRT Management Group, LLC has specialized in helping entrepreneur led and SMB businesses (20–500 employees) break
            through growth ceilings and scale with discipline. We have delivered over{" "}
            <span className="font-semibold text-red-700">$524 million in measurable financial benefits</span> to more than{" "}
            <span className="font-semibold text-red-700">1,424+ companies</span> across 28 countries and have trained and mentored over{" "}
            <span className="font-semibold text-red-700">14,542 professionals</span>.
          </p>
          <p className="text-lg mb-4 text-gray-700">
            Our approach centers on three pillars: <span className="font-semibold">Strategy</span>,{" "}
            <span className="font-semibold">People</span>, and <span className="font-semibold">Process Transformation</span>. These are
            brought to life through our signature frameworks, the Entrepreneur Growth Operating System
            <sup className="align-super text-xs">®</sup> (EGOS
            <sup className="align-super text-xs">®</sup>) and the Entrepreneur Growth Alliance
            <sup className="align-super text-xs">®</sup> (EGA
            <sup className="align-super text-xs">®</sup>) which equip leaders with the operating tools to build thriving companies that
            succeed with or without them present.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            Headquartered in Connecticut, USA, with a Global Capability Center in Hyderabad, India, VRT serves clients worldwide. We provide
            proven solutions at the moments where leadership decisions matter most and when the cost of standing still is real.
          </p>
          <p className="text-lg text-gray-800 font-semibold">
            Visit: <span className="underline">vrt9.net/ega</span> &nbsp; | &nbsp; Email:{" "}
            <span className="underline">coachrajesh@vrt9.com</span>
          </p>
        </div>
      </section>

      {/* Masterclass Overview – 4 Days */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Entrepreneur Growth Alliance
              <sup className="align-super text-sm">®</sup> (EGA
              <sup className="align-super text-sm">®</sup>) Offline Masterclass Overview
            </h2>
          </div>
          <div>
            <p className="text-lg mb-10 text-center text-gray-700">
              A four-day journey that moves you from vision to results, equipping you with the mindset, tools, and operating rhythm to scale
              your business to the next level.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:-translate-y-1 group">
                <h3 className="text-2xl font-bold mb-4 text-red-800">1 Day – Change or Die</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                  <li>The mindset shift that separates leaders who scale from those who stall.</li>
                  <li>
                    <span className="font-semibold">Trust Advantage</span> – How high trusted leaders build faster, stronger, and more
                    profitable companies.
                  </li>
                  <li>
                    <span className="font-semibold">Dynamic Communication</span> – When leaders communicate better, every business grows
                    faster.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:-translate-y-1 group">
                <h3 className="text-2xl font-bold mb-4 text-red-800">2 Day – SOG Diagnostic Assessments</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                  <li>
                    <span className="font-semibold">SOG Diagnostic Assessments</span> – From vision to results, because a strategy that
                    isn&apos;t executed is just a document.
                  </li>
                  <li>
                    <span className="font-semibold">Stages of Business Growth</span> – Stop guessing where you are and start leading where
                    you&apos;re going.
                  </li>
                  <li>
                    <span className="font-semibold">SOG Diagnostic Assessments</span> – From vision to results because a strategy that
                    isn&apos;t executed is just a document.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:-translate-y-1 group">
                <h3 className="text-2xl font-bold mb-4 text-red-800">3 Day – Yearly Execution Calendar</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                  <li>The operating rhythm that turns annual goals into daily momentum and keeps it all year long.</li>
                  <li>
                    <span className="font-semibold">1 and 3 Years Strategic Planning and Execution</span> – From vision to results, because
                    a strategy that isn&apos;t executed is just a document.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-1 gap-8">
            <div>
              <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:-translate-y-1 group">
                <h3 className="text-2xl font-bold mb-4 text-red-800">4 Day – The Power of Reflection</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                  <li>
                    The leaders who build the most enduring businesses don&apos;t just act they reflect, extract, and return sharper every
                    single time.
                  </li>
                  <li>
                    <span className="font-semibold">Emotional Intelligence</span> – Your business can only grow as far as your ability to
                    lead the people inside it.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-2xl">
              <p className="text-lg font-semibold text-red-900">
                Note: The Recap and Execution Review of Day 1 and 2 learnings will be scheduled a few days before Day 3 and 4 with Rajesh
                Tedla and the team, as per the convenience of the team and participants of the cohort. The session will be conducted via
                Zoom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort 2602 */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-2 border-red-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-800 text-center">Cohort 2602</h2>
            <p className="text-lg text-gray-700 text-center">
              <span className="font-semibold">Workshop Dates :</span> April 9th to June 8th 2026<br />
              <span className="font-semibold">Schedule:</span> 4 Complete Days<br />
              <span className="font-semibold">Time:</span> 8:30 AM to 5:00 PM (CST)<br />
              <span className="font-semibold">Place:</span> Greater Austin, Texas<br />
              Monthly zoom execution sessions are held from July 2026 to March 2027.
            </p>
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="py-12 px-4 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-2 border-red-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-800 text-center">Vision 2030</h2>
            <p className="text-lg mb-4 text-center text-gray-700 max-w-3xl mx-auto">
              VRT Entrepreneur Growth Alliance
              <sup className="align-super text-xs">®</sup> (EGA
              <sup className="align-super text-xs">®</sup>) will partner with{" "}
              <span className="font-semibold">1,000 entrepreneurs and SMBs</span> to build scalable, resilient, high value companies, creating{" "}
              <span className="font-semibold text-red-700">$1M+ in measurable financial value per business</span> and{" "}
              <span className="font-semibold text-red-700">$1B+ in total value</span>.
            </p>
            <p className="text-lg text-center text-red-800 font-semibold">
              Please contact us to be part of great initiative.
            </p>
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
                Scan to schedule a call and explore how the Entrepreneur Growth Alliance
                <sup className="align-super text-xs">®</sup> Masterclass can help you scale with discipline.
              </p>
            </div>
          </div>
          
          <div>
            <div className="flex justify-center items-center">
              <Link
                href="/ega/registration-form"
                className="ripple inline-block bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                Scan to schedule a call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

