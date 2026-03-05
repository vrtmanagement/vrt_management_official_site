 "use client";

import React from "react";
import Image from "next/image";

export default function MeetRajesh() {
  return (
    <section className="relative py-20 bg-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-6">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 items-center">
      <div className="order-2 md:order-1 md:max-w-md lg:max-w-none">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
              Meet <span className="text-red-600">Rajesh Tedla</span>
              <br />
              <span className="text-white">Your Mentor for Growth</span>
            </h2>

            <h4 className="text-lg font-semibold text-white/90 mb-4">A Trusted Expert with Proven Success</h4>

            <p className="text-md text-white/80 mb-4 leading-7 max-w-4xl">
              With over 39+ years of experience in business transformation, Rajesh Tedla is a globally recognized leader
              in coaching entrepreneurs to achieve exponential growth. Rajesh has helped over 1,424+ entrepreneurs scale
              their businesses, transform their leadership skills, and increase their revenues.
            </p>

            <p className="text-md text-white/80 mb-3 max-w-3xl ">
              Background: Doctorate in Business Administration with a focus on Entrepreneurial Growth.
              </p>
              <p className="text-md text-white/80 mb-3 max-w-3xl ">
              Track Record: Proven success stories from SMBs who have doubled their revenue and transformed their operations under his mentorship.
            </p>

            <div className="mt-0 md:mt-6">
              <a
                href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2026-03"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-colors"
              >
             Book a free strategy call with Rajesh Tedla
              </a>
            </div>

            <p className="text-md text-white/70 mt-0 md:mt-6">Learn how Rajesh's mentorship can help you unlock your business's potential.</p>
          </div>

          {/* <div className="order-first md:order-none flex justify-center md:justify-center lg:justify-end -mt-20 md:mt-0 mb-2 md:mb-0 md:w-[260px] lg:w-[420px] lg:absolute lg:top-0 lg:bottom-0 lg:right-40">
            <div className="rounded-2xl overflow-hidden w-full max-w-[420px] md:max-w-[260px] lg:max-w-[420px] h-auto md:h-auto lg:h-full">
              <Image
                src="/main-page/section8/img1.png"
                alt="Rajesh Tedla"
                width={420}
                height={420}
                className="w-full h-auto md:h-full object-cover rounded-2xl"
              />
            </div>
          </div> */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end lg:justify-end">
  <div className="rounded-2xl overflow-hidden 
                  w-[260px] 
                  sm:w-[300px]
                  md:w-[340px] 
                  lg:w-[420px]">
    <Image
      src="/main-page/section8/img1.png"
      alt="Rajesh Tedla"
      width={420}
      height={420}
      className="w-full h-auto md:h-[420px] lg:h-auto object-cover rounded-2xl"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}


