'use client';
import { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

import { FaCode, FaTrophy, FaPalette, FaUsers, FaCalendarAlt, FaWhatsapp, FaStar, FaCheckCircle, FaClock } from "react-icons/fa";
import { HiLightningBolt, HiSparkles } from "react-icons/hi";
import { BsCodeSlash, BsMusicNoteBeamed, BsPersonFill } from "react-icons/bs";
import { MdSportsCricket, MdSportsFootball, MdOutlineEmojiEvents } from "react-icons/md";
import { IoMdMicrophone } from "react-icons/io";

// ── Brand colors matching the website (blue/white professional) ──
const BRAND = {
  primary: "#1A56DB",     // deep blue
  accent: "#3B82F6",      // mid blue
  light: "#EFF6FF",       // very light blue bg
  dark: "#0F2A6E",        // navy
  text: "#1E293B",
  muted: "#64748B",
};

const communities = {
  tech: {
    id: 'tech',
    name: 'Technical Committee',
    tagline: 'Build. Break. Innovate.',
    Icon: FaCode,
    TabIcon: HiLightningBolt,
    members: 3,
    events: 8,
    projects: 12,
    description:
      "A collaborative space for developers, designers, and tech enthusiasts. We build real projects, host hackathons, and push the boundaries of what's possible with technology.",
    activities: [
      { label: 'Hackathons', icon: HiLightningBolt },
      { label: 'Code Reviews', icon: BsCodeSlash },
      { label: 'Tech Talks', icon: FaStar },
      { label: 'Open Source', icon: FaCode },
      { label: 'Workshops', icon: HiSparkles },
    ],
    recentEvents: [
      {
        title: 'React Hackathon 2025',
        date: 'Jan 15',
        participants: 12,
        status: 'completed',
        icon: HiLightningBolt,
      },
      {
        title: 'DSA Marathon',
        date: 'Feb 3',
        participants: 8,
        status: 'completed',
        icon: FaCode,
      },
      {
        title: 'Web3 Workshop',
        date: 'Mar 10',
        participants: 15,
        status: 'upcoming',
        icon: HiSparkles,
      },
    ],
    members_list: [
      { name: 'Ramzan Khan', role: 'President', initials: 'RK' },
      { name: 'Vishesh Jaiswar', role: 'Committee Member', initials: 'VJ' },
      { name: 'Obaidullah Shaikh', role: 'Committee Member', initials: 'OS' },
    ],
  },
  sports: {
    id: 'sports',
    name: 'Sports Committee',
    tagline: 'Sweat. Compete. Win.',
    Icon: FaTrophy,
    TabIcon: FaTrophy,
    members: 2,
    events: 6,
    projects: 4,
    description:
      'From cricket to chess, our Sports Community brings students together through friendly competition and fitness. We train hard, play fair, and celebrate every victory as a team.',
    activities: [
      { label: 'Cricket', icon: MdSportsCricket },
      { label: 'Football', icon: MdSportsFootball },
      { label: 'Chess', icon: FaTrophy },
      { label: 'Kabaddi', icon: FaUsers },
      { label: 'Badminton', icon: FaStar },
    ],
    recentEvents: [
      {
        title: 'Inter-Batch Cricket',
        date: 'Jan 20',
        participants: 22,
        status: 'completed',
        icon: MdSportsCricket,
      },
      {
        title: 'Chess Championship',
        date: 'Feb 14',
        participants: 10,
        status: 'completed',
        icon: FaTrophy,
      },
      {
        title: 'Football League',
        date: 'Mar 22',
        participants: 18,
        status: 'upcoming',
        icon: MdSportsFootball,
      },
    ],
    members_list: [
      { name: 'Pravin Chettiar', role: 'President', initials: 'PC' },
      { name: 'Affan Khan', role: 'Committee Member', initials: 'AK' },
    ],
  },
  culture: {
    id: 'culture',
    name: 'Cultural Committee',
    tagline: 'Express. Create. Celebrate.',
    Icon: FaPalette,
    TabIcon: FaPalette,
    members: 4,
    events: 10,
    projects: 7,
    description:
      'Art, music, drama, and everything in between. The Culture Community is where creativity flows freely. We organize fests, open mics, exhibitions, and celebrate the richness of student life.',
    activities: [
  { label: "Quran Recitation & Tajweed Circle", icon: IoMdMicrophone },
  { label: "Seerat-un-Nabi ﷺ Workshop", icon: HiSparkles },
  { label: "Islamic Calligraphy & Art Workshop", icon: FaPalette },
  { label: "Nasheed & Hamd Evening", icon: BsMusicNoteBeamed },
  { label: "Islamic Quiz Competition", icon: FaStar },
  { label: "Ramadan Iftar Gathering", icon: MdOutlineEmojiEvents },
  { label: "Islamic Debate & Speech Contest", icon: FaStar },
  { label: "Sunnah Awareness Campaign", icon: HiSparkles },
  { label: "Charity & Sadaqah Drive", icon: MdOutlineEmojiEvents },
  { label: "Hijab Awareness Program", icon: FaPalette },
],
    recentEvents: [
  {
    title: "Seerat-un-Nabi ﷺ Conference 2025",
    date: "Jan 26, 2025",
    participants: 120,
    status: "completed",
    icon: MdOutlineEmojiEvents,
    venue: "Main Auditorium",
    type: "Conference",
  },
  {
    title: "Annual Nasheed & Hamd Night",
    date: "Feb 8, 2025",
    participants: 85,
    status: "completed",
    icon: IoMdMicrophone,
    venue: "Seminar Hall",
    type: "Cultural Evening",
  },
  {
    title: "Islamic Calligraphy & Art Exhibition",
    date: "Mar 28, 2025",
    participants: 60,
    status: "upcoming",
    icon: FaPalette,
    venue: "Exhibition Gallery",
    type: "Exhibition",
  },
  {
    title: "Ramadan Community Iftar",
    date: "Mar 20, 2025",
    participants: 150,
    status: "upcoming",
    icon: MdOutlineEmojiEvents,
    venue: "Campus Ground",
    type: "Community Event",
  },
  {
    title: "Islamic Quiz & Knowledge Bowl",
    date: "Feb 18, 2025",
    participants: 70,
    status: "completed",
    icon: FaStar,
    venue: "Lecture Hall 2",
    type: "Competition",
  },
],
    members_list: [
      { name: "Ahmed Khan",     role: "President",         initials: "AK" },
      { name: "Tamanna Ansari", role: "Vice President",    initials: "TA" },
      { name: "Irfan Shaikh",   role: "Committee Member",  initials: "IS" },
      { name: "Asif Sayyed",    role: "Committee Member",  initials: "AS" },
    ],
  },
};

const tabs = [
  { id: "culture", label: "Culture" },
  { id: "tech",    label: "Tech"    },
  { id: "sports",  label: "Sports"  },
];

export default function StudentCommunity() {
  const [active, setActive] = useState('culture');
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

      <main className="min-h-screen bg-white pt-20 relative overflow-hidden">

        {/* Subtle blue dot pattern background */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${BRAND.primary}18 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Top gradient wash */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `linear-gradient(180deg, ${BRAND.light} 0%, white 40%)`,
          }}
        />

        <div className="px-4 sm:px-6 pt-10 pb-20 relative z-10">
          {/* ── Header ── */}
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase mb-5"
              style={{
                background: BRAND.light,
                borderColor: `${BRAND.primary}30`,
                color: BRAND.primary,
              }}
            >
              <FaUsers />
              Nexcore Institute of Technology
            </div>

            <h1
              className="text-4xl sm:text-6xl font-black tracking-tight mb-3"
              style={{ color: BRAND.dark }}
            >
              Student{" "}
              <span style={{ color: BRAND.primary }}>Communities</span>
            </h1>

            <p style={{ color: BRAND.muted }} className="text-sm sm:text-base font-medium">
              Where passion meets purpose · B.Voc AIML Batch 2025–2028
            </p>
          </div>

          {/* ── Tab Switcher — no active indicator, just underline ── */}
          <div className="flex justify-center mb-10">
            <div
              className="flex gap-1 p-1.5 rounded-2xl border"
              style={{ background: BRAND.light, borderColor: `${BRAND.primary}20` }}
            >
              {tabs.map((tab) => {
                const comm = communities[tab.id];
                const TabIcon = comm.TabIcon;
                const isActive = active === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className="flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer border-none"
                    style={
                      isActive
                        ? {
                            background: BRAND.primary,
                            color: "#ffffff",
                            boxShadow: `0 4px 16px ${BRAND.primary}44`,
                          }
                        : {
                            background: "transparent",
                            color: BRAND.muted,
                          }
                    }
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
              transform: mounted ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            {/* Hero Card */}
            <div
              className="relative rounded-3xl p-6 sm:p-10 mb-6 overflow-hidden border bg-white"
              style={{
                borderColor: `${BRAND.primary}20`,
                boxShadow: `0 8px 40px ${BRAND.primary}12`,
              }}
            >
              {/* Decorative corner */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, ${BRAND.light}, transparent 70%)` }}
              />

              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                {/* Icon badge */}
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})` }}
                >
                  <c.Icon className="text-white text-4xl sm:text-5xl" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2
                      className="text-2xl sm:text-3xl font-black tracking-tight"
                      style={{ color: BRAND.dark }}
                    >
                      {c.name}
                    </h2>
                    <span
                      className="text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1"
                      style={{ background: BRAND.light, color: BRAND.primary }}
                    >
                      <FaStar className="text-[9px]" /> Active
                    </span>
                  </div>
                  <p className="font-bold text-base mb-3" style={{ color: BRAND.primary }}>{c.tagline}</p>
                  <p className="text-sm leading-relaxed max-w-xl" style={{ color: BRAND.muted }}>{c.description}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: "Members",    value: c.members, icon: FaUsers       },
                  { label: "Events Held",value: c.events,  icon: FaCalendarAlt },
                  { label: "Projects",   value: c.projects,icon: HiSparkles    },
                ].map(({ label, value, icon: StatIcon }) => (
                  <div
                    key={label}
                    className="text-center py-5 rounded-2xl border transition-all duration-200 hover:shadow-md"
                    style={{ borderColor: `${BRAND.primary}20`, background: BRAND.light }}
                  >
                    <StatIcon className="mx-auto mb-2 text-lg" style={{ color: BRAND.primary }} />
                    <div className="text-2xl sm:text-3xl font-black mb-0.5" style={{ color: BRAND.primary }}>{value}+</div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: BRAND.muted }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom 2-col */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Activities */}
              <div
                className="bg-white border rounded-2xl p-6 transition-shadow hover:shadow-md"
                style={{ borderColor: `${BRAND.primary}18` }}
              >
                <h3
                  className="font-black text-lg mb-5 flex items-center gap-2"
                  style={{ color: BRAND.dark }}
                >
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: BRAND.light, color: BRAND.primary }}
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
                        borderColor: `${BRAND.primary}25`,
                        color: BRAND.primary,
                        background: BRAND.light,
                      }}
                    >
                      <ActIcon className="text-xs" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Events */}
              <div
                className="bg-white border rounded-2xl p-6 transition-shadow hover:shadow-md"
                style={{ borderColor: `${BRAND.primary}18` }}
              >
                <h3
                  className="font-black text-lg mb-5 flex items-center gap-2"
                  style={{ color: BRAND.dark }}
                >
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: BRAND.light, color: BRAND.primary }}
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
                        className="flex items-center justify-between py-3 px-4 rounded-xl border transition-all duration-200 hover:shadow-sm"
                        style={{ borderColor: `${BRAND.primary}15`, background: BRAND.light }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: `${BRAND.primary}18`, color: BRAND.primary }}
                          >
                            <EvIcon className="text-sm" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold" style={{ color: BRAND.text }}>{ev.title}</p>
                            <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color: BRAND.muted }}>
                              <FaCalendarAlt className="text-[10px]" />
                              {ev.date} · {ev.participants} participants
                            </p>
                          </div>
                        </div>
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 flex-shrink-0"
                          style={
                            ev.status === "upcoming"
                              ? { background: BRAND.light, color: BRAND.primary, border: `1px solid ${BRAND.primary}30` }
                              : { background: "#f1f5f9", color: "#94a3b8" }
                          }
                        >
                          {ev.status === 'upcoming' ? (
                            <FaClock className="text-[9px]" />
                          ) : (
                            <FaCheckCircle className="text-[9px]" />
                          )}
                          {ev.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Members — full width */}
              <div
                className="bg-white border rounded-2xl p-6 lg:col-span-2"
                style={{ borderColor: `${BRAND.primary}18` }}
              >
                <h3
                  className="font-black text-lg mb-5 flex items-center gap-2"
                  style={{ color: BRAND.dark }}
                >
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: BRAND.light, color: BRAND.primary }}
                  >
                    <FaUsers />
                  </span>
                  Core Members
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {c.members_list.map((member, i) => (
                    <div
                      key={member.name}
                      className="flex flex-col items-center text-center gap-2.5 py-5 px-3 rounded-xl border cursor-pointer hover:-translate-y-1.5 transition-all duration-200"
                      style={{
                        borderColor: `${BRAND.primary}18`,
                        background: BRAND.light,
                        opacity: mounted ? 1 : 0,
                        transform: mounted
                          ? 'translateY(0)'
                          : 'translateY(12px)',
                        transition: `opacity 0.4s ease ${i * 70}ms, transform 0.4s ease ${i * 70}ms, box-shadow 0.2s`,
                      }}
                      onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 24px ${BRAND.primary}20`}
                      onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black text-white shadow-md"
                        style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})` }}
                      >
                        {member.initials}
                      </div>
                      <div>
                        <p className="text-xs font-bold" style={{ color: BRAND.text }}>{member.name}</p>
                        <p className="text-[10px] mt-0.5 flex items-center justify-center gap-1" style={{ color: BRAND.muted }}>
                          <BsPersonFill className="text-[9px]" style={{ color: BRAND.primary }} />
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
              className="mt-6 rounded-2xl p-6 sm:p-10 text-center border relative overflow-hidden bg-white"
              style={{
                borderColor: `${BRAND.primary}20`,
                boxShadow: `0 8px 40px ${BRAND.primary}12`,
              }}
            >
              {/* Subtle gradient wash */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})` }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10"
                style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})` }}
              >
                <c.Icon className="text-white text-2xl" />
              </div>
              <h3
                className="text-xl font-black mb-2 relative z-10"
                style={{ color: BRAND.dark }}
              >
                Want to join {c.name}?
              </h3>
              <p className="text-sm mb-6 relative z-10" style={{ color: BRAND.muted }}>
                Connect with us and become part of something bigger.
              </p>
              <a
                href={`https://wa.me/9892398976?text=Hi%2C%20I%20want%20to%20join%20the%20${encodeURIComponent(c.name)}%20at%20Nexcore!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-white font-bold text-sm px-8 py-3.5 rounded-xl no-underline hover:opacity-90 transition-all duration-200 hover:scale-105 relative z-10"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})`,
                  boxShadow: `0 8px 24px ${BRAND.primary}44`,
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
