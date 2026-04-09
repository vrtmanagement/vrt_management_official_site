import React from "react";
import EEHeroSection from "@/components/ee/ee-herosection";
import EEEntrepreneursReality from "@/components/ee/ee-entrepreneurs-reality";
import EEIntroducing from "@/components/ee/ee-introducing";
import EEWhySuccess from "@/components/ee/ee-why-success";
import EEWhatYouGet from "@/components/ee/ee-what-you-get";
import EEResultsYoullExperience from "@/components/ee/ee-results-youll-experience";
import EEWhoIsThisFor from "@/components/ee/ee-who-is-this-for";
import EEOutcomesSection from "@/components/ee/ee-outcomes-section";
import EEWhyItsDifferent from "@/components/ee/ee-why-its-different";
import EEMasterclassCard from "@/components/ee/ee-masterclass-card";
import EEFaq from "@/components/ee/ee-faq";
import EECTASection from "@/components/ee/ee-cta-section";

export default function EEPage() {
  return (
    <div className="min-h-screen">
      <EEHeroSection />
      <EEEntrepreneursReality />
      {/* <EEIntroducing /> */}
      {/* <EEWhySuccess /> */}
      <EEWhatYouGet />
      <EEResultsYoullExperience />
      <EEWhoIsThisFor />
      <EEOutcomesSection />
      <EEWhyItsDifferent />
      <EEMasterclassCard />
      <EEFaq />
      <EECTASection />
    </div>
  );
}
