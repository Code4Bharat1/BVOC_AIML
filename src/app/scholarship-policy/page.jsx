export const metadata = {
  title: "Scholarship Policy | Nexcore Institute of Technology",
  description:
    "Explore scholarship opportunities and financial support options for BVOC students at Nexcore Institute of Technology.",

  openGraph: {
    title: "BVOC Scholarship Policy | Nexcore Institute",
    description:
      "Merit-based and need-based scholarships available for skill-based BVOC programs at Nexcore Institute.",
    url: "https://nexcoreinstitute.org/scholarship-policy",
    siteName: "Nexcore Institute of Technology",
  },
};

import React from "react";
import Scholarship_Policy from "@/components/Opportunities/Scholarship_Policy";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Scholarship_Policy />
      </main>

      <Footer />
    </div>
  );
}