import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SelectionPolicy from "@/components/Opportunities/SelectionPolicy";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow py-16">
        <SelectionPolicy />
      </main>
      <Footer />
    </div>
  );
}
