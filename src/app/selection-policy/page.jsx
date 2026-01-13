export const metadata = {
  title: "Selection Policy | BVOC Admission",
  description:
    "Understand the BVOC admission and student selection process at Nexcore INTITUTE OF TECHNOLOGY.",
  openGraph: {
    title: "BVOC Selection Policy",
    description:
      "Transparent and fair admission process for BVOC programs.",
    url: "https://nexcoreinstitute.org/selection-policy",
    siteName: "Nexcore INTITUTE OF TECHNOLOGY",
  },
};

import React from "react";
import SelectionPolicy from "@/components/Opportunities/SelectionPolicy";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow ">
        <SelectionPolicy />
      </main>
    </div>
  );
}
