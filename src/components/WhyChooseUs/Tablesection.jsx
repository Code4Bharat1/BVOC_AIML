"use client";
import { FaBolt, FaRocket, FaBullseye, FaCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const DegreeComparisonTable = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] py-20 px-4 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const startY = Math.random() * 100;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#26C6DA] rounded-full"
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
        className="absolute top-0 left-0 w-96 h-96 bg-[#26C6DA]/20 rounded-full blur-[150px]"
        style={{
          animation: 'moveOrb1 20s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6F00]/20 rounded-full blur-[150px]"
        style={{
          animation: 'moveOrb2 25s ease-in-out infinite'
        }}
      />

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) opacity(0);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
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
            transform: translate(50px, -50px) scale(1.3);
          }
          50% {
            transform: translate(30px, 30px) scale(1);
          }
          75% {
            transform: translate(-30px, -30px) scale(1.4);
          }
        }

        @keyframes moveOrb2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-50px, 50px) scale(1.4);
          }
          50% {
            transform: translate(-30px, -30px) scale(1);
          }
          75% {
            transform: translate(30px, 30px) scale(1.5);
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-[#26C6DA]/10 border-2 border-[#26C6DA]/30 rounded-full backdrop-blur-xl">
            <HiSparkles className="text-[#26C6DA]" />
            <span className="text-[#26C6DA] text-sm font-bold tracking-widest">COMPARE & DECIDE</span>
            <HiSparkles className="text-[#26C6DA]" />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight relative">
            <span className="text-[#26C6DA]">B.Voc</span> vs{" "}
            <span className="text-[#26C6DA]">Traditional Degrees</span>
            <br />
            <span className="text-white">The Clear Choice for Your Future</span>
          </h2>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              <span className="font-semibold text-white">
                Choosing the right course is one of the most important decisions you'll make. Let's break it down:
              </span>
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              While traditional degrees like{" "}
              <span className="text-[#26C6DA] font-semibold">B.Tech</span> and{" "}
              <span className="text-[#26C6DA] font-semibold">B.Sc</span> offer a solid foundation,{" "}
              <span className="text-[#26C6DA] font-semibold">B.Voc</span> is the{" "}
              <span className="text-[#26C6DA] font-semibold">fast track to industry-ready skills</span>.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#26C6DA] to-transparent rounded-full animate-pulse" />
            <FaCircle className="text-[#26C6DA] text-xs animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#26C6DA] to-transparent rounded-full animate-pulse" />
          </div>
        </div>

        {/* Key Points Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaBullseye className="text-5xl text-[#26C6DA]" />,
              title: "Industry-Ready Skills",
              desc: "B.Voc focuses on practical, job-ready skills from day one"
            },
            {
              icon: <FaBolt className="text-5xl text-[#FF6F00]" />,
              title: "Faster Entry to Workforce",
              desc: "Graduate and start earning sooner than traditional degrees"
            },
            {
              icon: <FaRocket className="text-5xl text-[#26C6DA]" />,
              title: "Modern Curriculum",
              desc: "Stay ahead with cutting-edge industry-aligned courses"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="relative group hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#26C6DA] to-[#FF6F00] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
              <div className="relative bg-[#1A287E]/80 backdrop-blur-xl border-2 border-[#26C6DA]/30 rounded-2xl p-6 hover:border-[#26C6DA] transition-colors duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DegreeComparisonTable;