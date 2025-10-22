'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: 'TriMetrix HD Assessment',
    subtitle: 'Tailored Solutions',
    description:
      'The TriMetrix HD Assessment helps you understand how you think, what motivates you, what skills you bring, and how you lead others. With these insights, you can unlock your true potential and gaps to become the succesful entrepreneur, and organizations can place the right people in the right roles to build stronger, high-performing teams.',
  },
  {
    title: 'Emotional Intelligence Assessment',
    subtitle: 'Expert Guidance',
    description:
      'The Emotional Quotient (EQ) Assessment measures how effectively you understand and manage emotions, both yours and others’. It uncovers your self-awareness, empathy, and ability to connect under pressure. By developing these emotional skills, leaders strengthen trust, make better decisions, and build teams that perform with confidence, clarity, and collaboration.'
  },
  {
    title: 'TARGET Selling Insights',
    subtitle: 'Data-Driven Insights',
    description:
      '“The Target Selling Insights (TSI) Assessment helps you understand how well you know and use the strategies behind successful selling. It shows where your strengths and gaps are, so leaders and organizations can coach better, build stronger sales teams, and achieve greater results.'
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
  const [activeCardIndex, setActiveCardIndex] = useState(null);
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
      className="bg-white py-24 pb-32 px-6 lg:px-8 min-h-screen flex items-center"
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
              isActive={activeCardIndex === index}
              onCardClick={() => setActiveCardIndex(activeCardIndex === index ? null : index)}
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
  isActive,
  onCardClick,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      onCardClick();
    }
  };

  const showActive = isHovered || (isMobile && isActive);

  return (
    <div
      className={`group transition-all duration-700 ${
        isMobile ? 'cursor-pointer' : 'cursor-default'
      } ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="relative">
        <div
          className={`absolute top-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-transparent transition-all duration-500 ${
            showActive ? 'w-full' : 'w-0'
          }`}
        />

        <div className="pt-8">
          <h3
            className={`text-2xl lg:text-3xl font-light text-neutral-900 mb-4 transition-all duration-300 ${
              showActive ? 'translate-x-2 text-red-600' : ''
            }`}
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            {service.title}
          </h3>

          <p
            className={`text-base text-neutral-600 leading-relaxed transition-all duration-300 delay-100 ${
              showActive ? 'translate-x-2 text-neutral-800' : ''
            }`}
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            {service.description}
          </p>
        </div>

        <div
          className={`absolute -bottom-4 left-0 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent transition-all duration-700 ${
            showActive ? 'w-full opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>
    </div>
  );
}
