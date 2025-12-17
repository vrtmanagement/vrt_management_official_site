'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import axios from 'axios'

const newsletter = () => {
  const [email, setEmail] = useState('')

  // Typing animation states
  const [displayedLines, setDisplayedLines] = useState(['', ''])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const texts = [
    'Build a stronger, more profitable',
    'business in a fraction of the time.'
  ]

  // Typing animation effect - types both lines sequentially
  useEffect(() => {
    if (currentLineIndex >= texts.length) return // All lines typed

    const currentText = texts[currentLineIndex]
    const currentDisplayed = displayedLines[currentLineIndex]
    
    if (currentDisplayed.length < currentText.length) {
      // Continue typing current line
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev]
          newLines[currentLineIndex] = currentText.substring(0, currentDisplayed.length + 1)
          return newLines
        })
      }, 100)
      
      return () => clearTimeout(timeout)
    } else if (currentLineIndex < texts.length - 1) {
      // Move to next line after a pause
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1)
      }, 500)
      
      return () => clearTimeout(timeout)
    }
  }, [displayedLines, currentLineIndex, texts])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || loading) return;

    try {
      setLoading(true);

      const response = await axios.post('/api/newsletter', {
        email: email.trim()
      });

      if (response.status === 201 || response.status === 200) {
        console.log('Success:', response.data);
        setEmail('');
        // You can add success notification here
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      // You can add error notification here
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen py-6 sm:py-12 px-4 sm:px-6 bg-cover bg-center bg-no-repeat sm:bg-fixed relative overflow-hidden"
      style={{ backgroundImage: 'url(/newsletter/background.jpg)' }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center min-h-[calc(100vh-50px)] sm:min-h-[calc(100vh-100px)]">
          <motion.div
            className="w-full p-4 sm:p-6 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Header Section */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600 mb-4 sm:mb-6 tracking-wide"
                style={{ fontFamily: 'Merriweather, serif' }}
                >
                  The Growth Edge
                </h2>
              </motion.div>

              <motion.h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4 sm:mb-6 md:mb-8 leading-tight min-h-[120px] xs:min-h-[130px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] flex items-center justify-center px-4 sm:px-6 md:px-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="text-center flex flex-col gap-1 sm:gap-2"
                style={{ fontFamily: 'Lora, serif' }}
                >
                  <span className="break-words">
                    {displayedLines[0]}
                    {currentLineIndex === 0 && displayedLines[0].length < texts[0].length && (
                      <span className="cursor-blink text-red-600">|</span>
                    )}
                  </span>
                  <span className="break-words">
                    {displayedLines[1]}
                    {currentLineIndex === 1 && displayedLines[1].length < texts[1].length && (
                      <span className="cursor-blink text-red-600">|</span>
                    )}
                  </span>
                </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 mx-auto px-2 sm:px-4 leading-relaxed max-w-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                In under 5 minutes, you'll get concrete tips to grow profit, raise your team's
                performance, and tighten how your business runs.
              </motion.p>
            </div>

            {/* Form Container */}
            <motion.div
              className="max-w-5xl mx-auto px-2 sm:px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="w-full sm:w-auto sm:flex-1 sm:max-w-md px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white/90 rounded-xl text-base sm:text-lg md:text-xl shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed border-2 border-gray-300 focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-100 transition-all duration-300"
                  placeholder="Email"
                />

                <motion.button
                  type="submit"
                  disabled={!email.trim() || loading}
                  whileHover={email.trim() && !loading ? { scale: 1.05 } : {}}
                  whileTap={email.trim() && !loading ? { scale: 0.95 } : {}}
                  className={`w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl transition-all duration-300 font-semibold text-base sm:text-lg md:text-xl flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap ${loading
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg cursor-wait'
                      : email.trim()
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl cursor-pointer'
                        : 'bg-white text-red-600 cursor-not-allowed border-2 border-red-600'
                    }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 animate-spin" />
                      <span className="hidden xs:inline">Subscribing...</span>
                      <span className="xs:hidden">...</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom cursor blink animation and responsive utilities */}
      <style jsx>{`
        @keyframes cursor-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        
        .cursor-blink {
          animation: cursor-blink 1s infinite;
        }

        /* Custom breakpoint for extra small devices (xs) */
        @media (min-width: 475px) {
          .xs\\:text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
          .xs\\:min-h-\\[130px\\] {
            min-height: 130px;
          }
          .xs\\:inline {
            display: inline;
          }
          .xs\\:hidden {
            display: none;
          }
        }
        
        @media (max-width: 474px) {
          .xs\\:hidden {
            display: inline;
          }
          .xs\\:inline {
            display: none;
          }
          
          /* Improve readability on very small screens */
          h1 {
            word-break: break-word;
          }
        }

        /* Improve touch targets on mobile */
        @media (max-width: 640px) {
          input, button {
            min-height: 44px; /* iOS recommended touch target size */
          }
        }
      `}</style>
    </div>
  )
}

export default newsletter