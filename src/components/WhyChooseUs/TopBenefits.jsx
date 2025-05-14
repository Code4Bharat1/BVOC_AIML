"use client";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

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

  const mobileCardColors = [
    "bg-[#E4CFFF]",
    "bg-[#D6B6FF]",
    "bg-[#C89DFF]",
    "bg-[#B87AFF]",
    "bg-[#A45EFF]",
    "bg-[#933FFF]",
  ];

  const mobileTextColors = [
    "text-black",
    "text-black",
    "text-black",
    "text-white",
    "text-white",
    "text-white",
  ];

  // Scroll animation setup
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 min-h-screen space-y-16">
      {/* Top Section */}
      <div className="w-full text-center">
        <div className="bg-purple-500 w-full max-w-[1182px] h-[130px] mx-auto py-2 md:py-0 px-0 rounded-lg shadow-lg border-2 border-black flex items-center justify-center">
          {/* Mobile Title */}
          <h1 className="text-black text-base font-bold md:hidden whitespace-nowrap overflow-hidden text-ellipsis">
            Top Benefits:{" "}
            <span className="text-white font-bold">
              The Fast-Track to Your Career
            </span>
          </h1>

          {/* Desktop Title */}
          <h1 className="hidden md:block text-black text-3xl font-bold whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
            Top Benefits:{" "}
            <span className="text-white font-bold">
              The Fast-Track to Your Career
            </span>
          </h1>
        </div>
      </div>

      {/* Desktop Grid Section */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#F1E6FF] border-4 border-[#AC6CFF] shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            style={{
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "0px",
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "24px",
              overflow: "hidden",
            }}
          >
            <div className="w-full h-56">
              <img
                src={card.image}
                alt={card.heading}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{card.heading}</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {/* Insert rich text for highlights */}
                {index === 0 && (
                  <>
                    Get hands-on,{" "}
                    <span className="text-[#9747FF] font-semibold">
                      industry-driven training
                    </span>{" "}
                    from the start. Work on{" "}
                    <span className="text-[#9747FF] font-semibold">
                      live projects
                    </span>{" "}
                    and{" "}
                    <span className="text-[#9747FF] font-semibold">
                      global challenges
                    </span>{" "}
                    to gain the skills employers want.
                  </>
                )}
                {index === 1 && (
                  <>
                    Collaborate with global industry leaders and gain experience
                    that sets you apart in the{" "}
                    <span className="text-[#9747FF] font-semibold">
                      international job market.
                    </span>
                  </>
                )}
                {index === 2 && (
                  <>
                    Apply what you learn with{" "}
                    <span className="text-[#9747FF] font-semibold">
                      real-world internships
                    </span>{" "}
                    and projects—boosting your resume and skills while still
                    studying.
                  </>
                )}
                {index === 3 && (
                  <>
                    Enjoy the opportunity to{" "}
                    <span className="text-[#9747FF] font-semibold">earn</span>{" "}
                    through internships, gaining practical experience and
                    financial support along the way.
                  </>
                )}
                {index === 4 && (
                  <>
                    Your qualifications are{" "}
                    <span className="text-[#9747FF] font-semibold">
                      UGC-approved
                    </span>{" "}
                    and{" "}
                    <span className="text-[#9747FF] font-semibold">
                      NSQF-certified
                    </span>
                    , opening doors to global opportunities.
                  </>
                )}
                {index === 5 && (
                  <>
                    Exit with a{" "}
                    <span className="text-[#9747FF] font-semibold">
                      diploma
                    </span>
                    ,{" "}
                    <span className="text-[#9747FF] font-semibold">
                      advanced diploma
                    </span>
                    , or{" "}
                    <span className="text-[#9747FF] font-semibold">degree</span>
                    —tailor your education to your career goals and timeline.
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Accordion Section */}
      <div className="flex flex-col gap-4 w-full max-w-md md:hidden">
        {cards.map((card, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`overflow-hidden border border-purple-300 shadow-md transition-all duration-300 ${
                openIndex === index ? "rounded-lg" : "rounded-full"
              } ${mobileCardColors[index % mobileCardColors.length]}`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`relative flex items-center justify-center w-full px-6 py-4 font-semibold ${
                  mobileTextColors[index % mobileTextColors.length]
                }`}
              >
                <span className="pointer-events-none">{card.heading}</span>
                <ChevronDown
                  className={`w-5 h-5 absolute right-6 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#F1E6FF] px-6 py-4 overflow-hidden"
                  >
                    <img
                      src={card.image}
                      alt={card.heading}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {/* Use same logic for highlights here */}
                      {cards[index].description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* 👇 Bottom Section with Scroll Animation */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          hidden: { opacity: 0, y: 50, transition: { duration: 0.6 } },
        }}
        className="w-full max-w-4xl mt-16"
      >
        {/* Desktop Image */}
        <div className="hidden md:block">
          <img
            src="/why_it_work_for_you.svg"
            alt="Why It Works for You"
            className="w-full object-contain rounded-lg"
          />
        </div>

        {/* Mobile Flow Chart */}
        <div className="md:hidden rounded-lg px-4">
          <MobileFlowChart />
        </div>
      </motion.div>
    </div>
  );
};

// 👇 MobileFlowChart component
const MobileFlowChart = () => {
  return (
    <div className="flex flex-col items-center px-4 text-white space-y-4">
      <div className="w-full max-w-xs relative space-y-4">
        <div className="flex justify-start">
          <img
            src="/x3.svg"
            alt="Why It Works for You"
            className="w-36 h-36 object-contain rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="/purple-arrow-down.svg"
            alt="Arrow"
            className="w-14 h-17 object-contain"
          />
        </div>
        <div className="flex justify-end">
          <img
            src="/x1.svg"
            alt="Real-World Experience"
            className="w-36 h-36 object-contain rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="/purple-arrow-down2.svg"
            alt="Arrow"
            className="w-14 h-17 object-contain"
          />
        </div>
        <div className="flex justify-start">
          <img
            src="/x2.svg"
            alt="Flexible Learning Path"
            className="w-36 h-36 object-contain rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="/purple-arrow-down3.svg"
            alt="Arrow"
            className="w-17 h-17 object-contain"
          />
        </div>
        <div className="flex justify-end">
          <img
            src="/x4.svg"
            alt="Global Opportunities"
            className="w-36 h-36 object-contain rounded-full shadow-md transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default CenteredBoxWithCards;
