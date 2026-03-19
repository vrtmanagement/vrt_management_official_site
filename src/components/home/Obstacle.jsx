 "use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LoadingButton from "@/components/ui/LoadingButton"


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
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-red-600 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
            What We Solve
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            At VRT Management Group, we help businesses overcome their toughest challenges by transforming their People, Processes, and Strategies to achieve scalable growth and leadership excellence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8">
          {cards.map((c, i) => (
            <div
              key={i}
            className="group bg-white border border-gray-200 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-6 w-full md:w-[360px] hover:shadow-[0_20px_40px_rgba(239,68,68,0.12)] hover:-translate-y-1 transition-transform duration-200 hover:bg-[#fde8e8] hover:border-1 hover:border-red-600 transition-colors"
            >
              <div className="flex items-start flex-col space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-14 w-14 rounded-full bg-[#fde8e8] flex items-center justify-center group-hover:bg-white transition-colors duration-200">
                    <Image src={c.icon} alt={c.title} width={30} height={30} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-2">{c.title}</h3>
                  <p className="text-gray-700 leading-[1.5]">{c.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
        <LoadingButton
  href="/ega/registration-form"
  spinnerColor="text-white"
  className="inline-block bg-red-600  cursor-pointer hover:bg-red-700 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-transform duration-200"
>
  Take the first step toward transforming your business
</LoadingButton>
        </div>
      </div>
    </section>
  );
}