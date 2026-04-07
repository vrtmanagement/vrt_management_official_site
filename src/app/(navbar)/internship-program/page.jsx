import InternshipHero from "@/components/internship-page/InternshipHero";
import OutreachTemplatesSection from "@/components/internship-page/OutreachTemplatesSection";
import InternshipProblemSection from "@/components/internship-page/InternshipProblemSection";
import InternshipProposalSection from "@/components/internship-page/InternshipProposalSection";
import InternshipRoadmapSection from "@/components/internship-page/InternshipRoadmapSection";
import InternshipSkillsValueSection from "@/components/internship-page/InternshipSkillsValueSection";
import InternshipSupportSection from "@/components/internship-page/InternshipSupportSection";
import CTASection from "@/components/internship-page/CTASection";

export default function InternshipProgramPage() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden pt-[72px]">
      <InternshipHero />
      <InternshipProblemSection />
      <InternshipRoadmapSection />
      <InternshipSkillsValueSection />
      <InternshipSupportSection />
      <InternshipProposalSection />
      <OutreachTemplatesSection />
      <CTASection />
    </div>
  );
}
