import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Admission_Eligibility from "@/components/Opportunities/Admission_Eligibility";
import ObjectiveStipendStructure from "@/components/Opportunities/PaidInternship/ObjectiveStipendStructure";
import DurationTimelineAndEligibilityCriteria from "@/components/Opportunities/PaidInternship/DurationTimelineAndEligibilityCriteria";
import SelectionAndPerformanceCards from "@/components/Opportunities/PaidInternship/SelectionAndPerformanceCards";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow py-16">
        <ObjectiveStipendStructure />
        <DurationTimelineAndEligibilityCriteria />
        <SelectionAndPerformanceCards />
      </main>
      <Footer />
    </div>
  );
}
