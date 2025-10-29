import Image from "next/image";
import { Users } from "lucide-react";

const audiences = [
  {
    title: "High-Potential Leaders:",
    description: "Senior managers and above, across industries, ready to accelerate their path to the CHRO role",
  },
  {
    title: "Aspiring CHROs:",
    description: "Senior HR leaders (SVP, VP, Director, and similar) who aspire to become Chief Human Resource Officers",
  },
  {
    title: "Current CHROs:",
    description: "Experienced CHROs looking to enhance their leadership influence and master change management.",
  },
];

const WhosItFor = () => {
  return (
    <section className="bg-gray-100 px-8 py-12 md:py-20 rounded-3xl">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 flex items-center gap-3">
          <Users className="h-6 w-6 text-brand-gold" aria-hidden="true" />
          <h2 className="text-[2rem] font-bold leading-none text-[#1E3A5F]">
            Who's it for
          </h2>
        </div>
        <div className="flex flex-col items-center md:flex-row md:gap-16">
          <div className="w-full md:w-[45%]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/61127b32-6d11-4f18-b931-b75f475942d7-executive-berkeley-edu/assets/images/program-exp-14.jpg"
              alt="Participants in a classroom discussion at a Berkeley Executive Education program"
              width={540}
              height={360}
              className="h-auto w-full rounded-xl object-cover shadow-lg"
            />
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-[55%]">
            <ul className="space-y-6">
              {audiences.map((audience, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-gold" />
                  <p className="text-base leading-[1.6] text-[#4A5568]">
                    <strong className="text-lg font-bold text-[#1E3A5F]">
                      {audience.title}
                    </strong>
                    &nbsp;
                    {audience.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhosItFor;