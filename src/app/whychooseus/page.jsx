export const metadata = {
  title: "Why Choose BVOC | Nexcore Institute – Skill-Based Degree Programs",
  description:
    "Discover why BVOC programs at Nexcore Institute offer industry-focused learning, practical training, and better career opportunities.",

  openGraph: {
    title: "Why Choose BVOC | Nexcore Institute",
    description:
      "Explore the benefits of BVOC programs including practical learning, industry exposure, and career-ready skills at Nexcore Institute.",
    url: "https://nexcoreinstitute.org/why-choose-bvoc",
    siteName: "Nexcore Institute",
  },
};

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import EnhancedAITools from "@/components/WhyChooseUs/Cardcarousel";
import CourseComparison from "@/components/WhyChooseUs/CourseComparison";
import PeerToPeerLearning from "@/components/WhyChooseUs/PeerToPeerLearning";
import DegreeComparisonTable from "@/components/WhyChooseUs/Tablesection";
import CenteredBoxWithCards from "@/components/WhyChooseUs/TopBenefits";
import WhyChooseBVoc from "@/components/WhyChooseUs/WhyChooseBvoc";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <EnhancedAITools />
        <CourseComparison />
        <PeerToPeerLearning />
        <DegreeComparisonTable />
        <CenteredBoxWithCards />
        <WhyChooseBVoc />
      </main>

      <Footer />
    </div>
  );
}