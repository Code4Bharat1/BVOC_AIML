"use client";
import React from "react";
import Hero from "@/components/Infrastructure/Hero";
import ModernInfra from "@/components/Infrastructure/ModernInfra";
import InfraImgVid from "@/components/Infrastructure/InfraImgVid";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow ">
        {" "}
        {/* Add padding top to prevent overlap with fixed navbar */}
        {/* Page content goes here */}
        <Hero />
        <ModernInfra />
        <InfraImgVid />
      </main>
    </div>
  );
};

export default Page;
