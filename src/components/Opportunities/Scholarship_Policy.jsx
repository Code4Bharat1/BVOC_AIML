"use client";
import React from "react";

export default function Scholarship_Policy() {
  const Scholarship_Policy = [
    {
      heading: "1. Meritorious Student Scholarship",
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
      para: [
        "Objective :",
        [
          " To support students from economically disadvantaged or rural backgrounds in accessing future-ready education",
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
      para: [
        "Objective : ",
        [
          "To encourage and empower female students to pursue careers in new-age technologies such as Artificial Intelligence and Machine Learning.",
        ],
        "Eligibility Criteria:",
        [
          "Female candidates who have passed Class 12.",
          "Enrolled in the B.Voc in AI and ML program.",
          "Priority given to first-generation learners or those from semi-urban/rural areas.",
        ],
        "Eligibility Criteria:",

        [
          "- Female candidates who have passed Class 12.",
          "- Enrolled in the B.Voc in AI and ML program.",
          "- Priority given to first-generation learners or those from semi-urban/rural areas.",
        ],
        "Benefits:",
        [
          "- Up to 60% tuition fee waiver.",
          "- Mentorship and skill-building workshops specifically designed for female students.",
          "- Networking support for internships and placements.",
        ],
        "Rules & Regulations:",
        [
          "- Must maintain a 90% or above each semester.",
          "- Active participation in academic and project-based activities is mandatory.",
          "- Misuse of scholarship privileges may lead to revocation.",
        ],
        "Required Documents:",
        [
          "- Marksheet of Class 12.",
          "- Aadhaar card or government ID as proof of gender.",
          "- Short essay (150–200 words) on Why I want to build a career in AI & ML",
        ],
      ],
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto mb-6 mt-10 px-6 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-15">
          <span className="text-[#AC6CFF]">Scholarship Policy</span> Document
        </h1>
        <p className="text-base sm:text-xl font-medium text-white mb-15">
          This document outlines the{" "}
          <span className="text-[#AC6CFF]">Scholarship policies</span> for
          students enrolling in the{" "}
          <span className="text-[#AC6CFF]">B.Voc</span> in{" "}
          <span className="text-[#AC6CFF]">Artificial Intelligence</span> and{" "}
          <span className="text-[#AC6CFF]">Machine Learning</span> program
          offered by <span className="text-[#AC6CFF]">Nexcore Alliance</span> in
          collaboration with{" "}
          <span className="text-[#AC6CFF]">Recognized University.</span>
        </p>
      </div>

      <style jsx>{`
        /* Custom scrollbar styling */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(234, 218, 255, 0.3);
          border-radius: 10px;
          margin: 10px 0;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(172, 108, 255, 0.6);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(172, 108, 255, 0.8);
        }

        /* Hide scrollbar for non-hover state */
        .scroll-container {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
          transition: scrollbar-color 0.3s ease;
        }

        /* Show scrollbar on hover */
        .scroll-container:hover {
          scrollbar-color: rgba(172, 108, 255, 0.6) rgba(234, 218, 255, 0.3);
        }

        /* Keep normal content padding to ensure text doesn't get cut off */
        .content-container {
          padding-bottom: 20px;
        }

        /* Mobile styles */
        @media (max-width: 640px) {
          .desktop-view {
            display: none;
          }
          .mobile-view {
            display: block;
          }
        }

        /* Desktop styles */
        @media (min-width: 641px) {
          .desktop-view {
            display: block;
          }
          .mobile-view {
            display: none;
          }
        }
      `}</style>

      {/* Desktop View - Original Layout */}
      <div className="desktop-view">
        {Scholarship_Policy.map((item, idx) => (
          <div
            key={idx}
            className="w-full max-w-5xl mx-auto mb-20 relative h-[600px]"
          >
            {/* Purple boxes behind */}
            <div className="absolute inset-0 flex justify-between items-center -z-10 px-4">
              <div
                className="w-[300px] h-[610px] bg-[#AC6CFF]"
                style={{
                  borderTopLeftRadius: "70px",
                  borderBottomLeftRadius: "70px",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
              ></div>
              <div
                className="w-[300px] h-[610px] bg-[#AC6CFF]"
                style={{
                  borderTopRightRadius: "70px",
                  borderBottomRightRadius: "70px",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
              ></div>
            </div>

            {/* Center the light purple box */}
            <div className="flex justify-center items-center h-full">
              <div className="flex justify-center items-center h-full relative">
                <div className="flex justify-center items-center h-full relative">
                  <div className="bg-[#EADAFF] w-[800px] rounded-[70px] p-6 text-black shadow-lg relative">
                    <div className="h-[500px] overflow-y-auto pr-3 relative custom-scrollbar scroll-container">
                      <div className="content-container">
                        <h3 className="text-3xl font-extrabold mb-4 mx-10 text-left">
                          {item.heading}
                        </h3>

                        {item.para.map((point, i) => {
                          if (typeof point === "string") {
                            return (
                              <p
                                key={i}
                                className="text-base font-medium mb-2 mx-10 leading-tight"
                              >
                                {point}
                              </p>
                            );
                          } else if (Array.isArray(point)) {
                            return (
                              <ul
                                key={i}
                                className="list-disc list-inside text-base pl-5 space-y-1 mb-3 mx-10"
                              >
                                {point.map((line, j) => (
                                  <li key={j} className="leading-tight">
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
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View - New Layout */}
      <div className="mobile-view">
        {Scholarship_Policy.map((item, idx) => (
          <div key={idx} className="w-full mx-auto mb-10 relative">
            {/* Combined purple background box that adapts to content height */}
            <div className="absolute inset-0 bg-[#AC6CFF] mx-4 rounded-[40px]"></div>

            {/* Center the light purple box */}
            <div className="relative py-6 px-4 flex justify-center">
              <div className="bg-[#EADAFF] w-full rounded-[40px] p-4 text-black shadow-lg">
                <div className="h-[400px] overflow-y-auto pr-2 relative custom-scrollbar scroll-container">
                  <div className="content-container">
                    <h3 className="text-2xl font-extrabold mb-3 mx-4 text-left">
                      {item.heading}
                    </h3>

                    {item.para.map((point, i) => {
                      if (typeof point === "string") {
                        return (
                          <p
                            key={i}
                            className="text-sm font-medium mb-2 mx-4 leading-tight"
                          >
                            {point}
                          </p>
                        );
                      } else if (Array.isArray(point)) {
                        return (
                          <ul
                            key={i}
                            className="list-disc list-inside text-sm pl-3 space-y-1 mb-3 mx-4"
                          >
                            {point.map((line, j) => (
                              <li key={j} className="leading-tight">
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
          </div>
        ))}
      </div>
    </>
  );
}
