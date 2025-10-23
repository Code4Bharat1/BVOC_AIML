"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// Enhanced Fade-in animation wrapper with multiple directions
const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    up: { opacity: 0, y: 60, scale: 0.95 },
    down: { opacity: 0, y: -60, scale: 0.95 },
    left: { opacity: 0, x: -60, scale: 0.95 },
    right: { opacity: 0, x: 60, scale: 0.95 },
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
      transition={{ 
        duration: 1, 
        delay, 
        ease: [0.25, 0.4, 0.25, 1],
        type: "spring",
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
};

const ModernInfra = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const containerRef = useRef(null);

  const handleMouseEnter = (section) => setHoveredSection(section);
  const handleMouseLeave = () => setHoveredSection(null);

  // Enhanced quadrant data with colors and improved positioning
  const quadrants = [
    {
      id: "topLeft",
      image: "/infrastructure/elements/Modern_infra_1.svg",
      title: "Explore Through",
      subtitle: "Videos & Photos",
      color: "#00d4ff",
      glowColor: "rgba(0, 212, 255, 0.4)",
      position: "top-0 left-30 -translate-x-1/4 -translate-y-1/4",
      textPosition: "top-36 left-24",
      delay: 0.3,
      direction: "left",
    },
    {
      id: "topRight",
      image: "/infrastructure/elements/Modern_infra_2.svg",
      title: "Innovation-Driven",
      subtitle: "Workspaces",
      color: "#ff6b35",
      glowColor: "rgba(255, 107, 53, 0.4)",
      position: "top-0 right-30 translate-x-1/4 -translate-y-1/4",
      textPosition: "top-36 right-5 -translate-x-16",
      delay: 0.4,
      direction: "right",
    },
    {
      id: "bottomLeft",
      image: "/infrastructure/elements/Modern_infra_3.svg",
      title: "Dynamic &",
      subtitle: "Comfortable Spaces",
      color: "#AC6CFF",
      glowColor: "rgba(172, 108, 255, 0.4)",
      position: "bottom-0 left-30 -translate-x-1/4 translate-y-1/4",
      textPosition: "bottom-36 left-20",
      delay: 0.5,
      direction: "left",
    },
    {
      id: "bottomRight",
      image: "/infrastructure/elements/Modern_infra_4.svg",
      title: "Cutting-Edge",
      subtitle: "Technology",
      color: "#00d4ff",
      glowColor: "rgba(0, 212, 255, 0.4)",
      position: "bottom-0 right-30 translate-x-1/4 translate-y-1/4",
      textPosition: "bottom-36 right-16 -translate-x-16",
      delay: 0.6,
      direction: "right",
    },
  ];

  return (
    <>
      {/* Desktop View */}
      <div 
        ref={containerRef}
        className="modern-desktop bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] relative py-40 overflow-hidden"
      >
        {/* Animated Grid Background */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "60px 60px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
        </motion.div>

        {/* Enhanced Glowing Orbs with Complex Motion */}
        <motion.div
          className="absolute top-20 left-16 w-56 h-56 bg-[#00d4ff]/30 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.3, 1.1, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
            x: [0, 30, -20, 0],
            y: [0, -20, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-24 w-60 h-60 bg-[#ff6b35]/30 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.4, 1.2, 1],
            opacity: [0.3, 0.7, 0.5, 0.3],
            x: [0, -40, 20, 0],
            y: [0, 30, -15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-[#AC6CFF]/30 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.35, 1.15, 1],
            opacity: [0.3, 0.6, 0.45, 0.3],
            x: [0, 25, -25, 0],
            y: [0, -25, 25, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Enhanced Floating Particles with Variety */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? "w-2 h-2" : i % 3 === 1 ? "w-1.5 h-1.5" : "w-1 h-1"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 ? "#00d4ff" : i % 3 === 1 ? "#AC6CFF" : "#ff6b35",
                opacity: 0.6,
              }}
              animate={{
                y: [0, -60 - Math.random() * 40, 0],
                x: [0, (Math.random() - 0.5) * 30, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative w-full max-w-4xl h-[600px] mx-auto">
          {/* Center Image with Enhanced Pulse Effect */}
          <FadeIn delay={0.1}>
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              animate={{
                scale: [1, 1.08, 1.04, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow ring around center image */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{
                    background: "radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Image
                  src="/infrastructure/elements/Modern_infra_main.svg"
                  alt="Center"
                  width={250}
                  height={250}
                  className="relative z-10"
                />
              </motion.div>
            </motion.div>
          </FadeIn>

          {/* Center Text with Enhanced Glow Effect */}
          <FadeIn delay={0.2}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
              <motion.p
                className="text-white text-2xl md:text-3xl font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, type: "spring" }}
              >
                Modern <br />
                <motion.span
                  className="bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent font-semibold inline-block"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(0,212,255,0.6))",
                  }}
                  animate={{
                    filter: [
                      "drop-shadow(0 0 20px rgba(0,212,255,0.6))",
                      "drop-shadow(0 0 30px rgba(172,108,255,0.6))",
                      "drop-shadow(0 0 20px rgba(255,107,53,0.6))",
                      "drop-shadow(0 0 20px rgba(0,212,255,0.6))",
                    ],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Infrastructure
                </motion.span>
                <br /> Experience Our <br /> Campus
              </motion.p>
            </div>
          </FadeIn>

          {/* Simple Hover Effect Quadrants */}
          {quadrants.map((quadrant) => (
            <FadeIn key={quadrant.id} delay={quadrant.delay} direction={quadrant.direction}>
              <motion.div
                className={`absolute ${quadrant.position} cursor-pointer group`}
                onMouseEnter={() => handleMouseEnter(quadrant.id)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Simple Image Hover */}
                <motion.div
                  className="relative transition-all duration-300"
                  animate={{
                    filter: hoveredSection === quadrant.id ? "brightness(1.2)" : "brightness(1)",
                  }}
                >
                  <Image
                    src={quadrant.image}
                    alt={quadrant.id}
                    width={400}
                    height={400}
                    className="transition-all duration-300"
                  />
                </motion.div>

                {/* Simple Text Card */}
                <div className={`absolute ${quadrant.textPosition}`}>
                  <motion.div
                    className="relative px-8 py-5 rounded-2xl backdrop-blur-xl transition-all duration-300 shadow-lg border-2"
                    style={{
                      backgroundColor: hoveredSection === quadrant.id ? `${quadrant.color}20` : "rgba(0, 0, 0, 0.4)",
                      borderColor: hoveredSection === quadrant.id ? quadrant.color : "rgba(255, 255, 255, 0.15)",
                    }}
                  >
                    <motion.p
                      className="text-white text-3xl text-center transition-all duration-300 relative z-10"
                      style={{
                        color: hoveredSection === quadrant.id ? quadrant.color : "#ffffff",
                        textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                      }}
                    >
                      {quadrant.title} <br /> {quadrant.subtitle}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Enhanced Mobile View */}
      <div className="modern-mobile flex flex-col items-center justify-start pt-10 pb-10 bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] px-2 relative overflow-hidden">
        {/* Animated Grid Background for Mobile */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </motion.div>

        {/* Enhanced Mobile Floating Orbs */}
        <motion.div
          className="absolute top-10 left-5 w-32 h-32 bg-[#00d4ff]/30 blur-2xl rounded-full"
          animate={{
            scale: [1, 1.3, 1.1, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
            x: [0, 15, -10, 0],
            y: [0, -10, 5, 0],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-5 w-40 h-40 bg-[#ff6b35]/30 blur-2xl rounded-full"
          animate={{
            scale: [1, 1.4, 1.2, 1],
            opacity: [0.3, 0.7, 0.5, 0.3],
            x: [0, -15, 10, 0],
            y: [0, 10, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-36 h-36 bg-[#AC6CFF]/20 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Mobile Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 ? "#00d4ff" : i % 3 === 1 ? "#AC6CFF" : "#ff6b35",
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <FadeIn delay={0.3}>
          <motion.p
            className="text-white text-3xl text-center mb-6 relative z-10 px-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            Modern{" "}
            <motion.span
              className="bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent font-semibold inline-block"
              animate={{
                filter: [
                  "drop-shadow(0 0 15px rgba(0,212,255,0.6))",
                  "drop-shadow(0 0 20px rgba(172,108,255,0.6))",
                  "drop-shadow(0 0 15px rgba(255,107,53,0.6))",
                  "drop-shadow(0 0 15px rgba(0,212,255,0.6))",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Infrastructure
            </motion.span>
            <br /> Experience Our Campus
          </motion.p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <motion.div
            className="flex items-center justify-center relative z-10"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0,212,255,0.3)",
                  "0 0 30px rgba(172,108,255,0.3)",
                  "0 0 20px rgba(255,107,53,0.3)",
                  "0 0 20px rgba(0,212,255,0.3)",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="rounded-3xl"
            >
              <Image
                src="/infrastructure/modernInfrastructure.svg"
                alt="Modern Infrastructure Mobile"
                width={500}
                height={650}
                className="max-w-full h-full"
                priority
              />
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </>
  );
};

export default ModernInfra;


