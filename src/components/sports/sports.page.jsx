'use client';
import { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

import {
  FaTrophy,
  FaWhatsapp,
  FaUsers,
  FaCalendarAlt,
  FaMedal,
  FaStar,
  FaCheckCircle,
  FaClock,
  FaFire,
} from 'react-icons/fa';
import {
  MdSportsCricket,
  MdSportsFootball,
  MdSportsHandball,
  MdOutlineEmojiEvents,
  MdLeaderboard,
} from 'react-icons/md';
import {
  GiChessKnight,
  GiShuttlecock,
  GiWhistle,
  GiTrophy,
} from 'react-icons/gi';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';
import { BsPersonFill, BsShieldFill } from 'react-icons/bs';
import { IoMdTimer } from 'react-icons/io';

// ── Data ──────────────────────────────────────────────────────
const sports = [
  {
    id: 'cricket',
    name: 'Cricket',
    icon: MdSportsCricket,
    color: '#007BFF',
    players: 11,
    status: 'Active Season',
  },
  {
    id: 'football',
    name: 'Football',
    icon: MdSportsFootball,
    color: '#FF7F00',
    players: 11,
    status: 'Active Season',
  },
  {
    id: 'chess',
    name: 'Chess',
    icon: GiChessKnight,
    color: '#9C27B0',
    players: 2,
    status: 'Tournament',
  },
  {
    id: 'badminton',
    name: 'Badminton',
    icon: GiShuttlecock,
    color: '#00C853',
    players: 4,
    status: 'Active Season',
  },
  {
    id: 'kabaddi',
    name: 'Kabaddi',
    icon: MdSportsHandball,
    color: '#FF2D55',
    players: 7,
    status: 'Off Season',
  },
];

const achievements = [
  {
    title: 'Inter-College Cricket Champions',
    year: '2024',
    icon: FaTrophy,
    color: '#FF7F00',
  },
  {
    title: 'District Chess Runner-Up',
    year: '2024',
    icon: GiChessKnight,
    color: '#9C27B0',
  },
  {
    title: 'Best Sports College Award',
    year: '2023',
    icon: FaMedal,
    color: '#007BFF',
  },
  {
    title: 'Football League Winners',
    year: '2023',
    icon: MdSportsFootball,
    color: '#00C853',
  },
];

const events = [
  {
    title: 'Inter-Batch Cricket Tournament',
    date: 'Jan 20',
    participants: 22,
    status: 'completed',
    sport: 'Cricket',
    icon: MdSportsCricket,
    color: '#007BFF',
  },
  {
    title: 'Chess Championship Round 1',
    date: 'Feb 14',
    participants: 10,
    status: 'completed',
    sport: 'Chess',
    icon: GiChessKnight,
    color: '#9C27B0',
  },
  {
    title: 'Badminton Open Doubles',
    date: 'Feb 28',
    participants: 16,
    status: 'completed',
    sport: 'Badminton',
    icon: GiShuttlecock,
    color: '#00C853',
  },
  {
    title: 'Football League Season 2',
    date: 'Mar 22',
    participants: 22,
    status: 'upcoming',
    sport: 'Football',
    icon: MdSportsFootball,
    color: '#FF7F00',
  },
  {
    title: 'Kabaddi Friendly Match',
    date: 'Apr 5',
    participants: 14,
    status: 'upcoming',
    sport: 'Kabaddi',
    icon: MdSportsHandball,
    color: '#FF2D55',
  },
];

const members = [
  {
    name: 'Taha',
    role: 'Cricket Captain',
    initials: 'TA',
    sport: MdSportsCricket,
    c1: '#007BFF',
    c2: '#00C6FF',
  },
  {
    name: 'Yaseen',
    role: 'Football Lead',
    initials: 'YA',
    sport: MdSportsFootball,
    c1: '#FF7F00',
    c2: '#FFD200',
  },
  {
    name: 'Zaid',
    role: 'Chess Champion',
    initials: 'ZA',
    sport: GiChessKnight,
    c1: '#9C27B0',
    c2: '#FF4081',
  },
  {
    name: 'Asif',
    role: 'Badminton',
    initials: 'AS',
    sport: GiShuttlecock,
    c1: '#00C853',
    c2: '#007BFF',
  },
  {
    name: 'Faiz',
    role: 'Athletics',
    initials: 'FA',
    sport: FaFire,
    c1: '#FF2D55',
    c2: '#FF7F00',
  },
  {
    name: 'Sudeep',
    role: 'Kabaddi',
    initials: 'SU',
    sport: MdSportsHandball,
    c1: '#FF7F00',
    c2: '#FFD200',
  },
  {
    name: 'Ahmed',
    role: 'Coach Assist',
    initials: 'AH',
    sport: GiWhistle,
    c1: '#007BFF',
    c2: '#7B2FFF',
  },
  {
    name: 'Vishesh',
    role: 'Goalkeeper',
    initials: 'VI',
    sport: BsShieldFill,
    c1: '#00C853',
    c2: '#007BFF',
  },
];

const stats = [
  { label: 'Athletes', value: 18, icon: FaUsers, color: '#007BFF' },
  { label: 'Sports', value: 5, icon: FaTrophy, color: '#FF7F00' },
  {
    label: 'Events Held',
    value: 6,
    icon: MdOutlineEmojiEvents,
    color: '#9C27B0',
  },
  { label: 'Trophies Won', value: 4, icon: GiTrophy, color: '#00C853' },
];

// ── Component ─────────────────────────────────────────────────
export default function SportsPage() {
  const [activeSport, setActiveSport] = useState('all');
  const [mounted, setMounted] = useState(false);
  const [membersVisible, setMembersVisible] = useState([]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setMembersVisible([]);
    members.forEach((_, i) => {
      setTimeout(() => setMembersVisible((p) => [...p, i]), i * 70);
    });
  }, []);

  const filteredEvents =
    activeSport === 'all'
      ? events
      : events.filter((e) => e.sport.toLowerCase() === activeSport);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F4F7FC] relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #FF7F00 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Corner glows */}
        <div
          className="fixed -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(255,127,0,0.09), transparent 70%)',
          }}
        />
        <div
          className="fixed -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(0,123,255,0.07), transparent 70%)',
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
          {/* ── HERO BANNER ── */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#FF7F00] via-[#FF5500] to-[#FF2D55] pt-32 pb-16 px-5">
            {/* Diagonal pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
                backgroundSize: '20px 20px',
              }}
            />
            {/* Big faded trophy icon */}
            <FaTrophy
              className="absolute -right-8 -bottom-6 text-white opacity-[0.07]"
              style={{ fontSize: 220 }}
            />

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-[11px] font-bold text-white tracking-widest uppercase mb-5">
                <GiWhistle /> Nexcore Institute of Technology
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-none mb-4">
                Sports
                <br />
                <span className="text-white/60">Community</span>
              </h1>
              <p className="text-white/70 text-base sm:text-lg font-medium mb-8 max-w-md">
                Sweat. Compete. Win. — Where Nexcore athletes train hard, play
                fair, and celebrate every victory together.
              </p>

              {/* Quick stats row */}
              <div className="flex flex-wrap gap-3">
                {stats.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-white/15 border border-white/25 rounded-xl px-4 py-2.5 backdrop-blur-sm"
                  >
                    <Icon className="text-white text-sm" />
                    <span className="text-white font-black text-lg leading-none">
                      {value}+
                    </span>
                    <span className="text-white/70 text-xs font-semibold">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
            {/* ── SPORTS CARDS ── */}
            <div className="mb-14">
              <h2 className="text-gray-800 text-2xl font-black mb-1 flex items-center gap-2">
                <HiLightningBolt className="text-orange-500" /> Our Sports
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Click a sport to filter events
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {/* All button */}
                <button
                  onClick={() => setActiveSport('all')}
                  className={`flex flex-col items-center gap-2.5 py-5 px-3 rounded-2xl border-2 font-bold text-sm transition-all duration-200 cursor-pointer
                    ${
                      activeSport === 'all'
                        ? 'border-orange-500 bg-orange-50 text-orange-600 shadow-md shadow-orange-100'
                        : 'border-gray-200 bg-white text-gray-500 hover:border-orange-300 hover:shadow-sm'
                    }`}
                >
                  <HiSparkles className="text-2xl" />
                  All Sports
                </button>

                {sports.map((sp) => {
                  const Icon = sp.icon;
                  const isActive = activeSport === sp.id;
                  return (
                    <button
                      key={sp.id}
                      onClick={() => setActiveSport(sp.id)}
                      className={`flex flex-col items-center gap-2.5 py-5 px-3 rounded-2xl border-2 font-bold text-sm transition-all duration-200 cursor-pointer relative overflow-hidden
                        ${isActive ? 'text-white shadow-lg' : 'border-gray-200 bg-white text-gray-600 hover:shadow-md hover:-translate-y-0.5'}`}
                      style={
                        isActive
                          ? {
                              background: `linear-gradient(135deg, ${sp.color}, ${sp.color}cc)`,
                              borderColor: sp.color,
                              boxShadow: `0 8px 24px ${sp.color}33`,
                            }
                          : {}
                      }
                    >
                      <Icon
                        className="text-2xl"
                        style={{ color: isActive ? '#fff' : sp.color }}
                      />
                      {sp.name}
                      <span
                        className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                        style={
                          isActive
                            ? {
                                background: 'rgba(255,255,255,0.25)',
                                color: '#fff',
                              }
                            : { background: `${sp.color}15`, color: sp.color }
                        }
                      >
                        {sp.status}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── 2-COL GRID ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Events */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-800 font-black text-lg mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center">
                    <FaCalendarAlt className="text-orange-500 text-sm" />
                  </span>
                  {activeSport === 'all'
                    ? 'All Events'
                    : `${sports.find((s) => s.id === activeSport)?.name} Events`}
                  <span className="ml-auto text-xs font-semibold bg-orange-50 text-orange-500 px-2.5 py-1 rounded-full border border-orange-100">
                    {filteredEvents.length} events
                  </span>
                </h3>

                {filteredEvents.length === 0 ? (
                  <div className="text-center py-10 text-gray-300">
                    <FaCalendarAlt className="text-4xl mx-auto mb-2" />
                    <p className="text-sm">No events for this sport yet</p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {filteredEvents.map((ev) => {
                      const EvIcon = ev.icon;
                      return (
                        <div
                          key={ev.title}
                          className="flex items-center justify-between py-3 px-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm transition-all duration-200"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{
                                background: `${ev.color}15`,
                                color: ev.color,
                              }}
                            >
                              <EvIcon className="text-base" />
                            </div>
                            <div>
                              <p className="text-gray-700 text-sm font-semibold leading-tight">
                                {ev.title}
                              </p>
                              <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
                                <IoMdTimer className="text-[10px]" />
                                {ev.date} · {ev.participants} participants
                              </p>
                            </div>
                          </div>
                          <span
                            className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 flex-shrink-0 ml-2"
                            style={
                              ev.status === 'upcoming'
                                ? { background: '#FFF3E0', color: '#FF7F00' }
                                : { background: '#F3F4F6', color: '#9CA3AF' }
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
                )}
              </div>

              {/* Achievements */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-800 font-black text-lg mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-yellow-50 flex items-center justify-center">
                    <GiTrophy className="text-yellow-500 text-sm" />
                  </span>
                  Achievements
                </h3>
                <div className="flex flex-col gap-4">
                  {achievements.map((ach, i) => {
                    const AchIcon = ach.icon;
                    return (
                      <div
                        key={ach.title}
                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                        style={{
                          opacity: mounted ? 1 : 0,
                          transition: `opacity 0.4s ease ${i * 100}ms`,
                        }}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                          style={{
                            background: `linear-gradient(135deg, ${ach.color}, ${ach.color}bb)`,
                          }}
                        >
                          <AchIcon className="text-white text-xl" />
                        </div>
                        <div>
                          <p className="text-gray-700 text-sm font-bold leading-tight">
                            {ach.title}
                          </p>
                          <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
                            <FaStar className="text-yellow-400 text-[10px]" />{' '}
                            {ach.year}
                          </p>
                        </div>
                        <FaMedal className="ml-auto text-yellow-300 text-xl flex-shrink-0" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── LEADERBOARD ── */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-6">
              <h3 className="text-gray-800 font-black text-lg mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                  <MdLeaderboard className="text-blue-500 text-sm" />
                </span>
                Sport Leaderboard
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {sports.map((sp, i) => {
                  const Icon = sp.icon;
                  const wins = [8, 5, 7, 4, 3][i];
                  const maxWins = 8;
                  return (
                    <div
                      key={sp.id}
                      className="flex flex-col gap-2 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <Icon className="text-xl" style={{ color: sp.color }} />
                        <span
                          className="text-xs font-black"
                          style={{ color: sp.color }}
                        >
                          {wins}W
                        </span>
                      </div>
                      <p className="text-gray-700 text-xs font-bold">
                        {sp.name}
                      </p>
                      {/* Progress bar */}
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${(wins / maxWins) * 100}%`,
                            background: `linear-gradient(90deg, ${sp.color}, ${sp.color}99)`,
                          }}
                        />
                      </div>
                      <p className="text-gray-400 text-[10px]">
                        {wins}/{maxWins} matches
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── TEAM MEMBERS ── */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-6">
              <h3 className="text-gray-800 font-black text-lg mb-5 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center">
                  <FaUsers className="text-orange-500 text-sm" />
                </span>
                Our Athletes
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                {members.map((m, i) => {
                  const SportIcon = m.sport;
                  return (
                    <div
                      key={m.name}
                      className="flex flex-col items-center text-center gap-2 py-5 px-2 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:-translate-y-1.5 transition-all duration-200 cursor-pointer"
                      style={{
                        opacity: membersVisible.includes(i) ? 1 : 0,
                        transform: membersVisible.includes(i)
                          ? 'translateY(0)'
                          : 'translateY(12px)',
                        transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`,
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-black text-white shadow-md relative"
                        style={{
                          background: `linear-gradient(135deg, ${m.c1}, ${m.c2})`,
                        }}
                      >
                        {m.initials}
                        <div
                          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center"
                          style={{ background: m.c1 }}
                        >
                          <SportIcon className="text-white text-[8px]" />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700 text-[11px] font-bold">
                          {m.name}
                        </p>
                        <p className="text-gray-400 text-[9px] mt-0.5 flex items-center justify-center gap-0.5">
                          <BsPersonFill
                            className="text-[8px]"
                            style={{ color: m.c1 }}
                          />
                          {m.role}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── JOIN CTA ── */}
            <div
              className="rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-orange-100"
              style={{
                background: 'linear-gradient(135deg, #FFF3E0, #FFF8F0)',
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, #FF7F00 0, #FF7F00 1px, transparent 0, transparent 50%)',
                  backgroundSize: '16px 16px',
                }}
              />
              <FaTrophy
                className="text-6xl mx-auto mb-4 relative z-10"
                style={{ color: '#FF7F00' }}
              />
              <h3 className="text-gray-800 text-2xl font-black mb-2 relative z-10">
                Ready to join the team?
              </h3>
              <p className="text-gray-500 text-sm mb-7 max-w-md mx-auto relative z-10">
                Whether you're a seasoned athlete or just starting out — every
                sport, every level, everyone is welcome at Nexcore Sports
                Community.
              </p>
              <a
                href="https://wa.me/9892398976?text=Hi%2C%20I%20want%20to%20join%20the%20Sports%20Community%20at%20Nexcore!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-white font-bold text-sm px-8 py-3.5 rounded-xl no-underline hover:opacity-90 hover:scale-105 transition-all duration-200 relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #FF7F00, #FFD200)',
                  boxShadow: '0 8px 24px rgba(255,127,0,0.35)',
                }}
              >
                <FaWhatsapp className="text-lg" /> Join via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
