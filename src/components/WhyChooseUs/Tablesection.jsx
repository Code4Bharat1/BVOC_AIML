"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const DegreeComparisonTable = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkIfMobile, 150);
    };

    checkIfMobile();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const descVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const videoContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center" ref={ref}>
      <motion.h2
        className="text-3xl font-semibold text-white mb-4 leading-snug"
        variants={headingVariants}
        initial="hidden"
        animate={controls}
      >
        <span className="text-[#AC6CFF]">B.Voc</span> vs{" "}
        <span className="text-[#AC6CFF]">Traditional Degrees </span> <br />
        <span className="text-white">The Clear Choice for Your Future</span>
      </motion.h2>

      <motion.p
        className="text-gray-300 text-lg leading-relaxed font-sans"
        variants={descVariants}
        initial="hidden"
        animate={controls}
      >
        <span className="font-semibold text-white">
          Choosing the right course is one of the most important decisions
          you'll make. Let's break it down:
        </span>
        <br />
        while traditional degrees like{" "}
        <span className="text-[#AC6CFF] font-semibold">B.Tech</span> and{" "}
        <span className="text-[#AC6CFF] font-semibold">B.Sc</span> offer a solid
        foundation, <span className="text-[#AC6CFF] font-semibold">B.Voc</span>{" "}
        is the{" "}
        <span className="text-[#AC6CFF] font-semibold">
          fast track to industry-ready skills
        </span>
        . Here's why <span className="text-[#AC6CFF] font-semibold">B.Voc</span>{" "}
        stands out:
      </motion.p>

      {/* 🎥 Replaced table with video and AI-themed borders */}
      <motion.div
        className="relative mt-8 border-4 border-white/30 rounded-xl overflow-hidden shadow-lg bg-[#1a1a1a]"
        variants={videoContainerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* AI-themed SVGs in corners */}
        <div className="absolute top-2 left-2 w-8 h-8 opacity-60">
          <svg viewBox="0 0 24 24" fill="#AC6CFF">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.5c-4.7 0-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5 20.5 7.3 20.5 12 16.7 20.5 12 20.5z" />
          </svg>
        </div>
        <div className="absolute bottom-2 right-2 w-8 h-8 opacity-60">
          <svg viewBox="0 0 24 24" fill="#AC6CFF">
            <path d="M12 4.5C8.4 4.5 5.5 7.4 5.5 11s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5S15.6 4.5 12 4.5zm0 11c-2.5 0-4.5-2-4.5-4.5S9.5 6.5 12 6.5 16.5 8.5 16.5 11 14.5 15.5 12 15.5z" />
          </svg>
        </div>

        <video
          className="w-full h-auto rounded-xl"
          controls
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/ai-comparison.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};

export default DegreeComparisonTable;
