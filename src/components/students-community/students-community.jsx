"use client";
import { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import { FaCode, FaTrophy, FaPalette, FaUsers, FaCalendarAlt, FaWhatsapp, FaStar, FaCheckCircle, FaClock } from "react-icons/fa";
import { HiLightningBolt, HiSparkles } from "react-icons/hi";
import { BsCodeSlash, BsMusicNoteBeamed, BsPersonFill } from "react-icons/bs";
import { MdSportsCricket, MdSportsFootball, MdOutlineEmojiEvents } from "react-icons/md";
import { IoMdMicrophone } from "react-icons/io";

const communities = {
  tech: {
    id: "tech",
    name: "Technical Committee",
    tagline: "Build. Break. Innovate.",
    Icon: FaCode,
    TabIcon: HiLightningBolt,
    color1: "#007BFF",
    color2: "#00C6FF",
    bgGlow: "rgba(0,123,255,0.07)",
    members: 14,
    events: 8,
    projects: 12,
    description:
      "A collaborative space for developers, designers, and tech enthusiasts. We build real projects, host hackathons, and push the boundaries of what's possible with technology.",
    activities: [
      { label: "Hackathons", icon: HiLightningBolt },
      { label: "Code Reviews", icon: BsCodeSlash },
      { label: "Tech Talks", icon: FaStar },
      { label: "Open Source", icon: FaCode },
      { label: "Workshops", icon: HiSparkles },
    ],
    recentEvents: [
      { title: "React Hackathon 2025", date: "Jan 15", participants: 12, status: "completed", icon: HiLightningBolt },
      { title: "DSA Marathon", date: "Feb 3", participants: 8, status: "completed", icon: FaCode },
      { title: "Web3 Workshop", date: "Mar 10", participants: 15, status: "upcoming", icon: HiSparkles },
    ],
    members_list: [
      { name: "Ramzan Khan",       role: "President",         initials: "RK" },
      { name: "Vishesh Jaiswar",   role: "Committee Member",  initials: "VJ" },
      { name: "Obaidullah Shaikh", role: "Committee Member",  initials: "OS" },
    ],
  },
  sports: {
    id: "sports",
    name: "Sports Committee",
    tagline: "Sweat. Compete. Win.",
    Icon: FaTrophy,
    TabIcon: FaTrophy,
    color1: "#FF7F00",
    color2: "#FFD200",
    bgGlow: "rgba(255,127,0,0.07)",
    members: 18,
    events: 6,
    projects: 4,
    description:
      "From cricket to chess, our Sports Community brings students together through friendly competition and fitness. We train hard, play fair, and celebrate every victory as a team.",
    activities: [
      { label: "Cricket", icon: MdSportsCricket },
      { label: "Football", icon: MdSportsFootball },
      { label: "Chess", icon: FaTrophy },
      { label: "Kabaddi", icon: FaUsers },
      { label: "Badminton", icon: FaStar },
    ],
    recentEvents: [
      { title: "Inter-Batch Cricket", date: "Jan 20", participants: 22, status: "completed", icon: MdSportsCricket },
      { title: "Chess Championship", date: "Feb 14", participants: 10, status: "completed", icon: FaTrophy },
      { title: "Football League", date: "Mar 22", participants: 18, status: "upcoming", icon: MdSportsFootball },
    ],
    members_list: [
      { name: "Pravin Chettiar", role: "President",         initials: "PC" },
      { name: "Affan Khan",      role: "Committee Member",  initials: "AK" },
    ],
  },
  culture: {
    id: "culture",
    name: "Cultural Committee",
    tagline: "Express. Create. Celebrate.",
    Icon: FaPalette,
    TabIcon: FaPalette,
    color1: "#9C27B0",
    color2: "#FF4081",
    bgGlow: "rgba(156,39,176,0.07)",
    members: 16,
    events: 10,
    projects: 7,
    description:
      "Art, music, drama, and everything in between. The Culture Community is where creativity flows freely. We organize fests, open mics, exhibitions, and celebrate the richness of student life.",
    activities: [
      { label: "Open Mic", icon: IoMdMicrophone },
      { label: "Drama Club", icon: HiSparkles },
      { label: "Art Exhibitions", icon: FaPalette },
      { label: "Music Jams", icon: BsMusicNoteBeamed },
      { label: "Photography", icon: FaStar },
    ],
    recentEvents: [
      { title: "Nexcore Fest 2025", date: "Jan 26", participants: 45, status: "completed", icon: MdOutlineEmojiEvents },
      { title: "Open Mic Night", date: "Feb 8", participants: 30, status: "completed", icon: IoMdMicrophone },
      { title: "Art Exhibition", date: "Mar 28", participants: 20, status: "upcoming", icon: FaPalette },
    ],
    members_list: [
      { name: "Ahmed Khan",    role: "President",         initials: "AK" },
      { name: "Tamanna Ansari",role: "Vice President",    initials: "TA" },
      { name: "Irfan Shaikh",  role: "Committee Member",  initials: "IS" },
      { name: "Asif Sayyed",   role: "Committee Member",  initials: "AS" },
    ],
  },
};

const tabs = [
  { id: "culture", label: "Culture" },
  { id: "tech", label: "Tech" },
  { id: "sports", label: "Sports" },
];

export default function StudentCommunity() {
  const [active, setActive] = useState("culture");
  const [mounted, setMounted] = useState(false);

  const c = communities[active];

  useEffect(() => {
    setMounted(false);
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F4F7FC] pt-20 relative overflow-hidden">

        {/* Subtle dot pattern background */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #007BFF 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Animated color glow — very subtle on light */}
        <div
          className="fixed inset-0 pointer-events-none z-0 transition-all duration-700"
          style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${c.bgGlow}, transparent 70%)` }}
        />

        <div className="px-4 sm:px-6 pt-10 pb-20 relative z-10">

          {/* ── Header ── */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-1.5 text-[11px] font-semibold text-gray-400 tracking-widest uppercase mb-5">
              <FaUsers style={{ color: c.color1 }} />
              Nexcore Institute of Technology
            </div>
            <h1
              className="text-4xl sm:text-6xl font-black tracking-tight mb-3 transition-all duration-500"
              // style={{
              //   background: `linear-gradient(135deg, #1a1a2e 30%, ${c.color1} 70%, ${c.color2})`,
              //   WebkitBackgroundClip: "text",
              //   WebkitTextFillColor: "transparent",
              // }}
            >
              Student Communities
            </h1>
            <p className="text-gray-400 text-sm sm:text-base font-medium">
              Where passion meets purpose · B.Voc AIML Batch 2025–2028
            </p>
          </div>

          {/* ── Tab Switcher ── */}
          <div className="flex justify-center mb-10">
            <div className="flex gap-2 p-1.5 bg-white border border-gray-200 shadow-md rounded-2xl">
              {tabs.map((tab) => {
                const comm = communities[tab.id];
                const TabIcon = comm.TabIcon;
                const isActive = active === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer border-none
                      ${isActive ? "text-white shadow-lg scale-[1.02]" : "text-gray-400 hover:text-gray-600 bg-transparent"}`}
                    style={isActive ? {
                      background: `linear-gradient(135deg, ${comm.color1}, ${comm.color2})`,
                      boxShadow: `0 4px 20px ${comm.color1}44`,
                    } : {}}
                  >
                    <TabIcon className="text-base" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Content ── */}
          <div
            className="max-w-5xl mx-auto"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >

            {/* Hero Card */}
            <div
              className="relative rounded-3xl p-6 sm:p-10 mb-6 overflow-hidden border border-gray-200 bg-white shadow-lg"
              style={{ boxShadow: `0 8px 40px ${c.color1}14` }}
            >
              {/* Decorative corner glow */}
              <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-10 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${c.color2}, transparent 70%)` }}
              />

              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                {/* Icon badge */}
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${c.color1}, ${c.color2})` }}
                >
                  <c.Icon className="text-white text-4xl sm:text-5xl" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-gray-800 text-2xl sm:text-3xl font-black tracking-tight">{c.name}</h2>
                    <span
                      className="text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1"
                      style={{ background: `${c.color1}15`, color: c.color1 }}
                    >
                      <FaStar className="text-[9px]" /> Active
                    </span>
                  </div>
                  <p className="font-bold text-base mb-3" style={{ color: c.color1 }}>{c.tagline}</p>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xl">{c.description}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: "Members", value: c.members, icon: FaUsers },
                  { label: "Events Held", value: c.events, icon: FaCalendarAlt },
                  { label: "Projects", value: c.projects, icon: HiSparkles },
                ].map(({ label, value, icon: StatIcon }) => (
                  <div
                    key={label}
                    className="text-center py-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-200"
                    style={{ borderColor: `${c.color1}20` }}
                  >
                    <StatIcon className="mx-auto mb-2 text-lg" style={{ color: c.color1 }} />
                    <div className="text-2xl sm:text-3xl font-black mb-0.5" style={{ color: c.color1 }}>{value}+</div>
                    <div className="text-gray-400 text-[11px] font-semibold uppercase tracking-wider">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom 2-col */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Activities */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-gray-800 font-black text-lg mb-5 flex items-center gap-2">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: `${c.color1}15`, color: c.color1 }}
                  >
                    <HiSparkles />
                  </span>
                  Activities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {c.activities.map(({ label, icon: ActIcon }) => (
                    <span
                      key={label}
                      className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl border cursor-default hover:scale-105 transition-transform duration-200"
                      style={{
                        borderColor: `${c.color1}30`,
                        color: c.color1,
                        background: `${c.color1}08`,
                      }}
                    >
                      <ActIcon className="text-xs" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Events */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-gray-800 font-black text-lg mb-5 flex items-center gap-2">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: `${c.color1}15`, color: c.color1 }}
                  >
                    <FaCalendarAlt />
                  </span>
                  Events
                </h3>
                <div className="flex flex-col gap-3">
                  {c.recentEvents.map((ev) => {
                    const EvIcon = ev.icon;
                    return (
                      <div
                        key={ev.title}
                        className="flex items-center justify-between py-3 px-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: `${c.color1}15`, color: c.color1 }}
                          >
                            <EvIcon className="text-sm" />
                          </div>
                          <div>
                            <p className="text-gray-700 text-sm font-semibold">{ev.title}</p>
                            <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
                              <FaCalendarAlt className="text-[10px]" />
                              {ev.date} · {ev.participants} participants
                            </p>
                          </div>
                        </div>
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 flex-shrink-0"
                          style={
                            ev.status === "upcoming"
                              ? { background: `${c.color1}15`, color: c.color1 }
                              : { background: "#f3f4f6", color: "#9ca3af" }
                          }
                        >
                          {ev.status === "upcoming"
                            ? <FaClock className="text-[9px]" />
                            : <FaCheckCircle className="text-[9px]" />
                          }
                          {ev.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Members — full width */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm lg:col-span-2">
                <h3 className="text-gray-800 font-black text-lg mb-5 flex items-center gap-2">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: `${c.color1}15`, color: c.color1 }}
                  >
                    <FaUsers />
                  </span>
                  Core Members
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {c.members_list.map((member, i) => (
                    <div
                      key={member.name}
                      className="flex flex-col items-center text-center gap-2.5 py-5 px-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:-translate-y-1.5 transition-all duration-200 cursor-pointer"
                      style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(12px)",
                        transition: `opacity 0.4s ease ${i * 70}ms, transform 0.4s ease ${i * 70}ms, box-shadow 0.2s`,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black text-white shadow-md"
                        style={{ background: `linear-gradient(135deg, ${c.color1}, ${c.color2})` }}
                      >
                        {member.initials}
                      </div>
                      <div>
                        <p className="text-gray-700 text-xs font-bold">{member.name}</p>
                        <p className="text-gray-400 text-[10px] mt-0.5 flex items-center justify-center gap-1">
                          <BsPersonFill className="text-[9px]" style={{ color: c.color1 }} />
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Join CTA ── */}
            <div
              className="mt-6 rounded-2xl p-6 sm:p-10 text-center border relative overflow-hidden bg-white shadow-lg"
              style={{
                borderColor: `${c.color1}25`,
                boxShadow: `0 8px 40px ${c.color1}14`,
              }}
            >
              {/* Subtle gradient wash */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${c.color1}, ${c.color2})` }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10"
                style={{ background: `linear-gradient(135deg, ${c.color1}, ${c.color2})` }}
              >
                <c.Icon className="text-white text-2xl" />
              </div>
              <h3 className="text-gray-800 text-xl font-black mb-2 relative z-10">
                Want to join {c.name}?
              </h3>
              <p className="text-gray-400 text-sm mb-6 relative z-10">
                Connect with us and become part of something bigger.
              </p>
              <a
                href={`https://wa.me/919594402822?text=Hi%2C%20I%20want%20to%20join%20the%20${encodeURIComponent(c.name)}%20at%20Nexcore!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-white font-bold text-sm px-8 py-3.5 rounded-xl no-underline hover:opacity-90 transition-all duration-200 hover:scale-105 relative z-10"
                style={{
                  background: `linear-gradient(135deg, ${c.color1}, ${c.color2})`,
                  boxShadow: `0 8px 24px ${c.color1}44`,
                }}
              >
                <FaWhatsapp className="text-lg" />
                Join via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}