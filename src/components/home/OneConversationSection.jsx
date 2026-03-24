"use client";

import React from "react";
import Link from "next/link";
import LoadingButton from "@/components/ui/LoadingButton";

export default function OneConversationSection() {
  return (
    <section className="bg-[#f3f5f6] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[28px] bg-red-200 px-6 py-10 text-center shadow-[0_14px_30px_rgba(15,23,42,0.08)] md:px-12 md:py-14">
          <h2 className="text-4xl font-bold leading-tight text-[#ff1616] md:text-4xl">
            One Conversation.
            <br />
            That Is All It Takes to Start.
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg  leading-relaxed text-[#222] md:text-[20px]">
            Every entrepreneur who has worked with VRT Management Group started with
            the same step: a 45-minute complimentary Growth Strategy Call with Rajesh
            Tedla. No pitch. No pressure. No generic advice. Just an honest
            conversation about where your business is today and the most direct,
            proven path forward.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LoadingButton
              href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2026-03"
              external
              spinnerColor="text-white"
              className="inline-flex items-center justify-center rounded-2xl bg-[#ff1616] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e01414]"
            >
              Book Your Free 45-Minute Growth Strategy Call
            </LoadingButton>
            <div className="inline-flex items-center justify-center rounded-2xl bg-[#f3f3f3] px-6 py-4 text-base font-semibold text-[#2b2b2b] transition-all duration-300 hover:bg-white">
              <span className="mr-2">Explore</span>
              <Link href="/ega" className="hover:text-[#ff1616]">
                EGA
              </Link>
              {/* <span className="mx-2">·</span>
              <Link href="/ee" className="hover:text-[#ff1616]">
                EGOS
              </Link> */}
              <span className="mx-2">·</span>
              <Link href="/ee" className="hover:text-[#ff1616]">
                EE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
