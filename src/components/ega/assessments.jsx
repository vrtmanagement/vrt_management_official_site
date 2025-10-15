"use client";
import Image from "next/image";
import { motion } from "framer-motion";



const testimonials = [
    {
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/da0afa6e-91a8-4e62-b1a2-24a3fac72532-founder-university/assets/images/1728496477867-6.png",
        alt: "A man with glasses and a short beard outdoors with yellow autumn leaves in the background.",
        quote: "Helps you deeply understand how you behave, what drives you, how you think, and what you’re capable of, so you can lead with self-awareness, build the right team, and make better decisions faster.",
        name: "TriMetrix HD Assessment",
        company: "BeAssured",
    },
    {
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/da0afa6e-91a8-4e62-b1a2-24a3fac72532-founder-university/assets/images/654c34d7d18a79e4687264c7_scott-7.png",
        alt: "Portrait of a smiling man with dark hair, beard, and wearing a black shirt, against a light gray background.",
        quote: "Equips you to recognize, manage, and channel emotions, your own and your team’s, so you lead with empathy, resolve conflict effectively, and build a culture of trust and resilience.",
        name: "Emotional Intelligence Assessment",
        company: "Timewell",
    },
    {
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/da0afa6e-91a8-4e62-b1a2-24a3fac72532-founder-university/assets/images/Professional+Headshot.jpg",
        alt: "Portrait of a smiling man with glasses, wearing a dark blazer and a light blue shirt against a neutral background.",
        quote: "Reveals how buyers make decisions and how you sell, so you can align your sales conversations to trust-based, high-conversion strategies that feel authentic and close more deals.",
        name: "TARGET Selling Insights",
        company: "Loopsmart AI",
    },
    {
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/da0afa6e-91a8-4e62-b1a2-24a3fac72532-founder-university/assets/images/1728580666837-9.jpg",
        alt: "Black and white headshot of a smiling woman with long hair.",
        quote: "Identifies your current business growth stage and its hidden challenges, so you can focus on solving the right problems at the right time with the right leadership approach.",
        name: "Stages of Growth Assessment",
        company: "Closai",
    },
];

const TestimonialCard = ({ testimonial, isReversed }) => {
    const title = testimonial?.name ?? testimonial?.title ?? "Assessment"
    const description = testimonial?.description ?? testimonial?.quote
    const image = testimonial?.image
    const alt = testimonial?.alt ?? title
    return (
        <div
            className={`bg-white shadow-xl p-8 sm:p-10 lg:p-12 w-full sm:w-auto lg:max-w-xl xl:max-w-2xl transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500
        ${isReversed ? 'rounded-r-[100px] sm:rounded-r-[150px] lg:rounded-r-[200px]' : 'rounded-l-[100px] sm:rounded-l-[150px] lg:rounded-l-[200px]'}`}
        >
            <div className={`flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 lg:gap-8 ${isReversed ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
                {image ? (
                    <div className="flex-shrink-0">
                        <Image
                            src={image}
                            alt={alt}
                            width={50}
                            height={50}
                            className="w-40 h-28 sm:w-48 sm:h-32 lg:w-56 lg:h-36 rounded-xl object-cover border border-black/5 shadow-sm mx-auto"
                        />
                    </div>
                ) : null}
                <div className="flex-grow">
                    <h3 className="font-heading text-xl lg:text-2xl text-text-dark">
                        {title}
                    </h3>
                    {description ? (
                        <p className="mt-3 font-body text-base lg:text-md text-text-dark/80">
                            {description}
                        </p>
                    ) : null}
                </div>
            </div>
        </div>
    );
};


const AssessmentSection = () => {
    return (
        <section className="bg-secondary text-text-dark font-body overflow-hidden relative z-30">
            <div className="py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <h2 className="font-heading font-normal text-5xl md:text-[64px] text-text-dark leading-[1.05] tracking-tight text-center">
                            Assessments for Your Growth
                        </h2>
                        <p className="mt-6 text-base text-text-dark/70 max-w-2xl mx-auto text-center">
                            Powerful tools to unlock your leadership and business potential
                        </p>
                        <div className="mt-12 flex flex-col gap-8 lg:gap-12">
                            {testimonials.map((testimonial, index) => {
                                const alignRight = index % 2 === 0; // even indexes align right
                                return (
                                    <motion.div
                                        key={testimonial.name}
                                        className={`flex w-full ${alignRight ? 'justify-end' : 'justify-start'}`}
                                        initial={{ opacity: 0, x: alignRight ? 60 : -60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        viewport={{ once: true, amount: 0.3 }}
                                    >
                                        <TestimonialCard testimonial={testimonial} isReversed={!alignRight} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssessmentSection;