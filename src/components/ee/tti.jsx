import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const triMetrixHighlights = [
  {
    title: "Behaviors (DISC)",
  },
  {
    title: "12 Driving Forces™ (motivation)",
  },
  {
    title: "Acumen (judgment)",
  },
  {
    title: "Competencies",
    subtitle: "Reveal the how, why, how-well, and can-do behind performance.",
  },
];

export default function TTI({ itemVariants }) {
  return (
    <motion.div id="introduction" variants={itemVariants} className="mb-16 lg:mb-20">
      <div className="relative bg-gray-100 px-4 py-12 sm:px-8 md:px-12 lg:px-16 lg:py-16 rounded-3xl">
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 text-center sm:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <h2
                className="text-3xl sm:text-4xl font-bold text-black"
                style={{ fontFamily: "ebgaramond, serif" }}
              >
                What is TriMetrix® HD and why we're using it
              </h2>
            </div>

            <div className="space-y-5">
              <p
                style={{ fontFamily: "Inter, sans-serif" }}
                className="text-sm sm:text-base uppercase tracking-[0.12em] text-black"
              >
                TriMetrix® HD integrates four sciences:
              </p>
              <div className="space-y-4">
                {triMetrixHighlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start gap-3 sm:gap-4 text-left"
                  >
                    <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white shadow-md">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                    </span>
                    <div className="flex flex-col items-start">
                      <h3
                        style={{ fontFamily: "Inter, sans-serif" }}
                        className="text-base sm:text-lg font-semibold text-black"
                      >
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p
                          style={{ fontFamily: "Inter, sans-serif" }}
                          className="hidden lg:block text-sm text-gray-700 leading-snug"
                        >
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p
                style={{ fontFamily: "Inter, sans-serif" }}
                className="text-base sm:text-lg text-gray-900 leading-relaxed max-w-2xl mx-auto sm:mx-0"
              >
                The suite is{" "}
                <span className="font-semibold text-red-600">validated</span>,{" "}
                <span className="font-semibold text-red-600">bias-free</span>,
                and compliant with EEOC/OFCCP guidelines. This multidimensional view lets us pinpoint
                patterns common to top performing entrepreneurs.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl border border-white/40 bg-white/80 shadow-xl overflow-hidden">
              <Image
                src="/lban/thd.png"
                alt="TriMetrix HD framework"
                fill
                className="object-contain p-6"
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 360px, 480px"
                priority
              />
            </div>
            <div className="absolute -z-10 inset-0 hidden sm:block translate-x-6 translate-y-6 rounded-2xl bg-gradient-to-br from-red-200/40 via-white/0 to-red-300/40 blur-xl" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}