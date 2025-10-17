"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function CareerPath() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] w-full py-16 px-6 relative overflow-hidden"
    >
      {/* Circle Element OUTSIDE content container */}
      <div className="absolute top-24 lg:top-[55%] left-0 -translate-y-1/2 z-0 overflow-hidden">
        <Image
          src="/elements/CircleElement_Home.svg"
          alt="Circle Element"
          width={140}
          height={100}
          className="object-cover w-16 lg:w-40"
        />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">
        {/* Left Side */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="z-10"
        >
          <h2 className="text-white text-4xl lg:text-5xl font-extrabold my-6 lg:my-12">
            Professional Journey
          </h2>

          <div className="relative z-10">
            <Image
              src="/CareerPath.png"
              alt="Career Path"
              width={500}
              height={500}
            />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Star Element */}
          <div className="absolute right-2 top-20 lg:right-28 lg:top-48 transform -translate-y-1/2 z-0">
            <Image
              src="/elements/CareerStarElement_Home.svg"
              alt="Star Element"
              width={30}
              height={120}
            />
          </div>

          <div className="relative z-10">
            {/* For Desktop */}
            <h3 className="hidden lg:block text-[#00d4ff] text-5xl font-bold mb-10 leading-14">
              Where Will Your Journey Take You?
            </h3>
            <p className="hidden lg:block text-white text-3xl leading-12">
              The best part? You're not limited. <br />
              Whether you're just starting or you're <br />
              aiming for an advanced role, the <br />
              Bachelor's in AI & ML degree offers a clear path to <br />
              exciting opportunities at every stage of <br />
              your career.
            </p>

            {/* For Mobile */}
            <h3 className="lg:hidden text-[#00d4ff] text-center text-2xl font-bold mb-10 leading-7 mt-8">
              Where Will Your Journey <br /> Take You?
            </h3>
            <p className="lg:hidden text-white text-xl text-center leading-8">
              The best part? You're not limited. Whether you're just starting or
              you're aiming for an advanced role, the Bachelor's in AI & ML degree
              offers a clear path to exciting opportunities at every stage of
              your career.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CareerPath;