export const metadata = {
  title: "IFEX Program | Nexcore Institute – BVOC Programs",
  description:
    "Explore the IFEX program at Nexcore Institute. Learn about skill-based BVOC programs, industry-focused training, and career opportunities.",

  openGraph: {
    title: "IFEX Program | Nexcore Institute",
    description:
      "Discover the IFEX program at Nexcore Institute offering practical learning and career-focused education.",
    url: "https://nexcoreinstitute.org/ifex",
    siteName: "Nexcore Institute",
  },
};

import IFEXPage from "@/components/IFEX/IFEXPage";
import React from "react";

export default function Page() {
  return (
    <div>
      <IFEXPage />
    </div>
  );
}