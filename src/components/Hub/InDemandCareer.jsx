"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const InDemandCareer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const headingVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Star animations coming from different directions + fade
  const starVariants = {
    hiddenTopLeft: { opacity: 0, x: -50, y: -50 },
    visibleTopLeft: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hiddenTopRight: { opacity: 0, x: 50, y: -30 },
    visibleTopRight: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hiddenBottomLeft: { opacity: 0, x: -40, y: 40 },
    visibleBottomLeft: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hiddenBottomRight: { opacity: 0, x: 40, y: 40 },
    visibleBottomRight: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="hidden md:block text-white text-center font-bold text-5xl my-16"
      >
        In-Demand Careers in AI & Emerging Tech
      </motion.h2>

      <section
        ref={sectionRef}
        className="hidden md:block relative bg-white bg-[url('/CareerDemand_Home-bg.svg')] bg-cover bg-center py-16 px-4"
      >
        <div className="text-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex justify-center"
          >
            <Image
              src="/Career-demand-imgs.svg"
              alt="In-Demand Careers"
              width={600} // Adjust width as needed
              height={400} // Adjust height as needed
              className="mx-auto w-7xl"
            />
          </motion.div>
        </div>

        {/* Decorative Stars */}
        <motion.div
          variants={starVariants}
          initial="hiddenTopLeft"
          animate={isInView ? "visibleTopLeft" : "hiddenTopLeft"}
          className="absolute top-1/3 left-4"
        >
          <Image
            src="/elements/StarsElementWhite.svg"
            alt="Stars Decoration Top Left"
            width={50}
            height={50}
          />
        </motion.div>

        <motion.div
          variants={starVariants}
          initial="hiddenTopRight"
          animate={isInView ? "visibleTopRight" : "hiddenTopRight"}
          className="absolute top-20 right-16"
        >
          <Image
            src="/elements/StarsElementWhite.svg"
            alt="Stars Decoration Top Right"
            width={38}
            height={50}
          />
        </motion.div>

        <motion.div
          variants={starVariants}
          initial="hiddenBottomLeft"
          animate={isInView ? "visibleBottomLeft" : "hiddenBottomLeft"}
          className="absolute bottom-6 left-40"
        >
          <Image
            src="/elements/StarsElement.svg"
            alt="Stars Decoration Bottom Left"
            width={40}
            height={50}
          />
        </motion.div>

        <motion.div
          variants={starVariants}
          initial="hiddenBottomRight"
          animate={isInView ? "visibleBottomRight" : "hiddenBottomRight"}
          className="absolute bottom-28 right-[35%]"
        >
          <Image
            src="/elements/StarsElementWhite.svg"
            alt="Stars Decoration Bottom Right"
            width={35}
            height={50}
          />
        </motion.div>
      </section>
    </>
  );
};

export default InDemandCareer;
