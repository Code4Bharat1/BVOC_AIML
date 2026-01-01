export const metadata = {
  title: "Why Choose Us | Nexcore Alliance LLP",
  description:
    "Discover why Nexcore Alliance LLP is the right choice for BVOC and skill-based education with industry-aligned curriculum.",
  openGraph: {
    title: "Why Choose Nexcore Alliance LLP",
    description:
      "Industry-focused BVOC programs, expert mentors, and career-driven learning.",
    url: "https://nexcoreinstitute.org/whychooseus",
    siteName: "Nexcore Alliance LLP",
  },
};




import React from "react";
import CardCarousel from "@/components/WhyChooseUs/Cardcarousel";
import DegreeComparisonTable from "@/components/WhyChooseUs/Tablesection";
import WhyChooseBVoc from "@/components/WhyChooseUs/WhyChooseBvoc";
import PeerToPeerLearning from "@/components/WhyChooseUs/PeerToPeerLearning";
import CenteredBoxWithCards from "@/components/WhyChooseUs/TopBenefits";
const page = () => {
  return (
    <div>
      <main className="bg-[#0f0f1a] min-h-screen">
        <CardCarousel />
        <DegreeComparisonTable />
        <WhyChooseBVoc />
        <PeerToPeerLearning />
        <CenteredBoxWithCards />
      </main>
    </div>
  );
};
export default page;
