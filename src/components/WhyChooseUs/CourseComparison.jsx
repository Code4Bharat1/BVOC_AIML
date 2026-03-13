"use client";

import Head from "next/head";
import Script from "next/script";

export default function CourseComparison() {
  const rows = [
    {
      title: "Curriculum Design",
      traditional: "Theory-heavy, outdated syllabus",
      nexcore: "Industry-designed & frequently updated",
    },
    {
      title: "Practical Exposure",
      traditional: "Limited labs, exam-focused",
      nexcore: "Hands-on training from Day 1",
    },
    {
      title: "Industry Alignment",
      traditional: "Weak connection to job roles",
      nexcore: "Mapped to real industry profiles",
    },
    {
      title: "Skill Readiness",
      traditional: "Not job-ready after graduation",
      nexcore: "Industry-ready skill set",
    },
    {
      title: "Technology Relevance",
      traditional: "Slow tech adoption",
      nexcore: "AI, Data Science & Animation tools taught live",
    },
    {
      title: "Faculty Experience",
      traditional: "Mostly academic background",
      nexcore: "Industry professionals & practitioners",
    },
    {
      title: "Projects & Internships",
      traditional: "Final year project only",
      nexcore: "Live projects + mandatory internships",
    },
    {
      title: "Placements",
      traditional: "Degree first, job later",
      nexcore: "Employment-focused from start",
    },
    {
      title: "Career Clarity",
      traditional: "Unclear career path",
      nexcore: "Clear roles in Data Science & Creative Tech",
    },
  ];

  return (
    <>
      {/* ══════════ SEO HEAD ══════════ */}
      <Head>
        <title>B.Voc vs Traditional Degree | Nexcore Institute of Technology Mumbai</title>
        <meta
          name="description"
          content="Compare Nexcore Institute of Technology's B.Voc Bachelor's Programs with traditional degrees. Industry-designed curriculum, hands-on training, live projects, mandatory internships and employment-focused education. NAAC A+ Accredited college in Mumbai."
        />
        <meta
          name="keywords"
          content="B.Voc vs traditional degree Mumbai, Nexcore Institute course comparison, industry-driven education Mumbai, bachelor programs Mumbai college, Data Science college Mumbai, AI college Mumbai, multimedia animation college Mumbai, best B.Voc college Mumbai, NAAC A+ college Mumbai, UGC recognized degree Mumbai, job-ready course Mumbai, nexcoreinstitute.org programs, practical education Mumbai, industry internship college Mumbai"
        />
        <meta name="author" content="Nexcore Institute of Technology" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://nexcoreinstitute.org/" />
        <meta property="og:title" content="B.Voc vs Traditional Degree | Nexcore Institute of Technology" />
        <meta
          property="og:description"
          content="See why Nexcore Institute's B.Voc programs beat traditional degrees — industry curriculum, hands-on projects, internships and job-focused education in Mumbai. NAAC A+."
        />
        <meta property="og:url" content="https://nexcoreinstitute.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nexcore Institute of Technology" />
        <meta property="og:image" content="https://nexcoreinstitute.org/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="B.Voc vs Traditional Degree | Nexcore Institute Mumbai" />
        <meta
          name="twitter:description"
          content="Industry-designed B.Voc programs at Nexcore Institute vs traditional degrees. Hands-on training, live projects, internships & job-ready skills. NAAC A+ Mumbai."
        />
        <meta name="twitter:image" content="https://nexcoreinstitute.org/og-image.jpg" />
      </Head>

      {/* ══════════ JSON-LD SCHEMA ══════════ */}
      <Script
        id="course-comparison-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Nexcore Institute of Technology",
            "url": "https://nexcoreinstitute.org/",
            "description": "Nexcore Institute of Technology offers industry-driven B.Voc Bachelor programs in Data Science, AI, Multimedia and Animation with hands-on training, live projects and mandatory internships.",
            "accreditation": "NAAC A+",
            "hasCredential": "UGC Recognized",
            "telephone": "+919892398976",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61585525156166",
              "https://www.instagram.com/nexcoreinstitute",
              "https://www.linkedin.com/school/nexcore-institute-of-technology-nit/",
              "https://www.youtube.com/@NexcoreInstitute"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "B.Voc Bachelor Programs",
              "itemListElement": [
                {
                  "@type": "Course",
                  "name": "B.Voc Data Science & AI",
                  "description": "Industry-designed Data Science and Artificial Intelligence program with hands-on training and mandatory internships.",
                  "provider": {
                    "@type": "EducationalOrganization",
                    "name": "Nexcore Institute of Technology",
                    "url": "https://nexcoreinstitute.org/"
                  }
                },
                {
                  "@type": "Course",
                  "name": "B.Voc Multimedia & Animation",
                  "description": "Creative technology program with live projects, industry tools and employment-focused curriculum.",
                  "provider": {
                    "@type": "EducationalOrganization",
                    "name": "Nexcore Institute of Technology",
                    "url": "https://nexcoreinstitute.org/"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Compare Your Career Paths
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See why industry-driven education is becoming the smarter choice for modern tech careers
            </p>
          </div>

          {/* Desktop View - Side by Side Cards */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 mb-8">
            {/* Traditional Degree Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
              <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
                <h3 className="text-xl font-semibold text-slate-700">Traditional Degree</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {rows.map((row, i) => (
                  <div key={i} className="px-6 py-4 hover:bg-slate-50 transition-colors">
                    <div className="text-sm font-medium text-slate-500 mb-1">{row.title}</div>
                    <div className="text-slate-700 flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">✕</span>
                      <span>{row.traditional}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nexcore Bachelor's Program Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-indigo-500 relative">
              <div className="absolute top-4 right-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                RECOMMENDED
              </div>
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4 border-b">
                <h3 className="text-xl font-semibold text-white">Bachelor's Programs</h3>
                <p className="text-indigo-100 text-sm mt-1">Nexcore Institute of Technology</p>
              </div>
              <div className="divide-y divide-slate-100">
                {rows.map((row, i) => (
                  <div key={i} className="px-6 py-4 hover:bg-indigo-50 transition-colors">
                    <div className="text-sm font-medium text-slate-500 mb-1">{row.title}</div>
                    <div className="text-slate-800 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span className="font-medium">{row.nexcore}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View - Accordion Style */}
          <div className="md:hidden space-y-4">
            {rows.map((row, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
                <div className="bg-indigo-50 px-5 py-3 border-b border-indigo-100">
                  <h4 className="font-semibold text-slate-800">{row.title}</h4>
                </div>

                <div className="p-5 space-y-4">
                  {/* Traditional */}
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Traditional Degree
                    </div>
                    <div className="flex items-start gap-2 text-slate-700">
                      <span className="text-red-500 text-lg">✕</span>
                      <span className="text-sm">{row.traditional}</span>
                    </div>
                  </div>

                  {/* Nexcore Bachelor's */}
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-4 border border-indigo-200">
                    <div className="text-xs font-semibold text-indigo-700 uppercase tracking-wide mb-2 flex items-center gap-2">
                      Nexcore Bachelor's
                      <span className="bg-indigo-500 text-white px-2 py-0.5 rounded-full text-[10px]">
                        BETTER
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-800">
                      <span className="text-green-500 text-lg">✓</span>
                      <span className="text-sm font-medium">{row.nexcore}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Ready to Make the Right Choice?</h3>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Join thousands of students who chose industry-relevant education over traditional degrees
            </p>
            <div className="space-y-3">
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all">
                Explore Our Programs
              </button>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1.5 bg-indigo-50 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Data Science & AI
                </span>
                <span className="inline-flex items-center gap-1.5 bg-purple-50 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Multimedia & Animation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}