"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

const phases = [
  {
    number: "1",
    title: ["Online Cohort"],
    href: "/ega/growth-system-installation",
    icon: "/ega/custom-icons/online-meeting.png",
    cohorts: [
      {
        label: "Cohort 2603",
        value: "June 4 - August 6, 2026",
      },
      {
        label: "Cohort 2604",
        value: "August 20 - October 22, 2026",
      },
    ],
    summary: [
      { label: "Day", value: "Every Thursday" },
      { label: "Duration", value: "10 Weeks" },
      { label: "Time", value: "11:00 AM - 2:00 PM EST" },
    ],
  },
  {
    number: "2",
    title: ["In person Live classroom"],
    href: "/ega/mentoring-implementation",
    icon: "/ega/custom-icons/class.png",
    locations: [
      {
        name: "Connecticut",
        cohort: "Cohort 2605",
        sessionDates: "Sep 11-12 and Sep 25-26, 2026",
      },
      {
        name: "Texas",
        cohort: "Cohort 2606",
        sessionDates: "Sep 11-12 and Sep 25-26, 2026",
      },
    ],
    summary: [
      { label: "Schedule", value: "4 Complete Days" },
      { label: "Time", value: "8:30 AM to 5:00 PM (CST)" },
    ],
  },
];

function PhaseIcon({ icon, title }) {
  return (
    <div className="relative flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border border-[#ff4d4d] bg-[#ff1717] shadow-[0_8px_20px_rgba(255,23,23,0.18)]">
      <div className="absolute inset-[5px] rounded-full border border-white/20" />
      <Image
        src={icon}
        alt={title}
        width={34}
        height={34}
        className="relative z-10 h-[34px] w-[34px] object-contain"
      />
    </div>
  );
}

const cardClasses =
  "relative flex min-h-[350px] flex-col overflow-hidden rounded-[18px] border border-[#f6cdcd] bg-[linear-gradient(180deg,#fffdfd_0%,#fff6f6_100%)] p-6 shadow-[0_14px_40px_rgba(113,25,25,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f2b6b6] hover:shadow-[0_20px_48px_rgba(113,25,25,0.14)] md:min-h-[352px] md:px-8 md:py-7";

const largeNumberClasses =
  "absolute right-6 top-5 text-[72px] font-bold leading-none text-[#ff6b6b]";

const buttonClasses =
  "inline-flex h-9 items-center justify-center rounded-[6px] bg-[#ff1717] px-7 text-[13px] font-semibold text-white shadow-[0_10px_20px_rgba(255,23,23,0.2)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#e81414] hover:shadow-[0_14px_24px_rgba(255,23,23,0.24)]";

const ScaleBusinessSection = () => {
  return (
    <>
      <section className="relative mt-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-xl font-bold text-red-600 md:text-2xl lg:text-3xl">
              Are You Ambitious to Scale Your Business Faster
            </h2>
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl">
              by transforming the People, Processes, and Strategy.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-gray-700 md:text-lg">
              VRT Management Group, LLC helps Entrepreneurs and SMB owners/CEOs
              turn <span className="font-bold">"stuck"</span> into clear
              priorities, strong execution, and predictable profit.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {phases.map((phase) => (
              <article key={phase.number} className={cardClasses}>
                <span aria-hidden="true" className={largeNumberClasses}>
                  {phase.number}
                </span>

                <div className="relative flex items-center gap-5 pr-16">
                  <PhaseIcon icon={phase.icon} title={phase.title.join(" ")} />

                  <div className="flex min-h-[62px] flex-col justify-center">
                    {phase.title.map((line) => (
                      <h3
                        key={line}
                        className="text-[24px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#171717]"
                      >
                        {line}
                      </h3>
                    ))}
                  </div>
                </div>

                {phase.cohorts ? (
                  <div className="mt-8 space-y-6">
                    <div className="space-y-1.5 text-[15px] leading-[1.45] text-[#2f2f2f]">
                      {phase.cohorts.map((cohort) => (
                        <p key={cohort.label}>
                          <span className="font-semibold text-[#ff1717]">
                            {cohort.label}
                          </span>
                          <span>: {cohort.value}</span>
                        </p>
                      ))}
                    </div>

                    <div className="inline-block rounded-[8px] border border-[#f4cfcf] bg-[#fbe0e0] px-4 py-3 text-[14px] leading-[1.55] text-[#2f2f2f] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
                      {phase.summary.map((item) => (
                        <p key={item.label}>
                          <span className="font-semibold">{item.label}:</span>{" "}
                          <span>{item.value}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 space-y-4 text-[15px] leading-[1.45] text-[#2f2f2f]">
                    {phase.locations.map((location) => (
                      <div
                        key={`${location.name}-${location.cohort}`}
                        className="space-y-0.5"
                      >
                        <p className="flex items-center gap-1.5 font-semibold text-[#ff1717]">
                          <MapPin className="h-3.5 w-3.5" strokeWidth={2.4} />
                          <span>{location.name}</span>
                        </p>
                        <p className="font-semibold text-[#ff1717]">{location.cohort}</p>
                        <p>
                          <span className="font-semibold text-[#2f2f2f]">
                            Session Dates:
                          </span>{" "}
                          <span>{location.sessionDates}</span>
                        </p>
                      </div>
                    ))}

                    <div className="inline-block rounded-[8px] border border-[#f4cfcf] bg-[#fbe0e0] px-4 py-3 text-[14px] leading-[1.55] text-[#2f2f2f] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
                      {phase.summary.map((item) => (
                        <p key={item.label}>
                          <span className="font-semibold">{item.label}:</span>{" "}
                          <span>{item.value}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-8">
                  <Link href={phase.href} className={buttonClasses}>
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ScaleBusinessSection;
