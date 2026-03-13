export const metadata = {
  title: "FAQ | Nexcore Institute – BVOC Programs",
  description:
    "Find answers to frequently asked questions about BVOC programs, admissions, eligibility, courses, and student life at Nexcore Institute.",

  openGraph: {
    title: "FAQ | Nexcore Institute",
    description:
      "Browse common questions and answers about BVOC programs, admissions process, and academic information at Nexcore Institute.",
    url: "https://nexcoreinstitute.org/faq",
    siteName: "Nexcore Institute",
  },
};

import FAQPage from "@/components/faq/faqpage";
import React from "react";

export default function Page() {
  return (
    <div>
      <FAQPage />
    </div>
  );
}