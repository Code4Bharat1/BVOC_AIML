export const metadata = {
  title: "Placement Policy | Nexcore Alliance LLP",
  description:
    "Learn about placement support, career guidance, and job assistance for BVOC students at Nexcore Alliance LLP.",
  openGraph: {
    title: "BVOC Placement Policy",
    description:
      "Career-focused placement assistance for skill-based BVOC programs.",
    url: "https://nexcoreinstitute.org/placement-policy",
    siteName: "Nexcore Alliance LLP",
  },
};







import React from "react";
import PlacementAssistance from "@/components/Learn&Grow/PlacementAssistance";
import InternAndPlacementCards from "@/components/Learn&Grow/InternAndPlacementCards";
import FlexibleCareerSupport from "@/components/Learn&Grow/FlexibleCareerSupport";
import SemesterCards from "@/components/Learn&Grow/SemesterCards";
import YourCareerStarts from "@/components/Learn&Grow/YourCareerStarts";
import Testimonials2 from "@/components/Learn&Grow/Testimonals2";
// import Testimonials from "@/components/Learn&Grow/Testimonals";
import OurSyllabus from "@/components/Learn&Grow/OurSyllabus";
import AllSemesters from "@/components/Learn&Grow/AllSemesters";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow ">
        {/* Page content goes here */}
        <PlacementAssistance />
        <InternAndPlacementCards />
        <FlexibleCareerSupport />
        <SemesterCards />
        <YourCareerStarts />
        <Testimonials2 />
        {/* <Testimonials /> */}
        <OurSyllabus />
        <AllSemesters />
      </main>
    </div>
  );
};

export default Page;
