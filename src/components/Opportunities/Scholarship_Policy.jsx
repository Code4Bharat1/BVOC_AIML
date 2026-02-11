"use client";
import React from "react";
import { Award, GraduationCap, Heart } from "lucide-react";

export default function Scholarship_Policy() {
  const scholarshipData = [
    {
      heading: "Meritorious Student Scholarship",
      icon: Award,
      color: "blue",
      para: [
        "Objective :",
        [
          "To recognize and reward academic excellence among students who have demonstrated outstanding performance in their Class 12 board examinations.",
        ],
        "Eligibility Criteria:",
        [
          "Minimum 85% aggregate marks in Class 12 (Any recognized board).",
          "Scholarship applicable only in the first academic year (can be extended based on academic performance).",
          "Must have enrolled in the Bachelor's in AI and ML program.",
        ],
        "Benefits:",
        [
          "₹25,000/- waiver on tuition fees for the first year.",
          "Scholarship amount will be adjusted against the tuition fees.",
        ],
        "Application Requirements:",
        [
          "Submission of Class 12 mark sheet.",
          "Character certificate from last attended institution.",
          "Written statement (200 words) on why the student wants to pursue AI and ML.",
        ],
      ],
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
          "Annual family income less than ₹2.5 Lakhs (Income Certificate required).",
          "Must belong to a rural area (verified via residential proof).",
          "Must have passed Class 12 from a recognized board.",
          "Enrolled in the Bachelor's in AI and ML program.",
        ],
        "Benefits:",
        [
          "Up to ₹25,000/- tuition fee waiver.",
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
          "To encourage and empower female students to pursue careers in new-age technologies such as Artificial Intelligence and Machine Learning.",
        ],
        "Eligibility Criteria:",
        [
          "Female candidates who have passed Class 12.",
          "Enrolled in the Bachelor's in AI and ML program.",
          "Priority given to first-generation learners or those from semi-urban/rural areas.",
        ],
        "Benefits:",
        [
          "Up to ₹25,000/- tuition fee waiver.",
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
          "Short essay (150–200 words) on 'Why I want to build a career in AI & ML'",
        ],
      ],
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-white py-16 px-4 overflow-hidden mt-20">
      {/* Simple background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-50/40 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            <span className="text-blue-600">Scholarship Policy</span> Document
          </h1>

          {/* Simple divider */}
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
              Bachelor's in AI & Machine Learning, Computer Science and Cybersecurity
            </span>{" "}
            program offered by{" "}
            <span className="font-semibold text-blue-600">Nexcore Alliance</span> in
            collaboration with{" "}
            <span className="font-semibold text-slate-900">Recognized University.</span>
          </p>
        </div>

        {/* Scholarship Cards */}
        <div className="space-y-6">
          {scholarshipData.map((item, idx) => (
            <ScholarshipCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ScholarshipCard = ({ item, index }) => {
  const colorStyles = {
    blue: {
      icon: "bg-gradient-to-br from-blue-600 to-blue-700",
      border: "border-blue-200",
      hoverBorder: "hover:border-blue-400",
      heading: "text-blue-600",
      bullet: "bg-blue-500",
      accent: "bg-blue-500",
    },
    orange: {
      icon: "bg-gradient-to-br from-orange-500 to-orange-600",
      border: "border-orange-200",
      hoverBorder: "hover:border-orange-400",
      heading: "text-orange-500",
      bullet: "bg-orange-500",
      accent: "bg-orange-500",
    },
  };

  const styles = colorStyles[item.color];

  return (
    <div className="group">
      <div className={`bg-white rounded-2xl border-2 ${styles.border} ${styles.hoverBorder} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden`}>
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-50 to-white border-b border-slate-200 p-6 flex items-center gap-4">
          <div className={`w-14 h-14 rounded-xl ${styles.icon} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0`}>
            <item.icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            {item.heading}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[500px] overflow-y-auto custom-scrollbar">
          <div className="space-y-4">
            {item.para.map((point, i) => {
              if (typeof point === "string") {
                return (
                  <p key={i} className={`text-lg font-bold ${styles.heading}`}>
                    {point}
                  </p>
                );
              } else if (Array.isArray(point)) {
                return (
                  <ul key={i} className="space-y-2 ml-1">
                    {point.map((line, j) => (
                      <li key={j} className="text-slate-700 leading-relaxed flex items-start gap-2.5">
                        <span className={`inline-block w-1.5 h-1.5 ${styles.bullet} rounded-full mt-2 flex-shrink-0`} />
                        <span className="text-sm md:text-base">{line}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${item.color === 'blue' ? '#3b82f6' : '#f97316'};
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${item.color === 'blue' ? '#2563eb' : '#ea580c'};
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: ${item.color === 'blue' ? '#3b82f6' : '#f97316'} transparent;
        }
      `}</style>
    </div>
  );
};