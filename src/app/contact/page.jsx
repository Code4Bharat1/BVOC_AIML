export const metadata = {
  title: "Contact Us | Nexcore Institute – BVOC Programs",
  description:
    "Contact Nexcore Institute for BVOC admissions, course details, eligibility guidance, and career-related queries.",
  openGraph: {
    title: "Contact Nexcore Institute",
    description:
      "Get in touch with Nexcore Institute for BVOC programs, admissions support, and academic inquiries.",
    url: "https://nexcoreinstitute.org/contact",
    siteName: "Nexcore Institute",
  },
};

import ContactPage from "@/components/Contact/Contact";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-16">
        <ContactPage />
      </main>

      <Footer />
    </div>
  );
}