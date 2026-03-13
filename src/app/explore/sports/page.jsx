export const metadata = {
  title: "Sports Activities | Nexcore Institute – Student Development",
  description:
    "Explore sports activities and fitness programs at Nexcore Institute that promote student well-being, teamwork, and physical development.",

  openGraph: {
    title: "Sports Activities | Nexcore Institute",
    description:
      "Discover sports facilities and activities available for students at Nexcore Institute.",
    url: "https://nexcoreinstitute.org/sports",
    siteName: "Nexcore Institute",
  },
};

import SportsPage from "@/components/sports/sports.page";
import React from "react";

export default function Page() {
  return (
    <div>
      <SportsPage />
    </div>
  );
}