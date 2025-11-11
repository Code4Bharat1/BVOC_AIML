"use client";
import { Briefcase, CheckCircle, UserCheck, AlertTriangle, FileText, Sparkles, ArrowRight } from "lucide-react";

export default function Placement_Policy() {
  const Placement_Policy = [
    {
      image: "/placement_policy/image1.svg",
      icon: <Briefcase />,
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
    },
    {
      image: "/placement_policy/image2.svg",
      icon: <CheckCircle />,
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
    },
    {
      image: "/placement_policy/image3.svg",
      icon: <UserCheck />,
      heading: "Student Responsibilities",
      description: [
        "Apply to all relevant job opportunities shared by the placement cell.",
        "Attend interviews and drives arranged by Nexcore.",
        "Accept job offers that meet or exceed the ₹3 LPA minimum.",
        "Students can decline only up to 2 job offers; declining more than 2 forfeits the placement guarantee.",
      ],
    },
    {
      image: "/placement_policy/image4.svg",
      icon: <AlertTriangle />,
      heading: "Force Majeure & Exemptions",
      description: [
        "Nexcore Alliance is not liable for placement outcomes impacted by unforeseen events like pandemics, economic crises, or personal emergencies.",
        "Students opting out of placements for higher education, family business, or entrepreneurship must submit a signed Opt-Out Declaration.",
      ],
    },
    {
      image: "/placement_policy/image5MobileView.png",
      icon: <FileText />,
      heading: "Policy Terms",
      description: [
        "This policy is applicable only to the Bachelor's in AI & ML program.",
        "Changes to the policy may be made by Nexcore Alliance based on industry or academic developments.",
        "At admission, students and guardians will sign a Placement Policy Agreement acknowledging these terms.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white py-20 px-4 overflow-hidden">
      {/* Floating Particles with Movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const startY = Math.random() * 100;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${startY}%`,
                animation: `floatUp ${4 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          );
        })}
      </div>

      {/* Glowing Orbs with Animation */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-blue-100/15 rounded-full blur-[180px]"
        style={{
          animation: 'moveOrb1 22s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/12 rounded-full blur-[160px]"
        style={{
          animation: 'moveOrb2 25s ease-in-out infinite'
        }}
      />

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px);
            opacity: 0;
          }
        }

        @keyframes moveOrb1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(50px, -50px) scale(1.2);
          }
          50% {
            transform: translate(30px, 30px) scale(1);
          }
          75% {
            transform: translate(-30px, -30px) scale(1.25);
          }
        }

        @keyframes moveOrb2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-50px, 50px) scale(1.25);
          }
          50% {
            transform: translate(-30px, -30px) scale(1);
          }
          75% {
            transform: translate(30px, 30px) scale(1.2);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-blue-50/80 border border-blue-200/50 rounded-full backdrop-blur-sm shadow-sm">
            <Sparkles className="text-blue-600 w-4 h-4" />
            <span className="text-blue-700 text-xs font-semibold tracking-[0.12em] uppercase">Career Assurance</span>
            <Sparkles className="text-blue-600 w-4 h-4" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
            <span className="text-blue-600">Guaranteed</span> Placement Policy
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
            Introduction
          </h2>

          <p className="text-base md:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
            Nexcore Alliance guarantees placement support for every student enrolled
            in the Bachelor's in Artificial Intelligence and Machine Learning program.
            This policy outlines the terms, responsibilities, and eligibility
            criteria for students to qualify for the guaranteed placement offer.
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full" />
          </div>
        </div>

        {/* Policy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {Placement_Policy.map((item, index) => {
            const getDescriptionText = (desc) => {
              if (Array.isArray(desc)) {
                return desc
                  .flatMap((d) => (Array.isArray(d) ? d : [d]))
                  .join(" ");
              }
              return desc;
            };

            const totalDescLength = getDescriptionText(item.description).length;
            const isLongText = totalDescLength > 300;

            return (
              <div
                key={index}
                className={`w-full max-w-[480px] group ${
                  Placement_Policy.length % 2 === 1 &&
                  index === Placement_Policy.length - 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <div className="relative h-[750px] md:h-[700px]">
                  <div className="relative h-full rounded-[2rem] overflow-hidden border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                    {/* Top Section - Image */}
                    <div className="relative h-1/2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-t-[2rem]">
                      {/* Corner Decorations - Very Light */}
                      <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-slate-200/60 rounded-tl-[2rem] z-10" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md z-10">
                        {item.icon}
                      </div>

                      {/* Image Container */}
                      <div className="absolute inset-0 flex items-center justify-center bg-white rounded-t-[2rem]" style={{ borderBottomLeftRadius: "1.5rem" }}>
                        <img
                          src={item.image}
                          alt={item.heading}
                          className="w-full h-full object-cover rounded-bl-[1.5rem] group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 via-transparent to-transparent rounded-bl-[1.5rem]" />
                      </div>
                    </div>

                    {/* Bottom Section - Content */}
                    <div className="relative h-1/2 bg-white p-6 rounded-b-[2rem]">
                      {/* Corner Decoration */}
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-slate-200/60 rounded-br-[2rem]" />

                      <div className="relative h-full overflow-y-hidden scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent pr-2">
                        <h3 className="text-lg font-bold mb-3 text-center text-slate-900" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                          {item.heading}
                        </h3>

                        <ul className={`list-disc pl-5 space-y-2 text-slate-700 ${isLongText ? "text-sm" : "text-base"}`} style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
                          {Array.isArray(item.description) ? (
                            item.description.map((desc, i) =>
                              Array.isArray(desc) ? (
                                <ul key={i} className="list-[lower-alpha] pl-6 space-y-1 mt-1">
                                  {desc.map((sub, j) => (
                                    <li key={j} className="text-slate-600">{sub}</li>
                                  ))}
                                </ul>
                              ) : (
                                <li key={i} className="leading-relaxed">{desc}</li>
                              )
                            )
                          ) : (
                            <li className="leading-relaxed">{item.description}</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold rounded-xl text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
          >
            View Full Placement Terms
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}