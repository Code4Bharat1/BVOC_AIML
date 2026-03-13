export const metadata = {
  title: "Infrastructure | Nexcore Institute of Technology",
  description:
    "Explore modern infrastructure, labs, and advanced learning facilities provided by Nexcore Institute of Technology for BVOC students.",
  openGraph: {
    title: "Infrastructure | Nexcore Institute",
    description:
      "State-of-the-art infrastructure supporting practical and skill-based education at Nexcore Institute.",
    url: "https://nexcoreinstitute.org/infrastructure",
    siteName: "Nexcore Institute of Technology",
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
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <ModernInfra />
        {/* <InfraImgVid /> */}
      </main>

      <Footer />
    </div>
  );
};

export default Page;