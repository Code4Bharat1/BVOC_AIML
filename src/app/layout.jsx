import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatbotWidget from "@/components/Chatbot/chatbot";
import ClientProtection from "@/components/layout/ClientProtection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://bvoc.nexcorealliance.com/"),
  title: "BVOC in AI & ML | Nexcore x Code4Bharat",
  icons: {
    icon: "/favicon.svg", 
  },
  description:
    "Build your future in Artificial Intelligence & Machine Learning. Join our hands-on BVOC program powered by Nexcore and Code4Bharat. Industry projects, expert mentors, and real-world skills – all in one course!",
  openGraph: {
    title: "BVOC in AI & ML | Nexcore x Code4Bharat",
    description:
      "Build your future in Artificial Intelligence & Machine Learning. Join our hands-on BVOC program powered by Nexcore and Code4Bharat.",
    images: [
      {
        url: "/og-image.png", // Relative path becomes absolute via metadataBase
        width: 1200,
        height: 630,
        alt: "BVOC in AI & ML – Admissions Open",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProtection />
        <Navbar />
        {children}
        {/* <ChatbotWidget /> */}
        <Footer />
      </body>
    </html>
  );
}
