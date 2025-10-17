"use client";
import { HiSparkles } from "react-icons/hi";
import { FaAward, FaCertificate, FaGraduationCap } from "react-icons/fa";

const HubHero = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile Hero Section */}
      <div className="lg:hidden relative overflow-hidden bg-gradient-to-br from-[#0f2847] via-[#1a3a5c] to-[#2d1b69]">
        {/* Background Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <HiSparkles className="absolute top-10 left-10 text-cyan-400 text-3xl animate-pulse" />
          <HiSparkles className="absolute top-20 right-16 text-orange-400 text-2xl animate-pulse delay-300" />
          <HiSparkles className="absolute bottom-20 left-20 text-purple-400 text-4xl animate-pulse delay-700" />
          <HiSparkles className="absolute bottom-10 right-1/3 text-yellow-400 text-2xl animate-pulse delay-1000" />
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 blur-[140px] rounded-full" />

        <div className="relative w-full min-h-[20rem] flex items-center justify-center text-center px-6 py-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-full backdrop-blur-sm">
              <HiSparkles className="text-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold tracking-widest">NEXT-GEN EDUCATION</span>
              <HiSparkles className="text-cyan-400" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              <span className="text-white">Bachelor's </span>
              {/* <span className="text-cyan-400">(BVOC)</span> */}
              <span className="text-white"> in</span>
              <br />
              <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,212,255,0.6)]">Machine Learning</span>
              <span className="text-white"> and</span>
              <br />
              <span className="text-orange-400 drop-shadow-[0_0_15px_rgba(255,107,53,0.6)]">Artificial Intelligence</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Desktop Hero Section */}
      <div className="hidden lg:flex relative w-full min-h-screen items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-[#0f2847] via-[#1a3a5c] to-[#2d1b69]">
        {/* Background Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <HiSparkles className="absolute top-20 left-20 text-cyan-400 text-4xl animate-pulse" />
          <HiSparkles className="absolute top-40 right-32 text-orange-400 text-3xl animate-pulse delay-300" />
          <HiSparkles className="absolute bottom-40 left-1/4 text-purple-400 text-5xl animate-pulse delay-700" />
          <HiSparkles className="absolute bottom-32 right-1/3 text-yellow-400 text-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
          <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-500" />
        </div>

        {/* Glowing Background Elements */}
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/20 blur-[200px] rounded-full" />
        <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[250px] rounded-full" />

        <div className="text-center max-w-6xl z-10">
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-3 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-full backdrop-blur-sm">
            <HiSparkles className="text-cyan-400 text-xl" />
            <span className="text-cyan-400 text-sm font-bold tracking-widest">NEXT-GENERATION EDUCATION</span>
            <HiSparkles className="text-cyan-400 text-xl" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-white">Bachelor's </span>
            {/* <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,212,255,0.6)]">(BVOC)</span> */}
            <span className="text-white"> in</span>
            <br />
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,212,255,0.6)]">Machine Learning</span>
            <span className="text-white"> and</span>
            <br />
            <span className="text-orange-400 drop-shadow-[0_0_20px_rgba(255,107,53,0.6)]">Artificial Intelligence</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
          </div>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="relative bg-gradient-to-br from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] py-16 overflow-hidden border-t border-cyan-500/20">
        {/* Soft Glow Background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Logos with Modern Cards */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:items-center lg:gap-12 mb-12">
            {/* Approved Logo */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300" />
              <div className="relative bg-[#1a2847] border-2 border-cyan-500/50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <img
                  src="/approved.png"
                  alt="Approved"
                  className="w-48 h-auto object-contain"
                />
              </div>
            </div>

            {/* NAAC & UGC Logos */}
            <div className="flex flex-row justify-center items-center gap-8">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300" />
                <div className="relative bg-[#1a2847] border-2 border-purple-500/50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <img
                    src="/naac-logo-1.png"
                    alt="NAAC A+ Grade"
                    className="w-48 h-auto object-contain"
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300" />
                <div className="relative bg-[#1a2847] border-2 border-orange-500/50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <img
                    src="/ugc-logo.png"
                    alt="UGC Entitled"
                    className="w-48 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-2xl md:text-3xl mx-auto max-w-4xl font-bold leading-relaxed mb-4">
              <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,212,255,0.6)]">
                Earn a prestigious AI & ML degree
              </span>
              <br />
              <span className="text-white">from one of India's top 2%</span>
              <br />
              <span className="text-orange-400 drop-shadow-[0_0_10px_rgba(255,107,53,0.6)]">
                Ranking University!
              </span>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                { icon: <FaAward />, text: "NAAC A+ Accredited", color: "cyan" },
                { icon: <FaCertificate />, text: "UGC Recognized", color: "purple" },
                { icon: <FaGraduationCap />, text: "Industry-Ready", color: "orange" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                  <div className={`text-xl ${
                    stat.color === 'cyan' ? 'text-cyan-400' :
                    stat.color === 'purple' ? 'text-purple-400' :
                    'text-orange-400'
                  }`}>
                    {stat.icon}
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubHero;