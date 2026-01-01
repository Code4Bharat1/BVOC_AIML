export const metadata = {
  title: "Placement Policy | Nexcore Alliance LLP",
  description:
    "Learn about placement support, career guidance, and job assistance for BVOC students at Nexcore Alliance LLP.",
  openGraph: {
    title: "BVOC Placement Policy",
    description:
      "Career-focused placement assistance for skill-based BVOC programs.",
    url: "https://nexcoreinstitute.org/placement-policy",
    siteName: "Nexcore Alliance LLP",
  },
};





import React from "react";
import Placement_Policy from "@/components/Opportunities/Placement_Policy";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow ">
        <Placement_Policy />
      </main>
    </div>
  );
}
