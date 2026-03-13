"use client";

import { useState } from "react";
import { Award, BookOpen, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBrain, FaPalette } from "react-icons/fa";

const degrees = [
  {
    id: 1,
    name: "Bachelor of Data Science and Artificial Intelligence",
    shortName: "Data Science & AI",
    icon: FaBrain,
  },
  {
    id: 2,
    name: "Bachelor of Multimedia and Animation",
    shortName: "Multimedia & Animation",
    icon: FaPalette,
  },
];

const HubHero = () => {
  const [activeDegree, setActiveDegree] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ================= MOBILE HERO ================= */}
      <div className="lg:hidden relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] via-[#252525] to-[#1a1a1a]">

        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/homevideo/hero-thumbnail.jpg"
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/homevideo/hero.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/90 via-[#252525]/85 to-[#1a1a1a]/90"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Glow */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#007BFF]/10 blur-[120px] rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="relative w-full min-h-[32rem] flex items-center justify-center text-center px-5 py-12">
          <div className="w-full">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#007BFF]/15 border border-[#007BFF]/30 backdrop-blur-sm">
                <GraduationCap className="w-4 h-4 text-[#007BFF]" />
                <span className="text-sm font-semibold text-[#80C8F7]">
                  3 Year Degree Programs
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-10 text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Bachelor's Degree in
            </motion.h1>

            {/* Degree Selector */}
            <div className="space-y-3 max-w-sm mx-auto">
              {degrees.map((degree, index) => {
                const Icon = degree.icon;
                const isActive = activeDegree === index;

                return (
                  <motion.button
                    key={degree.id}
                    aria-label={degree.name}
                    onClick={() => setActiveDegree(index)}
                    className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? "border-[#007BFF] bg-[#007BFF]/8 shadow-2xl shadow-[#007BFF]/25"
                        : "border-[#333]/50 bg-[#1a1a1a]/60 hover:border-[#444]/70 backdrop-blur-sm"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl ${
                          isActive ? "bg-[#007BFF]" : "bg-[#2a2a2a]"
                        }`}
                      >
                        <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-[#6B9BD1]"}`} />
                      </div>

                      <span className={`font-semibold text-base ${isActive ? "text-white" : "text-[#9CB4D8]"}`}>
                        {degree.shortName}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* ================= DESKTOP HERO ================= */}
      <div className="hidden lg:flex relative w-full min-h-screen items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]">

        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/homevideo/hero-thumbnail.jpg"
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/homevideo/hero.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#252525]/60 to-[#1a1a1a]/80"></div>
        </div>

        {/* Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#007BFF]/8 blur-[200px] rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="text-center max-w-7xl z-10">

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Bachelor's Degree in
          </motion.h1>

          {/* Desktop Degree Cards */}
          <div className="flex justify-center gap-5 max-w-6xl mx-auto px-4">
            {degrees.map((degree, index) => {
              const Icon = degree.icon;
              const isActive = activeDegree === index;

              return (
                <motion.button
                  key={degree.id}
                  aria-label={degree.name}
                  onClick={() => setActiveDegree(index)}
                  className={`flex-1 p-8 rounded-3xl border-2 backdrop-blur-sm ${
                    isActive
                      ? "border-[#007BFF] bg-[#007BFF]/10 shadow-2xl shadow-[#007BFF]/30"
                      : "border-[#333]/60 bg-[#1a1a1a]/70 hover:border-[#444]"
                  }`}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex flex-col items-center gap-5">

                    <motion.div
                      className={`p-5 rounded-2xl ${
                        isActive ? "bg-[#007BFF]" : "bg-[#2a2a2a]"
                      }`}
                      animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icon className={`w-10 h-10 ${isActive ? "text-white" : "text-[#6B9BD1]"}`} />
                    </motion.div>

                    <AnimatePresence mode="wait">
                      <motion.span
                        key={degree.name}
                        className={`text-xl font-bold ${
                          isActive ? "text-white" : "text-[#9CB4D8]"
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {degree.name}
                      </motion.span>
                    </AnimatePresence>

                  </div>
                </motion.button>
              );
            })}
          </div>

        </div>
      </div>

      {/* ================= ACCREDITATION ================= */}
      <div className="relative bg-white py-10 border-t border-slate-100">

        <div className="container mx-auto px-6 text-center">

          <p className="text-3xl md:text-4xl mx-auto max-w-4xl font-bold text-slate-800 leading-relaxed mb-8">
            <span className="text-[#007BFF]">Earn a prestigious degree</span>
            <br />
            from one of India's top 2%
            <br />
            <span className="bg-gradient-to-r from-[#007BFF] via-[#FF7F00] to-[#FFCD00] bg-clip-text text-transparent">
              Ranking University
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {[
              { icon: <Award className="w-5 h-5" />, text: "NAAC A+ Accredited" },
              { icon: <BookOpen className="w-5 h-5" />, text: "UGC Recognized" },
              { icon: <GraduationCap className="w-5 h-5" />, text: "Industry-Ready" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                {stat.icon}
                <span className="text-base text-slate-700 font-semibold">
                  {stat.text}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default HubHero;