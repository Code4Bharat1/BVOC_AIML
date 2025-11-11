"use client";
import { Zap, Rocket, Target, Circle, Sparkles } from "lucide-react";

const DegreeComparisonTable = () => {
  return (
    <div className="relative min-h-screen bg-white py-20 px-4 overflow-hidden">
      {/* Floating Particles */}
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-blue-50/80 border border-blue-200/50 rounded-full backdrop-blur-sm shadow-sm">
            <Sparkles className="text-blue-600 w-4 h-4" />
            <span className="text-blue-700 text-xs font-semibold tracking-[0.12em] uppercase">Compare & Decide</span>
            <Sparkles className="text-blue-600 w-4 h-4" />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight relative" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
            <span className="text-blue-600">B.Voc</span> vs{" "}
            <span className="text-blue-600">Traditional Degrees</span>
            <br />
            <span className="text-slate-900">The Clear Choice for Your Future</span>
          </h2>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-600 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
              <span className="font-semibold text-slate-900">
                Choosing the right course is one of the most important decisions you'll make. Let's break it down:
              </span>
            </p>
            <p className="text-slate-600 text-lg leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
              While traditional degrees like{" "}
              <span className="text-blue-700 font-semibold">B.Tech</span> and{" "}
              <span className="text-blue-700 font-semibold">B.Sc</span> offer a solid foundation,{" "}
              <span className="text-blue-700 font-semibold">B.Voc</span> is the{" "}
              <span className="text-blue-700 font-semibold">fast track to industry-ready skills</span>.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
            <Circle className="text-blue-600 w-2 h-2 fill-current" />
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full" />
          </div>
        </div>

        {/* Key Points Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Target className="w-12 h-12 text-blue-600" />,
              title: "Industry-Ready Skills",
              desc: "B.Voc focuses on practical, job-ready skills from day one"
            },
            {
              icon: <Zap className="w-12 h-12 text-indigo-600" />,
              title: "Faster Entry to Workforce",
              desc: "Graduate and start earning sooner than traditional degrees"
            },
            {
              icon: <Rocket className="w-12 h-12 text-blue-600" />,
              title: "Modern Curriculum",
              desc: "Stay ahead with cutting-edge industry-aligned courses"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="relative group hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
              <div className="relative bg-white backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-slate-900 font-bold text-lg mb-2" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>{item.title}</h3>
                <p className="text-slate-600 text-sm" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DegreeComparisonTable;