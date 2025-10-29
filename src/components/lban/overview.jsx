"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BookOpen, Users, Target, TrendingUp } from "lucide-react";

const OverviewSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  return (
    <section
      ref={sectionRef}
      id="overview"
      className="bg-white py-16 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className={`flex items-center gap-4 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>

          <div>
            <h2 className="font-bold text-[36px] md:text-[42px] leading-[1.2] text-slate-900">
              Overview
            </h2>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Content Section */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-[1.7] text-slate-700">
                The role of chief human resources officer is more complex than ever before. CHROs face monumental change—navigating growing employee voice, increased public airing of internal dynamics, data and privacy issues, the challenges of distributed workforces and technological advances such as AI. Yet, many find themselves without a clear roadmap for success.
              </p>

              <div className="relative p-6 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-lg md:text-xl leading-[1.7] text-slate-700 pl-4">
                  There is an unprecedented opportunity for human resources leaders to acquire the skills needed to transform modern work. The Berkeley Transformative CHRO Leadership Program co-led by Laszlo Bock prepares HR executives to navigate these challenges and lead the next evolution of work at a global scale.
                </p>
              </div>

              <p className="text-lg md:text-xl leading-[1.7] text-slate-700">
                This CHRO leadership program bridges academic theory with practical business needs, equipping you with the knowledge to leverage data, technology, and financial expertise to lead powerful, long-lasting organizational success and change.
              </p>
            </div>

          </div>

          {/* Image Section */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/61127b32-6d11-4f18-b931-b75f475942d7-executive-berkeley-edu/assets/images/Laszlo_lecture_0-2.jpg"
                  alt="A lecture scene with a professor addressing attendees in a classroom"
                  width={475}
                  height={356}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Call to Action Card */}
            {/* <div className={`mt-8 p-6 bg-slate-900 rounded-lg text-white transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <h3 className="font-bold text-xl mb-3">Ready to Transform Your Leadership?</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Join the next cohort of HR leaders who are reshaping the future of work.
              </p>
              <button className="w-full bg-[#DC143C] hover:bg-[#B00000] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Apply Now
              </button>
            </div> */}
          </div>
        </div>
      </div>

    </section>
  );
};

export default OverviewSection;