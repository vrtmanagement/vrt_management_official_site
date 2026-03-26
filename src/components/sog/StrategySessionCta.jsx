// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';
// import LoadingButton from '@/components/ui/LoadingButton';

// const promisePoints = [
//   'We diagnose your exact stage before prescribing anything.',
//   'We listen first. We understand your world.',
//   'You walk away with actionable clarity, even if we never work together.',
//   'We build systems that outlast our involvement, not dependency.',
// ];

// const StrategySessionCta = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#0B132B] py-16 md:py-20 my-10">
//       <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-[#DC2626]/20 blur-3xl" />
//       <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#ef4444]/20 blur-3xl" />

//       <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-10">
//           <p className="mb-3 text-lg font-semibold  tracking-[0.14em] text-[#FCA5A5]">
//             Ready to find out your stage?
//           </p>
//           <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
//             45 minutes. Just clarity.
//           </h2>
//           <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate-200 md:text-lg">
//             Tell us where you are. We&apos;ll tell you exactly what stage you&apos;re in,
//             what&apos;s holding you back, and what the right playbook looks like.
//             Bring your biggest challenge, and we&apos;ll make it the most valuable
//             hour of your month.
//           </p>

//           <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
//             <LoadingButton
//               href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1"
//               external
//               spinnerColor="text-white"
//               className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#DC2626] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] hover:shadow-[0_18px_32px_rgba(220,38,38,0.35)] sm:w-auto"
//             >
//               <span className="inline-flex items-center gap-2 whitespace-nowrap">
//                 Book Your Free Strategy Session
//                 <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </span>
//             </LoadingButton>
//             <p className="text-sm text-slate-300">
//               No obligation · 45 minutes · Immediate value
//             </p>
//           </div>

//           <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
//             <p className="text-sm font-medium text-[#FCA5A5]">
//               Contact: Book directly with Rajesh Tedla&apos;s team.
//             </p>
//             <h3 className="mt-3 text-lg font-semibold text-white">Our promise to you:</h3>
//             <div className="mt-3 grid gap-3 md:grid-cols-2">
//               {promisePoints.map((point) => (
//                 <p key={point} className="flex items-start text-sm leading-relaxed text-slate-200">
//                   <span className="mr-2 mb-1 text-[#FCA5A5]">→</span>
//                   {point}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StrategySessionCta;

'use client';

import React from 'react';
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
    // <section
    //   className="relative overflow-visible my-40 "
    //   style={{ background: 'linear-gradient(90.6deg, #252525 1.75%, #8B8B8B 127.08%)' }}
    // >
    //   <div className="relative mx-auto max-w-8xl px-28">
    //     <div className="grid md:grid-cols-2 items-center">

    //       {/* LEFT — CONTENT DIV */}
    //       <div className="z-10 py-10 text-white ml-10">
    //         <h2 className="text-3xl font-bold leading-tight md:text-4xl">
    //           Ready to find out your stage?
    //         </h2>
    //         <p className="mt-2 text-xl font-bold text-white">
    //           45 minutes. Just clarity.
    //         </p>
    //         <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 md:text-[21]">
    //           Tell us where you are. We&apos;ll tell you exactly what stage you&apos;re in,
    //           what&apos;s holding you back, and what the right playbook looks like.
    //           Bring your biggest challenge, and we&apos;ll make it the most valuable
    //           hour of your month.
    //         </p>

    //         <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
    //           <LoadingButton
    //             href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1"
    //             external
    //             spinnerColor="text-white"
    //             className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#DC2626] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] hover:shadow-[0_18px_32px_rgba(220,38,38,0.35)]"
    //           >
    //             Book your free Strategy session
    //             {/* <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> */}
    //           </LoadingButton>
    //           <p className="text-sm text-slate-300">
    //             No obligation · 45 minutes · Immediate value
    //           </p>
    //         </div>

    //         <div className="mt-6 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md">
    //           <p className="text-sm font-semibold text-white">
    //             Contact: Book directly with Rajesh Tedla&apos;s team.
    //           </p>
    //           <h3 className="mt-2 text-lg font-semibold text-white">
    //             Our promise to you:
    //           </h3>
    //           <div className="mt-2 grid gap-3 md:grid-cols-2">
    //             {promisePoints.map((point) => (
    //               <p key={point} className="flex items-start text-sm text-slate-200">
    //                 <span className="mr-2 text-[#F87171]">✔</span>
    //                 {point}
    //               </p>
    //             ))}
    //           </div>
    //         </div>
    //       </div>

    //       {/* RIGHT — IMAGE DIV */}
    //       <div className="relative h-full min-h-[500px]">
    //         <img
    //           src="/sog/ready-img.png"
    //           alt="Consultant"
    //           className="absolute -top-38 right-0 h-[700px]   w-auto object-contain scale-x-[-1]"
    //         />
    //       </div>

    //     </div>
    //   </div>
    // </section>
    <section
  className="relative overflow-visible my-40"
  style={{
    background: `
      radial-gradient(circle at top right, rgba(232,149,169,0.6), transparent 15%),
      radial-gradient(circle at bottom left, rgba(232,149,169,0.6), transparent 15%),
      linear-gradient(90.6deg, #252525 1.75%, #8B8B8B 127.08%)
    `,
  }}
>



  <div className="relative mx-auto max-w-10xl px-34">
    <div className="grid md:grid-cols-2 items-center">

      {/* LEFT — CONTENT DIV */}
      <div className="z-10 py-10 text-white ml-10 lg:w-7xl">
        <h2 className="text-3xl font-bold leading-tight md:text-5xl">
          Ready to find out your stage?
        </h2>
        <p className="mt-2 text-2xl font-bold text-white">
          45 minutes. Just clarity.
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 md:text-[21]">
          Tell us where you are. We&apos;ll tell you exactly what stage you&apos;re in,
          what&apos;s holding you back, and what the right playbook looks like.
          Bring your biggest challenge, and we&apos;ll make it the most valuable
          hour of your month.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <LoadingButton
            href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1"
            external
            spinnerColor="text-white"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#DC2626] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] hover:shadow-[0_18px_32px_rgba(220,38,38,0.35)]"
          >
            Book your free Strategy session
          </LoadingButton>
          <p className="text-sm md:text-xl text-white-300">
            No obligation · 45 minutes · Immediate value
          </p>
        </div>

        <div className="mt-6 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md">
          <p className="text-sm font-semibold text-white md:text-[21px]">
            Contact: Book directly with Rajesh Tedla&apos;s team.
          </p>
          <h3 className="mt-2 text-lg md:text-[19px] font-semibold text-white">
            Our promise to you:
          </h3>
          <div className="mt-2 grid gap-3 md:grid-cols-2">
            {promisePoints.map((point) => (
             <p key={point} className="flex items-start text-sm md:text-[16px] text-slate-100">
             <img
               src="/sog/hand-icon.png"
               alt="icon"
               className="mr-2 h-4 w-4 object-contain mt-0.5"
             />
             {point}
           </p>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT — IMAGE DIV */}
      <div className="relative h-full min-h-[500px] z-10">
        <img
          src="/sog/ready-img.png"
          alt="Consultant"
          className="absolute -top-35 -right-10 h-[731px] w-auto object-contain scale-x-[-1]"
        />
      </div>

    </div>
  </div>
</section>
  );
};

export default StrategySessionCta;