"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, Calendar, Users } from "lucide-react";
// import Header from "@/components/sections/header";
// import Footer from "@/components/sections/footer";

export default function CEOProgramPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 25,
    hours: 12,
    minutes: 55,
    seconds: 21,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const seatsTaken = 12;
  const totalSeats = 20;
  const progressPercentage = (seatsTaken / totalSeats) * 100;

  return (
    <div className="relative z-[30] h-screen overflow-hidden bg-gray-100">
      {/* <Header /> */}
      
      <main className="relative h-full">
        {/* Hero Section */}
        <section className="mx-auto h-full max-w-6xl px-6 md:px-8 py-3 md:py-4">
          <div className="grid h-full grid-cols-1 items-center justify-center gap-6 lg:grid-cols-2 lg:gap-10">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4 mx-auto w-full max-w-xl"
            >
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight"
              >
                Scale Your Company,{" "}
                <span className="block">Become a Great CEO &</span>
                <span className="block">Unlock Your Full Potential</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm md:text-base text-slate-700 leading-relaxed"
              >
                A New Scale-Up Program & Community for CEOs by World-Renowned CEO Coach, Rajesh Tedla
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                <button className="px-5 py-2.5 bg-red-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-red-600 hover:shadow-xl hover:scale-105">
                  Join Waitlist
                </button>
                <button className="px-5 py-2.5 bg-transparent border-2 border-slate-900 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:bg-slate-900 hover:text-white">
                  See program content
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Video & Countdown */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              {/* Video Preview */}
              <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-slate-200 bg-white">
                <div className="relative aspect-video">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/30149e84-7ca9-4197-8f44-88c3b3a8cc99-vrtmanagementgroup-com/assets/images/18410-scaled-12.jpg"
                    alt="CEO Program Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
                {/* Yellow accent bar */}
                <div className="absolute top-3 right-3 w-2 h-12 bg-red-500 rounded-full" />
              </div>

              {/* Countdown Card */}
              <div className="bg-white rounded-xl p-4 space-y-4 shadow-lg border border-slate-200">
                {/* Top: Date + Discount Countdown */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Start Date Tile */}
                  <div className="rounded-lg bg-slate-900 text-white p-3 flex items-center gap-3">
                    <Calendar className="w-5 h-5 shrink-0" />
                    <div className="leading-tight">
                      <p className="text-[10px] uppercase tracking-wider text-white/80">Cohort Starts</p>
                      <p className="text-base font-semibold">Jan 2026</p>
                    </div>
                  </div>

                  {/* Discount Countdown (compact) */}
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-[10px] font-medium text-slate-700">Early-bird ends in</p>
                    <div className="mt-1 flex items-center justify-between text-slate-900 font-bold">
                      <span className="text-sm">{String(timeLeft.days).padStart(2, "0")}d</span>
                      <span className="text-sm">{String(timeLeft.hours).padStart(2, "0")}h</span>
                      <span className="text-sm">{String(timeLeft.minutes).padStart(2, "0")}m</span>
                      <span className="text-sm">{String(timeLeft.seconds).padStart(2, "0")}s</span>
                    </div>
                  </div>
                </div>

                {/* Waitlist: compact with thin progress */}
                <div className="rounded-lg border border-slate-200 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-900">
                      <Users className="w-4 h-4" />
                      <p className="text-sm font-medium">Waitlist</p>
                    </div>
                    <p className="text-sm font-semibold text-slate-900">{seatsTaken}/{totalSeats} taken</p>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-600"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}