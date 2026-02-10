"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    title: "AI & Machine Learning Careers",
    text: "AI and Machine Learning professionals are among the most sought-after in the industry today, with opportunities across every major sector.",
    img: "/Hub/AboutUs_Home.png",
  },
  {
    title: "Data-Driven Roles Are Booming",
    text: "Companies are actively hiring experts who can turn complex data into powerful business decisions and competitive advantages.",
    img: "/Hub/MachineLearning_Home.png",
  },
  {
    title: "Tech Is Transforming Every Industry",
    text: "Healthcare, robotics, finance, and autonomous systems are evolving fast — and you can be part of this transformation.",
    img: "/Hub/AiSoftware_Home.png",
  },
];

const InDemandCareer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#F4F7FB] py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
            Future-Ready Careers Start Here
          </h2>
          <div className="w-24 h-[3px] mx-auto mb-5 rounded-full bg-[#FF7F00]" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Learn skills that align with real industry demand and global career opportunities.
          </p>
        </motion.div>

        {/* ===== CARDS ===== */}
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="group"
            >
              <div
                className="
                  bg-white
                  rounded-[32px]
                  overflow-hidden
                  shadow-md
                  hover:shadow-xl
                  transition
                  h-full
                  flex flex-col
                "
              >
                {/* Image */}
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="
                      w-full h-full object-cover
                      group-hover:scale-105
                      transition duration-500
                    "
                  />
                </div>

       

                {/* Text */}
                <div className="p-6 flex-1 bg-[#05061A] text-white">
                  <h3 className="font-semibold text-sm tracking-wide mb-3 uppercase text-purple-300">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-200">
                    {card.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InDemandCareer;
