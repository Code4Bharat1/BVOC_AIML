"use client";
import { useEffect, useState, useRef } from "react";
import { FaPlay, FaPause, FaBolt, FaRocket, FaBullseye, FaCircle, FaDotCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const DegreeComparisonTable = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-full">
            <HiSparkles className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-bold tracking-widest">COMPARE & DECIDE</span>
            <HiSparkles className="text-cyan-400" />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight relative">
            <span className="text-cyan-400">B.Voc</span> vs{" "}
            <span className="text-cyan-400">Traditional Degrees</span>
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
              <span className="text-cyan-400 font-semibold">B.Tech</span> and{" "}
              <span className="text-cyan-400 font-semibold">B.Sc</span> offer a solid foundation,{" "}
              <span className="text-cyan-400 font-semibold">B.Voc</span> is the{" "}
              <span className="text-cyan-400 font-semibold">fast track to industry-ready skills</span>.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
            <FaCircle className="text-cyan-500 text-xs animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Video Section with Modern Design */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-orange-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse" />
          
          {/* Main Video Container */}
          <div className="relative rounded-3xl overflow-hidden bg-[#1a2847] border-2 border-cyan-500/50">
            {/* AI Corner Decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-3xl z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-purple-500/70 rounded-tr-3xl z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-purple-500/70 rounded-bl-3xl z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-500/70 rounded-br-3xl z-20 pointer-events-none" />

            {/* Corner Icons */}
            <div className="absolute top-5 left-5 z-20 opacity-60">
              <FaDotCircle className="text-cyan-400 text-3xl" />
            </div>
            <div className="absolute bottom-5 right-5 z-20 opacity-60">
              <FaDotCircle className="text-cyan-400 text-3xl" />
            </div>

            {/* Badge */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex items-center gap-2 px-5 py-2 bg-cyan-500/20 backdrop-blur-md border-2 border-cyan-500/40 rounded-full">
                <HiSparkles className="text-white" />
                <span className="text-xs font-bold text-white tracking-wider">COMPARISON VIDEO</span>
              </div>
            </div>

            {/* Video */}
            {/* <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/video/ai-comparison.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play/Pause Overlay */}
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={handlePlayPause}
              >
                <div className="w-20 h-20 rounded-full bg-cyan-600/80 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center transform transition-transform hover:scale-110 shadow-lg shadow-cyan-500/50">
                  {isPlaying ? (
                    <FaPause className="text-white text-2xl" />
                  ) : (
                    <FaPlay className="text-white text-2xl ml-1" />
                  )}
                </div>
              </div>
            {/* </div> */} 

            {/* Bottom Info Bar */}
            {/* <div className="relative bg-gradient-to-r from-cyan-900/40 to-purple-900/40 backdrop-blur-sm border-t-2 border-cyan-500/30 px-6 py-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <FaBolt className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Quick Comparison</p>
                    <p className="text-gray-400 text-xs">See why B.Voc leads the way</p>
                  </div>
                </div>
                
                <button 
                  onClick={handlePlayPause}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50"
                >
                  {isPlaying ? (
                    <>
                      <FaPause /> Pause
                    </>
                  ) : (
                    <>
                      <FaPlay /> Play
                    </>
                  )} Video
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Key Points Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: <FaBullseye className="text-5xl text-cyan-400" />,
              title: "Industry-Ready Skills",
              desc: "B.Voc focuses on practical, job-ready skills from day one"
            },
            {
              icon: <FaBolt className="text-5xl text-orange-400" />,
              title: "Faster Entry to Workforce",
              desc: "Graduate and start earning sooner than traditional degrees"
            },
            {
              icon: <FaRocket className="text-5xl text-purple-400" />,
              title: "Modern Curriculum",
              desc: "Stay ahead with cutting-edge industry-aligned courses"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="relative group hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
              <div className="relative bg-[#1a2847] border-2 border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500 transition-colors duration-300">
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