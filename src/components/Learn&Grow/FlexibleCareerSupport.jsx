"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const FlexibleCareerSupport = () => {
  return (
    <>
      {/* Desktop View (visible on lg and up) */}
      <div className="hidden lg:block overflow-x-hidden overflow-y-hidden">
        {/* Animated Background */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] p-10 overflow-hidden my-10"
        >
          {/* Left Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between z-10 relative"
          >
            <div className="w-full lg:w-[60%] flex justify-center lg:justify-start">
              <Image
                src="/path-to-left-image2.svg"
                alt="Left Icon"
                width={740}
                height={440}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right Positioned Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
            className="absolute right-0 bottom-0 hidden lg:block"
          >
            <Image
              src="/path-to-right-image.svg"
              alt="Right Icon"
              width={580}
              height={500}
              className="object-contain"
            />
          </motion.div>

          {/* Stars & Orbs (Cyan / Orange / Purple theme) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-3 h-3 bg-[#00d4ff] rounded-full blur-sm" />
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#ff6b35] rounded-full blur-[2px]" />
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-[#AC6CFF] rounded-full blur-sm" />
            <div className="absolute bottom-10 right-16 w-5 h-5 bg-[#00d4ff] rounded-full blur-md opacity-70 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-[#ff6b35]/70 rounded-full blur-lg opacity-50" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-start pl-6 lg:pl-24"
        >
          <h1 className="text-white text-2xl lg:text-5xl font-bold">
            <span className="text-[#00d4ff]">Nexcore</span> Alliance LLP –{" "}
            <br className="lg:hidden" />A Clear Path Forward
          </h1>
          <p className="text-[#AC6CFF] text-xl lg:text-3xl pt-4 mb-10">
            With exit points tailored to your goals, our{" "}
            <span className="text-[#ff6b35] font-semibold">NSQF-certified</span>{" "}
            program offers flexibility
          </p>

          {/* Button (Orange gradient) */}
          <Link
  href="/contact"
  className="inline-block px-8 py-3  font-semibold rounded-full text-white bg-gradient-to-r from-[#ff6b35] via-[#ff9155] to-[#ff6b35] hover:opacity-90 transition"
>
  Explore More
</Link>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden overflow-x-hidden">
        {/* Heading */}
        <div className="mt-20 text-start pl-6 lg:pl-24">
          <h1 className="text-white text-2xl lg:text-5xl font-bold text-center">
            Flexible Career Support
          </h1>
        </div>

        {/* Steps */}
        <div className="w-full max-w-xs relative h-[600px] mx-auto overflow-x-hidden">
          {/* Step 1 */}
          <motion.div
            className="absolute top-[50px] left-4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Image src="/circle_1.svg" alt="Step 1" width={144} height={144} />
          </motion.div>

          <motion.div
            className="absolute top-[95px] left-10 text-[#00d4ff] text-20px font-bold"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Personalized <br />
            coaching
          </motion.div>

          {/* Arrow 1 */}
          <div className="absolute top-[130px] right-20">
            <Image src="/Arrow_2.svg" alt="Arrow 1" width={68} height={68} />
          </div>

          {/* Step 2 */}
          <motion.div
            className="absolute top-[230px] right-6"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Image src="/circle_2.svg" alt="Step 2" width={144} height={144} />
          </motion.div>

          <motion.div
            className="absolute top-[255px] right-11 text-[#ff6b35] text-20px font-bold text-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Mock <br />
            interviews <br />& workshops
          </motion.div>

          {/* Arrow 2 */}
          <div className="absolute top-[340px] right-44">
            <Image src="/Arrow_1.svg" alt="Arrow 2" width={68} height={68} />
          </div>

          {/* Step 3 */}
          <motion.div
            className="absolute top-[420px] left-4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Image src="/circle_1.svg" alt="Step 3" width={144} height={144} />
          </motion.div>

          <motion.div
            className="absolute top-[460px] left-9 text-white text-20px font-bold text-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Direct access <br />
            to industry <br />
            jobs
          </motion.div>
        </div>

        {/* Mobile Text */}
        <div className="mt-10 text-start pl-6 lg:hidden">
          <h1 className="text-white text-3xl font-bold">
            <span className="text-[#00d4ff]">Nexcore</span> Alliance LLP –{" "}
            <br className="lg:hidden" />A Clear Path Forward
          </h1>
          <p className="text-[#AC6CFF] text-xl pt-4 mb-10">
            With exit points tailored to your goals, our{" "}
            <span className="text-[#ff6b35] font-semibold">NSQF-certified</span>{" "}
            program offers flexibility
          </p>
        </div>
      </div>
    </>
  );
};

export default FlexibleCareerSupport;
