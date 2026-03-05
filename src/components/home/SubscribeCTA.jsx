 "use client";

import React from "react";
import Image from "next/image";

export default function SubscribeCTA() {
  return (
    <section className="relative my-18">
      <div
        className="w-full bg-cover bg-center"
        // style={{ backgroundImage: "url('/main-page/section8/img1.png')" }}
      >
        {/* pattern + color overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[#fde8e8] opacity-70"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-no-repeat bg-center opacity-30"
            style={{ backgroundImage: "url('/main-page/section8/transeperent-layer.png')" }}
            aria-hidden
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              Take the First Step
              <br />
              <span className="text-black">Towards</span>
              <span className="text-red-600"> Business Transformation</span>
            </h2>

            <p className="text-sm text-black/80 mb-6">
              Are you ready to lead, scale, and succeed? Let VRT Management Group be your guide on the journey to sustainable, scalable growth.
            </p>

            <p className="text-sm text-red-600 font-medium mb-4">Subscribe for Growth</p>

            <form className="flex items-center justify-center gap-4 max-w-xl mx-auto" action="#" method="post">
              <div className="relative w-full">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Image src="/main-page/section8/mail-icon.png" alt="mail" width={20} height={20} />
                </div>
                <input
                  aria-label="Email address"
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-white bg-white/90 placeholder-gray-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


