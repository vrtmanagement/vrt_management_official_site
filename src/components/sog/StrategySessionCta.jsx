'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import LoadingButton from '@/components/ui/LoadingButton';

const promisePoints = [
  'We diagnose your exact stage before prescribing anything.',
  'We listen first. We understand your world.',
  'You walk away with actionable clarity, even if we never work together.',
  'We build systems that outlast our involvement, not dependency.',
];

const StrategySessionCta = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B132B] py-16 md:py-20 my-10">
      <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-[#DC2626]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#ef4444]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-10">
          <p className="mb-3 text-lg font-semibold  tracking-[0.14em] text-[#FCA5A5]">
            Ready to find out your stage?
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            45 minutes. Just clarity.
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate-200 md:text-lg">
            Tell us where you are. We&apos;ll tell you exactly what stage you&apos;re in,
            what&apos;s holding you back, and what the right playbook looks like.
            Bring your biggest challenge, and we&apos;ll make it the most valuable
            hour of your month.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <LoadingButton
              href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1"
              external
              spinnerColor="text-white"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#DC2626] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] hover:shadow-[0_18px_32px_rgba(220,38,38,0.35)] sm:w-auto"
            >
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                Book Your Free Strategy Session
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </LoadingButton>
            <p className="text-sm text-slate-300">
              No obligation · 45 minutes · Immediate value
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm font-medium text-[#FCA5A5]">
              Contact: Book directly with Rajesh Tedla&apos;s team.
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">Our promise to you:</h3>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {promisePoints.map((point) => (
                <p key={point} className="flex items-start text-sm leading-relaxed text-slate-200">
                  <span className="mr-2 mb-1 text-[#FCA5A5]">→</span>
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySessionCta;
