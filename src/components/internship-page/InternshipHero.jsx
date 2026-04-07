"use client";

import Link from "next/link";

export default function InternshipHero() {
  return (
    <section className="flex w-full items-center bg-[#FFECEC] py-10 md:py-12 lg:min-h-[calc(100vh-72px)]">
      <div className="mx-auto grid w-full max-w-[1360px] items-center gap-6 px-6 md:px-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-[620px]">
          <p className="inline-flex items-center rounded-full bg-[#FF6A6A] px-4 py-1 text-[13px] font-semibold text-white">
            For US Graduate and Post Graduate Students
          </p>

          <h1 className="mt-5 text-[40px] font-extrabold leading-[1.14] text-black">
            Don&apos;t Wait For An Internship To Find You.
            <span className="block text-[#ff0000]">Create Your Own.</span>
          </h1>

          <p className="mt-5 max-w-[620px] text-[20px] leading-[1.5] text-[#1f1f1f] ">
            Most companies never post internships. We show you exactly how to
            pitch, propose, and land a custom internship at any company and VRT
            Management Group is here to guide you every step of the way.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/internship-program"
              className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-transparent px-5 py-2 text-[17px] font-semibold text-white transition hover:opacity-95 "
              style={{
                background:
                  "linear-gradient(90deg, #FF3636 0%, #FF9100 100%)",
              }}
            >
              See How It Works
                <img
                  src="/internship-page/section1/share-icon.png"
                alt="Arrow icon"
                className="h-5 w-5 object-contain md:h-6 md:w-6"
              />
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-[#ff7b7b] bg-transparent px-7 py-3 text-[17px] font-semibold text-[#d11f1f] transition hover:bg-[#fff3f3] "
            >
              <img
                src="/internship-page/section1/ion_call.png"
                alt="Call icon"
                className="h-5 w-5 object-contain md:h-6 md:w-6"
              />
              Talk to VRT Team
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <img
            src="/internship-page/section1/bg-image.png"
            alt="Students working on internship planning"
            className="ml-auto h-auto w-full max-w-none object-contain"
          />
        </div>
      </div>
    </section>
  );
}
