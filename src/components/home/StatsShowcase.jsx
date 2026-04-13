"use client";

import React, { useEffect, useRef, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";
import { useSiteSchedule } from "@/contexts/SiteScheduleContext";
import { DEFAULT_SITE_SCHEDULE } from "@/lib/site-schedule-defaults";

import { motion } from "framer-motion";
import { Card } from "../ui/card";


const DEFAULT_STATS = [
  {
    label: "Years",
    value: 39,
    suffix: "+",
    description: "Years Leadership and Business Growth Experience",
  },
  {
    label: "Businesses",
    value: 1424,
    suffix: "+",
    description: "Entrepreneurs and SMBs Supported",
  },
  {
    label: "Leaders",
    value: 43,
    suffix: "%",
    description:
      "Avg. Revenue Growth in 12 Months",
  },
  {
    label: "Value Generated",
    value: 92,
    suffix: "%",
    description: "Client Success Rate",
  },
  {
    label: "Value Generated",
    value: 524,
    prefix: "$",
    suffix: "M+",
    description: "In Measurable Financial Impact Delivered",
  },
];

export default function StatsShowcase() {
  const { home } = useSiteSchedule();
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const stats =
    Array.isArray(home?.statsShowcase) && home.statsShowcase.length
      ? home.statsShowcase
      : DEFAULT_SITE_SCHEDULE.home?.statsShowcase || DEFAULT_STATS;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative max-w-7xl mx-auto overflow-hidden rounded-[28px] border border-white/10 bg-neutral-950/90 text-white shadow-2xl mt-15 px-4 sm:px-6"
    >
      {/* Decorative background: soft radial gradient + arcs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 "
        style={{
          background:
            "radial-gradient(1200px 600px at 20% -10%, rgba(120,120,120,0.2), transparent 60%), radial-gradient(1200px 600px at 120% 10%, rgba(80,80,80,0.18), transparent 55%), radial-gradient(800px 400px at 50% 120%, rgba(100,100,100,0.16), transparent 60%)",
        }}
      />

      {/* Curved bands to echo the reference image */}
      <svg
        className="absolute -top-24 left-0 right-0 h-[420px] w-full opacity-20"
        viewBox="0 0 1200 420"
        fill="none"
      >
        <path
          d="M-100 300 C 200 120, 600 480, 1200 180"
          stroke="url(#grad1)"
          strokeWidth="120"
        />
        <path
          d="M-100 360 C 260 180, 720 520, 1200 240"
          stroke="url(#grad2)"
          strokeWidth="120"
        />
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
          </linearGradient>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 px-4 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl"
          style={{ fontFamily: 'Lora, serif' }}
          >
            Turning Ambitions into Achievements
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-balance text-sm/6 text-neutral-300 sm:text-base/7">
            We've empowered entrepreneurs and small business owners worldwide to
            achieve remarkable growth through our proven methodologies and
            strategic frameworks.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Card
              key={`${s.label}-${i}`}
              className={[
                "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md",
                "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_30px_-10px_rgba(0,0,0,0.6)]",
                "transition-all duration-700",
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: `${120 * i}ms` }}
            >
              {/* Animated red outline running around all 4 corners (outside border) */}
              <motion.svg
                aria-hidden
                className="pointer-events-none absolute -inset-[2px] z-0"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                initial={false}
                animate={{ strokeDashoffset: -100 }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
              >
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="rgba(255,0,0,0.7)"/>
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="rgba(255,0,0,0.35)"/>
                  </filter>
                  <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ff1a1a"/>
                    <stop offset="50%" stopColor="#ff4d4d"/>
                    <stop offset="100%" stopColor="#ff1a1a"/>
                  </linearGradient>
                </defs>
                <rect
                  x="2"
                  y="2"
                  width="96"
                  height="96"
                  rx="10"
                  ry="10"
                  fill="none"
                  stroke="url(#strokeGrad)"
                  strokeWidth="2"
                  pathLength={100}
                  strokeDasharray="8 92"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                />
              </motion.svg>

              {/* subtle gradient highlight */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

              <div className="relative z-10">
                <div className="text-4xl font-extrabold tracking-tight sm:text-5xl drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] text-white">
                  <AnimatedCounter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    duration={1600 + i * 200}
                    className="text-white"
                  />
                </div>
                <p className="mt-3 text-sm text-neutral-300">{s.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}