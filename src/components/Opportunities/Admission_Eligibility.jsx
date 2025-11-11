"use client";
import { GraduationCap, Percent, Calendar, Sparkles, ArrowRight } from "lucide-react";

export default function Admission_Eligibility() {
  const Admission_Eligibility = [
    {
      heading: "Educational Qualification :",
      description: [
        "Candidate must have passed 10+2 (Higher Secondary or equivalent) examination from a recognized board in any stream — Science, Commerce, Arts, or Vocational.",
        "Candidates with 2-year ITI certificate after 10th standard are also eligible.",
      ],
      image: "/eligibility_criteria/Criteria1.svg",
      icon: <GraduationCap />,
    },
    {
      heading: "Minimum Marks :",
      description: [
        "General category candidates should have at least 50% aggregate marks in 10+2.",
        "Reserved category candidates (SC/ST/OBC/PwD) are eligible with a minimum of 40% aggregate marks.",
      ],
      image: "/eligibility_criteria/Criteria2.svg",
      icon: <Percent />,
    },
    {
      heading: "Age Limit :",
      description: ["No upper age limit for admission."],
      image: "/eligibility_criteria/Criteria3.svg",
      icon: <Calendar />,
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-blue-50/80 border border-blue-200/50 rounded-full backdrop-blur-sm shadow-sm">
            <Sparkles className="text-blue-600 w-4 h-4" />
            <span className="text-blue-700 text-xs font-semibold tracking-[0.12em] uppercase">Eligibility Criteria</span>
            <Sparkles className="text-blue-600 w-4 h-4" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
            Admission Eligibility Criteria for{" "}
            <span className="text-blue-600">{"Bachelor's"}</span> in
            <br />
            <span className="text-blue-600">Artificial Intelligence</span> and{" "}
            <br />
            <span className="text-blue-600">Machine Learning</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full" />
          </div>
        </div>

        {/* Eligibility Cards */}
        <div className="flex flex-col items-center gap-8">
          {Admission_Eligibility.map((item, index) => (
            <div key={index} className="w-full group">
              <div className="relative bg-white backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Corner Decorations - Very Light */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-blue-200/40 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-indigo-200/40 rounded-br-3xl" />

                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                  {/* Image with Icon Badge */}
                  <div className="relative flex-shrink-0">
                    <div className="relative w-full max-w-[224px]">
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-4">
                        <img
                          src={item.image}
                          alt="criteria icon"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>

                    {/* Floating Icon Badge */}
                    <div className="absolute -top-3 -right-3 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md border-2 border-white">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                      {item.heading}
                    </h3>
                    
                    <ul className="space-y-3">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold mt-1 shadow-sm">
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
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold rounded-xl text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}