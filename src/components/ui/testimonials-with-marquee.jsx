import { cn } from "@/lib/utils"
import { TestimonialCard } from "@/components/ui/testimonial-card"

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 sm:py-24  px-0",
      className
    )}>
      <div className="mx-auto flex flex-col items-center gap-4 text-center sm:gap-16" style={{ maxWidth: 'var(--max-width-container, 1280px)' }}>
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 flex-row">
            <div className="flex shrink-0 [gap:1rem] animate-marquee flex-row group-hover:[animation-play-state:paused] [--duration:300s]">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`first-${i}`}
                  {...testimonial}
                />
              ))}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`second-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

