"use client";
import { useState, useEffect } from "react";
import {
  Sparkles,
  ChevronDown,
  Briefcase,
  Globe,
  UserCheck,
  DollarSign,
  Award,
} from "lucide-react";

/* ================= MAIN COMPONENT ================= */

const CenteredBoxWithCards = () => {
  const cards = [
    {
      image: "/TopBenifits/topbenefits1.svg",
      icon: <Briefcase />,
      heading: "Job-Ready Skills from Day 1",
      description:
        "Get hands-on, industry-driven training from the start. Work on live projects and global challenges to gain the skills employers want.",
      color: "#007BFF",
    },
    {
      image: "/TopBenifits/topbenefits2.svg",
      icon: <Globe />,
      heading: "Work on International Projects",
      description:
        "Collaborate with global industry leaders and gain experience that sets you apart in the international job market.",
      color: "#FF7F00",
    },
    {
      image: "/TopBenifits/topbenefits3.svg",
      icon: <UserCheck />,
      heading: "Built-in Internships",
      description:
        "Apply what you learn with real-world internships and projects—boosting your resume and skills while still studying.",
      color: "#007BFF",
    },
    {
      image: "/TopBenifits/topbenefits5.png",
      icon: <DollarSign />,
      heading: "Earn While You Learn",
      description:
        "Leverage valuable internship opportunities to gain hands-on experience while earning, building both your skills and financial independence.",
      color: "#FF7F00",
    },
    {
      image: "/TopBenifits/topbenefits4.svg",
      icon: <Award />,
      heading: "Recognized by UGC & NSQF",
      description:
        "Your qualifications are UGC-approved and NSQF-certified, opening doors to global opportunities.",
      color: "#007BFF",
    },
  ];

  const [isClient, setIsClient] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <div className="relative bg-white py-20 px-4 overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[90px]"
        style={{ background: "rgba(0,123,255,0.08)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[90px]"
        style={{ background: "rgba(255,127,0,0.08)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= TITLE ================= */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full bg-blue-50 border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600">
              Career Benefits
            </span>
            <Sparkles className="w-4 h-4 text-blue-600" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 rounded-3xl blur-lg opacity-30 bg-gradient-to-r from-blue-400 to-orange-400" />
            <div className="relative bg-white px-8 py-6 rounded-3xl border shadow-lg border-blue-200">
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="text-blue-600">Top Benefits:</span>{" "}
                <span className="text-gray-800">
                  The Fast-Track to Your Career
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP CARDS ================= */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group transition-all hover:scale-105"
            >
              <div
                className="absolute -inset-1 rounded-3xl blur-lg opacity-20 group-hover:opacity-40"
                style={{
                  background: `linear-gradient(135deg, ${card.color}80, ${card.color}40)`,
                }}
              />

              <div className="relative h-full rounded-3xl bg-white border border-blue-200 shadow-lg overflow-hidden">
                <div className="relative h-56">
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
                    style={{
                      background: `linear-gradient(135deg, ${card.color}, ${card.color}dd)`,
                    }}
                  >
                    {card.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {card.heading}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MOBILE ACCORDION ================= */}
        <div className="md:hidden flex flex-col gap-4 max-w-xl mx-auto mb-24">
          {cards.map((card, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full px-5 py-4 font-semibold"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
                      style={{ background: card.color }}
                    >
                      {card.icon}
                    </div>
                    <span className="text-sm text-left">{card.heading}</span>
                  </div>
                  <ChevronDown
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-gray-600">
                    <img
                      src={card.image}
                      className="rounded-xl mb-3"
                      alt=""
                    />
                    {card.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= WHY IT WORKS — ZIG-ZAG WATERFALL ================= */}
        <div className="mt-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why It <span className="text-blue-600">Works</span> for You
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              A structured journey that transforms learning into career success.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-gray-300 to-purple-200" />

            <div className="flex flex-col gap-20">
              <ZigZagCard
                align="left"
                step="01"
                title="Real-World Exposure"
                text="Work on live projects, collaborate with industry experts, and gain experience from day one."
                color="border-blue-500 bg-blue-50"
              />

              <ZigZagCard
                align="right"
                step="02"
                title="Flexible Learning Path"
                text="Exit when it makes sense, stack credentials, and qualify as you progress."
                color="border-orange-500 bg-orange-50"
              />

              <ZigZagCard
                align="left"
                step="03"
                title="Global Opportunities"
                text="Work on international projects and open doors to a global career."
                color="border-purple-500 bg-purple-50"
              />

              <ZigZagCard
                align="right"
                step="04"
                title="Career-Ready Outcome"
                text="Graduate with verified skills, experience, and industry recognition."
                color="border-emerald-500 bg-emerald-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= SUB COMPONENTS ================= */

const ZigZagCard = ({ align, step, title, text, color }) => {
  const isLeft = align === "left";

  return (
    <div
      className={`relative flex ${
        isLeft ? "justify-start pr-10" : "justify-end pl-10"
      }`}
    >
      {/* Dot */}
      <div
        className={`hidden md:block absolute top-8 ${
          isLeft ? "right-[-6px]" : "left-[-6px]"
        } w-3 h-3 rounded-full bg-blue-600`}
      />

      <div
        className={`w-full md:w-[420px] bg-white border-l-8 ${color} rounded-2xl shadow-lg p-6 transition-all hover:shadow-xl`}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-gray-500">STEP {step}</span>
        </div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default CenteredBoxWithCards;
