export const metadata = {
  title: "Placement Policy | Nexcore INTITUTE OF TECHNOLOGY",
  description:
    "Learn about placement support, career guidance, and job assistance for BVOC students at Nexcore INTITUTE OF TECHNOLOGY.",
  openGraph: {
    title: "BVOC Placement Policy",
    description:
      "Career-focused placement assistance for skill-based BVOC programs.",
    url: "https://nexcoreinstitute.org/placement-policy",
    siteName: "Nexcore INTITUTE OF TECHNOLOGY",
  },
};





import React from "react";
import Placement_Policy from "@/components/Opportunities/Placement_Policy";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow ">
        <Navbar/>
        <Placement_Policy />
        <Footer/>
      </main>
    </div>
  );
}
