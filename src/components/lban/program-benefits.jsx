import React from 'react';

const BenefitItem = ({ text }) => {
  return (
    <li className="flex items-start">
      <span className="mt-[10px] mr-4 h-2 w-2 flex-shrink-0 rounded-full bg-black bg-accent" />
      <span className="font-sans text-base leading-7 text-[#4A5568]">{text}</span>
    </li>
  );
};

const ProgramBenefits = () => {
  const leftColumnBenefits = [
    "Laszlo Bock’s real-world experience and cutting-edge research insights from renowned Berkeley faculty",
    "Access to the members of our Program Advisory Board—current and former CHROs from world-class organizations and Fortune 500 companies",
    "Data analytics and technology briefings to drive people analytics and business strategies",
    "Elite consultative skills to strategically advise senior leaders and boards",
  ];

  const rightColumnBenefits = [
    "Individualized leadership training focusing on your unique strengths and development areas",
    "Exclusive networking receptions with faculty, industry leaders, and fellow participants",
    "Access to the CHRO Leadership Program alumni community, an exclusive group of current CHROs and senior executive leaders",
    "The Berkeley Transformative CHRO Leadership Program co-led by Laszlo Bock Certificate of Completion",
  ];

  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <h2
          className="mb-8 font-bold text-4xl"
          style={{ color: '#1E3A5F' }}
        >
          With this program, you will receive:
        </h2>
        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-12">
          <div className="lg:w-[55%]">
            <ul className="space-y-4">
              {leftColumnBenefits.map((benefit, index) => (
                <BenefitItem key={`left-${index}`} text={benefit} />
              ))}
            </ul>
          </div>
          <div className="lg:w-[45%]">
            <ul className="space-y-4">
              {rightColumnBenefits.map((benefit, index) => (
                <BenefitItem key={`right-${index}`} text={benefit} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramBenefits;