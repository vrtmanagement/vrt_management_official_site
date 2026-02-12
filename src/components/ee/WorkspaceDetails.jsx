"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WorkspaceDetails = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

      const receiveItems = [
      {
      title: (
        <>
         Your TriMetrix® HD Leadership Report
        </>
      ),
      description: (
        <>
          Behaviors, 12 Driving Forces<sup>©</sup>, acumen, and competencies to spotlight your strengths and blind spots.
        </>
      ),
    },

    // {
    //   title: "EntrepreneurExcellence™ Masterclass",
    //   description: "Learn the EntrepreneurExcellence™ model, see how top performers are benchmarked, and get your personalized GAP analysis with practical tips to close gaps.",
    //   value: "Starting April 1, 2026,",
    //   date: "EntrepreneurExcellence™ will cost $2,500",
    // },
    {
  title: (
    <>
      EntrepreneurExcellence<sup>©</sup> Masterclass
    </>
  ),
  description: (
    <>
      Learn the EntrepreneurExcellence<sup>©</sup> model, see how top performers are benchmarked,
      and get your personalized GAP analysis with practical tips to close gaps.
    </>
  ),
  value: "Starting April 1, 2026,",
  date: (
    <>
      EntrepreneurExcellence<sup>©</sup> will cost $2,500
    </>
  ),
},

    {
      title: "Benchmark Insights",
      description: "Where your profile aligns with the success blueprint and where to focus next.",
    },
  ];

  const howItWorksSteps = [
    {
      number: "1",
      text: "5-minute eligibility survey (confirm basic criteria).",
    },
    {
      number: "2",
      text: "Complete the TriMetrix® HD assessment (you'll get a secure link).",
    },
    {
      number: "3",
      text: "You will receive a comprehensive 75-page psychometric profile and productivity tips. (Make sure you use your work email address to avoid going to SPAM.)",
    },
    {
      number: "4",
      text: "Attend the Entrepreneur EDGE Masterclass and receive your results, GAP analysis, and next-step coaching tips. (Scheduled for December 2025 and Jan 2026)",
    },
  ];

  const whoShouldApply = [
    "Founders/owners of SMBs (any industry) committed to growth",
    "Senior leaders in entrepreneur-led companies",
    "Operators preparing for scale or transformation",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white  px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Why This Matters Section */}
          {/* <motion.div variants={itemVariants} className="mb-12 lg:mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-red-50 via-white to-gray-50 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg border border-red-100">
                <h2
                  style={{ fontFamily: 'ebgaramond, serif' }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 text-center"
                >
                  Why this matters
                </h2>
                <div className="h-px bg-red-600 w-20 mb-6 mx-auto" />
                <p
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  className="text-base sm:text-lg text-gray-800 leading-relaxed"
                >
                  Working with {" "}
                  <span className="font-bold text-red-600">1,420+ entrepreneurs worldwide</span>, I’ve seen a clear pattern: the most successful founders/entrepreneurs share a distinct set of measurable traits and deploy them deliberately. This practical research will validate those traits, create a
                  <span className="font-bold text-black"> benchmark for success,</span> and pair it with training that shows you how to use your blueprint.
                </p>
                <p
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  className="text-base sm:text-lg text-gray-800 leading-relaxed text-center pt-2"
                >  The outcome: a repeatable process to assist <span className="font-bold text-black">
                    entrepreneurs in leading smarter and scaling profitably, inspiring success stories across the globe.</span>
                </p>
              </div>
            </div>
          </motion.div> */}

          {/* What You'll Receive Section (image cards from /ee/section3) */}
          <motion.div variants={itemVariants} className="mb-12 lg:mb-16">
            <div className="text-center mb-12">
              <h2
                style={{ fontFamily: 'ebgaramond, serif' }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3"
              >
                What you'll receive
              </h2>
              <p
                style={{ fontFamily: 'Inter, sans-serif' }}
                className="text-lg sm:text-xl text-red-600 font-semibold"
              >
                (Complimentary for all research participants)
              </p>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {receiveItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="transform transition duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl bg-white border border-red-50 overflow-hidden"
                >
                  <div className="overflow-hidden h-44 sm:h-56 lg:h-44">
                    <Image
                      src={`/ee/section3/image${index + 1}.jpeg`}
                      alt={item.title}
                      width={720}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className="text-lg sm:text-xl font-bold text-black mb-3"
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4"
                    >
                      {item.description}
                    </p>

                    {item.value && item.date && (
                      <div className="mt-4">
                        <p
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          className="text-base font-bold text-red-600 mb-1"
                        >
                          {item.value}
                        </p>
                        <p
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          className="text-sm font-semibold text-gray-700"
                        >
                          {item.date}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Red Separator Line */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-red-600 w-full mb-12 lg:mb-16"
          />

          {/* How It Works Section (alternating boxed layout with centered steps) */}
          <motion.div variants={itemVariants} className="mb-12 lg:mb-16">
            <h2
              style={{ fontFamily: 'ebgaramond, serif' }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 text-center"
            >
              How it works{" "}
              <span className="text-red-600">(4 simple steps)</span>
            </h2>

            <div className="relative max-w-5xl mx-auto">
              <div className="space-y-8">
                {howItWorksSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-3 items-center gap-4"
                  >
                    {/* Left box (shows on even indexes) */}
                    <div className="flex justify-start md:justify-end">
                      {index % 2 === 0 ? (
                        <div className="hidden md:block w-80 bg-red-50 border border-red-100 rounded-lg p-6">
                          <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-base text-gray-800 leading-relaxed">
                            {step.text.includes("5-minute") ? (
                              <><span className="font-bold text-black">5-minute eligibility survey</span>{step.text.split("5-minute eligibility survey")[1]}</>
                            ) : step.text.includes("TriMetrix® HD") ? (
                              <><span>Complete the <span className="font-bold text-black">TriMetrix® HD assessment</span>{step.text.split("TriMetrix® HD assessment")[1]}</span></>
                            ) : step.text.includes("75-page") ? (
                              <><span>You will receive a comprehensive <span className="font-bold text-black">75-page psychometric profile and productivity tips</span>.{step.text.split("75-page psychometric profile and productivity tips.")[1]}</span></>
                            ) : (
                              <><span>Attend the <span className="font-bold text-black">EntrepreneurExcellence<sup>©</sup> Masterclass</span>{step.text.split("Entrepreneur EDGE Masterclass")[1]}</span></>
                            )}
                          </p>
                        </div>
                      ) : (
                        <div className="hidden md:block w-80" />
                      )}
                    </div>

                    {/* Center: arrow + step circle */}
                    <div className="flex items-center justify-center gap-4">
                      {/* arrow - mirror for left direction when needed */}
                      <div className="hidden md:block">
                        {index % 2 === 0 ? (
                          <Image src="/ee/section4/forward icon.png" alt="arrow-left" width={36} height={36} className="transform rotate-180 opacity-80" />
                        ) : (
                          <Image src="/ee/section4/forward icon.png" alt="arrow-right" width={36} height={36} className="opacity-0" />
                        )}
                      </div>

                      <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-2xl font-bold shadow-md">
                        {step.number}
                      </div>

                      <div className="hidden md:block">
                        {index % 2 === 0 ? (
                          <Image src="/ee/section4/forward icon.png" alt="arrow-right" width={36} height={36} className="opacity-0" />
                        ) : (
                          <Image src="/ee/section4/forward icon.png" alt="arrow-right" width={36} height={36} className="opacity-80" />
                        )}
                      </div>
                    </div>

                    {/* Right box (shows on odd indexes) */}
                    <div className="flex justify-end md:justify-start">
                      {index % 2 === 1 ? (
                        <div className="hidden md:block w-80 bg-red-50 border border-red-100 rounded-lg p-6">
                          <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-base text-gray-800 leading-relaxed">
                            {step.text.includes("5-minute") ? (
                              <><span className="font-bold text-black">5-minute eligibility survey</span>{step.text.split("5-minute eligibility survey")[1]}</>
                            ) : step.text.includes("TriMetrix® HD") ? (
                              <><span>Complete the <span className="font-bold text-black">TriMetrix® HD assessment</span>{step.text.split("TriMetrix® HD assessment")[1]}</span></>
                            ) : step.text.includes("75-page") ? (
                              <><span>You will receive a comprehensive <span className="font-bold text-black">75-page psychometric profile and productivity tips</span>.{step.text.split("75-page psychometric profile and productivity tips.")[1]}</span></>
                            ) : (
                              <><span>Attend the <span className="font-bold text-black">EntrepreneurExcellence<sup>©</sup> Masterclass</span>{step.text.split("EntrepreneurExcellence™ Masterclass")[1]}</span></>
                            )}
                          </p>
                        </div>
                      ) : (
                        <div className="hidden md:block w-80" />
                      )}
                    </div>

                    {/* Mobile stacked layout: show the box and circle inline */}
                    <div className="md:hidden col-span-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">{step.number}</div>
                        <div className="flex-1 bg-red-50 border border-red-100 rounded-lg p-4">
                          <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-sm text-gray-800 leading-relaxed">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="mb-12 lg:mb-16 text-center">
            <Link
              href="https://www.surveymonkey.com/r/New_Edge"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Start the 5-minute eligibility survey
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>

          {/* Who Should Apply Section (full width, image overflow top) */}
          <motion.div variants={itemVariants} className=" w-screen relative left-[calc(-50vw+50%)] pt-20">
            <motion.div
              variants={itemVariants}
              className="bg-red-100 relative h-80 sm:h-96 lg:h-[450px] overflow-visible shadow-lg border-t border-b border-red-200 flex items-center"
            >
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-8">
                  <div className="z-10 relative ml-40">
                    <h3
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      className="text-xl sm:text-2xl lg:text-2xl font-semibold text-red-600 mb-2"
                    >
                      Who should apply
                    </h3>
                    <h2
                      style={{ fontFamily: 'ebgaramond, serif' }}
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 lg:mb-6"
                    >
                      Ideal Participants
                    </h2>
                    <ul className="space-y-3 max-w-xl text-sm sm:text-base mb-6">
                      {whoShouldApply.map((item, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 mt-1.5">
                            <div className="w-2 h-2 bg-red-600 rounded-full" />
                          </div>
                          <p
                            style={{ fontFamily: 'Inter, sans-serif' }}
                            className="text-gray-700"
                          >
                            {item}
                          </p>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-4">
                      <a
                        href="https://www.surveymonkey.com/r/New_Edge"
                        className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition hover:bg-red-500"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Apply now
                      </a>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute right-0 -top-16  z-30">
                    <Image
                      src="/ee/section4/girl1.png"
                      alt="who-apply"
                      width={600}
                      height={200}
                      className="object-contain max-h-[512px]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkspaceDetails;
