import React from "react";
import SelectionPolicy from "@/components/Opportunities/SelectionPolicy";
export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow py-16">
        <SelectionPolicy />
      </main>
    </div>
  );
}
