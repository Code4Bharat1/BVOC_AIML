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
          className="relative bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] p-10 overflow-hidden my-1"
        >
          {/* Grid Background - Hero Style */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>

          {/* Floating Particles - Hero Style */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          {/* Glowing Orbs - Hero Style */}
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-[#00d4ff]/20 blur-[150px] rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ff6b35]/20 blur-[180px] rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              y: [0, -50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#AC6CFF]/20 blur-[140px] rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />

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
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-start pl-6 lg:pl-24 bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] pb-8 relative"
        >
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>

          <div className="relative z-10">
            <h1 className="text-white text-2xl lg:text-5xl font-bold pt-8">
              <span className="text-[#00d4ff]">Nexcore</span> Alliance LLP –{" "}
              <br className="lg:hidden" />A Clear Path Forward
            </h1>
            <p className="text-white/80 text-xl lg:text-3xl pt-4 mb-10">
              With exit points tailored to your goals, our{" "}
              <span className="text-[#ff6b35] font-semibold">NSQF-certified</span>{" "}
              program offers flexibility
            </p>

            {/* Button */}
            <Link
              href="/contact"
              className="inline-block px-8 py-3 font-semibold rounded-full text-white bg-gradient-to-r from-[#ff6b35] via-[#AC6CFF] to-[#00d4ff] hover:opacity-90 transition shadow-[0_0_25px_rgba(255,107,53,0.4)] border border-white/20"
            >
              Explore More
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden overflow-x-hidden relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b]">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Glowing Orbs */}
          <motion.div
            className="absolute top-10 right-10 w-60 h-60 bg-[#00d4ff]/20 blur-[100px] rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-72 h-72 bg-[#AC6CFF]/20 blur-[120px] rounded-full"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        {/* Heading */}
        <div className="relative mt-20 text-start pl-6 lg:pl-24 z-10">
          <h1 className="text-white text-2xl lg:text-5xl font-bold text-center">
            Flexible Career Support
          </h1>
        </div>

        {/* Steps */}
        <div className="relative w-full max-w-xs h-[600px] mx-auto overflow-x-hidden z-10">
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
        <div className="relative mt-10 text-start pl-6 lg:hidden z-10">
          <h1 className="text-white text-3xl font-bold">
            <span className="text-[#00d4ff]">Nexcore</span> Alliance LLP –{" "}
            <br className="lg:hidden" />A Clear Path Forward
          </h1>
          <p className="text-white/80 text-xl pt-4 mb-10">
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