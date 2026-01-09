"use client";

import React from "react";
import Image from "next/image";

// Cards data with Nexcore brand colors
const cardsData = [
  {
    title: "B.Voc Degree",
    duration: "(6 Semesters)",
    description:
      "Gain in-depth knowledge and industry-ready skills with a full 3-year vocational degree.",
    bgGradient: "linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(0, 123, 255, 0.05))",
    borderColor: "#007BFF",
    titleColor: "#007BFF",
  },
  {
    title: "Advanced Diploma",
    duration: "(4 Semesters)",
    description:
      "Build strong practical expertise and step confidently into specialized career roles.",
    bgGradient: "linear-gradient(135deg, rgba(255, 127, 0, 0.1), rgba(255, 127, 0, 0.05))",
    borderColor: "#FF7F00",
    titleColor: "#FF7F00",
  },
  {
    title: "Diploma",
    duration: "(2 Semesters)",
    description:
      "Kickstart your professional journey with core skills in just one year.",
    bgGradient: "linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(0, 123, 255, 0.05))",
    borderColor: "#007BFF",
    titleColor: "#007BFF",
  },
  {
    title: "Certificate",
    duration: "(1 Semester)",
    description:
      "Get a quick, focused introduction to essential vocational skills in just six months.",
    bgGradient: "linear-gradient(135deg, rgba(255, 127, 0, 0.1), rgba(255, 127, 0, 0.05))",
    borderColor: "#FF7F00",
    titleColor: "#FF7F00",
  },
];

const SemesterCards = () => {
  return (
    <div className="relative mt-1 w-full min-h-screen bg-white py-12 md:py-20 px-4 md:px-8 overflow-hidden">
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
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .logo-animate {
          animation: scaleIn 0.8s ease-out;
        }

        .title-animate {
          animation: slideDown 0.6s ease-out;
        }

        .card-1 {
          animation: fadeInUp 0.5s ease-out;
        }

        .card-2 {
          animation: fadeInUp 0.5s ease-out 0.15s backwards;
        }

        .card-3 {
          animation: fadeInUp 0.5s ease-out 0.3s backwards;
        }

        .card-4 {
          animation: fadeInUp 0.5s ease-out 0.45s backwards;
        }

        .bottom-text {
          animation: fadeIn 0.8s ease-out 0.6s backwards;
        }

        .program-card {
          transition: all 0.3s ease;
        }

        .program-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 123, 255, 0.2);
        }

        .card-overlay {
          transition: opacity 0.3s ease;
        }

        .program-card:hover .card-overlay {
          opacity: 1;
        }

        .corner-accent {
          transition: opacity 0.3s ease;
        }

        .program-card:hover .corner-accent {
          opacity: 1;
        }
      `}</style>

      {/* Nexcore Alliance Logo - Centered */}
      <div className="logo-animate relative z-30 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-8 md:mb-12">
        <Image
          src="/logo.png"
          alt="Nexcore Alliance"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Title */}
      <h2 
        className="title-animate text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 lg:mb-20 relative z-10"
        style={{ 
          fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
          color: '#2C2C2C'
        }}
      >
        Our{" "}
        <span 
          style={{
            background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 'bold'
          }}
        >
          Programs
        </span>
      </h2>

      {/* Cards Grid - Fully Responsive */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 max-w-7xl mx-auto">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`program-card card-${index + 1} rounded-3xl p-6 md:p-7 lg:p-8 border-2 shadow-lg relative overflow-hidden`}
            style={{
              background: card.bgGradient,
              borderColor: card.borderColor,
            }}
          >
            {/* Hover gradient overlay */}
            <div 
              className="card-overlay absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
                opacity: 0
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 space-y-3 md:space-y-4">
              <div className="flex flex-col gap-1">
                <h3 
                  className="text-xl md:text-2xl font-bold leading-tight"
                  style={{ 
                    color: card.titleColor,
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
                  }}
                >
                  {card.title}
                </h3>
                <p 
                  className="text-sm md:text-base font-semibold"
                  style={{ 
                    color: 'rgba(44, 44, 44, 0.7)',
                    fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
                  }}
                >
                  {card.duration}
                </p>
              </div>
              <p 
                className="text-sm md:text-base leading-relaxed"
                style={{ 
                  color: 'rgba(44, 44, 44, 0.75)',
                  fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
                }}
              >
                {card.description}
              </p>
            </div>

            {/* Decorative corner accent */}
            <div 
              className="corner-accent absolute top-0 right-0 w-20 h-20 rounded-bl-full"
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                opacity: 0
              }}
            />
          </div>
        ))}
      </div>

      {/* Bottom decorative text */}
      <div 
        className="bottom-text text-center mt-12 md:mt-16 text-sm md:text-base relative z-10"
        style={{ 
          color: 'rgba(44, 44, 44, 0.6)',
          fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
        }}
      >
        <p>Choose the path that fits your career goals</p>
      </div>
    </div>
  );
};

export default SemesterCards;
