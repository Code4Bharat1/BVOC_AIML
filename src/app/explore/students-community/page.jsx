export const metadata = {
  title: "Student Community | Nexcore Institute – Campus Life",
  description:
    "Explore the student community at Nexcore Institute, where learners collaborate, share knowledge, and participate in campus activities and events.",

  openGraph: {
    title: "Student Community | Nexcore Institute",
    description:
      "Discover the vibrant student community at Nexcore Institute including collaboration, events, and campus engagement.",
    url: "https://nexcoreinstitute.org/student-community",
    siteName: "Nexcore Institute",
  },
};

import StudentCommunity from "@/components/students-community/students-community";
import React from "react";

export default function Page() {
  return (
    <div>
      <StudentCommunity />
    </div>
  );
}