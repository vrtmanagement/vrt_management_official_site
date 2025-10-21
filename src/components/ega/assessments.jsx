'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: 'TriMetrix HD Assessment',
    subtitle: 'Tailored Solutions',
    description:
      'Helps you deeply understand how you behave, what drives you, how you think, and what you are capable of, so you can lead with self-awareness, build the right team, and make better decisions faster.',
  },
  {
    title: 'Emotional Intelligence Assessment',
    subtitle: 'Expert Guidance',
    description:
      'Equips you to recognize, manage, and channel emotions, your own and your team, so you lead with empathy, resolve conflict effectively, and build a culture of trust and resilience.'
  },
  {
    title: 'TARGET Selling Insights',
    subtitle: 'Data-Driven Insights',
    description:
      'Reveals how buyers make decisions and how you sell, so you can align your sales conversations to trust-based, high-conversion strategies that feel authentic and close more deals.'
  },
  {
    title: 'Stages of Growth Assessment',
    subtitle: 'Future-Ready Solutions',
    description:
      'Identifies your current business growth stage and its hidden challenges, so you can focus on solving the right problems at the right time with the right leadership approach.',
  },
];

export function AssessmentsSection() {
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
      className="bg-white py-24 px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-7xl w-full">
        <h2
          className={`text-4xl lg:text-4xl font-light text-neutral-900 mb-20 transition-all duration-1000 text-center font-semibold    ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{ fontFamily: 'Lora, serif' }}
        >
          Assessments for Your Growth
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isVisible,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div
          className={`absolute top-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-transparent transition-all duration-500 ${
            isHovered ? 'w-full' : 'w-0'
          }`}
        />

        <div className="pt-8">
          <h3
            className={`text-2xl lg:text-3xl font-light text-neutral-900 mb-4 transition-all duration-300 ${
              isHovered ? 'translate-x-2' : ''
            }`}
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            {service.title}
          </h3>

          <h4
            className={`text-lg font-medium text-neutral-800 mb-4 transition-all duration-300 delay-75 ${
              isHovered ? 'translate-x-2 text-red-600' : ''
            }`}
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            {service.subtitle}
          </h4>

          <p
            className={`text-base text-neutral-600 leading-relaxed transition-all duration-300 delay-100 ${
              isHovered ? 'translate-x-2 text-neutral-800' : ''
            }`}
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            {service.description}
          </p>
        </div>

        <div
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent transition-all duration-700 ${
            isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>
    </div>
  );
}
