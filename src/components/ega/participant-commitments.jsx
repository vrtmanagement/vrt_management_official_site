"use client";

const ParticipantCommitments = () => {
  const weeklyCommitments = [
    "Participate in scheduled mentoring or working sessions",
    "Complete agreed-upon action items and implementation tasks",
    "Apply tools, frameworks, and resources in real business scenarios",
    "Communicate updates, blockers, or support needs",
    "Track progress, challenges, and key outcomes"
  ];

  return (
    <section className="relative bg-[#FFF7F6] py-10 md:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-2">
            Weekly & Monthly Participant Commitments
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Clear commitments ensure focus, accountability, and meaningful results throughout the engagement.
          </p>
        </div>

        {/* Two Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Weekly Commitments Card 1 */}
          <div className="bg-white rounded-lg rounded-tl-3xl border-2 border-red-600 overflow-visible transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-red-500 group relative h-full min-h-[320px] flex flex-col">
            {/* Decorative wavy lines */}
            <div className="absolute -top-1 -right-0 w-12 h-12">
              <svg className="w-full h-full text-red-600" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q25,30 50,50 T100,50" stroke="currentColor" fill="none" strokeWidth="1.5" />
                <path d="M0,60 Q25,40 50,60 T100,60" stroke="currentColor" fill="none" strokeWidth="1.5" />
                <path d="M0,70 Q25,50 50,70 T100,70" stroke="currentColor" fill="none" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="p-4 md:p-5 relative z-10 flex-1 flex flex-col">
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-red-600 transition-colors">
                Weekly Commitments
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-2 flex-1">
                {weeklyCommitments.map((commitment, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-0.5 flex-shrink-0 text-sm">•</span>
                    <span className="text-xs md:text-sm text-gray-700 flex-1">
                      {commitment}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Weekly Commitments Card 2 */}
          <div className="bg-white rounded-lg rounded-tl-3xl border-2 border-red-600 overflow-visible transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-red-500 group relative h-full min-h-[320px] flex flex-col">
            {/* Decorative wavy lines */}
            <div className="absolute -top-1 -right-0 w-12 h-12">
              <svg className="w-full h-full text-red-600" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q25,30 50,50 T100,50" stroke="currentColor" fill="none" strokeWidth="1.5" />
                <path d="M0,60 Q25,40 50,60 T100,60" stroke="currentColor" fill="none" strokeWidth="1.5" />
                {/* <path d="M0,70 Q25,50 50,70 T100,70" stroke="currentColor" fill="none" strokeWidth="1.5" /> */}
              </svg>
            </div>
            <div className="p-4 md:p-5 relative z-10 flex-1 flex flex-col">
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-red-600 transition-colors">
                Weekly Commitments
              </h3>

              {/* Bullet Points */}
              <ul className="space-y-2 flex-1">
                {weeklyCommitments.map((commitment, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-0.5 flex-shrink-0 text-sm">•</span>
                    <span className="text-xs md:text-sm text-gray-700 flex-1">
                      {commitment}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipantCommitments;

