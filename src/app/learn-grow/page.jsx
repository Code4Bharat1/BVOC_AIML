export const metadata = {
  title: "Placement Policy | Nexcore INTITUTE OF TECHNOLOGY",
  description:
    "Learn about placement support, career guidance, and job assistance for BVOC students at Nexcore INTITUTE OF TECHNOLOGY.",
  openGraph: {
    title: "BVOC Placement Policy",
    description:
      "Career-focused placement assistance for skill-based BVOC programs.",
    url: "https://nexcoreinstitute.org/placement-policy",
    siteName: "Nexcore INTITUTE OF TECHNOLOGY",
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
    <div className="min-h-screen">
      <main>
        <Navbar />
        <PlacementAssistance />
        <InternAndPlacementCards />
        <FlexibleCareerSupport />
        <SemesterCards />
        <YourCareerStarts />
        <Testimonials2 />
        <OurSyllabus />
          <ModernInfra />
          <Footer />
        {/* <AllSemesters /> */}
      </main>
    </div>
  );
};

export default Page;
