"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CareerOpportunities = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animations for heading sliding from left
  const headingVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for career items - left items slide from left, right items from right
  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Data array to map with index for left/right animation
  const careers = [
    { img: "/career1.svg", alt: "Career 1", label: "Adoption" },
    { img: "/career2.svg", alt: "Career 2", label: "Opportunities" },
    { img: "/career3.svg", alt: "Career 3", label: "Preparedness" },
    { img: "/career4.svg", alt: "Career 4", label: "Innovation" },
    { img: "/career5.svg", alt: "Career 5", label: "Practicality" },
    { img: "/career6.svg", alt: "Career 6", label: "Integration" },
  ];

  return (
    <section
      ref={sectionRef}
      className="z-10 bg-cover bg-center m-2 py-10 w-auto lg:h-[600px] bg-[url('/CareerOpp-bg_Home-mob.svg')] lg:bg-[url('/CareerOpp-bg_Home.svg')]"
    >
      <div className="container mx-auto p-8 text-start">
        {/* Heading and Subheading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-7 lg:mb-12 lg:pl-20"
        >
          {/* For mobile */}
          <h1 className="lg:hidden text-3xl text-center font-bold text-[#2B2038] whitespace-pre-line">
            Career & {"\n"}
            Opportunities: {"\n"}
            The Future of Tech {"\n"}
            Starts Here
          </h1>
          <h2 className="lg:hidden text-2xl text-center font-bold text-[#AC6CFF] pt-3 whitespace-pre-line">
            Step Into High-Demand {"\n"}
            Careers
          </h2>

          {/* For desktop */}
          <h1 className="hidden lg:block text-5xl font-bold text-[#2B2038] whitespace-pre-line">
            Career & Opportunities: {"\n"}
            The Future of Tech Starts Here
          </h1>
          <h2 className="hidden lg:block text-xl lg:text-4xl font-bold text-[#AC6CFF] pt-8 whitespace-pre-line">
            Step Into High-Demand Careers
          </h2>
        </motion.div>

        {/* Mobile Career Grid */}
        <div className="lg:hidden grid grid-cols-2 gap-8 text-center">
          {careers.map((career, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? itemVariantsLeft : itemVariantsRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group flex flex-col justify-center items-center w-full max-w-[140px] mx-auto"
            >
              <div className="w-24 h-24 flex justify-center items-center">
                <Image
                  src={career.img}
                  alt={career.alt}
                  width={150}
                  height={150}
                />
              </div>
              <p
                className={`mt-4 text-center break-words whitespace-normal text-sm font-bold ${
                  index === 0 ? "text-black" : "text-white"
                }`}
              >
                {career.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Desktop Career Grid */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-6 lg:pl-16">
          {careers.map((career, index) => (
            <motion.div
              key={index}
              variants={index < 3 ? itemVariantsLeft : itemVariantsRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group flex flex-col justify-center items-center transition-transform transform hover:scale-110 w-full max-w-[140px] mx-auto"
            >
              <div className="w-24 h-24 flex justify-center items-center">
                <Image
                  src={career.img}
                  alt={career.alt}
                  width={150}
                  height={150}
                  className="lg:transition-transform lg:transform lg:group-hover:scale-110"
                />
              </div>
              <p
                className={`mt-4 text-center break-words whitespace-normal text-sm font-bold ${
                  index === 0
                    ? "text-black lg:text-black lg:text-2xl"
                    : index === 3 || index === 4 || index === 5
                    ? "text-white lg:text-white lg:text-2xl"
                    : "text-white lg:text-black lg:text-2xl"
                }`}
              >
                {career.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;
