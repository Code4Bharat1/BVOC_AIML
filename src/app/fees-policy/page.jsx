export const metadata = {
  title: "Fees Policy | BVOC Programs – Nexcore Institute",
  description:
    "Learn about the BVOC program fee structure, payment terms, and financial transparency at Nexcore Institute of Technology.",
  openGraph: {
    title: "BVOC Fees Policy | Nexcore Institute",
    description:
      "Transparent and student-friendly fee structure for BVOC programs at Nexcore Institute.",
    url: "https://nexcoreinstitute.org/fees-policy",
    siteName: "Nexcore Institute of Technology",
  },
};

import React from "react";
import Fee_Policy from "@/components/Opportunities/Fees_Structure/Fee_Policy";
import FeePaymentGuidelines from "@/components/Opportunities/Fees_Structure/FeePaymentGuidelines";
import FinancialAssistance from "@/components/Opportunities/Fees_Structure/FinancialAssistance";
import LastComponenet from "@/components/Opportunities/Fees_Structure/LastComponenet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Fee_Policy />
        <FeePaymentGuidelines />
        {/* <FinancialAssistance /> */}
        {/* <LastComponenet /> */}
      </main>

      <Footer />
    </div>
  );
}