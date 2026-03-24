'use client';

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import LoadingButton from "@/components/ui/LoadingButton"
import TrustBenefits from "@/components/sog/TrustBenefits";


const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();
  const whyRef = useRef(null);
  const [whyInView, setWhyInView] = useState(false);
  {/* deploy trigger */}


  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Reveal "Why Entrepreneurs" section on scroll
  useEffect(() => {
    if (!whyRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(whyRef.current);
    return () => observer.disconnect();
  }, []);

  // Reuse the navigation behavior of the original "Take Your Assessment" link
  const handleTakeAssessment = () => {
    router.push("/stages-of-growth-form");
  };

  // Left sliding side cards are rendered conditionally (lg+)

  return (
    <>
      {/* Original section commented out as requested, preserving the
          "Take Your Assessment" button and its structure */}
      {/*
      ... original hero section ...
      */}

      {/* New section from sog/frontend/src/components/HeroSection.js */}
      <section className="relative min-h-[700px] overflow-hidden transition-all duration-700 ease-out">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/background.png"
            alt="Business team background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Global dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Blur effect: starts from left, goes up to 50%, then fades out smoothly */}
        <div
          className="absolute inset-y-0 left-0 w-[50%]"
          style={{
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            maskImage:
              "linear-gradient(to right, black 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 40%, transparent 100%)",
          }}
        />

        {/* Additional dark gradient for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 50%, transparent 60%)",
          }}
        />

        <div className="relative mx-auto flex max-w-7xl items-center px-6 py-20 min-h-[700px]">
          <div className="max-w-2xl space-y-6 text-white transition-all duration-700 ease-out hover:translate-y-[-4px]">
            <p className="text-2xl w-3xl leading-relaxed text-white/90"> For founders, Entrepreneurs and CEOs with 20 to 500 employees</p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)] w-5xl">

 Is it in the right <span className=" ">Business stage?</span> 
<p className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl w-5xl font-bold">Are you running the right <span className=" ">playbook for it?</span></p>
            </h1>
            <p className="text-lg leading-relaxed text-white/90">
              {/* VRT Management partners with entrepreneurs and organizations to
              build clarity, structure, and scalable growth through proven
              management frameworks. */}
             
            </p>
            <LoadingButton
                href="/stages-of-growth-form"
                spinnerColor="text-white"
                className="cursor-pointer rounded-lg bg-[#DC2626] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-black/40 transition-all duration-300 hover:bg-[#B91C1C] hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Book Now
              </LoadingButton>
          </div>
        </div>
      </section>

      {/* About section copied from sog/frontend/src/components/AboutSection.js */}
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 lg:flex-row lg:items-start">
          {/* Left Section - Composite Image (desktop only) */}
          <div className="relative hidden w-full lg:block lg:w-1/2 transition-transform duration-500 ease-out hover:-translate-y-1">
            {/* Main rounded rectangular container */}
            <div className="relative h-[400px] w-full overflow-visible">
              {/* Base image - aboutUs_1 (man in suit) - smaller size with border radius */}
              <div className="absolute inset-0 scale-90 overflow-hidden rounded-3xl">
                <Image
                  src="/about/aboutUs_1.png"
                  alt="Professional business portrait"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Overlay image - aboutUs_2 positioned to align with first image's right edge at bottom -30 with top border radius */}
              <div
                className="absolute bottom-[-30px] h-[60%] w-[50%] overflow-hidden"
                style={{
                  right: "5%",
                  borderTopLeftRadius: "1.5rem",
                  borderTopRightRadius: "1.5rem",
                  borderBottomLeftRadius: "1.5rem",
                  borderBottomRightRadius: "1.5rem",
                }}
              >
                <Image
                  src="/about/aboutUs_2.png"
                  alt="Business growth and teamwork overlay"
                  fill
                  className="object-contain object-right-bottom"
                  style={{
                    mixBlendMode: "normal",
                    borderTopLeftRadius: "1.5rem",
                    borderTopRightRadius: "1.5rem",
                    borderBottomLeftRadius: "1.5rem",
                    borderBottomRightRadius: "1.5rem",
                  }}
                />
              </div>

              {/* Decorative dots pattern inside image section */}
              <div
                className="absolute"
                style={{
                  left: "10%",
                  bottom: "-8%",
                }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-gray-300"
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-gray-300"
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-gray-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="w-full space-y-5 lg:w-1/2 lg:pl-8">
            {/* <h3 className="text-base font-bold text-gray-900">About Us</h3> */}
            <h2 className="text-3xl font-bold leading-tight text-[#DC2626] md:text-4xl w-2xl">
            Is your Business growing? So why does it feel like you're losing control?
            </h2>

            {/* Mobile & tablet composite image placed between heading and text */}
            <div className="relative mt-6 h-64 w-full overflow-visible lg:hidden">
              {/* Base image */}
              <div className="absolute inset-0 scale-90 overflow-hidden rounded-3xl">
                <Image
                  src="/about/aboutUs_1.png"
                  alt="Professional business portrait"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Overlay image */}
              <div
                className="absolute bottom-[-20px] h-[55%] w-[55%] overflow-hidden"
                style={{
                  right: "5%",
                  borderTopLeftRadius: "1.5rem",
                  borderTopRightRadius: "1.5rem",
                  borderBottomLeftRadius: "1.5rem",
                  borderBottomRightRadius: "1.5rem",
                }}
              >
                <Image
                  src="/about/aboutUs_2.png"
                  alt="Business growth and teamwork overlay"
                  fill
                  className="object-contain object-right-bottom"
                  style={{
                    mixBlendMode: "normal",
                    borderTopLeftRadius: "1.5rem",
                    borderTopRightRadius: "1.5rem",
                    borderBottomLeftRadius: "1.5rem",
                    borderBottomRightRadius: "1.5rem",
                  }}
                />
              </div>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-gray-800">
              <p>
              You built something real. But somewhere between hiring your 20th employee and trying to lead your 50th, the rules changed, and nobody told you. The strategies that once made you successful are now quietly working against you. Most entrepreneurs do not fail because they lack passion. They fail because they execute the wrong strategy at the wrong stage.
              </p>
              <p>
              What if the chaos, the misalignment, and the feeling that your team isn't fully with you, isn't a leadership failure? What if it's simply a predictable symptom of the stage you're in, one that has a precise, proven solution?

              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleTakeAssessment}
                className="cursor-pointer group inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
              >
                See if this sounds like you
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B132B] py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-6">
            <div className="space-y-1">
              <p className="text-3xl font-bold text-[#DC2626] md:text-4xl">50%</p>
              <p className="text-sm leading-relaxed text-red-200">
                of businesses fail in their first year without stage-fit execution
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-[#DC2626] md:text-4xl">80%</p>
              <p className="text-sm leading-relaxed text-red-200">
                don&apos;t survive past five years due to wrong systems, wrong timing
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-[#DC2626] md:text-4xl">130%</p>
              <p className="text-sm leading-relaxed text-red-200">
                average revenue growth, client-reported with stage-aligned playbooks
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-[#DC2626] md:text-4xl">1,424+</p>
              <p className="text-sm leading-relaxed text-red-200">
                businesses transformed since 1987 across industries and geographies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "Why Entrepreneurs" section with scroll-in animation */}
      <section
        ref={whyRef}
        className={`bg-white py-16 transition-all duration-700 ease-out ${
          whyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-3 text-center text-2xl font-semibold leading-snug text-neutral-900 md:text-[28px]">
            {/* Why Do Some Entrepreneurs Succeed */}
            You're not struggling because you're bad at business.

            <br />
            {/* While Others Struggle? */}
            You're struggling because growth changes the game at every level, and most leaders are playing yesterday's game on today's field. 
          </h2>
          <p className="mb-10 text-center text-lg leading-relaxed text-neutral-900">The real culprit is a mismatch between your current growth stage and what you're doing. Here's what we see every day.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "I can't step away. Everything breaks when I do.",
                body: " You hired people you trust, but decisions still end up on your desk. Your team waits for your answer instead of making the call themselves. I'm working harder than when I had 5 employees. How is that possible?'",
                icon: "/section3/target.png",
              },
              {
                title: "We're growing fast, and it's breaking us.",
                body: "New clients, new hires, new fires, every week. You're adding people, but the chaos isn't shrinking. Growth was supposed to feel like success. It doesn't. I thought getting to this size would change things. It just made everything louder.'",
                icon: "/section3/idea.png",
              },
              {
                title: "Revenue keeps climbing. Profit doesn't follow.",
                body: " You're doing more business than ever, but margins are thin, and cash feels tight. More revenue just creates more cost. We're busy fools. Lots of activity, not enough results.",
                icon: "/section3/system.png",
              },
              {
                title: "I'm the only one who seems to care about the big picture.",
                body: "You've shared the vision. You've had the all-hands. But decisions keep getting made that don't align, and culture is drifting quietly, steadily. I can feel the company becoming something I didn't intend to build.",
                icon: "/section3/wealth.png",
              },
              {
                title: "I know what we need to become. I just can't get there.",
                body: "Competitors have noticed you. The stakes are higher. You're thinking 3 years ahead, but still drowning in today's fires. I don't have the bandwidth to build the company I can clearly see.",
                icon: "/section3/cycle.png",
              },
              {
                title: "We're running on improvisation — and it's starting to show.",
                body: " What worked at 20 people doesn't work at 80. You're patching problems instead of fixing systems. The business has outgrown how it operates. We built something that works — just not at the size we've become.",
                icon: "/section3/maintainance.png",
              },
              // {
              //   title: "Inconsistent Execution",
              //   body: "Ideas alone don’t create success. Consistent execution does. Consistency separates success from struggle.",
              //   icon: "/section3/consistancy.png",
              // },
              // {
              //   title: "Ineffective Leadership",
              //   body: "Leadership gaps create confusion. Clear direction builds confident teams and results.",
              //   icon: "/section3/leadership.png",
              // },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-500 ease-out hover:shadow-[0_18px_36px_rgba(220,38,38,0.18)] hover:-translate-y-1.5"
                style={{
                  transitionDelay: whyInView ? `${idx * 60}ms` : "0ms",
                  transform: whyInView ? "translateY(0)" : "translateY(12px)",
                  opacity: whyInView ? 1 : 0,
                }}
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ff8888] transition-all duration-300 group-hover:bg-[#ff7070] group-hover:scale-110">
                  <div className="relative h-8 w-8">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="mb-2 text-[15px] font-semibold text-[#DC2626] transition-colors duration-300 group-hover:text-[#B91C1C]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TrustBenefits />
    </>
  );
};

export default Hero;