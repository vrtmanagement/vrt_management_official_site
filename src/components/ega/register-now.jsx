'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";


const Registernow = () => {
  const router = useRouter();
  const handleJoinProgram = () => {
    router.push("/ega/registration-form");
  };
  return (
    <section className="py-16 mt-20 md:py-24 bg-gradient-to-r from-red-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-lg md:text-xl small font-medium text-red-600">
            Limited Spots Available - Register Now!
          </span>

          <h2 className="text-3xl  md:text-5xl font-bold text-gray-900 mt-8 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-red-600">
              Make 2026 the Year of Unstoppable<br /> Growth for Your Business
            </span>
          </h2>

          <p className="text-lg small md:text-xl text-gray-700 max-w-4xl mx-auto">
            Join a select group of SMB leaders committed to scaling their businesses with proven 
            strategies and expert mentorship - starting <strong className="text-red-600">Cohort 2601 on 19<sup>th</sup> Feb 2026!</strong>
          </p>
        </motion.div>

        
          <Button
            size="lg"
            className="inline-flex items-center bg-red-600 border border-red-600 text-white text-xl font-semibold px-10 py-5 rounded-xl shadow-xl transition-all duration-300 hover:bg-white hover:text-red-600 hover:border-red-600 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-200"
            onClick={handleJoinProgram}
            style={{ fontFamily: 'Inter, serif', letterSpacing: '0.02em' }}
          >
            Secure Your Spot Now
          </Button>
      </div>
    </section>
  );
};

export default Registernow;