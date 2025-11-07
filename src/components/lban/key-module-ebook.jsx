import Link from 'next/link'
import React from 'react'

const Bullet = ({ children, bold }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded bg-red-600 text-white text-[12px]">✓</span>
    <span className={`leading-[1.7] text-[#333333] ${bold ? 'font-semibold text-black' : ''}`}>{children}</span>
  </li>
)

const KeyModuleEbook = () => {
  return (
    <section id="ebook" className="bg-gradient-to-b from-white to-[#fafafa]">
      <div className="w-full max-w-[1100px] mx-auto px-6 md:px-8 py-12 md:py-16">
        <header>
          <h2 className="mt-3 text-[28px] md:text-[34px] font-bold leading-[1.25] text-black"
          style={{ fontFamily: 'Lora, serif' }}
          >
            <em className="not-italic text-[#111111]"
            >Ready to Hire Smarter?</em> Download the E-Book.
          </h2>
          <div className="mt-3 h-1.5 w-24 bg-red-600 rounded-full"></div>
          <p className="mt-4 text-base md:text-lg text-[#333333] max-w-3xl"
          style={{ fontFamily: 'Inter, serif' }}
          >
            Your free copy of <span className="font-semibold">“Hire to Scale: The Entrepreneur's Playbook for Building Winning Teams”</span> is here.
          </p>
          <p className="mt-2 text-base text-[#333333] max-w-3xl">
            We have created a <span className="font-semibold">proven, structured, real‑world framework</span> used by entrepreneurs and SMB's to <span className="font-semibold">build winning teams</span> and scale their businesses.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8"
        style={{ fontFamily: 'Inter, serif' }}
        >
          <div className="lg:col-span-2">
            <div className="mt-4 rounded-xl border border-[#eaeaea] bg-white p-6 md:p-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block h-5 w-1.5 bg-red-600 rounded"></span>
                <p className="text-sm font-semibold tracking-wide text-black">In this eBook, you'll learn</p>
              </div>
              <ul className="space-y-3">
                <Bullet>How one wrong hire can quietly cost you minimum of $200K and how to avoid it.</Bullet>
                <Bullet>The biggest mistake most founders make when defining roles.</Bullet>
                <Bullet>A proven way to spot the right fit beyond the resume and interview</Bullet>
                <Bullet>How to create an onboarding plan that gets new hires performing from day 1</Bullet>
                <Bullet>Real strategies used by fast growing companies to hire smarter, not harder.</Bullet>
              </ul>
            </div>

            <p className="mt-5 text-[#333333] mb-3">
              People who followed this process have seen these results:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              <li className="text-[#333333]">
                <span className="text-red-600 font-semibold">27%</span> Higher Profits
              </li>
              <li className="text-[#333333]">
                <span className="text-red-600 font-semibold">50%</span> Higher Sales
              </li>
              <li className="text-[#333333]">
                <span className="text-red-600 font-semibold">50%</span> Higher Customer Loyalty Levels
              </li>
              <li className="text-[#333333]">
                <span className="text-red-600 font-semibold">38%</span> Above Average Productivity
              </li>
            </ul>

            <p className="mt-5 text-[#333333]">
              If you're hiring now (or planning to), this guide will save you time, stress, and money.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/lban/form"
                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-white font-semibold shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                Download the Free eBook Now
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v14m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-1 mt-4">
            <div className="sticky top-6 rounded-xl border border-[#eaeaea] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-block h-8 w-1.5 bg-red-600 rounded"></span>
                <h3 className="text-lg font-semibold text-black leading-[1.3]">Are you facing challenges in your business, setup a call </h3>
              </div>
              <p className="mt-3 text-sm leading-[1.7] text-[#333333]">
                Book a Complimentary 45-minute strategy call with <span className="font-semibold">Rajesh Tedla</span> and talk through what’s keeping you stuck. Walk away with clear steps, practical solutions, and the confidence to move forward.
              </p>
              <a
                href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2025-06"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-white text-sm font-semibold shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                target="_blank"
              >
                Get a 45‑min strategy call
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default KeyModuleEbook
