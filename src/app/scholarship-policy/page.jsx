import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Scholarship_Policy from "@/components/Opportunities/Scholarship_Policy";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow py-16">
        <Scholarship_Policy />
      </main>
      <Footer />
    </div>
  );
}
