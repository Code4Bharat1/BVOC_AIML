export const metadata = {
  title: "Why Choose Us | Nexcore INTITUTE OF TECHNOLOGY",
  description:
    "Discover why Nexcore INTITUTE OF TECHNOLOGY is the right choice for BVOC and skill-based education with industry-aligned curriculum.",
  openGraph: {
    title: "Why Choose Nexcore INTITUTE OF TECHNOLOGY",
    description:
      "Industry-focused BVOC programs, expert mentors, and career-driven learning.",
    url: "https://nexcoreinstitute.org/whychooseus",
    siteName: "Nexcore INTITUTE OF TECHNOLOGY",
  },
};




import React from "react";
import CardCarousel from "@/components/WhyChooseUs/Cardcarousel";
import DegreeComparisonTable from "@/components/WhyChooseUs/Tablesection";
import WhyChooseBVoc from "@/components/WhyChooseUs/WhyChooseBvoc";
import PeerToPeerLearning from "@/components/WhyChooseUs/PeerToPeerLearning";
import CenteredBoxWithCards from "@/components/WhyChooseUs/TopBenefits";
import CourseComparison from "@/components/WhyChooseUs/CourseComparison";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const page = () => {
  return (
    <div>
      <main className="bg-white min-h-screen">
        <Navbar />
        <DegreeComparisonTable />
        <CardCarousel />
        <WhyChooseBVoc />
        <PeerToPeerLearning />
        <CenteredBoxWithCards />
        <CourseComparison />
        <Footer />
      </main>
    </div>
  );
};
export default page;
