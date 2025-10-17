"use client";
import React, { useState, useEffect } from "react";
import { CheckCheck, TrendingUp, Users } from "lucide-react";

const SelectionAndPerformanceCards = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 15 }).map(() => ({
        id: Math.random(),
        top: Math.random() * 100,
        left: Math.random() * 100,
        color: ["#00d4ff", "#ff8c00", "#b847ff", "#ffd700"][
          Math.floor(Math.random() * 4)
        ],
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 1,
      }));
    };
    setStars(generateStars());
  }, []);

  const selectionCards = [
    {
      title: "1. Selection Process",
      description:
        "Evaluated by faculty mentors based on academic performance, participation in labs, and behavioral feedback.",
      icon: Users,
    },
    {
      title: "2. Skill Assessment",
      description:
        "Candidates are evaluated through coding tasks, problem-solving ability, and domain knowledge.",
      icon: CheckCheck,
    },
    {
      title: "3. Interview & Project Mapping",
      description:
        "Shortlisted candidates will be matched with available internships based on their interest, skill sets, and project requirements.",
      icon: TrendingUp,
    },
  ];

  const performanceCards = [
    {
      title: "Monthly Review",
      description:
        "Interns will be reviewed monthly by mentors or industry supervisors.",
    },
    {
      title: "Continuation Criteria",
      description:
        "Continuation and stipend increase are subject to: 1. Timely completion of tasks. 2. Quality of work and initiative.",
    },
    {
      title: "Soft Skills",
      description:
        "Soft skills such as communication, punctuality, and collaboration.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] relative overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-2 h-2 rounded-full animate-pulse"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              backgroundColor: star.color,
              opacity: 0.5,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          >
            <style>{`
              @keyframes twinkle {
                0%, 100% { opacity: 0.3; transform: scale(0.5); }
                50% { opacity: 1; transform: scale(1); }
              }
            `}</style>
          </div>
        ))}
      </div>

      {/* ================ Selection Process ================ */}
      <div className="w-full py-10 mt-10 relative z-10">
        <div className="mx-auto w-max rounded-2xl bg-gradient-to-r from-cyan-600 to-purple-700 px-6 md:px-12 py-4 md:py-6 border-2 border-cyan-400/80 shadow-lg shadow-cyan-500/50 mb-10">
          <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-bold text-center flex items-center gap-3">
            <CheckCheck className="w-8 h-8" />
            Selection Process
          </h2>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-6 items-center lg:hidden px-4">
          {selectionCards.map((card, index) => (
            <div
              key={`mobile-selection-${index}`}
              className="group w-full max-w-[480px]"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-600/20 to-purple-700/20 border-2 border-cyan-400/60 backdrop-blur-sm p-6 hover:shadow-lg hover:shadow-cyan-500/40 transition-all">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/50">
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-cyan-100">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="flex flex-col gap-8 items-center">
            {selectionCards.map((card, index) => (
              <div
                key={`desktop-selection-${index}`}
                className="group w-full max-w-4xl"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-600/20 to-purple-700/20 border-2 border-cyan-400/60 backdrop-blur-sm p-8 hover:shadow-lg hover:shadow-cyan-500/40 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/50">
                      <card.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-base lg:text-lg font-semibold text-cyan-100 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================ Performance Review & Continuation ================ */}
      <div className="w-full py-10 relative z-10">
        {/* Heading */}
        <div className="mx-auto w-max mb-12">
          <div className="rounded-2xl bg-gradient-to-r from-purple-700 to-cyan-600 px-6 md:px-12 py-4 md:py-6 border-2 border-cyan-400/80 shadow-lg shadow-cyan-500/50">
            <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-bold text-center flex items-center gap-3">
              <TrendingUp className="w-8 h-8" />
              Performance Review & Continuation
            </h2>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-6 items-center lg:hidden px-4">
          {performanceCards.map((card, index) => (
            <div
              key={`mobile-performance-${index}`}
              className="group w-full max-w-[300px]"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-600/20 to-purple-700/20 border-2 border-orange-400/70 backdrop-blur-sm p-6 hover:shadow-lg hover:shadow-orange-500/40 transition-all min-h-[280px] flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/50">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-3">
                    {card.title}
                  </h4>
                  <p className="text-sm md:text-base font-semibold text-cyan-100 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex justify-center gap-8 px-4">
          {performanceCards.map((card, index) => (
            <div
              key={`desktop-performance-${index}`}
              className="group w-full max-w-[320px]"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-600/20 to-purple-700/20 border-2 border-orange-400/70 backdrop-blur-sm p-6 hover:shadow-lg hover:shadow-orange-500/40 transition-all h-full flex flex-col justify-center min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/50">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3">
                    {card.title}
                  </h4>
                  <p className="text-base font-semibold text-cyan-100 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectionAndPerformanceCards;