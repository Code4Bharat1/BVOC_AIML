"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const cardData = [
  { id: 1, image: "/Hub/MachineLearning_Home.png", title: "Machine Learning\nEngineer" },
  { id: 2, image: "/Hub/AiSoftware_Home.png", title: "AI Software\nEngineer" },
  { id: 3, image: "/Hub/DA_Home.png", title: "Data Analyst\n(AI/ML Focus)" },
  { id: 4, image: "/Hub/AiHealthcare_Home.png", title: "AI Engineer\nin Healthcare" },
  { id: 5, image: "/Hub/Speech_Recognition_Home.png", title: "Speech Recognition\nEngineer" },
];

const KickStart = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          // Smooth scroll to the right
          scrollContainer.scrollLeft += 1;

          // Reset to start when reaching the end
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 20);
    };

    startAutoScroll();

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <section className="relative py-24 px-6 lg:px-24 overflow-hidden bg-[#ffffff]">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Animated Particles */}
      <motion.div
        className="absolute top-32 left-[8%] w-2 h-2 rounded-full bg-[#80C8F7]"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-20 right-[12%] w-3 h-3 rounded-full bg-[#FF7F00]"
        animate={{ 
          y: [0, 40, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-20 left-[15%] w-2 h-2 rounded-full bg-[#FF5733]"
        animate={{ 
          y: [0, -25, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 right-[20%] w-2.5 h-2.5 rounded-full bg-[#FFCD00]"
        animate={{ 
          y: [0, 35, 0],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-32 right-[8%] w-2 h-2 rounded-full bg-[#80C8F7]"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
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
          style={{ fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif" }}
        >
          Kickstart Your 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#80C8F7] to-[#007BFF]"> Career</span>
        </h1>
      </div>

      {/* Cards Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="relative z-10 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: "smooth" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-8 w-max pr-8">
          {/* Duplicate cards for infinite loop effect */}
          {[...cardData, ...cardData].map((card, index) => (
            <motion.div
              key={`${card.id}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % cardData.length) * 0.1 }}
              className="relative group w-[290px] lg:w-[350px] h-[340px] lg:h-[440px] bg-[#1a1a1a] overflow-hidden shadow-[0_0_30px_rgba(0,123,255,0.15)] flex-shrink-0 flex flex-col items-center justify-start p-6 rounded-xl"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#007BFF] via-[#FF7F00] to-[#007BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ padding: '2px' }}
              >
                <div className="w-full h-full bg-[#1a1a1a] rounded-xl" />
              </div>

              {/* Card Border */}
              <div className="absolute inset-0 rounded-xl border border-[#007BFF]/20 group-hover:border-[#007BFF]/40 transition-colors duration-500" />

              {/* Card Glow on Hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#007BFF]/5 via-transparent to-[#FF7F00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="relative w-full h-[300px] overflow-hidden rounded-lg mb-4">
                  {/* Image Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#007BFF]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-white font-bold text-center text-xl lg:text-2xl uppercase leading-snug whitespace-pre-line group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#80C8F7] group-hover:to-[#007BFF] transition-all duration-500">
                  {card.title}
                </h3>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#FF7F00] to-transparent" />
                <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-[#FF7F00] to-transparent" />
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