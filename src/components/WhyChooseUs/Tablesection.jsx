"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const DegreeComparisonTable = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
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

  const tableData = [
    { feature: "Focus", bvoc: "Get job-ready today", btech: "Theory overload", bsc: "Science geeks only" },
    { feature: "Curriculum", bvoc: "Hands-on, real-world", btech: "Rigid & outdated", bsc: "Mostly books" },
    { feature: "Job Readiness", bvoc: "High—ready on Day 1", btech: "More courses needed", bsc: "Extra steps required" },
    { feature: "Exit Options", bvoc: "Flexible exits", btech: "All or nothing", bsc: "Locked for 3 years" },
    { feature: "Duration", bvoc: "1-3 years", btech: "4 years", bsc: "3 years" },
    { feature: "Best For", bvoc: "Quick career launchers", btech: "Hardcore engineers", bsc: "Future researchers" },
  ];

  const componentRef = useRef(null);
  const isInView = useInView(componentRef, { once: true, margin: "-100px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const headingVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const descriptionVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
  };

  const rowVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.15 * index },
    }),
  };

  const tableVariants = {
    visible: (isMobile) => ({
      borderColor: isMobile ? "#FFFFFF66" : "#AC6CFF",
      boxShadow: isMobile ? "none" : "0 0 15px 3px #AC6CFF",
      transition: { duration: 0.6 },
    }),
    hidden: {
      borderColor: "#FFFFFF66",
      boxShadow: "none",
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center" ref={componentRef}>
      {/* Heading */}
      <motion.h2
        className="text-3xl font-semibold text-white mb-4 leading-snug"
        variants={headingVariants}
        animate={controls}
      >
        <span className="text-[#AC6CFF]">B.Voc</span> vs{" "}
        <span className="text-[#AC6CFF]">B.Tech</span> vs{" "}
        <span className="text-[#AC6CFF]">B.Sc</span>:{" "}
        <span className="text-white">The Clear Choice for Your Future</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-300 text-lg leading-relaxed font-sans"
        variants={descriptionVariants}
        animate={controls}
      >
        <span className="font-semibold text-white">Choosing the right course is one of the most important decisions you'll make. Let's break it down:</span>
        <br />
        while traditional degrees like{" "}
        <span className="text-[#AC6CFF] font-semibold">B.Tech</span> and{" "}
        <span className="text-[#AC6CFF] font-semibold">B.Sc</span> offer a solid foundation,{" "}
        <span className="text-[#AC6CFF] font-semibold">B.Voc</span> is the{" "}
        <span className="text-[#AC6CFF] font-semibold">fast track to industry-ready skills</span>. Here's why{" "}
        <span className="text-[#AC6CFF] font-semibold">B.Voc</span> stands out:
      </motion.p>

      {/* Table */}
      {isMobile ? (
        // Mobile View
        <motion.div
          className="mt-6 relative"
          style={{
            borderRadius: "8px",
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          animate={controls}
          custom={isMobile}
        >
          <div className="flex">
            {/* Feature Column */}
            <div className="relative z-10">
              <motion.div
                className="bg-[#AC6CFF] text-black p-3 font-bold text-center border border-white"
                variants={rowVariants}
                custom={0}
                animate={controls}
              >
                Feature
              </motion.div>
              {tableData.map((row, i) => (
                <motion.div
                  key={`feature-${i}`}
                  className="bg-[#AC6CFF] text-black p-3 font-semibold text-center border border-white flex items-center"
                  style={{ height: "64px" }}
                  variants={rowVariants}
                  custom={i + 1}
                  animate={controls}
                >
                  {row.feature}
                </motion.div>
              ))}
            </div>

            {/* Degrees */}
            <div className="overflow-x-auto">
              <div className="flex min-w-max">
                {["bvoc", "btech", "bsc"].map((degreeKey) => (
                  <div key={degreeKey}>
                    <motion.div
                      className="bg-[#AC6CFF] text-black p-3 font-bold text-center border border-white whitespace-nowrap min-w-32"
                      variants={rowVariants}
                      custom={0}
                      animate={controls}
                    >
                      {degreeKey === "bvoc" ? "B.Voc" : degreeKey === "btech" ? "B.Tech" : "B.Sc"}
                    </motion.div>
                    {tableData.map((row, i) => (
                      <motion.div
                        key={`${degreeKey}-${i}`}
                        className={`p-3 font-medium text-center border border-white whitespace-nowrap min-w-32 flex items-center justify-center ${
                          degreeKey === "bvoc" ? "bg-[#2F1C48]" : "bg-[#232529]"
                        } text-white`}
                        style={{ height: "64px" }}
                        variants={rowVariants}
                        custom={i + 1}
                        animate={controls}
                      >
                        {row[degreeKey]}
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        // Desktop View
        <div className="overflow-x-auto mt-6">
          <motion.table
            className="w-full border-collapse rounded-lg overflow-hidden"
            style={{
              borderRadius: "8px",
              borderWidth: "4px",
              borderStyle: "solid",
            }}
            variants={tableVariants}
            animate={controls}
            custom={isMobile}
          >
            <motion.thead>
              <motion.tr variants={rowVariants} custom={0} animate={controls}>
                <th className="bg-[#AC6CFF] text-black p-3 font-bold text-center border border-white">Feature</th>
                <th className="bg-[#AC6CFF] text-black p-3 font-bold text-center border border-white">B.Voc</th>
                <th className="bg-[#AC6CFF] text-black p-3 font-bold text-center border border-white">B.Tech</th>
                <th className="bg-[#AC6CFF] text-black p-3 font-bold text-center border border-white">B.Sc</th>
              </motion.tr>
            </motion.thead>
            <motion.tbody>
              {tableData.map((row, index) => (
                <motion.tr key={index} variants={rowVariants} custom={index + 1} animate={controls}>
                  <td className="bg-[#AC6CFF] text-black p-3 font-semibold text-center border border-white">{row.feature}</td>
                  <td className="bg-[#2F1C48] text-white p-3 font-medium text-center border border-white">{row.bvoc}</td>
                  <td className="bg-[#232529] text-white p-3 font-medium text-center border border-white">{row.btech}</td>
                  <td className="bg-[#232529] text-white p-3 font-medium text-center border border-white">{row.bsc}</td>
                </motion.tr>
              ))}
            </motion.tbody>
          </motion.table>
        </div>
      )}
    </div>
  );
};

export default DegreeComparisonTable;
