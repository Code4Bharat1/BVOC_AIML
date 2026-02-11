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

  const stats = [
    { value: "3x", label: "Faster Job Ready" },
    { value: "95%", label: "Placement Rate" },
    { value: "50+", label: "Industry Partners" },
  ];

  const comparisons = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "B.Tech / B.E",
      desc: "Strong theory, slower job readiness",
      color: "slate",
    },
    {
      icon: <Atom className="w-5 h-5" />,
      title: "B.Sc",
      desc: "Research-focused, limited industry exposure",
      color: "slate",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "B.Voc Advantage",
      desc: "Practical AI, ML & Data Science skills",
      color: "blue",
      highlight: true,
    },
  ];

  const features = [
    { 
      icon: <Rocket className="w-7 h-7" />, 
      title: "Quick Launch", 
      desc: "Start earning faster",
      color: "blue"
    },
    { 
      icon: <Brain className="w-7 h-7" />, 
      title: "AI & ML Focus", 
      desc: "Future-proof skills",
      color: "orange"
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "Industry Experts",
      desc: "Learn from professionals",
      color: "blue"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Career Growth",
      desc: "Faster promotions",
      color: "orange"
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-white py-20 px-4 overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold tracking-wider text-blue-700">
              YOUR FUTURE STARTS HERE
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Why Choose <span className="text-blue-600">B.Voc</span>
            <span className="text-orange-500">?</span>
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Card - Image & Stats */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
            <div className="h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100 mb-6 border border-slate-200">
              <img
                src="/bvoc-image.png"
                alt="B.Voc illustration"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:scale-105 transition-transform"
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - Content */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
            {/* Header Section */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
                  <Rocket className="text-white w-6 h-6" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-blue-600">
                  Fast-Track Your Career
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Industry-driven curriculum, internships, and real-world projects
                make you job-ready faster than traditional degrees.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-6" />

            {/* Comparison Cards */}
            <div className="space-y-3 mb-6">
              {comparisons.map((item, i) => (
                <ComparisonCard
                  key={i}
                  item={item}
                  isHovered={hoveredCard === i}
                  onHover={() => setHoveredCard(i)}
                  onLeave={() => setHoveredCard(null)}
                />
              ))}
            </div>

            {/* Bottom Info Box */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold text-blue-700">B.Voc</span> equips you with industry-ready skills so you can start your
                career earlier and grow faster.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} />
          ))}
        </div>
      </div>
    </div>
  );
};

/* Comparison Card Component */
const ComparisonCard = ({ item, isHovered, onHover, onLeave }) => {
  const colorStyles = item.highlight
    ? {
        border: isHovered ? "border-blue-400" : "border-blue-300",
        bg: isHovered ? "bg-blue-50" : "bg-gradient-to-br from-blue-50 to-indigo-50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
      }
    : {
        border: isHovered ? "border-slate-300" : "border-slate-200",
        bg: isHovered ? "bg-slate-50" : "bg-white",
        iconBg: "bg-slate-100",
        iconColor: "text-slate-600",
      };

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`flex items-start gap-4 p-4 rounded-xl border-2 transition-all duration-300 ${colorStyles.border} ${colorStyles.bg} ${
        isHovered ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className={`w-11 h-11 rounded-lg ${colorStyles.iconBg} flex items-center justify-center ${colorStyles.iconColor} flex-shrink-0`}>
        {item.icon}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-slate-900 mb-1">
          {item.title}
        </h3>
        <p className="text-sm text-slate-600">{item.desc}</p>
      </div>
      {item.highlight && (
        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
      )}
    </div>
  );
};

/* Feature Card Component */
const FeatureCard = ({ feature }) => {
  const colorStyles = {
    blue: {
      icon: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    orange: {
      icon: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-200",
    },
  };

  const styles = colorStyles[feature.color];

  return (
    <div className="group bg-white border-2 border-slate-200 hover:border-slate-300 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${styles.bg} ${styles.icon} mb-4 group-hover:scale-110 transition-transform`}>
        {feature.icon}
      </div>
      <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
      <p className="text-sm text-slate-600">{feature.desc}</p>
    </div>
  );
};

export default WhyChooseBVoc;