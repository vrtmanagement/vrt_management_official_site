"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const STEPS = [
  {
    heading: "Values",
    title:
      "A values statement lists the core principles that guide and direct the organization and its culture.",
    points: [
      {
        title: "Continuous and Never-ending Improvement (CANI)",
        description:
          "Be the best by focusing on continuous improvement in every aspect of our work, products, and services.",
      },
      {
        title: "Change or Die",
        description:
          "Success belongs to those who adapt, embrace change, drive innovation, and evolve in an ever-changing business world.",
      },
      {
        title: "Learn, Unlearn, Relearn",
        description:
          'Stay successful by learning new ideas, letting go of old habits, and continuously updating your skills.',
      },
      {
        title: "Result-Oriented",
        description:
          "We drive meaningful actions that produce tangible results, empowering our stakeholders to achieve their goals.",
      },
      {
        title: "Empathy",
        description:
          "We strive to understand our customers' needs to build trust and lasting relationships.",
      },
      {
        title: "Teamwork",
        description:
          "We trust and collaborate with one another in our shared passion to inspire entrepreneurial success.",
      },
    ],
    video: "/purpose-value/value.mp4",
  },
  {
    heading: "Accountabilities",
    title:
      "The main difference between responsibility and accountability is that responsibility can be shared while accountability cannot. Being accountable means being responsible for something and ultimately being answerable for your actions. Also, you hold a person accountable only after a task is done or not done. Responsibility can be before and after a task.",
    points: [
      {
        title: "Align With Purpose",
        description:
          "Ensure every action reflects the company vision, purpose, and values.",
      },
      {
        title: "Lead With Integrity",
        description: "Uphold ethical practices in every decision and interaction.",
      },
      {
        title: "Model Trustworthy Leadership",
        description:
          "Demonstrate leadership that fosters a culture of trust and respect.",
      },
      {
        title: "Encourage Openness",
        description:
          "Promote transparent communication channels and actionable feedback.",
      },
      {
        title: "Embrace Change",
        description:
          "Adapt quickly to support the organization’s continuous improvement.",
      },
      {
        title: "Grow Talent",
        description:
          "Recruit, develop, and retain high-potential individuals for long-term growth.",
      },
      {
        title: "Own Your Growth",
        description: "Take personal accountability to learn and grow continuously.",
      },
      {
        title: "Deliver On KPIs",
        description:
          "Ensure goals and key performance indicators are met within committed timelines.",
      },
    ],
    video: "/purpose-value/accountabilities.mp4",
  },
  {
    heading: "Norms",
    title:
      "Norms are action-guiding rules. The difference between a value and a norm is that a value is general, referring to an overall ideal. In contrast, a norm is a concrete, specifying certain things that must be done (or omitted).",
    points: [
      {
        title: "Collaborate With Integrity",
        description:
          "Work together to ensure customer and team member satisfaction while protecting our integrity, business, and brand.",
      },
      {
        title: "Stay Solution-Focused",
        description: "Orient conversations around solutions instead of problems.",
      },
      {
        title: "Prioritize Results",
        description: "Evaluate both effort and outcomes to drive meaningful impact.",
      },
      {
        title: "Begin With The End",
        description:
          "Keep the desired outcome front and center to ensure purpose-driven action.",
      },
      {
        title: "Ask To Learn",
        description:
          "Use thoughtful questions that encourage open dialogue, learning, and growth.",
      },
      {
        title: "Reflect Often",
        description:
          "Practice regular reflection to uncover insights that fuel continuous learning.",
      },
      {
        title: "Support Stakeholders",
        description:
          "Share knowledge and resources that help stakeholders grow and succeed.",
      },
      {
        title: "Own The Impact",
        description: "Take responsibility for your work and the outcomes it creates.",
      },
      {
        title: "Listen To Understand",
        description:
          "Suspend judgment, fully hear others, and contribute to constructive solutions.",
      },
      {
        title: "Stand By Team Decisions",
        description:
          "Commit to agreed-upon decisions even when they differ from personal preferences.",
      },
    ],
    video: "/purpose-value/norm.mp4",
  },
];

const ProcessTimeline = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">
        {STEPS.map((step, index) => {
          const isReversed = index % 2 === 1;
          const delayBase = index * 0.1;
          const alignmentClass = "text-center md:text-left";
          const accentAlignment = "md:justify-start";

          return (
            <motion.article
              key={step.number}
              className={`flex flex-col ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              } items-center justify-between gap-8 border-b border-slate-100 pb-10 last:border-b-0 last:pb-0`}
              style={{ minHeight: "180px" }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: delayBase }}
            >
              <motion.div
                className={`${alignmentClass} order-2 md:order-1 w-full max-w-xl`}
                initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: delayBase + 0.1 }}
              >
                <div className="relative mb-6">
                  <div className="relative rounded-3xl bg-white border-2 border-red-100 px-6 py-6 md:px-8 md:py-7 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                    <p className="text-2xl md:text-3xl font-black text-red-600 tracking-tight mb-3"
                    style={{ fontFamily: 'Lora, serif' }}
                    >
                      {step.heading}
                    </p>

                    <h3
                      className={`text-sm md:text-lg font-medium text-slate-600 leading-relaxed ${alignmentClass}`}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                {step.points ? (
                  <ul className="space-y-3 text-left">
                    {step.points.map((point) => (
                      <motion.li
                        key={point.title}
                        className="flex gap-3"
                        initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: delayBase + 0.15,
                        }}
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                        <div className="space-y-1">
                          <p className="font-semibold text-slate-900 text-sm md:text-base">
                            {point.title}
                          </p>
                          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                )}
              </motion.div>

              <motion.div
                className="order-1 md:order-2 w-full max-w-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: delayBase + 0.2 }}
              >
                <motion.div
                  className="relative aspect-square overflow-hidden"
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  {step.video ? (
                    <video
                      src={step.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={step.image}
                      alt={`${step.heading} illustration`}
                      fill
                      sizes="(max-width: 768px) 60vw, 320px"
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                </motion.div>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessTimeline;


