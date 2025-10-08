"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const careers = [
  { img: "/career1.svg", alt: "Career 1", label: "Adoption" },
  { img: "/career2.svg", alt: "Career 2", label: "Opportunities" },
  { img: "/career3.svg", alt: "Career 3", label: "Preparedness" },
  { img: "/career4.svg", alt: "Career 4", label: "Innovation" },
  { img: "/career5.svg", alt: "Career 5", label: "Practicality" },
  { img: "/career6.svg", alt: "Career 6", label: "Integration" },
];

const CareerOpportunities = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="z-10 relative overflow-hidden m-2 my-20 lg:m-0 py-10 max-w-7xl lg:max-w-full lg:w-full h-auto lg:h-[600px]
      bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] text-white"
    >
      {/* Decorative Orbs / Stars */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-[#00d4ff] rounded-full blur-md animate-pulse" />
      <div className="absolute bottom-16 right-12 w-6 h-6 bg-[#ff6b35] rounded-full blur-lg animate-ping" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#AC6CFF] rounded-full blur-md opacity-80" />

      <div className="container mx-auto p-8 text-start relative z-10">
        {/* Headings */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-7 lg:mb-12 text-center lg:text-left lg:pl-20"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-white whitespace-pre-line">
            Career & Opportunities:{"\n"}The Future of Tech Starts Here
          </h1>
          <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent pt-4 lg:pt-8 whitespace-pre-line">
            Step Into High-Demand Careers
          </h2>
        </motion.div>

        {/* Career Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10 text-center lg:pl-24"
        >
          {careers.map((career, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col justify-center items-center transition-transform hover:scale-110 w-full max-w-[140px] mx-auto"
            >
              <div
                className="w-24 h-24 flex justify-center items-center 
                bg-gradient-to-br from-[#00d4ff]/10 via-[#AC6CFF]/10 to-[#ff6b35]/10 
                rounded-2xl shadow-[0_0_20px_rgba(172,108,255,0.3)] 
                hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all"
              >
                <Image
                  src={career.img}
                  alt={career.alt}
                  width={100}
                  height={100}
                  className="transition-transform group-hover:scale-110"
                />
              </div>
              <p
                className="mt-4 text-sm lg:text-2xl font-bold 
                bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] 
                bg-clip-text text-transparent"
              >
                {career.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Cyan Curve */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35]" />
    </section>
  );
};

export default CareerOpportunities;
