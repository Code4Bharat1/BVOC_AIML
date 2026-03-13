"use client";

import {
  Briefcase,
  CheckCircle,
  UserCheck,
  AlertTriangle,
  FileText,
  ArrowRight,
} from "lucide-react";
import Head from "next/head";

export default function Placement_Policy() {
  const policyItems = [
    {
      image: "/placement_policy/image1.svg",
      icon: <Briefcase className="w-6 h-6" />,
      heading: "Placement Guarantee Overview",
      description: [
        "Minimum Guaranteed Package: ₹3,00,000 per annum (₹25,000/month).",
        "Maximum Guaranteed Package: ₹6,00,000 per annum (₹50,000/month).",
        "Job Domains: Data Science, AI, Machine Learning, Analytics, Creative Tech, Multimedia, Animation, VFX, and related fields.",
        "Support Includes:",
        [
          "Resume & profile development",
          "Industry training & soft skills workshops",
          "Mock interviews and portfolio building",
          "Direct placement drives with partner companies",
        ],
      ],
      color: "blue",
    },
    {
      image: "/placement_policy/image2.svg",
      icon: <CheckCircle className="w-6 h-6" />,
      heading: "Eligibility Criteria",
      description: [
        "To be eligible for the guaranteed placement, a student must:",
        [
          "Complete the entire 3-year program without backlog.",
          "Maintain at least 90% attendance across all semesters.",
          "Maintain a minimum CGPA of 8.5 (out of 10).",
          "Actively participate in pre-placement training sessions.",
          "Have no record of disciplinary issues or academic dishonesty.",
        ],
      ],
      color: "orange",
    },
    {
      image: "/placement_policy/image3.svg",
      icon: <UserCheck className="w-6 h-6" />,
      heading: "Student Responsibilities",
      description: [
        "Apply to all relevant job opportunities shared by the placement cell.",
        "Attend interviews and drives arranged by Nexcore.",
        "Accept job offers that meet or exceed the ₹3 LPA minimum.",
        "Students can decline only up to 2 job offers; declining more than 2 forfeits the placement guarantee.",
      ],
      color: "blue",
    },
    {
      image: "/placement_policy/image4.svg",
      icon: <AlertTriangle className="w-6 h-6" />,
      heading: "Force Majeure & Exemptions",
      description: [
        "Nexcore Institute of Technology is not liable for placement outcomes impacted by unforeseen events like pandemics, economic crises, or personal emergencies.",
        "Students opting out of placements for higher education, family business, or entrepreneurship must submit a signed Opt-Out Declaration.",
      ],
      color: "orange",
    },
    {
      image: "/placement_policy/image5MobileView.png",
      icon: <FileText className="w-6 h-6" />,
      heading: "Policy Terms",
      description: [
        "This policy is applicable to Bachelor of Data Science and Artificial Intelligence and Bachelor of Multimedia and Animation programs.",
        "Changes to the policy may be made by Nexcore Institute of Technology based on industry or academic developments.",
        "At admission, students and guardians will sign a Placement Policy Agreement acknowledging these terms.",
      ],
      color: "blue",
    },
  ];

  return (
    <>
      <Head>
        <title>Guaranteed Placement Policy | Data Science & AI</title>

        <meta
          name="description"
          content="Guaranteed placement policy for Data Science, AI and Multimedia programs including eligibility criteria and responsibilities."
        />

        <meta name="robots" content="index, follow" />
      </Head>

      <div className="relative bg-gradient-to-b from-slate-50 to-white py-16 px-4 overflow-hidden mt-20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              <span className="text-blue-600">Guaranteed</span> Placement Policy
            </h1>

            <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-slate-700">
              Nexcore Institute of Technology guarantees placement support for
              every student enrolled in the Bachelor of Data Science and AI or
              Multimedia and Animation programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {policyItems.map((item, index) => (
              <PolicyCard key={index} item={item} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View Full Placement Terms
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ================= Policy Card Component ================= */

function PolicyCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
            {item.icon}
          </div>

          <h3 className="text-xl font-semibold text-slate-900">
            {item.heading}
          </h3>
        </div>

        <div className="space-y-2 text-slate-700">
          {item.description.map((desc, i) => {
            if (Array.isArray(desc)) {
              return (
                <ul key={i} className="list-disc pl-6 space-y-1">
                  {desc.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              );
            }

            return <p key={i}>{desc}</p>;
          })}
        </div>
      </div>
    </div>
  );
}