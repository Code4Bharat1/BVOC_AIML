export const metadata = {
  title: "Eligibility Criteria | BVOC Programs – Nexcore Institute",
  description:
    "Check eligibility criteria for BVOC programs at Nexcore Institute of Technology including academic requirements, admission guidelines, and eligibility details.",
  openGraph: {
    title: "BVOC Eligibility Criteria | Nexcore Institute",
    description:
      "Know the eligibility requirements for BVOC and skill-based degree programs at Nexcore Institute of Technology.",
    url: "https://nexcoreinstitute.org/eligibility-criteria",
    siteName: "Nexcore Institute of Technology",
  },
};

import React from "react";
import Admission_Eligibility from "@/components/Opportunities/Admission_Eligibility";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Admission_Eligibility />
      </main>

      <Footer />
    </div>
  );
}