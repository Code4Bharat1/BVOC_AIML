export const metadata = {
  title: "Placement Policy | Nexcore Institute of Technology",
  description:
    "Learn about placement support, career guidance, internship opportunities, and job assistance for BVOC students at Nexcore Institute of Technology.",
  openGraph: {
    title: "BVOC Placement Policy | Nexcore Institute",
    description:
      "Career-focused placement assistance and internship opportunities for skill-based BVOC programs at Nexcore Institute.",
    url: "https://nexcoreinstitute.org/placement-policy",
    siteName: "Nexcore Institute of Technology",
  },
};

import React from "react";
import Placement_Policy from "@/components/Opportunities/Placement_Policy";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Placement_Policy />
      </main>

      <Footer />
    </div>
  );
}