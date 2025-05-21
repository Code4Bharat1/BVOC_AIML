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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={sectionRef}
      className="z-10 bg-cover bg-center m-2 lg:m-0 py-10 w-full lg:h-[600px] bg-[url('/CareerOpp-bg_Home-mob.svg')] lg:bg-[url('/CareerOpp-bg_Home.svg')]"
    >
      <div className="container mx-auto p-8 text-start">
        {/* Headings */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-7 lg:mb-12 text-center lg:text-left lg:pl-20"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-[#2B2038] whitespace-pre-line">
            Career & Opportunities:{"\n"}The Future of Tech Starts Here
          </h1>
          <h2 className="text-2xl lg:text-4xl font-bold text-[#AC6CFF] pt-4 lg:pt-8 whitespace-pre-line">
            Step Into High-Demand Careers
          </h2>
        </motion.div>

        {/* Career Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-6 gap-6 text-center lg:pl-24"
        >
          {careers.map((career, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col justify-center items-center transition-transform hover:scale-110 w-full max-w-[140px] mx-auto"
            >
              <div className="w-24 h-24 flex justify-center items-center">
                <Image
                  src={career.img}
                  alt={career.alt}
                  width={100}
                  height={100}
                  className="transition-transform group-hover:scale-110"
                />
              </div>
              <p
                className={`mt-4 text-sm lg:text-2xl font-bold ${
                  index === 0
                    ? "text-black"
                    : index >= 3
                    ? "text-white"
                    : "text-white lg:text-black"
                }`}
              >
                {career.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CareerOpportunities;
