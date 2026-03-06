"use client";

import Link from "next/link";

export default function GrowthSystemInstallationPage() {
  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            If Your Business Can&apos;t Grow Without You in the Middle of Everything, You Don&apos;t Own a Business, You Own a Job, and EGA
            <sup className="align-super text-sm">©</sup> Exists to Change That
          </h1>
          <p className="text-xl text-red-100">
            A structured and proven workshop designed for ambitious entrepreneurs ready to scale their business to the next level.
          </p>
        </div>
      </section>

      {/* Introduction / Cohort + About Us */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-2 border-red-200 rounded-2xl p-8 mb-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-800">Cohort 2601</h2>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Type:</span> In-person Zoom Workshop<br />
              <span className="font-semibold">Workshop Schedule:</span> April 16th to June 18th 2026<br />
              <span className="font-semibold">Day:</span> Thursdays (10 weeks)<br />
              <span className="font-semibold">Time:</span> 11:00 AM to 2:00 PM (EST)
            </p>
          </div>
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

      {/* Masterclass Overview – 10 Sessions */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Entrepreneur Growth Alliance
            <sup className="align-super text-sm">®</sup> (EGA
            <sup className="align-super text-sm">®</sup>) Masterclass Overview (10 sessions)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-red-800">1. Change or Die</h3>
              <p className="text-lg text-gray-700">
                The Mindset Shift That Separates Leaders Who Scale from Leaders Who Stall.
              </p>
            </div>
            <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-red-800">2. Trust Advantage</h3>
              <p className="text-lg text-gray-700">
                How High Trusted Leaders Build Faster, Stronger, and More Profitable Companies.
              </p>
            </div>
            <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-red-800">3. Dynamic Communication</h3>
              <p className="text-lg text-gray-700">
                When Leaders Communicate Better, Every Business Grows Faster.
              </p>
            </div>
            <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-red-800">4. Stages of Business Growth</h3>
              <p className="text-lg text-gray-700">
                Stop Guessing Where You Are and Start Leading Where You&apos;re Going.
              </p>
            </div>
            <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-red-800">5. SOG Diagnostic Assessments</h3>
              <p className="text-lg text-gray-700">
                The Business Health Scan That Tells You Exactly What to Fix, When, and Why.
              </p>
            </div>
            <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-red-800">6. 1 and 3 Years Strategic Planning and Execution</h3>
              <p className="text-lg text-gray-700">
                From Vision to Results Because a Strategy That Isn&apos;t Executed Is Just a Document.
              </p>
            </div>
            <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-red-800">7. Yearly Execution Calendar</h3>
              <p className="text-lg text-gray-700">
                The Operating Rhythm That Turns Annual Goals into Daily Momentum and Keeps It There All Year Long.
              </p>
            </div>
            <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-red-800">8. Vision, Purpose, Values, Key Accountabilities, Norms</h3>
              <p className="text-lg text-gray-700">
                The Leaders Who Scale the Fastest Are Not Those With the Best Strategy, They Are Those With the Strongest Culture Underneath
                It.
              </p>
            </div>
            <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-red-800">9. Emotional Intelligence</h3>
              <p className="text-lg text-gray-700">
                Your Business Can Only Grow as Far as Your Ability to Lead the People Inside It.
              </p>
            </div>
            <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2 text-red-800">10. The Power of Reflection</h3>
              <p className="text-lg text-gray-700">
                The Leaders Who Build the Most Enduring Businesses Don&apos;t Just Act They Reflect, Extract, and Return Sharper Every Single
                Time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort 2601 Summary */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-2 border-red-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-800 text-center">Cohort 2601</h2>
            <p className="text-lg text-gray-700 text-center">
              <span className="font-semibold">Workshop Schedule:</span> April 16th to June 18th 2026<br />
              <span className="font-semibold">Day:</span> Thursdays (10 weeks)<br />
              <span className="font-semibold">Time:</span> 11 AM to 2.00 PM (EST)<br />
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
            <p className="text-lg text-gray-700 mb-2 text-center max-w-3xl mx-auto">
              VRT Entrepreneur Growth Alliance
              <sup className="align-super text-xs">®</sup> (EGA
              <sup className="align-super text-xs">®</sup>) will partner with 1,000 entrepreneurs and SMBs to build scalable, resilient, high
              value companies, creating $1M+ in measurable financial value per business and $1B+ in total value.
            </p>
            <p className="text-lg text-red-800 font-semibold text-center">
              Please contact us to be part of great initiative.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps – keep as is */}
      <section className="py-12 px-4 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
              <p className="text-lg text-red-100 mb-6">
                After completing the Online Cohort, you'll move into In-Person: Mentoring and Implementation
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

