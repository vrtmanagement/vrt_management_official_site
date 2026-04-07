import InternshipHero from "@/components/internship-page/InternshipHero";
import InternshipProblemSection from "@/components/internship-page/InternshipProblemSection";
import InternshipRoadmapSection from "@/components/internship-page/InternshipRoadmapSection";
import InternshipSkillsValueSection from "@/components/internship-page/InternshipSkillsValueSection";

export default function InternshipProgramPage() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden pt-[72px]">
      <InternshipHero />
      <InternshipProblemSection />
      <InternshipRoadmapSection />
      <InternshipSkillsValueSection />
    </div>
  );
}
