export const metadata = {
  title: "Infrastructure | Nexcore INTITUTE OF TECHNOLOGY",
  description:
    "Explore modern infrastructure, labs, and learning facilities provided by Nexcore INTITUTE OF TECHNOLOGY for BVOC students.",
  openGraph: {
    title: "Our Infrastructure",
    description:
      "State-of-the-art infrastructure supporting practical and skill-based education.",
    url: "https://nexcoreinstitute.org/infrastructure",
    siteName: "Nexcore INTITUTE OF TECHNOLOGY",
  },
};






import React from "react";
import Hero from "@/components/Infrastructure/Hero";
import ModernInfra from "@/components/Infrastructure/ModernInfra";
import InfraImgVid from "@/components/Infrastructure/InfraImgVid";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow ">
        {" "}
        {/* Add padding top to prevent overlap with fixed navbar */}
        {/* Page content goes here */}
        <Navbar/>
        <Hero />
        <ModernInfra /> 
        {/* <InfraImgVid /> */}
        <Footer/>
      </main>
    </div>
  );
};

export default Page;
