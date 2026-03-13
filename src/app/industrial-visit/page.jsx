export const metadata = {
  title: "Industrial Visits | Nexcore Institute – BVOC Programs",
  description:
    "Explore industrial visits organized by Nexcore Institute that provide students with real-world exposure, industry interaction, and practical learning opportunities.",

  openGraph: {
    title: "Industrial Visits | Nexcore Institute",
    description:
      "Discover how Nexcore Institute organizes industrial visits to help students gain practical industry exposure.",
    url: "https://nexcoreinstitute.org/industrial-visits",
    siteName: "Nexcore Institute",
  },
};

import IVPage from "@/components/iv/ivspage";
import React from "react";

export default function Page() {
  return (
    <div>
      <IVPage />
    </div>
  );
}