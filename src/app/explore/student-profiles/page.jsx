export const metadata = {
  title: "Student Profiles | Nexcore Institute – BVOC Programs",
  description:
    "Explore student profiles at Nexcore Institute, showcasing achievements, skills, and projects from BVOC programs.",

  openGraph: {
    title: "Student Profiles | Nexcore Institute",
    description:
      "Browse the student directory of Nexcore Institute and discover talented students from various BVOC programs.",
    url: "https://nexcoreinstitute.org/student-profiles",
    siteName: "Nexcore Institute",
  },
};

import StudentDirectory from "@/components/student-profiles/student-profiles";
import React from "react";

export default function Page() {
  return (
    <div>
      <StudentDirectory />
    </div>
  );
}