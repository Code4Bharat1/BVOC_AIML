"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const translateY = useTransform(scrollY, [0, 100], [0, -100]);

  return (
    <div className="relative w-full h-screen overflow-hidden mt-10">
      <div className="relative w-full h-full px-6 lg:px-20">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/AI_Brain_Bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Animated Overlay */}
        <motion.div
          style={{ opacity, y: translateY }}
          className="absolute top-16 inset-x-0 z-10 flex justify-center px-4"
        >
          <div className="max-w-3xl text-center bg-black/50 rounded-xl p-6 shadow-lg backdrop-blur-md">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-wide">
              Code4Bharat, by Nexcore Alliance LLP
            </h1>
            <p className="text-white mt-4 text-lg sm:text-xl font-medium">
              In collaboration with Guru Kashi University for B.Voc programs
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
