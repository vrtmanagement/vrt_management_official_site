"use client";

import Image from "next/image";

const ProgramOverview = () => {
  const cards = [
    {
      id: 1,
      image: "/ega/pgm_overview/image1.png",
      title: "Understanding Challenges",
      content: [
        { text: "We identify your true growth constraints and root causes. Leaders gain clarity on what must change — now." }
      ]
    },
    {
      id: 2,
      image: "/ega/pgm_overview/image2.png",
      title: "Core Implementation",
      content: [
        { text: "We install Vision, Values, and a One-Page Strategy. Your business shifts from reactive to intentional execution." }
      ]
    },
    {
      id: 3,
      image: "/ega/pgm_overview/image3.png",
      title: "Focus",
      content: [
        { text: "We define 3–5 critical priorities with measurable outcomes. Teams align and execute what truly matters." }
      ]
    },
    {
      id: 4,
      image: "/ega/pgm_overview/image4.png",
      title: "Outcome",
      content: [
        { text: "You build a scalable, aligned, high-performance organization. Growth becomes predictable and sustainable." }
      ]
    }
  ];

  return (
    <section className="relative bg-white py-8 md:py-10 lg:py-12 border border-gray-100 rounded-2xl shadow-sm">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Key Focus Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {cards.map((card, index) => (
            <div
              key={card.id}
            className={`bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg group flex flex-col ${
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

