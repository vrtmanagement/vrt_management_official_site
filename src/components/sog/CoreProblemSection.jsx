'use client';

import React from 'react';

const painPoints = [
  'You are the bottleneck, every critical decision flows through you, and the business cannot scale beyond your bandwidth.',
  'Your leadership team is misaligned, accountability is unclear, priorities shift weekly, and the same problems resurface month after month.',
  'Your strategy dies in execution, no operating rhythm bridges intention and daily action.',
  "Revenue is growing but profit isn't, the systems that protect margin have not scaled with the business.",
  // "Revenue is growing but profit isn't, the systems that protect margin haven't scaled.",
];

const CoreProblemSection = () => {
  return (
    <section className="bg-[#f3f3f3] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-[#FF1A1A] px-4 py-1 text-xs font-bold  tracking-wide text-white">
              The Core Problem
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-black md:text-4xl">
              Hard Work Got You Here.
              <br />
              It Won&apos;t Get You to the <span className="text-[#FF1A1A]">Next Level.</span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-[#2E2E2E] md:text-lg">
              <p>
                At 20 to 500 employees, the very strategies, habits, and instincts
                that built your business become the things quietly capping it.
                Bottlenecks multiply. Margins tighten. Your team is busy but not
                aligned.
              </p>
              <p>
                Strategy gets discussed on Monday and buried by Wednesday. No matter
                how many hours you pour in, the ceiling stays exactly where it is.
              </p>
              <p>
                This is not a motivational problem. It is not a market problem. It
                is a systems, leadership, and execution problem, one of the most
                common and most solvable challenges in the entrepreneurial journey.
              </p>
            </div>

            <h3 className="mt-7 text-xl font-semibold text-black">
              You are likely here because:
            </h3>
          </div>

          <div className="rounded-xl mt-4 shadow-[0_18px_36px_rgba(15,23,42,0.12)]">
            <img
              src="/main-page/section3/img2.png"
              alt="Business team reviewing strategy"
              className="h-[320px] w-full rounded-lg object-cover md:h-[420px]"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {painPoints.map((point, index) => (
            <div
              key={`${point}-${index}`}
              className="flex items-start gap-3 rounded-xl bg-[#F6EAEA] px-4 py-4 text-base leading-relaxed text-[#222] shadow-[0_6px_18px_rgba(15,23,42,0.05)] md:text-lg"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF1A1A] text-base font-bold text-white">
                ›
              </span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreProblemSection;
