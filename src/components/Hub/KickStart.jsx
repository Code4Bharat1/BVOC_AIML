"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const cardData = [
  // AI & ML (2)
  {
    id: 1,
    image: "/Hub/MachineLearning_Home.png",
    title: "Machine Learning\nEngineer",
  },
  {
    id: 2,
    image: "/Hub/AiSoftware_Home.png",
    title: "AI Software\nEngineer",
  },

  // Cyber Security (2)
  {
    id: 3,
    image: "/Hub/Speech_Recognition_Home.png",
    title: "Cyber Security\nAnalyst",
  },
  {
    id: 4,
    image: "/Hub/AiHealthcare_Home.png",
    title: "Ethical Hacker\n(Security)",
  },

  // Computer Science (2)
  {
    id: 5,
    image: "/Hub/DA_Home.png",
    title: "Computer Science\nEngineer",
  },
  {
    id: 6,
    image: "/Hub/MachineLearning_Home.png",
    title: "Software\nDeveloper",
  },
];


const KickStart = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollSpeed = 0.5;

    const smoothScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset to start for infinite loop
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="relative py-10 px-6 lg:px-24 overflow-hidden bg-[#ffffff]">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Particles */}
      <motion.div
        className="absolute top-32 left-[8%] w-2 h-2 rounded-full bg-[#80C8F7]"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-20 right-[12%] w-3 h-3 rounded-full bg-[#FF7F00]"
        animate={{
          y: [0, 40, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-20 left-[15%] w-2 h-2 rounded-full bg-[#FF5733]"
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 right-[20%] w-2.5 h-2.5 rounded-full bg-[#FFCD00]"
        animate={{
          y: [0, 35, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-32 right-[8%] w-2 h-2 rounded-full bg-[#80C8F7]"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 3.8, repeat: Infinity, delay: 1.5 }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 rounded-full blur-[120px] bg-[#007BFF]/10"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-[140px] bg-[#FF7F00]/8"
        animate={{ scale: [1, 1.4, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Heading */}
      <div className="relative z-10">
        <h1
          className="text-center text-5xl lg:text-6xl font-bold mb-16 leading-tight text-black"
          style={{
            fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
          }}
        >
          Kickstart Your
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#80C8F7] to-[#007BFF]">
            {" "}
            Career
          </span>
        </h1>
      </div>

      {/* Cards Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="relative z-10 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: "auto" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-8 w-max pr-8">
          {/* Triple cards for seamless infinite loop */}
          {[...cardData, ...cardData, ...cardData].map((card, index) => (
            <motion.div
              key={`${card.id}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (index % cardData.length) * 0.08,
              }}
              className="relative group w-[280px] flex-shrink-0"
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2C2C2C] rounded-3xl p-6 shadow-[0_8px_40px_rgba(0,123,255,0.2)] overflow-hidden">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#007BFF] via-[#FF7F00] to-[#FFCD00] blur-sm"
                    style={{ padding: "2px" }}
                  />
                </div>

                {/* Inner Border Glow */}
                <div className="absolute inset-[2px] rounded-3xl border-2 border-[#007BFF]/30 group-hover:border-[#007BFF]/60 transition-all duration-500" />

                {/* Top Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#007BFF]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Circular Image Container */}
                  <div className="relative mx-auto mb-6 w-[220px] h-[220px]">
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#007BFF]/40 via-[#FF7F00]/30 to-[#FFCD00]/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Image Ring Border */}
                    <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-[#007BFF] via-[#80C8F7] to-[#007BFF]">
                      <div className="w-full h-full rounded-full  p-2">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          {/* Image Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#007BFF]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                          {/* Actual Image */}
                          <img
                            src={card.image}
                            alt={card.title}
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Rotating Ring Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-transparent opacity-0 group-hover:opacity-100"
                      style={{
                        borderImage:
                          "linear-gradient(45deg, #007BFF, #FF7F00, #FFCD00, #007BFF) 1",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-center text-lg leading-snug whitespace-pre-line px-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#80C8F7] group-hover:via-[#007BFF] group-hover:to-[#FF7F00] transition-all duration-500">
                    {card.title}
                  </h3>

                  {/* Bottom Accent Line */}
                  <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-transparent via-[#007BFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Corner Sparkles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-[#FFCD00] rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-[#80C8F7] rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default KickStart;
