'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LoadingButton from "@/components/ui/LoadingButton"


// New stages data from sog/frontend/src/components/GrowthStagesOverview.js
const stages = [
  {
    id: "1/7",
    title: "Stage 1: Startup Phase",
    employees: "1-10 employees",
    focus: [
      "Prove the offer and generate enough revenue to survive the first 12–24 months.",
      "Move fast over perfect: ship, learn, iterate.",
      "Keep eyes on daily cash and a simple sales → delivery → cash loop.",
    ],
  },
  {
    id: "2/7",
    title: "Stage 2: Ramp-Up",
    employees: "10-19 employees",
    focus: [
      "Shift from survival to growth: support strong sales and generate profit.",
      "Start dividing responsibilities: founder can’t be the only decision-maker.",
      "Watch key indicators weekly keep cash.",
    ],
  },
  {
    id: "3/7",
    title: "Stage 3: Delegation & Systems",
    employees: "20-34 employees",
    focus: [
      "Build a real supervisory layer give authority with clear roles.",
      "Win staff buy-in and define values so decisions can happen without the CEO.",
    ],
  },
  {
    id: "4/7",
    title: "Stage 4: Professionalizing Operation",
    employees: "35-57 employees",
    focus: [
      "Upgrade to “been-there” managers and professional management systems.",
      "Project/portfolio discipline and cross-team execution.",
    ],
  },
  {
    id: "5/7",
    title: "Stage 5: Integration",
    employees: "58-95 employees",
    focus: [
      "Get managers to “play well together” and operate as one firm.",
      "Standardize training and communication align plans/budgets across units.",
      "Build strength by integrating processes.",
    ],
  },
  {
    id: "6/7",
    title: "Stage 6: Strategic Growth",
    employees: "96-160 employees",
    focus: [
      "Shift from annual plans to a multi-year strategic lens add/adopt a board.",
      "Protect culture and core values while scaling formalize communication.",
      "Compete as a visible player in the market.",
    ],
  },
  {
    id: "7/7",
    title: "Stage 7: Visionary Growth",
    employees: "161-500 employees",
    focus: [
      "Re-ignite entrepreneurship: identify new opportunities, foster exploration.",
      "Build a culture that supports innovation and avoids complacency in a “cruise-liner.”",
      "Keep the CEO visible and inspiring.",
    ],
  },
];

// Top problems content for each overview stage (1/7 – 7/7)
const topProblemsById = {
  "1/7": [
    "Chaotic execution and “wearing all the hats.”",
    "Cash-flow crunch and limited capital uneven sales.",
    "Quality slips while chasing opportunity.",
  ],
  "2/7": [
    "Hiring quality staff fast enough communication gaps between sales/ops.",
    "Cash tightness during rapid growth pricing/quality control.",
    "Over-reliance on the CEO slows decisions.",
  ],
  "3/7": [
    "Staff buy-in, communication gaps, unclear values, resistance to change.",
    "Slow decisions and missed opportunities when authority isn’t delegated.",
  ],
  "4/7": [
    "Turnover rises without strong managers project delays and diagnosis issues.",
    "System gaps create rework CEO risks under-hiring to save cost.",
  ],
  "5/7": [
    "Anticipating problems across teams cost of lost expertise and knowledge silos.",
    "Competition eats scale advantages if integration lags.",
  ],
  "6/7": [
    "Staff buy-in and satisfaction onboarding/orienting new staff at scale.",
    "“Too little, too late” risk if leaders miss the larger picture.",
  ],
  "7/7": [
    "Inadequate profits from legacy lines market shifts outpace the company.",
    "Over-professionalization can crush the entrepreneurial spirit if not managed.",
  ],
};

const routineSteps = [
  {
    step: '01',
    title: 'Stage 1: Startup Phase (1-10 Employees)',
    imageSrc: '/sog/stage-one.png',
    focus: [
      'Prove the offer and generate enough revenue to survive the first 12–24 months.',
      'Move fast over perfect: ship, learn, iterate.',
      'Keep eyes on daily cash and a simple sales → delivery → cash loop. '
    ],
    keyChallenges: [
      'Chaotic execution and “wearing all the hats.”',
      'Cash-flow crunch and limited capital uneven sales.',
      'Quality slips while chasing opportunity.',
    ],
    ctaText: 'Learn more',
  },
  {
    step: '02',
    title: 'Stage 2: Ramp-Up (10-19 Employees)',
    imageSrc: '/sog/stage-two.png',
    focus: [
      'Shift from survival to growth: support higher sales and generate profit.',
      'Start dividing responsibilities founder can’t be the only decision-maker.',
      'Watch key indicators weekly keep cash from getting thin.'
    ],
    keyChallenges: [
      'Hiring quality staff fast enough communication gaps between sales/ops.',
      'Cash tightness during rapid growth pricing/quality control.',
      'Over-reliance on the CEO slows decisions.',
    ],
    ctaText: 'Learn more',
  },
  {
    step: '03',
    title: 'Stage 3: Delegation & Systems (20-34 Employees)',
    imageSrc: '/sog/stage-three.png',
    focus: [
      'Build a real supervisory layer give authority with clear roles.',
      'Win staff buy-in and define values so decisions can happen without the CEO.'
    ],
    keyChallenges: [
      'Staff buy-in, communication gaps, unclear values, resistance to change.',
      'Slow decisions and missed opportunities when authority isn’t delegated.'
    ],
    ctaText: 'Learn more',
  },
  {
    step: '04',
    title: 'Stage 4: Professionalizing Operations (35-57 Employees)',
    imageSrc: '/sog/stage-four.png',
    focus: [
      'Upgrade to “been-there” managers and professional management systems.',
      'Project/portfolio discipline and cross-team execution.',
      'Invest in training before it’s needed the company’s too big for DIY systems.'
    ],
    keyChallenges: [
      'Turnover rises without strong managers project delays and diagnosis issues.',
      'System gaps create rework CEO risks under-hiring to save cost.'
    ],
    ctaText: 'Learn more',
  },
  {
    step: '05',
    title: 'Stage 5: Integration (58-95 Employees)',
    imageSrc: '/sog/stage-five.png',
    focus: [
      'Get managers to “play well together” and operate as one firm.',
      'Standardize training and communication align plans/budgets across units.',
      'Build strength by integrating processes so right-hand knows left-hand.'
    ],
    keyChallenges: [
      'Anticipating problems across teams cost of lost expertise and knowledge silos.',
      'Competition eats scale advantages if integration lags.'
    ],
    ctaText: 'Learn more',
  },
  {
    step: '06',
    title: 'Stage 6: Strategic Growth (96-160 Employees)',
    imageSrc: '/sog/stage-six.png',
    focus: [
      'Shift from annual plans to a multi-year strategic lens add/adopt a board.',
      'Protect culture and core values while scaling formalize communication.',
      'Compete as a visible player in the market.'
    ],
    keyChallenges: [
      'Staff buy-in and satisfaction onboarding/orienting new staff at scale.',
      'Too little, too late” risk if leaders miss the larger picture.',
    ],
    ctaText: 'Learn more',
  },
  {
    step: '07',
    title: 'Stage 7: Visionary Growth (161 -500 Employees)',
    imageSrc: '/sog/stage-seven.png',
    focus: [
      'Re-ignite entrepreneurship: identify new opportunities, foster exploration, resource new plays.',
      'Build a culture that supports innovation and avoids complacency in a “cruise-liner.”',
      'Keep the CEO visible and inspiring.'
    ],
    keyChallenges: [
      'Inadequate profits from legacy lines market shifts outpace the company.',
      'Over-professionalization can crush the entrepreneurial spirit if not managed.',
    ],
    ctaText: 'Learn more',
  },
];

export function Growth() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const router = useRouter();
  const [openTopProblems, setOpenTopProblems] = useState(null);
  const overviewRef = useRef(null);
  const ctaRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [overviewInView, setOverviewInView] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);
  const [testimonialsInView, setTestimonialsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Generic helper to observe sections (no TS syntax in this JS file)
  useEffect(() => {
    const entries = [
      [overviewRef, setOverviewInView],
      [ctaRef, setCtaInView],
      [testimonialsRef, setTestimonialsInView],
    ];

    const observers = entries.map(([ref, setter]) => {
      if (!ref.current) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            obs.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(ref.current);
      return obs;
    });

    return () => {
      observers.forEach((obs) => obs && obs.disconnect());
    };
  }, []);

  const handleBookCall = () => {
    router.push('/stages-of-growth-form');
  };

  return (
    <>
      {/* Original timeline-style growth section commented out as requested */}
      {/*
      ... original timeline code ...
      */}

      {/* New overview section */}
      <section
        ref={overviewRef}
        className={`bg-[#f9fafb] py-16 transition-all duration-700 ease-out ${
          overviewInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-3 text-center text-2xl font-semibold text-[#E74C3C] md:text-[40px]">
            An Overview of the 7 Stages of Growth Framework
          </h2>
          <p className="mb-12 text-center text-sm leading-relaxed text-gray-700 md:text-[22px]">
            An introduction to our structured 7-stage growth framework, designed
            to guide businesses through every phase of development.
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {[stages.slice(0, 4), stages.slice(4)].map((columnStages, colIdx) => (
              <div key={colIdx} className="relative">
                <div className="space-y-9">
                  {columnStages.map((stage, idx) => {
                    const globalIndex = colIdx === 0 ? idx : idx + 4;
                    const stageNumber = globalIndex + 1;
                    const isLastInColumn = idx === columnStages.length - 1;
                    return (
                      <article
                        key={stage.id}
                        className="relative pl-14 transition-all duration-500 ease-out"
                        style={{
                          transitionDelay: overviewInView ? `${globalIndex * 70}ms` : "0ms",
                          transform: overviewInView ? "translateY(0)" : "translateY(12px)",
                          opacity: overviewInView ? 1 : 0,
                        }}
                      >
                        <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff4b4b] text-sm font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.22)]">
                          {stageNumber}
                        </div>
                        {!isLastInColumn ? (
                          <div className="absolute left-5 top-11 h-[calc(100%+22px)] w-[2px] bg-[#ff4b4b]" />
                        ) : null}
                        <h3 className="text-[28px] font-semibold leading-snug text-[#ff2f2f]">
                          {stage.title}
                        </h3>
                        <p className="mt-1 text-[18px] text-gray-600">{stage.employees}</p>
                        <h4 className="mt-3 text-[21px] font-semibold text-gray-900">Focus Areas:</h4>
                        <ul className="mt-1 list-disc space-y-1 pl-5 text-[17px] leading-relaxed text-gray-700">
                          {stage.focus.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <div className="mt-4 h-8" />
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA section */}
      <section
        ref={ctaRef}
        className={`bg-white group transition-all duration-700 ease-out ${
          ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* <div className="relative flex h-[580px] w-full overflow-hidden md:h-[620px] transition-transform duration-500 ease-out group-hover:scale-[1.01]"> */}
        <div className="relative flex h-[580px] w-full overflow-hidden md:h-[620px]">

          <div className="absolute inset-0 overflow-hidden">
<Image
  src="/section5/BottomImage.png"
  alt="Business leaders reviewing strategy"
  fill
  className="object-cover blur-[2px] transition-transform duration-500 ease-out group-hover:scale-105"
  priority
/>


          </div>
          {/* deploy trigger */}


          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.72) 35%, rgba(0,0,0,0.48) 65%, rgba(0,0,0,0.28) 100%)",
            }}
          />

          <div className="pointer-events-none absolute right-0 top-[-18%] h-[135%] w-[55%] overflow-hidden hidden lg:block">
           {/* <Image
  src="/section5/topImage.png"
  alt="Team collaborating in strategy session"
  fill
  className="object-cover object-right"
 /> */}
          </div>

          <div className="relative z-10 flex h-full w-full items-center px-4 md:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-[1200px] rounded-[28px]  p-8  md:p-12">
              <div className="mx-auto max-w-4xl text-center text-white transition-all duration-500 ease-out group-hover:-translate-y-1">
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.01em] md:text-5xl">
                  Ready to create your next business success?
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-[17px] leading-relaxed text-white/90 md:text-xl">
                  Our 45-minute strategy session offers focused, expert guidance to
                  help you make informed decisions, streamline operations, and plan
                  sustainable business growth.
                </p>
                <LoadingButton
                  href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1"
                  external
                  spinnerColor="text-gray-900"
                  className="mt-8 inline-flex w-fit cursor-pointer items-center justify-center rounded-full bg-white px-12 py-3.5 text-base font-semibold text-gray-900 shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition hover:bg-gray-100"
                >
                  Book Your Call
                </LoadingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <div
        ref={testimonialsRef}
        className={`transition-all duration-700 ease-out ${
          testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <TestimonialsSection />
      </div>
    </>
  );
}

function TimelineStep({
  step,
  index,
  isVisible,
  isEven,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const stepRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );
    if (stepRef.current) observer.observe(stepRef.current);
    return () => observer.disconnect();
  }, []);
  const titleMatch = typeof step.title === 'string'
    ? step.title.match(/^(.*?)(\s*\(([^)]+)\))\s*$/)
    : null;
  const titleMain = titleMatch ? titleMatch[1].trim() : step.title;
  const titleSuffix = titleMatch ? `(${titleMatch[3]})` : null;

  return (
    <div
      ref={stepRef}
      className={`relative transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0 translate-x-0' : isEven ? 'opacity-0 translate-y-4 -translate-x-8' : 'opacity-0 translate-y-4 translate-x-8'
        }`}
      style={{
        transitionDelay: `${index * 140}ms`,
      }}
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
        {/* Text first on mobile */}
        <div
          className={`${isEven ? 'lg:order-2 lg:pl-16' : 'lg:order-1 lg:pr-16'
            } transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : isEven ? 'opacity-0 translate-x-6' : 'opacity-0 -translate-x-6'}`}
          style={{ transitionDelay: `${index * 140 + 80}ms` }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            <div className="pt-6">
              <p
                className={`text-sm text-red-600 font-semibold mb-3 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-90'
                  }`}
              >
                {step.step} / 7
              </p>

              <h3
                className={`text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 transition-all duration-300 md:whitespace-normal lg:whitespace-nowrap ${isHovered ? 'translate-x-1' : ''
                  }`}
              >
                <span className="block" style={{ fontFamily: 'Lora, serif' }}>{titleMain}</span>
                {titleSuffix && (
                  <span className="block text-base md:text-lg font-semibold text-neutral-800 mt-1" style={{ fontFamily: 'Lora, serif' }}>{titleSuffix}</span>
                )}
              </h3>

              {Array.isArray(step.focus) && step.focus.length > 0 && (
                <div className="mb-6">
                  <p className="text-base text-neutral-800 leading-relaxed mb-2"><span className="font-semibold text-neutral-900">Focus Areas:</span></p>
                  <ul className="list-disc list-outside pl-6 md:pl-8 space-y-1 text-base text-neutral-800">
                    {step.focus.map((focusPoint, focusIdx) => (
                      <li key={focusIdx}>{focusPoint}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image then Key Challenges after on mobile */}
        <div
          className={`${isEven ? 'lg:order-1' : 'lg:order-2'
            } mb-8 lg:mb-0 flex flex-col items-center lg:items-start transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : isEven ? 'opacity-0 -translate-x-6' : 'opacity-0 translate-x-6'}`}
          style={{ transitionDelay: `${index * 140 + 40}ms` }}
        >
          <div className="w-full max-w-md mx-auto bg-neutral-100 rounded-lg aspect-[3/2] relative overflow-hidden group shadow-sm">
            {step.imageSrc ? (
              <Image
                src={step.imageSrc}
                alt={step.title}
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 480px, 100vw"
                priority={index < 2}
              />
            ) : (
              <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-400 text-lg font-light">Image Placeholder</span>
              </div>
            )}
          </div>
          <div className="mt-4 w-full max-w-md mx-auto">
            {Array.isArray(step.keyChallenges) && step.keyChallenges.length > 0 && (
              <div>
                <p className="text-lg font-semibold text-red-700 mb-2">Top Problems</p>
                <ul className="list-disc list-outside pl-6 md:pl-8 space-y-1 text-lg text-neutral-800">
                  {step.keyChallenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`w-3 h-3 rounded-full bg-red-600 transition-all duration-500 ${isHovered ? 'scale-125' : ''
            }`}
        />
      </div>
    </div>
  );
}

// Testimonials section (adapted from sog/frontend/src/components/TestimonialsSection.js)
const baseTestimonials = [
  {
    name: "Melissa Uribe Gil",
    role: "EVP, Costex Tractor Parts",
    text: "“The ability to ask powerful questions… transformed me as a leader.”",
    avatar: "/testimonials/1.jpg",
  },
  {
    name: "Francesco Pagano",
    role: "President, Interpreters and Translators, Inc.",
    text: "“Our business grew by 130%, leadership team is aligned, clarity and vision like never before.”",
    avatar: "/testimonials/2.png",
  },
  {
    name: "Lara Cattaneo",
    role: "Clinical Psychologist",
    text: "“Raj taught me how to profile the ‘WHY’ behind our actions using data… goes beyond theories.”",
    avatar: "/testimonials/3.png",
  },
];

// Current testimonials: show these three; carousel logic will paginate only if more than 3
const testimonials = baseTestimonials;

const ITEMS_PER_PAGE = 3;

function TestimonialCard({ item }) {
  return (
    <div className="relative flex h-full min-h-[260px] flex-col items-center rounded-[24px] border border-neutral-200/70 bg-white/95 px-8 pb-12 pt-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-6 text-5xl font-bold text-[#FF4B4B]">
        <span>&rdquo;</span>
      </div>
      <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-700">
        {item.text}
      </p>
      <div className="mb-6 flex items-center justify-center gap-1 text-[#FF4B4B]">
        {Array.from({ length: 5 }).map((_, idx) => (
          <svg
            key={idx}
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <div className="relative -mb-8 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-neutral-100 text-lg font-semibold text-neutral-700 shadow-lg">
        {/* Generic placeholder avatar using initials */}
        <span>
          {item.name
            .split(" ")
            .map((p) => p[0])
            .join("")
            .slice(0, 2)}
        </span>
      </div>
      <div className="mt-8 text-sm font-bold text-gray-900">
        {item.name}
      </div>
      <div className="text-xs text-gray-600">{item.role}</div>
    </div>
  );
}

function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const [animate, setAnimate] = useState(true);
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(testimonials.length / ITEMS_PER_PAGE)),
    []
  );

  // Auto-advance horizontally every 3 seconds (only if more than one page)
  useEffect(() => {
    if (totalPages <= 1) return;
    const id = setInterval(() => {
      setPage((prev) => {
        if (prev === totalPages - 1) {
          setAnimate(false);
          const next = 0;
          requestAnimationFrame(() => setAnimate(true));
          return next;
        }
        setAnimate(true);
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(id);
  }, [totalPages]);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-lg font-bold  text-[#FF4B4B] tracking-[0.2em]">
          Testimonials
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">
          Our successful clients
        </h2>

        {/* Carousel viewport */}
        <div className="mt-12 overflow-hidden">
          <div
            className={`flex ${animate ? "transition-transform duration-500 ease-out" : ""}`}
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, slideIndex) => {
              const start = slideIndex * ITEMS_PER_PAGE;
              const slice = testimonials.slice(start, start + ITEMS_PER_PAGE);
              return (
                <div
                  key={slideIndex}
                  className="grid w-full flex-shrink-0 grid-cols-1 items-stretch gap-8 md:grid-cols-3"
                >
                  {slice.map((item) => (
                    <TestimonialCard key={`${slideIndex}-${item.name}`} item={item} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  page === index ? "bg-[#FF4B4B]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonials slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
