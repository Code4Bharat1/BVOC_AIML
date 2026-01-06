"use client";
import React from "react";
import { Award, GraduationCap, Heart, Sparkles } from "lucide-react";

export default function Scholarship_Policy() {
  const ScholarshipData = [
    {
      heading: "1. Meritorious Student Scholarship",
      icon: Award,
      color: "from-[#007BFF] to-[#80C8F7]",
      accentColor: "#007BFF",
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
      heading: "2. Underprivileged & Rural Background Scholarship",
      icon: Heart,
      color: "from-[#FF7F00] to-[#FFCD00]",
      accentColor: "#FF7F00",
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
      heading: "3. Women in Tech Scholarship",
      icon: GraduationCap,
      color: "from-[#007BFF] to-[#FF7F00]",
      accentColor: "#007BFF",
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
    <div className="relative min-h-screen bg-white py-16 px-4 overflow-hidden">
      {/* Optimized Floating Particles - Reduced from 15 to 6 for Better Performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? '#007BFF' : '#FF7F00',
              opacity: 0.15,
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animation: `floatUp ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>

      {/* Lighter Glowing Orbs with CSS Animation - Better Performance */}
      <div 
        className="absolute top-0 left-0 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 123, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'moveOrb1 20s ease-in-out infinite',
          willChange: 'transform'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 127, 0, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'moveOrb2 22s ease-in-out infinite',
          willChange: 'transform'
        }}
      />

      {/* CSS Animations for Better Performance */}
      <style jsx>{`
        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          15% {
            opacity: 0.2;
          }
          85% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-120px) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes moveOrb1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(40px, 40px);
          }
        }

        @keyframes moveOrb2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, -40px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        /* Custom Scrollbar with Brand Colors */
        .smooth-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .smooth-scroll::-webkit-scrollbar-track {
          background: rgba(0, 123, 255, 0.05);
          border-radius: 10px;
        }

        .smooth-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #007BFF, #FF7F00);
          border-radius: 10px;
        }

        .smooth-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0056b3, #cc6600);
        }

        .smooth-scroll {
          scrollbar-width: thin;
          scrollbar-color: #007BFF rgba(0, 123, 255, 0.1);
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10 mt-10">
        {/* Header Section */}
        <div className="text-center mb-14">
          {/* <div 
            className="inline-flex items-center gap-2 mb-5 px-5 py-2 bg-gradient-to-r from-blue-50 to-orange-50 border rounded-full"
            style={{ 
              borderColor: 'rgba(0, 123, 255, 0.2)',
              animation: 'fadeInUp 0.5s ease-out'
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: '#007BFF' }} />
            <span 
              className="text-xs font-semibold tracking-wider uppercase" 
              style={{ color: '#2C2C2C' }}
            >
              Scholarship Opportunities
            </span>
            <Sparkles className="w-4 h-4" style={{ color: '#FF7F00' }} />
          </div> */}

          <h1 
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C',
              animation: 'fadeInUp 0.6s ease-out 0.1s backwards'
            }}
          >
            <span style={{ color: '#007BFF' }}>Scholarship Policy</span>{" "}
            <span style={{ color: '#2C2C2C' }}>Document</span>
          </h1>

          <div 
            className="flex items-center justify-center gap-3 mt-5"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s backwards' }}
          >
            <div 
              className="h-0.5 w-16 rounded-full" 
              style={{ background: 'linear-gradient(to right, transparent, #007BFF, transparent)' }} 
            />
            <div 
              className="w-1.5 h-1.5 rounded-full" 
              style={{ backgroundColor: '#FF7F00' }} 
            />
            <div 
              className="h-0.5 w-16 rounded-full" 
              style={{ background: 'linear-gradient(to right, transparent, #FF7F00, transparent)' }} 
            />
          </div>

          <p 
            className="text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mt-6"
            style={{ 
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: 'rgba(44, 44, 44, 0.8)',
              animation: 'fadeInUp 0.6s ease-out 0.3s backwards'
            }}
          >
            This document outlines the{" "}
            <span style={{ color: '#007BFF', fontWeight: 600 }}>Scholarship policies</span>{" "}
            for students enrolling in the{" "}
            <span style={{ color: '#FF7F00', fontWeight: 600 }}>
              Bachelor's in AI & Machine Learning, Computer Science and Cybersecurity
            </span>{" "}
            program offered by{" "}
            <span style={{ color: '#007BFF', fontWeight: 600 }}>Nexcore Alliance</span> in
            collaboration with{" "}
            <span style={{ color: '#2C2C2C', fontWeight: 600 }}>Recognized University.</span>
          </p>
        </div>

        {/* Scholarship Cards */}
        <div className="space-y-6">
          {ScholarshipData.map((item, idx) => (
            <div
              key={idx}
              className="group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards`
              }}
            >
              {/* Card Container */}
              <div className="relative rounded-2xl bg-white border border-gray-200/60 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Accent Bar */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} 
                />

                {/* Header */}
                <div className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 p-5 lg:p-7 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                  >
                    <item.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <h3 
                    className="text-lg lg:text-xl font-bold leading-tight"
                    style={{ 
                      fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                      color: '#2C2C2C'
                    }}
                  >
                    {item.heading}
                  </h3>
                </div>

                {/* Content with Smooth Scroll */}
                <div className="p-5 lg:p-7 max-h-[500px] overflow-y-auto smooth-scroll">
                  <div className="space-y-3.5">
                    {item.para.map((point, i) => {
                      if (typeof point === "string") {
                        return (
                          <p
                            key={i}
                            className="text-base lg:text-lg font-bold"
                            style={{ 
                              color: item.accentColor,
                              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
                            }}
                          >
                            {point}
                          </p>
                        );
                      } else if (Array.isArray(point)) {
                        return (
                          <ul key={i} className="space-y-2 ml-1">
                            {point.map((line, j) => (
                              <li
                                key={j}
                                className="text-sm lg:text-base leading-relaxed flex items-start gap-2"
                                style={{ 
                                  color: 'rgba(44, 44, 44, 0.75)',
                                  fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
                                }}
                              >
                                <span
                                  className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ backgroundColor: item.accentColor }}
                                />
                                <span>{line}</span>
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
    </div>
  );
}
