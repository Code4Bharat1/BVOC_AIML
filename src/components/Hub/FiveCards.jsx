"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const cardData = [
  {
    title: "Strategic Partnerships with Industry Giants",
    content:
      "We've joined forces with Microsoft, Google, and Amazon, offering co-branded certifications recognized globally.",
  },
  {
    title: "Hands-on Learning with Real-World Impact",
    content:
      "Gain practical experience through projects, internships, and industry case studies.",
  },
  {
    title: "Career Guidance and Mentorship",
    content:
      "Our mentors and career advisors provide personalized support for your growth journey.",
  },
  {
    title: "NAAC A+ Accreditation – Excellence Recognized",
    content:
      "Achieving NAAC A+ accreditation showcases our commitment to academic excellence.",
  },
  {
    title: "Empowering India's Digital Future",
    content:
      "Our curriculum builds digital-first skills to drive innovation across India's tech ecosystem.",
  },
];

const FiveCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative bg-white text-slate-900 py-20 px-6 lg:px-12  border-b-2 border-blue-300 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Soft glow effects */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-blue-100/10 rounded-full blur-[140px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 10, 0], y: [0, -15, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100/10 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1], x: [0, -10, 0], y: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Two-Line Grid */}
      <motion.div
        ref={containerRef}
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {cardData.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            onClick={() => toggleCard(i)}
            className={`cursor-pointer relative w-full sm:w-[280px] md:w-[300px] p-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md transition-all duration-500 ${
              activeIndex === i
                ? "scale-105 border-blue-200 shadow-lg"
                : "hover:scale-102"
            }`}
          >
            <h3
              className="text-lg font-semibold text-slate-800 mb-2 text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {card.title}
            </h3>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === i ? "auto" : 0,
                opacity: activeIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-slate-700 text-sm leading-relaxed text-center">
                {card.content}
              </p>
            </motion.div>

            <div
              className={`absolute bottom-4 right-4 transition-transform ${
                activeIndex === i ? "rotate-180" : ""
              }`}
            >
              <ChevronDown size={22} className="text-blue-600" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Align last 2 cards to center in second row */}
      <style>{`
        @media (min-width: 1024px) {
          .grid-cols-3 > :nth-child(4) {
            grid-column: 1 / span 1;
            justify-self: center;
          }
          .grid-cols-3 > :nth-child(5) {
            grid-column: 3 / span 1;
            justify-self: center;
          }
        }
      `}</style>
    </div>
  );
};

export default FiveCards;
