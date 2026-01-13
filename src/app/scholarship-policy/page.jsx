export const metadata = {
  title: "Scholarship Policy | BVOC Programs",
  description:
    "Explore scholarship opportunities and financial support options for BVOC students at Nexcore INTITUTE OF TECHNOLOGY.",
  openGraph: {
    title: "BVOC Scholarship Policy",
    description:
      "Merit and need-based scholarships for skill-based degree programs.",
    url: "https://nexcoreinstitute.org/scholarship-policy",
    siteName: "Nexcore INTITUTE OF TECHNOLOGY",
  },
};



import React from "react";
import Scholarship_Policy from "@/components/Opportunities/Scholarship_Policy";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow ">
        <Scholarship_Policy />
      </main>
    </div>
  );
}
