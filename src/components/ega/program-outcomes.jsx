import Image from "next/image";

const accomplishmentData = [
  {
    number: "1",
    text: "Build a high-performing team for growth and trust",
  },
  {
    number: "2",
    text: "Streamline and systematize your operations — reduce chaos, improve accountability",
  },
  {
    number: "3",
    text: "Boost leadership and emotional intelligence for better decision-making",
  },
  {
    number: "4",
    text: "Create and execute effective strategic plans for sustainable growth",
  },
  {
    number: "5",
    text: "Solve business bottlenecks using proven frameworks for long-term success",
  },
];

const ProgramOutcomes = () => {
  return (
    <section className="relative isolate z-30 bg-secondary py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-4xl lg:text-5xl font-semibold text-text-dark mb-12 lg:mb-16 text-center">
        What Success Looks Like at EGA
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-5 lg:pr-8">
            {accomplishmentData.map((item) => (
              <div key={item.number} className="bg-white rounded-[24px] p-6 lg:p-8 flex items-center gap-6 lg:gap-8 shadow-sm">
                <p className="text-5xl lg:text-6xl font-bold text-text-dark shrink-0 leading-none">{item.number}</p>
                <p className="text-base lg:text-lg font-medium text-text-dark leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 justify-center lg:pl-8">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/da0afa6e-91a8-4e62-b1a2-24a3fac72532/generated_images/professional-business-presentation-in-mo-74261e13-20251014131118.jpg"
              alt="A business presentation taking place in a modern conference room with large windows showing a city skyline. A man is standing near a large screen displaying the words 'Prove you can LAUNCH' with an audience of four people seated around a wooden table."
              width={400}
              height={300}
              className="rounded-[32px] lg:rounded-[40px] object-cover w-full max-w-sm mx-auto aspect-[4/3]"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/da0afa6e-91a8-4e62-b1a2-24a3fac72532/generated_images/business-speaker-giving-presentation-to--9e40e187-20251014131126.jpg"
              alt="A speaker is giving a presentation to a seated audience in a modern conference room. The screen behind the speaker displays 'Jam Session' and 'Founder University'."
              width={400}
              height={300}
              className="rounded-[32px] lg:rounded-[40px] object-cover w-full max-w-sm mx-auto aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOutcomes;