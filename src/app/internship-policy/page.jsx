import React from "react";
import ObjectiveStipendStructure from "@/components/Opportunities/PaidInternship/ObjectiveStipendStructure";
import DurationTimelineAndEligibilityCriteria from "@/components/Opportunities/PaidInternship/DurationTimelineAndEligibilityCriteria";
import SelectionAndPerformanceCards from "@/components/Opportunities/PaidInternship/SelectionAndPerformanceCards";
import TermsConditionAndSupport from "@/components/Opportunities/PaidInternship/TermsConditionAndSupport";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow py-16">
        <ObjectiveStipendStructure />
        <DurationTimelineAndEligibilityCriteria />
        <SelectionAndPerformanceCards />
        <TermsConditionAndSupport />
      </main>
    </div>
  );
}
