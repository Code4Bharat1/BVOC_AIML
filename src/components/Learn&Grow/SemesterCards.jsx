"use client";

import React from "react";
import { GraduationCap, Award, BookOpen, FileCheck } from "lucide-react";

// Cards data
const cardsData = [
  {
    title: "B.Voc Degree",
    duration: "6 Semesters • 3 Years",
    description:
      "Comprehensive vocational degree combining academic depth with real industry exposure and internships.",
    accent: "#007BFF",
    tag: "Full Degree",
    icon: GraduationCap,
  },
  {
    title: "Advanced Diploma",
    duration: "4 Semesters • 2 Years",
    description:
      "Focused program for students aiming to enter specialized technical roles with strong hands-on skills.",
    accent: "#FF7F00",
    tag: "Career Track",
    icon: Award,
  },
  {
    title: "Diploma",
    duration: "2 Semesters • 1 Year",
    description:
      "Fast-track option to gain core vocational skills and start working quickly in entry-level roles.",
    accent: "#007BFF",
    tag: "Fast Entry",
    icon: BookOpen,
  },
  {
    title: "Certificate",
    duration: "1 Semester • 6 Months",
    description:
      "Short-term skill certification designed for quick upskilling or career exploration.",
    accent: "#FF7F00",
    tag: "Skill Boost",
    icon: FileCheck,
  },
];

const SemesterCards = () => {
  return (
    <section className="relative w-full bg-slate-50 py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Our Programs
        </h2>
        <p className="text-lg text-slate-600">
          Choose a learning path that matches your goals — from short-term skill
          programs to full vocational degrees.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 hover:-translate-y-1"
            >
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${card.accent}15` }}
              >
                <Icon className="w-6 h-6" style={{ color: card.accent }} />
              </div>

              {/* Tag */}
              <div
                className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full"
                style={{
                  backgroundColor: `${card.accent}15`,
                  color: card.accent,
                }}
              >
                {card.tag}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-slate-900">
                {card.title}
              </h3>

              {/* Duration */}
              <p className="text-sm font-medium text-slate-500 mb-4">
                {card.duration}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600">
                {card.description}
              </p>

              {/* Bottom Accent Line */}
              <div
                className="mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: card.accent }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SemesterCards;