"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const leftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-7xl max-w-full mx-auto px-6 py-10" ref={ref}>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Side */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:w-[70%] w-full"
        >
          {/* For Mobile */}
          <h1 className="lg:hidden text-4xl text-center font-bold text-white leading-12">
            Where Innovation <br /> Meets World-Class <br />
            <span className="text-[#AC6CFF]">Infrastructure.</span>
          </h1>
          <p className="lg:hidden my-10 text-2xl text-center text-white">
            <span className="text-[#AC6CFF]">High-Tech</span> Learning Spaces,
            And <span className="text-[#AC6CFF]"> Smart Classrooms.</span>
            Built to empower hands-on learning, creativity, and real-world
            simulation.
          </p>

          {/* For Desktop */}
          <h1 className="hidden lg:block text-4xl md:text-5xl font-bold text-white leading-14">
            Where Innovation Meets <br /> World-Class{" "}
            <span className="text-[#AC6CFF]">Infrastructure.</span>
          </h1>
          <p className="hidden lg:block mt-10 text-lg lg:text-2xl  text-white">
            <span className="text-[#AC6CFF]">High-Tech</span> Learning Spaces,
            And <span className="text-[#AC6CFF]"> Smart Classrooms.</span>{" "}
            <br />
            Built to empower hands-on learning, creativity, and real-world{" "}
            <br />
            simulation.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden lg:block lg:w-[30%] w-full relative h-[200px]"
        >
          <Image
            src="/elements/StarsElementWhiteBg.svg"
            alt="Icon 1"
            width={60}
            height={60}
            className="absolute top-0 left-0"
          />
          <Image
            src="/elements/StarsElement.svg"
            alt="Icon 2"
            width={60}
            height={60}
            className="lg:h-8 lg:w-8 absolute -top-8 -right-10"
          />
          <Image
            src="/elements/SubtractInfraElement.svg"
            alt="Icon 3"
            width={60}
            height={60}
            className="lg:w-52 absolute -bottom-20 left-0"
          />
          <Image
            src="/elements/StarsElementWhiteBg.svg"
            alt="Icon 4"
            width={60}
            height={60}
            className="absolute bottom-0 right-8"
          />
          <Image
            src="/elements/StarsElement.svg"
            alt="Icon 5"
            width={40}
            height={60}
            className="absolute bottom-20 left-1/3 transform -translate-x-1/2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
