"use client";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const CenteredBoxWithCards = () => {
  const cards = [
    {
      image: "/TopBenifits/topbenefits1.svg",
      heading: "Job-Ready Skills from Day 1",
      description:
        "Get hands-on, industry-driven training from the start. Work on live projects and global challenges to gain the skills employers want.",
    },
    {
      image: "/TopBenifits/topbenefits2.svg",
      heading: "Work on International Projects",
      description:
        "Collaborate with global industry leaders and gain experience that sets you apart in the international job market.",
    },
    {
      image: "/TopBenifits/topbenefits3.svg",
      heading: "Built-in Internships",
      description:
        "Apply what you learn with real-world internships and projects—boosting your resume and skills while still studying.",
    },
    {
      image: "/TopBenifits/topbenefits5.svg",
      heading: "Earn While You Learn",
      description:
      "Enjoy the opportunity to earn through internships, gaining practical experience and financial support along the way.",
    },
    {
      image: "/TopBenifits/topbenefits4.svg",
      heading: "Recognized by UGC & NSQF",
      description:
        "Your qualifications are UGC-approved and NSQF-certified, opening doors to global opportunities.",
    },
    {
      image: "/TopBenifits/topbenefits6.svg",
      heading: "Flexible Exits",
      description:
        "Exit with a diploma, advanced diploma, or degree—tailor your education to your career goals and timeline.",
    },
  ];

  const [isClient, setIsClient] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setIsClient(true); // ✅ Fix hydration mismatch
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView]);

  if (!isClient) return null; // ✅ Prevent mismatches on SSR

  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 min-h-screen lg:space-y-16">
      {/* Title Box */}
      <div className="w-full text-center">
        <div className="bg-purple-500 mb-10 lg:mb-0 w-full max-w-[1182px] h-auto mx-auto px-4 py-6 rounded-lg shadow-lg border-2 border-black flex items-center justify-center">
          {/* For small screens */}
          <h1 className="text-black text-base font-bold md:hidden leading-relaxed">
            Top Benefits: <br />
            <span className="text-white">The Fast-Track to Your Career</span>
          </h1>

          {/* For medium+ screens */}
          <h1 className="hidden md:block text-black text-3xl font-bold leading-relaxed text-center">
            Top Benefits: <br />
            <span className="text-white">The Fast-Track to Your Career</span>
          </h1>
        </div>
      </div>

      {/* Desktop Cards */}
      <motion.div
        className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#F1E6FF] border-4 border-[#AC6CFF] shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 rounded-[24px_0px_24px_0px] overflow-hidden"
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
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Accordion */}
      <motion.div
        className="flex flex-col gap-4 w-full max-w-md md:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {cards.map((card, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`overflow-hidden border border-purple-300 shadow-md transition-all duration-300 ${
                isOpen ? "rounded-lg" : "rounded-full"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="relative flex items-center justify-center w-full px-6 py-4 font-semibold text-black bg-[#E4CFFF]"
              >
                <span>{card.heading}</span>
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
                    className="bg-[#F1E6FF] px-6 py-4"
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
            </motion.div>
          );
        })}
      </motion.div>

      {/* ✅ Flow Chart (UNCHANGED) */}
      <motion.div
        className="hidden md:flex justify-center items-center max-w-xl mx-auto"
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 1, rotate: 360 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/why_it_work_for_you.svg"
          alt="Why It Works for You"
          className="w-full object-contain rounded-lg"
        />
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          hidden: { opacity: 1, y: 50, transition: { duration: 0.6 } },
        }}
        className="w-full max-w-4xl mt-16"
      >
        {/* Mobile FlowChart */}
        <div className="md:hidden rounded-lg px-4">
          <MobileFlowChart />
        </div>
      </motion.div>
    </div>
  );
};

// 👇 Leave this fade-in effect as-is
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ✅ UNCHANGED Mobile Flow Chart
const MobileFlowChart = () => (
  <div className="flex flex-col items-center px-4 py-0 text-white">
    <div className="w-full max-w-xs relative h-[700px] hight-of-device-300">
      {/* Step 1 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="absolute top-0 left-4 circle-1"
      >
        <Image
          src="/x3.svg"
          alt="Step 1"
          className="circle-2-size"
          width={144}
          height={144}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="absolute top-[90px] right-20 right-arrow-2 arrow-1"
      >
        <Image
          src="/purple-arrow-down.svg"
          alt="Arrow 1"
          className="arrow-size"
          width={68}
          height={68}
        />
      </motion.div>

      {/* Step 2 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="absolute top-[160px] right-4 circle-2-440"
      >
        <Image
          src="/x1.svg"
          alt="Step 2"
          className="circle-2-size"
          width={144}
          height={144}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="absolute top-[310px] right-28 right-arrow arrow-2"
      >
        <Image
          src="/purple-arrow-down2.svg"
          alt="Arrow 2"
          width={68}
          height={68}
        />
      </motion.div>

      {/* Step 3 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="absolute top-[350px] left-4 circle-2"
      >
        <Image
          src="/x2.svg"
          alt="Step 3"
          className="circle-2-size"
          width={144}
          height={144}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="absolute top-[460px] left-40 arrow-3"
      >
        <Image
          src="/purple-arrow-down3.svg"
          alt="Arrow 3"
          width={68}
          height={68}
        />
      </motion.div>

      {/* Step 4 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="absolute top-[530px] right-4 circle-3"
      >
        <Image
          src="/x4.svg"
          alt="Step 4"
          className="circle-2-size"
          width={144}
          height={144}
        />
      </motion.div>
    </div>
  </div>
);

export default CenteredBoxWithCards;
