"use client";

import React from "react";

const waves = [
  {
    title: "Wave 1 - Self Trust",
    headline: "We lead with integrity and Stragey execution planning.",
    body: "At 50, one man walked away from a stable career, bet on himself, and trusted Rajesh with his vision. That trust was rewarded. Guided by VRT Management Group, LLC's 7 month strategic blueprint the right team, the right foundation, the right execution his company hit $9.9 Million in revenue and $1.3 Million in direct profit in just 24 months. They originally planned for $30 Million in three years. Rajesh's strategy rewrote that entirely now they are targeting $50 Million in 3 years and $250 Million in the next 10 years. When the right strategy meets the right belief, results don't just meet expectations they shatter them. Are you ready to rewrite your future?",
  },
  {
    title: "Wave 2 - Relationship Trust",
    headline: "We build trust by executing and maintaining it.",
    body: "Relationship Trust 18 Years from day one. Eighteen years ago, a fresh college graduate took over his mother's $3 Million company and chose to trust VRT Management Group, LLC. We treated his vision like our own. Today, that company is a thriving $28 Million organisation and they are still with us. Not because of obligation. Because of trust. Because when you grow together, you never walk away from each other. At VRT Management Group, LLC, once a client, always a client. That is not a tagline. That is 18 years of proof. Your 45-minute complimentary session is diagnostic with Rajesh Tedla himself helps you to understand.",
  },
  {
    title: "Wave 3 - Organizational Trust",
    headline:
      "We build systems that outlive our involvement. The goal is a business that runs without you in every conversation. We install alignment, not dependency.",
    body: "Organisational Trust From $30 Million to a Billion Dollar Legacy. Twelve years ago, an American company came to VRT Management Group, LLC with $30 Million and a desire to grow. Stage by stage, strategy by strategy, Rajesh guided them until $30 Million became $330 Million in America alone. Then Rajesh saw the next opportunity, global expansion. That single vision changed everything. Today, that same organisation holds a combined wealth exceeding a billion dollars across multiple countries. Every stage had a different challenge. Every stage had a different strategy. But one thing never changed, their trust in VRT Management Group, LLC. From $30 Million to a Billion Dollar legacy. Are you ready for your next stage?",
  },
  {
    title: "Wave 4 - Market Trust",
    headline:
      "Our clients' growth is our reputation 130% revenue growth. Leadership alignment. Clarity like never before. These aren't claims, they're client quotes.",
    body: "Market Trust The COVID Test. When COVID hit, businesses collapsed and entrepreneurs panicked. In that same moment, VRT Management Group, LLC doubled their prices and not a single client left. They paid willingly. Because they had lived the results. They knew the value they received would always outweigh the price they paid. That moment during COVID wasn't just a business decision, it was proof. Proof that when your value is real, price becomes irrelevant and relationships become unbreakable. At VRT Management Group, LLC, we don't just serve clients, we stand beside them through every season and every storm. That is the trust we have earned. That is the standard we live by.",
  },
  {
    title: "Wave 5 - Societal Trust",
    headline:
      "We believe entrepreneurs change the world. Every thriving business creates jobs, opportunities, and community. That's why this work matters beyond revenue.",
    body: "At VRT Management Group, LLC, we believe entrepreneurship is one of the greatest forces for societal change. Every business we help scale creates jobs, strengthens families, builds communities, and inspires future leaders. This is why our work goes beyond revenue and profitability. We are committed to helping entrepreneurs build legacies that outlast market cycles and benefit society at large.",
  },
];

const TrustBenefits = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff6f6] to-white py-16 ">
       <p className="mb-8 text-3xl font-bold text-center  text-[#DC2626]">
            How Our Customers Gained Benefit
          </p>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-[0_14px_40px_rgba(220,38,38,0.10)] sm:p-8 lg:p-10">
         
          <h2 className="text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl md:text-4xl">
            Trust is the only real currency in business
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-neutral-700 md:text-lg">
            Every system we build, every framework we install, every decision we
            help you make is grounded in one principle: when trust goes up, costs
            go down, and speed goes up. Everything else follows.
          </p>

          <blockquote className="mt-6 rounded-2xl border-l-4 border-[#DC2626] bg-[#fff1f1] px-5 py-4 text-sm leading-relaxed text-neutral-800 md:text-base">
            "Trust always affects two outcomes - speed and cost. When trust goes
            down, speed will also go down, and costs will go up."
            <span className="mt-2 block text-sm font-semibold text-[#B91C1C]">
              - Stephen M.R. Covey, The Speed of Trust
            </span>
          </blockquote>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold text-neutral-900 md:text-2xl">
            The 5 Waves How VRT Operates
          </h3>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {waves.map((wave, idx) => (
              <article
                key={wave.title}
                className={`h-full rounded-2xl border bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 ${
                  idx === 4
                    ? "md:col-span-2 border-red-100 hover:shadow-[0_16px_30px_rgba(220,38,38,0.14)]"
                    : "border-red-100 hover:shadow-[0_16px_30px_rgba(220,38,38,0.14)]"
                }`}
              >
                <h4 className="text-base font-semibold text-[#DC2626] md:text-lg">
                  {wave.title}
                </h4>
                {wave.headline ? (
                  <p className="mt-3 rounded-xl border border-[#fecaca] bg-[#fff1f1] px-4 py-3 text-sm font-semibold leading-relaxed text-[#B91C1C] md:text-base">
                    {wave.headline}
                  </p>
                ) : null}
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 md:text-[15px]">
                  {wave.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBenefits;
