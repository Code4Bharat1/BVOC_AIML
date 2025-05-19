import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Fee_Policy from "@/components/Opportunities/Fees_Structure/Fee_Policy";
import FeePaymentGuidelines from "@/components/Opportunities/Fees_Structure/FeePaymentGuidelines";
import FinancialAssistance from "@/components/Opportunities/Fees_Structure/FinancialAssistance";
import LastComponenet from "@/components/Opportunities/Fees_Structure/LastComponenet";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow py-16">
        <Fee_Policy/>
        <FeePaymentGuidelines />
        <FinancialAssistance />
        <LastComponenet />
      </main>
      <Footer />
    </div>
  );
}
