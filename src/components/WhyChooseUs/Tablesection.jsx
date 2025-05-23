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

  const tableData = [
    {
      feature: "Focus",
      bvoc: "Get job-ready today",
      btech: "Theory overload",
      bsc: "Science geeks only",
    },
    {
      feature: "Curriculum",
      bvoc: "Hands-on, real-world",
      btech: "Rigid & outdated",
      bsc: "Mostly books",
    },
    {
      feature: "Job Readiness",
      bvoc: "High—ready on Day 1",
      btech: "More courses needed",
      bsc: "Extra steps required",
    },
    {
      feature: "Exit Options",
      bvoc: "Flexible exits",
      btech: "All or nothing",
      bsc: "Locked for 3 years",
    },
    {
      feature: "Duration",
      bvoc: "1-3 years",
      btech: "4 years",
      bsc: "3 years",
    },
    {
      feature: "Best For",
      bvoc: "Quick career launchers",
      btech: "Hardcore engineers",
      bsc: "Future researchers",
    },
    {
      feature: "Industry Relevance",
      bvoc: "Job-Ready",
      btech: "Outdated",
      bsc: "Limited Use",
    },
    {
      feature: "Internships & Exposure",
      bvoc: "Industry Exposure",
      btech: "Limited Practice",
      bsc: "Limited Use",
    },
    {
      feature: "Career Outcome",
      bvoc: "job-ready skills",
      btech: "Needs Specialization",
      bsc: "Additional Training",
    },
  ];

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

  const tableVariants = {
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
        <span className="text-[#AC6CFF]">B.Tech</span> vs{" "}
        <span className="text-[#AC6CFF]">B.Sc</span>:{" "}
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

      {isMobile ? (
        // Mobile — Centered feature column text & taller columns
        <div className="mt-6 relative border-2 border-white/40 rounded-md">
          <div className="flex">
            <div className="relative z-10">
              <div className="bg-[#AC6CFF] text-black p-3 font-bold text-center border border-white">
                Feature
              </div>
              {tableData.map((row, i) => (
                <div
                  key={`feature-${i}`}
                  className="bg-[#AC6CFF] text-black px-3 py-5 font-semibold text-center border border-white flex items-center justify-center"
                  style={{ height: "80px" }} // <- Increased height
                >
                  {row.feature}
                </div>
              ))}
            </div>
            <div className="overflow-x-auto">
              <div className="flex min-w-max">
                {["bvoc", "btech", "bsc"].map((degreeKey) => (
                  <div key={degreeKey}>
                    <div className="bg-[#AC6CFF] text-black p-3 font-bold text-center border border-white min-w-32">
                      {degreeKey === "bvoc"
                        ? "B.Voc"
                        : degreeKey === "btech"
                        ? "B.Tech"
                        : "B.Sc"}
                    </div>
                    {tableData.map((row, i) => (
                      <div
                        key={`${degreeKey}-${i}`}
                        className={`px-3 py-5 font-medium text-center border border-white min-w-32 flex items-center justify-center ${
                          degreeKey === "bvoc" ? "bg-[#2F1C48]" : "bg-[#232529]"
                        } text-white`}
                        style={{ height: "80px" }} // <- Increased height
                      >
                        {row[degreeKey]}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop — Animate table when in view
        <motion.div
          className="overflow-x-auto mt-6 border-2 border-white/30 rounded-md"
          variants={tableVariants}
          initial="hidden"
          animate={controls}
        >
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="bg-[#AC6CFF] text-black p-3 font-bold text-center border border-white">
                  Feature
                </th>
                <th className="bg-[#AC6CFF] text-black p-3 font-bold text-center border border-white">
                  B.Voc (Bachelor of Vocation)
                </th>
                <th className="bg-[#AC6CFF] text-black p-3 font-bold text-center border border-white">
                  B.Tech (Bachelor of Technology)
                </th>
                <th className="bg-[#AC6CFF] text-black p-3 font-bold text-center border border-white">
                  B.Sc (Bachelor of Science)
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="bg-[#AC6CFF] text-black p-3 font-semibold text-center border border-white">
                    {row.feature}
                  </td>
                  <td className="bg-[#2F1C48] text-white p-3 font-medium text-center border border-white">
                    {row.bvoc}
                  </td>
                  <td className="bg-[#232529] text-white p-3 font-medium text-center border border-white">
                    {row.btech}
                  </td>
                  <td className="bg-[#232529] text-white p-3 font-medium text-center border border-white">
                    {row.bsc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </div>
  );
};

export default DegreeComparisonTable;
