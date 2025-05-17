import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Admission_Eligibility from "@/components/Opportunities/Admission_Eligibility";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow py-16">
        <Admission_Eligibility />
      </main>
      <Footer />
    </div>
  );
}
