"use client";

import { useState } from "react";
import { FaCheckCircle, FaRocket, FaGraduationCap, FaBrain, FaChartLine } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { MdScience } from "react-icons/md";

const WhyChooseBVoc = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] py-20 px-4 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HiSparkles className="absolute top-10 left-10 text-cyan-400 text-3xl animate-pulse" />
        <HiSparkles className="absolute top-32 right-20 text-orange-400 text-2xl animate-pulse delay-300" />
        <HiSparkles className="absolute bottom-32 left-1/4 text-purple-400 text-4xl animate-pulse delay-700" />
        <HiSparkles className="absolute bottom-20 right-1/3 text-yellow-400 text-2xl animate-pulse delay-1000" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-full">
            <HiSparkles className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-bold tracking-widest">YOUR FUTURE STARTS HERE</span>
            <HiSparkles className="text-cyan-400" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 relative">
            <span className="text-white">Why Choose </span>
            <span className="text-cyan-400">B.Voc</span>
            <span className="text-orange-500">?</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Image Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse" />
            
            <div className="relative h-full rounded-3xl overflow-hidden bg-[#1a2847] border-2 border-cyan-500/50">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-3xl z-10" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/70 rounded-br-3xl z-10" />

              <div className="relative h-full p-8">
                {/* Image Container */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6 border-2 border-cyan-500/30">
                  <img
                    src="/bvoc-image.png"
                    alt="B.Voc illustration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2847]/80 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-cyan-500/20 backdrop-blur-md border-2 border-cyan-500/40 rounded-full">
                    <span className="text-xs font-bold text-white tracking-wider flex items-center gap-2">
                      <FaRocket className="text-cyan-400" />
                      CAREER ACCELERATOR
                    </span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "3x", label: "Faster Job Ready" },
                    { value: "95%", label: "Placement Rate" },
                    { value: "50+", label: "Industry Partners" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse" />
            
            <div className="relative h-full rounded-3xl overflow-hidden bg-[#1a2847] border-2 border-cyan-500/50 p-8">
              {/* Corner Decorations */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-500/70 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-purple-500/70 rounded-bl-3xl" />

              <div className="relative">
                {/* Fast Track Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                      <FaRocket className="text-white text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-cyan-400">
                      Fast-Track Your Career
                    </h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed pl-15">
                    Industry-driven curriculum, hands-on internships, and real-world projects get you job-ready quicker than traditional degrees.
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8" />

                {/* Comparison Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                      <FaChartLine className="text-white text-xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-cyan-400">
                      B.Voc vs. Traditional Degrees
                    </h2>
                  </div>
                </div>

                {/* Comparison Cards */}
                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: <FaGraduationCap className="text-xl" />,
                      title: "B.Tech/B.E",
                      desc: "Strong theory, but lacks job readiness"
                    },
                    {
                      icon: <MdScience className="text-xl" />,
                      title: "B.Sc",
                      desc: "Great for research, but not industry-focused"
                    },
                    {
                      icon: <FaBrain className="text-xl" />,
                      title: "B.Voc Advantage",
                      desc: "Lead in AI, ML, and Data Science"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`flex items-start gap-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                        hoveredCard === index
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-cyan-500/20 bg-cyan-500/5'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        hoveredCard === index
                          ? 'bg-gradient-to-br from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50'
                          : 'bg-cyan-500/20 text-cyan-400'
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                      {index === 2 && (
                        <FaCheckCircle className="text-green-400 text-xl ml-auto flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-500/30">
                  <p className="text-gray-300 leading-relaxed">
                    B.Voc equips you with the skills to excel in these fast-evolving fields and launch your career faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <FaRocket />, title: "Quick Launch", desc: "Start earning faster", color: "cyan" },
            { icon: <FaBrain />, title: "AI & ML Focus", desc: "Future-proof skills", color: "purple" },
            { icon: <FaGraduationCap />, title: "Industry Experts", desc: "Learn from the best", color: "orange" },
            { icon: <FaChartLine />, title: "Career Growth", desc: "Faster promotions", color: "cyan" }
          ].map((feature, index) => (
            <div key={index} className="relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
              <div className="relative bg-[#1a2847] border-2 border-cyan-500/30 rounded-2xl p-5 hover:border-cyan-500 transition-colors duration-300 text-center">
                <div className={`text-4xl mb-3 flex justify-center ${
                  feature.color === 'cyan' ? 'text-cyan-400' : 
                  feature.color === 'purple' ? 'text-purple-400' : 
                  'text-orange-400'
                }`}>{feature.icon}</div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseBVoc;