"use client";

import Link from "next/link";
import LoadingButton from "@/components/ui/LoadingButton"
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function GrowthSystemInstallationPage() {
  return (
    <div className="min-h-screen bg-white mt-20">
        {/* Header */}
        <section className="w-full py-14 px-8 md:px-16" style={{ backgroundColor: '#FFEFEF' }}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[55%_45%] gap-6 items-center">
          
            {/* LEFT CONTENT */}
            <div className="flex flex-col items-start pl-6 md:pl-10">
              
              {/* Badge */}
              <span className="inline-block bg-red-500 text-white text-sm px-5 py-1.5 rounded-full mb-6 font-medium">
                Cohort-2603-2604
              </span>
          
              {/* Heading */}
              <h1 className="text-[27px] sm:text-[34px] md:text-[47px] font-extrabold text-[#E82222] leading-[1.25] mb-4 text-left md:text-left">
                If Your Business Can&apos;t Grow Without You in the Middle of Everything,
                You Don&apos;t Own a Business, You Own a Job
              </h1>
              
           {/* Subheading */}
           <p className="text-[21px] md:text-[20px] font-extrabold text-black leading-snug mb-4">
                and EGA<sup>&copy;</sup> Exists to Change That
              </p>  
            {/* ✅ IMAGE (ONLY MOBILE/TAB) */}
              <div className="w-full flex justify-center my-6 lg:hidden">
              <div className="overflow-hidden rounded-2xl group w-full max-w-[460px] md:max-w-[650px]">
                  <img
                    src="/ega/grow-sys-in.png"
                    alt="Business discussion"
                    className="w-full h-auto object-cover rounded-2xl
                    transition-all duration-700 ease-out
                    group-hover:scale-[1.08] group-hover:brightness-105"
                  />
                </div>
              </div>
             
          
              {/* Description */}
                <p className="text-black-500 text-[16px] md:text-[18px] leading-[1.7] mb-10 font-normal tracking-wide">
                A structured and proven workshop designed for ambitious entrepreneurs
                ready to scale their business to the next level.
              </p>
          
              {/* CTA Button */}
              <LoadingButton
            href="/ega/registration-form"
            spinnerColor="text-white"
            className="w-full max-w-md text-center bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-4 rounded-lg font-semibold text-base shadow transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:from-orange-500 hover:to-red-600 active:scale-95 active:shadow-md relative overflow-hidden group"
          >
            {/* Shine Effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/20 via-white/10 to-transparent"></span>
            
            {/* Content */}
            <span className="relative z-10 inline-flex items-center justify-center gap-2">
              Reserve Your Seat in Cohorts
              <ArrowRight 
                size={18} 
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </LoadingButton>
            </div>
          
            {/* RIGHT IMAGE (ONLY DESKTOP) */}
          <div className="hidden lg:flex justify-center">
            <div className="overflow-hidden rounded-2xl group max-w-[460px]">
              <img
                src="/ega/grow-sys-in.png"
                alt="Business discussion"
                className="w-full h-auto object-cover rounded-2xl
                transition-all duration-700 ease-out
                group-hover:scale-[1.08] group-hover:brightness-105"
              />
            </div>
          </div>
          
          </div>
        </section>
 
        {/* About */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">

            <div className="border border-red-300 rounded-2xl p-6 md:p-8 mb-16 bg-[#FFF6F6] max-w-[1150px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 justify-items-center">
                <div className="max-w-[460px] text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#EC2626]">
                    Cohort 2603
                  </h2>
                  <p className="text-[17px] text-gray-800 leading-8">
                    <span className="font-semibold text-black">Type:</span> In-person Zoom Workshop
                    <br />
                    <span className="font-semibold text-black">Start Date:</span> Thursday, June 4, 2026
                    <br />
                    <span className="font-semibold text-black">End Date:</span> Thursday, August 6, 2026
                    <br />
                    <span className="font-semibold text-black">Day:</span> Thursdays (10 weeks)
                    <br />
                    <span className="font-semibold text-black">Time:</span> 11:00 AM to 2:00 PM (EST)
                  </p>
                </div>

                <div className="max-w-[460px] text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#EC2626]">
                    Cohort 2604
                  </h2>
                  <p className="text-[17px] text-gray-800 leading-8">
                    <span className="font-semibold text-black">Type:</span> In-person Zoom Workshop
                    <br />
                    <span className="font-semibold text-black">Start Date:</span> Thursday, August 20, 2026
                    <br />
                    <span className="font-semibold text-black">End Date:</span> Thursday, October 22, 2026
                    <br />
                    <span className="font-semibold text-black">Day:</span> Thursdays (10 weeks)
                    <br />
                    <span className="font-semibold text-black">Time:</span> 11:00 AM to 2:00 PM (EST)
                  </p>
                </div>
              </div>
            </div>

            {/* About Us */}
            <div className="grid lg:grid-cols-2 gap-14 items-start">

              {/* LEFT */}
              <div className="flex flex-col gap-8">
              <div className="overflow-hidden rounded-2xl group">
                  <img
                    src="/ega/about-gsi.png"
                    alt="VRT Team"
                    className="w-full h-auto object-cover rounded-2xl 
                    transition-transform duration-700 ease-out 
                    group-hover:scale-110"
                  />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">

                {/* 1 */}
                <div className="border border-red-200 rounded-2xl py-8 text-center bg-white 
                  transition-all duration-300 hover:bg-red-50 hover:shadow-lg hover:-translate-y-1">
                  
                  <p className="text-[22px] md:text-4xl font-extrabold text-[#EC2626]">
                    <Counter target={18} /> <span className="text-xl align-top">Yrs</span>
                  </p>

                  <p className="text-base text-600 mt-2">In Business</p>
                </div>

                {/* 2 */}
                <div className="border border-red-200 rounded-2xl py-8 text-center bg-white 
                  transition-all duration-300 hover:bg-red-50 hover:shadow-lg hover:-translate-y-1">
                  
                  <p className="text-[22px] md:text-4xl font-extrabold text-[#EC2626]">
                    <Counter target={1424} duration={2500} />+
                  </p>

                  <p className="text-base text-600 mt-2">Companies Served</p>
                </div>

                {/* 3 */}
                <div className="border border-red-200 rounded-2xl py-8 text-center bg-white 
                  transition-all duration-300 hover:bg-red-50 hover:shadow-lg hover:-translate-y-1">
                  
                  <p className="text-[22px] md:text-4xl font-extrabold text-[#EC2626]">
                    $<Counter target={524} />M+
                  </p>

                  <p className="text-base text-600 mt-2">Financial Impact</p>
                </div>

                </div>
               </div>

      {/* RIGHT */}
      <div>
        <h2 className="text-[22px] md:text-[26px] font-bold mb-6 text-red-600">
          About Us – VRT Management Group, LLC.
        </h2>

        <p className="text-[16px] text-700 leading-[1.6] mb-5">
          For 18 years,<span className="font-extrabold"> VRT Management Group, LLC</span> has specialized in helping entrepreneur led and SMB businesses (20 to 500 employees) break
          through growth ceilings and scale with discipline. We have delivered over $524 million in measurable financial benefits to more than
          1,424+ companies across 28 countries and have trained and mentored over 14,542 professionals.
        </p>

        <p className="text-[16px] text-700 leading-[1.6] mb-5">
          Our approach centers on three pillars: Strategy, People, and Process Transformation. These are brought to life through our signature
          frameworks, the <span className="font-bold">Entrepreneur Growth Operating System<sup className="text-xs ">©</sup>   (EGOS<sup className="text-xs ">©</sup>)</span> and the <span className="font-bold">Entrepreneur Growth Alliance<sup className="text-xs ">©</sup> (EGA<sup className="text-xs ">©</sup>)</span> which equip leaders
          with the operating tools to build thriving companies that succeed with or without them present.
        </p>

        <p className="text-[16px] text-700 leading-[1.6]">
          Headquartered in Connecticut, USA, with a Global Capability Center in Hyderabad, India, VRT serves clients worldwide. We provide
          proven solutions at the moments where leadership decisions matter most and when the cost of standing still is real.
        </p>
      </div>

          </div>
        </div>
        </section>

      {/* Masterclass Overview – 10 Sessions */}
      <section className="py-12 px-4 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-3xl font-semibold mb-4 text-center">
      Entrepreneur Growth Alliance
      <sup className=" ">&copy;</sup> (EGA
      <sup className=" ">&copy;</sup>) Masterclass Overview
    </h2>
    <p className="text-center text-gray-600 mb-10">
      10 sessions designed to transform your leadership and scale your business
    </p>
{/* Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">

  {/* 1 */}
  <div className="rounded-2xl border border-red-300 p-6 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-red-400 cursor-pointer">
    <div className="flex justify-between mb-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
        <img src="/ega/exchange-1.png" className="w-5 h-5" />
      </div>
      <span className="text-base font-medium text-black">Session 1</span>
    </div>
    <h3 className="text-lg font-semibold text-red-600 mb-2">Change or Die</h3>
    <p className="text-sm text-gray-700">The Mindset Shift That Separates Leaders Who Scale from Leaders Who Stall.</p>
  </div>

  {/* 2 */}
  <div className="rounded-2xl p-6 bg-red-600 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    <div className="flex justify-between mb-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
        <img src="/ega/exchange-2.png" className="w-5 h-5" />
      </div>
      <span className="text-base font-medium text-white">Session 2</span>
    </div>
    <h3 className="text-lg font-semibold mb-2">Trust Advantage</h3>
    <p className="text-sm text-red-100">How High Trusted Leaders Build Faster, Stronger, and More Profitable Companies.</p>
  </div>

  {/* 3 */}
  <div className="rounded-2xl border border-red-300 
    md:bg-red-600 md:text-white md:border-0 
    lg:bg-white lg:text-black lg:border lg:border-red-300
    p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-red-400 cursor-pointer">
    <div className="flex justify-between mb-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 md:bg-white lg:bg-red-100">
        <img src="/ega/exchange-3.png" className="w-5 h-5" />
      </div>
      <span className="text-base font-medium md:text-white lg:text-black">Session 3</span>
    </div>
    <h3 className="text-lg font-semibold md:text-white lg:text-red-600 mb-2">Dynamic Communication</h3>
    <p className="text-sm md:text-red-100 lg:text-gray-700">When Leaders Communicate Better, Every Business Grows Faster.</p>
  </div>

  {/* 4 */}
  <div className="rounded-2xl border border-red-300 p-6 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-red-400 cursor-pointer">
    <div className="flex justify-between mb-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
        <img src="/ega/exchange-4.png" className="w-5 h-5" />
      </div>
      <span className="text-base font-medium text-black">Session 4</span>
    </div>
    <h3 className="text-lg font-semibold text-red-600 mb-2">Stages of Business Growth</h3>
    <p className="text-sm text-gray-700">Stop Guessing Where You Are and Start Leading Where You're Going.</p>
  </div>

  {/* 5 */}
  <div className="rounded-2xl p-6 
    bg-red-600 text-white 
    md:bg-white md:text-black 
    lg:bg-red-600 lg:text-white
    shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    <div className="flex justify-between mb-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white md:bg-red-100 lg:bg-white">
        <img src="/ega/exchange-5.png" className="w-5 h-5" />
      </div>
      <span className="text-base font-medium md:text-black lg:text-white">Session 5</span>
    </div>
    <h3 className="text-lg font-semibold mb-2">SOG Diagnostic Assessments</h3>
    <p className="text-sm md:text-gray-700 lg:text-red-100">The Business Health Scan That Tells You Exactly What to Fix, When, and Why.</p>
  </div>

  {/* 6 */}
  <div className="rounded-2xl border border-red-300 
    md:bg-red-600 md:text-white md:border-0 
    lg:bg-white lg:text-black lg:border lg:border-red-300
    p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-red-400 cursor-pointer">
    <div className="flex justify-between mb-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 md:bg-white lg:bg-red-100">
        <img src="/ega/exchange-6.png" className="w-5 h-5" />
      </div>
      <span className="text-base font-medium md:text-white lg:text-black">Session 6</span>
    </div>
    <h3 className="text-lg font-semibold md:text-white lg:text-red-600 mb-2">1 and 3 Years Strategic Planning</h3>
    <p className="text-sm md:text-red-100 lg:text-gray-700">From Vision to Results — Because a Strategy That Isn't Executed Is Just a Document.</p>
  </div>

  {/* 7 */}
  <div className="rounded-2xl border border-red-300 
    md:bg-red-600 md:text-white md:border-0 
    lg:bg-white lg:text-black lg:border lg:border-red-300
    p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-red-400 cursor-pointer">
    <div className="flex justify-between mb-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 md:bg-white lg:bg-red-100">
        <img src="/ega/exchange-7.png" className="w-5 h-5" />
      </div>
      <span className="text-base font-medium md:text-white lg:text-black">Session 7</span>
    </div>
    <h3 className="text-lg font-semibold md:text-white lg:text-red-600 mb-2">Yearly Execution Calendar</h3>
    <p className="text-sm md:text-red-100 lg:text-gray-700">The Operating Rhythm That Turns Annual Goals into Daily Momentum and Keeps It There All Year Long.</p>
  </div>

  {/* 8 */}
  <div className="rounded-2xl p-6 
    bg-red-600 text-white 
    md:bg-white md:text-black 
    lg:bg-red-600 lg:text-white
    shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    <div className="flex justify-between mb-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white md:bg-red-100 lg:bg-white">
        <img src="/ega/exchange-8.png" className="w-5 h-5" />
      </div>
      <span className="text-base font-medium md:text-black lg:text-white">Session 8</span>
    </div>
    <h3 className="text-lg font-semibold mb-2">Vision, Purpose, Values & Culture</h3>
    <p className="text-sm md:text-gray-700 lg:text-red-100">The Leaders Who Scale the Fastest Are Not Those With Best Strategy. They Are Those With Strongest Culture Underneath It.</p>
  </div>

  {/* 9 */}
  <div className="rounded-2xl border border-red-300 p-6 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-red-400 cursor-pointer">
    <div className="flex justify-between mb-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
        <img src="/ega/exchange-9.png" className="w-5 h-5" />
      </div>
      <span className="text-base font-medium text-black">Session 9</span>
    </div>
    <h3 className="text-lg font-semibold text-red-600 mb-2">Emotional Intelligence</h3>
    <p className="text-sm text-gray-700">Your Business Can Only Grow as Far as Your Ability to Lead the People Inside It.</p>
  </div>

  {/* 10 */}
  <div className="md:col-start-2 lg:col-span-full flex md:justify-start lg:justify-center">
    <div className="w-full max-w-[362px] rounded-2xl p-6 bg-red-600 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
      <div className="flex justify-between mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
          <img src="/ega/exchange-10.png" className="w-5 h-5" />
        </div>
        <span className="text-base font-medium text-white">Session 10</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">The Power of Reflection</h3>
      <p className="text-sm text-red-100">
      The Leaders Who Build The Most Enduring Businesses Don’t Just Act They Reflect, Extract, and Return Sharper Every Single Time. 
      </p>
    </div>
  </div>

</div>
  </div>
    </section>

     {/* Vision 2030 */}
      <section className="py-12 px-4 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-6xl mx-auto">
    
         <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center items-center">
     <img
        src="/ega/dart-gsi.png"
        alt="Vision Target"
        className="w-[420px] md:w-[620px] object-contain rotate-[-250deg] origin-center mx-auto"
        style={{ transform: " translateX(-100px) translatey(30px)" }}
      />
        </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">
          Vision 2030
        </h2>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          VRT <span className=" font-extrabold ">Entrepreneur Growth Alliance
          <sup >©</sup></span> (<span className='font-extrabold'> EGA<sup className="text-xs ">©</sup></span>)
           will partner with 1,000 entrepreneurs and SMBs to build scalable, resilient, high value companies, creating $1M+ in measurable financial value per business and $1B+ in total value.
        </p>

          <LoadingButton
          href="/ega/registration-form"
          spinnerColor="text-white"
          className="bg-gradient-to-r from-red-500 to-orange-400 cursor-pointer text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:from-red-600 hover:to-orange-500 active:scale-95 active:shadow-md relative overflow-hidden group inline-flex items-center gap-2"
        >
          {/* Shine Effect */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/20 via-white/10 to-transparent"></span>
                  
          {/* Content */}
          <span className="relative z-10 flex items-center gap-2">
            Please contact us to be part of great initiative.
            <ArrowRight
              size={18}
              className="transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
            />
          </span>
        </LoadingButton>
              </div>
                  
            </div>
                  
          </div>
     </section>

      {/* Next Steps */}
      <section className="py-20 md:py-28 px-4 bg-white min-h-[600px] flex items-center">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT SIDE */}
    <div>
      <p className="text-red-600 font-semibold mb-2">
        Ready to Start Your Journey?
      </p>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        Begin Your Journey
        <br />
             <span className="">with our</span> <br />
        <span className="text-red-600">Next Cohort</span>
        <br />
      </h2>

      <p className="text-gray-600 mb-6 max-w-lg">
        After completing the Online Cohort workshop series, you will move into
        In-Person Mentoring and Implementation a full 12 month journey designed
        to deliver real, measurable business results.
      </p>

      <LoadingButton
  href="/ega/registration-form"
  spinnerColor="text-white"
  className="inline-block bg-gradient-to-r cursor-pointer from-red-500 to-orange-400 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:from-red-600 hover:to-orange-500 active:scale-95"
>
  Please contact us to be part of great initiative.
</LoadingButton>
    </div>

    {/* RIGHT SIDE */}
    <div className="bg-red-50 p-6 rounded-2xl">
      <h3 className="text-red-600 font-semibold mb-4">Get in Touch</h3>

      <div className="space-y-4">

      <div className="flex items-start gap-4">
  <div className="bg-red-600 text-white p-3 rounded-lg">
    <img src="/ega/domain.png" alt="website" className="w-5 h-5" />
  </div>
  <div>
    <p className="font-medium">Website</p>
    <a
      href="https://vrt9.net/ega"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-gray-600 hover:text-red-600 transition underline"
    >
      vrt9.net/ega
    </a>
  </div>
</div>

<div className="flex items-start gap-4">
  <div className="bg-red-600 text-white p-3 rounded-lg">
    <img src="/ega/email.png" alt="email" className="w-5 h-5" />
  </div>
  <div>
    <p className="font-medium">Email</p>
    <a
      href="mailto:coachrajesh@vrt9.com"
      className="text-sm text-gray-600 hover:text-red-600 transition underline"
    >
      coachrajesh@vrt9.com
    </a>
  </div>
</div>

        <div className="flex items-start gap-4">
        <div className="bg-red-600 text-white p-3 rounded-lg">
    <img src="/ega/location.png" alt="email" className="w-5 h-5" />
  </div>
          <div>
            <p className="font-medium">Head Quarters</p>
            <p className="text-sm text-gray-600">
              1 Botsford Hill Road PO BOX 150
              <br />
              Botsford, CT 06404
            </p>
          </div>
        </div>

      </div>

      <div className="mt-6 bg-red-100 text-sm text-center p-3 rounded-lg text-gray-700">
        Seats are limited per cohort. Early enrollment is strongly encouraged.
      </div>
    </div>

  </div>
</section>
    </div>
  );
}

