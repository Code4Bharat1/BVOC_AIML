"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Hammer, Award, Users, Rocket } from "lucide-react";

const cardData = [
  {
    title: "Strategic Industry Partnerships",
    content:
      "Collaborations with leading tech companies offering co-branded global certifications.",
    icon: Briefcase,
  },
  {
    title: "Hands-on Practical Learning",
    content:
      "Real-world projects, internships, and live industry case studies.",
    icon: Hammer,
  },
  {
    title: "NAAC A+ Accredited Excellence",
    content:
      "Recognized for academic excellence and industry-integrated curriculum.",
    icon: Award,
  },
  {
    title: "Career Guidance & Mentorship",
    content:
      "Dedicated mentors and placement support for long-term career success.",
    icon: Users,
  },
  {
    title: "Future-Ready Curriculum",
    content:
      "Designed to build digital-first skills aligned with industry demand.",
    icon: Rocket,
  },
];

const FiveCards = () => {
  return (
    <section className="bg-[#eef2f7] py-28 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-24"
        >
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C]">
  Why Choose <span className="text-blue-900">Us</span>
</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to build a successful technology career — under one roof.
          </p>
        </motion.div>

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="md:hidden grid gap-10 justify-items-center">
          {cardData.map((item, i) => (
            <HexCard key={i} data={item} />
          ))}
        </div>

        {/* ================= DESKTOP HONEYCOMB (UNCHANGED) ================= */}
        <div className="hidden md:flex flex-col items-center">

          {/* ROW 1 */}
          <div className="flex gap-[220px]">
            <HexCard data={cardData[0]} />
            <HexCard data={cardData[1]} />
          </div>

          {/* ROW 2 */}
          <div className="-mt-40">
            <HexCard data={cardData[2]} center />
          </div>

          {/* ROW 3 */}
          <div className="-mt-40 flex gap-[220px]">
            <HexCard data={cardData[3]} />
            <HexCard data={cardData[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiveCards;

/* ================= HEX CARD ================= */

const HexCard = ({ data, center }) => {
  const Icon = data.icon;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`relative
        w-[280px] h-[250px]
        md:w-[340px] md:h-[300px]
        flex items-center justify-center
        ${center ? "md:scale-105" : ""}
      `}
      style={{
        clipPath:
          "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
        background: "#ffffff",
        border: "2px solid #e5e7eb",
        boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
      }}
    >
      {/* BORDER OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          clipPath:
            "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
          border: "2px solid #e5e7eb",
          pointerEvents: "none",
        }}
      />

      {/* CONTENT */}
      <div className="text-center px-8 md:px-10">
        <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-5 rounded-full bg-[#fff1e6] flex items-center justify-center">
          <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#FF7F00]" />
        </div>

        <h3 className="font-semibold text-[#2C2C2C] text-sm md:text-base mb-2 md:mb-3">
          {data.title}
        </h3>

        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
          {data.content}
        </p>
      </div>
    </motion.div>
  );
};
