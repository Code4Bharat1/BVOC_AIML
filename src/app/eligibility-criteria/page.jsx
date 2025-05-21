import React from "react";
import Admission_Eligibility from "@/components/Opportunities/Admission_Eligibility";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow py-16">
        <Admission_Eligibility />
      </main>
    </div>
  );
}
