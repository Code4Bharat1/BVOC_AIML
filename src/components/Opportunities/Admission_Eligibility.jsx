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
    <div className="relative min-h-screen bg-white py-16 px-4 overflow-hidden">
      {/* Optimized Floating Particles - Reduced from 12 to 6 for better performance */}
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
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10 mt-10">
        {/* Header Section */}
        <div className="text-center mb-14">
          {/* <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200/40 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4" style={{ color: '#007BFF' }} />
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#2C2C2C' }}>
              Eligibility Criteria
            </span>
            <Sparkles className="w-4 h-4" style={{ color: '#FF7F00' }} />
          </div> */}

          <h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C'
            }}
          >
            <h2>
              Admission Eligibility Criteria for <span style={{ color: '#007BFF' }}>Bachelor's</span> in
              <br />
              <span style={{ color: '#007BFF' }}>AI & Machine Learning</span>, {" "}
              <span style={{ color: '#FF7F00' }}>Computer Science</span>, and {" "}
              <span style={{ color: '#007BFF' }}>Cybersecurity</span>
            </h2>
</h2>

            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-0.5 w-16 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #007BFF, transparent)' }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FF7F00' }} />
              <div className="h-0.5 w-16 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #FF7F00, transparent)' }} />
            </div>
        </div>

        {/* Eligibility Cards - Optimized */}
        <div className="flex flex-col items-center gap-6">
          {Admission_Eligibility.map((item, index) => (
            <div
              key={index}
              className="w-full group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`
              }}
            >
              <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Simplified Corner Decorations */}
                <div
                  className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-2xl opacity-40"
                  style={{ borderColor: index % 2 === 0 ? '#007BFF' : '#FF7F00' }}
                />
                <div
                  className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-2xl opacity-40"
                  style={{ borderColor: index % 2 === 0 ? '#FF7F00' : '#007BFF' }}
                />

                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                  {/* Image with Icon Badge */}
                  <div className="relative flex-shrink-0">
                    <div className="relative w-full max-w-[200px]">
                      <div className="relative rounded-xl overflow-hidden border border-slate-100 bg-gradient-to-br from-blue-50/30 to-orange-50/30 p-4">
                        <img
                          src={item.image}
                          alt="criteria icon"
                          className="w-full h-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Icon Badge with Brand Colors */}
                    <div
                      className="absolute -top-2 -right-2 w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-md border-2 border-white"
                      style={{
                        background: `linear-gradient(135deg, #007BFF 0%, ${index % 2 === 0 ? '#0056b3' : '#FF7F00'} 100%)`
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-4"
                      style={{
                        fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                        color: '#007BFF'
                      }}
                    >
                      {item.heading}
                    </h3>

                    <ul className="space-y-3">
                      {item.description.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-base md:text-lg leading-relaxed"
                          style={{
                            fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                            color: '#2C2C2C'
                          }}
                        >
                          <span
                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1"
                            style={{
                              background: `linear-gradient(135deg, #007BFF, ${i % 2 === 0 ? '#FF7F00' : '#0056b3'})`
                            }}
                          >
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

        {/* CTA Button with Brand Colors */}
        <div className="mt-14 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)'
            }}
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </div>
  );
}
