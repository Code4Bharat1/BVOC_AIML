import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Placement_Policy from "@/components/Opportunities/Placement_Policy";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow py-16">
        <Placement_Policy />
      </main>
      <Footer />
    </div>
  );
}
