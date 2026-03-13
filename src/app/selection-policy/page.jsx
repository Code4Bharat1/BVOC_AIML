export const metadata = {
  title: "Selection Policy | Nexcore Institute of Technology",
  description:
    "Understand the BVOC admission and student selection process at Nexcore Institute of Technology.",

  openGraph: {
    title: "BVOC Selection Policy | Nexcore Institute",
    description:
      "Transparent and fair admission process for BVOC programs at Nexcore Institute.",
    url: "https://nexcoreinstitute.org/selection-policy",
    siteName: "Nexcore Institute of Technology",
  },
};

import React from "react";
import SelectionPolicy from "@/components/Opportunities/SelectionPolicy";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <SelectionPolicy />
      </main>

      <Footer />
    </div>
  );
}