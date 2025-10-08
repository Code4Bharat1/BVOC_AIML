"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// Fade-in animation wrapper (unchanged)
const FadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1.0, delay }}
    >
      {children}
    </motion.div>
  );
};

const ModernInfra = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleMouseEnter = (section) => setHoveredSection(section);
  const handleMouseLeave = () => setHoveredSection(null);

  return (
    <>
      {/* Desktop View */}
      <div className="modern-desktop bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] relative py-40 overflow-hidden">
        {/* Glowing floating orbs */}
        <div className="absolute top-20 left-16 w-56 h-56 bg-[#00d4ff]/30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-24 w-60 h-60 bg-[#ff6b35]/30 blur-3xl rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-[#AC6CFF]/30 blur-3xl rounded-full animate-pulse" />

        <div className="relative w-full max-w-4xl h-[600px] mx-auto">
          {/* Center Image */}
          <FadeIn delay={0.1}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <Image
                src="/infrastructure/elements/Modern_infra_main.svg"
                alt="Center"
                width={250}
                height={250}
              />
            </div>
          </FadeIn>

          {/* Center Text */}
          <FadeIn delay={0.2}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
              <p className="text-white text-2xl md:text-3xl font-medium">
                Modern <br />
                <span className="bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent font-semibold">
                  Infrastructure
                </span>
                <br /> Experience Our <br /> Campus
              </p>
            </div>
          </FadeIn>

          {/* Quadrants */}
          <FadeIn delay={0.3}>
            <div
              className="absolute top-0 left-30 transform -translate-x-1/4 -translate-y-1/4 transition-all duration-300"
              onMouseEnter={() => handleMouseEnter("topLeft")}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`transition-all duration-300 ${
                  hoveredSection === "topLeft" ? "brightness-125 scale-110" : ""
                }`}
              >
                <Image
                  src="/infrastructure/elements/Modern_infra_1.svg"
                  alt="Top Left"
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute top-36 left-24">
                <p
                  className={`text-white text-3xl text-center my-10 transition-all ${
                    hoveredSection === "topLeft"
                      ? "font-bold text-[#00d4ff] scale-105"
                      : ""
                  }`}
                >
                  Explore Through <br /> Videos & Photos
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div
              className="absolute top-0 right-30 transform translate-x-1/4 -translate-y-1/4 transition-all duration-300"
              onMouseEnter={() => handleMouseEnter("topRight")}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`transition-all duration-300 ${
                  hoveredSection === "topRight" ? "brightness-125 scale-110" : ""
                }`}
              >
                <Image
                  src="/infrastructure/elements/Modern_infra_2.svg"
                  alt="Top Right"
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute top-36 right-5 -translate-x-16">
                <p
                  className={`text-white text-3xl text-center my-10 transition-all ${
                    hoveredSection === "topRight"
                      ? "font-bold text-[#ff6b35] scale-105"
                      : ""
                  }`}
                >
                  Innovation-Driven <br /> Workspaces
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div
              className="absolute bottom-0 left-30 transform -translate-x-1/4 translate-y-1/4 transition-all duration-300"
              onMouseEnter={() => handleMouseEnter("bottomLeft")}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`transition-all duration-300 ${
                  hoveredSection === "bottomLeft"
                    ? "brightness-125 scale-110"
                    : ""
                }`}
              >
                <Image
                  src="/infrastructure/elements/Modern_infra_3.svg"
                  alt="Bottom Left"
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute bottom-36 left-20">
                <p
                  className={`text-white text-3xl text-center my-10 transition-all ${
                    hoveredSection === "bottomLeft"
                      ? "font-bold text-[#AC6CFF] scale-105"
                      : ""
                  }`}
                >
                  Dynamic & <br /> Comfortable Spaces
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div
              className="absolute bottom-0 right-30 transform translate-x-1/4 translate-y-1/4 transition-all duration-300"
              onMouseEnter={() => handleMouseEnter("bottomRight")}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`transition-all duration-300 ${
                  hoveredSection === "bottomRight"
                    ? "brightness-125 scale-110"
                    : ""
                }`}
              >
                <Image
                  src="/infrastructure/elements/Modern_infra_4.svg"
                  alt="Bottom Right"
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute bottom-36 right-16 -translate-x-16">
                <p
                  className={`text-white text-3xl text-center my-10 transition-all ${
                    hoveredSection === "bottomRight"
                      ? "font-bold text-[#00d4ff] scale-105"
                      : ""
                  }`}
                >
                  Cutting-Edge <br /> Technology
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Mobile View */}
      <FadeIn delay={0.3}>
        <div className="modern-mobile flex flex-col items-center justify-start pt-10 pb-10 bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] px-2">
          <p className="text-white text-3xl text-center mb-6">
            Modern{" "}
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent font-semibold">
              Infrastructure
            </span>
            <br /> Experience Our Campus
          </p>
          <div className="flex items-center justify-center">
            <Image
              src="/infrastructure/modernInfrastructure.svg"
              alt="Modern Infrastructure Mobile"
              width={500}
              height={650}
              className="max-w-full h-full"
              priority
            />
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default ModernInfra;
