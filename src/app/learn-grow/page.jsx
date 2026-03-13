export const metadata = {
  title: "Placement Policy | Nexcore Institute of Technology",
  description:
    "Learn about placement support, career guidance, internship opportunities, and job assistance for BVOC students at Nexcore Institute of Technology.",

  openGraph: {
    title: "BVOC Placement Policy | Nexcore Institute",
    description:
      "Career-focused placement assistance and internship opportunities for skill-based BVOC programs at Nexcore Institute.",
    url: "https://nexcoreinstitute.org/placement-policy",
    siteName: "Nexcore Institute of Technology",
  },
};

import React from "react";
import PlacementAssistance from "@/components/Learn&Grow/PlacementAssistance";
import InternAndPlacementCards from "@/components/Learn&Grow/InternAndPlacementCards";
import FlexibleCareerSupport from "@/components/Learn&Grow/FlexibleCareerSupport";
import SemesterCards from "@/components/Learn&Grow/SemesterCards";
import YourCareerStarts from "@/components/Learn&Grow/YourCareerStarts";
import Testimonials2 from "@/components/Learn&Grow/Testimonals2";
import OurSyllabus from "@/components/Learn&Grow/OurSyllabus";
import AllSemesters from "@/components/Learn&Grow/AllSemesters";
import ModernInfra from "@/components/Infrastructure/ModernInfra";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <PlacementAssistance />
        <InternAndPlacementCards />
        <FlexibleCareerSupport />
        <SemesterCards />
        <YourCareerStarts />
        <Testimonials2 />
        <OurSyllabus />
        <ModernInfra />
        {/* <AllSemesters /> */}
      </main>

      <Footer />
    </div>
  );
};

export default Page;