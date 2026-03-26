"use client";

import React, { useState } from "react";

const waves = [
  {
    title: "Wave 1 - Self Trust",
    headline: "We lead with integrity and Stragey execution planning.",
    body: "At 50, one man walked away from a stable career, bet on himself, and trusted Rajesh with his vision. That trust was rewarded. Guided by VRT Management Group, LLC's 7 month strategic blueprint the right team, the right foundation, the right execution his company hit $9.9 Million in revenue and $1.3 Million in direct profit in just 24 months. They originally planned for $30 Million in three years. Rajesh's strategy rewrote that entirely now they are targeting $50 Million in 3 years and $250 Million in the next 10 years. When the right strategy meets the right belief, results don't just meet expectations they shatter them. Are you ready to rewrite your future?",
    image: "/sog/section5/img1.png",
  },
  {
    title: "Wave 2 - Relationship Trust",
    headline: "We build trust by executing and maintaining it.",
    body: "Relationship Trust 18 Years from day one. Eighteen years ago, a fresh college graduate took over his mother's $3 Million company and chose to trust VRT Management Group, LLC. We treated his vision like our own. Today, that company is a thriving $28 Million organisation and they are still with us. Not because of obligation. Because of trust. Because when you grow together, you never walk away from each other. At VRT Management Group, LLC, once a client, always a client. That is not a tagline. That is 18 years of proof. Your 45-minute complimentary session is diagnostic with Rajesh Tedla himself helps you to understand.",
    image: "/sog/section5/img2.png",
  },
  {
    title: "Wave 3 - Organizational Trust",
    headline:
      "We build systems that outlive our involvement. The goal is a business that runs without you in every conversation. We install alignment, not dependency.",
    body: "Organisational Trust From $30 Million to a Billion Dollar Legacy. Twelve years ago, an American company came to VRT Management Group, LLC with $30 Million and a desire to grow. Stage by stage, strategy by strategy, Rajesh guided them until $30 Million became $330 Million in America alone. Then Rajesh saw the next opportunity, global expansion. That single vision changed everything. Today, that same organisation holds a combined wealth exceeding a billion dollars across multiple countries. Every stage had a different challenge. Every stage had a different strategy. But one thing never changed, their trust in VRT Management Group, LLC. From $30 Million to a Billion Dollar legacy. Are you ready for your next stage?",
    image: "/sog/section5/img3.png",
  },
  {
    title: "Wave 4 - Market Trust",
    headline:
      "Our clients' growth is our reputation 130% revenue growth. Leadership alignment. Clarity like never before. These aren't claims, they're client quotes.",
    body: "Market Trust The COVID Test. When COVID hit, businesses collapsed and entrepreneurs panicked. In that same moment, VRT Management Group, LLC doubled their prices and not a single client left. They paid willingly. Because they had lived the results. They knew the value they received would always outweigh the price they paid. That moment during COVID wasn't just a business decision, it was proof. Proof that when your value is real, price becomes irrelevant and relationships become unbreakable. At VRT Management Group, LLC, we don't just serve clients, we stand beside them through every season and every storm. That is the trust we have earned. That is the standard we live by.",
    image: "/sog/section5/img4.png",
  },
  {
    title: "Wave 5 - Societal Trust",
    headline:
      "We believe entrepreneurs change the world. Every thriving business creates jobs, opportunities, and community. That's why this work matters beyond revenue.",
    body: "At VRT Management Group, LLC, we believe entrepreneurship is one of the greatest forces for societal change. Every business we help scale creates jobs, strengthens families, builds communities, and inspires future leaders. This is why our work goes beyond revenue and profitability. We are committed to helping entrepreneurs build legacies that outlast market cycles and benefit society at large.",
    image: "/sog/section5/img5.png",
  },
];

const TrustBenefits = () => {
  const [activeWave, setActiveWave] = useState(0);
  const selectedWave = waves[activeWave];
  const getWaveParts = (title) => {
    const normalizedTitle = title.replace(/\s{2,}/g, " - ");
    const [waveLabel, trustLabel] = normalizedTitle.split(" - ");
    return { waveLabel, trustLabel };
  };

  return (
    <section className="bg-[#f3f3f3] py-8 md:py-10">
      <div className="mx-auto  ">
        <div className="bg-[#f2e3e6] px-6 py-10 md:px-32 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:items-start">
            <div>
              <h2 className="max-w-xl text-[32px] font-bold leading-[1.1] text-[#ff0000] md:text-[56px]">
                How Our Customers Gained Benefit
              </h2>
              <h3 className="mt-3 text-[28px] font-semibold text-neutral-900 md:text-[32px]">
                Trust is the only real currency in business
              </h3>
              <p className="mt-4 max-w-2xl text-[13px] leading-[1.5] text-neutral-800 md:text-[21px]">
                Every system we build, every framework we install, every decision
                we help you make is grounded in one principle: when trust goes up,
                costs go down, and speed goes up. Everything else follows.
              </p>
            </div>

            <blockquote className="relative rounded-2xl border border-[#ff6b6b] bg-[#f8f8f8] px-23 py-5 pl-10 text-[20px] leading-[1.5] text-neutral-800 md:text-[21px] pt-10">
              <img
                src="/sog/section5/icon.png"
                alt="Quote icon"
                className="absolute left-3 -top-7 h-18 w-18 object-contain"
              />
             "Trust always affects two outcomes - speed and cost. When trust goes
              down, speed will also go down, and costs will go up."
              <span className="mt-4 block text-neutral-900">
                <span className="font-bold">- Stephen M.R. Covey,</span> The Speed of Trust
              </span>
            </blockquote>
          </div>
        </div>

        <div className="bg-[#f3f3f3] px-3 sm:px-20 py-8">
          <h3 className="mb-4 text-[30px] font-bold leading-tight text-[#ff0000] md:text-[42px] mt-3">
            The 5 Waves How VRT Operates
          </h3>

          <div className="grid grid-cols-1 border border-[#ead9db] sm:grid-cols-2 lg:grid-cols-5">
            {waves.map((wave, index) => (
              <button
                key={wave.title}
                type="button"
                onClick={() => setActiveWave(index)}
                className={`min-h-[86px] whitespace-pre-line border-b border-r border-[#ead9db] px-6 py-3 text-center text-[14px] font-semibold leading-[1.2] transition-colors last:border-r-0 lg:border-b-0 md:text-[17px] ${
                  activeWave === index
                    ? "bg-[#ff0000] text-white"
                    : "bg-[#f8e7ea] text-[#ff2a2a] hover:bg-[#fbeef0]"
                }`}
              >
                {(() => {
                  const { waveLabel, trustLabel } = getWaveParts(wave.title);
                  return (
                    <>
                      <span className="block">{waveLabel}</span>
                      <span className="block">{trustLabel}</span>
                    </>
                  );
                })()}
              </button>
            ))}
          </div>

          <div className="border border-t-0 border-[#ead9db] bg-[#f8e7ea] p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
              <div className="lg:pr-3">
                <h4 className="text-[16px] font-bold text-neutral-900 md:text-[33px]">
                  {selectedWave.title}
                </h4>
                <div className="mt-3 flex justify-center lg:hidden">
                  <img
                    src={selectedWave.image}
                    alt="Trust wave illustration"
                    className="h-auto w-full max-w-[250px] object-contain md:max-w-[320px]"
                  />
                </div>
                <p className="mt-2 text-[16px] font-semibold leading-snug text-neutral-900 md:text-[25px]">
                  {selectedWave.headline}
                </p>
                <p className="mt-3 text-[17px] leading-[1.5] text-neutral-800 md:text-[18px]">
                  {selectedWave.body}
                </p>
              </div>

              <div className="hidden h-full items-center justify-center lg:flex lg:justify-end">
                <img
                  src={selectedWave.image}
                  alt="Trust wave illustration"
                  className="h-full w-full max-w-[390px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBenefits;
