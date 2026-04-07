"use client";

const roadmapSteps = [
  {
    title: "Mindset",
    step: "Step 01",
    heading: "Shift Your Mental Model",
    description:
      "Think like a street busker, not like a passive student. No one hired the busker. They showed up, delivered value, and earned their reward. You do the same with companies.",
    icon: "/internship-page/section3/icon1.png",
  },
  {
    title: "Self-Assessment",
    step: "Step 02",
    heading: "Audit Your Skills",
    description:
      "Review your coursework, clubs, volunteer roles, and jobs. Extract both hard skills (data, design, coding) and soft skills (leadership, communication, sales). You have more than you think.",
    icon: "/internship-page/section3/icon2.png",
  },
  {
    title: "Strategy",
    step: "Step 03",
    heading: "Match Skills to Business Needs",
    description:
      "Every skill solves a real business problem.\nWriting = content strategy.\nTech = automation or SEO.\nResearch = competitor analysis.\nDesign = branding.\nConnect your strengths to their pain points.",
    icon: "/internship-page/section3/icon3.png",
  },
  {
    title: "Research",
    step: "Step 04",
    heading: "Find Target Companies",
    description:
      "Focus on small to mid-size companies with under 500 employees. Use LinkedIn Premium filters for size, industry, and city. Less bureaucracy means faster access to decision-makers.",
    icon: "/internship-page/section3/icon4.png",
  },
  {
    title: "Business Setup",
    step: "Step 05",
    heading: "Set Up Like a Business",
    description:
      "Name your consulting practice, consider forming an LLC, and prepare a W9 form. Offering to work as a 1099 contractor removes the paperwork burden for companies and makes it easier for them to say YES.",
    icon: "/internship-page/section3/icon5.png",
  },
  {
    title: "Outreach",
    step: "Step 06",
    heading: "Reach Out the Right Way",
    description:
      "Optimise your LinkedIn profile. Send personalised connection requests under 300 characters. Follow up with targeted emails, referencing specific company needs. Always include a Calendly booking link.",
    icon: "/internship-page/section3/icon6.png",
  },
  {
    title: "Proposal",
    step: "Step 07",
    heading: "Write a Winning Proposal",
    description:
      "Your 8-part proposal covers: Introduction, Company Needs, Your Skills, Proposed Contributions, Internship Structure, Learning Goals, Conclusion, and Contact Info. Be specific about deliverables, not vague.",
    icon: "/internship-page/section3/icon7.png",
  },
  {
    title: "Launch",
    step: "Step 08",
    heading: "Launch, Sign and Document",
    description:
      "Negotiate your terms, sign a formal contract covering KPIs and deliverables, and keep a weekly journal throughout. This documentation becomes your resume proof and interview ammunition.",
    icon: "/internship-page/section3/icon8.png",
  },
];

export default function InternshipRoadmapSection() {
  return (
    <section className="w-full bg-[#FFF2F2] py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <h2 className="mx-auto max-w-[900px] text-center text-[46px] font-bold leading-[1.15] text-black">
          Your Complete Roadmap to Creating Your Own Internship
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {roadmapSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-[14px] bg-[#f8f8f8] p-5 shadow-[0_1px_4px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-6 w-6 object-contain"
                  />
                  <p className="text-[16px] font-medium leading-none text-[#cf2e2e]">
                    {item.title}
                  </p>
                </div>
                <p className="text-[15px] font-medium text-[#cf2e2e]">{item.step}</p>
              </div>

              <h3 className="mt-4 text-[18px] font-bold leading-[1.15] text-[#d91f1f]">
                {item.heading}
              </h3>
              <p className="mt-2 whitespace-pre-line text-[16px] leading-[1.32] text-[#2f2f2f]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-[980px] rounded-[14px] mb-10 mt-15 bg-[#FFDDDD] px-6 py-6 text-center">
          <h3 className="text-[34px] font-bold leading-tight text-[#d91f1f]">
            VRT Guides You Through All 8 Steps
          </h3>
          <p className="mx-auto mt-2 max-w-[860px] text-[19px]  leading-[1.35] text-[#1f1f1f]">
            You don&apos;t have to figure this out alone. VRT Management Group&apos;s
            experienced consultants and coaches will work with you at every stage
            from skill assessment all the way to landing and launching your
            internship.
          </p>
        </div>
      </div>
    </section>
  );
}
