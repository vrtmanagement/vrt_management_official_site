"use client";

import Image from "next/image";

const ProgramOverview = () => {
  const cards = [
    {
      id: 1,
      image: "/ega/pgm_overview/image1.png",
      title: "Program Length",
      content: [
        { icon: "📅", text: "12 Months" },
        { text: "Cohort-Based (Online or In-Person entry)" }
      ]
    },
    {
      id: 2,
      image: "/ega/pgm_overview/image2.png",
      title: "Core Installation",
      content: [
        { text: "10 Weeks (Online) OR 4 Immersive Days (In-Person)" },
        { text: "Implementation & Mentoring: 10 Months" }
      ]
    },
    {
      id: 3,
      image: "/ega/pgm_overview/image3.png",
      title: "Focus",
      content: [
        { text: "Leadership" },
        { text: "Strategy" },
        { text: "Execution" },
        { text: "Value Creation" }
      ]
    },
    {
      id: 4,
      image: "/ega/pgm_overview/image4.png",
      title: "Outcome",
      content: [
        { text: "$1M+ in measurable business valuation impact" },
        { text: "Through stronger systems, leadership depth, and execution discipline" }
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
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 group flex flex-col h-[220px] md:h-[260px] ${
                index % 2 === 0 
                  ? 'md:justify-self-start' 
                  : 'md:justify-self-end'
              } w-full max-w-sm`}
            >
              {/* Image - 50% */}
              <div className="relative w-full h-1/2 overflow-hidden">
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
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
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

