"use client"
import React, { useState } from 'react'

const Masterclass = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const toggle = (index) => setOpenIndex((prev) => (prev === index ? null : index))
  return (
        <section id="masterclass" className="bg-white">
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-12 md:py-16">
                <div className="mb-6">
                    <h2 className="font-bold text-[32px] md:text-[42px] leading-[1.2] text-black"
                    style={{ fontFamily: 'Lora, serif' }}
                    >
                        <span className="text-red-600">Register for Live Masterclass</span>
                    </h2>
                    <div className="mt-3 h-1.5 w-24 bg-red-600 rounded-full"></div>
                </div>
                <p className="text-base md:text-lg text-[#333333] max-w-3xl">
                    On November 25th, Rajesh is hosting a live Master class where he’ll train you on hiring the right team and along with:
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6">
                    <div className={`p-5 rounded-xl border bg-white transition-all duration-200 ${openIndex === 0 ? 'border-red-200 shadow-sm' : 'border-[#eaeaea] hover:border-red-200 hover:shadow-sm'}`}>
                        <button type="button" onClick={() => toggle(0)} className="w-full text-left flex items-start justify-between gap-4" aria-expanded={openIndex === 0} aria-controls="mc-item-0">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white text-sm font-semibold">✓</div>
                                <h3 className="text-lg font-semibold text-black leading-[1.4]">You’ll learn how to ask smarter interview questions to find people who actually fit your business.</h3>
                            </div>
                            <span className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white border-[#e5e5e5] text-black transition-transform shrink-0 ${openIndex === 0 ? 'rotate-180' : ''}`} aria-hidden="true">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                        </button>
                        {openIndex === 0 && (
                            <div id="mc-item-0" className="mt-3 border-l-4 border-red-600 pl-4">
                                <p className="text-[#333333] leading-[1.6]">
                                    No more guessing if someone “seems right.” You’ll leave with better questions and sharper instincts.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className={`p-5 rounded-xl border bg-white transition-all duration-200 ${openIndex === 1 ? 'border-red-200 shadow-sm' : 'border-[#eaeaea] hover:border-red-200 hover:shadow-sm'}`}>
                        <button type="button" onClick={() => toggle(1)} className="w-full text-left flex items-start justify-between gap-4" aria-expanded={openIndex === 1} aria-controls="mc-item-1">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white text-sm font-semibold">✓</div>
                                <h3 className="text-lg font-semibold text-black leading-[1.4]">You’ll learn how to define roles clearly, so new hires know what to do from day one.</h3>
                            </div>
                            <span className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white border-[#e5e5e5] text-black transition-transform shrink-0 ${openIndex === 1 ? 'rotate-180' : ''}`} aria-hidden="true">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                        </button>
                        {openIndex === 1 && (
                            <div id="mc-item-1" className="mt-3 border-l-4 border-red-600 pl-4">
                                <p className="text-[#333333] leading-[1.6]">
                                    That means fewer check-ins, fewer “What should I be doing?” moments, and faster results.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className={`p-5 rounded-xl border bg-white transition-all duration-200 ${openIndex === 2 ? 'border-red-200 shadow-sm' : 'border-[#eaeaea] hover:border-red-200 hover:shadow-sm'}`}>
                        <button type="button" onClick={() => toggle(2)} className="w-full text-left flex items-start justify-between gap-4" aria-expanded={openIndex === 2} aria-controls="mc-item-2">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white text-sm font-semibold">✓</div>
                                <h3 className="text-lg font-semibold text-black leading-[1.4]">You’ll learn how to identify a team that takes ownership, so you can delegate effectively.</h3>
                            </div>
                            <span className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white border-[#e5e5e5] text-black transition-transform shrink-0 ${openIndex === 2 ? 'rotate-180' : ''}`} aria-hidden="true">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                        </button>
                        {openIndex === 2 && (
                            <div id="mc-item-2" className="mt-3 border-l-4 border-red-600 pl-4">
                                <p className="text-[#333333] leading-[1.6]">
                                    Instead of chasing people for updates, you’ll have a team that follows through, takes initiative, and frees you up to focus on growth.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className={`p-5 rounded-xl border bg-white transition-all duration-200 ${openIndex === 3 ? 'border-red-200 shadow-sm' : 'border-[#eaeaea] hover:border-red-200 hover:shadow-sm'}`}>
                        <button type="button" onClick={() => toggle(3)} className="w-full text-left flex items-start justify-between gap-4" aria-expanded={openIndex === 3} aria-controls="mc-item-3">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white text-sm font-semibold">✓</div>
                                <h3 className="text-lg font-semibold text-black leading-[1.4]">You’ll walk away with a system you can use immediately, even if you’re hiring right now.</h3>
                            </div>
                            <span className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white border-[#e5e5e5] text-black transition-transform shrink-0 ${openIndex === 3 ? 'rotate-180' : ''}`} aria-hidden="true">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                        </button>
                        {openIndex === 3 && (
                            <div id="mc-item-3" className="mt-3 border-l-4 border-red-600 pl-4">
                                <p className="text-[#333333] leading-[1.6]">
                                    This is a real and proven hiring process that helps you make better hires starting this week.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-10 rounded-xl border border-[#eaeaea] bg-gradient-to-br from-white to-[#fafafa] p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <span className="inline-flex h-2 w-2 rounded-full bg-red-600"></span>
                            <p className="text-sm font-medium text-black">Limited seats available <span className="inline-flex items-center gap-2 rounded-full bg-red-50 text-red-700 px-3 py-1 text-sm font-medium">
                        Live Masterclass · Nov 25, 2025</span></p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            
                            <a
                                href="https://us02web.zoom.us/meeting/register/bVZE_ja0SpiR9vr3YgCItw#/registration"
                                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-white font-semibold shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                                target="_blank"
                            >
                                Save your seat
                                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </a>
                        </div>
                    </div >
                </div>
            </div>
        </section>
    )
}

export default Masterclass