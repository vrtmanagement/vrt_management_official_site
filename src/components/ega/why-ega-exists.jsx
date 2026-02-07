"use client";

import Image from "next/image";

const problems = [
  "Growth creates complexity faster than systems evolve.",
  "Execution depends too heavily on the founder.",
  "Teams are busy, but outcomes are inconsistent.",
  "Strategy exists, but follow-through breaks down.",
  "AI and market volatility demand faster, better decisions.",
];

const iconPaths = [
  "/ega/icons/icon1.png",
  "/ega/icons/icon2.png",
  "/ega/icons/icon3.png",
  "/ega/icons/icon4.png",
  "/ega/icons/icon5.png",
];

const WhyEGAExists = () => {
  return (
    <section className="relative bg-[#FFF7F6] py-8 md:py-10 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#ff4b5c] mb-2">
            Why EGA™ Exists (The Real Problem)
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto">
            Most SMB owners don&apos;t struggle because they lack intelligence, ambition, or effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden shadow-md h-[400px] md:h-[420px]">
            <Image
              src="/ega/sec_2.png"
              alt="Business team collaborating in city"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Right: Bullets */}
          <div className="h-[380px] md:h-[420px] flex flex-col">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
              They struggle because:
            </h3>
            <ul className="space-y-2 flex-1">
              {problems.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-2 p-1.5 rounded-lg transition-all duration-300 hover:bg-red-100 hover:shadow-md group bg-red-50"
                >
                  <div className="flex-shrink-0 bg-red-400 p-2 rounded-full transition-all duration-300 group-hover:bg-red-600 group-hover:scale-110">
                    <Image
                      src={iconPaths[index]}
                      alt=""
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-gray-800 leading-tight group-hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-3 rounded-xl bg-[#ffe0df] border border-[#ffb4ae] px-3 py-2 text-xs">
              <p className="font-semibold text-[#ff4b5c] mb-0.5 text-xs">
                This is not a motivation problem. It is an operating-system problem.
              </p>
              <p className="text-gray-800 text-xs">
                EGA™ was designed to install that operating system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEGAExists;


