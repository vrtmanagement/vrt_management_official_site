"use client";

import React, { useEffect, useRef, useState } from "react";


export default function AnimatedCounter({
  value,
  duration = 2000,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
  startOnView = true,
}) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(!startOnView);
  const ref = useRef(null);

  // Observe when the element is in view to start the counter
  React.useEffect(() => {
    if (!startOnView || started) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [startOnView, started]);

  // Run the animation when started or value changes
  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const from = 0;
    const to = value;

    let raf = 0;
    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = from + (to - from) * eased;
      setDisplay(Number(current.toFixed(decimals)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, decimals, started]);

  const formatted = React.useMemo(() => {
    // For large numbers, format with locale separators
    const formatter = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    return `${prefix}${formatter.format(display)}${suffix}`;
  }, [display, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
}