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
            strategies and expert mentorship - starting <strong className="text-red-600">Cohort 2601 on 5<sup>th</sup> Feb 2026!</strong>
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            className="inline-flex small items-center bg-[#ff0000] hover:from-red-700 hover:to-indigo-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleJoinProgram}
          >
            Secure Your Spot Now
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Registernow;