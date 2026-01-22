"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";


// Subtle procedural noise texture as a data-URI SVG
const NOISE =
  "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\" viewBox=\"0 0 140 140\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.04\"/></svg>')";

export const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(true);
  const [form, setForm] = useState({ first: "", last: "", email: "" });

  // Mouse-follow spotlight
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(600px 300px at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 60%)`;

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email) return;
    setLoading(true);
    // Simulate async request
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    // Reset while keeping the feel dynamic
    setForm({ first: "", last: "", email: "" });
  };

  return (
    <footer
      onMouseMove={onMouseMove}
      className={cn(
        "relative isolate overflow-hidden border-t border-white/10 bg-neutral-950 text-neutral-200",
        "[--grid:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
      )}
    >
      {/* Background texture layers */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: spotlight }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "var(--grid), radial-gradient(1200px_600px_at_50%_-10%, rgba(120,120,255,0.06), transparent 60%), radial-gradient(900px_400px_at_90%_10%, rgba(255,80,80,0.05), transparent 60%)",
          backgroundSize: "64px_64px, auto, auto",
          backgroundPosition: "center",
          maskImage:
            "linear-gradient(to top, transparent, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.9))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 mix-blend-overlay"
        style={{ backgroundImage: NOISE }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
        {/* Top section: Headline + Form */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Stay Connected.
              <br /> Learn from Our
              <br /> Experts. Subscribe.
            </p>
          </motion.div> */}

          {/* <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className=""
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="group">
                <label className="text-sm text-neutral-300">First name *</label>
                <input
                  value={form.first}
                  onChange={(e) => setForm({ ...form, first: e.target.value })}
                  className="mt-2 w-full bg-transparent px-0 pb-2 text-white outline-none transition focus:ring-0"
                  placeholder=""
                  autoComplete="given-name"
                />
                <div className="h-px w-full bg-white/20 transition group-focus-within:bg-white" />
              </div>
              <div className="group">
                <label className="text-sm text-neutral-300">Last name *</label>
                <input
                  value={form.last}
                  onChange={(e) => setForm({ ...form, last: e.target.value })}
                  className="mt-2 w-full bg-transparent px-0 pb-2 text-white outline-none transition focus:ring-0"
                  placeholder=""
                  autoComplete="family-name"
                />
                <div className="h-px w-full bg-white/20 transition group-focus-within:bg-white" />
              </div>
              <div className="group sm:col-span-2">
                <label className="text-sm text-neutral-300">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full bg-transparent px-0 pb-2 text-white outline-none transition focus:ring-0"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
                <div className="h-px w-full bg-white/20 transition group-focus-within:bg-white" />
              </div>

              <label className="flex items-center gap-3 text-sm text-neutral-300 sm:col-span-2">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="h-4 w-4 shrink-0 appearance-none rounded-[3px] border border-white/40 bg-transparent transition checked:bg-white checked:shadow-[inset_0_0_0_2px_#0a0a0a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                />
                Yes, subscribe me to your newsletter. *
              </label>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={loading || !checked || !form.email}
                  className={cn(
                    "float-right inline-flex h-11 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-medium text-white transition",
                    "enabled:hover:bg-white enabled:hover:text-neutral-900 enabled:shadow-[0_0_0_1px_#fff_inset,0_0_40px_-10px_rgba(255,255,255,0.5)]",
                    "disabled:cursor-not-allowed disabled:opacity-60"
                  )}
                >
                  {loading ? "Subscribing…" : "Subscribe"}
                </button>
              </div>
            </div>
          </motion.form> */}
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-2 text-sm">
              <p className="font-medium text-white">© {new Date().getFullYear()} VRT Management Group.</p>
              <p className="text-neutral-400">All Rights Reserved.</p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-[auto,1fr] items-start gap-x-4 gap-y-1 text-neutral-300">
                <span className="text-white">Address</span>
                <span>
                  1 Botsford Hill Road
                  PO BOX 150
                  Botsford, CT 06404</span>
                <span className="text-white">Email</span>
                <span>coachrajesh@vrt9.com</span>
                <span className="text-white">Tel</span>
                <span>+1-203-304-1918</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 text-sm text-neutral-300 md:justify-items-end">
              <ul className="space-y-2">
                <li><a className="hover:text-white" href="/ega">EGA™</a></li>
                {/* <li><a className="hover:text-white" href="/ego">EGOS™</a></li> */}
                <li><a className="hover:text-white" href="/ee">EntrepreneurExcellence™</a></li>
                <li><a className="hover:text-white" href="/stages-of-growth-form">Business Stages of Growth</a></li>
              </ul>
              <ul className="space-y-2 md:text-right">
                <li><a className="hover:text-white" href="/privacy-policy">Privacy Policy</a></li>
                {/* <li><a className="hover:text-white" href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a className="hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
