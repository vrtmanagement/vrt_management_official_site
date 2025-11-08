import Benefits from "@/components/trimetrix-hd/Benefits";
import CTASection from "@/components/trimetrix-hd/CTASection";
import Features from "@/components/trimetrix-hd/Features";
import Hero from "@/components/trimetrix-hd/Hero";
import HowItWorks from "@/components/trimetrix-hd/HowItWorks";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <Hero />
                <Features />
                <Benefits />
                <HowItWorks />
                <CTASection />
                {
                /*
        <Testimonials />
        <ContactForm /> */}
            </main>
        </div>
    );
}