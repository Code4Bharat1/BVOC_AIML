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
    <div className="relative min-h-screen bg-white py-16 px-4 overflow-hidden">
      {/* Optimized Floating Particles - Reduced from 12 to 6 */}
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

      {/* Lighter Glowing Orbs with Optimized Animation */}
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

        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #007BFF;
          border-radius: 20px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #FF7F00;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10 mt-10">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200/40 rounded-full">
            <Sparkles className="w-4 h-4" style={{ color: '#007BFF' }} />
            <span 
              className="text-xs font-semibold tracking-wider uppercase" 
              style={{ color: '#2C2C2C' }}
            >
              Career Assurance
            </span>
            <Sparkles className="w-4 h-4" style={{ color: '#FF7F00' }} />
          </div> */}

          <h1 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight" 
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C'
            }}
          >
            <span style={{ color: '#007BFF' }}>Guaranteed</span> Placement Policy
          </h1>

          <h2 
            className="text-xl md:text-2xl font-semibold mb-4" 
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#FF7F00'
            }}
          >
            Introduction
          </h2>

          <p 
            className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed" 
            style={{ 
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C'
            }}
          >
            Nexcore Alliance guarantees placement support for every student enrolled
            in the Bachelor's in Artificial Intelligence and Machine Learning program.
            This policy outlines the terms, responsibilities, and eligibility
            criteria for students to qualify for the guaranteed placement offer.
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-0.5 w-16 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #007BFF, transparent)' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FF7F00' }} />
            <div className="h-0.5 w-16 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #FF7F00, transparent)' }} />
          </div>
        </div>

        {/* Policy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
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
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <div className="relative h-[750px] md:h-[700px]">
                  <div className="relative h-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Top Section - Image */}
                    <div className="relative h-1/2 rounded-t-2xl" style={{ background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.08) 0%, rgba(255, 127, 0, 0.08) 100%)' }}>
                      {/* Corner Decorations with Brand Colors */}
                      <div 
                        className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-2xl opacity-40 z-10"
                        style={{ borderColor: index % 2 === 0 ? '#007BFF' : '#FF7F00' }}
                      />
                      
                      {/* Icon Badge with Brand Colors */}
                      <div 
                        className="absolute top-4 right-4 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md z-10"
                        style={{
                          background: `linear-gradient(135deg, #007BFF 0%, ${index % 2 === 0 ? '#0056b3' : '#FF7F00'} 100%)`
                        }}
                      >
                        {item.icon}
                      </div>

                      {/* Image Container */}
                      <div className="absolute inset-0 flex items-center justify-center bg-white rounded-t-2xl">
                        <img
                          src={item.image}
                          alt={item.heading}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/20 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* Bottom Section - Content */}
                    <div className="relative h-1/2 bg-white p-6 rounded-b-2xl">
                      {/* Corner Decoration */}
                      <div 
                        className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-2xl opacity-40"
                        style={{ borderColor: index % 2 === 0 ? '#FF7F00' : '#007BFF' }}
                      />

                      <div className="relative h-full overflow-y-auto scrollbar-thin pr-2">
                        <h3 
                          className="text-lg font-bold mb-3 text-center" 
                          style={{ 
                            fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                            color: '#007BFF'
                          }}
                        >
                          {item.heading}
                        </h3>

                        <ul 
                          className={`list-disc pl-5 space-y-2 ${isLongText ? "text-sm" : "text-base"}`} 
                          style={{ 
                            fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                            color: '#2C2C2C'
                          }}
                        >
                          {Array.isArray(item.description) ? (
                            item.description.map((desc, i) =>
                              Array.isArray(desc) ? (
                                <ul key={i} className="list-[lower-alpha] pl-6 space-y-1 mt-1">
                                  {desc.map((sub, j) => (
                                    <li key={j} style={{ color: '#2C2C2C' }}>{sub}</li>
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

        {/* Bottom CTA with Brand Colors */}
        <div className="mt-14 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{ 
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)'
            }}
          >
            View Full Placement Terms
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
