import React from 'react'

const VideoSection = () => {
    return (
        <section className="relative w-full mt-20">
            {/* Text section (dark) */}
            <div className="relative w-full bg-neutral-900 text-white">
                <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16 lg:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        <div className="space-y-5">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
                                From Concept To Completion:
                                <br className="hidden sm:block" />
                                We&apos;ve Got You Covered!
                            </h2>
                        </div>
                    </div>

                </div>
                <div className="flex justify-end md:justify-end justify-center">
                    <p className="text-base md:text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-[60ch] text-center md:text-left">
                        Over the past 35 years, we have been helping businesses grow and succeed. We have a team of experts who are dedicated to helping you achieve your goals.
                    </p>
                </div>
                {/* Reserve space equal to half of the 16:9 video height (28.125% of width) */}
                <div className="mx-auto w-[92%] md:w-[820px] lg:w-[960px] pt-[28.125%]" />
            </div>

            {/* Video section (light) */}
            <div className="w-full bg-white">
                <div className="max-w-[1200px] mx-auto px-6 pb-12 md:pb-16 lg:pb-20">
                    <div className="mx-auto w-[92%] md:w-[820px] lg:w-[960px] -mt-[28.125%]">
                        <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl border border-black/10 bg-black">
                            <video
                                className="h-full w-full object-cover"
                                poster="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1600&auto=format&fit=crop"
                                controls
                            >
                                <source src="" type="video/mp4" />
                            </video>
                            <button
                                type="button"
                                aria-label="Play video"
                                className="absolute inset-0 m-auto h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-neutral-900 shadow-lg hover:bg-white transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 md:h-10 md:w-10">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection