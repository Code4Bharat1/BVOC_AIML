"use client";
import React from "react";
import { Award, GraduationCap, Heart } from "lucide-react";
import Head from "next/head";

export default function Scholarship_Policy() {

  const scholarshipData = [
    {
      heading: "Meritorious Student Scholarship",
      icon: Award,
      color: "blue",
      para: [
        "Objective:",
        [
          "To recognize and reward academic excellence among students who have demonstrated strong performance in their Class 12 board examinations."
        ],
        "Benefits:",
        [
          "Total scholarship fund of ₹25 Lakhs allocated for this scheme.",
          "Amount will be adjusted against tuition fees."
        ],
      ]
    },
    {
      heading: "Underprivileged & Rural Background Scholarship",
      icon: Heart,
      color: "orange",
      para: [
        "Objective :",
        [
          "To support students from economically disadvantaged or rural backgrounds in accessing future-ready education",
        ],
        "Eligibility Criteria:",
        [
          "Must belong to a rural area (verified via residential proof).",
          "Must have passed Class 12 from a recognized board.",
          "Enrolled in Bachelor of Data Science and Artificial Intelligence or Bachelor of Multimedia and Animation program.",
        ],
        "Benefits:",
        [
          "Additional support for hostel or transportation, subject to availability and need.",
        ],
        "Rules & Regulations:",
        [
          "Income and address documents must be valid and issued by a competent authority.",
          "Scholarship will be revoked if false information is found.",
          "Must maintain minimum attendance of 85% and satisfactory academic performance.",
        ],
        "Required Documents:",
        [
          "Income Certificate.",
          "Residential proof (Village Panchayat certificate or similar).",
          "Marksheet of Class 12.",
          "Admission proof into the program.",
        ],
      ],
    },
    {
      heading: "Women in Tech Scholarship",
      icon: GraduationCap,
      color: "blue",
      para: [
        "Objective :",
        [
          "To encourage and empower female students to pursue careers in new-age technologies such as Data Science, Artificial Intelligence, Multimedia, and Animation.",
        ],
        "Eligibility Criteria:",
        [
          "Female candidates who have passed Class 12.",
          "Enrolled in Bachelor of Data Science and Artificial Intelligence or Bachelor of Multimedia and Animation program.",
          "Priority given to first-generation learners or those from semi-urban/rural areas.",
        ],
        "Benefits:",
        [
          "Mentorship and skill-building workshops specifically designed for female students.",
          "Networking support for internships and placements.",
        ],
        "Rules & Regulations:",
        [
          "Must maintain 90% attendance or above each semester.",
          "Active participation in academic and project-based activities is mandatory.",
          "Misuse of scholarship privileges may lead to revocation.",
        ],
        "Required Documents:",
        [
          "Marksheet of Class 12.",
          "Aadhaar card or government ID as proof of gender.",
          "Short essay (150–200 words) on 'Why I want to build a career in my chosen field'",
        ],
      ],
    },
  ];

  return (
    <>
      {/* ================= SEO START ================= */}
      <Head>

        <title>
          Scholarship Policy | Data Science, AI & Multimedia Programs
        </title>

        <meta
          name="description"
          content="Explore scholarship opportunities for students enrolling in Bachelor of Data Science & Artificial Intelligence and Bachelor of Multimedia & Animation programs including merit-based, rural background, and women in tech scholarships."
        />

        <meta
          name="keywords"
          content="AI scholarship India, data science scholarship program, women in tech scholarship India, multimedia animation scholarship, Nexcore Institute scholarship policy, AI degree scholarship"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://yourdomain.com/opportunities/scholarship-policy"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Scholarship Policy | Data Science & AI | Multimedia Programs"
        />

        <meta
          property="og:description"
          content="Learn about scholarship programs including merit scholarships, rural support scholarships, and women in tech scholarships."
        />

        <meta
          property="og:url"
          content="https://yourdomain.com/opportunities/scholarship-policy"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Scholarship Policy | Data Science & AI Programs"
        />

        <meta
          name="twitter:description"
          content="Explore scholarship opportunities for AI, Data Science, and Multimedia students including merit and women in tech scholarships."
        />

        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-image.jpg"
        />

      </Head>
      {/* ================= SEO END ================= */}

      <div className="relative bg-gradient-to-b from-slate-50 to-white py-16 px-4 overflow-hidden mt-20">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-50/40 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">

          <div className="text-center mb-12">

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              <span className="text-blue-600">Scholarship Policy</span> Document
            </h1>

            <div className="flex items-center justify-center gap-2 mt-6 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
            </div>

            <p className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-slate-700">
              This document outlines the{" "}
              <span className="font-semibold text-blue-600">Scholarship policies</span>{" "}
              for students enrolling in the{" "}
              <span className="font-semibold text-orange-500">
                Bachelor of Data Science and Artificial Intelligence
              </span>{" "}
              or{" "}
              <span className="font-semibold text-orange-500">
                Bachelor of Multimedia and Animation
              </span>{" "}
              programs offered by{" "}
              <span className="font-semibold text-blue-600">Nexcore Institute of Technology</span> in
              collaboration with{" "}
              <span className="font-semibold text-slate-900">Recognized University.</span>
            </p>

          </div>

          <div className="space-y-6">
            {scholarshipData.map((item, idx) => (
              <ScholarshipCard key={idx} item={item} index={idx} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}