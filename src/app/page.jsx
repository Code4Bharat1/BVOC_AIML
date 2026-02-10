// "use client";
// import { useEffect } from "react";
// import React from "react";
// import Welcome from "@/components/Hub/Welcome";
// import AdmissionCard from "@/components/Hub/AdmissionCard";
// import AboutUs from "@/components/Hub/AboutUs";
// import FiveCards from "@/components/Hub/FiveCards";
// import CareerOpportunities from "@/components/Hub/CareerOpportunities";
// import InDemandCareer from "@/components/Hub/InDemandCareer";
// import CareerPath from "@/components/Hub/CareerPath";
// import KickStart from "@/components/Hub/KickStart";
// import NextLevelRole from "@/components/Hub/NextLevelRole";
// import ShapeTheFuture from "@/components/Hub/ShapeTheFuture";
// import HubHero from "@/components/Hub/HubHero";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

// const Page = () => {
  
//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-grow  pt-18 ">
//         {" "}
//         {/* Add padding top to prevent overlap with fixed navbar */}
//         {/* Page content goes here */}
//         <Navbar />
//         <HubHero />
        
//         <Welcome />
//         <AdmissionCard />
//         <AboutUs />
//         <FiveCards />
//         <CareerOpportunities />
//         <InDemandCareer />
//         <CareerPath />
//         <KickStart />
//         <NextLevelRole />
//         <ShapeTheFuture />
//         <Footer />
//       </main>
//     </div>
//   );
// };

// export default Page;

"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HubHero from "@/components/Hub/HubHero";
import Welcome from "@/components/Hub/Welcome";
import AdmissionCard from "@/components/Hub/AdmissionCard";
import AboutUs from "@/components/Hub/AboutUs";
import FiveCards from "@/components/Hub/FiveCards";
import CareerOpportunities from "@/components/Hub/CareerOpportunities";
import InDemandCareer from "@/components/Hub/InDemandCareer";
import CareerPath from "@/components/Hub/CareerPath";
import KickStart from "@/components/Hub/KickStart";
import NextLevelRole from "@/components/Hub/NextLevelRole";
import ShapeTheFuture from "@/components/Hub/ShapeTheFuture";
import RegisterPopup from "@/components/common/RegisterPopup";

const Page = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-18">
        <HubHero />
        <Welcome />
        <AdmissionCard />
        <AboutUs />
        <FiveCards />
        <CareerOpportunities />
        <InDemandCareer />
        <CareerPath />
        <KickStart />
        <NextLevelRole />
        <ShapeTheFuture />
      </main>

      <Footer />

      {/* Popup */}
      <RegisterPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

export default Page;
