import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

const triMetrixHighlights = [
  {
    title: "Behaviors (DISC)",
    icon: "/EE/section5/icon1.png",
  },
  {
    title: "Acumen (judgment)",
    icon: "/EE/section5/icon2.png",
  },
  {
    title: "Competencies",
    icon: "/EE/section5/icon3.png",
  },
{
  title: (
    <>
      12 Driving Forces<sup>©</sup> (motivation)
    </>
  ),
  icon: "/EE/section5/icon4.png",
},

];


export default function TTI({ itemVariants }) {
  return (
    <motion.div id="introduction" variants={itemVariants} className=" lg:mb-16">
      <div className="relative  px-4 sm:px-8 md:px-12 lg:px-16 ">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black"
            style={{ fontFamily: "ebgaramond, serif" }}
          >
            What is <span className="text-red-600">TriMetrix® HD</span> and why we're using it
          </h2>
        </div>

        {/* Content Grid: Image Left, Text Right */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/EE/section5/img1.jpeg"
                alt="Team collaboration"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <div>
              <p
                style={{ fontFamily: "Inter, sans-serif" }}
                className="text-lg font-semibold text-red-600 mb-6"
              >
                TriMetrix® HD integrates four sciences:
              </p>
                 {/* Validation text */}
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="text-base text-gray-800 leading-relaxed mb-8"
            >
              The suite is <span className="font-semibold text-black">validated</span>,{" "}
              <span className="font-semibold text-black">bias-free</span>,
              and compliant with EEOC/OFCCP guidelines. This multidimensional view
              lets us pinpoint patterns common to top performing entrepreneurs.
            </p>

              {/* 4 Item Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {triMetrixHighlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"   // ⬅️ items-center
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-200 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </div>

                  <h3
                    style={{ fontFamily: "Inter, sans-serif" }}
                    className="text-base font-semibold text-black"
                  >
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            </div>

         

            {/* Other Services Section */}
            <div className="pt-6 border-t border-gray-200 flex justify-start gap-20 mt-8 items-center">
              <p
                style={{ fontFamily: "Inter, sans-serif" }}
                className="text-sm font-bold mb-4"
              >
                Other services
              </p>
              <div className="flex items-center justify-start">
                <Image
                  src="/EE/section5/logo.png"
                  alt="EGA Logo"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}