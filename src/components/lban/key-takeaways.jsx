import React from 'react';


const TakeawayCard = ({ title, description }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3 leading-[1.4]">{title}</h3>
      <p className="text-base leading-[1.6] text-[#4A5568]">{description}</p>
    </div>
  );
};

const takeawaysData = [
  {
    title: "Build Credibility at the C-Suite and Board Room Table",
    description: "Be a partner to the CEO and Board with business and financial acumen. Understand corporate finance—including public company valuation methodology and how to interpret and analyze financial statements."
  },
  {
    title: "Inspire and Effectively Lead Institutional Change",
    description: "Lead and accelerate organizational change, ensuring agility and employee buy-in to make improvements stick. Confidently tackle systemic issues and longstanding inequities like wage gaps."
  },
  {
    title: "Leverage Data Analytics to Inform Strategic Decisions",
    description: "Use data and data analytic models to proactively identify workforce trends, rigorously analyze information to improve strategic decision-making, and measure the impact of HR initiatives."
  },
  {
    title: "Gain the Technological Acumen to Take Preemptive Action",
    description: "Stay ahead of the curve by anticipating the impact of technology on workforce dynamics. Identify uses for AI, automation, and analytics tools to streamline processes and improve efficiency."
  }
];

const KeyTakeaways = () => {
  return (
    <section id="key-takeaways" className="bg-white py-12 lg:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="mb-8">
          <h2 className="text-[2rem] font-bold text-[#1E3A5F] leading-[1.3]">Key Takeaways</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {takeawaysData.map((takeaway, index) => (
            <TakeawayCard key={index} title={takeaway.title} description={takeaway.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyTakeaways;