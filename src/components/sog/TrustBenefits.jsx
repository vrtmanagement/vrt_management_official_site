"use client";

import React from "react";

const waves = [
  {
    title: "Wave 1 - Self Trust",
    headline: "We lead with integrity and Stragey execution planning.",
    body: "At VRT Management LLC, we don't just consult, we trust in ourselves and in our clients before they believe in themselves. When a 55-year-old professional left his career to build a company from zero, Rajesh's strategic blueprint transformed his entire future. A precise 7-month plan, the right team, the right execution, and in just 24 months, the company hit $9.9 Million in revenue and $1.3 Million in direct profit. They originally aimed for $10 Million in three years. Our streamlined strategy and execution rewrote that vision entirely, now they are on track for $50 Million in 3 years and $250 Million in the next 10 years. When we believe in your potential, when we commit to your vision, and when strategy meets execution, the results don't just meet expectations, they shatter them. This is not just one client's story. This is what we do. Are you ready to rewrite your future?",
  },
  {
    title: "Wave 2 - Relationship Trust",
    headline: "We build trust by executing and maintaining it.",
    body: "Some partnerships don't just change a business, they change a legacy. Eighteen years ago, our first and most trusted client, a young college graduate took over his mother's $3 Million company with nothing but ambition and uncertainty. He chose to trust VRT Management LLC with his vision. We chose to treat that vision like our own. Together, we built the strategy, assembled the right foundation, and drove every stage of growth, until that $3 Million company became a thriving $28 Million organisation. And here is what speaks louder than any number, eighteen years later, it is still with us. Not because of obligation. Because of trust. Because real growth creates an unbreakable bond. At VRT Management LLC, we don't just deliver results and move on. We become the silent force behind your growth, your decisions, and your legacy for as long as it takes. Once a client, always a client. That is not a tagline. That is 18 years of proof. Are you ready to build a relationship that lasts, and a business that outlasts everything? Your 45-minute complimentary session is diagnostic with Rajesh Tedla himself helps you to understand.",
  },
  {
    title: "Wave 3 - Organizational Trust",
    headline:
      "We build systems that outlive our involvement. The goal is a business that runs without you in every conversation. We install alignment, not dependency.",
    body: "Twelve years ago, a successful American company walked into VRT Management LLC with $30 Million in revenue and a desire to grow. At that stage, the focus was simple, strengthen the structure, sharpen the strategy, and build the foundation for scalable growth. Rajesh did exactly that. Stage by stage, decision by decision, the company grew, until $30 Million became $330 Million in the American market alone. But the story didn't end there. At the next stage, they were expanding beyond American borders, entering international markets, and building strategic collaborations across multiple countries. That single vision unlocked an entirely new chapter. Today, that organisation carries a combined wealth exceeding a billion dollars across multiple countries worldwide. Every stage had a different challenge. Every stage had a different strategy. But one thing remained constant, the trust they placed in Rajesh and VRT Management LLC to lead them forward. From $30 Million to $330 Million to a Billion-Dollar global legacy, one relationship, one advisor, one unwavering commitment to growth. That is what we do. Are you ready for your next stage?",
  },
  {
    title: "Wave 4 - Market Trust",
    headline:
      "Our clients' growth is our reputation. 130% revenue growth. Leadership alignment. Clarity like never before. These aren't claims, they're client quotes.",
    body: "When COVID hit, businesses collapsed and confidence disappeared overnight. Every entrepreneur was paralysed, cutting costs, reducing services, and simply trying to survive. In that same moment, VRT Management LLC doubled their prices. And not a single client left. They didn't just stay, they paid willingly, confidently, and without hesitation. Because they had seen the results. They had lived the transformation. They knew that whatever Rajesh charges, the value delivered will always be worth more. That is not loyalty built through discounts or desperation, that is trust built through years of showing up, over-delivering, and genuinely putting every client's success above everything else. In the middle of a global crisis, our clients chose us. That single moment speaks louder than any testimonial ever could. At VRT Management LLC, we don't just serve clients, we stand beside them through every season, every challenge, and every breakthrough. Because when you truly deliver value, price becomes irrelevant and relationships become unbreakable. That is the trust we have earned. That is the standard we live by every single day.",
  },
  {
    title: "Wave 5 - Societal Trust",
    body: "We believe entrepreneurs change the world. Every thriving business creates jobs, opportunities, and stronger communities. That is why this work matters beyond revenue.",
  },
];

const TrustBenefits = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff6f6] to-white py-16 md:py-20">
       <p className="mb-3 text-3xl font-bold text-center  text-[#DC2626]">
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
            The 5 Waves - How VRT Operates
          </h3>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {waves.map((wave, idx) => (
              <article
                key={wave.title}
                className={`h-full rounded-2xl border bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 ${
                  idx === 0
                    ? "md:col-span-2 border-[#fecaca] bg-gradient-to-br from-[#fff7f7] via-white to-[#fff1f1] p-6 md:p-7 hover:shadow-[0_20px_38px_rgba(220,38,38,0.18)]"
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
