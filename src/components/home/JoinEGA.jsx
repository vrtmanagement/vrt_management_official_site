 "use client";

import React from "react";
import Image from "next/image";
import GrowthChallenges from "./GrowthChallenges";
import MeetRajesh from "./MeetRajesh";
import SubscribeCTA from "./SubscribeCTA";
import TransformationForm from "./TransformationForm";
import LoadingButton from "@/components/ui/LoadingButton"
import { CtaSection } from "../ega/ega-cta";


 export default function JoinEGA() {
   return (
     <>
       <section className="relative">
         <div
           className="w-full bg-cover bg-center"
           style={{ backgroundImage: "url('/main-page/section5/image1.png')" }}
         >
            <div className="bg-black/10">
              <div className="max-w-3xl md:max-w-7xl mx-auto px-4 md:px-6 py-20">
                <div className="md:flex md:items-center md:gap-10">
                  <div className="text-white text-center md:text-left">
                  <h2 
  className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4" 
  style={{ fontFamily: "Inter, sans-serif" }}
>
  Join the EGA<span><sup>©</sup></span> Program Today
</h2>

                   <p className="text-xl  text-white/90 mb-3 max-w-5xl leading-7">
                     Discover how our mentorship program can help you lead your business to new heights.
                     Schedule a complimentary 45-minute strategic call with Rajesh Tedla to learn more.
                   </p>

                  <div className="mt-6">
                  <LoadingButton
  href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2026-03"
  external
  spinnerColor="text-white"
  className="inline-block w-full cursor-pointer sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 sm:px-16 rounded-md shadow-md transition-colors text-center"
>
  Schedule Now
</LoadingButton>
                  </div>
                 </div>

                 <div className="md:w-1/3 hidden md:block">
                   {/* optional illustrative image on right; preserve layout but leave empty to match given screenshot */}
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Who We Serve card (below JoinEGA) */}
      {/* <section className="py-16">
        <div className="max-w-3xl md:max-w-7xl mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden hidden md:flex justify-center md:justify-end md:mr-5 order-last md:order-first mb-6 md:mb-0">
               <Image
                 src="/main-page/section5/image2.png"
                 alt="Who we serve"
                 width={500}
                 height={220}
                 className=" object-cover rounded-2xl"
               />
             </div>

             <div>
               <h3 className="text-3xl font-extrabold text-red-600 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                 Who We Serve
               </h3>

               <p className="text-base text-gray-700 mb-6">
                 We empower small and medium-sized businesses across the USA. Whether you're in the early stages of
                 growth or need to refine your operations, VRT Management Group provides the guidance you need to thrive.
               </p>

               <div className="md:hidden mb-6">
                 <div className="rounded-2xl overflow-hidden max-w-[420px] w-full mx-auto">
                   <Image
                     src="/main-page/section5/image2.png"
                     alt="Who we serve"
                     width={500}
                     height={220}
                     className=" object-cover rounded-2xl"
                   />
                 </div>
               </div>

               <h4 className="text-xl font-bold text-black mb-4">Our Focus Areas:</h4>

               <ul className="space-y-4">
                 <li className="flex items-start gap-4">
                   <div className="mt-1 flex items-center gap-2">
                     <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                       <Image src="/main-page/section5/icon1.png" alt="icon" width={16} height={16} />
                     </div>
                   <div className="text-gray-700">
                     Entrepreneurs seeking strategic leadership
                   </div>
                   </div>
                 </li>

                 <li className="flex items-start gap-4">
                   <div className="mt-1 flex items-center gap-2">
                     <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                       <Image src="/main-page/section5/icon1.png" alt="icon" width={16} height={16} />
                     </div>
                   <div className="text-gray-700">
                     Businesses looking to scale sustainably
                   </div>
                   </div>
                 </li>

                 <li className="flex items-start gap-4">
                   <div className="mt-1 flex items-center gap-2">
                     <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                       <Image src="/main-page/section5/icon1.png" alt="icon" width={16} height={16} />
                     </div>
                   <div className="text-gray-700">
                     Organizations focused on talent development and retention
                   </div>
                   </div>
                 </li>

                 <li className="flex items-start gap-4">
                   <div className="mt-1 flex items-center gap-2">
                     <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                       <Image src="/main-page/section5/icon1.png" alt="icon" width={16} height={16} />
                     </div>
                   <div className="text-gray-700">
                     Companies aiming to improve operational efficiency
                   </div>
                   </div>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </section> */}
      {/* <GrowthChallenges /> */}
      {/* <MeetRajesh /> */}
      <CtaSection />
      {/* <SubscribeCTA /> */}
      {/* <TransformationForm /> */}
    </>
   );
 }


