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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-blue-50/80 border border-blue-200/50 rounded-full backdrop-blur-sm shadow-sm">
            <Sparkles className="text-blue-600 w-4 h-4" />
            <span className="text-blue-700 text-xs font-semibold tracking-[0.12em] uppercase">Admission Policy</span>
            <Sparkles className="text-blue-600 w-4 h-4" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
            Internal Selection Process Policy
            <br />
            <span className="text-blue-600">{"Bachelor's"}</span> in{" "}
            <span className="text-blue-600">Artificial Intelligence</span>
            <br />
            and <span className="text-blue-600">Machine Learning</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full" />
          </div>
        </div>

        {/* Policy Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
          {policyItems.map((item, index) => (
            <div
              key={item.id}
              className={
                hasOddItems && index === policyItems.length - 1
                  ? "lg:col-span-2 flex justify-center w-full"
                  : "w-full flex justify-center"
              }
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
        className={`relative bg-white backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 ${
          expanded ? "h-auto" : "h-[490px]"
        }`}
      >
        {/* Corner Decorations - Very Light */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-blue-200/40 rounded-tl-3xl z-10" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-indigo-200/40 rounded-br-3xl z-10" />

        <div className="p-6">
          {/* Header with Number Badge */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-sm">
              {item.id}
            </div>
            <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>{item.heading}</h3>
          </div>

          <div className="h-px bg-gradient-to-r from-blue-200 via-indigo-200 to-transparent mb-4" />

          {/* Image */}
          <div className="relative mb-4 rounded-2xl overflow-hidden border border-slate-200">
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
            
            {/* Check Badge */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-sm">
              <CheckCircle className="text-white w-5 h-5" />
            </div>
          </div>

          {/* Description */}
          <div className={`relative ${expanded ? "" : "max-h-28 overflow-hidden"}`}>
            <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
              {item.description}
            </p>

            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
            )}
          </div>

          {/* Read More Button */}
          <button
            onClick={toggleExpand}
            className="mt-4 flex items-center gap-2 text-blue-600 font-semibold hover:text-indigo-600 transition-colors group/btn"
            style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
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