"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import image from "../../../public/image.png"
import Image from "next/image";
// import {image} 

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 16 } },
};

export const GrowthProgram = ({
  className,
  kicker = "Introducing the EGA™ Mentorship Program",
  heading = "A Strategic Growth Program Designed for SMBs",
  subheading =
  "The Entrepreneur Growth Alliance (EGA™) Mentorship Program provides you with the tools, insights, and support to overcome scaling challenges and achieve sustainable growth. This mentorship goes beyond traditional coaching—it's a hands-on, strategic partnership designed to help you thrive.",
  benefits = [
    {
      title: "People",
      description:
        "Build a high‑performance team with clear roles, ownership, and a culture of accountability.",
    },
    {
      title: "Process",
      description:
        "Streamline operations, reduce waste, and create repeatable systems that scale reliably.",
    },
    {
      title: "Strategy",
      description:
        "Clarify your positioning, design a winning roadmap, and focus on the right growth levers.",
    },
    {
      title: "Leadership",
      description:
        "Develop the leadership habits and behaviors that drive consistent results across the org.",
    },
    {
      title: "Revenue",
      description:
        "Improve offer structure, pricing, and pipeline to increase conversion and profitability.",
    },
    {
      title: "Execution",
      description:
        "Turn plans into outcomes with weekly scorecards, priorities, and tight operating cadence.",
    },
  ],
  cta = { label: "Let's Talk", href: "#" },
}) => {
  return (
    <section className={cn("w-full", className)}>
      {/* Header */}
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-sm font-medium tracking-wide text-neutral-400"
        >
          {kicker}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-3xl text-pretty text-neutral-600 dark:text-neutral-300"
        >
          {subheading}
        </motion.p>
      </div>

      {/* Key benefits label */}
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        viewport={{ once: true }}
        className="mt-6 text-center text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-300"
      >
        Key Benefits of EGA™
      </motion.p>

      {/* Benefits grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -2 }}
            className="rounded-3xl border border-neutral-200/70 bg-neutral-100/90 p-5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-white/10 dark:bg-neutral-900"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-red-600 shadow-[0_0_0_3px_rgba(220,38,38,0.15)]" />
              <div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{b.title}</h3>
                <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{b.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA band */}
      <div className="mx-auto mt-14 w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-6 rounded-2xl border border-neutral-200/70 bg-neutral-50 p-6 dark:border-white/10 dark:bg-neutral-900 sm:p-8 lg:grid-cols-3">
          {/* Placeholder visual - replace with image if available */}
          <motion.div
          />
          <Image src={image} alt="Growth Program" width={500} height={500} initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="aspect-[4/3] w-full rounded-xl bg-gradient-to-tr from-red-600/20 via-white to-black/10 ring-1 ring-inset ring-neutral-200 dark:from-red-500/20 dark:via-neutral-900 dark:to-neutral-800 dark:ring-white/10 lg:col-span-1"
          />
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Join the EGA™ Program Today</h3>
            <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
              Discover how our mentorship program can help you lead your business to new heights. Schedule a complimentary 45‑minute strategic call to learn more.
            </p>
            <div className="mt-4"> 

                <motion.a
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -1 }}
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                {cta.label}
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthProgram;