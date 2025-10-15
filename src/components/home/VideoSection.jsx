"use client"
import React, { useState, useRef } from 'react'

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const iframeRef = useRef(null);

    const handlePlayClick = () => {
        setIsPlaying(true);
        // Send a message to the Vimeo iframe to play the video
        if (iframeRef.current) {
            iframeRef.current.contentWindow.postMessage('{"method":"play"}', '*');
        }
    };

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
                            <iframe
                                ref={iframeRef}
                                src="https://player.vimeo.com/video/1079771620?autoplay=0&muted=1&loop=1&autopause=0"
                                className="h-full w-full"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title="VRT Management Video"
                            ></iframe>
                            
                            {/* Play button overlay */}
                            {!isPlaying && (
                                <button
                                    onClick={handlePlayClick}
                                    className="absolute inset-0 m-auto h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-neutral-900 shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 group"
                                    aria-label="Play video"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="currentColor" 
                                        className="h-8 w-8 md:h-10 md:w-10 ml-1 group-hover:scale-110 transition-transform duration-200"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection