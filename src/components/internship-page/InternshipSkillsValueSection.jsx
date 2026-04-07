"use client";

const skillColumns = [
  [
    {
      title: "Video",
      description: "YouTube or TikTok content, Instagram reels, promotional videos",
    },
    {
      title: "Writing",
      description:
        "Blog content, newsletters, website copy, grant writing, content calendars",
    },
    {
      title: "Research",
      description:
        "Competitor analysis, market research, customer surveys, industry reports",
    },
    {
      title: "Design",
      description:
        "Logos, marketing materials, social graphics, brand guidelines",
    },
    {
      title: "Communication",
      description:
        "Customer outreach, sales pitches, workshops, client presentations",
    },
  ],
  [
    {
      title: "Foreign Language",
      description:
        "Translation services, international business communication",
    },
    {
      title: "Social Media",
      description:
        "Manage accounts, create posts, grow followers, track engagement analytics",
    },
    {
      title: "Tech / Coding",
      description:
        "Website fixes, app development, Zapier automation, SEO optimization",
    },
    {
      title: "Data and Math",
      description:
        "Budget analysis, data entry, sales reporting, spending audits",
    },
    {
      title: "Organization",
      description:
        "Calendar management, CRM cleanup, database creation, event planning",
    },
  ],
];

export default function InternshipSkillsValueSection() {
  return (
    <section className="w-full bg-[#FFF2F2] py-12 md:py-16">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 md:px-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="text-[26px] font-semibold text-[#FF0000]">Know Your Value</p>
          <h2 className="mt-2 max-w-[620px] text-[42px] font-bold leading-[1.12] text-black">
            Every Skill You Have Solves a{" "}
            <span className="text-[#ff2a2a]">Real Business Problem</span>
          </h2>
          <p className="mt-4 max-w-[620px] text-[25px] leading-[1.35] text-[#222]">
            You already have more to offer than you realise. Here&apos;s how your
            existing skills translate directly into value for any company.
          </p>

          <img
            src="/internship-page/section3/side-img.png"
            alt="Students discussing skills"
            className="mt-6 h-auto w-full max-w-[510px] object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {skillColumns.map((column, colIndex) => (
            <div key={`col-${colIndex}`} className="space-y-10">
              {column.map((item) => (
                <div key={item.title}>
                  <h3 className="text-[28px] font-semibold leading-tight text-[#FF0000]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[19px] leading-[1.3] text-[#2c2c2c]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
