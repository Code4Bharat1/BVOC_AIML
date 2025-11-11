"use client";
import { useState, useEffect } from "react";
import { Sparkles, ChevronDown, Briefcase, Globe, UserCheck, DollarSign, Award } from "lucide-react";

const CenteredBoxWithCards = () => {
  const cards = [
    {
      image: "/TopBenifits/topbenefits1.svg",
      icon: <Briefcase />,
      heading: "Job-Ready Skills from Day 1",
      description: "Get hands-on, industry-driven training from the start. Work on live projects and global challenges to gain the skills employers want.",
    },
    {
      image: "/TopBenifits/topbenefits2.svg",
      icon: <Globe />,
      heading: "Work on International Projects",
      description: "Collaborate with global industry leaders and gain experience that sets you apart in the international job market.",
    },
    {
      image: "/TopBenifits/topbenefits3.svg",
      icon: <UserCheck />,
      heading: "Built-in Internships",
      description: "Apply what you learn with real-world internships and projects—boosting your resume and skills while still studying.",
    },
    {
      image: "/TopBenifits/topbenefits5.png",
      icon: <DollarSign />,
      heading: "Earn While You Learn",
      description: "Leverage valuable internship opportunities to gain hands-on experience while earning, building both your skills and financial independence.",
    },
    {
      image: "/TopBenifits/topbenefits4.svg",
      icon: <Award />,
      heading: "Recognized by UGC & NSQF",
      description: "Your qualifications are UGC-approved and NSQF-certified, opening doors to global opportunities.",
    },
  ];

  const [isClient, setIsClient] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!isClient) return null;

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
        {/* Title Box */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-blue-50/80 border border-blue-200/50 rounded-full backdrop-blur-sm shadow-sm">
            <Sparkles className="text-blue-600 w-4 h-4" />
            <span className="text-blue-700 text-xs font-semibold tracking-[0.12em] uppercase">Career Benefits</span>
            <Sparkles className="text-blue-600 w-4 h-4" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 rounded-3xl blur-lg opacity-30" />
            <div className="relative bg-white backdrop-blur-sm px-8 py-6 rounded-3xl border border-slate-200 shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                <span className="text-blue-600">Top Benefits:</span>{" "}
                <span className="text-slate-900">The Fast-Track to Your Career</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Desktop Cards */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group hover:scale-105 transition-all duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
              
              <div className="relative h-full rounded-3xl overflow-hidden bg-white backdrop-blur-sm border border-slate-200 shadow-lg">
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-blue-200 rounded-tl-3xl z-10" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-indigo-200 rounded-br-3xl z-10" />

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>{card.heading}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto md:hidden mb-16">
          {cards.map((card, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`relative overflow-hidden border transition-all duration-300 backdrop-blur-sm ${
                  isOpen 
                    ? "rounded-2xl border-blue-300 bg-white shadow-lg" 
                    : "rounded-full border-slate-200 bg-white shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="relative flex items-center justify-between w-full px-6 py-4 font-semibold text-slate-900"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                      {card.icon}
                    </div>
                    <span className="text-left text-sm" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>{card.heading}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                
                {isOpen && (
                  <div className="bg-white px-6 pb-6">
                    <div className="relative rounded-xl overflow-hidden mb-4 border border-slate-200">
                      <img
                        src={card.image}
                        alt={card.heading}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
                      {card.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Flow Chart */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl blur-2xl opacity-20" />
            <img
              src="/why_it_work_for_you.svg"
              alt="Why It Works for You"
              className="relative w-full max-w-2xl object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Mobile Flow Chart */}
        <div className="md:hidden">
          <MobileFlowChart />
        </div>
      </div>
    </div>
  );
};

const MobileFlowChart = () => (
  <div className="flex flex-col items-center px-4 py-0">
    <div className="w-full max-w-xs relative" style={{ height: '700px' }}>
      {/* Step 1 */}
      <div className="absolute top-0 left-4">
        <div className="relative">
          <div className="absolute -inset-2 bg-blue-100/40 rounded-full blur-xl" />
          <img
            src="/x3.svg"
            alt="Step 1"
            className="relative w-36 h-36"
          />
        </div>
      </div>

      <div className="absolute top-[90px] right-20">
        <img
          src="/purple-arrow-down.svg"
          alt="Arrow 1"
          className="w-17 h-17 opacity-60"
        />
      </div>

      {/* Step 2 */}
      <div className="absolute top-[160px] right-4">
        <div className="relative">
          <div className="absolute -inset-2 bg-indigo-100/40 rounded-full blur-xl" />
          <img
            src="/x1.svg"
            alt="Step 2"
            className="relative w-36 h-36"
          />
        </div>
      </div>

      <div className="absolute top-[310px] right-28">
        <img
          src="/purple-arrow-down2.svg"
          alt="Arrow 2"
          className="w-17 h-17 opacity-60"
        />
      </div>

      {/* Step 3 */}
      <div className="absolute top-[350px] left-4">
        <div className="relative">
          <div className="absolute -inset-2 bg-blue-100/40 rounded-full blur-xl" />
          <img
            src="/x2.svg"
            alt="Step 3"
            className="relative w-36 h-36"
          />
        </div>
      </div>

      <div className="absolute top-[460px] left-40">
        <img
          src="/purple-arrow-down3.svg"
          alt="Arrow 3"
          className="w-17 h-17 opacity-60"
        />
      </div>

      {/* Step 4 */}
      <div className="absolute top-[530px] right-4">
        <div className="relative">
          <div className="absolute -inset-2 bg-indigo-100/40 rounded-full blur-xl" />
          <img
            src="/x4.svg"
            alt="Step 4"
            className="relative w-36 h-36"
          />
        </div>
      </div>
    </div>
  </div>
);

export default CenteredBoxWithCards;