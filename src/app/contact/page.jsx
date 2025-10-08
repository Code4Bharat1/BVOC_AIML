import ContactPage from "@/components/Contact/Contact";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow py-16">
        <ContactPage />
      </main>
    </div>
  );
}
