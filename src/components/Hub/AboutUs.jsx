import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  // Unified fade-in animation for all elements
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Container variant for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="bg-[#AC6CFF] p-6 lg:p-8 rounded-lg min-h-[500px] flex flex-col lg:flex-row justify-between items-center gap-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Heading at top for mobile only */}
      <motion.h2
        className="text-3xl font-extrabold text-[#2F1C48] block lg:hidden text-center"
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h2>

      {/* Left (Image) */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center"
        variants={fadeInVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/AboutUs_Home.png"
          alt="About Us Image"
          width={500}
          height={384}
          className="rounded-2xl w-full max-w-md h-auto"
        />
      </motion.div>

      {/* Right (Text) */}
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left text-[#2F1C48]"
        variants={fadeInVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Desktop heading only */}
        <motion.h2 
          className="hidden lg:block text-5xl font-extrabold mb-4"
          variants={fadeInVariants}
        >
          About Us
        </motion.h2>

        <motion.h3 
          className="text-2xl lg:text-4xl font-bold text-white mb-2"
          variants={fadeInVariants}
        >
          Our Vision
        </motion.h3>
        
        <motion.p 
          className="text-lg lg:text-3xl text-white mb-4"
          variants={fadeInVariants}
        >
          Empowering You for the Future
        </motion.p>
        
        <motion.p 
          className="text-base lg:text-lg text-white leading-6 lg:leading-8"
          variants={fadeInVariants}
        >
          At{" "}
          <span className="text-[#2F1C48] font-bold">Nexcore Alliance LLP</span>, we're dedicated to
          shaping India's next generation of digital leaders by offering cutting-edge programs
          designed for the real world. In partnership with{" "}
          <span className="text-[#2F1C48] font-bold">Guru Kashi University (GKU)</span>, we bring
          you a{" "}
          <span className="text-[#2F1C48] font-bold">B.Voc AI & ML</span> program that's built to
          make you industry-ready and globally competitive.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;