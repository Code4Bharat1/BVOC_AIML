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
