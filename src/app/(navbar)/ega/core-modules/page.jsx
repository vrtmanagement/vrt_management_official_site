"use client";

import ChangeOrDie from "@/components/ega/ChangeOrDie";
import BuildTrust from "@/components/ega/BuildTrust";
import DynamicCommunication from "@/components/ega/DynamicCommunication";
import StagesOfGrowth from "@/components/ega/StagesOfGrowth";
import StrategicPlanning from "@/components/ega/StrategicPlanning";
import StrategyExecutionCalendar from "@/components/ega/StrategyExecutionCalendar";
import BuildingCompanyCulture from "@/components/ega/BuildingCompanyCulture";
import EmotionalIntelligence from "@/components/ega/EmotionalIntelligence";
import VisionPurposeValues from "@/components/ega/VisionPurposeValues";
import LeadershipAndSwot from "@/components/ega/LeadershipAndSwot";


const CoreModulesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 lg:px-32 py-20">

      <div id="module-1" className="scroll-mt-24 py-8">
        <ChangeOrDie />
      </div>

      <div id="module-2" className="scroll-mt-24 py-8">
        <BuildTrust />
      </div>

      <div id="module-3" className="scroll-mt-24 py-8">
        <DynamicCommunication />
      </div>

      <div id="module-4" className="scroll-mt-24 py-8">
        <StagesOfGrowth />
      </div>

      <div id="module-5" className="scroll-mt-24 py-8">
        <StrategicPlanning />
      </div>

      <div id="module-6" className="scroll-mt-24 py-8">
        <StrategyExecutionCalendar />
      </div>

      <div id="module-7" className="scroll-mt-24 py-8">
        <LeadershipAndSwot />
      </div>

      <div id="module-8" className="scroll-mt-24 py-8">
        <VisionPurposeValues />
      </div>

      <div id="module-9" className="scroll-mt-24 py-8">
        <EmotionalIntelligence />
      </div>

      <div id="module-10" className="scroll-mt-24 py-8">
        <BuildingCompanyCulture />
      </div>

    </div>
  );
};

export default CoreModulesPage;
