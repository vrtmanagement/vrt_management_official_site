'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';


const routineSteps = [
  {
    step: '01',
    title: 'Stage 1: Startup Phase (1-10 Employees)',
    imageSrc: '/sog/stage-one.png',
    focus: 'Survival, cash flow, and building a core team',
    criticalTakeaway:
      'Avoid distractions, stay focused on your core vision, and establish a solid foundation.',
    leadershipStyle: 'CEO-centric, hands-on',
    keyChallenges: [
      'Limited cash flow and resources',
      'Hiring first core team members',
      'Maintaining focus on core offering',
    ],
    ctaText: 'Learn more',
  },
  {
    step: '02',
    title: 'Stage 2: Ramp-Up (10-19 Employees)',
    imageSrc: '/sog/stage-two.png',
    focus: 'Scaling Sales and Strengthening Leadership',
    criticalTakeaway: 'Structure processes, sharpen sales strategy, and build a culture of accountability.',
    leadershipStyle: 'Coaching and Growth-Oriented',
    keyChallenges: [
      'Hiring and retaining quality employees',
      'Expanding sales while managing cash flow',
      'Limited capital for growth',
    ],
    ctaText: 'Learn more',
  },
  {
    step: '03',
    title: 'Stage 3: Delegation & Systems (20-34 Employees)',
    imageSrc: '/sog/stage-three.png',
    focus: 'Transitioning from Doer to Leader, Systemizing Operations',
    criticalTakeaway: 'Implement standardized processes, delegate effectively, and shift leadership focus from execution to strategy.',
    leadershipStyle: 'Visionary and Strategic',
    keyChallenges: [
      'Letting go and empowering others',
      'Creating repeatable systems for consistency',
      'Developing strong middle management',
      'Scaling without sacrificing quality',
    ],
    ctaText: 'Learn more',
  },
  {
    step: '04',
    title: 'Stage 4: Professionalizing Operations (35-57 Employees)',
    imageSrc: '/sog/stage-four.png',
    focus: 'Streamlining Workflows, Strengthening Management',
    criticalTakeaway: 'Build strong operational frameworks, improve decision-making, and eliminate inefficiencies.',
    leadershipStyle: 'Structured and Process-Oriented',
    keyChallenges: [
      'Managing increased complexity',
      'Hiring and training middle managers',
      'Standardizing operations without losing agility',
      'Maintaining company culture while growing',
    ],
    ctaText: 'Learn more',
  },
  {
    step: '05',
    title: 'Stage 5: Integration (58-95 Employees)',
    imageSrc: '/sog/stage-five.png',
    focus: 'Eliminating Silos, Strengthening Collaboration',
    criticalTakeaway: 'Foster cross-team collaboration, develop structured leadership, and align teams with company goals.',
    leadershipStyle: 'Communicative and Team-Oriented',
    keyChallenges: [
      'Ensuring alignment between leadership and teams',
      'Improving internal communication across departments',
      'Managing conflicts as teams grow',
      'Maintaining operational efficiency',
    ],
    ctaText: 'Learn more',
  },
  {
    step: '06',
    title: 'Stage 6: Strategic Growth (96-160 Employees)',
    imageSrc: '/sog/stage-six.png',
    focus: 'Expanding with Purpose and Profitability',
    criticalTakeaway: 'Implement a data-driven strategy, optimize team structure, and scale operations efficiently.',
    leadershipStyle: 'High-Level Strategy & Market Expansion',
    keyChallenges: [
      'Balancing growth with profitability',
      'Scaling leadership and decision-making processes',
      'Expanding into new markets without losing focus',
      'Maintaining financial stability while growing',
    ],
    ctaText: 'Learn more',
  },
  {
    step: '07',
    title: 'Stage 7: Visionary Growth (161 -500 Employees)',
    imageSrc: '/sog/stage-seven.png',
    focus: 'Long-Term Sustainability, Legacy, and Impact',
    criticalTakeaway: 'Build a self-sustaining business, strengthen leadership pipelines, and focus on long-term legacy.',
    leadershipStyle: 'Mentor and Visionary',
    keyChallenges: [
      'Creating a succession plan for leadership transitions',
      'Expanding while maintaining company culture and values',
      'Ensuring financial longevity and sustainable operations',
      'Scaling globally or into new market segments',
    ],
    ctaText: 'Learn more',
  },
];

export function Growth() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 px-6 lg:px-8"
      style={{ fontFamily: 'Inter, serif' }}
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
            style={{ fontFamily: 'Lora, serif' }}
          >
            Here's the Sneak Peak of 7 Stages of Growth
          </h2>
          <p
            className={`text-sm text-black text-xl  tracking-wider mb-8 transition-all duration-1000 delay-100 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >
          </p>
          <p
            className={`text-base text-neutral-600 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >
            The 7 Stages of Growth is a model for understanding how businesses grow and the challenges they face as they grow.

          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-red-200 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-24">
            {routineSteps.map((step, index) => (
              <TimelineStep
                key={step.step}
                step={step}
                index={index}
                isVisible={isVisible}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
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
                <p className="text-lg font-semibold text-red-700 mb-2">Key Challenges</p>
                <ul className="list-disc list-outside pl-6 md:pl-8 space-y-1 text-lg text-neutral-800">
                  {step.keyChallenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

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
                <span className="block"   style={{ fontFamily: 'Lora, serif' }}>{titleMain}</span>
                {titleSuffix && (
                  <span className="block text-base md:text-lg font-semibold text-neutral-800 mt-1" style={{ fontFamily: 'Lora, serif' }}>{titleSuffix}</span>
                )}
              </h3>

              {step.focus && (
                <p className="text-base text-neutral-800 leading-relaxed mb-3"><span className="font-semibold text-neutral-900">Focus: </span>{step.focus}</p>
              )}
              {step.criticalTakeaway && (
                <p className="text-base text-neutral-800 leading-relaxed mb-3"><span className="font-semibold text-neutral-900">Critical Takeaway: </span>{step.criticalTakeaway}</p>
              )}
              {step.leadershipStyle && (
                <p className="text-base text-neutral-800 leading-relaxed mb-6"><span className="font-semibold text-neutral-900">Leadership Style: </span>{step.leadershipStyle}</p>
              )}
            </div>
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
