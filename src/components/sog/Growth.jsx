'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';


const routineSteps = [
  {
    step: '01',
    title: 'Oil Cleansers',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeilla fringilla maximus ligula eu fermentum. Nunc pulvinar purus sit amet metus hendrerit a purus sit adipsum. Suspendisse faucibus sed non odio rhoncus ultricies in ut arcu.',
    additionalText:
      'Donec vehicula, mauris ut placerat elementum, sem tellus semm arcu, sed tristique odio lacus non mi. Pracsella fringilla maximus ligula eu fermentum amet et faucibus.',
    ctaText: 'EXPLORE OIL CLEANSERS',
  },
  {
    step: '02',
    title: 'Water-Based Cleansers',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeilla fringilla maximus ligula eu fermentum. Nunc pulvinar purus sit amet metus hendrerit a purus sit adipsum. Suspendisse faucibus sed non odio rhoncus ultricies in ut arcu.',
    additionalText:
      'Donec vehicula, mauris ut placerat elementum, sem tellus semm arcu, sed tristique odio lacus non mi. Pracsella fringilla maximus ligula eu fermentum amet et faucibus.',
    ctaText: 'EXPLORE WATER-BASED CLEANSERS',
  },
  {
    step: '03',
    title: 'Exfoliators',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeilla fringilla maximus ligula eu fermentum. Nunc pulvinar purus sit amet metus hendrerit a purus sit adipsum. Suspendisse faucibus sed non odio rhoncus ultricies in ut arcu.',
    additionalText:
      'Donec vehicula, mauris ut placerat elementum, sem tellus semm arcu, sed tristique odio lacus non mi. Pracsella fringilla maximus ligula eu fermentum amet et faucibus.',
    ctaText: 'EXPLORE EXFOLIATORS',
  },
  {
    step: '04',
    title: 'Toners',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeilla fringilla maximus ligula eu fermentum. Nunc pulvinar purus sit amet metus hendrerit a purus sit adipsum. Suspendisse faucibus sed non odio rhoncus ultricies in ut arcu.',
    additionalText:
      'Donec vehicula, mauris ut placerat elementum, sem tellus semm arcu, sed tristique odio lacus non mi. Pracsella fringilla maximus ligula eu fermentum amet et faucibus.',
    ctaText: 'EXPLORE TONERS',
  },
  {
    step: '05',
    title: 'Essences',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeilla fringilla maximus ligula eu fermentum. Nunc pulvinar purus sit amet metus hendrerit a purus sit adipsum. Suspendisse faucibus sed non odio rhoncus ultricies in ut arcu.',
    additionalText:
      'Donec vehicula, mauris ut placerat elementum, sem tellus semm arcu, sed tristique odio lacus non mi. Pracsella fringilla maximus ligula eu fermentum amet et faucibus.',
    ctaText: 'EXPLORE ESSENCES',
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
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl lg:text-7xl font-bold text-neutral-900 mb-6 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            The Korean Skincare Routine
          </h2>
          <p
            className={`text-sm text-neutral-500 uppercase tracking-wider mb-8 transition-all duration-1000 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            10 STEPS
          </p>
          <p
            className={`text-base text-neutral-600 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
            minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
            et accumsan et iusto odio dignissim qui blandit praesent luptatum.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2 hidden lg:block" />

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

  return (
    <div
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${index * 200}ms`,
      }}
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div
          className={`${
            isEven ? 'lg:order-1' : 'lg:order-2'
          } mb-8 lg:mb-0`}
        >
          <div className="bg-neutral-100 rounded-lg aspect-[4/5] relative overflow-hidden group">
            <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
              <span className="text-neutral-400 text-lg font-light">Image Placeholder</span>
            </div>
          </div>
        </div>

        <div
          className={`${
            isEven ? 'lg:order-2 lg:pl-16' : 'lg:order-1 lg:pr-16'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            <div
              className={`absolute top-0 ${
                isEven ? 'left-0' : 'right-0'
              } h-0.5 bg-gradient-to-r ${
                isEven ? 'from-red-600 to-transparent' : 'from-transparent to-red-600'
              } transition-all duration-500 ${isHovered ? 'w-20' : 'w-0'}`}
            />

            <div className="pt-6">
              <p
                className={`text-sm text-neutral-400 font-light mb-3 transition-all duration-300 ${
                  isHovered ? 'text-red-600' : ''
                }`}
              >
                {step.step} / 10
              </p>

              <h3
                className={`text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 transition-all duration-300 ${
                  isHovered ? 'translate-x-1' : ''
                }`}
              >
                {step.title}
              </h3>

              <p className="text-base text-neutral-600 leading-relaxed mb-4">
                {step.description}
              </p>

              <p className="text-base text-neutral-600 leading-relaxed mb-8">
                {step.additionalText}
              </p>

              <Button
                variant="outline"
                className={`border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 font-semibold tracking-wider ${
                  isHovered ? 'translate-x-1' : ''
                }`}
              >
                {step.ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`w-3 h-3 rounded-full bg-neutral-900 transition-all duration-500 ${
            isHovered ? 'scale-150 bg-red-600' : ''
          }`}
        />
      </div>
    </div>
  );
}
