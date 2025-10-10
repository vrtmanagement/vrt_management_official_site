import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";



const sampleItems = [
  {
    id: 1,
    category: "Article",
    title: "People",
    description:
      "Empower your team to achieve extraordinary results. From building high-performing teams to enhancing leadership capabilities, we ensure your people become your greatest asset in driving business success.",
  },
  {
    id: 2,
    category: "Culture and Change",
    title: "Process",
    description:
      "Say goodbye to inefficiencies. Our tailored process optimization strategies streamline your operations, boost productivity, and ensure your systems scale seamlessly as your business grows.",
  },
  {
    id: 3,
    category: "Playbook",
    title: "Strategies",
    description:
      "Create focused growth plans using data-driven insights and market trends. We design strategies tailored to your unique challenges, ensuring steady progress and measurable results.",
    cta: "Explore",
  },
];

export default function CardsGrid({ items = sampleItems }) {
  return (
    <section className="mx-auto w-full">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold text-white/90 text-center text-red-500">Latest Insights</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card
            key={item.id}
            className="group relative overflow-hidden border-white/10 bg-neutral-900/40 p-0 shadow-sm transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Background – image or gradient */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: item.imageUrl
                  ? `url(${item.imageUrl})`
                  : "radial-gradient(1200px 500px at -10% -10%, rgba(99,102,241,0.25), transparent 40%), radial-gradient(800px 400px at 110% 110%, rgba(16,185,129,0.25), transparent 45%), linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: item.imageUrl ? "" : "",
              }}
            />

            {/* Subtle overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/10 to-neutral-950/60" />

            {/* Corner ring accent that animates on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-xl">
              <div className="absolute inset-[6px] rounded-lg border border-white/10" />
              <span className="absolute -inset-px rounded-xl opacity-0 ring-1 ring-emerald-400/60 transition-opacity duration-300 group-hover:opacity-100" />
              {/* Corner runners */}
              <span className="absolute left-4 top-4 h-0.5 w-10 origin-left scale-x-0 rounded-full bg-red-400 transition-transform duration-300 group-hover:scale-x-100" />
              <span className="absolute right-4 top-4 h-10 w-0.5 origin-top scale-y-0 rounded-full bg-red-400 transition-transform duration-300 delay-100 group-hover:scale-y-100" />
              <span className="absolute bottom-4 right-4 h-0.5 w-10 origin-right scale-x-0 rounded-full bg-red-400 transition-transform duration-300 delay-200 group-hover:scale-x-100" />
              <span className="absolute bottom-4 left-4 h-10 w-0.5 origin-bottom scale-y-0 rounded-full bg-red-400 transition-transform duration-300 delay-300 group-hover:scale-y-100" />
            </div>

            {/* Content */}
            <div className="relative flex min-h-72 flex-col justify-end gap-3 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-full bg-white/10 text-white">
                  {item.category.toUpperCase()}
                </Badge>
               
              </div>

              <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl">
                {item.title}
              </h3>

              {/* Description – revealed on hover */}
              <p className="line-clamp-3 max-w-prose text-sm text-white/80 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:blur-0 md:group-hover:translate-y-0 group-hover:translate-y-0 group-hover:delay-100">
                {item.description}
              </p>

              {/* Footer CTA – slide up on hover */}
              {/* <div className="mt-1 flex items-center justify-between opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Button
                  variant="secondary"
                  className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-emerald-950 hover:bg-emerald-300"
                >
                  {item.cta ?? "Learn more"}
                </Button>
              </div> */}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}