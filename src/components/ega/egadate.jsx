'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Egadate() {
  return (
    <div className='p-10'>
      <section className="relative mt-10  py-16 px-6 sm:px-16 overflow-hidden ">
        {/* Flipped background image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full transform scale-x-[-1]">
            <img
              src="https://vrt9.net/testpage/pcpic.jpg"
              alt="Business growth background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/90 to-[#0c0c0c]/50"></div>
        </div>

        <div className="relative z-10 ">
          <div className="max-w-5xl">
            <img src="https://vrtmanagementgroup.com/wp-content/uploads/2024/03/EGA-Logo-New-1024x352-1.png" alt="Logo" className="w-52 p-4 bg-white rounded-2xl h-24 r mb-8" />
            <h1 className="text-4xl gsans sm:text-5xl lg:text-5xl font-bold mb-8 leading-tight text-gray-100">
              Ready to Take Your Business to the Next Level?
            </h1>
            
            <p className="text-lg small sm:text-xl text-[#989999] mb-8 leading-relaxed">
              Discover the power of VRT's Entrepreneur Growth Alliance (EGA) and unlock the proven strategies that will transform your entrepreneurial journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="https://vrtmanagementgroup.com/entrepreneur-growth-alliance/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff0000] small hover:bg-[#e60000] text-gray-100 text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Enroll Now - Limited Spots Available
              </Link>
            </div>

            <div className="mt-8 p-6 small bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg max-w-2xl">
              <p className="text-md text-gray-800">
                By joining, you'll get exclusive access to expert strategies, member insights, and real growth tools from the VRT team. <span className="font-medium text-gray-900">No spam, ever. Just pure value.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-36 h-36 rounded-full bg-[#ff0000]/20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 rounded-full bg-[#ff0000]/10 translate-x-1/2 translate-y-1/2"></div>
      </section>
    </div>
  )
}