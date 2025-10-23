"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PlacementAssistance = () => {
  return (
    <section className="relative w-full overflow-x-hidden px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] rounded-none shadow-lg ">
      {/* Grid Background - Hero Style */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Floating Particles - Hero Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs - Hero Style */}
      <motion.div
        className="absolute top-20 left-16 w-72 h-72 bg-[#00d4ff]/20 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-24 w-80 h-80 bg-[#AC6CFF]/20 blur-[140px] rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          y: [0, -40, 0],
        }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-10 z-10">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md lg:max-w-none">
            <Image
              src="/placement-card.png"
              alt="Placement Assistance"
              width={500}
              height={300}
              className="rounded-2xl sm:rounded-3xl w-full object-cover shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out border border-white/10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00d4ff]/20 to-transparent rounded-2xl sm:rounded-3xl" />
          </div>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-start"
        >
          {/* Desktop Header */}
          <h1 className="hidden lg:block text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6 lg:mb-8 drop-shadow-lg">
            Placement Assistance:
            <br />
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent">
              Your Path to Success!
            </span>
          </h1>

          {/* Desktop Text */}
          <p className="hidden lg:block text-lg xl:text-xl text-gray-200 font-medium leading-relaxed pr-0 lg:pr-10">
            At{" "}
            <span className="font-bold text-[#00d4ff]">
              Nexcore Alliance LLP
            </span>
            , we don't just teach — you{" "}
            <span className="text-[#AC6CFF] font-bold">intern</span> and{" "}
            <span className="text-[#ff6b35] font-bold">work</span>. Our{" "}
            <span className="font-bold text-[#00d4ff]">
              100% placement assistance
            </span>{" "}
            ensures you're job-ready for the real world.
          </p>

          {/* Mobile Header */}
          <h1 className="lg:hidden text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4 text-center drop-shadow-lg">
            Placement Assistance:
            <br />
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent">
              Your Path to Success!
            </span>
          </h1>

          {/* Mobile Text */}
          <p className="lg:hidden text-sm sm:text-base text-gray-200 font-medium px-2 sm:px-4 mb-6 text-center">
            At{" "}
            <span className="font-bold text-[#00d4ff]">
              Nexcore Alliance LLP
            </span>
            , we don't just teach — you{" "}
            <span className="font-bold text-[#AC6CFF]">intern</span> and{" "}
            <span className="font-bold text-[#ff6b35]">work</span>. Our{" "}
            <span className="font-bold text-[#00d4ff]">
              100% placement assistance
            </span>{" "}
            ensures you're job-ready.
          </p>

          {/* CTA Button */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] hover:opacity-90 text-white font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(0,212,255,0.5)] border border-white/20"
            >
              Enroll Now ✨
              <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementAssistance;