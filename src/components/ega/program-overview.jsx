"use client";

import Image from "next/image";

const ProgramOverview = () => {
  const cards = [
    {
      id: 1,
      image: "/ega/pgm_overview/image1.png",
      title: "Program Length",
    content: [
  { text: "Online: 11am – 1pm EST (Weekly Sessions)", highlight: true },
  { text: "Offline: 8:30am – 5pm EST (4 Days)", highlight: true },
  { text: "Format: 2 Days – 2–3 Week Break – 2 Days" },
  { text: "Cohort-Based (Online or In-Person Workshop)" }
]

    },
    {
      id: 2,
      image: "/ega/pgm_overview/image2.png",
      title: "Core Installation",
      content: [
        { text: "Online - 10 sessions" },
        { text: "Offline - 4 days" },
        { text: "Monthly - 3 hour Implementation & Mentoring" }
      ]
    },
    {
      id: 3,
      image: "/ega/pgm_overview/image3.png",
      title: "Focus",
      content: [
        { text: "Leadership and talent enhancement" },
        { text: "Business Growth and long term strategy" },
      { text: "Execution plans for 1-year and 3-year goals" }
    
      ]
    },
    {
      id: 4,
      image: "/ega/pgm_overview/image4.png",
      title: "Outcome",
      content: [
   { text: "Learn and implement growth as a repeatable process through strong systems and execution discipline" },
{ text: "Typical results include approximately $1M+ in financial impact and employment growth" }


      ]
    }
  ];

  return (
    <section className="relative bg-white py-8 md:py-10 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Program Overview at a Glance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 group flex flex-col ${
                  index % 2 === 0 
                    ? 'md:justify-self-start' 
                    : 'md:justify-self-end'
                } w-full max-w-sm`}

            >
              {/* Image - 50% */}
              <div className="relative w-full h-28 md:h-32 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content - 50% */}
              <div className="p-3 md:p-4 h-1/2 flex flex-col justify-between">
                <h3 className="text-base md:text-lg font-bold text-[#ff4b5c] mb-1.5">
                  {card.title}
                </h3>
                <div className="space-y-1.5 flex-1">
                  {card.content.map((item, index) => (
                    <div 
                      key={index} 
                      className={item.icon ? "flex items-center gap-2" : "flex items-start gap-2"}
                    >
                      {item.icon && (
                        <span className="text-base">{item.icon}</span>
                      )}
                      <p
  className={`text-xs md:text-sm leading-relaxed ${
    item.highlight
      ? "font-semibold text-gray-900"
      : "text-gray-700"
  }`}
>
  {item.text}
</p>

                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;

