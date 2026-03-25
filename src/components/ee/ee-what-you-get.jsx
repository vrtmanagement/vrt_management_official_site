"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BLOCKS = [
  {
    id: 1,
    num: "1",
    imageSide: "left",
    image: "/ee_new/section5/img1.png",
    title: "Psychometric Assessment ",
    body: "Not a personality quiz. A scientifically validated tool that gives you an honest, data-driven mirror of exactly who you are as an entrepreneur today without bias, assumption, or guesswork. Three critical dimensions measured.",
    bullets: [
      "Behaviors under pressure.",
      "Core motivators & energy drains.",
      "Leadership competencies.",
    ],
  },
  {
    id: 2,
    num: "2",
    imageSide: "right",
    image: "/ee_new/section5/img2.png",
    title: "Benchmark Comparison",
    body: "Your results are measured against the exact profile of the top 4% the founders who consistently build, scale, and sustain great businesses. This is the moment where opinion ends and data begins.",
    bullets: [
      "Top 4% benchmark data.",
      "Alignment & deviation mapping.",
      "Silent growth limiters revealed.",
    ],
  },
  {
    id: 3,
    num: "3",
    imageSide: "left",
    image: "/ee_new/section5/img3.png",
    title: "Personalized GAP Report",
    body: "A precise breakdown of the exact gaps between where you operate and where the most successful entrepreneurs do. No vague feedback. No generic observations. Just clear, specific, actionable insight.",
    bullets: [
      "Behavioral blind spots.",
      "Motivational misalignments.",
      "Competency gaps by dimension.",
    ],
  },
  {
    id: 4,
    num: "4",
    imageSide: "right",
    image: "/ee_new/section5/img4.png",
    title: "Personal Development Plan",
    body: "A precision-built roadmap to close every identified gap step by step. Not a generic workshop takeaway. A plan built entirely around your profile, your goals, and your business realities.",
    bullets: [
      "Structured gap closure roadmap.",
      "Research-backed strategies.",
      "Scale with clarity & confidence.",
    ],
  },
  // {
  //   id: 5,
  //   num: "5",
  //   imageSide: "left",
  //   image: "/ee_new/section5/img5.png",
  //   title: "Note for immediate Participants:",
  //   body: "While this program will cost $2,500 starting in April 2026, qualified participants or immediate action takers will receive full access to the Entire Masterclass and the personalized GAP analysis and PDP at no cost.",
  // },
];

const imageAnimation = {
  hiddenLeft: { opacity: 0, x: -80, scale: 1.05 },
  hiddenRight: { opacity: 0, x: 80, scale: 1.05 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textAnimation = {
  hiddenLeft: { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function ImageBlock({ image, side }) {
  return (
    <motion.div
      variants={imageAnimation}
      initial={side === "right" ? "hiddenRight" : "hiddenLeft"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex-shrink-0 w-full lg:w-[48%] aspect-[4/3]"
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-contain"
        sizes="(max-width: 1024px) 100vw, 45vw"
      />
    </motion.div>
  );
}

function TextBlock({ num, title, body, bullets, side }) {
  return (
    <motion.div
      variants={textAnimation}
      initial={side === "right" ? "hiddenRight" : "hiddenLeft"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col justify-center"
    >
      <div className="flex items-start gap-3">
        <span
          className="font-bold flex-shrink-0"
          style={{
            color: "#FB0000",
            fontSize: "clamp(1.3rem, 2.4vw, 1.6rem)",
            fontFamily: "var(--font-sans)",
          }}
        >
          {num}.
        </span>

        <div className="flex flex-col gap-3">
          <h3
            className="font-bold"
            style={{
              color: "#FB0000",
              fontSize: "clamp(1.3rem, 2.4vw, 1.6rem)",
              fontFamily: "var(--font-sans)",
            }}
          >
            {title}
          </h3>

          {body && (
            <p
              style={{
                color: "#333333",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1.6,
                fontFamily: "var(--font-sans)",
              }}
            >
              {body}
            </p>
          )}

          {bullets && (
            <ul
              className="list-disc pl-5 space-y-1"
              style={{
                color: "#333333",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.5,
                fontFamily: "var(--font-sans)",
              }}
            >
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function EEWhatYouGet() {
  return (
    <section
      className="w-full py-16 sm:py-20 font-sans"
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <h2
            className="font-bold mb-1"
            style={{ color: "#FB0000", fontSize: "60px" }}
          >
            EE<sup className=" text-[25px] ">©</sup> Masterclass Overview
          </h2>

          <p
            className="font-bold text-black text-[20px] sm:text-[22px] md:text-[24px] lg:text-[27px] leading-[1.5] tracking-[0] max-w-3xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A precision process to close the gap between <span className="text-red-500"> who you are</span> and who you need to become.
          </p>
        </div>

        {BLOCKS.map((block) => (
          <div key={block.id} className="mb-16 sm:mb-20 last:mb-0">

            {/* MOBILE LAYOUT */}
            <div className="block lg:hidden">
              <div className="flex flex-col gap-6 items-center md:px-8">

                {/* Heading */}
                <div className="w-full flex items-start gap-3">
                  <span
                    className="font-bold flex-shrink-0"
                    style={{
                      color: "#FB0000",
                      fontSize: "clamp(1.3rem, 2.4vw, 1.6rem)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {block.num}.
                  </span>

                  <h3
                    className="font-bold"
                    style={{
                      color: "#FB0000",
                      fontSize: "clamp(1.3rem, 2.4vw, 1.6rem)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {block.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="w-full">
                  <ImageBlock image={block.image} side={block.imageSide} />
                </div>

                {/* Body */}
                <p
                  className="w-full md:px-6"
                  style={{
                    color: "#333333",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {block.body}
                </p>

              </div>
            </div>

            {/* DESKTOP LAYOUT (UNCHANGED) */}
            <div
              className={`hidden lg:flex gap-12 items-center ${
                block.imageSide === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              }`}
            >
              <ImageBlock image={block.image} side={block.imageSide} />

              <TextBlock
                num={block.num}
                title={block.title}
                body={block.body}
                bullets={block.bullets}
                side={block.imageSide}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}