// ✅ NO "use client" here — metadata only works in Server Components
// Your hooks (useEffect, useState) are already handled inside each component
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HubHero from "@/components/Hub/HubHero";
import Welcome from "@/components/Hub/Welcome";
import AdmissionCard from "@/components/Hub/AdmissionCard";
import AboutUs from "@/components/Hub/AboutUs";
import FiveCards from "@/components/Hub/FiveCards";
import CareerOpportunities from "@/components/Hub/CareerOpportunities";
import InDemandCareer from "@/components/Hub/InDemandCareer";
import CareerPath from "@/components/Hub/CareerPath";
import KickStart from "@/components/Hub/KickStart";
import NextLevelRole from "@/components/Hub/NextLevelRole";
import ShapeTheFuture from "@/components/Hub/ShapeTheFuture";

// ✅ Page-level metadata
export const metadata = {
  metadataBase: new URL("https://nexcoreinstitute.org"),

  title: "B.Voc Admissions 2025 | AI, Animation, VFX & Cyber Security | Nexcore Institute of Technology",

  description:
    "Join Nexcore Institute of Technology — India's leading B.Voc institute offering skill-based degrees in AI & Machine Learning, Cyber Security, Graphic Animation, and VFX & Multimedia. Apply now for 2025 admissions.",

  keywords: [
    "BVOC admissions 2025",
    "B.Voc in AI and Machine Learning",
    "B.Voc Cyber Security",
    "B.Voc Graphic Animation",
    "B.Voc VFX Multimedia",
    "Nexcore Institute of Technology",
    "skill based degree India",
    "vocational degree 2025",
    "best BVOC college India",
    "AI ML course admission",
    "animation college admission India",
    "cyber security degree India",
  ],

  alternates: {
    canonical: "https://nexcoreinstitute.org/",
  },

  openGraph: {
    title: "B.Voc Admissions 2025 | AI, Animation & VFX | Nexcore Institute of Technology",
    description:
      "Nexcore Institute of Technology offers industry-ready B.Voc degrees in AI & ML, Cyber Security, Graphic Animation, and VFX & Multimedia. Enroll for 2025 batch.",
    url: "https://nexcoreinstitute.org/",
    siteName: "Nexcore Institute of Technology",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://nexcoreinstitute.org/og-image.png", // ✅ FIXED — absolute URL
        width: 1200,
        height: 630,
        alt: "Nexcore Institute of Technology – B.Voc Programs in AI, Animation & VFX",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "B.Voc Admissions 2025 | AI, Animation & VFX | Nexcore Institute of Technology",
    description:
      "Build your career with skill-based B.Voc programs at Nexcore Institute of Technology. Apply for 2025 admissions.",
    images: ["https://nexcoreinstitute.org/og-image.png"],
  },
};

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-18">
        <HubHero />
        <Welcome />
        <AdmissionCard />
        <AboutUs />
        <FiveCards />
        <CareerOpportunities />
        <InDemandCareer />
        <CareerPath />
        <KickStart />
        <NextLevelRole />
        <ShapeTheFuture />
      </main>
      <Footer />
      {/* Popup */}
      {/* <RegisterPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      /> */}
    </div>
  );
};

export default Page;