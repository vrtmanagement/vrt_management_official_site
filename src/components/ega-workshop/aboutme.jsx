"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="bg-red-800 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto lg:mx-0 w-full max-w-sm"
          >
            <div className="absolute inset-0 border border-white/20 rounded-t-[10rem] rounded-b-2xl translate-x-3 translate-y-3"></div>
            <Image
              src="/sog/rajesh-sir-image.webp"
              alt="Rajesh Tedla - Workshop Facilitator"
              width={400}
              height={533}
              className="relative w-full aspect-[3/4] object-cover rounded-t-[10rem] rounded-b-2xl shadow-2xl"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white space-y-8 text-center lg:text-left"
          >

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-[#F5F3EB]"
            style={{ fontFamily: "ebgaramond, serif" }}
            >
              Guiding entrepreneurs toward sustainable, scalable growth.
            </h2>

            <div className="space-y-6 text-lg text-red-50/90 font-light leading-relaxed">
              <p>
                Raj&apos;s innovative programs Entrepreneur Growth Alliance™ (EGA) and Entrepreneur Growth Operating System™ (EGOS) provide proven methodologies that have generated over $504 million in measurable business growth. His expertise spans strategic planning, process optimization, and people transformation.
              </p>
              <p>
                Every workshop session is a personalized journey a space where proven frameworks meet your unique business challenges, guiding you exactly where growth is needed most.
              </p>
            </div>

            <div className="pt-4">
              <div className="text-sm text-red-50/70 italic mx-auto lg:mx-0 w-fit">
                — Rajesh Tedla, Founder & CEO of VRT Management Group, LLC
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;