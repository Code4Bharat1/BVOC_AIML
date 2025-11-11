"use client";
import React from "react";
import { Award, GraduationCap, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Scholarship_Policy() {
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
          "Must have enrolled in the Bachelor's in AI and ML program.",
        ],
        "Benefits:",
        [
          "25000/- waiver on tuition fees for the first year.",
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
          "Enrolled in the Bachelor's in AI and ML program.",
        ],
        "Benefits:",
        [
          "Up to 25000/- tuition fee waiver.",
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
          "Enrolled in the Bachelor's in AI and ML program.",
          "Priority given to first-generation learners or those from semi-urban/rural areas.",
        ],
        "Benefits:",
        [
          "Up to 25000/- tuition fee waiver.",
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
    <div className="w-full bg-white min-h-screen relative overflow-hidden py-12">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <motion.div 
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/15 blur-[200px] rounded-full"
        animate={{ 
          scale: [1, 1.25, 1],
          x: [0, 40, 0],
          y: [0, -40, 0]
        }}
        transition={{ duration: 22, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-indigo-100/12 blur-[220px] rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      {/* Header Section */}
      <div className="relative z-10 max-w-6xl mx-auto mb-12 px-6 text-center">
        <motion.div 
          className="inline-flex items-center gap-3 mb-8 px-8 py-3 bg-blue-50/80 border border-blue-200/50 rounded-full backdrop-blur-sm shadow-sm"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-blue-600 w-5 h-5" />
          </motion.div>
          <span className="text-blue-700 text-xs font-semibold tracking-[0.12em] uppercase">Scholarship Opportunities</span>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-blue-600 w-5 h-5" />
          </motion.div>
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
        >
          <span className="text-blue-600">Scholarship Policy</span>{" "}
          <span className="text-slate-900">Document</span>
        </motion.h1>

        <motion.div 
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div 
            className="h-0.5 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-blue-600"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="h-0.5 w-24 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.p 
          className="text-base sm:text-lg font-normal text-slate-600 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
        >
          This document outlines the{" "}
          <span className="text-blue-700 font-semibold">Scholarship policies</span>{" "}
          for students enrolling in the{" "}
          <span className="text-indigo-700 font-semibold">Bachelor's in Artificial Intelligence and Machine Learning</span>{" "}
          program offered by{" "}
          <span className="text-blue-700 font-semibold">Nexcore Alliance</span> in
          collaboration with{" "}
          <span className="text-blue-700 font-semibold">Recognized University.</span>
        </motion.p>
      </div>

      {/* Scholarship Cards */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 space-y-8">
        {ScholarshipData.map((item, idx) => (
          <motion.div
            key={idx}
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Main Card */}
            <div className="relative rounded-3xl bg-white border border-slate-200 backdrop-blur-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              {/* Header with icon */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-200 p-6 lg:p-8 flex items-center gap-4">
                <motion.div 
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </motion.div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 leading-tight" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
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
                          className="text-base lg:text-lg font-bold text-blue-600"
                          style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
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
                              className="text-base lg:text-lg text-slate-600 leading-relaxed font-normal"
                              style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
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
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(226, 232, 240, 0.3);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(
            to bottom,
            rgba(59, 130, 246, 0.5),
            rgba(99, 102, 241, 0.5)
          );
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            to bottom,
            rgba(59, 130, 246, 0.8),
            rgba(99, 102, 241, 0.8)
          );
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.5) rgba(226, 232, 240, 0.3);
        }
      `}</style>
    </div>
  );
}