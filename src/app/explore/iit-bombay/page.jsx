export const metadata = {
  title: "IIT Bombay Collaboration | Nexcore Institute – BVOC Programs",
  description:
    "Learn about Nexcore Institute's association with IIT Bombay and explore skill-based training programs, certifications, and career opportunities.",

  openGraph: {
    title: "IIT Bombay Collaboration | Nexcore Institute",
    description:
      "Discover IIT Bombay related programs and certifications offered through Nexcore Institute.",
    url: "https://nexcoreinstitute.org/iit-bombay",
    siteName: "Nexcore Institute",
  },
};

import IITBombayPage from "@/components/Iitbombay/Iitbombaypage";
import React from "react";

export default function Page() {
  return (
    <div>
      <IITBombayPage />
    </div>
  );
}