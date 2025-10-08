"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import EnrollNow from "../Hub/EnrollNow";

const PlacementAssistance = () => {
  return (
    <section className="w-full overflow-x-hidden px-6 py-20 bg-gradient-to-r from-[#EADAFF] to-[#D6B3FF] rounded-none shadow-lg mb-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md lg:max-w-none">
            <Image
              src="/placement-card.png"
              alt="Placement Assistance"
              width={500}
              height={300}
              className="rounded-3xl w-full object-cover shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#A33DFF]/10 to-transparent rounded-3xl"></div>
          </div>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-start"
        >
          {/* Desktop Header */}
          <h1 className="hidden lg:block text-5xl font-extrabold text-[#A33DFF] leading-tight mb-8">
            Placement Assistance:
            <br />
            <span className="text-black">Your Path to Success!</span>
          </h1>

          {/* Desktop Text */}
          <p className="hidden lg:block text-xl text-black font-medium leading-relaxed pr-10">
            At{" "}
            <span className="font-bold text-[#A33DFF]">
              Nexcore Alliance LLP
            </span>
            , we don’t just teach—you{" "}
            <span className="text-[#A33DFF] font-bold">intern</span> and{" "}
            <span className="text-[#A33DFF] font-bold">work</span>. Our{" "}
            <span className="font-bold text-[#A33DFF]">
              100% placement assistance
            </span>{" "}
            ensures you’re job-ready for the real world.
          </p>

          {/* Mobile Header */}
          <h1 className="lg:hidden text-3xl font-extrabold text-[#A33DFF] leading-tight mb-4 text-center">
            Placement Assistance:
            <br />
            <span className="text-black">Your Path to Success!</span>
          </h1>

          {/* Mobile Text */}
          <p className="lg:hidden text-base text-black font-medium px-4 mb-6 text-center">
            At{" "}
            <span className="font-bold text-[#A33DFF]">
              Nexcore Alliance LLP
            </span>
            , we don’t just teach—you{" "}
            <span className="font-bold text-[#A33DFF]">intern</span> and{" "}
            <span className="font-bold text-[#A33DFF]">work</span>. Our{" "}
            <span className="font-bold text-[#A33DFF]">
              100% placement assistance
            </span>{" "}
            ensures you’re job-ready.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <EnrollNow />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementAssistance;
