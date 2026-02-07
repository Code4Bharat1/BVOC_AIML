"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
