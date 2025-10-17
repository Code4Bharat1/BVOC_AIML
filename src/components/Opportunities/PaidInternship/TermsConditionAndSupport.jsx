"use client";
import React, { useState, useEffect } from "react";
import { FileCheck, MessageSquare, Heart, Users, BookOpen, Zap } from "lucide-react";

function TermsConditionAndSupport() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 20 }).map(() => ({
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

  const terms = [
    {
      id: 1,
      icon: Heart,
      content: "Internships are optional but highly encouraged for career growth.",
    },
    {
      id: 2,
      icon: Zap,
      content:
        "Students can pay part of their tuition fees using earnings from internships.",
    },
    {
      id: 3,
      icon: FileCheck,
      content:
        "Nexcore Alliance or partner organizations reserve the right to terminate an internship in case of misconduct or underperformance.",
    },
    {
      id: 4,
      icon: BookOpen,
      content:
        "Internships will not interfere with core academic schedules—flexibility will be ensured.",
    },
    {
      id: 5,
      icon: MessageSquare,
      content: "Selected students will be required to sign an Internship Agreement.",
    },
  ];

  const supportItems = [
    "Resume building and interview preparation.",
    "Identifying internship and placement opportunities.",
    "Providing mentorship for career development.",
  ];

  return (
    <>
      {/* =============== Terms & Condition Section ================== */}
      <div className="w-full bg-gradient-to-b from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] py-12 px-4 min-h-screen relative overflow-hidden">
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

        <div className="relative z-10">
          {/* Header */}
          <div className="mx-auto w-max mb-14">
            <div className="rounded-2xl bg-gradient-to-r from-cyan-600 to-purple-700 px-6 md:px-12 py-4 md:py-6 border-2 border-cyan-400/80 shadow-lg shadow-cyan-500/50">
              <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-bold text-center flex items-center gap-3">
                <FileCheck className="w-8 h-8" />
                Terms and Conditions
              </h2>
            </div>
          </div>

          {/* Cards */}
          <div className="max-w-5xl mx-auto space-y-8">
            {terms.map((term) => (
              <div
                key={term.id}
                className="group relative flex items-center gap-6 lg:gap-8"
              >
                {/* Icon Box */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 to-orange-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg border-2 border-orange-300 flex items-center justify-center shadow-lg shadow-orange-500/50">
                      <term.icon className="w-8 h-8 lg:w-12 lg:h-12 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-600/20 to-purple-700/20 border-2 border-cyan-400/60 backdrop-blur-sm p-6 lg:p-8 hover:shadow-lg hover:shadow-cyan-500/40 transition-all">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <p className="relative text-white text-base lg:text-2xl font-bold leading-relaxed">
                      {term.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =============== Support and Guidance Section ================ */}
      <div className="w-full bg-gradient-to-t from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] py-10 relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star) => (
            <div
              key={`support-${star.id}`}
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                backgroundColor: star.color,
                opacity: 0.4,
                animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto w-max mb-14">
            <div className="rounded-2xl bg-gradient-to-r from-purple-700 to-cyan-600 px-6 md:px-12 py-4 md:py-6 border-2 border-cyan-400/80 shadow-lg shadow-cyan-500/50">
              <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-bold text-center flex items-center gap-3">
                <Users className="w-8 h-8" />
                Support & Guidance
              </h2>
            </div>
          </div>

          {/* Content: Grid Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-4 lg:px-0">
            {/* Left: Visual Element */}
            <div className="lg:w-1/2 flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-orange-500/30 rounded-2xl blur-xl opacity-60"></div>
                <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-purple-700/20 border-2 border-cyan-400/70 backdrop-blur-sm flex items-center justify-center p-8">
                  <div className="text-center">
                    <MessageSquare className="w-24 h-24 mx-auto text-orange-400 mb-4 animate-pulse" />
                    <p className="text-cyan-300 font-semibold text-lg">
                      Expert Support & Career Growth
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: List */}
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <h3 className="text-white text-xl lg:text-2xl font-bold mb-8 text-center lg:text-left">
                  The Internship & Placement Cell will assist students in:
                </h3>
                <div className="space-y-4">
                  {supportItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 to-purple-700/10 border-l-4 border-orange-400 hover:border-orange-300 hover:from-cyan-600/20 hover:to-purple-700/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all backdrop-blur-sm"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 text-white font-bold">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold text-base lg:text-lg leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsConditionAndSupport;