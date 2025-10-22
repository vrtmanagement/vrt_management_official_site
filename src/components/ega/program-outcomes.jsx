import Image from "next/image";

const accomplishmentData = [
  {
    number: "1",
    text: "Predictable Pipeline in 90 Days — ICP locked, offer sharpened, and a repeatable outreach rhythm that drives +25–40% more qualified opportunities",
  },
  {
    number: "2",
    text: "Build stronger leadership team with emotional intelligence to make bold, high-impact decisions with confidence.",
  },
  {
    number: "3",
    text: "Boost leadership and emotional intelligence for better decision-making",
  },
  {
    number: "4",
    text: "Reduced hiring challenges with 3D Job Profiles, and structured interviews lift quality-of-hire, cut time-to-fill.",
  },
  {
    number: "5",
    text: "Data-driven hiring and right-seat alignment reducing turnover by 20–30% and increasing ownership of outcomes for long-term success.",
  },
];

const ProgramOutcomes = () => {
  return (
    <section className="relative isolate z-30 bg-secondary py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl lg:text-4xl font-semibold text-text-dark mb-8 lg:mb-12 text-center leading-tight"
        style={{ fontFamily: 'Lora, serif' }}
        >
          What Success Looks Like at 
          <span className="text-red-600"
          style={{ fontFamily: 'Lora, serif' }}
          > Entrepreneurs Growth Alliance™ </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
          style={{ fontFamily: 'Inter, serif' }}
        >
          <div className="lg:col-span-7 flex flex-col gap-3 lg:gap-4 lg:pr-8">
            {accomplishmentData.map((item) => (
              <div
                key={item.number}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 lg:p-6 flex items-start gap-4 lg:gap-6 shadow-sm border border-black/5"
              >
                <div className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-xl bg-secondary text-text-dark font-bold shrink-0">
                  <span className="text-xl lg:text-2xl leading-none">{item.number}</span>
                </div>
                <p className="text-sm lg:text-base font-medium text-text-dark leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6 justify-center lg:pl-6">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/da0afa6e-91a8-4e62-b1a2-24a3fac72532/generated_images/professional-business-presentation-in-mo-74261e13-20251014131118.jpg"
              alt="A business presentation taking place in a modern conference room with large windows showing a city skyline. A man is standing near a large screen displaying the words 'Prove you can LAUNCH' with an audience of four people seated around a wooden table."
              width={480}
              height={320}
              className="rounded-2xl object-cover w-full max-w-xs sm:max-w-sm mx-auto aspect-[16/10] shadow-sm ring-1 ring-black/5"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/da0afa6e-91a8-4e62-b1a2-24a3fac72532/generated_images/business-speaker-giving-presentation-to--9e40e187-20251014131126.jpg"
              alt="A speaker is giving a presentation to a seated audience in a modern conference room. The screen behind the speaker displays 'Jam Session' and 'Founder University'."
              width={480}
              height={320}
              className="rounded-2xl object-cover w-full max-w-xs sm:max-w-sm mx-auto aspect-[16/10] shadow-sm ring-1 ring-black/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOutcomes;