// ❌ NO "use client" here — RootLayout must be a Server Component
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./LP_clientLayout";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScholarshipPopup from "@/components/common/Scholarshippopup";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Viewport
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// ✅ SEO Metadata
export const metadata = {
  metadataBase: new URL("https://nexcoreinstitute.org"),

  title: {
    default: "BVOC in AIML, Graphic Animation, VFX & Multimedia | Nexcore Institute of Technology",
    template: "%s | Nexcore Institute of Technology",
  },

  description:
    "Nexcore Institute of Technology offers B.Voc degrees in Artificial Intelligence & Machine Learning, and Graphic Animation, VFX & Multimedia with hands-on training, internships, and strong career outcomes.",

  keywords: [
    "BVOC",
    "Bachelor of Vocation",
    "BVOC in AI and Machine Learning",
    "BVOC Graphic Animation",
    "BVOC VFX & Multimedia",
    "Skill based degree program",
    "Vocational degree in India",
    "Nexcore Institute of Technology",
    "Best BVOC colleges in India",
  ],

  // ✅ ADDED — helps Google E-E-A-T signals
  authors: [{ name: "Nexcore Institute of Technology", url: "https://nexcoreinstitute.org" }],
  creator: "Nexcore Institute of Technology",
  publisher: "Nexcore Institute of Technology",
  category: "Education",

  alternates: {
    canonical: "https://nexcoreinstitute.org/",
  },

  robots: {
    index: true,
    follow: true,
    // ✅ ADDED — controls Google snippet length & image preview size in SERP
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },  

  openGraph: {
    title: "BVOC in AI,  Graphic Animation, VFX & Multimedia | Nexcore Institute of Technology",
    description:
      "Industry-ready B.Voc programs in AI & ML, Cyber Security, and AI & Robotics, Graphic Animation, VFX & Multimedia at Nexcore Institute of Technology.",
    url: "https://nexcoreinstitute.org/",
    siteName: "Nexcore Institute of Technology",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://nexcoreinstitute.org/og-image.png", // ✅ FIXED — was "/og-image.png" (relative breaks WhatsApp/LinkedIn)
        width: 1200,
        height: 630,
        alt: "Nexcore Institute of Technology – BVOC Programs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BVOC in AI, Cyber Security & AI & Robotics, Graphic Animation, VFX & Multimedia | Nexcore Institute of Technology",
    description:
      "Build your career with skill-based B.Voc programs at Nexcore Institute of Technology.",
    // ✅ ADDED — was missing, Twitter card showed no image without this
    images: ["https://nexcoreinstitute.org/og-image.png"],
    creator: "@nexcoreinstitute", // 🔑 replace with your real Twitter handle
  },

  // ✅ ADDED — favicon & app icon definitions
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ✅ Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://nexcoreinstitute.org/#organization",
  name: "Nexcore Institute of Technology",
  url: "https://nexcoreinstitute.org",
  logo: "https://nexcoreinstitute.org/logo.png",
  description:
    "Nexcore Institute of Technology offers B.Voc degrees in Artificial Intelligence & Machine Learning, Cyber Security, and AI & Robotics, Graphic Animation, VFX & Multimedia focused on skills, internships, and employability.",
  // ✅ ADDED — critical for local SEO & Google Knowledge Panel
  address: {
    "@type": "PostalAddress",
    streetAddress: "YOUR STREET ADDRESS", // 🔑 replace
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400000",                 // 🔑 replace
    addressCountry: "IN",
  },
  telephone: "+91-XXXXXXXXXX",           // 🔑 replace
  email: "info@nexcoreinstitute.org",    // 🔑 replace if different
  // ✅ ADDED — builds entity authority across platforms
  sameAs: [
    "https://www.facebook.com/nexcoreinstitute",  // 🔑 replace
    "https://www.instagram.com/nexcoreinstitute", // 🔑 replace
    "https://www.linkedin.com/company/nexcore",   // 🔑 replace
    "https://www.youtube.com/@nexcoreinstitute",  // 🔑 replace if exists
  ],
  // ✅ ADDED — enables Course rich results in Google Search
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "B.Voc Programs",
    itemListElement: [
      {
        "@type": "Course",
        name: "B.Voc in AI & Machine Learning",
        description: "Skill-based degree in Artificial Intelligence and Machine Learning with hands-on training.",
        provider: { "@type": "EducationalOrganization", name: "Nexcore Institute of Technology" },
        url: "https://nexcoreinstitute.org/bvoc-ai-machine-learning", // 🔑 update slug
      },
      {
        "@type": "Course",
        name: "B.Voc in Graphic Animation & VFX",
        description: "Industry-focused B.Voc in Graphic Animation, VFX & Multimedia production.",
        provider: { "@type": "EducationalOrganization", name: "Nexcore Institute of Technology" },
        url: "https://nexcoreinstitute.org/bvoc-graphic-animation-vfx", // 🔑 update slug
      },
    ],
  },
};

// ✅ Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nexcoreinstitute.org/#website",
  url: "https://nexcoreinstitute.org/",
  name: "Nexcore Institute of Technology",
  alternateName: "Nexcore Institute",
  publisher: {
    "@id": "https://nexcoreinstitute.org/#organization",
  },
  // ❌ REMOVED potentialAction — /search route doesn't exist, hurts crawl trust
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* ✅ Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ❌ REMOVE ScholarshipPopup and FloatingWhatsApp from here */}

        {/* Client Layout will handle all client components */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}