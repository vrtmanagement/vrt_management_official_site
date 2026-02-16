 'use client';
 
 import React from 'react';
 import { motion } from 'framer-motion';
 
 export default function AnimatedQuote() {
   return (
     <motion.div
       initial={{ opacity: 0, y: 12 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.9 }}
       className="absolute top-6 left-6 right-6 text-center"
     >
       <p className="text-white text-lg md:text-xl lg:text-2xl italic font-semibold drop-shadow-md">
         “Strategy without execution is noise. Execution with structure is scale.”
       </p>
     </motion.div>
   );
 }


