import Faculty from "@/components/lban/faculty";
import HeroBanner from "@/components/lban/hero-banner";
import KeyTakeaways from "@/components/lban/key-takeaways";
import LeftSidebarNavigation from "@/components/lban/left-sidebar-navigation";
import OverviewSection from "@/components/lban/overview";
import TwoColumnLayout from "@/components/lban/two-column-layout";
import WhoShouldAttend from "@/components/lban/whos-it-for";
import ProgramBenefits from "@/components/lban/program-benefits";
import Masterclass from "@/components/lban/key-module-masterclass";
import KeyModuleEbook from "@/components/lban/key-module-ebook";

export default function page() {
    return (
        <div className="min-h-screen bg-white">

            <main>
                <HeroBanner />
            {/* <Test /> */}

                <TwoColumnLayout sidebarContent={<LeftSidebarNavigation />}>
                    <div className="space-y-16">
                        <OverviewSection />
                        <KeyTakeaways />
                        <KeyModuleEbook />
                        <Masterclass />
                        {/* <ProgramBenefits /> */}
                        {/* <WhoShouldAttend /> */}
                        <Faculty />
                        {/*
            <WhoShouldAttend />
            <ScheduleFormat />
            <TuitionFinancialAid />
            <ProgramDetails />
            <CurriculumSection />
            <LearningOutcomes /> */}
                    </div>
                </TwoColumnLayout>

                {/* <TestimonialsSection />
        <ApplicationCta />
        <FaqSection /> */}
            </main>
        </div>
    );
}