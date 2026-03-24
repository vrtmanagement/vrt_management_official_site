 "use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import LoadingButton from "@/components/ui/LoadingButton";


const cards = [
  {
    title: "People",
    description:
      "Empower your team to achieve extraordinary results. From building high-performing teams to enhancing leadership capabilities, we ensure your people become your greatest asset in driving business success.",
    icon: "/main-page/section2/icon1.png",
  },
  {
    title: "Process",
    description:
      "Say goodbye to inefficiencies. Our tailored process optimization strategies streamline your operations, boost productivity, and ensure your systems scale seamlessly as your business grows.",
    icon: "/main-page/section2/icon2.png",
  },
  {
    title: "Strategies",
    description:
      "Create focused growth plans using data-driven insights and market trends. We design strategies tailored to your unique challenges, ensuring steady progress and measurable results.",
    icon: "/main-page/section2/icon3.png",
  },
];

export default function Obstacles() {
  return (
    <section className="bg-[#f7f0f1] py-16 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center md:mb-12">
          <p className="mx-auto mb-4 inline-flex rounded-full bg-[#ff1a1a] px-4 py-1 text-xs font-bold  tracking-[0.08em] text-white">
            What We Solved
          </p>
          <h2 className="mx-auto max-w-4xl text-2xl font-bold leading-tight text-[#ff1a1a] md:text-4xl">
            We Transform Three Things That Drive Every Growth Ceiling
          </h2>
          <p className="mx-auto mt-5 max-w-5xl text-base text-[#303030] md:text-[21px]">
            Every scaling problem, whether it shows up as misaligned teams, eroding
            margins, inconsistent execution, or leadership bottlenecks, traces back
            to the same three root causes. We fix all three, simultaneously, inside
            your actual business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-7">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#f1dfe2] bg-white p-6 shadow-[0_14px_30px_rgba(220,38,38,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(220,38,38,0.14)]"
            >
              <div className="flex flex-col">
                <div className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#ffe6e6]">
                  <Image src={c.icon} alt={c.title} width={34} height={34} />
                </div>
                <h3 className=" text-2xl font-bold text-[#161616]">{c.title}</h3>
                <p className="text-base leading-relaxed text-[#363636]">{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:mt-12">
          <LoadingButton
            href="/ega/registration-form"
            spinnerColor="text-white"
            className="inline-flex cursor-pointer items-center justify-center gap-2 text-center rounded-2xl bg-[#ff1a1a] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_26px_rgba(220,38,38,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e01313]"
          >
            Take the first step toward transforming your business
            {/* <ChevronRight className="h-5 w-5" /> */}
          </LoadingButton>
        </div>
      </div>
    </section>
  );
}