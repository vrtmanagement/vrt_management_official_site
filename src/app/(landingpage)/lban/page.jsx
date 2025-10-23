import Faculty from "@/components/lban/faculty";
import HeroBanner from "@/components/lban/hero-banner";
import KeyTakeaways from "@/components/lban/key-takeaways";
import LeftSidebarNavigation from "@/components/lban/left-sidebar-navigation";
import OverviewSection from "@/components/lban/overview";
import TwoColumnLayout from "@/components/lban/two-column-layout";


export default function page() {
    return (
        <div className="min-h-screen bg-white">

            <main className="pt-16 md:pt-20">
                <HeroBanner />

                <TwoColumnLayout sidebarContent={<LeftSidebarNavigation />}>
                    <div className="space-y-16">
                        <OverviewSection />
                        <KeyTakeaways />
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