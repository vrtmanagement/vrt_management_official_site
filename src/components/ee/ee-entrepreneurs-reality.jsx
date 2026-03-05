"use client";

import React from "react";
import Image from "next/image";

const CARDS = [
  {
    id: 1,
    title: "Communication gaps",
    description: "Constant misunderstandings drain time and energy",
    icon: "/ee_new/section2/icon1.png",
  },
  {
    id: 2,
    title: "BurnOut",
    description: "You're overwhelmed and stuck in day-to-day operations",
    icon: "/ee_new/section2/icon2.png",
  },
  {
    id: 3,
    title: "Productivity drop",
    description: "You're working harder but not seeing results",
    icon: "/ee_new/section2/icon3.png",
  },
  {
    id: 4,
    title: "Misaligned team",
    description: "Your team doesn't understand your vision or work style",
    icon: "/ee_new/section2/icon 4.png",
  },
  {
    id: 5,
    title: "Hiring mistakes",
    description: "You hire based on gut feeling and credentials alone",
    icon: "/ee_new/section2/Icon 5.png",
  },
  {
    id: 6,
    title: "Decision bottleneck",
    description: "Everything requires your approval, slowing growth",
    icon: "/ee_new/section2/Icon 6.png",
  },
];

function Card({ title, description, icon }) {
  return (
    <div
      className="flex-shrink-0 w-[280px] sm:w-[300px] flex flex-col items-center text-center px-4 py-6 rounded-xl"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-4">
        <Image
          src={icon}
          alt=""
          fill
          className="object-contain"
          sizes="64px"
        />
      </div>
      <h3
        className="font-bold text-[#333333] mb-2"
        style={{ fontSize: "19px" }}
      >
        {title}
      </h3>
      <p
        className="text-[#333333] leading-snug"
        style={{ fontSize: "15px", fontWeight: 400 }}
      >
        {description}
      </p>
    </div>
  );
}

export default function EEEntrepreneursReality() {
  return (
    <section
      className="w-full py-14 sm:py-18 font-sans"
      style={{
        backgroundColor: "#F8F8F8",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main title */}
        <h2
          className="font-bold text-center mb-4"
          style={{
            color: "#FB0000",
            fontSize: "44px",
          }}
        >
          The Entrepreneur&apos;s Reality
        </h2>

        {/* Supporting statement */}
        <p
          className="text-center max-w-2xl mx-auto mb-2"
          style={{
            color: "#333333",
            fontSize: "17px",
            fontWeight: 400,
          }}
        >
          Most entrepreneurs don&apos;t struggle because they lack ideas or effort.
        </p>

        {/* Sub-header */}
        <p
          className="text-center mb-8"
          style={{
            color: "#E53E3E",
            fontSize: "15px",
            fontWeight: 400,
          }}
        >
          They struggle because:
        </p>

        {/* Horizontal scrolling cards - infinite loop right to left */}
        <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 mb-10">
          <div
            className="flex gap-6 sm:gap-8"
            style={{
              width: "max-content",
              animation: "marquee 45s linear infinite",
            }}
          >
            {[...CARDS, ...CARDS].map((card, index) => (
              <Card
                key={`${card.id}-${index}`}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>

        {/* Bottom banner */}
        <div
          className="max-w-3xl mx-auto rounded-xl py-5 px-6 text-center"
          style={{
            backgroundColor: "#FEE2E2",
          }}
        >
          <p
            className="text-[#333333]"
            style={{
              fontSize: "17px",
              fontWeight: 400,
            }}
          >
            EntrepreneurExcellence<sup>©</sup> was created to break this pattern permanently.
          </p>
        </div>
      </div>
    </section>
  );
}
