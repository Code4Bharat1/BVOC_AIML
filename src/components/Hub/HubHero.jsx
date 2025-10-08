"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HubHero = () => {
  return (
    <div className="flex flex-col lg:min-h-screen">
      {/* Mobile Hero Section */}
      <motion.div
        className="lg:hidden w-full relative overflow-hidden bg-gradient-to-br from-[#1A0B3C] via-[#301C73] to-[#5D1E9E]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Glowing Orbs for Accent */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 blur-[140px] rounded-full"></div>

        <div className="relative w-full h-80 flex items-center justify-center text-center px-6">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-2xl md:text-4xl font-extrabold leading-snug z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Bachelor's of <span className="text-white">(BVOC)</span> in{" "}
            <span className="text-cyan-300">Machine Learning</span> and{" "}
            <span className="text-purple-400">Artificial Intelligence</span>
          </h1>
        </div>
      </motion.div>

      {/* Desktop Hero Section */}
      <motion.div
        className="hidden relative w-full h-screen bg-cover bg-center bg-no-repeat lg:flex flex-col items-center justify-center px-4 overflow-hidden"
        style={{
          backgroundImage: "url(/Hub_Hero-bg.png)",
          backgroundSize: "100% 100%",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Glowing Background Elements */}
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/20 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[250px] rounded-full"></div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-snug text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] max-w-6xl z-10">
          Bachelor's of <span className="text-white">(BVOC)</span> in{" "}
          <span className="text-cyan-300">Machine Learning</span> and{" "}
          <span className="text-purple-400">Artificial Intelligence</span>
        </h1>
      </motion.div>

      {/* Brand Logos Section */}
      <motion.div
        className="relative bg-gradient-to-r from-[#1A0B3C] via-[#2B1660] to-[#4B1E96] py-16 lg:-mt-0 -mt-3 overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Soft Glow Background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Logos */}
          <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:justify-center lg:items-center lg:gap-x-14 mb-12">
            <Image
              src="/approved.png"
              alt="Approved"
              width={200}
              height={80}
              className="object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="flex flex-row justify-center items-center gap-x-8">
              <Image
                src="/naac-logo.png"
                alt="NAAC A++ Grade"
                width={200}
                height={80}
                className="object-contain hover:scale-105 transition-transform duration-300"
                priority
              />
              <Image
                src="/ugc-logo.png"
                alt="UGC Entitled"
                width={200}
                height={80}
                className="object-contain hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-3xl text-center mx-auto max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Earn a prestigious AI & ML degree from one of India&apos;s top 2%{" "}
            <br className="lg:block hidden" />
            Ranking <br className="lg:hidden" />
            University!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HubHero;
