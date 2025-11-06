import React from 'react';


const TakeawayCard = ({ title, description }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-black mb-3 leading-[1.4]">{title}</h3>
      <p className="text-base leading-[1.6] text-[#333333]">{description}</p>
    </div>
  );
};

const takeawaysData = [
  {
    title: "Real-World Problem Solving",
    description: "Business comes with challenges, people issues, growth blocks, tough decisions. At EGA™, you don’t just talk about them, you fix them. Every session helps you find clarity and real solutions you can use right away."
  },
  {
    title: "Expert Mentorship",
    description: "You’ll be guided by Rajesh Tedla, a mentor and founder who’s been there leading teams, scaling companies, and transforming leaders. He’ll help you solve problems, overcome challenges, make smarter choices, and grow business with confidence."
  },
  {
    title: "Powerful Network",
    description: "You’ll join a growth minded group of entrepreneurs who understand your journey. Together, you’ll share ideas, swap best experiences. It’s not just networking, it’s a circle of trust."
  },
  {
    title: "Year-Long Support",
    description: "Growth doesn’t end after the sessions. You’ll have year-round mentoring, check-ins, and guidance to keep you on track. We stay with you through every win, every challenge, every next step."
  }
];

const KeyTakeaways = () => {
  return (
    <section id="key-takeaways" className="bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8">
        <div>
          <h2 className="font-bold text-[36px] md:text-[42px] leading-[1.2] text-black tracking-tight"
          style={{ fontFamily: 'Lora, serif' }}
          >
            Why Entrepreneurs Choose <span className=" text-red-600">EGA™</span>
          </h2>
          <div className="mt-3 h-1.5 w-24 bg-red-600 rounded-full mb-8"></div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        style={{ fontFamily: 'Inter, serif' }}
        >
          {takeawaysData.map((takeaway, index) => (
            <div
              key={index}
              className={`
                ${index % 2 === 1 ? 'md:border-l md:border-red-600 md:pl-6' : ''}
                ${index % 4 !== 0 ? 'lg:border-l lg:border-red-600 lg:pl-6' : ''}
              `}
            >
              <TakeawayCard title={takeaway.title} description={takeaway.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyTakeaways;