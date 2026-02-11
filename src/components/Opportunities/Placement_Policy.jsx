"use client";
import { Briefcase, CheckCircle, UserCheck, AlertTriangle, FileText, ArrowRight } from "lucide-react";

export default function Placement_Policy() {
  const policyItems = [
    {
      image: "/placement_policy/image1.svg",
      icon: <Briefcase className="w-6 h-6" />,
      heading: "Placement Guarantee Overview",
      description: [
        "Minimum Guaranteed Package: ₹3,00,000 per annum (₹25,000/month).",
        "Maximum Guaranteed Package: ₹6,00,000 per annum (₹50,000/month).",
        "Job Domains: AI, Machine Learning, Data Science, Analytics, and related fields.",
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
        "Nexcore Alliance is not liable for placement outcomes impacted by unforeseen events like pandemics, economic crises, or personal emergencies.",
        "Students opting out of placements for higher education, family business, or entrepreneurship must submit a signed Opt-Out Declaration.",
      ],
      color: "orange",
    },
    {
      image: "/placement_policy/image5MobileView.png",
      icon: <FileText className="w-6 h-6" />,
      heading: "Policy Terms",
      description: [
        "This policy is applicable only to the Bachelor's in AI & ML program.",
        "Changes to the policy may be made by Nexcore Alliance based on industry or academic developments.",
        "At admission, students and guardians will sign a Placement Policy Agreement acknowledging these terms.",
      ],
      color: "blue",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-white py-16 px-4 overflow-hidden mt-20">
      {/* Simple background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-50/40 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            <span className="text-blue-600">Guaranteed</span> Placement Policy
          </h1>

          <h2 className="text-2xl font-semibold mb-4 text-orange-500">
            Introduction
          </h2>

          <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-slate-700">
            Nexcore Alliance guarantees placement support for every student enrolled
            in the Bachelor's in Artificial Intelligence and Machine Learning program.
            This policy outlines the terms, responsibilities, and eligibility
            criteria for students to qualify for the guaranteed placement offer.
          </p>

          {/* Simple divider */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
          </div>
        </div>

        {/* Policy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {policyItems.map((item, index) => (
            <PolicyCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
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
  );
}

const PolicyCard = ({ item, index }) => {
  const colorStyles = {
    blue: {
      icon: "bg-blue-600",
      border: "border-blue-200",
      hoverBorder: "hover:border-blue-400",
      heading: "text-blue-600",
      accent: "bg-blue-500",
    },
    orange: {
      icon: "bg-orange-500",
      border: "border-orange-200",
      hoverBorder: "hover:border-orange-400",
      heading: "text-orange-500",
      accent: "bg-orange-500",
    },
  };

  const styles = colorStyles[item.color];

  // Render nested list items
  const renderDescription = (desc, level = 0) => {
    if (Array.isArray(desc)) {
      return desc.map((d, i) => {
        if (Array.isArray(d)) {
          return (
            <ul key={i} className="ml-6 mt-2 space-y-1.5">
              {d.map((sub, j) => (
                <li key={j} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>{sub}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <li key={i} className="text-slate-700 leading-relaxed flex items-start gap-2">
            <span className="text-slate-400 mt-1">•</span>
            <span>{d}</span>
          </li>
        );
      });
    }
    return (
      <li className="text-slate-700 leading-relaxed flex items-start gap-2">
        <span className="text-slate-400 mt-1">•</span>
        <span>{desc}</span>
      </li>
    );
  };

  return (
    <>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #3b82f6 transparent;
        }
      `}</style>
      
      <div className="group">
        <div className={`bg-white rounded-2xl border-2 ${styles.border} ${styles.hoverBorder} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col`}>
          {/* Image Section */}
          <div className="relative h-64 bg-gradient-to-br from-slate-50 to-slate-100">
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Icon Badge */}
            <div className={`absolute top-4 right-4 w-12 h-12 ${styles.icon} rounded-xl flex items-center justify-center text-white shadow-lg border-2 border-white`}>
              {item.icon}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 flex flex-col">
            <h3 className={`text-xl font-bold mb-4 ${styles.heading}`}>
              {item.heading}
            </h3>

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-2.5">
                {renderDescription(item.description)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};