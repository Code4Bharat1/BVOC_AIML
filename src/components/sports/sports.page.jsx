'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

import {
  FaTrophy, FaWhatsapp, FaUsers, FaCalendarAlt, FaMedal,
  FaStar, FaCheckCircle, FaClock, FaFire,
  FaChevronLeft, FaChevronRight, FaExpand,
} from "react-icons/fa";
import {
  MdSportsCricket, MdSportsFootball, MdSportsHandball,
  MdOutlineEmojiEvents, MdLeaderboard,
} from "react-icons/md";
import { GiChessKnight, GiShuttlecock, GiWhistle, GiTrophy } from "react-icons/gi";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import { BsPersonFill, BsShieldFill, BsImages } from "react-icons/bs";
import { IoMdTimer } from "react-icons/io";

const BRAND = {
  primary: "#1A56DB",
  accent: "#3B82F6",
  light: "#EFF6FF",
  dark: "#0F2A6E",
  text: "#1E293B",
  muted: "#64748B",
};

const CRICKET_PHOTOS = [
  "/images/sports/s1.jpg",
  "/images/sports/s2.jpg",
  "/images/sports/s3.jpg",
  "/images/sports/s4.jpg",
  "/images/sports/s5.jpg",
  "/images/sports/s6.jpg",
  "/images/sports/s7.jpg",
  "/images/sports/s8.jpg",
  "/images/sports/s9.jpg",
  "/images/sports/s10.jpg",
  "/images/sports/s11.jpg",
  "/images/sports/s12.jpg",
  "/images/sports/s13.jpg",
  "/images/sports/s14.jpg",
  "/images/sports/s15.jpg",
  "/images/sports/s16.jpg",
  "/images/sports/s17.jpg",
  "/images/sports/s18.jpg",
  "/images/sports/s19.jpg",
  "/images/sports/s20.jpg",
  "/images/sports/s21.jpg",
];

const FOOTBALL_PHOTOS = [
  "/images/sports/s14.jpg",
  "/images/sports/s15.jpg",
];

const sports = [
  { id: "cricket",   name: "Cricket",   icon: MdSportsCricket,  players: 11, status: "Active Season" },
  { id: "football",  name: "Football",  icon: MdSportsFootball, players: 11, status: "Active Season" },
  { id: "chess",     name: "Chess",     icon: GiChessKnight,    players: 2,  status: "Tournament"    },
  { id: "badminton", name: "Badminton", icon: GiShuttlecock,    players: 4,  status: "Active Season" },
  { id: "kabaddi",   name: "Kabaddi",   icon: MdSportsHandball, players: 7,  status: "Off Season"    },
];

const achievements = [
  { title: "Inter-College Cricket Champions", year: "2024", icon: FaTrophy         },
  { title: "District Chess Runner-Up",        year: "2024", icon: GiChessKnight    },
  { title: "Best Sports College Award",       year: "2023", icon: FaMedal          },
  { title: "Football League Winners",         year: "2023", icon: MdSportsFootball },
];

const events = [
  {
    title: "Inter-Batch Cricket Tournament",
    date: "Jan 20", participants: 22, status: "completed", sport: "Cricket",
    icon: MdSportsCricket,
    photos: CRICKET_PHOTOS,
    fallbackImage: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
  },
  {
    title: "Chess Championship Round 1",
    date: "Feb 14", participants: 10, status: "completed", sport: "Chess",
    icon: GiChessKnight,
    photos: null,
    fallbackImage: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=80",
  },
  {
    title: "Badminton Open Doubles",
    date: "Feb 28", participants: 16, status: "completed", sport: "Badminton",
    icon: GiShuttlecock,
    photos: null,
    fallbackImage: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&q=80",
  },
  {
    title: "Football League Season 2",
    date: "Mar 22", participants: 22, status: "upcoming", sport: "Football",
    icon: MdSportsFootball,
    photos: FOOTBALL_PHOTOS,
    fallbackImage: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80",
  },
  {
    title: "Kabaddi Friendly Match",
    date: "Apr 5", participants: 14, status: "upcoming", sport: "Kabaddi",
    icon: MdSportsHandball,
    photos: null,
    fallbackImage: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600&q=80",
  },
];

const members = [
  { name: "Taha",    role: "Cricket Captain", initials: "TA", sport: MdSportsCricket  },
  { name: "Yaseen",  role: "Football Lead",   initials: "YA", sport: MdSportsFootball },
  { name: "Zaid",    role: "Chess Champion",  initials: "ZA", sport: GiChessKnight    },
  { name: "Asif",    role: "Badminton",       initials: "AS", sport: GiShuttlecock    },
  { name: "Faiz",    role: "Athletics",       initials: "FA", sport: FaFire           },
  { name: "Sudeep",  role: "Kabaddi",         initials: "SU", sport: MdSportsHandball },
  { name: "Ahmed",   role: "Coach Assist",    initials: "AH", sport: GiWhistle        },
  { name: "Vishesh", role: "Goalkeeper",      initials: "VI", sport: BsShieldFill     },
];

const statsRow = [
  { label: "Athletes",     value: 18, icon: FaUsers             },
  { label: "Sports",       value: 5,  icon: FaTrophy            },
  { label: "Events Held",  value: 6,  icon: MdOutlineEmojiEvents },
  { label: "Trophies Won", value: 4,  icon: GiTrophy            },
];

function PhotoSlider({ photos, fallbackImage, title }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [imgError, setImgError] = useState({});

  const allPhotos = photos && photos.length > 0 ? photos : [fallbackImage];
  const hasMultiple = allPhotos.length > 1;

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? allPhotos.length - 1 : c - 1));
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c === allPhotos.length - 1 ? 0 : c + 1));
  };

  const currentSrc = imgError[current] ? fallbackImage : allPhotos[current];

  return (
    <>
      <div className="relative h-52 overflow-hidden bg-gray-100 group/slider">
        <img
          src={currentSrc}
          alt={`${title} - photo ${current + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
          onError={() => setImgError((e) => ({ ...e, [current]: true }))}
        />
        {photos && photos.length > 0 && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-sm border"
            style={{ background: "rgba(239,246,255,0.92)", color: BRAND.primary, borderColor: `${BRAND.primary}30` }}
          >
            <BsImages className="text-[10px]" />
            {photos.length} Photos
          </div>
        )}
        <button
          onClick={() => setLightbox(true)}
          className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 border"
          style={{ background: "rgba(255,255,255,0.9)", color: BRAND.primary, borderColor: `${BRAND.primary}20` }}
        >
          <FaExpand className="text-[10px]" />
        </button>
        {hasMultiple && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 border"
              style={{ background: "rgba(255,255,255,0.9)", color: BRAND.primary, borderColor: `${BRAND.primary}20` }}
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 border"
              style={{ background: "rgba(255,255,255,0.9)", color: BRAND.primary, borderColor: `${BRAND.primary}20` }}
            >
              <FaChevronRight className="text-xs" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {allPhotos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  className="rounded-full transition-all duration-200 border-none"
                  style={{
                    width: i === current ? "20px" : "6px",
                    height: "6px",
                    background: i === current ? "white" : "rgba(255,255,255,0.5)",
                  }}
                />
              ))}
            </div>
          </>
        )}
        {hasMultiple && (
          <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-2 pt-0 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 overflow-x-auto">
            {allPhotos.map((src, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200"
                style={{
                  borderColor: i === current ? "white" : "rgba(255,255,255,0.3)",
                  opacity: i === current ? 1 : 0.7,
                }}
              >
                <img
                  src={imgError[i] ? fallbackImage : src}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={() => setImgError((e) => ({ ...e, [i]: true }))}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl font-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            onClick={() => setLightbox(false)}
          >✕</button>
          {hasMultiple && (
            <>
              <button onClick={prev} className="absolute left-4 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaChevronLeft className="text-xl" />
              </button>
              <button onClick={next} className="absolute right-4 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaChevronRight className="text-xl" />
              </button>
            </>
          )}
          <img
            src={currentSrc}
            alt={`${title} - photo ${current + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          {hasMultiple && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {allPhotos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "white" : "rgba(255,255,255,0.4)",
                  }}
                />
              ))}
            </div>
          )}
          <p className="absolute bottom-6 right-6 text-white/50 text-xs">
            {current + 1} / {allPhotos.length}
          </p>
        </div>
      )}
    </>
  );
}

export default function SportsPage() {
  const [activeSport, setActiveSport]       = useState("all");
  const [mounted, setMounted]               = useState(false);
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
    activeSport === "all"
      ? events
      : events.filter((e) => e.sport.toLowerCase() === activeSport);

  return (
    <>
      <Head>
        <title>Sports Community | Cricket, Football, Chess & More | Nexcore Institute</title>
        <meta
          name="description"
          content="Nexcore Institute of Technology's Sports Community — featuring cricket, football, chess, badminton and kabaddi. Inter-college champions, 18+ athletes, 4 trophies won. Join our sports team today!"
        />
        <meta
          name="keywords"
          content="Nexcore sports community, Nexcore cricket team, Nexcore football team, inter-college sports Mumbai, BVOC AI ML sports, college sports community, Nexcore Institute athletics, sports events college Mumbai, cricket championship college"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/explore/sports" />
        <meta property="og:title" content="Sports Community | Cricket, Football, Chess & More | Nexcore Institute" />
        <meta
          property="og:description"
          content="Join Nexcore's thriving sports community — cricket champions, football league, chess tournaments and more. 18+ athletes, 4 trophies, 5 sports."
        />
        <meta property="og:url" content="https://yourwebsite.com/explore/sports" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/images/sports-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sports Community | Nexcore Institute of Technology" />
        <meta
          name="twitter:description"
          content="Cricket, football, chess, badminton and kabaddi at Nexcore Institute. Inter-college champions with 4 trophies won."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/images/sports-og.jpg" />
      </Head>

      <Navbar />
      <main className="min-h-screen bg-white relative overflow-hidden">
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${BRAND.primary}18 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{ background: `linear-gradient(180deg, ${BRAND.light} 0%, white 40%)` }}
        />

        <div
          className="relative z-10"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {/* ── HERO ── */}
          <div
            className="relative overflow-hidden pt-32 pb-16 px-5"
            style={{ background: `linear-gradient(135deg, ${BRAND.dark}, ${BRAND.primary})` }}
          >
            <div className="max-w-5xl mx-auto relative z-10">
              <div
                className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-[11px] font-bold text-white tracking-widest uppercase mb-5"
                style={{ background: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.25)" }}
              >
                <GiWhistle /> Nexcore Institute of Technology
              </div>
              <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-none mb-4">
                Sports
                <br />
                <span className="text-white/60">Community</span>
              </h1>
              <p className="text-white/70 text-base sm:text-lg font-medium mb-8 max-w-md">
                Sweat. Compete. Win. — Where Nexcore athletes train hard, play fair, and celebrate every victory together.
              </p>
              <div className="flex flex-wrap gap-3">
                {statsRow.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-xl px-4 py-2.5 backdrop-blur-sm border"
                    style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.2)" }}
                  >
                    <Icon className="text-white text-sm" />
                    <span className="text-white font-black text-lg leading-none">{value}+</span>
                    <span className="text-white/70 text-xs font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

            {/* ── SPORT FILTER ── */}
            <div className="mb-14">
              <h2 className="text-2xl font-black mb-1 flex items-center gap-2" style={{ color: BRAND.dark }}>
                <HiLightningBolt style={{ color: BRAND.primary }} /> Our Sports
              </h2>
              <p className="text-sm mb-6" style={{ color: BRAND.muted }}>Click a sport to filter events</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <button
                  onClick={() => setActiveSport("all")}
                  className="flex flex-col items-center gap-2.5 py-5 px-3 rounded-2xl border-2 font-bold text-sm transition-all duration-200 cursor-pointer"
                  style={
                    activeSport === "all"
                      ? { borderColor: BRAND.primary, background: BRAND.light, color: BRAND.primary, boxShadow: `0 4px 16px ${BRAND.primary}22` }
                      : { borderColor: "#e2e8f0", background: "white", color: BRAND.muted }
                  }
                >
                  <HiSparkles className="text-2xl" style={{ color: activeSport === "all" ? BRAND.primary : BRAND.muted }} />
                  All Sports
                </button>
                {sports.map((sp) => {
                  const Icon = sp.icon;
                  const isActive = activeSport === sp.id;
                  return (
                    <button
                      key={sp.id}
                      onClick={() => setActiveSport(sp.id)}
                      className="flex flex-col items-center gap-2.5 py-5 px-3 rounded-2xl border-2 font-bold text-sm transition-all duration-200 cursor-pointer"
                      style={
                        isActive
                          ? { background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})`, borderColor: BRAND.primary, color: "white", boxShadow: `0 8px 24px ${BRAND.primary}33` }
                          : { borderColor: "#e2e8f0", background: "white", color: BRAND.muted }
                      }
                    >
                      <Icon className="text-2xl" style={{ color: isActive ? "#fff" : BRAND.primary }} />
                      {sp.name}
                      <span
                        className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                        style={isActive ? { background: "rgba(255,255,255,0.25)", color: "#fff" } : { background: BRAND.light, color: BRAND.primary }}
                      >
                        {sp.status}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── EVENTS ── */}
            <div className="mb-10">
              <h2 className="text-2xl font-black mb-1 flex items-center gap-2" style={{ color: BRAND.dark }}>
                <FaCalendarAlt style={{ color: BRAND.primary }} />
                {activeSport === "all" ? "All Events" : `${sports.find(s => s.id === activeSport)?.name} Events`}
                <span
                  className="ml-2 text-xs font-semibold px-2.5 py-1 rounded-full border"
                  style={{ background: BRAND.light, color: BRAND.primary, borderColor: `${BRAND.primary}20` }}
                >
                  {filteredEvents.length} events
                </span>
              </h2>
              <p className="text-sm mb-6" style={{ color: BRAND.muted }}>
                Hover on photo cards to browse gallery · Click expand icon for fullscreen
              </p>
              {filteredEvents.length === 0 ? (
                <div
                  className="text-center py-16 rounded-2xl border"
                  style={{ borderColor: `${BRAND.primary}15`, background: BRAND.light, color: BRAND.muted }}
                >
                  <FaCalendarAlt className="text-4xl mx-auto mb-2 opacity-30" />
                  <p className="text-sm font-semibold">No events for this sport yet</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredEvents.map((ev, i) => {
                    const EvIcon = ev.icon;
                    const hasGallery = ev.photos && ev.photos.length > 0;
                    return (
                      <div
                        key={ev.title}
                        className="rounded-2xl border overflow-hidden bg-white"
                        style={{
                          borderColor: `${BRAND.primary}18`,
                          boxShadow: `0 2px 12px ${BRAND.primary}0a`,
                          opacity: mounted ? 1 : 0,
                          transform: mounted ? "translateY(0)" : "translateY(16px)",
                          transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms`,
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.boxShadow = `0 20px 40px ${BRAND.primary}20`;
                          e.currentTarget.style.transform = "translateY(-4px)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.boxShadow = `0 2px 12px ${BRAND.primary}0a`;
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <PhotoSlider photos={ev.photos} fallbackImage={ev.fallbackImage} title={ev.title} />
                        <div className="p-4">
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: BRAND.light }}>
                                <EvIcon className="text-sm" style={{ color: BRAND.primary }} />
                              </div>
                              <h4 className="font-bold text-sm leading-snug" style={{ color: BRAND.text }}>{ev.title}</h4>
                            </div>
                            <span
                              className="text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 flex-shrink-0 border"
                              style={
                                ev.status === "upcoming"
                                  ? { background: BRAND.light, color: BRAND.primary, borderColor: `${BRAND.primary}30` }
                                  : { background: "#f1f5f9", color: "#64748b", borderColor: "transparent" }
                              }
                            >
                              {ev.status === "upcoming" ? <FaClock className="text-[9px]" /> : <FaCheckCircle className="text-[9px]" />}
                              {ev.status}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-xs flex items-center gap-1" style={{ color: BRAND.muted }}>
                              <IoMdTimer className="text-[10px]" style={{ color: BRAND.primary }} />{ev.date}
                            </p>
                            <p className="text-xs flex items-center gap-1" style={{ color: BRAND.muted }}>
                              <FaUsers className="text-[10px]" style={{ color: BRAND.primary }} />{ev.participants} participants
                            </p>
                            {hasGallery && (
                              <p className="text-xs flex items-center gap-1" style={{ color: BRAND.primary }}>
                                <BsImages className="text-[10px]" />{ev.photos.length} photos
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ── 2-COL: Achievements + Leaderboard ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border rounded-2xl p-6 shadow-sm" style={{ borderColor: `${BRAND.primary}18` }}>
                <h3 className="font-black text-lg mb-5 flex items-center gap-2" style={{ color: BRAND.dark }}>
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: BRAND.light }}>
                    <GiTrophy style={{ color: BRAND.primary }} className="text-sm" />
                  </span>
                  Achievements
                </h3>
                <div className="flex flex-col gap-4">
                  {achievements.map((ach, i) => {
                    const AchIcon = ach.icon;
                    return (
                      <div
                        key={ach.title}
                        className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                        style={{ borderColor: `${BRAND.primary}15`, background: BRAND.light, opacity: mounted ? 1 : 0, transition: `opacity 0.4s ease ${i * 100}ms` }}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                          style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})` }}
                        >
                          <AchIcon className="text-white text-xl" />
                        </div>
                        <div>
                          <p className="text-sm font-bold leading-tight" style={{ color: BRAND.text }}>{ach.title}</p>
                          <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color: BRAND.muted }}>
                            <FaStar className="text-yellow-400 text-[10px]" /> {ach.year}
                          </p>
                        </div>
                        <FaMedal className="ml-auto text-yellow-300 text-xl flex-shrink-0" />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white border rounded-2xl p-6 shadow-sm" style={{ borderColor: `${BRAND.primary}18` }}>
                <h3 className="font-black text-lg mb-5 flex items-center gap-2" style={{ color: BRAND.dark }}>
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: BRAND.light }}>
                    <MdLeaderboard style={{ color: BRAND.primary }} className="text-sm" />
                  </span>
                  Sport Leaderboard
                </h3>
                <div className="flex flex-col gap-3">
                  {sports.map((sp, i) => {
                    const Icon = sp.icon;
                    const wins = [8, 5, 7, 4, 3][i];
                    const maxWins = 8;
                    return (
                      <div
                        key={sp.id}
                        className="flex items-center gap-3 p-3 rounded-xl border transition-all hover:shadow-sm"
                        style={{ borderColor: `${BRAND.primary}15`, background: BRAND.light }}
                      >
                        <Icon className="text-lg flex-shrink-0" style={{ color: BRAND.primary }} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-xs font-bold" style={{ color: BRAND.text }}>{sp.name}</p>
                            <span className="text-xs font-black" style={{ color: BRAND.primary }}>{wins}W</span>
                          </div>
                          <div className="h-1.5 bg-white rounded-full overflow-hidden border" style={{ borderColor: `${BRAND.primary}20` }}>
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{ width: `${(wins / maxWins) * 100}%`, background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.accent})` }}
                            />
                          </div>
                        </div>
                        <p className="text-[10px] flex-shrink-0" style={{ color: BRAND.muted }}>{wins}/{maxWins}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── TEAM MEMBERS ── */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm mb-6" style={{ borderColor: `${BRAND.primary}18` }}>
              <h3 className="font-black text-lg mb-5 flex items-center gap-2" style={{ color: BRAND.dark }}>
                <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: BRAND.light }}>
                  <FaUsers style={{ color: BRAND.primary }} className="text-sm" />
                </span>
                Our Athletes
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                {members.map((m, i) => {
                  const SportIcon = m.sport;
                  return (
                    <div
                      key={m.name}
                      className="flex flex-col items-center text-center gap-2 py-5 px-2 rounded-xl border cursor-pointer transition-all duration-200"
                      style={{
                        borderColor: `${BRAND.primary}15`,
                        background: BRAND.light,
                        opacity: membersVisible.includes(i) ? 1 : 0,
                        transform: membersVisible.includes(i) ? 'translateY(0)' : 'translateY(12px)',
                        transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${BRAND.primary}20`; e.currentTarget.style.background = "white"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.background = BRAND.light; }}
                    >
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-black text-white shadow-md relative"
                        style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})` }}
                      >
                        {m.initials}
                        <div
                          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center"
                          style={{ background: BRAND.primary }}
                        >
                          <SportIcon className="text-white text-[8px]" />
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold" style={{ color: BRAND.text }}>{m.name}</p>
                        <p className="text-[9px] mt-0.5 flex items-center justify-center gap-0.5" style={{ color: BRAND.muted }}>
                          <BsPersonFill className="text-[8px]" style={{ color: BRAND.primary }} />
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
              className="rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border bg-white"
              style={{ borderColor: `${BRAND.primary}20`, boxShadow: `0 8px 40px ${BRAND.primary}12` }}
            >
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})` }} />
              <FaTrophy className="text-6xl mx-auto mb-4 relative z-10" style={{ color: BRAND.primary }} />
              <h3 className="text-2xl font-black mb-2 relative z-10" style={{ color: BRAND.dark }}>Ready to join the team?</h3>
              <p className="text-sm mb-7 max-w-md mx-auto relative z-10" style={{ color: BRAND.muted }}>
                Whether you're a seasoned athlete or just starting out — every sport, every level, everyone is welcome at Nexcore Sports Community.
              </p>
              <a
                href="https://wa.me/9892398976?text=Hi%2C%20I%20want%20to%20join%20the%20Sports%20Community%20at%20Nexcore!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-white font-bold text-sm px-8 py-3.5 rounded-xl no-underline hover:opacity-90 hover:scale-105 transition-all duration-200 relative z-10"
                style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})`, boxShadow: `0 8px 24px ${BRAND.primary}44` }}
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