"use client";
import React, { useState, useEffect } from "react";
import { Award, GraduationCap, Heart } from "lucide-react";

export default function Scholarship_Policy() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 25 }).map(() => ({
        id: Math.random(),
        top: Math.random() * 100,
        left: Math.random() * 100,
        color: ["#00d4ff", "#ff8c00", "#b847ff", "#ffd700"][
          Math.floor(Math.random() * 4)
        ],
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 1,
      }));
    };
    setStars(generateStars());
  }, []);

  const ScholarshipData = [
    {
      heading: "1. Meritorious Student Scholarship",
      icon: Award,
      para: [
        "Objective :",
        [
          "To recognize and reward academic excellence among students who have demonstrated outstanding performance in their Class 12 board examinations.",
        ],
        "Eligibility Criteria:",
        [
          "Minimum 85% aggregate marks in Class 12 (Any recognized board).",
          "Scholarship applicable only in the first academic year (can be extended based on academic performance).",
          "Must have enrolled in the B.Voc in AI and ML program.",
        ],
        "Benefits:",
        [
          "50% waiver on tuition fees for the first year.",
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
      heading: "2. Underprivileged & Rural Background Scholarship",
      icon: Heart,
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
          "Enrolled in the B.Voc in AI and ML program.",
        ],
        "Benefits:",
        [
          "Up to 75% tuition fee waiver.",
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
      heading: "3. Women in Tech Scholarship",
      icon: GraduationCap,
      para: [
        "Objective :",
        [
          "To encourage and empower female students to pursue careers in new-age technologies such as Artificial Intelligence and Machine Learning.",
        ],
        "Eligibility Criteria:",
        [
          "Female candidates who have passed Class 12.",
          "Enrolled in the B.Voc in AI and ML program.",
          "Priority given to first-generation learners or those from semi-urban/rural areas.",
        ],
        "Benefits:",
        [
          "Up to 60% tuition fee waiver.",
          "Mentorship and skill-building workshops specifically designed for female students.",
          "Networking support for internships and placements.",
        ],
        "Rules & Regulations:",
        [
          "Must maintain a 90% or above each semester.",
          "Active participation in academic and project-based activities is mandatory.",
          "Misuse of scholarship privileges may lead to revocation.",
        ],
        "Required Documents:",
        [
          "Marksheet of Class 12.",
          "Aadhaar card or government ID as proof of gender.",
          "Short essay (150–200 words) on Why I want to build a career in AI & ML",
        ],
      ],
    },
  ];

  return (
    <>
      {/* Background */}
      <div className="w-full bg-gradient-to-b from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] min-h-screen relative overflow-hidden py-12">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                backgroundColor: star.color,
                opacity: 0.5,
                animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              }}
            >
              <style>{`
                @keyframes twinkle {
                  0%, 100% { opacity: 0.3; transform: scale(0.5); }
                  50% { opacity: 1; transform: scale(1); }
                }
              `}</style>
            </div>
          ))}
        </div>

        {/* Header Section */}
        <div className="relative z-10 max-w-6xl mx-auto mb-12 px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Scholarship Policy
            </span>{" "}
            Document
          </h1>
          <p className="text-base sm:text-lg font-semibold text-cyan-100 leading-relaxed">
            This document outlines the{" "}
            <span className="text-cyan-300 font-bold">Scholarship policies</span>{" "}
            for students enrolling in the{" "}
            <span className="text-orange-300 font-bold">B.Voc</span> in{" "}
            <span className="text-orange-300 font-bold">
              Artificial Intelligence
            </span>{" "}
            and{" "}
            <span className="text-orange-300 font-bold">Machine Learning</span>{" "}
            program offered by{" "}
            <span className="text-cyan-300 font-bold">Nexcore Alliance</span> in
            collaboration with{" "}
            <span className="text-cyan-300 font-bold">Recognized University.</span>
          </p>
        </div>

        {/* Scholarship Cards */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 space-y-12">
          {ScholarshipData.map((item, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main Card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-cyan-600/20 to-purple-700/20 border-2 border-cyan-400/60 backdrop-blur-sm overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300">
                {/* Header with icon */}
                <div className="bg-gradient-to-r from-cyan-600/30 to-purple-700/30 border-b-2 border-cyan-400/40 p-6 lg:p-8 flex items-center gap-4">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/50">
                    <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {item.heading}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 max-h-[600px] overflow-y-auto custom-scrollbar">
                  <div className="space-y-4">
                    {item.para.map((point, i) => {
                      if (typeof point === "string") {
                        return (
                          <p
                            key={i}
                            className="text-base lg:text-lg font-bold text-cyan-300"
                          >
                            {point}
                          </p>
                        );
                      } else if (Array.isArray(point)) {
                        return (
                          <ul
                            key={i}
                            className="list-disc list-inside space-y-2 ml-2"
                          >
                            {point.map((line, j) => (
                              <li
                                key={j}
                                className="text-base lg:text-lg text-white leading-relaxed font-semibold"
                              >
                                {line}
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
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 212, 255, 0.1);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(
            to bottom,
            rgba(0, 212, 255, 0.6),
            rgba(255, 140, 0, 0.6)
          );
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            to bottom,
            rgba(0, 212, 255, 0.9),
            rgba(255, 140, 0, 0.9)
          );
        }

        /* Firefox scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 212, 255, 0.6) rgba(0, 212, 255, 0.1);
        }
      `}</style>
    </>
  );
}