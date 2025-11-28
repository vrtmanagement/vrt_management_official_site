import HeroNewsletter from "@/components/newsletter/HeroNewsletter";
import AboutSection from "@/components/newsletter/AboutSection";
import CTASection from "@/components/newsletter/CTASection";

export default function newsletter() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroNewsletter />
        <AboutSection />
        {/* <CTASection /> */}
      </main>
    </div>
  );
}