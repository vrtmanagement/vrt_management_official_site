import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Craft a Strategic Growth Plan",
    description:
      "Get a personalized roadmap that aligns with your long-term vision and leads to measurable business growth.",
  },
  {
    id: "process-2",
    title: "Growth as a Process",
    description:
      "We believe in continuous improvement, helping you evolve your business over time.",
  },
  {
    id: "process-3",
    title: "Build a High-Performance Team",
    description:
      "Build a High-Performance Team"
  },
  {
    id: "process-4",
    title: "Boost Operational Efficiency",
    description:
      "Streamline your business processes to reduce waste, increase productivity, and improve profitability.",
  },
  {
    id: "process-5",
    title: "Enhance Your Leadership Skills",
    description:
      "Become the dynamic CEO your business needs with our leadership development and behavioral assessments.",
  },
  {
    id: "process-6",
    title: "Increase Revenue & Profits",
    description:
      "Our sales mastery techniques and strategic positioning tools ensure you close high-value deals and dominate your market.",
  },
]


const WORK_PROJECTS = [
  {
    id: "work-project-1",
    title: "E-Commerce Platform",
    services: ["E-Commerce", "Branding", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-2",
    title: "Marketing Agency",
    services: ["Partnership", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-3",
    title: "Portfolio Website",
    services: ["Portfolio", "Partnership", "UI UX Design"],
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const ACHIEVEMENTS = [
  {
    id: "achievement-1",
    title: "4",
    description: "site of the day",
    bg: "rgb(220, 38, 38)", // Red color
  },
  {
    id: "achievement-2",
    title: "60+",
    description: "website created",
    bg: "rgb(185, 28, 28)", // Darker red
  },
  {
    id: "achievement-3",
    title: "5+",
    description: "years of experience",
    bg: "rgb(153, 27, 27)", // Even darker red
  },
  {
    id: "achievement-4",
    title: "6+",
    description: "component created",
    bg: "rgb(127, 29, 29)", // Darkest red
  },
]

export const Process = () => {
  return (
    <div className="container min-h-svh place-content-center bg-stone-50 px-6 text-stone-900 xl:px-12">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
        <div className="left-0 top-0 md:sticky md:h-svh md:py-12">
          <h5 className="text-xs uppercase tracking-wide">our process</h5>
          <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight"
          style={{ fontFamily: 'Lora, serif' }}
          >
            Introducing the {" "}
            <span className="text-red-500">EGA™ Mentorship </span>Program
          </h2>
          <p className="max-w-prose text-sm">
            The Entrepreneur Growth Alliance™ (EGA™) Mentorship Program provides you with the tools, insights, and support to overcome scaling challenges and achieve sustainable growth. This mentorship goes beyond traditional coaching—it’s a hands-on, strategic partnership designed to help you thrive.
          </p>
        </div>
        <ContainerScroll className="min-h-[400vh] space-y-8 py-12">
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              key={phase.id}
              index={index + 2}
              className="rounded-2xl border p-8 shadow-md backdrop-blur-md"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="my-6 text-2xl font-bold tracking-tighter">
                  {phase.title}
                </h2>
                <h3 className="text-2xl font-bold text-red-500">
                  {String(index + 1).padStart(2, "0")}
                </h3>
              </div>

              <p className="text-foreground">{phase.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  )
}

export const Work = () => {
  return (
    <div className="container min-h-svh place-content-center bg-slate-900 p-12 text-stone-50">
      <div className="text-center">
        <h5 className="text-xs uppercase tracking-wide">latest projects</h5>
        <h2 className="mb-4 mt-1 text-4xl font-bold tracking-tight">
          Get a glimpse of <span className="text-red-500">our work</span>
        </h2>
        <p className="mx-auto max-w-prose text-sm text-muted/80">
          From ecommerce to startup landing pages and single/multi page websites,
          building fully responsive and functional website that showcase your
          product and your unique identity.
        </p>
      </div>
      <ContainerScroll className="min-h-[500vh] py-12">
        {WORK_PROJECTS.map((project, index) => (
          <CardSticky
            key={project.id}
            index={index}
            className="w-full overflow-hidden rounded-sm border border-x-red-900 border-y-red-500 bg-red-950"
            incrementY={60}
            incrementZ={5}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-1">
                {project.services.map((service) => (
                  <div
                    key={service}
                    className="flex rounded-xl bg-red-900 px-2 py-1"
                  >
                    <span className="text-xs tracking-tighter text-muted">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <img
              className="size-full object-cover"
              width="100%"
              height="100%"
              src={project.imageUrl}
              alt={project.title}
            />
          </CardSticky>
        ))}
      </ContainerScroll>
    </div>
  )
}

export const Achievements = () => {
  return (
    <div className="min-h-svh bg-slate-800">
      <div className="container py-12">
        <div className="text-center mb-12">
          <h5 className="text-xs uppercase tracking-wide text-red-400">achievements</h5>
          <h2 className="mb-4 mt-1 text-4xl font-bold tracking-tight text-white">
            Our <span className="text-red-500">success metrics</span>
          </h2>
          <p className="mx-auto max-w-prose text-sm text-gray-300">
            Numbers that reflect our commitment to excellence and client satisfaction.
          </p>
        </div>
        <ContainerScroll className="min-h-[400vh] place-items-center space-y-8 p-12 text-center text-zinc-50">
          {ACHIEVEMENTS.map((achievement, index) => (
            <CardSticky
              key={achievement.id}
              incrementY={20}
              index={index + 2}
              className="flex h-72 w-[420px] flex-col place-content-center justify-evenly rounded-2xl border border-current p-8 shadow-md"
              style={{ rotate: index + 2, background: achievement.bg }}
            >
              <h1 className="text-left text-6xl font-semibold opacity-80">
                {achievement.title}
              </h1>
              <div className="place-items-end text-right">
                <h3 className="max-w-[10ch] text-wrap text-4xl font-semibold capitalize tracking-tight">
                  {achievement.description}
                </h3>
              </div>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  )
}

export { Process, Work, Achievements }
