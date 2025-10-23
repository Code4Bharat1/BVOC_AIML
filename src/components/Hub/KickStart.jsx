"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const cardData = [
  { id: 1, image: "/Hub/MachineLearning_Home.png", title: "Machine Learning\nEngineer" },
  { id: 2, image: "/Hub/AiSoftware_Home.png", title: "AI Software\nEngineer" },
  { id: 3, image: "/Hub/DA_Home.png", title: "Data Analyst\n(AI/ML Focus)" },
  { id: 4, image: "/Hub/AiHealthcare_Home.png", title: "AI Engineer\nin Healthcare" },
  { id: 5, image: "/Hub/Speech_Recognition_Home.png", title: "Speech Recognition\nEngineer" },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } } };
const cardVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const headingVariants = { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

const KickStart = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => { const timer = setTimeout(() => setAnimationComplete(true), 2000); return () => clearTimeout(timer); }, []);

  useEffect(() => {
    if (!animationComplete || !scrollContainerRef.current) return;
    const isMobile = () => window.innerWidth < 1024;
    if (!isMobile()) return;

    const scrollContainer = scrollContainerRef.current;
    let animationId;

    const autoScroll = () => {
      if (!scrollContainer) return;
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const currentScroll = scrollContainer.scrollLeft;
      const scrollSpeed = 1;

      if (currentScroll >= maxScrollLeft) setScrollDirection(-1);
      else if (currentScroll <= 0) setScrollDirection(1);

      scrollContainer.scrollLeft += scrollDirection * scrollSpeed;
      animationId = requestAnimationFrame(autoScroll);
    };

    setIsScrolling(true);
    animationId = requestAnimationFrame(autoScroll);

    const pauseScroll = () => { if (animationId) { cancelAnimationFrame(animationId); setIsScrolling(false); } };
    const resumeScroll = () => { if (isMobile()) { setIsScrolling(true); animationId = requestAnimationFrame(autoScroll); } };

    scrollContainer.addEventListener("mouseenter", pauseScroll);
    scrollContainer.addEventListener("mouseleave", resumeScroll);
    scrollContainer.addEventListener("touchstart", pauseScroll);
    scrollContainer.addEventListener("touchend", resumeScroll);

    const handleResize = () => {
      if (!isMobile() && animationId) { cancelAnimationFrame(animationId); setIsScrolling(false); }
      else if (isMobile() && !isScrolling) { resumeScroll(); }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", pauseScroll);
      scrollContainer.removeEventListener("mouseleave", resumeScroll);
      scrollContainer.removeEventListener("touchstart", pauseScroll);
      scrollContainer.removeEventListener("touchend", resumeScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [animationComplete, scrollDirection, isScrolling]);

  return (
    <section className="relative py-24 px-6 lg:px-24 overflow-hidden bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(38,198,218,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(38,198,218,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#26C6DA] rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full blur-[100px] bg-[#26C6DA]/20"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[120px] bg-[#FF6F00]/20"
        animate={{ scale: [1, 1.4, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Heading */}
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center text-5xl lg:text-6xl font-extrabold mb-16 leading-tight"
      >
        Kickstart  Your 
        <span className="text-[#FF6F00]"> Career</span>
      </motion.h1>

      {/* Cards Scroll */}
      <motion.div
        ref={scrollContainerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="overflow-x-auto scrollbar-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        <div ref={ref} className="flex gap-8 w-max pr-8">
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="w-[290px] lg:w-[350px] h-[340px] lg:h-[440px] bg-gradient-to-br from-[#2d1b4e]/60 via-[#4a1f6b]/60 to-[#1A287E]/60 rounded-4xl overflow-hidden shadow-lg flex-shrink-0 flex flex-col items-center justify-start p-6 border border-[#00d4ff]/20"
            >
              <div className="relative w-full h-[300px] rounded-4xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={350}
                  height={220}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              <h3 className="text-white font-bold text-center text-xl lg:text-2xl mt-4 uppercase leading-snug whitespace-pre-line">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default KickStart;
