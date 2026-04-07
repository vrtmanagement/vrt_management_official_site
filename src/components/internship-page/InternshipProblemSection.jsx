"use client";

const stats = [
  { value: "90%", label: "of companies have no formal internship program" },
  { value: "8", label: "clear steps to create your own internship" },
  { value: "500+", label: "companies accessible via LinkedIn Premium" },
];

const problems = [
  {
    image: "/internship-page/section2/img1.png",
    title: "Companies Rarely Post Internships",
    description:
      "Most small and mid-size companies which are the best places to learn don't have formal internship programs. They see the hiring process as a burden, not an opportunity.",
  },
  {
    image: "/internship-page/section2/img2.png",
    title: "Massive Competition for Few Spots",
    description:
      "When companies do post, thousands of students apply for just a handful of positions. You're competing blind, with little control over the outcome or the experience you'll get.",
  },
  {
    image: "/internship-page/section2/img3.png",
    title: "You're Stuck in Passive Mode",
    description:
      "The traditional mindset is like being in school, you show up, wait to be assigned work, and hope someone notices you. That's not how careers are built in the real world.",
  },
  {
    image: "/internship-page/section2/img4.png",
    title: "Generic Experience, Not Career Goals",
    description:
      "Even when you get a traditional internship, it's rarely tailored to your interests or career goals. You end up doing tasks that don't build the skills you actually need.",
  },
];

export default function InternshipProblemSection() {
  return (
    <section className="w-full bg-[#FFF2F2] py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="mx-auto pb-10 grid max-w-[760px] grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.value}
              className="rounded-[10px] bg-[#FFECEC] px-5 py-5 text-center"
              style={{ border: "1px solid #FFB8B8" }}
            >
              <p className="text-[46px] font-bold leading-none text-[#ff0000]">
                {item.value}
              </p>
              <p className="mt-2 text-[14px] leading-[1.35] text-[#262626]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[32px] font-medium leading-tight text-[#ff2a2a]">
            The Real Problem
          </p>
          <h2 className="mx-auto mt-2 max-w-[900px] text-[44px] font-bold leading-[1.12] text-black">
            Why the Traditional Job Board Approach Is Failing Students
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {problems.map((item) => (
            <article
              key={item.title}
              className="rounded-[16px] border border-[#e4e4e4] bg-white p-3 shadow-[0_2px_8px_rgba(15,23,42,0.06)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[220px] w-full rounded-[10px] object-cover"
              />
              <h3 className="mt-3 text-[28px] font-bold leading-tight text-[#d91c1c]">
                {item.title}
              </h3>
              <p className="mt-2 text-[19px] leading-[1.35] text-[#2d2d2d]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
