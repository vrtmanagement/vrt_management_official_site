"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChartColumnIncreasing,
  Sparkles,
  Users,
} from "lucide-react";

const masterclassHighlights = [
  {
    icon: CalendarDays,
    label: "Live Session",
    value: "April 29, 2026",
  },
  {
    icon: Users,
    label: "Audience",
    value: "Entrepreneurs, SMB owners, and growth-stage leaders",
  },
  {
    icon: ChartColumnIncreasing,
    label: "Focus",
    value: "Leadership clarity, execution discipline, and scaling insight",
  },
];

const masterclassPoints = [
  "Discover the hidden leadership patterns that shape business growth.",
  "Understand where misalignment, friction, and decision fatigue are slowing scale.",
  "Walk away with a sharper framework for building a business that can grow without chaos.",
];

export default function EEMasterclassCard() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xl font-semibold  tracking-[0.18em] text-[#c64d61]">
            EE<sup>&copy;</sup> Masterclass
          </p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,2.9rem)] font-bold leading-tight text-[#121212]">
            Join the next Entrepreneur Excellence<sup>&copy;</sup> masterclass.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[clamp(1rem,1.8vw,1.15rem)] leading-relaxed text-[#5b5b5b]">
            A polished, high-impact session built for leaders who want more
            than motivation and are ready to understand what truly unlocks
            sustainable scale.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-[#f3d7db] bg-[linear-gradient(135deg,#fffdfd_0%,#fff5f6_56%,#fff0f2_100%)] shadow-[0_30px_80px_rgba(117,31,66,0.12)]">
          <div className="absolute right-[-60px] top-[-80px] h-56 w-56 rounded-full bg-[#ffd5db] opacity-60 blur-3xl" />
          <div className="absolute bottom-[-90px] left-[-40px] h-52 w-52 rounded-full bg-[#ffe6cc] opacity-55 blur-3xl" />

          <div className="relative grid gap-10 px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[1.2fr_0.88fr] lg:px-10 lg:py-10">
            <div className="min-w-0">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-[#ff4d4d] bg-[#ff1717] shadow-[0_12px_28px_rgba(255,23,23,0.22)]">
                  <div className="absolute inset-[5px] rounded-full border border-white/20" />
                  <Image
                    src="/ega/custom-icons/online-meeting.png"
                    alt="EE masterclass icon"
                    width={38}
                    height={38}
                    className="relative z-10 h-[38px] w-[38px] object-contain"
                  />
                </div>

                <div className="min-w-0 pt-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c9cf] bg-white/75 px-3 py-1 text-[12px] font-semibold tracking-[0.18em] text-[#a13f52]">
                    <Sparkles className="h-3.5 w-3.5" strokeWidth={2.1} />
                    Live Online Masterclass
                  </div>

                </div>
              </div>

              <div className="mt-8 grid gap-3">
                {masterclassHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/72 px-4 py-4 shadow-[0_10px_26px_rgba(117,31,66,0.06)] backdrop-blur-sm"
                    >
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff0f2] text-[#d62c49]">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold  tracking-[0.14em] text-[#b25a69]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-[15.5px] leading-relaxed text-[#242424]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#f2d4d8] bg-white/82 p-6 shadow-[0_16px_38px_rgba(117,31,66,0.08)] backdrop-blur-sm sm:p-7">
            
              <div className="mt-8 rounded-[20px] border border-[#f3d7db] bg-[#fff4f6] p-5">
                <p className="text-[13px] font-semibold tracking-[0.18em] text-[#b85968]">
                  Reserve your seat
                </p>
                <p className="mt-2 text-[1.4rem] font-bold text-[#161616]">
                  Next Session: April 29, 2026
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-[#555]">
                  Join the upcoming online session and start building a more
                  intentional blueprint for scale.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://us02web.zoom.us/meeting/register/846LgiQHS-agcTWLU3I0bQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#ff1717_0%,#f27b00_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(255,77,39,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(255,77,39,0.26)]"
                  >
                    Join the Masterclass
                    <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.2} />
                  </a>

                  <Link
                    href="/ega/registration-form"
                    className="inline-flex items-center justify-center rounded-full border border-[#e7c6cd] bg-white px-5 py-3 text-sm font-semibold text-[#6f2639] transition-colors duration-200 hover:bg-[#fff7f8]"
                  >
                    See How It Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
