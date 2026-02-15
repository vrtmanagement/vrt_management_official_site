"use client";

import React from 'react'
import Image from 'next/image'

const NewComponent = () => {
    const processItems = [
        {
            icon: "/ega/growth_sec1/img1.png",
            title: "Clear priorities",
            subtitle: "What matters now"
        },
        {
            icon: "/ega/growth_sec1/img2.png",
            title: "Aligned execution",
            subtitle: "Who owns what"
        },
        {
            icon: "/ega/growth_sec1/img3.png",
            title: "Consistent operating rhythms",
            subtitle: "How results happen every week"
        },
        {
            icon: "/ega/growth_sec1/img4.png",
            title: "Measurable progress",
            subtitle: "Dashboards and Project Charters"
        }
    ];

    return (
    <section className="relative bg-[#FFF7F6] py-8 md:py-10 lg:py-12 rounded-2xl shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Top Section */}
                <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        Growth isn't a personality trait.
                    </h2>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-3">
                        It's a process.
                    </h2>
                    <p className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto mb-3 leading-relaxed">
                        At the core of EGA<sup className="text-xs align-super">©</sup> is <span className='font-bold'>" Growth as a Process "</span>. When the right systems are implemented, growth becomes predictable, scalable, and no longer dependent on luck or constant CEO intervention.
                        </p>

                    <p className="text-sm md:text-base font-bold text-gray-900">
                        What that means:
                    </p>
                </div>

                {/* Bottom Section - 4 Process Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {processItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-white border border-gray-100 rounded-xl shadow-sm p-4"
                        >
                            {/* Icon */}
                            <div className="mb-3 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1.5">
                                {item.title}
                            </h3>
                            
                            {/* Subtitle */}
                            <p className="text-xs md:text-sm text-gray-700">
                                {item.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewComponent
