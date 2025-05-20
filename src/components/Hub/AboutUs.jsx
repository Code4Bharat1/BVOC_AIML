import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div
      ref={sectionRef}
      className="bg-[#AC6CFF] p-6 lg:p-8 rounded-lg min-h-[500px] flex flex-col lg:flex-row justify-between items-center gap-8"
    >
      {/* Heading at top for mobile only */}
      <motion.h2
        className="text-3xl font-extrabold text-[#2F1C48] block lg:hidden text-center"
        variants={leftVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h2>

      {/* Left (Image) */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center"
        variants={leftVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
        variants={rightVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {/* Desktop heading only */}
        <h2 className="hidden lg:block text-5xl font-extrabold mb-4">About Us</h2>

        <h3 className="text-2xl lg:text-4xl font-bold text-white mb-2">Our Vision</h3>
        <p className="text-lg lg:text-3xl text-white mb-4">Empowering You for the Future</p>
        <p className="text-base lg:text-lg text-white leading-6 lg:leading-8">
          At{" "}
          <span className="text-[#2F1C48] font-bold">Nexcore Alliance LLP</span>, we’re dedicated to
          shaping India’s next generation of digital leaders by offering cutting-edge programs
          designed for the real world. In partnership with{" "}
          <span className="text-[#2F1C48] font-bold">Guru Kashi University (GKU)</span>, we bring
          you a{" "}
          <span className="text-[#2F1C48] font-bold">B.Voc AI & ML</span> program that’s built to
          make you industry-ready and globally competitive.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
