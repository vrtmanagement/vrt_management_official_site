import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const NewComponent = () => {
    return (
        <>
            {/* Growth As A Process Section */}
            < div className="mt-16 md:mt-20 lg:mt-24 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20" >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="font-serif font-bold text-text-primary text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-tight mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
                            Growth isn't a personality trait.<br /> <span className="text-red-600">It's a process.</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Growth As A Process is the core of EGA™: when you install the right process, growth
                            becomes repeatable not dependent on heroic effort, luck, or the CEO doing everything.
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="mt-10 md:mt-12">
                        <p className="text-sm sm:text-base md:text-lg font-semibold text-text-primary mb-6 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                            What that means:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-red-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-text-primary mb-2 text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Clear priorities
                                    </h4>
                                    <p className="text-sm md:text-base text-text-secondary" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        What matters now
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-red-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-text-primary mb-2 text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Aligned execution
                                    </h4>
                                    <p className="text-sm md:text-base text-text-secondary" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Who owns what
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-red-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-text-primary mb-2 text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Consistent operating rhythms
                                    </h4>
                                    <p className="text-sm md:text-base text-text-secondary" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        How results happen every week
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-red-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-text-primary mb-2 text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Measurable progress
                                    </h4>
                                    <p className="text-sm md:text-base text-text-secondary" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Scorecards, accountability, follow-through
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default NewComponent
