"use client";

const proposalParts = [
  {
    number: "01",
    title: "Introduction",
    description:
      "Who you are, your school, major, and why you are reaching out to this specific company, not a generic copy-paste.",
    theme: "orange",
  },
  {
    number: "02",
    title: "Company Needs",
    description:
      "Demonstrate that you have done your homework. Summarise the challenges, growth areas, and gaps you spotted in your research.",
    theme: "red",
  },
  {
    number: "03",
    title: "Your Skills & Strengths",
    description:
      "List your top 3-5 skills with real examples. Connect each skill directly to the company's specific needs.",
    theme: "orange",
  },
  {
    number: "04",
    title: "Proposed Contributions",
    description:
      "Be specific. State exactly what you will deliver over 8-12 weeks: projects, tasks, campaigns, reports, or systems.",
    theme: "red",
  },
  {
    number: "05",
    title: "Internship Structure",
    description:
      "Propose your start date, end date, weekly schedule, and whether you prefer hybrid, remote, or on-site collaboration.",
    theme: "orange",
  },
  {
    number: "06",
    title: "Learning Goals",
    description:
      "Show you value serious growth. Tell them what you want to learn and how the company's work will help you develop.",
    theme: "red",
  },
  {
    number: "07",
    title: "Conclusion",
    description:
      "Summarise the win-win clearly. Reiterate your fit and enthusiasm, and end with confidence, not apology.",
    theme: "orange",
  },
  {
    number: "08",
    title: "Contact Information",
    description:
      "Include your phone number, email address, and LinkedIn. Make it as easy as possible for them to respond.",
    theme: "red",
  },
];

const themeStyles = {
  orange: {
    ringImage: "/internship-page/proposal/badge-ring-orange.png",
    badgeImage: "/internship-page/proposal/badge-fill-orange.png",
    badgeInner: "bg-[#FFF8F0]",
    pillText: "text-[#ff8a20]",
    card:
      "border border-[#ffbf84] bg-gradient-to-r from-[#ffb158] via-[#ff9a37] to-[#ff922f] text-white",
  },
  red: {
    ringImage: "/internship-page/proposal/badge-ring-red.png",
    badgeImage: "/internship-page/proposal/badge-fill-red.png",
    badgeInner: "",
    pillText: "text-[#ff3026]",
    card:
      "border border-[#ff8d86] bg-gradient-to-r from-[#ff5748] via-[#ff3026] to-[#ff1f1f] text-white",
  },
};

function ProposalCard({ item }) {
  const styles = themeStyles[item.theme];

  return (
    <article className="group relative min-h-[108px] sm:min-h-[126px]">
      <div
        className="absolute left-[6px] top-1/2 z-20 h-[102px] w-[102px] -translate-y-1/2 sm:left-[26px] sm:h-[126px] sm:w-[126px]"
        style={{ top: "calc(1 / 2 * 83%)" }}
      >
        <img
          src={styles.ringImage}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-1/2 h-[98px] w-[46px] -translate-y-1/2 object-contain sm:h-[120px] sm:w-[57px]"
          style={{ top: "calc(1 / 2 * 92%)" }}
        />

        <div
          className="absolute left-[15px] top-1/2 h-[82px] w-[82px] -translate-y-1/2 sm:left-[18px] sm:h-[101px] sm:w-[100px]"
          style={{ top: "calc(1 / 2 * 92%)" }}
        >
          <img
            src={styles.badgeImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-contain"
          />
          {styles.badgeInner ? (
            <div className={`absolute inset-[7px] rounded-full ${styles.badgeInner}`} />
          ) : null}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
            <span
              className={`text-[11px] font-semibold leading-none tracking-[0.01em] sm:text-[13px] ${styles.pillText}`}
            >
              Part
            </span>
            <span className="mt-[3px] text-[20px] font-bold leading-none text-[#1b1b1b] sm:mt-[5px] sm:text-[24px]">
              {item.number}
            </span>
          </div>
        </div>

        <div className="absolute left-[15px] top-1/2 h-[80px] w-[80px] -translate-y-1/2 rounded-full shadow-[0_10px_20px_rgba(15,23,42,0.06)] sm:left-[18px] sm:h-[96px] sm:w-[96px]" />
      </div>

      <div
        className={`relative ml-[64px] flex min-h-[82px] w-[calc(100%-64px)] max-w-none items-center overflow-hidden rounded-[14px] px-3 py-3 pl-[44px] transition-shadow duration-300 group-hover:shadow-[0_18px_34px_rgba(15,23,42,0.14)] sm:ml-[92px] sm:min-h-[92px] sm:w-full sm:max-w-[488px] sm:px-5 sm:py-4 sm:pl-[70px] ${styles.card}`}
      >
        <div className="absolute -left-[34px] top-1/2 h-[70px] w-[70px] -translate-y-1/2 rounded-full bg-[#FFF8F8] sm:-left-[48px] sm:h-[96px] sm:w-[96px]" />
        <div className="absolute -left-[14px] top-1/2 h-[40px] w-[40px] -translate-y-1/2 rounded-full bg-[#FFF8F8]/70 blur-[1px] sm:-left-[18px] sm:h-[56px] sm:w-[56px]" />

        <div className="grid w-full grid-cols-[0.92fr_1.6fr] items-center gap-3 sm:grid-cols-[0.92fr_2.08fr] sm:gap-5">
          <h3 className="self-center text-[12px] font-bold leading-[1.08] text-white sm:text-[16px]">
            {item.title}
          </h3>
          <p className="self-center text-[10px] leading-[1.2] text-white/95 sm:text-[14px]">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function InternshipProposalSection() {
  const leftColumn = proposalParts.filter((_, index) => index % 2 === 0);
  const rightColumn = proposalParts.filter((_, index) => index % 2 === 1);

  return (
    <section className="w-full  py-14 md:py-16">
      <div className="mx-auto w-full max-w-[1520px] px-6 md:px-8">
        <div className="max-w-[402px] lg:ml-[7.5rem]">
          <p className="text-[12px] font-semibold leading-tight text-[#ff3b30] md:text-[18px]">
            Your Proposal Blueprint
          </p>

          <h2 className="mt-2 text-[32px] font-bold leading-[1.04] text-black sm:text-[36px] md:text-[42px]">
            The 8-Part Winning
            <span className="block text-[#ff2a2a]">Internship Proposal</span>
          </h2>

          <p className="mt-4 max-w-[360px] text-[15px] leading-[1.5] text-[#2a2a2a] md:text-[19px]">
            A great proposal is specific, value-driven, and tailored to the
            company. Here&apos;s exactly what your proposal needs to include and
            what VRT will help you write.
          </p>
        </div>

        <div className="mt-20 space-y-[3.75rem] lg:hidden">
          {proposalParts.map((item) => (
            <ProposalCard key={item.number} item={item} />
          ))}
        </div>

        <div className="mt-20 hidden grid-cols-1 gap-y-14 lg:grid lg:grid-cols-[540px_540px] lg:justify-center lg:gap-x-[4.75rem]">
          <div className="space-y-[3.75rem] lg:w-[540px]">
            {leftColumn.map((item) => (
              <ProposalCard key={item.number} item={item} />
            ))}
          </div>

          <div className="space-y-[3.75rem] lg:w-[540px]">
            {rightColumn.map((item) => (
              <ProposalCard key={item.number} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
