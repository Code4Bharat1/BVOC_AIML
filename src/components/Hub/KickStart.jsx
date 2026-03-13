"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    image: "/Hub/MachineLearning_Home.png",
    title: "Machine Learning Engineer",
    category: "AI & ML",
  },
  {
    id: 2,
    image: "/Hub/AiSoftware_Home.png",
    title: "AI Software Engineer",
    category: "AI & ML",
  },
  {
    id: 3,
    image: "/Hub/Speech_Recognition_Home.png",
    title: "Cyber Security Analyst",
    category: "Security",
  },
  {
    id: 4,
    image: "/Hub/AiHealthcare_Home.png",
    title: "Ethical Hacker",
    category: "Security",
  },
  {
    id: 5,
    image: "/Hub/DA_Home.png",
    title: "Computer Science Engineer",
    category: "Development",
  },
  {
    id: 6,
    image: "/Hub/MachineLearning_Home.png",
    title: "Software Developer",
    category: "Development",
  },
];

const KickStart = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    const scrollSpeed = 0.4;

    const smoothScroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += scrollSpeed;

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
    <section className="relative py-16 lg:py-12 px-4 overflow-hidden bg-white">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

      {/* Decorative dots */}
      <div className="absolute top-20 left-[10%] w-1 h-1 rounded-full bg-emerald-500/30" />
      <div className="absolute top-32 right-[15%] w-1 h-1 rounded-full bg-teal-500/30" />
      <div className="absolute bottom-24 left-[20%] w-1 h-1 rounded-full bg-slate-400/30" />

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12 lg:mb-16">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 leading-tight text-slate-900 tracking-tight"
        >
          Kickstart Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600">
            Career
          </span>
        </motion.h1>

        <motion.div
          className="w-20 h-1 bg-blue-500 mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="relative z-10 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: "auto" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-6 w-max pr-6 pl-4 lg:pl-0">

          {[...cardData, ...cardData, ...cardData].map((card, index) => (
            <motion.article
              key={`${card.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (index % cardData.length) * 0.08,
              }}
              className="relative group w-[280px] flex-shrink-0"
            >
              <div className="relative bg-white border-2 border-slate-200 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-slate-300 hover:shadow-xl">

                {/* Hover Accent */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-blue-500 z-10"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />

                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden bg-slate-50">

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="280px"
                      className="object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                      {card.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-lg font-semibold text-slate-900 leading-tight mb-3">
                    {card.title}
                  </h3>

                  <div className="mt-auto pt-4">
                    <motion.div
                      className="w-10 h-0.5 bg-blue-500"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

        </div>
      </div>

      {/* Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mt-8"
      >
        <p className="text-sm text-slate-500">
          Hover to pause • Drag to explore
        </p>
      </motion.div>

      {/* Scrollbar Hide */}
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