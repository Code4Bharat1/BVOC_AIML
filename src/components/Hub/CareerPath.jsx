"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function CareerPath() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-[#F4F7FB] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

        {/* ===== LEFT IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div
            className="
              bg-white
              rounded-2xl
              p-3
              border border-[#007BFF]/20
              shadow-[0_10px_35px_rgba(0,123,255,0.15)]
            "
          >
            <Image
              src="/CareerPath1.png"
              alt="Career Path"
              width={520}
              height={520}
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* ===== RIGHT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            Professional Journey
          </h2>

          {/* Accent line */}
          <div className="w-20 h-[3px] bg-[#FF7F00] mb-6 mx-auto lg:mx-0 rounded-full" />

          <h3 className="text-2xl lg:text-3xl font-semibold text-[#007BFF] mb-4">
            Where Will Your Journey Take You?
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            The best part? You're not limited. Whether you're just starting or
            aiming for an advanced role, the Bachelor's in{" "}
            <span className="font-semibold text-[#FF7F00]">
              AI & ML, Artificial Intelligence & Robotics, Cyber Security & Graphic Animation, VFX & Multimedia
            </span>{" "}
            offers a clear path to exciting opportunities at every stage of your
            career.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CareerPath;
