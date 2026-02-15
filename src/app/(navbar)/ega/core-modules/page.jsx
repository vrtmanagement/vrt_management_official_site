// "use client";
// import ChangeOrDie from "@/components/ega/ChangeOrDie";
// import DynamicCommunication from "@/components/ega/DynamicCommunication";


// const CoreModulesPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-20 px-6 md:px-16 lg:px-32 space-y-16">

//       <h1 className="text-4xl font-bold text-center text-gray-900">
//         Growth as a Process – 10 Core Models
//       </h1>

//       {/* 1 */}
//       <ChangeOrDie />

//       {/* 2 */}
//       <div className="bg-white p-8 rounded-xl shadow">
//         <h2 className="text-2xl font-bold text-red-600">
//           2. How to build TRUST with all Stakeholders
//         </h2>
//       </div>

//       {/* 3 */}
//       <DynamicCommunication />

//       {/* 4-10 (placeholders for now) */}
//       <div className="bg-white p-8 rounded-xl shadow">
//         <h2 className="text-2xl font-bold text-red-600">
//           4. Stages Of Growth (SOG)
//         </h2>
//       </div>

//       {/* Continue same pattern for remaining modules */}

//     </div>
//   );
// };

// export default CoreModulesPage;


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
