"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WhyChooseBVoc = () => {
  return (
    <div className="flex flex-col items-center bg-[#2d2544] text-white p-10 rounded-xl shadow-lg overflow-hidden">
      {/* Header Section */}
      <h1 className="text-4xl font-extrabold mb-8 text-center">
        Why Choose <span className="text-purple-400">B.Voc?</span>
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start gap-10 w-full max-w-6xl">
        {/* Image Section with scroll-triggered animation */}
        <motion.div
          className="flex-1"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/bvoc-image.png"
            alt="B.Voc illustration"
            width={500}
            height={300}
            className="rounded-xl shadow-md"
          />
        </motion.div>

        {/* Text Section with scroll-triggered animation */}
        <motion.div
          className="flex-1"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Fast-Track Your Career
          </h2>
          <p className="mb-6 text-base leading-relaxed">
            Industry-driven curriculum, hands-on internships, and real-world
            projects get you job-ready quicker than traditional degrees.
          </p>

          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            B.Voc vs. Traditional Degrees
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-4">
            <li>
              <strong>B.Tech/B.E:</strong> Strong theory, but lacks job
              readiness.
            </li>
            <li>
              <strong>B.Sc:</strong> Great for research, but not
              industry-focused.
            </li>
            <li>Lead in AI, ML, and Data Science</li>
          </ul>

          <p className="text-base leading-relaxed">
            B.Voc equips you with the skills to excel in these fast-evolving
            fields and launch your career faster.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseBVoc;
