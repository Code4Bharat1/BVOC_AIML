"use client";

import React from "react";
import Image from "next/image";
import { IoMdPlay } from "react-icons/io";
import { motion } from "framer-motion";
import EnrollNow from "../Hub/EnrollNow";

const PlacementAssistance = () => {
  return (
    // Wrapper to prevent horizontal scrollbar during animation
    <section className="overflow-x-hidden w-7xl max-w-full mx-auto px-6 py-20 bg-[url('/placement-Assist-bg-mob.svg')] bg-no-repeat bg-cover lg:bg-none mb-8">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <Image
            src="/placement-card.png "
            alt="Placement Assistance"
            width={500}
            height={200}
            className="rounded-2xl lg:w-full lg:h-96 object-cover"
          />
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-start"
        >
          {/* For desktop */}
          <h1 className="hidden lg:block text-5xl font-bold text-white leading-tight mb-10">
            Placement Assistance: <br className="hidden lg:block" />
            <span className="text-[#AC6CFF]">Your Path to Success!</span>
          </h1>
          <p className="hidden lg:block text-2xl text-white my-14 pr-20">
            At <span className="text-[#AC6CFF]"> Nexcore Alliance LLP</span>, we
            don't just teach—you <span className="text-[#AC6CFF]"> intern</span>{" "}
            and <span className="text-[#AC6CFF]">work</span>. Our{" "}
            <span className="text-[#AC6CFF]">100% placement assistance</span>{" "}
            ensures you're job-ready.
          </p>

          {/* For Mobile */}
          <h1 className="lg:hidden text-3xl font-bold text-black text-center leading-tight mb-4">
            Placement Assistance: <br />
            <span className="text-[#460E73]">Your Path to Success!</span>
          </h1>
          <p className="lg:hidden text-lg text-balck font-bold px-6 mb-6 text-center">
            At <span className="text-[#460E73]"> Nexcore Alliance LLP</span>, we
            don't just teach—you <span className="text-[#460E73]"> intern</span>{" "}
            and <span className="text-[#460E73]">work</span>. Our{" "}
            <span className="text-[#460E73]">100% placement assistance</span>{" "}
            ensures you're job-ready.
          </p>
          <EnrollNow />
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementAssistance;
