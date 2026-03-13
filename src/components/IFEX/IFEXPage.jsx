'use client';
import { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Image from 'next/image';
import Head from 'next/head';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaWhatsapp,
  FaTicketAlt,
  FaTrophy,
  FaMedal,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';
import { HiLightningBolt, HiSparkles } from 'react-icons/hi';
import {
  MdOutlineEmojiEvents,
  MdBusinessCenter,
  MdVerified,
  MdSchool,
} from 'react-icons/md';
import { BsBuilding, BsStarFill, BsPersonFill } from 'react-icons/bs';
import { GiTrophy, GiDiploma } from 'react-icons/gi';
import { IoMdTime } from 'react-icons/io';
import Link from 'next/link';

const highlights = [
  {
    icon: MdBusinessCenter,
    title: 'Industry Expo',
    desc: 'Meet 200+ companies from IT, manufacturing, and emerging tech sectors under one roof.',
    color: '#007BFF',
  },
  {
    icon: GiDiploma,
    title: 'Nexcore Pavilion',
    desc: 'Dedicated Nexcore stall showcasing student projects, innovations, and institute achievements.',
    color: '#FF7F00',
  },
  {
    icon: MdSchool,
    title: 'Student Showcase',
    desc: 'B.Voc students present their final year projects to industry leaders and potential employers.',
    color: '#9C27B0',
  },
  {
    icon: FaTrophy,
    title: 'Competition Zone',
    desc: 'Participate in live coding challenges, hackathons, and innovation competitions with cash prizes.',
    color: '#00C853',
  },
  {
    icon: FaUsers,
    title: 'Networking Sessions',
    desc: 'Structured networking with alumni, recruiters, and startup founders from across Maharashtra.',
    color: '#FF2D55',
  },
  {
    icon: MdVerified,
    title: 'Certification Drive',
    desc: 'On-spot skill assessment and certification opportunities from partnered tech organizations.',
    color: '#007BFF',
  },
];

const schedule = [
  {
    day: 'Day 1',
    date: 'TBA 2026',
    time: '10:00 AM',
    event: 'Inauguration & Nexcore Pavilion Launch',
    type: 'inauguration',
  },
  {
    day: 'Day 1',
    date: 'TBA 2026',
    time: '12:00 PM',
    event: 'Student Project Showcase — Round 1',
    type: 'showcase',
  },
  {
    day: 'Day 1',
    date: 'TBA 2026',
    time: '3:00 PM',
    event: 'Industry Panel: Future of Tech Education',
    type: 'panel',
  },
  {
    day: 'Day 2',
    date: 'TBA 2026',
    time: '10:30 AM',
    event: 'Live Coding Hackathon Begins',
    type: 'competition',
  },
  {
    day: 'Day 2',
    date: 'TBA 2026',
    time: '2:00 PM',
    event: 'Placement Drive — On-Spot Interviews',
    type: 'placement',
  },
  {
    day: 'Day 2',
    date: 'TBA 2026',
    time: '5:00 PM',
    event: 'Award Ceremony & Closing',
    type: 'award',
  },
];

const typeColors = {
  inauguration: { bg: '#007BFF15', color: '#007BFF', label: 'Opening' },
  showcase: { bg: '#FF7F0015', color: '#FF7F00', label: 'Showcase' },
  panel: { bg: '#9C27B015', color: '#9C27B0', label: 'Panel' },
  competition: { bg: '#FF2D5515', color: '#FF2D55', label: 'Contest' },
  placement: { bg: '#00C85315', color: '#00C853', label: 'Placement' },
  award: { bg: '#FFD20015', color: '#FF7F00', label: 'Award' },
};

const stats = [
  { value: '200+', label: 'Companies', icon: BsBuilding },
  { value: '5000+', label: 'Visitors', icon: FaUsers },
  { value: '2', label: 'Days', icon: FaCalendarAlt },
  { value: 'BEC', label: 'Bombay Expo', icon: FaMapMarkerAlt },
];

const participating = [
  {
    name: 'Piyush',
    role: 'Project Lead',
    initials: 'PI',
    c1: '#007BFF',
    c2: '#00C6FF',
  },
  {
    name: 'Ramzan',
    role: 'Dev Team',
    initials: 'RA',
    c1: '#FF7F00',
    c2: '#FFD200',
  },
  {
    name: 'Sanskar',
    role: 'UI Designer',
    initials: 'SA',
    c1: '#9C27B0',
    c2: '#FF4081',
  },
  {
    name: 'Affan',
    role: 'Presenter',
    initials: 'AF',
    c1: '#00C853',
    c2: '#007BFF',
  },
  {
    name: 'Nafisa',
    role: 'Documentation',
    initials: 'NA',
    c1: '#FF2D55',
    c2: '#FF7F00',
  },
  {
    name: 'Zaid',
    role: 'Tech Demo',
    initials: 'ZA',
    c1: '#007BFF',
    c2: '#7B2FFF',
  },
];

export default function IFEXPage() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState([]);
  const [membersVis, setMembersVis] = useState([]);
  const [activeDay, setActiveDay] = useState('Day 1');

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    highlights.forEach((_, i) =>
      setTimeout(() => setVisible((p) => [...p, i]), 150 + i * 90),
    );
    participating.forEach((_, i) =>
      setTimeout(() => setMembersVis((p) => [...p, i]), 500 + i * 70),
    );
  }, []);

  const filteredSchedule = schedule.filter((s) => s.day === activeDay);

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        {/* ✅ Basic SEO */}
        <title>Nexcore at IFEX 2026 | Bombay Exhibition Centre, Mumbai</title>
        <meta
          name="description"
          content="Nexcore Institute of Technology is participating in IFEX 2026 at Bombay Exhibition Centre, Mumbai. Meet our students, see live project demos, attend hackathons, and explore B.Voc admissions."
        />
        <meta
          name="keywords"
          content="IFEX 2026, Nexcore IFEX, Bombay Exhibition Centre, IFEX Mumbai 2026, Nexcore Institute IFEX, B.Voc student showcase, industry expo Mumbai 2026, Nexcore pavilion IFEX, tech expo Mumbai, education fair Mumbai 2026"
        />
        <meta name="author" content="Nexcore Institute of Technology" />
        <link rel="canonical" href="https://nexcoreinstitute.org/ifex" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Nexcore at IFEX 2026 | Bombay Exhibition Centre, Mumbai"
        />
        <meta
          property="og:description"
          content="Visit Nexcore Institute of Technology at Hall 5, Bombay Exhibition Centre during IFEX 2026. Student showcases, hackathons, placement drives, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexcoreinstitute.org/ifex" />
        <meta property="og:image" content="https://nexcoreinstitute.org/og-image.png" />
        <meta property="og:site_name" content="Nexcore Institute of Technology" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nexcore at IFEX 2026 | Bombay Exhibition Centre, Mumbai"
        />
        <meta
          name="twitter:description"
          content="Meet Team Nexcore at IFEX 2026 — student projects, hackathons, placement drives & B.Voc admissions at Bombay Exhibition Centre."
        />
        <meta name="twitter:image" content="https://nexcoreinstitute.org/og-image.png" />

        {/* ✅ Structured Data — Event Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Nexcore at IFEX 2026",
            "description":
              "Nexcore Institute of Technology participates in IFEX 2026 at Bombay Exhibition Centre, Mumbai — featuring student project showcases, hackathons, placement drives, and B.Voc admission information.",
            "url": "https://nexcoreinstitute.org/ifex",
            "image": "https://nexcoreinstitute.org/og-image.png",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Bombay Exhibition Centre",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Western Express Highway, Goregaon (E)",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400063",
                "addressCountry": "IN",
              },
            },
            "organizer": {
              "@type": "EducationalOrganization",
              "@id": "https://nexcoreinstitute.org/#organization",
              "name": "Nexcore Institute of Technology",
              "url": "https://nexcoreinstitute.org",
            },
          })}
        </script>
      </Head>

      <Navbar />
      <main className="min-h-screen bg-[#F4F7FC] relative overflow-hidden">
        {/* Dot pattern */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #007BFF 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="fixed -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(0,123,255,0.08), transparent 70%)',
          }}
        />
        <div
          className="fixed -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(255,127,0,0.07), transparent 70%)',
          }}
        />

        <div
          className="relative z-10"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          {/* ── HERO ── */}
          <div
            className="relative overflow-hidden pt-32 pb-16 px-5"
            style={{
              background:
                'linear-gradient(135deg, #0F1829 0%, #1a3a6b 40%, #007BFF 80%, #FF7F00 100%)',
            }}
          >
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            {/* Big faded building */}
            <BsBuilding
              className="absolute -right-10 -bottom-6 text-white opacity-[0.05]"
              style={{ fontSize: 300 }}
            />

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-[11px] font-bold text-white tracking-widest uppercase mb-6">
                <BsStarFill className="text-yellow-300" /> Nexcore at IFEX 2026
              </div>

              {/* IFEX Badge + Nexcore */}
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <div className="bg-white rounded-2xl px-5 py-3 shadow-lg">
                  <p className="text-blue-800 font-black text-xl leading-none tracking-tight">
                    IFEX
                  </p>
                  <p className="text-blue-500 font-bold text-xs">2026</p>
                </div>
                <span className="text-white/50 text-2xl font-light">×</span>
                <div className="bg-white/15 border border-white/30 rounded-2xl px-4 py-3">
                  <span className="text-white font-black text-lg tracking-tight">
                    NEXCORE
                  </span>
                  <span className="text-white/60 text-xs block">
                    Institute of Technology
                  </span>
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none mb-3">
                Nexcore at
                <br />
                <span className="text-orange-300">IFEX 2026</span>
              </h1>

              {/* Venue pill */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2 mb-5">
                <FaMapMarkerAlt className="text-orange-300 text-sm" />
                <span className="text-white font-semibold text-sm">
                  Bombay Exhibition Centre, Mumbai
                </span>
              </div>

              <p className="text-white/70 text-base sm:text-lg font-medium mb-8 max-w-lg">
                Nexcore Institute of Technology is proud to participate in IFEX
                2026 — one of Maharashtra's largest industry and education
                fairs. Meet our students, faculty, and discover what makes
                Nexcore different.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-3">
                {stats.map(({ value, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-white/15 border border-white/25 rounded-xl px-4 py-2.5 backdrop-blur-sm"
                  >
                    <Icon className="text-white text-sm" />
                    <span className="text-white font-black text-base leading-none">
                      {value}
                    </span>
                    <span className="text-white/60 text-xs font-semibold">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
            {/* ── VENUE CARD ── */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-10 flex flex-col sm:flex-row gap-5 items-start">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #007BFF, #FF7F00)',
                }}
              >
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1">
                  Venue
                </p>
                <h2 className="text-gray-800 font-black text-xl mb-1">
                  Bombay Exhibition Centre
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  Western Express Highway, Goregaon (E), Mumbai — 400063,
                  Maharashtra, India
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
                    <FaCalendarAlt className="text-[10px]" /> IFEX 2026 — Dates
                    TBA
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full">
                    <IoMdTime className="text-[10px]" /> 10:00 AM – 6:00 PM
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-green-600 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full">
                    <MdVerified className="text-[10px]" /> Hall 5 — Nexcore
                    Pavilion
                  </span>
                </div>
              </div>
            </div>

            {/* ── HIGHLIGHTS GRID ── */}
            <div className="mb-12">
              <h2 className="text-gray-800 text-2xl font-black mb-1 flex items-center gap-2">
                <HiLightningBolt className="text-blue-500" /> What to Expect at
                IFEX 2026
              </h2>
              <p className="text-gray-400 text-sm mb-7">
                Two days of innovation, networking, and opportunity
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {highlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <div
                      key={h.title}
                      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                      style={{
                        opacity: visible.includes(i) ? 1 : 0,
                        transform: visible.includes(i)
                          ? 'translateY(0)'
                          : 'translateY(16px)',
                        transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms`,
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${h.color}15`, color: h.color }}
                      >
                        <Icon className="text-xl" />
                      </div>
                      <h3 className="text-gray-800 font-bold text-base mb-2">
                        {h.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {h.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── SCHEDULE + PARTICIPATING STUDENTS ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Schedule */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-800 font-black text-lg mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FaCalendarAlt className="text-blue-500 text-sm" />
                  </span>
                  Event Schedule
                </h3>

                {/* Day tabs */}
                <div className="flex gap-2 mb-5 p-1 bg-gray-100 rounded-xl">
                  {['Day 1', 'Day 2'].map((day) => (
                    <button
                      key={day}
                      onClick={() => setActiveDay(day)}
                      className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer border-none
                        ${activeDay === day ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 bg-transparent'}`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  {filteredSchedule.map((ev, i) => {
                    const tc = typeColors[ev.type];
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-3 py-3 px-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm transition-all"
                      >
                        <div className="flex-shrink-0 text-center">
                          <p className="text-[10px] font-black text-gray-400 leading-none">
                            {ev.time.split(' ')[1]}
                          </p>
                          <p className="text-sm font-black text-gray-700">
                            {ev.time.split(' ')[0]}
                          </p>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 text-sm font-semibold leading-tight">
                            {ev.event}
                          </p>
                          <span
                            className="inline-block text-[9px] font-bold px-2 py-0.5 rounded-full mt-1"
                            style={{ background: tc.bg, color: tc.color }}
                          >
                            {tc.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Participating Students */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-800 font-black text-lg mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center">
                    <FaUsers className="text-orange-500 text-sm" />
                  </span>
                  Representing Nexcore
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {participating.map((m, i) => (
                    <div
                      key={m.name}
                      className="flex items-center gap-3 py-3 px-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm transition-all cursor-pointer"
                      style={{
                        opacity: membersVis.includes(i) ? 1 : 0,
                        transform: membersVis.includes(i)
                          ? 'translateY(0)'
                          : 'translateY(10px)',
                        transition: `opacity 0.4s ease ${i * 70}ms, transform 0.4s ease ${i * 70}ms`,
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white shadow-sm flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${m.c1}, ${m.c2})`,
                        }}
                      >
                        {m.initials}
                      </div>
                      <div>
                        <p className="text-gray-700 text-xs font-bold">
                          {m.name}
                        </p>
                        <p className="text-gray-400 text-[10px] flex items-center gap-0.5 mt-0.5">
                          <BsPersonFill className="text-[8px] text-blue-400" />{' '}
                          {m.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <p className="text-gray-400 text-xs">
                    + many more students joining from B.Voc AIML batch 2025–28
                  </p>
                </div>
              </div>
            </div>

            {/* ── HOW TO REACH ── */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-6">
              <h3 className="text-gray-800 font-black text-lg mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-green-500 text-sm" />
                </span>
                How to Reach — Bombay Exhibition Centre
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    mode: '🚇 Metro',
                    details:
                      'Goregaon Metro Station (Line 2A) — 5 min walk to BEC',
                    color: '#007BFF',
                  },
                  {
                    mode: '🚂 Train',
                    details:
                      'Goregaon Railway Station (Western Line) — 10 min auto ride',
                    color: '#FF7F00',
                  },
                  {
                    mode: '🚗 Road',
                    details:
                      'Western Express Highway — BEC is directly accessible',
                    color: '#00C853',
                  },
                ].map((t) => (
                  <div
                    key={t.mode}
                    className="flex flex-col gap-2 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm transition-all"
                  >
                    <p className="font-black text-gray-700 text-sm">{t.mode}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {t.details}
                    </p>
                    <div
                      className="h-1 rounded-full mt-1"
                      style={{ background: `${t.color}30` }}
                    >
                      <div
                        className="h-full w-3/4 rounded-full"
                        style={{ background: t.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CTA ── */}
            <div
              className="rounded-2xl p-8 sm:p-10 text-center border border-blue-100 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #EFF6FF, #FFF7ED)',
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, #007BFF 0, #007BFF 1px, transparent 0, transparent 50%)',
                  backgroundSize: '16px 16px',
                }}
              />

              <MdOutlineEmojiEvents className="text-6xl mx-auto mb-4 text-blue-500 relative z-10" />
              <h3 className="text-gray-800 text-2xl font-black mb-2 relative z-10">
                Visit Us at IFEX 2026!
              </h3>
              <p className="text-gray-500 text-sm mb-2 max-w-md mx-auto relative z-10">
                Come meet Team Nexcore at{' '}
                <strong>Hall 5 — Bombay Exhibition Centre</strong>. See live
                demos, talk to our students, and learn about admissions.
              </p>
              <p className="text-blue-600 font-bold text-sm mb-6 relative z-10">
                📍 Bombay Exhibition Centre, Goregaon (E), Mumbai
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                <a
                  href="https://wa.me/9892398976?text=Hi%2C%20I%20want%20to%20meet%20Nexcore%20at%20IFEX%202026%20at%20Bombay%20Exhibition%20Centre!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-white font-bold text-sm px-7 py-3.5 rounded-xl no-underline hover:opacity-90 hover:scale-105 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 8px 24px rgba(37,211,102,0.3)',
                  }}
                >
                  <FaWhatsapp className="text-base" /> Get in Touch
                </a>
                <Link
                  href="/scholarships"
                  className="inline-flex items-center justify-center gap-2 text-blue-600 font-bold text-sm px-7 py-3.5 rounded-xl no-underline border-2 border-blue-200 hover:bg-blue-600 hover:text-white transition-all bg-blue-50"
                >
                  <FaTicketAlt /> Apply for Scholarship
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}