"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const CenteredBoxWithCards = () => {
  const cards = [
    {
      image: "/topbenefits1.png",
      heading: "Job-Ready Skills from Day 1",
      description:
        "Get hands-on, industry-driven training from the start. Work on live projects and global challenges to gain the skills employers want.",
    },
    {
      image: "/topbenefits2.png",
      heading: "Work on International Projects",
      description:
        "Collaborate with global industry leaders and gain experience that sets you apart in the international job market.",
    },
    {
      image: "/topbenefits3.png",
      heading: "Built-in Internships",
      description:
        "Apply what you learn with real-world internships and projects—boosting your resume and skills while still studying.",
    },
    {
      image: "/topbenefits4.png",
      heading: "Earn While You Learn",
      description:
        "Enjoy the opportunity to earn through internships, gaining practical experience and financial support along the way.",
    },
    {
      image: "/topbenefits5.png",
      heading: "Recognized by UGC & NSQF",
      description:
        "Your qualifications are UGC-approved and NSQF-certified, opening doors to global opportunities.",
    },
    {
      image: "/topbenefits6.png",
      heading: "Flexible Exits",
      description:
        "Exit with a diploma, advanced diploma, or degree—tailor your education to your career goals and timeline.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 min-h-screen space-y-16">
      {/* Top Section */}
      <div className="w-full text-center">
        <div className="bg-purple-500 w-full max-w-3xl mx-auto py-8 px-10 rounded-lg shadow-lg">
          <h1 className="text-black text-4xl font-extrabold">Top Benefits</h1>
          <p className="text-white text-xl font-medium mt-2">
            The Fast-Track to Your Career
          </p>
        </div>
      </div>

      {/* Desktop Grid Section */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#cfb0f7] shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            style={{
              borderRadius: "20px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "0px",
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "20px",
            }}
          >
            {/* Image wrapper */}
            <div className="w-full h-48 overflow-hidden rounded-xl mb-6">
              <img
                src={card.image}
                alt={card.heading}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Card Content */}
            <h3 className="text-lg font-semibold mb-2">{card.heading}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Accordion Section */}
      <div className="flex flex-col gap-4 w-full max-w-md md:hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            className="overflow-hidden border border-purple-300 rounded-lg shadow-md"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full px-6 py-4 font-semibold text-black text-left bg-gradient-to-r from-purple-300 to-purple-500"
            >
              {card.heading}
              <span className="text-2xl">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white px-6 py-4 overflow-hidden"
                >
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Bottom Section - Desktop Image and Mobile Flow Chart */}
      <div className="w-full max-w-4xl mt-16">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <img
            src="/image.png"
            alt="Why It Works for You"
            className="w-full object-contain rounded-lg"
          />
        </div>

        {/* Mobile Flow Chart */}
        <div className="md:hidden rounded-lg px-4">
          <MobileFlowChart />
        </div>
      </div>
    </div>
  );
};

// Mobile Flow Chart Component
const MobileFlowChart = () => {
  return (
    <div className="flex flex-col items-center px-4 text-white space-y-4">
      <div className="w-full max-w-xs relative space-y-4">
        {/* 1st Bubble - Left */}
        <div className="flex justify-start">
          <img
            src="/why-it-works.jpeg"
            alt="Why It Works for You"
            className="w-28 h-28 object-contain rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Centered Arrow */}
        <div className="flex justify-center">
          <img
            src="/purple-arrow-down.svg"
            alt="Arrow to next"
            className="w-14 h-17 object-contain"
          />
        </div>

        {/* 2nd Bubble - Right */}
        <div className="flex justify-end">
          <img
            src="/real-world-experience.jpeg"
            alt="Real-World Experience"
            className="w-28 h-28 object-contain rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Centered Arrow */}
        <div className="flex justify-center">
          <img
            src="/purple-arrow-down2.svg"
            alt="Arrow to next"
            className="w-14 h-17 object-contain"
          />
        </div>

        {/* 3rd Bubble - Left */}
        <div className="flex justify-start">
          <img
            src="/flexible-learning.jpeg"
            alt="Flexible Learning Path"
            className="w-28 h-28 object-contain rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Centered Arrow */}
        <div className="flex justify-center">
          <img
            src="/purple-arrow-down3.png"
            alt="Arrow to next"
            className="w-17 h-17 object-contain"
          />
        </div>

        {/* 4th Bubble - Right */}
        <div className="flex justify-end">
          <img
            src="/global-opportunities.jpeg"
            alt="Global Opportunities"
            className="w-28 h-28 object-contain rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default CenteredBoxWithCards;
