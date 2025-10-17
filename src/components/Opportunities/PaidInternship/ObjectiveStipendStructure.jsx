"use client";
import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const ObjectiveStipendStructure = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] flex flex-col items-center justify-center p-4 md:p-10 space-y-20 overflow-hidden relative">
      {/* Sparkle Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-2 h-2 rounded-full animate-pulse"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              backgroundColor: star.color,
              opacity: 0.7,
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

      {/* ===== HEADING ===== */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white drop-shadow-lg">
          Paid{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Internship
          </span>{" "}
          Policy (From{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
            2nd Year
          </span>{" "}
          Onwards)
        </h2>
      </div>

      {/* ===== OBJECTIVE SECTION ===== */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* OBJECTIVE Circle */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full border-[3px] border-cyan-400 bg-gradient-to-br from-cyan-600/20 to-purple-700/20 flex items-center justify-center backdrop-blur-sm">
            <span className="text-white text-xl md:text-3xl font-bold text-center">
              OBJECTIVE
            </span>
          </div>
        </div>

        {/* OBJECTIVE Details */}
        <div className="flex flex-col gap-8 mt-0 lg:mt-0">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 text-white font-bold text-xl md:text-2xl border-[2px] border-orange-300 flex items-center justify-center shadow-lg shadow-orange-500/50 flex-shrink-0">
              1
            </div>
            <div className="rounded-3xl border-2 border-cyan-400/60 bg-gradient-to-r from-cyan-600/10 to-purple-700/10 text-white p-4 md:p-6 w-[300px] md:w-[400px] text-center font-semibold text-base md:text-lg backdrop-blur-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
              To provide financial assistance through paid internships.
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 md:pl-20">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 text-white font-bold text-xl md:text-2xl border-[2px] border-orange-300 flex items-center justify-center shadow-lg shadow-orange-500/50 flex-shrink-0">
              2
            </div>
            <div className="rounded-3xl border-2 border-cyan-400/60 bg-gradient-to-r from-cyan-600/10 to-purple-700/10 text-white p-4 md:p-6 w-[300px] md:w-[400px] text-center font-semibold text-base md:text-lg backdrop-blur-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
              To bridge the gap between academic learning and industry
              requirements.
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 text-white font-bold text-xl md:text-2xl border-[2px] border-orange-300 flex items-center justify-center shadow-lg shadow-orange-500/50 flex-shrink-0">
              3
            </div>
            <div className="rounded-3xl border-2 border-cyan-400/60 bg-gradient-to-r from-cyan-600/10 to-purple-700/10 text-white p-4 md:p-6 w-[300px] md:w-[400px] text-center font-semibold text-base md:text-lg backdrop-blur-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
              To help students contribute partially towards their own
              educational expenses.
            </div>
          </div>
        </div>
      </div>

      {/* ===== STIPEND STRUCTURE SECTION ===== */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* Left Box */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-lg blur-lg opacity-60 group-hover:opacity-90 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-cyan-600 to-purple-700 text-white font-bold text-xl md:text-2xl px-6 py-10 rounded-lg border-2 border-cyan-300 text-center flex justify-center items-center lg:w-[230px] lg:h-[210px] shadow-xl backdrop-blur-sm hover:shadow-cyan-500/50 transition-shadow">
            Stipend <br /> Structure
          </div>
        </div>

        {/* Right Text Cards */}
        <div className="flex flex-col gap-6">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-orange-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-cyan-600/15 to-purple-700/15 text-white p-4 md:p-6 rounded-2xl border-2 border-cyan-400/70 w-[300px] md:w-[500px] text-center font-semibold text-sm md:text-base backdrop-blur-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all">
              Paid internships will be performance-based, with stipends ranging
              between ₹3,000 to ₹10,000 per month.
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-cyan-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-cyan-600/15 to-purple-700/15 text-white p-4 md:p-6 rounded-2xl border-2 border-orange-400/70 w-[300px] md:w-[500px] text-center font-semibold text-sm md:text-base backdrop-blur-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all">
              Stipend amounts are determined based on the student's skills,
              project involvement, work discipline, and mentor evaluations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveStipendStructure;