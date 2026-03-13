export const metadata = {
  title: "Jio Programs | Nexcore Institute – BVOC Training",
  description:
    "Explore Jio-related training and skill development programs offered at Nexcore Institute, designed to build industry-ready careers.",

  openGraph: {
    title: "Jio Programs | Nexcore Institute",
    description:
      "Discover Jio-related courses and career-focused training opportunities at Nexcore Institute.",
    url: "https://nexcoreinstitute.org/jio",
    siteName: "Nexcore Institute",
  },
};

import JioPage from "@/components/Jiopage/Jiopage";
import React from "react";

export default function Page() {
  return (
    <div>
      <JioPage />
    </div>
  );
}