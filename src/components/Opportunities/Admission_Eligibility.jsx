"use client";
import { FaGraduationCap, FaPercentage, FaCalendarAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function Admission_Eligibility() {
  const Admission_Eligibility = [
    {
      heading: "Educational Qualification :",
      description: [
        "Candidate must have passed 10+2 (Higher Secondary or equivalent) examination from a recognized board in any stream — Science, Commerce, Arts, or Vocational.",
        "Candidates with 2-year ITI certificate after 10th standard are also eligible.",
      ],
      image: "/eligibility_criteria/Criteria1.svg",
      icon: <FaGraduationCap />,
    },
    {
      heading: "Minimum Marks :",
      description: [
        "General category candidates should have at least 50% aggregate marks in 10+2.",
        "Reserved category candidates (SC/ST/OBC/PwD) are eligible with a minimum of 40% aggregate marks.",
      ],
      image: "/eligibility_criteria/Criteria2.svg",
      icon: <FaPercentage />,
    },
    {
      heading: "Age Limit :",
      description: ["No upper age limit for admission."],
      image: "/eligibility_criteria/Criteria3.svg",
      icon: <FaCalendarAlt />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] py-20 px-4 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles with Movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const startY = Math.random() * 100;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#26C6DA] rounded-full"
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
        className="absolute top-0 left-0 w-96 h-96 bg-[#26C6DA]/20 rounded-full blur-[150px]"
        style={{
          animation: 'moveOrb1 20s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6F00]/20 rounded-full blur-[150px]"
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
            opacity: 1;
          }
          90% {
            opacity: 1;
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
            transform: translate(50px, -50px) scale(1.3);
          }
          50% {
            transform: translate(30px, 30px) scale(1);
          }
          75% {
            transform: translate(-30px, -30px) scale(1.4);
          }
        }

        @keyframes moveOrb2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-50px, 50px) scale(1.4);
          }
          50% {
            transform: translate(-30px, -30px) scale(1);
          }
          75% {
            transform: translate(30px, 30px) scale(1.5);
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-[#26C6DA]/10 border-2 border-[#26C6DA]/30 rounded-full backdrop-blur-xl">
            <HiSparkles className="text-[#26C6DA]" />
            <span className="text-[#26C6DA] text-sm font-bold tracking-widest">ELIGIBILITY CRITERIA</span>
            <HiSparkles className="text-[#26C6DA]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Admission Eligibility Criteria for{" "}
            <span className="text-[#26C6DA]">{"Bachelor's"}</span> in
            <br />
            <span className="text-[#26C6DA]">Artificial Intelligence</span> and{" "}
            <br />
            <span className="text-[#26C6DA]">Machine Learning</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#26C6DA] to-transparent rounded-full animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-[#26C6DA] animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#26C6DA] to-transparent rounded-full animate-pulse" />
          </div>
        </div>

        {/* Eligibility Cards */}
        <div className="flex flex-col items-center gap-8">
          {Admission_Eligibility.map((item, index) => (
            <div key={index} className="w-full group">
              {/* Glow Effect */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#26C6DA] via-[#FF6F00] to-[#26C6DA] rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
                
                <div className="relative bg-[#1A287E]/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-2 border-[#26C6DA]/50 shadow-2xl">
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#26C6DA]/70 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#FF6F00]/70 rounded-br-3xl" />

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                    {/* Image with Icon Badge */}
                    <div className="relative flex-shrink-0">
                      <div className="relative w-full max-w-[224px]">
                        {/* Image Glow */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#26C6DA]/30 to-[#FF6F00]/30 rounded-2xl blur-xl" />
                        
                        <div className="relative rounded-2xl overflow-hidden border-2 border-[#26C6DA]/30 bg-[#1A287E]/50 backdrop-blur-xl p-4">
                          <img
                            src={item.image}
                            alt="criteria icon"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>

                      {/* Floating Icon Badge */}
                      <div className="absolute -top-3 -right-3 w-14 h-14 rounded-xl bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-2xl shadow-lg shadow-[#26C6DA]/50 border-2 border-white/20">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#26C6DA] mb-4">
                        {item.heading}
                      </h3>
                      
                      <ul className="space-y-3">
                        {item.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 text-base md:text-lg leading-relaxed">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-xs font-bold mt-1 shadow-lg shadow-[#26C6DA]/50">
                              {i + 1}
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF6F00] to-[#FF8A50] rounded-full blur-xl opacity-75" />
            <a
              href="/contact"
              className="relative inline-block px-8 py-4 bg-gradient-to-r from-[#FF6F00] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6F00] text-white font-bold rounded-full text-lg shadow-2xl shadow-[#FF6F00]/50 transition-all duration-300 transform hover:scale-105"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}