"use client";

import { useEffect, useState } from "react";
import { Play, Calendar, X } from "lucide-react";

export default function CEOProgramPage({ onJoinWaitlist }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 25,
    hours: 12,
    minutes: 55,
    seconds: 21,
  });

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // no modal logic here; handled at page level

  return (
    <div className="relative z-[30] min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <main className="relative h-full">
        <section className="mx-auto h-full max-w-6xl px-6 md:px-8 py-16 md:py-24">
          <div className="grid h-full grid-cols-1 items-center justify-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-5 mx-auto w-full max-w-xl">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-red-600">EGA™ </span>
                Builds a Business that Grows with Clarity, Leads with Purpose,
                and Scale with Systems
              </h1>

              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                A New Scale-Up Program & Community for CEOs by World-Renowned CEO
                Coach, Rajesh Tedla
              </p>

              <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 border border-slate-700 px-3 py-1.5 text-slate-100 shadow-sm">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                <span className="text-base md:text-lg lg:text-xl font-semibold tracking-wide">
                  Cohort starts Jan 2026
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => (onJoinWaitlist ? onJoinWaitlist() : null)}
                  className="px-5 py-2.5 bg-red-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-red-500 hover:shadow-xl hover:scale-105"
                >
                  Join Waitlist
                </button>

                <button
                  className="px-5 py-2.5 bg-transparent border border-slate-300/30 text-slate-200 font-semibold rounded-lg transition-all duration-300 hover:bg-slate-800 hover:border-slate-300/50"
                  onClick={() => {
                    const el = document.getElementById("ega-module");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  See program content
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Video */}
              <div className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer border border-slate-800 bg-slate-900">
              <div className="relative aspect-video sm:aspect-video aspect-[4/5] sm:aspect-video">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/30149e84-7ca9-4197-8f44-88c3b3a8cc99-vrtmanagementgroup-com/assets/images/18410-scaled-12.jpg"
                    alt="CEO Program Preview"
                  className="w-full h-full object-cover sm:object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-2 h-12 bg-red-500 rounded-full" />
              </div>

              {/* Countdown */}
              <div className="bg-slate-900 rounded-xl p-5 md:p-6 space-y-4 shadow-lg border border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-5 rounded-full bg-red-500" />
                  <p className="text-xs md:text-sm font-semibold tracking-wide text-slate-200">
                    Early-bird ends in
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {Object.entries(timeLeft).map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-lg bg-slate-800/80 border border-slate-700 p-3 text-center"
                    >
                      <div className="text-2xl md:text-3xl font-extrabold text-white">
                        {String(value).padStart(2, "0")}
                      </div>
                      <div className="mt-1 text-[10px] md:text-xs uppercase tracking-widest text-slate-300">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal moved to page.jsx */}
    </div>
  );
}
