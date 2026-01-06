"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle, Sparkles } from "lucide-react";

const SelectionPolicy = () => {
  const policyItems = [
    {
      id: 1,
      heading: "1. Objective",
      image: "/SelectionPolicy/SelectionPolicy1.png",
      description: "To establish a transparent, fair, and merit-based internal selection process for admitting students into the B.Voc in AI and ML program, ensuring compliance with academic and government regulations.",
    },
    {
      id: 2,
      heading: "2. Application Submission",
      image: "/SelectionPolicy/SelectionPolicy2.png",
      description: "Candidates must submit a duly filled application form along with all required documents by the specified deadline. Incomplete applications or those without valid documents will not be considered.",
    },
    {
      id: 3,
      heading: "3. Verification of Eligibility",
      image: "/SelectionPolicy/SelectionPolicy3.png",
      description: "All applications will be screened for minimum eligibility criteria (educational qualification, minimum marks, age, etc.) as per the Admission Eligibility Criteria. Applications not meeting eligibility standards will be rejected outright",
    },
    {
      id: 4,
      heading: "4. Evaluation Criteria",
      image: "/SelectionPolicy/SelectionPolicy4.png",
      description: "Candidates who meet eligibility will be evaluated based on the following: Academic Performance: 10+2 marks percentage or equivalent (weightage 70%). Entrance Test (if applicable): A written or online test assessing basic knowledge related to Mathematics, Logical Reasoning, and English (weightage 20%). Personal Interview: To evaluate candidate's motivation, communication skills, and interest in AI & ML (weightage 10%). Note: The entrance test and interview may be waived off based on the merit of 10+2 scores or as per policy.",
    },
    {
      id: 5,
      heading: "5. Merit List Preparation",
      image: "/SelectionPolicy/SelectionPolicy5.png",
      description: "A consolidated score will be calculated based on the evaluation criteria. Candidates will be ranked according to their total scores. Separate merit lists will be prepared for General and Reserved category candidates.",
    },
    {
      id: 6,
      heading: "6. Selection and Admission Offer",
      image: "/SelectionPolicy/SelectionPolicy6.png",
      description: "To establish a transparent, fair, and merit-based internal selection process for admitting students into the B.Voc in AI and ML program, ensuring compliance with academic and government regulations.",
    },
    {
      id: 7,
      heading: "7. Waitlist and Vacancies",
      image: "/SelectionPolicy/SelectionPolicy7.png",
      description: "Candidates not initially selected may be placed on a waitlist. Waitlisted candidates will be offered admission if seats become available. The waitlist will be valid for the duration of the admission cycle only.",
    },
    {
      id: 8,
      heading: "8. Final Authority",
      image: "/SelectionPolicy/SelectionPolicy9.png",
      description: "The Admissions Committee reserves the right to modify, relax, or waive any clause of the selection policy in exceptional cases. All decisions of the Admissions Committee shall be final and binding.",
    },
  ];

  const hasOddItems = policyItems.length % 2 !== 0;

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
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10 mt-10">
        {/* Header */}
        <div className="text-center mb-14">
          {/* <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200/40 rounded-full">
            <Sparkles className="w-4 h-4" style={{ color: '#007BFF' }} />
            <span 
              className="text-xs font-semibold tracking-wider uppercase" 
              style={{ color: '#2C2C2C' }}
            >
              Admission Policy
            </span>
            <Sparkles className="w-4 h-4" style={{ color: '#FF7F00' }} />
          </div> */}

          <h1 
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight" 
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C'
            }}
          >
            <h2>
            Internal Selection Process Policy <span style={{ color: '#007BFF' }}>Bachelor's</span> in
              <br />
              <span style={{ color: '#007BFF' }}>AI & Machine Learning</span>, {" "}
              <span style={{ color: '#FF7F00' }}>Computer Science</span>, and {" "}
              <span style={{ color: '#007BFF' }}>Cybersecurity</span>
            </h2>
          </h1>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-0.5 w-16 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #007BFF, transparent)' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FF7F00' }} />
            <div className="h-0.5 w-16 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #FF7F00, transparent)' }} />
          </div>
        </div>

        {/* Policy Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
          {policyItems.map((item, index) => (
            <div
              key={item.id}
              className={
                hasOddItems && index === policyItems.length - 1
                  ? "lg:col-span-2 flex justify-center w-full"
                  : "w-full flex justify-center"
              }
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              <PolicyCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PolicyCard = ({ item, index }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative w-full max-w-md group">
      <div
        className={`relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 ${
          expanded ? "h-auto" : "h-[490px]"
        }`}
      >
        {/* Simplified Corner Decorations with Brand Colors */}
        <div 
          className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-2xl opacity-40 z-10"
          style={{ borderColor: index % 2 === 0 ? '#007BFF' : '#FF7F00' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-2xl opacity-40 z-10"
          style={{ borderColor: index % 2 === 0 ? '#FF7F00' : '#007BFF' }}
        />

        <div className="p-6">
          {/* Header with Number Badge - Brand Colors */}
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-sm"
              style={{
                background: `linear-gradient(135deg, #007BFF 0%, ${index % 2 === 0 ? '#0056b3' : '#FF7F00'} 100%)`
              }}
            >
              {item.id}
            </div>
            <h3 
              className="text-lg font-bold" 
              style={{ 
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                color: '#2C2C2C'
              }}
            >
              {item.heading}
            </h3>
          </div>

          <div 
            className="h-px mb-4"
            style={{
              background: `linear-gradient(to right, ${index % 2 === 0 ? '#007BFF' : '#FF7F00'}, transparent)`
            }}
          />

          {/* Image with Lazy Loading */}
          <div className="relative mb-4 rounded-xl overflow-hidden border border-slate-100">
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
            
            {/* Check Badge with Brand Color */}
            <div 
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
              style={{ backgroundColor: '#007BFF' }}
            >
              <CheckCircle className="text-white w-5 h-5" />
            </div>
          </div>

          {/* Description */}
          <div className={`relative ${expanded ? "" : "max-h-28 overflow-hidden"}`}>
            <p 
              className="text-sm leading-relaxed" 
              style={{ 
                fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                color: '#2C2C2C'
              }}
            >
              {item.description}
            </p>

            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
            )}
          </div>

          {/* Read More Button - Brand Color */}
          <button
            onClick={toggleExpand}
            className="mt-4 flex items-center gap-2 font-semibold transition-all group/btn"
            style={{ 
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: '#007BFF'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FF7F00'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#007BFF'}
          >
            {expanded ? (
              <>
                Read less
                <ChevronUp className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                Read more
                <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionPolicy;
