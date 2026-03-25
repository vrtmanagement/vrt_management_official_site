"use client";

import React from "react";
import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="w-full bg-[#fff] py-14">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Top Stats */}
       {/* <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-4 mb-16">
          {[
            // {
            //   value: "18",
            //   text: "Years Serving Entrepreneur-Led Businesses",
            // },
            {
              value: "1,424+",
              text: "Entrepreneurs and SMBs Supported",
            },
            {
              value: "$524M+",
              text: "In Measurable Financial Impact Delivered",
            },
            {
              value: "39+",
              text: "Years Leadership and Business Growth Experience",
            },
            {
              value: "43%",
              text: "Avg. Revenue Growth in 12 Months",
            },
            {
              value: "92%",
              text: "Client Success Rate",
            },
          ].map((item, i) => (
            <div
              key={i}
             className="bg-white border border-red-300 rounded-[12px] px-4 py-5 md:px-5 md:py-6 text-center transition-all duration-50 ease-out hover:bg-[#fff1f1] hover:shadow-md hover:-translate-y-[2px]"
            >
              <div className="text-[#FF0000] font-extrabold text-[40px] md:text-[35px] mb-2">
                {item.value}
              </div>
              <p className="text-[#000000] text-[16px] md:text-[14px] leading-snug font-semibold font-[Inter]">
                {item.text}
              </p>
            </div>
          ))}
        </div> */}

        {/* Vision Card */}
        <div className="max-w-[1100px]  mx-auto relative rounded-[18px] mt-10 overflow-visible  border border-red-200">

          {/* Background Image */}
          <Image
            src="/home/Vision-bg.png" // 👈 replace with your image path
            alt="vision background"
            fill
            className="object-cover rounded-[18px]"
          />

          {/* Overlay (THIS is the key for color accuracy) */}
          <div className="absolute inset-0 bg-white/85 rounded-[18px]" />

          {/* Content */}
          <div className="relative px-10 py-12 text-center">

            {/* Label */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-red-600 text-white text-sm font-semibold px-8 py-2 rounded-full">
                Vision Statement
              </div>
            </div>

            <p className="text-black  text-[20px] leading-[1.4  ] max-w-[900px] mx-auto mb-10">
              By 2030, the VRT Entrepreneur Growth Alliance<sup>©</sup> will partner with 1,000
              entrepreneurs and SMBs to build scalable, resilient, high-value
              companies creating $1M+ in measurable financial value per business
              and $1B+ in total combined impact.
            </p>

            <div className="text-black text-[18px] mb-1">
              -Rajesh Tedla,
            </div>
            <div className="text-black text-[16px]">
              Founder and CEO, VRT Management Group, LLC.
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}