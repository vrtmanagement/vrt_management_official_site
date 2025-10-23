import Image from "next/image";

const OverviewSection = () => {
  return (
    <section id="overview" className="bg-white py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/61127b32-6d11-4f18-b931-b75f475942d7-executive-berkeley-edu/assets/svgs/icon-decorative_3-3.svg"
            alt="Book Icon"
            width={24}
            height={24}
          />
          <h2 className="font-bold text-[32px] leading-[1.3] text-[#1E3A5F]">
            Overview
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-10 gap-x-16 gap-y-8 items-start">
          <div className="md:col-span-6 space-y-6">
            <p className="text-lg leading-[1.75] text-[#4A5568] font-normal">
              The role of chief human resources officer is more complex than ever before. CHROs face monumental change—navigating growing employee voice, increased public airing of internal dynamics, data and privacy issues, the challenges of distributed workforces and technological advances such as AI. Yet, many find themselves without a clear roadmap for success.
            </p>
            <p className="text-lg leading-[1.75] text-[#4A5568] font-normal">
              There is an unprecedented opportunity for human resources leaders to acquire the skills needed to transform modern work. The Berkeley Transformative CHRO Leadership Program co-led by Laszlo Bock prepares HR executives to navigate these challenges and lead the next evolution of work at a global scale.
            </p>
            <p className="text-lg leading-[1.75] text-[#4A5568] font-normal">
              This CHRO leadership program bridges academic theory with practical business needs, equipping you with the knowledge to leverage data, technology, and financial expertise to lead powerful, long-lasting organizational success and change.
            </p>
          </div>
          <div className="md:col-span-4">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/61127b32-6d11-4f18-b931-b75f475942d7-executive-berkeley-edu/assets/images/Laszlo_lecture_0-2.jpg"
              alt="A lecture scene with a professor addressing attendees in a classroom"
              width={475}
              height={356}
              className="rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;