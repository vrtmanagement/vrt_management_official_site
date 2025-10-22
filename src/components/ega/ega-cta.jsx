'use client';

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";


export function CtaSection() {
    return (
        <section className="bg-neutral-50 min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center text-center lg:text-left px-4 sm:px-0">
                    <div className="space-y-6 max-w-2xl order-2 lg:order-1 px-4 sm:px-0">
                        <h2 className="text-5xl lg:text-6xl font-black text-neutral-900 leading-tight"
                            style={{ fontFamily: 'Merriweather, serif' }}
                        >
                            Rajesh Tedla
                        </h2>

                        <h3 className="text-3xl lg:text-3xl font-semibold text-neutral-800"
                            style={{ fontFamily: 'Lato, serif' }}
                        >
                            A Trusted Mentor with 35+ Years of Scaling Businesses
                            <br />
                        </h3>


                        <div className="space-y-4 text-neutral-700 text-lg leading-relaxed"
                            style={{ fontFamily: 'Inter, serif' }}
                        >
                            <p>
                                I'm Rajesh Tedla, Founder and CEO of VRT Management Group, LLC and since 2018 a mentor for the Stanford LBAN Entrepreneur Workshop where I guide growth-focused entrepreneurs from around the world.
                            </p>
                            <p className="font-medium">
                            With over 35 years of experience I’ve dedicated my career to helping business leaders achieve sustainable scalable growth. I’ve personally guided more than 1,420 entrepreneurs across 28+ countries through transformative scaling journeys using proven methodologies that have generated over $504 million in measurable business growth.


                            </p>
                        </div>

                        <div className="pt-2 flex justify-center lg:justify-center">
                            <Link href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2025-06"
                            >
                            <Button
                                size="lg"
                                    className="bg-red-600 text-white text-lg font-semibold px-10 py-6 hover:bg-white hover:text-red-600 hover:border-red-600 border-2 border-red-600 transition-all duration-300 cursor-pointer "
                                >
                                    Book Free 45 Minute Strategy Call
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative flex justify-center order-1 lg:order-2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm h-[400px] lg:h-[500px]">
                            <Image src="https://vrt9.net/edge/RajeshTedla.jpg" alt="Professional woman working on laptop" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
