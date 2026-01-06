// ❌ NO "use client" here — RootLayout must be a Server Component
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./LP_clientLayout";

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
    default: "BVOC in AIML, Cyber Security & Computer Science | Nexcore Institute of Technology",
    template: "%s | Nexcore Institute of Technology",
  },

  description:
    "Nexcore Institute of Technology offers B.Voc degrees in Artificial Intelligence & Machine Learning, Cyber Security, and Computer Science with hands-on training, internships, and strong career outcomes.",

  keywords: [
    "BVOC",
    "Bachelor of Vocation",
    "BVOC in AI and Machine Learning",
    "BVOC Cyber Security",
    "BVOC Computer Science",
    "Skill based degree program",
    "Vocational degree in India",
    "Nexcore Institute of Technology",
    "Best BVOC colleges in India",
  ],

  alternates: {
    canonical: "https://nexcoreinstitute.org/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "BVOC in AI, Cyber Security & Computer Science | Nexcore Institute of Technology",
    description:
      "Industry-ready B.Voc programs in AI & ML, Cyber Security, and Computer Science at Nexcore Institute of Technology.",
    url: "https://nexcoreinstitute.org/",
    siteName: "Nexcore Institute of Technology",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexcore Institute of Technology – BVOC Programs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BVOC in AI, Cyber Security & Computer Science | Nexcore Institute of Technology",
    description:
      "Build your career with skill-based B.Voc programs at Nexcore Institute of Technology.",
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
              name: "Nexcore Institute of Technology",
              url: "https://nexcoreinstitute.org",
              logo: "https://nexcoreinstitute.org/logo.png",
              description:
                "Nexcore Institute of Technology offers B.Voc degrees in Artificial Intelligence & Machine Learning, Cyber Security, and Computer Science focused on skills, internships, and employability.",
            }),
          }}
        />

       
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Client Layout (Navbar, Footer, etc.) */}
        <ClientLayout>{children}</ClientLayout>

        {/* ✅ Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://nexcoreinstitute.org/#website",
              url: "https://nexcoreinstitute.org/",
              name: "Nexcore Institute of Technology",
              alternateName: "Nexcore Institute",
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
