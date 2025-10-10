"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

// Dynamic, pause-on-hover, vertical marquee testimonials
export const Testimonials = ({
  items: externalItems,
  speed = 40, // pixels per second
}) => {
  const defaultItems = useMemo(
    () => [
      {
        name: "Alex Kim",
        role: "Product Designer",
        company: "Northwind",
        initials: "AK",
        quote:
          "This UI kit helped us move from concept to polished prototype in a single afternoon.",
      },
      {
        name: "Priya N.",
        role: "Frontend Lead",
        company: "Acme Corp",
        initials: "PN",
        quote:
          "Framer Motion integrations feel native here—snappy, tasteful, and easy to extend.",
      },
      {
        name: "Diego Santos",
        role: "Engineer",
        company: "Globex",
        initials: "DS",
        quote:
          "The components are thoughtfully composed and match modern accessibility standards.",
      },
      {
        name: "Maya Lee",
        role: "Founder",
        company: "Brightlabs",
        initials: "ML",
        quote:
          "We shipped a delightful MVP that looks like a million bucks—without the friction.",
      },
    ],
    []
  );

  const items = externalItems && externalItems.length > 0 ? externalItems : defaultItems;

  const containerRef = useRef(null);
  const listRef = useRef(null);
  const y = useMotionValue(0);
  const controlsRef = useRef(null);
  const [halfHeight, setHalfHeight] = useState(0);

  // Measure list height (half of duplicated list = single list height)
  useEffect(() => {
    const measure = () => {
      if (!listRef.current) return;
      const single = listRef.current.scrollHeight / 2;
      setHalfHeight(single);
    };
    measure();
    const resize = new ResizeObserver(measure);
    if (listRef.current) resize.observe(listRef.current);
    return () => resize.disconnect();
  }, [items]);

  // Start/Restart animation
  const start = () => {
    if (!halfHeight) return;
    const current = y.get();
    // Normalize current position into [-halfHeight, 0]
    const normalized = ((current % -halfHeight) + -halfHeight) % -halfHeight; // negative value
    y.set(normalized);
    const distance = Math.abs(-halfHeight - normalized);
    const duration = distance / speed; // seconds based on pixels per second

    controlsRef.current = animate(y, -halfHeight, {
      duration: Math.max(0.1, duration),
      ease: "linear",
      // When one loop finishes, jump back to 0 and continue
      onComplete: () => {
        y.set(0);
        start();
      },
    });
  };

  useEffect(() => {
    // Kick off animation
    start();
    return () => controlsRef.current?.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [halfHeight, speed]);

  const handleHoverStart = () => {
    controlsRef.current?.stop();
  };
  const handleHoverEnd = () => {
    start();
  };

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
        {/* Left copy */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              From our <span className="underline decoration-[var(--color-border)] underline-offset-4">community</span>.
            </h2>
            <p className="mt-3 max-w-md text-sm text-[color:var(--color-muted-foreground)]">
              Here's what other teams have to say about working with our motion-first components.
            </p>
          </div>
        </div>

        {/* Right scroller */}
        <div
          className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6"
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
          <div ref={containerRef} className="relative h-72 sm:h-80">
            <motion.div ref={listRef} className="absolute left-0 top-0 w-full" style={{ y }}>
              {[...items, ...items].map((t, i) => (
                <figure
                  key={i}
                  className="mb-8 rounded-lg bg-[var(--color-card)]/60 p-4 ring-1 ring-inset ring-[var(--color-border)]"
                >
                  <Quote className="mb-3 size-5 text-[color:var(--color-primary)]" />
                  <blockquote className="text-lg font-medium leading-snug sm:text-xl">"{t.quote}"</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 text-sm">
                    <span className="inline-flex size-9 select-none items-center justify-center rounded-full bg-[var(--color-secondary)] font-semibold ring-1 ring-[var(--color-border)]">
                      {t.initials}
                    </span>
                    <div>
                      <div className="font-medium">{t.name}</div>
                      <div className="text-[color:var(--color-muted-foreground)]">{t.role}, {t.company}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};