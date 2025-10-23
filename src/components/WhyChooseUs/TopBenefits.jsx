"use client";
import { useState, useEffect } from "react";
import { HiSparkles } from "react-icons/hi";
import { FaChevronDown, FaBriefcase, FaGlobe, FaUserTie, FaDollarSign, FaCertificate } from "react-icons/fa";

const CenteredBoxWithCards = () => {
  const cards = [
    {
      image: "/TopBenifits/topbenefits1.svg",
      icon: <FaBriefcase />,
      heading: "Job-Ready Skills from Day 1",
      description: "Get hands-on, industry-driven training from the start. Work on live projects and global challenges to gain the skills employers want.",
    },
    {
      image: "/TopBenifits/topbenefits2.svg",
      icon: <FaGlobe />,
      heading: "Work on International Projects",
      description: "Collaborate with global industry leaders and gain experience that sets you apart in the international job market.",
    },
    {
      image: "/TopBenifits/topbenefits3.svg",
      icon: <FaUserTie />,
      heading: "Built-in Internships",
      description: "Apply what you learn with real-world internships and projects—boosting your resume and skills while still studying.",
    },
    {
      image: "/TopBenifits/topbenefits5.png",
      icon: <FaDollarSign />,
      heading: "Earn While You Learn",
      description: "Leverage valuable internship opportunities to gain hands-on experience while earning, building both your skills and financial independence.",
    },
    {
      image: "/TopBenifits/topbenefits4.svg",
      icon: <FaCertificate />,
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Box */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-[#26C6DA]/10 border-2 border-[#26C6DA]/30 rounded-full backdrop-blur-xl">
            <HiSparkles className="text-[#26C6DA]" />
            <span className="text-[#26C6DA] text-sm font-bold tracking-widest">CAREER BENEFITS</span>
            <HiSparkles className="text-[#26C6DA]" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#26C6DA] via-[#FF6F00] to-[#26C6DA] rounded-3xl blur-xl opacity-60 animate-pulse" />
            <div className="relative bg-[#1A287E]/90 backdrop-blur-xl px-8 py-6 rounded-3xl border-2 border-[#26C6DA]/50">
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="text-[#26C6DA]">Top Benefits:</span>{" "}
                <span className="text-white">The Fast-Track to Your Career</span>
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
              <div className="absolute -inset-1 bg-gradient-to-r from-[#26C6DA] to-[#FF6F00] rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative h-full rounded-3xl overflow-hidden bg-[#1A287E]/80 backdrop-blur-xl border-2 border-[#26C6DA]/50">
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#26C6DA]/70 rounded-tl-3xl z-10" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FF6F00]/70 rounded-br-3xl z-10" />

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A287E] via-[#1A287E]/50 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white text-xl shadow-lg shadow-[#26C6DA]/50">
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{card.heading}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{card.description}</p>
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
                className={`relative overflow-hidden border-2 transition-all duration-300 backdrop-blur-xl ${
                  isOpen 
                    ? "rounded-2xl border-[#26C6DA]/50 bg-[#1A287E]/80" 
                    : "rounded-full border-[#26C6DA]/30 bg-[#1A287E]/80"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="relative flex items-center justify-between w-full px-6 py-4 font-semibold text-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-white shadow-lg shadow-[#26C6DA]/50">
                      {card.icon}
                    </div>
                    <span className="text-left">{card.heading}</span>
                  </div>
                  <FaChevronDown
                    className={`w-5 h-5 text-[#26C6DA] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                
                {isOpen && (
                  <div className="bg-[#1A287E]/80 px-6 pb-6">
                    <div className="relative rounded-xl overflow-hidden mb-4 border-2 border-[#26C6DA]/30">
                      <img
                        src={card.image}
                        alt={card.heading}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
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
            <div className="absolute -inset-4 bg-gradient-to-r from-[#26C6DA] to-[#FF6F00] rounded-3xl blur-2xl opacity-30" />
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
          <div className="absolute -inset-2 bg-[#26C6DA]/30 rounded-full blur-xl" />
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
          className="w-17 h-17"
        />
      </div>

      {/* Step 2 */}
      <div className="absolute top-[160px] right-4">
        <div className="relative">
          <div className="absolute -inset-2 bg-[#FF6F00]/30 rounded-full blur-xl" />
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
          className="w-17 h-17"
        />
      </div>

      {/* Step 3 */}
      <div className="absolute top-[350px] left-4">
        <div className="relative">
          <div className="absolute -inset-2 bg-[#26C6DA]/30 rounded-full blur-xl" />
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
          className="w-17 h-17"
        />
      </div>

      {/* Step 4 */}
      <div className="absolute top-[530px] right-4">
        <div className="relative">
          <div className="absolute -inset-2 bg-[#FF6F00]/30 rounded-full blur-xl" />
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