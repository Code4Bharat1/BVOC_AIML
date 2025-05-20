"use client";
import React, { useState, useRef } from "react";
import { CircleChevronDown } from "lucide-react";
import { motion, useInView } from "framer-motion";

const cardData = [
  {
    title: "Strategic \nPartnerships \nwith Industry \nGiants",
    content:
      "We’ve joined forces with world-renowned tech companies like Microsoft, Google, and Amazon, offering co-branded certifications upon completion of your course. This means you’re not just gaining a degree—you’re earning credentials that are recognized globally.",
  },
  {
    title: "Hands-on \nLearning \nwith Real-\nWorld Impact",
    content:
      "Gain practical experience through projects, internships, and industry case studies. This helps students apply their knowledge to solve real-world challenges.",
  },
  {
    title: "Career \nGuidance \nand \nMentorship",
    content:
      "Our experienced mentors and career advisors guide you through your academic and professional journey, providing personalized support and growth strategies.",
  },
  {
    title: "NAAC A++ \nAccreditation – \nExcellence \nRecognized",
    content:
      "Achieving NAAC A++ accreditation showcases our unwavering commitment to academic excellence and continuous improvement.",
  },
  {
    title: "Empowering \nIndia’s Digital \nFuture",
    content:
      "Our curriculum is built to equip students with digital-first skills, driving innovation and transformation across India’s tech ecosystem.",
  },
];

const FiveCards = () => {
  const [openCard, setOpenCard] = useState(null);

  // Ref for the container to detect in-view
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
  };

  return (
    <motion.div
      ref={containerRef}
      className="bg-[#2F1C48] text-white p-6 lg:p-12 shadow-sm shadow-white m-10 rounded-3xl"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 text-center">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center h-full"
            variants={cardVariants}
          >
            {/* Card Box */}
            <div className="bg-[#AC6CFF] rounded-3xl p-4 w-[250px] lg:w-full shadow-md h-full">
              <h3 className="text-lg font-semibold whitespace-pre-line">
                {card.title}
              </h3>

              {/* Mobile Arrow */}
              <button onClick={() => toggleCard(index)}>
                <div
                  className={`transition-transform duration-300 block lg:hidden mt-2 ${
                    openCard === index ? "rotate-180" : ""
                  }`}
                >
                  <CircleChevronDown size={32} />
                </div>
              </button>

              {/* Mobile Content - toggle */}
              <div
                className={`lg:hidden mt-3 overflow-hidden transition-all duration-500 ease-in-out ${
                  openCard === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base">{card.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Large Screen Arrow Row */}
      <div className="hidden lg:flex justify-around mt-4">
        {cardData.map((_, index) => (
          <button key={index} onClick={() => toggleCard(index)}>
            <div
              className={`transition-transform duration-300 ${
                openCard === index ? "rotate-180" : ""
              }`}
            >
              <CircleChevronDown size={32} />
            </div>
          </button>
        ))}
      </div>

      {/* Large Screen Expanded Content */}
      <div
        className={`hidden lg:block mt-6 transition-all duration-500 ease-in-out overflow-hidden ${
          openCard !== null ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-xl text-center">
          {openCard !== null && cardData[openCard].content}
        </p>
      </div>
    </motion.div>
  );
};

export default FiveCards;
