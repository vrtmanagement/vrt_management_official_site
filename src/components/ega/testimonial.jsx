"use client";

import React from 'react';
import { Star, Users } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        name: "Melissa Uribe Gil",
        role: "EVP, Costex Tractor Parts",
        image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/76672c59-0193-4795-ba6b-96fe356d9cab_800w.jpg",
        quote: "The ability to ask powerful questions… transformed me as a leader.",
        rating: 5,
        variant: "light"
    },
    {
        name: "Francesco Pagano,",
        role: "President, Interpreters and Translators, Inc.",
        image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1c1e147-5d35-4171-9f02-24e269c2c8b3_320w.jpg",
        quote: "Our business grew by 130%, leadership team is aligned, clarity and vision like never before.",
        rating: 5,
        variant: "dark"
    },
    {
        name: "Lara Cattaneo",
        role: "Clinical Psychologist",
        image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bcaefeee-31cd-4c69-9a33-39ee0ad78c30_320w.jpg",
        quote: "Raj taught me how to profile the ‘WHY’ behind our actions using data… goes beyond theories.",
        rating: 5,
        variant: "light"
    }
];

const Testimonial = () => {
    return (
        <section className="w-full max-w-6xl mr-auto ml-auto pt-12 pr-4 pb-6 pl-4">
            <div className="ring-1 ring-black/5 bg-white rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
                <div className="flex flex-col items-center gap-6">
                    <div className="text-center">
                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">What leaders say after working with Rajesh</h3>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`${testimonial.variant === 'dark'
                                ? 'bg-gray-900 text-white'
                                : 'bg-white ring-1 ring-black/5'
                                } rounded-xl p-5`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-1 mb-2">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 text-amber-500 fill-current"
                                            />
                                        ))}
                                    </div>
                                    <p
                                        className={`text-sm leading-relaxed ${testimonial.variant === 'dark'
                                            ? 'text-white/90'
                                            : 'text-gray-800'
                                            }`}
                                    >
                                        "{testimonial.quote}"
                                    </p>
                                    <div className="mt-3">
                                        <div
                                            className={`font-semibold text-sm ${testimonial.variant === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                                }`}
                                        >
                                            {testimonial.name}
                                        </div>
                                        <div
                                            className={`text-xs ${testimonial.variant === 'dark'
                                                ? 'text-white/70'
                                                : 'text-gray-500'
                                                }`}
                                        >
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;