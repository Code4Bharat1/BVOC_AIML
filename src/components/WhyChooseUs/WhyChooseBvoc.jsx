"use client";

import { useState } from "react";
import {
  CheckCircle,
  Rocket,
  GraduationCap,
  Brain,
  TrendingUp,
  Sparkles,
  Atom,
} from "lucide-react";

const WhyChooseBVoc = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="relative min-h-screen bg-white py-20 px-4 overflow-hidden">
      {/* Subtle Background */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full"
        style={{
          backgroundColor: "rgba(0,123,255,0.05)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
        style={{
          backgroundColor: "rgba(255,127,0,0.05)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full border border-blue-200 bg-blue-50">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold tracking-widest text-blue-600">
              YOUR FUTURE STARTS HERE
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Why Choose <span className="text-blue-600">B.Voc</span>
            <span className="text-amber-500">?</span>
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Card */}
          <div className="bg-white border border-blue-200 rounded-3xl shadow-lg p-8">
            <div className="h-64 md:h-80 rounded-2xl overflow-hidden border border-blue-200 mb-6">
              <img
                src="/bvoc-image.png"
                alt="B.Voc illustration"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "3x", label: "Faster Job Ready" },
                { value: "95%", label: "Placement Rate" },
                { value: "50+", label: "Industry Partners" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-3 rounded-xl bg-blue-50 border border-blue-200"
                >
                  <div className="text-2xl font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white border border-blue-200 rounded-3xl shadow-lg p-8">
            {/* Section 1 */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Rocket className="text-white w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-blue-600">
                  Fast-Track Your Career
                </h2>
              </div>
              <p className="text-gray-600">
                Industry-driven curriculum, internships, and real-world projects
                make you job-ready faster than traditional degrees.
              </p>
            </div>

            <hr className="border-blue-100 mb-8" />

            {/* Comparison */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <GraduationCap />,
                  title: "B.Tech / B.E",
                  desc: "Strong theory, slower job readiness",
                },
                {
                  icon: <Atom />,
                  title: "B.Sc",
                  desc: "Research-focused, limited industry exposure",
                },
                {
                  icon: <Brain />,
                  title: "B.Voc Advantage",
                  desc: "Practical AI, ML & Data Science skills",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="flex items-start gap-4 p-4 rounded-xl border transition"
                  style={{
                    borderColor:
                      hoveredCard === i
                        ? "rgba(0,123,255,0.4)"
                        : "rgba(0,123,255,0.2)",
                    backgroundColor:
                      hoveredCard === i ? "rgba(0,123,255,0.05)" : "white",
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  {i === 2 && (
                    <CheckCircle className="ml-auto text-green-500" />
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
              <p className="text-gray-700">
                B.Voc equips you with industry-ready skills so you can start your
                career earlier and grow faster.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <Rocket />, title: "Quick Launch", desc: "Start earning faster" },
            { icon: <Brain />, title: "AI & ML Focus", desc: "Future-proof skills" },
            {
              icon: <GraduationCap />,
              title: "Industry Experts",
              desc: "Learn from professionals",
            },
            {
              icon: <TrendingUp />,
              title: "Career Growth",
              desc: "Faster promotions",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white border border-blue-200 rounded-2xl p-5 text-center shadow-sm"
            >
              <div className="text-3xl mb-3 text-blue-600 flex justify-center">
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseBVoc;
