"use client";
import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ShapeTheFuture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1.2, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="p-5 lg:p-0 bg-[#181234] lg:min-h-screen flex justify-center items-center">
      {/* Card with relative position */}
      <motion.div
        ref={ref}
        className="relative bg-[#3F1F55] z-20 rounded-xl p-8 text-center max-w-7xl w-full shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Positioned image inside the card */}
        <motion.img
          src="/elements/ShapeFutureRobo_Home.svg"
          alt="Shape the Future"
          className="hidden lg:block absolute z-30 lg:-bottom-[200px] lg:-left-30 lg:w-[25rem] lg:h-[50rem]"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-[#fff] mb-4 py-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Ready To Shape The Future?
        </motion.h2>

        <motion.p
          className="text-lg lg:text-3xl text-[#fff] mb-6 lg:px-28"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          The world needs innovators, problem-solvers, and tech leaders. Our
          program is designed to equip you with the skills and experience to
          jump right into the heart of the AI & ML revolution. Your future
          starts now— and we’re here to guide you every step of the way.
        </motion.p>

        <motion.button
          className="hidden lg:flex bg-[#EADAFF] text-[#AC6CFF] mt-5 mb-30 rounded-full px-8 py-3 items-center justify-center gap-2 mx-auto whitespace-nowrap"
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started <ChevronRight />
        </motion.button>

        <div className="lg:hidden flex flex-row items-end justify-between gap-0.5 w-full ml-[-63px]">
          {/* Image touching left edge */}
          <motion.img
            src="/elements/ShapeFutureRobo_Home.svg"
            alt="Shape the Future"
            className="block w-72 h-[13rem] md:w-[23rem] object-contain"
            style={{ marginLeft: 0 }}
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />

          {/* Centered Button */}
          <motion.a
            href="https://wa.me/919892398976?text=Hi, I’m interested in enrolling in your course!"
            target="_blank"
            rel="noopener noreferrer"
          
            className="bg-[#EADAFF] text-[#AC6CFF] mt-5 mb-40 ml-[-90px] rounded-full px-8 py-3 flex items-center justify-center gap-2 mx-auto whitespace-nowrap"
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ChevronRight />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default ShapeTheFuture;
