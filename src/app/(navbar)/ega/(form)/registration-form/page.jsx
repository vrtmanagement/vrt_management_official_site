import ContactForm from "@/components/form/Contactform";
import Image from "next/image";
import Link from "next/link";

export default function RegistrationFormPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Main Content */}
            <main className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch min-h-[600px]">
                        {/* Left Content - CEO Photo & CTA */}
                        <div className="flex flex-col space-y-8">
                            {/* CEO Photo Placeholder */}
                            <div className="flex-1 bg-gray-800 rounded-xl overflow-hidden shadow-2xl relative">
                                <Image
                                    src="/rajeshsir.jpeg"
                                    alt="CEO Photo"
                                    width={500}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                                {/* Glass-morphism text overlay */}
                                <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-4 shadow-lg">
                                    <p className="text-white text-lg font-semibold leading-relaxed mb-2">
                                    Want to grow your business by 20% in the next year? call us                                    </p>
                                    <p className="text-white/90 text-sm font-medium">
                                        — Rajesh Tedla
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Link href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2025-06"
                            >
                                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-red-500">
                                    Book Free 45 Minute Strategy Call
                                </button>
                            </Link>
                        </div>

                        {/* Right Form */}
                        <div className="flex">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}