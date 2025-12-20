"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TestimonialSection = ({
  badgeText = "Join Us",
  title = "Why You Should Join",
  subtitle = "Hear from Past Participants",
  testimonials = [

    {
      name: "Gary J. Kopczyk",
      quote:
        "Raj is a tremendous asset and contributor to any company that taps into his experience with human capital and principles of Lean Six Sigma.I was fortunate to have worked closely with Raj including my first ‘value stream mapping’ event and learned tremendously from his experience and practical application of his knowledge.An invaluable experience and time well spent with Raj for me and our OpEx team.",
      rating: 5,
    },
    {
      name: "Oscar Martinez",
      quote:
        "From organizational analysis or transformation implementation to building in organic self-driving culture to support changes, Raj provides a significant advantage in successfully meeting business objectives. I am fortunate to have a mentor who offers a wealth of industry knowledge and the patience to teach it. As a CLSSMBB, he mentored a team of BB’s and BB projects and was always available for leadership and support to our teams. Raj led our team through analysis, design, and rollout of a companywide Lean Six sigma transformation across 83 sites nationwide. The project exceeded all expectations including an obvious shift in business culture and buy in. I am honored to recommend Raj with high regard as a ‘go to’ team member, business partner, and/or mentor for any institution.",
      rating: 5,
    },
    {
      name: "Mersea Kidan",
      quote:
        "I had the opportunity to work with Raj when he consulted Universal Hospital Services(UHS), on the company’s operational excellence venture.I found Raj to be very savvy in helping companies set operational excellence strategies.He guided us to focus on the right things namely; culture and strategic alignment besides Lean Six sigma tools and systems.Raj’s wealth of technical knowledge and ability to connect with people from the executives to field workers make him an exceptional coach.The impact of his help was in-valuable.",
      rating: 5,
    },
    {
      name: "Laura Brown",
      quote:
        "Raj is an outstanding executive coach and mentor, and an astute business enabler and strategic partner.The combination of his Lean- Six Sigma Master Black Belt expertise and extensive training and certifications in the field of Organizational Effectiveness provide the perfect link between people and processes in the pursuit of business transformation and world class performance. Raj is dedicated to the success of his clients, he is results oriented, and has a laser focus on execution; his coaching and facilitation style is thought provoking, his insight spot on, and his demeanor is such that he establishes trust and confidence very quickly. It has been a pleasure working with him, and I look forward to a continued successful partnership.",
      rating: 5,
    },
  ],
}) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setAnimationStarted(true);
  }, []);

  const words = title.split(" ");

  return (
    <section
      className="z-10  pt-24 pb-32 relative"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal-on-scroll">
          <div className="text-center mb-16 max-w-3xl mx-auto space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 leading-[1.1] tracking-tighter"
                style={{ fontFamily: "ebgaramond, serif" }}
              >
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    className="word-span inline-block mr-2"
                    initial={{ opacity: 0, y: 16 }}
                    animate={
                      animationStarted
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 16 }
                    }
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
              <p className="text-2xl md:text-3xl text-zinc-400 tracking-tight font-medium"
                style={{ fontFamily: "ebgaramond, serif" }}
              >
                {subtitle}
              </p>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Tall Card */}
            <motion.div
              className="lg:col-span-5 relative overflow-hidden rounded-[2.5rem] bg-white/60 border border-white/60 p-10 shadow-xl shadow-zinc-200/40 backdrop-blur-xl transition-all hover:bg-white/80 hover:shadow-2xl hover:-translate-y-1 group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent opacity-50 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full">
                {testimonials[0] && (
                  <>
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonials[0].rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl font-light text-zinc-800 leading-relaxed mb-6 flex-grow">
                      &ldquo;{testimonials[0].quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center text-zinc-700 font-semibold text-lg">
                        {testimonials[0].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900">
                          {testimonials[0].name}
                        </div>
                        <div className="text-sm text-zinc-600">
                          {testimonials[0].role}, {testimonials[0].company}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Right Side - Grid of Smaller Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.slice(1).map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-[2.5rem] bg-white/60 border border-white/60 p-8 shadow-xl shadow-zinc-200/40 backdrop-blur-xl transition-all hover:bg-white/80 hover:shadow-2xl hover:-translate-y-1 group flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg font-light text-zinc-800 leading-relaxed mb-4 flex-grow">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center text-zinc-700 font-semibold text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">
                          {testimonial.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

