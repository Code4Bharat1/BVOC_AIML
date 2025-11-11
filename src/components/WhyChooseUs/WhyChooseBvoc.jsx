"use client";

import { useState } from "react";
import { CheckCircle, Rocket, GraduationCap, Brain, TrendingUp, Sparkles, Atom } from "lucide-react";

const WhyChooseBVoc = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

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
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-blue-50/80 border border-blue-200/50 rounded-full backdrop-blur-sm shadow-sm">
            <Sparkles className="text-blue-600 w-4 h-4" />
            <span className="text-blue-700 text-xs font-semibold tracking-[0.12em] uppercase">Your Future Starts Here</span>
            <Sparkles className="text-blue-600 w-4 h-4" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
            <span className="text-slate-900">Why Choose </span>
            <span className="text-blue-600">B.Voc</span>
            <span className="text-indigo-600">?</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Image Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000" />
            
            <div className="relative h-full rounded-3xl overflow-hidden bg-white backdrop-blur-sm border border-slate-200 shadow-xl">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-blue-200 rounded-tl-3xl z-10" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-indigo-200 rounded-br-3xl z-10" />

              <div className="relative h-full p-8">
                {/* Image Container */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6 border border-slate-200">
                  <img
                    src="/bvoc-image.png"
                    alt="B.Voc illustration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-blue-50/90 backdrop-blur-sm border border-blue-200/60 rounded-full shadow-sm">
                    <span className="text-xs font-semibold text-blue-700 tracking-wider flex items-center gap-2">
                      <Rocket className="text-blue-600 w-3.5 h-3.5" />
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
                    <div key={index} className="text-center p-3 rounded-xl bg-blue-50/80 border border-blue-200/50 backdrop-blur-sm shadow-sm">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 via-blue-200 to-indigo-200 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000" />
            
            <div className="relative h-full rounded-3xl overflow-hidden bg-white backdrop-blur-sm border border-slate-200 shadow-xl p-8">
              {/* Corner Decorations */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-blue-200 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-indigo-200 rounded-bl-3xl" />

              <div className="relative">
                {/* Fast Track Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                      <Rocket className="text-white w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-blue-600" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                      Fast-Track Your Career
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed pl-15" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
                    Industry-driven curriculum, hands-on internships, and real-world projects get you job-ready quicker than traditional degrees.
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8" />

                {/* Comparison Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                      <TrendingUp className="text-white w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-blue-600" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                      B.Voc vs. Traditional Degrees
                    </h2>
                  </div>
                </div>

                {/* Comparison Cards */}
                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: <GraduationCap className="w-5 h-5" />,
                      title: "B.Tech/B.E",
                      desc: "Strong theory, but lacks job readiness"
                    },
                    {
                      icon: <Atom className="w-5 h-5" />,
                      title: "B.Sc",
                      desc: "Great for research, but not industry-focused"
                    },
                    {
                      icon: <Brain className="w-5 h-5" />,
                      title: "B.Voc Advantage",
                      desc: "Lead in AI, ML, and Data Science"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 backdrop-blur-sm ${
                        hoveredCard === index
                          ? 'border-blue-300 bg-blue-50 shadow-md'
                          : 'border-slate-200 bg-white'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        hoveredCard === index
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md'
                          : 'bg-blue-50 text-blue-600'
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-slate-900 font-semibold mb-1" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>{item.title}</h3>
                        <p className="text-sm text-slate-600" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>{item.desc}</p>
                      </div>
                      {index === 2 && (
                        <CheckCircle className="text-green-500 w-5 h-5 ml-auto flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 backdrop-blur-sm">
                  <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
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
            { icon: <Rocket />, title: "Quick Launch", desc: "Start earning faster", color: "blue" },
            { icon: <Brain />, title: "AI & ML Focus", desc: "Future-proof skills", color: "indigo" },
            { icon: <GraduationCap />, title: "Industry Experts", desc: "Learn from the best", color: "blue" },
            { icon: <TrendingUp />, title: "Career Growth", desc: "Faster promotions", color: "indigo" }
          ].map((feature, index) => (
            <div key={index} className="relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
              <div className="relative bg-white backdrop-blur-sm border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
                <div className={`text-4xl mb-3 flex justify-center ${
                  feature.color === 'blue' ? 'text-blue-600' : 'text-indigo-600'
                }`}>{feature.icon}</div>
                <h3 className="text-slate-900 font-semibold mb-2" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>{feature.title}</h3>
                <p className="text-slate-600 text-sm" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseBVoc;