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
      <Head>
        <title>Scholarship Policy | Data Science, AI & Multimedia Programs</title>
      </Head>

      <div className="relative bg-gradient-to-b from-slate-50 to-white py-16 px-4 overflow-hidden mt-20">

        <div className="max-w-6xl mx-auto relative z-10">

          <div className="text-center mb-12">

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              <span className="text-blue-600">Scholarship Policy</span> Document
            </h1>

            <p className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-slate-700">
              This document outlines the scholarship policies for students enrolling in the
              Bachelor of Data Science and Artificial Intelligence or
              Bachelor of Multimedia and Animation programs at
              Nexcore Institute of Technology.
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


/* ================= Scholarship Card ================= */

function ScholarshipCard({ item }) {

  const Icon = item.icon;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6">

      <div className="flex items-center gap-3 mb-4">

        <div className={`p-3 rounded-xl ${item.color === "blue" ? "bg-blue-100 text-blue-600" : "bg-orange-100 text-orange-600"}`}>
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          {item.heading}
        </h3>

      </div>

      <div className="space-y-3 text-slate-700">

        {item.para.map((content, i) => {

          if (Array.isArray(content)) {
            return (
              <ul key={i} className="list-disc pl-6 space-y-1">
                {content.map((li, j) => (
                  <li key={j}>{li}</li>
                ))}
              </ul>
            );
          }

          return <p key={i} className="font-semibold">{content}</p>;

        })}

      </div>

    </div>
  );
}