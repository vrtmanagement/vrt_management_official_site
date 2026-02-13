// 'use client';

// import Image from "next/image";
// import { Button } from "../ui/button";
// import { useRouter } from "next/navigation";

// export function CtaSection() {
//     const router = useRouter();

//     const handleJoinProgram = () => {
//         router.push('/ega/registration-form');
//     };

//     return (
//         <section className="bg-neutral-50 min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
//             <div className="mx-auto max-w-7xl w-full">
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center text-center lg:text-left px-4 sm:px-0">
                    
//                     <div className="space-y-6 max-w-2xl order-2 lg:order-1 px-4 sm:px-0">
//                         <h2
//                             className="text-5xl lg:text-6xl font-black text-neutral-900 leading-tight"
//                             style={{ fontFamily: 'Merriweather, serif' }}
//                         >
//                             Rajesh Tedla
//                         </h2>

//                         <h3
//                             className="text-3xl lg:text-3xl font-semibold text-neutral-800"
//                             style={{ fontFamily: 'Lato, serif' }}
//                         >
//                             A Trusted Mentor with 39+ Years of Scaling Businesses
//                         </h3>

//                         <div
//                             className="space-y-4 text-neutral-700 text-lg leading-relaxed"
//                             style={{ fontFamily: 'Inter, serif' }}
//                         >
//                             <p>
//                                 I'm Rajesh Tedla, Founder and CEO of VRT Management Group, LLC and since 2018 a mentor for the Stanford LBAN Entrepreneur Workshop where I guide growth-focused entrepreneurs from around the world.
//                             </p>
//                             <p className="font-medium">
//                                 With over 39+ years of experience I’ve dedicated my career to helping business leaders achieve sustainable scalable growth. I’ve personally guided more than 1,420+ entrepreneurs across 28+ countries through transformative scaling journeys using proven methodologies that have generated over $520 million in measurable business growth.
//                             </p>
//                         </div>

//                         <div className="pt-2 flex items-center justify-center gap-3">
//   <Button
//     size="lg"
//     onClick={handleJoinProgram}
//     className="bg-red-600 text-white text-lg font-semibold px-10 py-6 hover:bg-white hover:text-red-600 hover:border-red-600 border-2 border-red-600 transition-all duration-300 cursor-pointer"
//   >
//     Book Free 45 Minute Strategy Call
//   </Button>
//   <span className="text-gray-900 text-bottom">
//     -with Rajesh Tedla himself
//   </span>
// </div>

//                     </div>

//                     <div className="relative flex justify-center order-1 lg:order-2">
//                         <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm h-[300px] lg:h-[400px]">
//                             <Image
//                                 src="/image2_cropped.jpg"
//                                 alt="Rajesh Tedla"
//                                 width={500}
//                                 height={300}
//                             />
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

'use client';

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function CtaSection() {
  const router = useRouter();

  const handleJoinProgram = () => {
    router.push('/ega/registration-form');
  };

  return (
    <section className="bg-neutral-50 min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center text-center lg:text-left px-4 sm:px-0">

          <div className="space-y-6 max-w-2xl order-2 lg:order-1 px-4 sm:px-0">
            <h2
              className="text-5xl lg:text-6xl font-black text-neutral-900 leading-tight"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Rajesh Tedla
            </h2>

            <h3
              className="text-3xl lg:text-3xl font-semibold text-neutral-800"
              style={{ fontFamily: 'Lato, serif' }}
            >
              Founder & CEO, VRT Management Group | Creator of EGA<sup>©</sup>
            </h3>

            <div
              className="space-y-4 text-neutral-700 text-lg leading-relaxed"
              style={{ fontFamily: 'Inter, serif' }}
            >
              <p>
                I work with entrepreneurs, founders, co-founders, and SMB executive leaders running
                organizations with 20–500 employees who want growth that is repeatable, predictable,
                and scalable—not chaotic.
              </p>

              <p>
                With 39+ years of experience, I help leaders translate strategy into execution by
                implementing operating systems that drive clarity, alignment, accountability, and
                measurable performance. This work is practical, execution-focused, and designed to
                scale with the business.
              </p>

              <p>
                Through VRT and the Entrepreneur Growth Alliance<sup>©</sup> (EGA), I’ve supported
                <strong> 1,424+ entrepreneurs, SMBs, and leadership teams combined</strong>, delivering
                over <strong>$524M+ in measurable financial impact</strong>.
              </p>

              <p>
                By 2030, EGA’s mission is to partner with <strong>1,000 entrepreneurs and SMBs</strong> to
                build resilient, high-value companies—creating <strong>$1M+ in financial value per
                business</strong> and <strong>$1B+ in total enterprise value</strong>.
              </p>

              <p>
                EGA helps leaders scale using practical, measurable systems including strategy execution
                frameworks (“Growth As A Process”), 90-day execution plans, multi-year operating and
                strategic roadmaps, revenue optimization, operational excellence, leadership alignment,
                and disciplined change management—so growth becomes intentional, not accidental.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-center gap-3">
              <Button
                size="lg"
                onClick={handleJoinProgram}
                className="bg-red-600 text-white text-lg font-semibold px-10 py-6 hover:bg-white hover:text-red-600 hover:border-red-600 border-2 border-red-600 transition-all duration-300 cursor-pointer"
              >
                Book Free 45 Minute Strategy Call
              </Button>
              <span className="text-gray-900 text-bottom">
                – with Rajesh Tedla himself
              </span>
            </div>
          </div>

          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm h-[300px] lg:h-[400px]">
              <Image
                src="/image2_cropped.jpg"
                alt="Rajesh Tedla"
                width={500}
                height={300}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

