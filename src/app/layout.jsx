// ❌ NO "use client" here — RootLayout must be a Server Component
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./LP_clientLayout";
import Script from "next/script"; 

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

// ✅ SEO Metadata (BVOC + Existing SEO combined)
export const metadata = {
  metadataBase: new URL("https://nexcoreinstitute.org"),

  title: {
    default: "BVOC in AI & ML | Nexcore Institute",
    template: "%s | Nexcore Institute",
  },

  description:
    "Nexcore Institute offers industry-focused BVOC programs in AI & ML with hands-on training, internships, and strong career outcomes.",

  // 🔥 UPDATED KEYWORDS (BVOC FULL RESEARCH ADDED)
  keywords: [
    // 🔹 Core BVOC Keywords
    "BVOC",
    "BVOC course",
    "BVOC courses",
    "Bachelor of Vocation",
    "B Voc full form",
    "BVOC degree",
    "BVOC program",

    // 🔹 Admission & Eligibility
    "BVOC admission 2026",
    "BVOC eligibility",
    "BVOC eligibility criteria",
    "BVOC after 12th",
    "BVOC admission process",

    // 🔹 Career & Scope
    "BVOC scope",
    "BVOC scope after 12th",
    "BVOC jobs",
    "BVOC jobs after degree",
    "BVOC salary",
    "BVOC internships",
    "BVOC placements",

    // 🔹 Comparison & Intent
    "BVOC vs BTech",
    "BVOC vs BSc",
    "Skill based degree program",
    "Vocational degree in India",

    // 🔹 Program Specific
    "BVOC in AI and Machine Learning",
    "BVOC AI ML course",
    "BVOC data science",
    "BVOC software development",

    // 🔹 Brand & Local
    "Nexcore Institute BVOC",
    "BVOC colleges in India",
    "Best BVOC programs India",
    "BVOC colleges near me",
  ],

  alternates: {
    canonical: "https://nexcoreinstitute.org/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "BVOC in AI & ML | Nexcore Institute",
    description:
      "Industry-ready BVOC programs in AI & ML with practical learning, internships, and placement support.",
    url: "https://nexcoreinstitute.org/",
    siteName: "Nexcore Institute",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BVOC in AI & ML – Nexcore Institute",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BVOC in AI & ML | Nexcore Institute",
    description:
      "Build your career with skill-based BVOC programs in AI & ML at Nexcore Institute.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://nexcoreinstitute.org/#organization",
              name: "Nexcore Institute",
              url: "https://nexcoreinstitute.org",
              logo: "https://nexcoreinstitute.org/logo.png",
              description:
                "Nexcore Institute provides industry-aligned BVOC programs focused on skill development, internships, and employability.",
            }),
          }}
        />

        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Client Layout (Navbar, Footer, etc.) */}
        <ClientLayout>{children}</ClientLayout>


        {/* ✅ Website + SearchAction Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://nexcoreinstitute.org/#website",
              url: "https://nexcoreinstitute.org/",
              name: "Nexcore Institute",
              alternateName: "Nexcore BVOC",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://nexcoreinstitute.org/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
