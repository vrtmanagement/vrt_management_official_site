"use client";

const supportPoints = [
  {
    title: "Personalized Skill Assessment",
    description:
      "We help you identify your most marketable skills and match them to real business needs.",
  },
  {
    title: "Company Research Guidance",
    description:
      "We show you exactly how to find and research the right target companies using LinkedIn and other tools.",
  },
  {
    title: "Proposal Writing Support",
    description:
      "We review and refine your internship proposal so it stands out and gets responses.",
  },
  {
    title: "Outreach Strategy and Scripts",
    description:
      "We provide proven LinkedIn and email templates tailored to your industry and goals.",
  },
  {
    title: "Ongoing Coaching and Accountability",
    description:
      "We check in with you throughout the process so you stay on track and land your internship.",
  },
];

export default function InternshipSupportSection() {
  return (
    <section className="w-full bg-[#FFF2F2] py-14 md:py-16">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 md:px-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
        <div className="max-w-[610px]">
          <p className="text-[18px] font-semibold leading-tight text-[#ff3b30] md:text-[20px]">
            Why VRT Management Group
          </p>

          <h2 className="mt-3 text-[38px] font-bold leading-[1.08] text-black sm:text-[42px] md:text-[46px]">
            You Don&apos;t Have to
            <span className="block text-[#ff2a2a]">Figure This Out Alone</span>
          </h2>

          <p className="mt-5 max-w-[575px] text-[17px] leading-[1.45] text-[#222] sm:text-[18px]">
            VRT Management Group LLC is a business consulting and coaching firm
            with 39 years of research-backed expertise. We work with
            entrepreneurs and professionals at every stage, and now we&apos;re
            bringing that same expertise to students like you. We don&apos;t just
            tell you what to do, we walk alongside you, helping you identify
            your strengths, research the right companies, craft a compelling
            proposal, and confidently step into your internship.
          </p>

          <div className="mt-5 space-y-2">
            {supportPoints.map((item) => (
              <article
                key={item.title}
                className="group flex items-start gap-3 rounded-[18px] pr-2 transition duration-300 hover:translate-x-1.5"
              >
                <span className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff2f2f] to-[#ff8a00] text-[16px] font-semibold text-white shadow-[0_10px_18px_rgba(255,72,72,0.22)] transition duration-300 group-hover:scale-105">
                  &rarr;
                </span>

                <p className="text-[14px] leading-[1.45] text-[#1f1f1f] sm:text-[15px]">
                  <span className="font-semibold text-[#ff2f2f]">
                    {item.title}
                  </span>{" "}
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[410px] w-full max-w-[520px] sm:h-[470px] lg:h-[520px]">
          <div className="group absolute left-0 top-0 z-10 w-[85%] overflow-hidden rounded-[14px] border-[5px] border-[#fff6f6] bg-white shadow-[0_22px_48px_rgba(15,23,42,0.1)]">
            <img
              src="/internship-page/section4/above-img.png"
              alt="VRT team mentoring students in a collaborative workspace"
              className="h-[250px] w-full object-cover object-center transition duration-500 group-hover:scale-105 sm:h-[300px] lg:h-[420px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
          </div>

         

          <div className="group absolute bottom-[36px] right-0 z-20 w-[52%] overflow-hidden rounded-[14px] border-[5px] border-[#fff6f6] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.14)] sm:bottom-[42px] sm:w-[46%] lg:bottom-[38px]">
            <img
              src="/internship-page/section4/below-img.png"
              alt="Professionals standing together in business attire"
              className="h-[168px] w-full object-cover object-center transition duration-500 group-hover:scale-105 sm:h-[198px] lg:h-[225px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/5 opacity-0 transition duration-300 group-hover:opacity-100" />
          </div>

          <div
            className="absolute bottom-[8px] left-[4px] z-30 w-[175px] transition duration-300 hover:-translate-y-1 sm:bottom-[10px] sm:left-[2px] sm:w-[190px] lg:bottom-[-2px] lg:left-[2px] lg:w-[222px]"
            style={{ animation: "supportBadgeFloat 4.5s ease-in-out infinite" }}
          >
            <img
              src="/internship-page/section4/yrs-exp.png"
              alt=""
              aria-hidden="true"
              className="h-auto w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center gap-1.5 px-6 text-[#181818]">
              <span className="text-[19px] font-semibold leading-none sm:text-[18px] lg:text-[21px]">
                39
              </span>
              <span className="text-[11px] font-medium leading-none sm:text-[12px] lg:text-[16px]">
                Years of expertise
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes supportBadgeFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  );
}
