 "use client";

import React from "react";
import Image from "next/image";

export default function GrowthChallenges() {
  return (
    <section className="py-16 px-0 lg:pl-40  flex justify-center">
      <div className="max-w-3xl md:max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center md:justify-items-stretch  gap-3">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center md:text-left" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="text-black">Are These Growth Challenges</span>
              <br />
              <span className="text-red-600">Holding You Back?</span>
            </h2>

            {/* Mobile-only image below the heading */}
            <div className="md:hidden flex justify-center mb-4">
              <div className="rounded-2xl overflow-hidden max-w-[320px] w-full">
                <Image
                  src="/main-page/section7/img1.png"
                  alt="business owner"
                  width={420}
                  height={420}
                  className="object-cover rounded-2xl w-full h-auto"
                />
              </div>
            </div>

            <p className="text-base text-gray-700 mb-6">
              We understand the pain points that keep SMB entrepreneurs from scaling:
            </p>

            <ul className="space-y-4 w-full">
              <li className="flex items-center gap-4">
                <div className="">
                  <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M8 5L16 12L8 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-gray-700">
                  You have a strong vision, but it's hard to turn that vision into actionable, measurable strategies.
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="">
                  <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M8 5L16 12L8 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-gray-700">
                  You have a capable team, but they aren’t aligned with your company's long-term goals.
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="">
                  <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M8 5L16 12L8 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-gray-700">
                  You know your business has potential for more growth, but you’re not sure where to begin.
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="">
                  <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M8 5L16 12L8 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-gray-700">
                  You’ve outgrown your current processes, but scaling up seems overwhelming.
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="">
                  <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M8 5L16 12L8 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-gray-700">
                  You’re working hard, but the results aren’t matching your efforts.
                </div>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex justify-center md:justify-start order-last md:order-last mb-6 md:mb-0">
            <div className="rounded-2xl overflow-hidden max-w-[420px] w-full">
              <Image
                src="/main-page/section7/img1.png"
                alt="business owner"
                width={420}
                height={420}
                className="object-cover rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


