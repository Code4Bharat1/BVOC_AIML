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
      color: "#007BFF"
    },
    {
      image: "/TopBenifits/topbenefits2.svg",
      icon: <Globe />,
      heading: "Work on International Projects",
      description: "Collaborate with global industry leaders and gain experience that sets you apart in the international job market.",
      color: "#FF7F00"
    },
    {
      image: "/TopBenifits/topbenefits3.svg",
      icon: <UserCheck />,
      heading: "Built-in Internships",
      description: "Apply what you learn with real-world internships and projects—boosting your resume and skills while still studying.",
      color: "#007BFF"
    },
    {
      image: "/TopBenifits/topbenefits5.png",
      icon: <DollarSign />,
      heading: "Earn While You Learn",
      description: "Leverage valuable internship opportunities to gain hands-on experience while earning, building both your skills and financial independence.",
      color: "#FF7F00"
    },
    {
      image: "/TopBenifits/topbenefits4.svg",
      icon: <Award />,
      heading: "Recognized by UGC & NSQF",
      description: "Your qualifications are UGC-approved and NSQF-certified, opening doors to global opportunities.",
      color: "#007BFF"
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
      {/* Subtle Background */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 123, 255, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 127, 0, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .benefit-card {
          animation: fadeIn 0.6s ease-out;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: scale(1.05);
        }

        .accordion-item {
          transition: all 0.3s ease;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Box */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full backdrop-blur-sm shadow-sm"
            style={{
              backgroundColor: 'rgba(0, 123, 255, 0.1)',
              border: '1px solid rgba(0, 123, 255, 0.2)'
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: '#007BFF' }} />
            <span 
              className="text-xs font-bold tracking-[0.12em] uppercase"
              style={{ 
                color: '#007BFF',
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
              }}
            >
              Career Benefits
            </span>
            <Sparkles className="w-4 h-4" style={{ color: '#007BFF' }} />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div 
              className="absolute -inset-1 rounded-3xl blur-lg opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.3), rgba(255, 127, 0, 0.3))'
              }}
            />
            <div 
              className="relative bg-white backdrop-blur-sm px-8 py-6 rounded-3xl border shadow-lg"
              style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
            >
              <h1 
                className="text-3xl md:text-4xl font-bold" 
                style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
              >
                <span style={{ color: '#007BFF' }}>Top Benefits:</span>{" "}
                <span style={{ color: '#2C2C2C' }}>The Fast-Track to Your Career</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Desktop Cards */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="benefit-card relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="absolute -inset-1 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"
                style={{
                  background: `linear-gradient(135deg, ${card.color}80, ${card.color}40)`
                }}
              />
              
              <div 
                className="relative h-full rounded-3xl overflow-hidden bg-white backdrop-blur-sm border shadow-lg"
                style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
              >
                {/* Corner Decorations */}
                <div 
                  className="absolute top-0 left-0 w-16 h-16 border-t border-l rounded-tl-3xl z-10"
                  style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
                />
                <div 
                  className="absolute bottom-0 right-0 w-16 h-16 border-b border-r rounded-br-3xl z-10"
                  style={{ borderColor: 'rgba(255, 127, 0, 0.2)' }}
                />

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, white, rgba(255, 255, 255, 0.5), transparent)' }}
                  />
                  
                  {/* Floating Icon Badge */}
                  <div 
                    className="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
                    style={{
                      background: `linear-gradient(135deg, ${card.color}, ${card.color}dd)`
                    }}
                  >
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-3" 
                    style={{ 
                      fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                      color: '#2C2C2C'
                    }}
                  >
                    {card.heading}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed" 
                    style={{ 
                      fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                      color: 'rgba(44, 44, 44, 0.75)'
                    }}
                  >
                    {card.description}
                  </p>
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
                className="accordion-item relative overflow-hidden border backdrop-blur-sm"
                style={{
                  borderRadius: isOpen ? '1rem' : '9999px',
                  borderColor: isOpen ? 'rgba(0, 123, 255, 0.3)' : 'rgba(0, 123, 255, 0.2)',
                  backgroundColor: 'white',
                  boxShadow: isOpen ? '0 10px 30px rgba(0, 123, 255, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="relative flex items-center justify-between w-full px-6 py-4 font-bold"
                  style={{ 
                    fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                    color: '#2C2C2C'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-md"
                      style={{
                        background: `linear-gradient(135deg, ${card.color}, ${card.color}dd)`
                      }}
                    >
                      {card.icon}
                    </div>
                    <span className="text-left text-sm">{card.heading}</span>
                  </div>
                  <ChevronDown
                    className="w-5 h-5 transition-transform duration-300"
                    style={{ 
                      color: card.color,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </button>
                
                {isOpen && (
                  <div className="bg-white px-6 pb-6">
                    <div 
                      className="relative rounded-xl overflow-hidden mb-4 border"
                      style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
                    >
                      <img
                        src={card.image}
                        alt={card.heading}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    <p 
                      className="text-sm leading-relaxed" 
                      style={{ 
                        fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                        color: 'rgba(44, 44, 44, 0.75)'
                      }}
                    >
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
            <div 
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.3), rgba(255, 127, 0, 0.3))'
              }}
            />
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
          <div 
            className="absolute -inset-2 rounded-full blur-xl"
            style={{ backgroundColor: 'rgba(0, 123, 255, 0.2)' }}
          />
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
          <div 
            className="absolute -inset-2 rounded-full blur-xl"
            style={{ backgroundColor: 'rgba(255, 127, 0, 0.2)' }}
          />
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
          <div 
            className="absolute -inset-2 rounded-full blur-xl"
            style={{ backgroundColor: 'rgba(0, 123, 255, 0.2)' }}
          />
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
          <div 
            className="absolute -inset-2 rounded-full blur-xl"
            style={{ backgroundColor: 'rgba(255, 127, 0, 0.2)' }}
          />
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
