"use client";

import React from "react";
import Image from "next/image";

const BLOCKS = [
  {
    id: 1,
    num: "1",
    imageSide: "left",
    image: "/ee_new/section5/img1.png",
    title: "your trimetrix® hd leadership profile",
    body: "comprehensive assessment of your behavioral style, motivators, and competencies. understand your decision-making patterns, communication preferences, and leadership strengths.",
  },
  {
    id: 2,
    num: "2",
    imageSide: "right",
    image: "/ee_new/section5/img2.png",
    title: (
      <>
        your EntrepreneurExcellence
        <sup>©</sup> benchmark report
      </>
    ),
    body: "see how you compare to top-performing entrepreneurs. identify your competitive advantages and areas for development.",
  },
  {
    id: 3,
    num: "3",
    imageSide: "left",
    image: "/ee_new/section5/img3.png",
    title: "your gap analysis and trait map",
    body: "precise identification of the gap between where you are and where you need to be. clear roadmap for closing that gap.",
  },
  {
    id: 4,
    num: "4",
    imageSide: "right",
    image: "/ee_new/section5/img4.png",
    title: (
      <>
        the EntrepreneurExcellence
        <sup>©</sup> masterclass (full program)
      </>
    ),
    body: null,
    bullets: [
      "module 1: understanding your leadership dna",
      "module 2: building high-performance teams",
      "module 3: strategic decision making",
      "module 4: effective delegation systems",
      "module 5: communication mastery",
      "module 6: hiring for culture and competence",
      "module 7: scaling your leadership",
      "module 8: creating your operating system",
    ],
  },
  {
    id: 5,
    num: "5",
    imageSide: "left",
    image: "/ee_new/section5/img5.png",
    title: "your personalized development plan (pdp)",
    body: "step-by-step action plan tailored to your profile. specific actions, timelines, and measurable outcomes for the next 90 days.",
  },
];

function ImageBlock({ image }) {
  return (
    <div className="relative flex-shrink-0 w-full lg:w-[48%] aspect-[4/3]">
      <Image
        src={image}
        alt=""
        fill
        className="object-contain"
        sizes="(max-width: 1024px) 100vw, 45vw"
      />
    </div>
  );
}

function TextBlock({ num, title, body, bullets }) {
  return (
    <div className="flex flex-col justify-center">
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
    </div>
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
        {/* Main heading - centered */}
        <div className="text-center mb-14 sm:mb-16">
          <p
            className="font-bold mb-1"
            style={{ color: "#FB0000", fontSize: "18px" }}
          >
            what you get with
          </p>
          <h2
            className="font-bold"
            style={{
              color: "#FB0000",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            }}
          >
            EntrepreneurExcellence<sup>©</sup> <span className="text-black">($2,000 value)</span>
          </h2>
        </div>

        {/* Content blocks - mobile/tablet vs desktop layout */}
        {BLOCKS.map((block) => (
          <div key={block.id} className="mb-16 sm:mb-20 last:mb-0">
            {/* Mobile & tablet: headline, then image, then content */}
            <div className="block lg:hidden">
              <div className="flex flex-col gap-6 items-center">
                <div className="w-full">
                  <TextBlock
                    num={block.num}
                    title={block.title}
                    body={block.body}
                    bullets={block.bullets}
                  />
                </div>

                <div className="w-full">
                  <ImageBlock image={block.image} />
                </div>
              </div>
            </div>

            {/* Desktop: preserve original side‑by‑side layout */}
            <div
              className={`hidden lg:flex gap-12 items-center ${
                block.imageSide === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <ImageBlock image={block.image} />
              <TextBlock
                num={block.num}
                title={block.title}
                body={block.body}
                bullets={block.bullets}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
