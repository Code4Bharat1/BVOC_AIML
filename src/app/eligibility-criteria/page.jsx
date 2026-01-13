export const metadata = {
  title: "Eligibility Criteria | BVOC Programs",
  description:
    "Check eligibility criteria for BVOC programs at Nexcore INTITUTE OF TECHNOLOGY including academic requirements and admission guidelines.",
  openGraph: {
    title: "BVOC Eligibility Criteria",
    description:
      "Know the eligibility requirements for BVOC and skill-based degree programs.",
    url: "https://nexcoreinstitute.org/eligibility-criteria",
    siteName: "Nexcore INTITUTE OF TECHNOLOGY",
  },
};



import React from "react";
import Admission_Eligibility from "@/components/Opportunities/Admission_Eligibility";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow ">
        <Admission_Eligibility />
      </main>
    </div>
  );
}
