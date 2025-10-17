import { FaBriefcase, FaCheckCircle, FaUserCheck, FaExclamationTriangle, FaFileContract } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";
export default function Placement_Policy() {
  const Placement_Policy = [
    {
      image: "/placement_policy/image1.svg",
      icon: <FaBriefcase />,
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
      icon: <FaCheckCircle />,
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
      icon: <FaUserCheck />,
      heading: "Student Responsibilities",
      description: [
        "Apply to all relevant job opportunities shared by the placement cell.",
        "Attend interviews and drives arranged by Nexcore or GKU.",
        "Accept job offers that meet or exceed the ₹3 LPA minimum.",
        "Students can decline only up to 2 job offers; declining more than 2 forfeits the placement guarantee.",
      ],
    },
    {
      image: "/placement_policy/image4.svg",
      icon: <FaExclamationTriangle />,
      heading: "Force Majeure & Exemptions",
      description: [
        "Nexcore Alliance is not liable for placement outcomes impacted by unforeseen events like pandemics, economic crises, or personal emergencies.",
        "Students opting out of placements for higher education, family business, or entrepreneurship must submit a signed Opt-Out Declaration.",
      ],
    },
    {
      image: "/placement_policy/image5MobileView.png",
      icon: <FaFileContract />,
      heading: "Policy Terms",
      description: [
        "This policy is applicable only to the B.Voc in AI & ML program.",
        "Changes to the policy may be made by Nexcore Alliance based on industry or academic developments.",
        "At admission, students and guardians will sign a Placement Policy Agreement acknowledging these terms.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] py-20 px-4 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HiSparkles className="absolute top-10 left-10 text-cyan-400 text-3xl animate-pulse" />
        <HiSparkles className="absolute top-32 right-20 text-orange-400 text-2xl animate-pulse delay-300" />
        <HiSparkles className="absolute bottom-32 left-1/4 text-purple-400 text-4xl animate-pulse delay-700" />
        <HiSparkles className="absolute bottom-20 right-1/3 text-yellow-400 text-2xl animate-pulse delay-1000" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-full">
            <HiSparkles className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-bold tracking-widest">CAREER ASSURANCE</span>
            <HiSparkles className="text-cyan-400" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-cyan-400">Guaranteed</span> Placement Policy
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Introduction
          </h2>

          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Nexcore Alliance guarantees placement support for every student enrolled
            in the B.Voc in Artificial Intelligence and Machine Learning program.
            This policy outlines the terms, responsibilities, and eligibility
            criteria for students to qualify for the guaranteed placement offer.
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
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
                {/* Glow Effect */}
                <div className="relative h-[750px] md:h-[700px]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
                  
                  <div className="relative h-full rounded-[2rem] overflow-hidden border-2 border-cyan-500/50">
                    {/* Top Section - Image */}
                    <div className="relative h-1/2 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-t-[2rem]">
                      {/* Corner Decorations */}
                      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/30 rounded-tl-[2rem] z-10" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-orange-500/50 z-10">
                        {item.icon}
                      </div>

                      {/* Image Container */}
                      <div className="absolute inset-0 flex items-center justify-center bg-[#1a2847] rounded-t-[2rem]" style={{ borderBottomLeftRadius: "1.5rem" }}>
                        <img
                          src={item.image}
                          alt={item.heading}
                          className="w-full h-full object-cover rounded-bl-[1.5rem] group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent rounded-bl-[1.5rem]" />
                      </div>
                    </div>

                    {/* Bottom Section - Content */}
                    <div className="relative h-1/2 bg-gradient-to-br from-cyan-600 to-purple-700 p-6 rounded-b-[2rem]">
                      {/* Corner Decoration */}
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/30 rounded-br-[2rem]" />

                      <div className="relative h-full overflow-y-hidden scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pr-2">
                        <h3 className="text-xl font-bold mb-3 text-center text-white">
                          {item.heading}
                        </h3>

                        <ul className={`list-disc pl-5 space-y-2 text-white ${isLongText ? "text-sm" : "text-base"}`}>
                          {Array.isArray(item.description) ? (
                            item.description.map((desc, i) =>
                              Array.isArray(desc) ? (
                                <ul key={i} className="list-[lower-alpha] pl-6 space-y-1 mt-1">
                                  {desc.map((sub, j) => (
                                    <li key={j} className="text-gray-100">{sub}</li>
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
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur-xl opacity-75" />
            <Link
  href="/contact"
  className="relative inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full text-lg shadow-2xl shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
>
  View Full Placement Terms →
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}