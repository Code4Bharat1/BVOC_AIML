"use client";
import { useEffect } from "react";
import React from "react";
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
import HubHero from "@/components/Hub/HubHero";

const Page = () => {
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow  pt-18 ">
        {" "}
        {/* Add padding top to prevent overlap with fixed navbar */}
        {/* Page content goes here */}
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
    </div>
  );
};

export default Page;
