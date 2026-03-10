 "use client";
 
 import React from "react";
 import Image from "next/image";
 
 export default function WhyVRT() {
   return (
     <>
       <section className="py-16">
         <div className="max-w-7xl mx-auto px-6">
           <h2
             className="text-3xl font-extrabold text-red-600 text-center mb-10"
             style={{ fontFamily: "Inter, sans-serif" }}
           >
             Why VRT Management Group?
           </h2>

           <div className="flex flex-col md:flex-row items-start gap-8">
             <div className="md:w-1/2">
               <div className="rounded-2xl flex justify-end">
                 <Image
                   src="/main-page/section3/img1.png"
                   alt="VRT team meeting"
                   width={480}
                   height={250}
                   className="object-contain object-cover"
                 />
               </div>
             </div>

             <div className="md:w-1/2">
               <h3 className="text-2xl font-bold text-black mb-4">
                 Your Trusted Partner for Scalable Business Success
               </h3>

               <p className="text-base text-gray-700 mb-6 leading-7">
                 Running a small or medium-sized business (SMBs) comes with unique challenges, but you
                 don't have to navigate them alone. At VRT Management Group, we transform growth
                 challenges into success stories with proven strategies that deliver real results.
               </p>

               <h4 className="text-xl font-bold text-black mb-4">Our Impact in Numbers:</h4>

               <ul className="space-y-4">
                 <li className="flex items-center gap-4">
                   <div >
                     <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                       <Image
                         src="/main-page/section3/icon1.png"
                         alt="impact icon"
                         width={18}
                         height={18}
                       />
                     </div>
                   </div>
                   <div>
                     <p className="text-base text-gray-700">
                       <span className="font-semibold text-black">43%</span> average revenue growth within 12 months
                     </p>
                   </div>
                 </li>

                 <li className="flex items-center gap-4">
                   <div >
                     <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                       <Image
                         src="/main-page/section3/icon1.png"
                         alt="impact icon"
                         width={18}
                         height={18}
                       />
                     </div>
                   </div>
                   <div>
                     <p className="text-base text-gray-700">
                       <span className="font-semibold text-black">65%</span> improvement in operational efficiency
                     </p>
                   </div>
                 </li>

                 <li className="flex items-center gap-4">
                   <div >
                     <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                       <Image
                         src="/main-page/section3/icon1.png"
                         alt="impact icon"
                         width={18}
                         height={18}
                       />
                     </div>
                   </div>
                   <div>
                     <p className="text-base text-gray-700">
                       <span className="font-semibold text-black">92%</span> success rate in exceeding client growth targets
                     </p>
                   </div>
                 </li>

                 <li className="flex items-center gap-4">
                   <div >
                     <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                       <Image
                         src="/main-page/section3/icon1.png"
                         alt="impact icon"
                         width={18}
                         height={18}
                       />
                     </div>
                   </div>
                   <div>
                     <p className="text-base text-gray-700">
                       <span className="font-semibold text-black">1,424</span> entrepreneurs transformed across industries
                     </p>
                   </div>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </section>

       {/* EGA program section with benefit cards */}
       <section className="py-16 bg-white">
         <div className="max-w-6xl mx-auto px-6">
           <div className="text-center mb-6">
             <p className="text-md font-bold mb-2">Introducing the EGA<sup>©</sup> Mentorship Program</p>
             <h2
               className="text-3xl font-extrabold text-red-600 mb-4"
               style={{ fontFamily: "Inter, sans-serif" }}
             >
               A Strategic Growth Program Designed for SMBs
             </h2>
             <p className="text-base text-gray-700 max-w-4xl mx-auto">
               The Entrepreneur Growth Alliance (EGA)<sup>©</sup> Mentorship Program provides you with the tools, insights, and support to overcome scaling challenges and achieve sustainable growth. This mentorship goes beyond traditional coaching and is a hands-on, strategic partnership designed to help you thrive.
             </p>
           </div>

           <div className="text-center mb-8">
             <h3 className="text-lg font-semibold">Key Benefits of EGA<sup>©</sup>:</h3>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12">
             {/* Card 1 */}
              <div className="relative mx-auto max-w-[305px] w-full">
               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 ">
                <div className="rounded-full bg-[#fde8e8] p-2  ">
                  <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <Image src="/main-page/section4/icon1.png" alt="icon" width={28} height={28} />                  </div>
                </div>
              </div>
               <div className="bg-gray-100 shadow-lg border border-gray-200 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 pt-12 h-46 flex flex-col hover:bg-red-100 hover:border-red-400 transition-colors">
                 <h4 className="font-semibold text-black mb-2 text-base">Craft a Strategic Growth Plan:</h4>
                 <p className="text-sm text-gray-600">Get a personalized roadmap that aligns with your long-term vision and leads to measurable business growth.</p>
               </div>
             </div>

             {/* Card 2 */}
              <div className="relative mx-auto max-w-[305px] w-full">
               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full bg-[#fde8e8] p-2">
                  <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <Image src="/main-page/section4/icon2.png" alt="icon" width={28} height={28} />
                  </div>
                </div>
              </div>
               <div className="bg-gray-100 shadow-lg border border-gray-200 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 pt-12 h-46 flex flex-col hover:bg-red-100 hover:border-red-400 transition-colors">
                 <h4 className="font-semibold text-black mb-2 text-base">Growth as a Process:</h4>
                 <p className="text-sm text-gray-600">We believe in continuous improvement, helping you evolve your business over time.</p>
               </div>
             </div>

             {/* Card 3 */}
              <div className="relative mx-auto max-w-[305px] w-full">
               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full bg-[#fde8e8] p-2">
                  <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <Image src="/main-page/section4/icon3.png" alt="icon" width={28} height={28} />
                  </div>
                </div>
              </div>
               <div className="bg-gray-100 shadow-lg border border-gray-200 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 pt-12 h-46 flex flex-col hover:bg-red-100 hover:border-red-400 transition-colors">
                 <h4 className="font-semibold text-black mb-2 text-base">Build a High-Performance Team:</h4>
                 <p className="text-sm text-gray-600">Learn how to develop your team into leaders who drive growth and stay committed to your company's success.</p>
               </div>
             </div>

             {/* Card 4 */}
              <div className="relative mx-auto max-w-[305px] w-full">
               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full bg-[#fde8e8] p-2">
                  <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <Image src="/main-page/section4/icon4.png" alt="icon" width={28} height={28} />
                  </div>
                </div>
              </div>
               <div className="bg-gray-100 shadow-lg border border-gray-200 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 pt-12 h-46 flex flex-col hover:bg-red-100 hover:border-red-400 transition-colors">
                 <h4 className="font-semibold text-black mb-2 text-base">Boost Operational Efficiency:</h4>
                 <p className="text-sm text-gray-600">Streamline your business processes to reduce waste, increase productivity, and improve profitability.</p>
               </div>
             </div>

             {/* Card 5 */}
              <div className="relative mx-auto max-w-[305px] w-full">
               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full bg-[#fde8e8] p-2">
                  <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <Image src="/main-page/section4/icon5.png" alt="icon" width={28} height={28} />
                  </div>
                </div>
              </div>
               <div className="bg-gray-100 shadow-lg border border-gray-200 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 pt-12 h-46 flex flex-col hover:bg-red-100 hover:border-red-400 transition-colors">
                 <h4 className="font-semibold text-black mb-2 text-base">Enhance Your Leadership Skills:</h4>
                 <p className="text-sm text-gray-600">Become the dynamic CEO your business needs with our leadership development and behavioral assessments.</p>
               </div>
             </div>

             {/* Card 6 */}
              <div className="relative mx-auto max-w-[305px] w-full">
               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full bg-[#fde8e8] p-2">
                  <div className="h-14 w-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <Image src="/main-page/section4/icon6.png" alt="icon" width={28} height={28} />
                  </div>
                </div>
              </div>
               <div className="bg-gray-100 shadow-lg border border-gray-200 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 pt-12 h-46 flex flex-col hover:bg-red-100 hover:border-red-400 transition-colors">
                 <h4 className="font-semibold text-black mb-2 text-base">Increase Revenue & Profits:</h4>
                 <p className="text-sm text-gray-600">Our sales mastery techniques and strategic positioning tools ensure you close high-value deals and dominate your market.</p>
               </div>
             </div>
           </div>
         </div>
       </section>
     </>
   );
 }


