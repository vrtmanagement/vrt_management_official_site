"use client";

import React from "react";

const readyPoints = [
  "You know your business has more potential than it is currently realizing.",
  "You are tired of being the only one who can solve every problem.",
  "You want growth that is predictable, not just possible.",
  "You are willing to challenge your assumptions and invest in your own leadership development.",
  "You want a trusted advisor in your corner, not a vendor who disappears after the engagement ends.",
];

const qualifyPoints = [
  "You are a USA-based entrepreneur-led or SMB company.",
  "You have 10 to 500 employees and at least 2 years in business.",
  "You are a founder, co-founder, or SMB executive ready to scale with systems, not just effort.",
  "You want measurable results, not more advice, more theory, or more motivation.",
];

export default function WhoThisIsForSection() {
  return (
    <section className="bg-[#f4eef0] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 inline-flex rounded-full bg-[#ff1616] px-4 py-1 text-xs font-bold  tracking-relaxed text-white">
          Who This Is For
        </p>

        <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-[#171717] md:text-5xl">
          We Are Selective by Design. Because Transformation Requires the Right
          People in the Room.
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-[#ff1616]">You Are Ready for VRT If:</h3>
            <div className="space-y-4">
              {readyPoints.map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <span className="text-3xl font-bold leading-none text-[#ff1616]">
                    ›
                  </span>
                  <p className="text-base leading-relaxed text-[#2f2f2f] md:text-[18px]">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-bold text-[#1faa2d]">You Qualify If:</h3>
            <div className="space-y-4">
              {qualifyPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="text-3xl font-bold leading-none text-[#1faa2d]">
                    ›
                  </span>
                  <p className="text-base leading-relaxed text-[#2f2f2f] md:text-[18px]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
