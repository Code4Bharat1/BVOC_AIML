"use client";

import { FaUserGraduate, FaChartLine, FaAward } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";

export default function LastComponent() {
  const CardData = [
    {
      heading: "Case Study 1: Priya (Meritorious + Internship)",
      param:
        "Priya scored 85% in her 12th and received a 50% merit scholarship for Year 1. From the 2nd year, she secured an internship offering ₹7,000 per month. Her earnings of ₹84,000 per year helped cover most of her 2nd and 3rd year tuition fees.",
      icon: <FaAward />,
      color: "cyan",
    },
    {
      heading: "Case Study 2: Ramesh (Rural Background + Internship)",
      param:
        "Ramesh comes from a rural background and received a need-based scholarship of ₹20,000 per year. He also interned at ₹5,000 per month from the 4th semester, covering ₹60,000 annually and allowing him to manage his semester fees independently.",
      icon: <FaChartLine />,
      color: "purple",
    },
    {
      heading: "Case Study 3: Meena (Female in Tech + Internship)",
      param:
        "Meena joined the course under the Women in Tech initiative and received a ₹30,000 per year scholarship. With her ₹10,000 per month internship during the final year, she fully paid her last year's tuition fees through her stipend.",
      icon: <FaUserGraduate />,
      color: "orange",
    },
  ];

  return (
    <section
      aria-labelledby="internship-impact-heading"
      className="relative min-h-screen bg-gradient-to-br from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] py-20 px-4 overflow-hidden"
    >
      {/* Decorative Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HiSparkles
          className="absolute top-10 left-10 text-cyan-400 text-3xl animate-pulse"
          aria-hidden="true"
        />
        <HiSparkles
          className="absolute top-32 right-20 text-orange-400 text-2xl animate-pulse delay-300"
          aria-hidden="true"
        />
        <HiSparkles
          className="absolute bottom-32 left-1/4 text-purple-400 text-4xl animate-pulse delay-700"
          aria-hidden="true"
        />
        <HiSparkles
          className="absolute bottom-20 right-1/3 text-yellow-400 text-2xl animate-pulse delay-1000"
          aria-hidden="true"
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Banner */}
        <header className="relative mb-16 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500" />

          <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-8 md:p-12 border-2 border-white/20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <HiSparkles className="text-white" aria-hidden="true" />
                <span className="text-white text-sm font-bold tracking-widest">
                  SUCCESS STORIES
                </span>
                <HiSparkles className="text-white" aria-hidden="true" />
              </div>

              <h2
                id="internship-impact-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Paid Internship Impact on Fee Payment
              </h2>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                Students starting from the second year may receive monthly
                stipends between ₹3,000 and ₹10,000 under Nexcore's Paid
                Internship Program. This allows students to partially or fully
                cover their semester tuition fees while gaining real industry
                experience.
              </p>
            </div>
          </div>
        </header>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sample Case Studies
          </h3>

          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {CardData.map((card, index) => (
            <article key={index} className="relative group">

              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${
                  card.color === "cyan"
                    ? "from-cyan-600 to-purple-600"
                    : card.color === "purple"
                    ? "from-purple-600 to-pink-600"
                    : "from-orange-600 to-orange-400"
                } rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500`}
              />

              <div className="relative h-full bg-[#1a2847] rounded-3xl p-6 md:p-8 border-2 border-cyan-500/50 transform transition-all duration-500 hover:scale-105 -skew-x-3">

                <div className="skew-x-3">

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                        card.color === "cyan"
                          ? "from-cyan-500 to-purple-500 shadow-cyan-500/50"
                          : card.color === "purple"
                          ? "from-purple-500 to-pink-500 shadow-purple-500/50"
                          : "from-orange-500 to-orange-600 shadow-orange-500/50"
                      } flex items-center justify-center text-white text-2xl shadow-lg`}
                      aria-hidden="true"
                    >
                      {card.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h4
                      className={`text-xl font-bold ${
                        card.color === "cyan"
                          ? "text-cyan-400"
                          : card.color === "purple"
                          ? "text-purple-400"
                          : "text-orange-400"
                      }`}
                    >
                      {card.heading}
                    </h4>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {card.param}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`mt-6 h-1 rounded-full bg-gradient-to-r ${
                      card.color === "cyan"
                        ? "from-cyan-500 to-purple-500"
                        : card.color === "purple"
                        ? "from-purple-500 to-pink-500"
                        : "from-orange-500 to-orange-400"
                    }`}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full text-lg shadow-2xl shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
              Start Your Success Story →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}