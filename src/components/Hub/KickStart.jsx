"use client";

import React, { useRef, useEffect } from "react";
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
  const scrollContainerRef = useRef(null);
  const autoScrollInterval = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      console.error("Scroll container not found");
      return;
    }

    const cardElement = container.querySelector(".card");
    const cardWidth = cardElement ? cardElement.offsetWidth + 32 : 322; // 290px + 32px gap
    const scrollWidth = container.scrollWidth - container.clientWidth;

    // Auto-scroll function
    const scroll = () => {
      const currentScroll = container.scrollLeft;
      if (currentScroll >= scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    };

    // Start auto-scroll with 5-second interval
    autoScrollInterval.current = setInterval(scroll, 900);

    // Pause on touch interaction (mobile)
    const handleTouchStart = () => {
      clearInterval(autoScrollInterval.current);
    };

    // Resume after touch interaction
    const handleTouchEnd = () => {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = setInterval(scroll, 5000);
    };

    // Add touch event listeners to container
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    // Cleanup
    return () => {
      clearInterval(autoScrollInterval.current);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Pause auto-scroll on card hover
  const handleMouseEnter = () => {
    clearInterval(autoScrollInterval.current);
  };

  // Resume auto-scroll when cursor leaves card
  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardElement = container.querySelector(".card");
    const cardWidth = cardElement ? cardElement.offsetWidth + 32 : 322;
    const scrollWidth = container.scrollWidth - container.clientWidth;

    const scroll = () => {
      const currentScroll = container.scrollLeft;
      if (currentScroll >= scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    };

    autoScrollInterval.current = setInterval(scroll, 5000);
  };

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

      <div className="carousel-container pointer-events-none">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hidden flex overflow-x-auto snap-x snap-mandatory"
        >
          <div className="flex gap-8 w-max pr-8">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="card w-[290px] lg:w-[350px] h-[340px] lg:h-[440px] bg-[#2B2038] rounded-4xl overflow-hidden shadow-lg flex-shrink-0 flex flex-col items-center justify-start p-6 mb-14 snap-center pointer-events-auto"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KickStart;