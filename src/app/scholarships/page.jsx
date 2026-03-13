export const metadata = {
  title: "Scholarships | Nexcore Institute – BVOC Programs",
  description:
    "Explore scholarship opportunities at Nexcore Institute designed to support BVOC students through merit-based and need-based financial assistance.",

  openGraph: {
    title: "Scholarships | Nexcore Institute",
    description:
      "Discover scholarship programs and financial support available for students at Nexcore Institute.",
    url: "https://nexcoreinstitute.org/scholarships",
    siteName: "Nexcore Institute",
  },
};

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScholarshipsPage from "@/components/scholarships/scholarships";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <ScholarshipsPage />
      </main>

      <Footer />
    </div>
  );
}