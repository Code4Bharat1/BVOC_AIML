"use client";

import React from "react";

// Cards data
const cardsData = [
  {
    title: "B.Voc Degree",
    duration: "6 Semesters • 3 Years",
    description:
      "Comprehensive vocational degree combining academic depth with real industry exposure and internships.",
    accent: "#007BFF",
    tag: "Full Degree",
  },
  {
    title: "Advanced Diploma",
    duration: "4 Semesters • 2 Years",
    description:
      "Focused program for students aiming to enter specialized technical roles with strong hands-on skills.",
    accent: "#FF7F00",
    tag: "Career Track",
  },
  {
    title: "Diploma",
    duration: "2 Semesters • 1 Year",
    description:
      "Fast-track option to gain core vocational skills and start working quickly in entry-level roles.",
    accent: "#007BFF",
    tag: "Fast Entry",
  },
  {
    title: "Certificate",
    duration: "1 Semester • 6 Months",
    description:
      "Short-term skill certification designed for quick upskilling or career exploration.",
    accent: "#FF7F00",
    tag: "Skill Boost",
  },
];

const SemesterCards = () => {
  return (
    <section className="relative w-full bg-white py-5 px-4 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-500/5 blur-[140px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-orange-400/5 blur-[140px] rounded-full" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C]"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Our Programs
        </h2>
        <p className="mt-4 text-[#2C2C2C]/70 max-w-2xl mx-auto text-base md:text-lg">
          Choose a learning path that matches your goals — from short-term skill
          programs to full vocational degrees.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="group rounded-2xl border bg-white p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            style={{ borderColor: `${card.accent}40` }}
          >
            {/* Tag */}
            <div
              className="inline-block mb-4 px-3 py-1 text-xs font-semibold rounded-full"
              style={{
                backgroundColor: `${card.accent}15`,
                color: card.accent,
              }}
            >
              {card.tag}
            </div>

            {/* Title */}
            <h3
              className="text-xl font-bold mb-1"
              style={{ color: card.accent }}
            >
              {card.title}
            </h3>

            {/* Duration */}
            <p className="text-sm font-medium text-[#2C2C2C]/70 mb-4">
              {card.duration}
            </p>

            {/* Description */}
            <p className="text-sm leading-relaxed text-[#2C2C2C]/75">
              {card.description}
            </p>

            {/* Bottom Accent Line */}
            <div
              className="mt-6 h-[3px] w-12 rounded-full transition-all duration-300 group-hover:w-20"
              style={{ backgroundColor: card.accent }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SemesterCards;
