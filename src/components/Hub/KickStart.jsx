"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cardData = [
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
  {
    id: 3,
    image: "/Hub/DA_Home.png",
    title: "Data Analyst\n(AI/ML Focus)",
  },
  {
    id: 4,
    image: "/Hub/AiHealthcare_Home.png",
    title: "AI Engineer\nin Healthcare",
  },
  {
    id: 5,
    image: "/Hub/Speech_Recognition_Home.png",
    title: "Speech Recognition\nEngineer",
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const KickStart = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Start auto-scroll after animations complete
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000); // Adjust timing based on your animation duration

    return () => clearTimeout(timer);
  }, [isInView]);

  useEffect(() => {
    if (!animationComplete || !scrollContainerRef.current) return;

    // Check if device is mobile (not lg)
    const isMobile = () => window.innerWidth < 1024;

    if (!isMobile()) return;

    const scrollContainer = scrollContainerRef.current;
    let animationId;

    const autoScroll = () => {
      if (!scrollContainer) return;

      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const currentScroll = scrollContainer.scrollLeft;
      const scrollSpeed = 1; // Adjust speed as needed

      // Change direction when reaching edges
      if (currentScroll >= maxScrollLeft) {
        setScrollDirection(-1);
      } else if (currentScroll <= 0) {
        setScrollDirection(1);
      }

      // Scroll in current direction
      scrollContainer.scrollLeft += scrollDirection * scrollSpeed;

      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll
    setIsScrolling(true);
    animationId = requestAnimationFrame(autoScroll);

    // Pause on hover/touch
    const pauseScroll = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        setIsScrolling(false);
      }
    };

    const resumeScroll = () => {
      if (isMobile()) {
        setIsScrolling(true);
        animationId = requestAnimationFrame(autoScroll);
      }
    };

    scrollContainer.addEventListener('mouseenter', pauseScroll);
    scrollContainer.addEventListener('mouseleave', resumeScroll);
    scrollContainer.addEventListener('touchstart', pauseScroll);
    scrollContainer.addEventListener('touchend', resumeScroll);

    // Handle window resize
    const handleResize = () => {
      if (!isMobile() && animationId) {
        cancelAnimationFrame(animationId);
        setIsScrolling(false);
      } else if (isMobile() && !isScrolling) {
        resumeScroll();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      scrollContainer.removeEventListener('mouseenter', pauseScroll);
      scrollContainer.removeEventListener('mouseleave', resumeScroll);
      scrollContainer.removeEventListener('touchstart', pauseScroll);
      scrollContainer.removeEventListener('touchend', resumeScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [animationComplete, scrollDirection, isScrolling]);

  return (
    <div className="bg-[#EADAFF] p-3 lg:p-8 pointer-events-none">
      {/* Mobile Head */}
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        className="lg:hidden text-center text-[#2B2038] text-5xl font-extrabold pb-16 pt-9 leading-tight pointer-events-auto"
      >
        Kickstart <br /> Your Career
      </motion.h1>

      {/* Desktop Head */}
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        className="hidden lg:block text-center text-[#2B2038] text-3xl lg:text-6xl font-extrabold lg:pb-16 pt-9 leading-tight pointer-events-auto"
      >
        Kickstart Your Career
      </motion.h1>

      <motion.div
        ref={scrollContainerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="overflow-x-auto scrollbar-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        <div 
          ref={ref}
          className="flex gap-8 w-max pr-8"
        >
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="w-[290px] lg:w-[350px] h-[340px] lg:h-[440px] bg-[#2B2038] rounded-4xl overflow-hidden shadow-lg flex-shrink-0 flex flex-col items-center justify-start p-6 mb-14 "
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
      </div>
    </div>
  );
};

export default KickStart;