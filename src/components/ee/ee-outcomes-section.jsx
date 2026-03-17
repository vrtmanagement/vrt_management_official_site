"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LoadingButton from "@/components/ui/LoadingButton"


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function EEOutcomesSection() {
  return (
    <section className="w-full bg-[#f3e6e6] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >

            <h2 className="text-[38px] font-bold text-black leading-tight mb-6">
              Overall Measurable
              <br />
              Outcomes after 3
              <br />
              months
            </h2>

            <p className="text-gray-700 mb-8 max-w-md">
              For participants, success looks like a transformed leadership
              profile that delivers:
            </p>

            {/* Desktop Button */}
            <motion.div
                variants={fadeUp}
                className="hidden md:inline-block"
              >
                <LoadingButton
                  href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2025-06"
                  external
                  spinnerColor="text-white"
                  className="cursor-pointer bg-red-500 hover:bg-red-600 transition-colors text-white font-semibold px-8 py-4 rounded-lg shadow-md"
                >
                  Get free strategy session
                </LoadingButton>
              </motion.div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >

            <motion.div variants={fadeRight}>
              <h3 className="font-bold text-lg mb-2">
                Increased Enterprise Value
              </h3>
              <p className="text-gray-700 leading-relaxed">
                building a business that is scalable and financially 10x
                valuable through implementing the proven leadership
                strategies learned in masterclass.
              </p>
            </motion.div>

            <motion.div variants={fadeRight}>
              <h3 className="font-bold text-lg mb-2">
                Execution Accountability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                implementing systems that ensure your team delivers
                on your vision by filling the gaps of communication
                and the leadership.
              </p>
            </motion.div>

            <motion.div variants={fadeRight}>
              <h3 className="font-bold text-lg mb-2">
                "The Entrepreneurial Excellence
                <sup className="text-[0.65em] opacity-100">©</sup>"
              </h3>
              <p className="text-gray-700 leading-relaxed">
                you will be possessing and implementing the specific
                traits that separate struggling ent and founders from
                those who consistently scale their business.
              </p>
            </motion.div>

          </motion.div>

        </div>

        {/* Bottom Highlight Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 bg-gray-100 rounded-xl p-8 md:p-10 text-center max-w-5xl mx-auto shadow-sm"
        >

          <p className="text-gray-800 leading-relaxed">
            Your Business Will Never Grow Beyond Your Own Leadership Capacity
            With Motivation And Hard Work. Success At EE
            <sup className="align-super text-[0.55em] opacity-100">©</sup> Means Expanding
            Motivation Into Capacity, Consistency And Smart Work By
            Prioritizing The Important Output, So Your Business Can Finally
            Reach Its Full Potential.
          </p>

        </motion.div>

        {/* Mobile Button at Bottom */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 flex justify-center md:hidden"
        >
           <LoadingButton
              href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2025-06"
              external
              spinnerColor="text-white"
              className="cursor-pointer bg-red-500 hover:bg-red-600 transition-colors text-white font-semibold px-8 py-4 rounded-lg shadow-md"
            >
              Get free strategy session
            </LoadingButton>
        </motion.div>

      </div>
    </section>
  );
}