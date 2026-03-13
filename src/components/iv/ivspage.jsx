"use client";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {
  FaBuilding, FaUsers, FaCheckCircle, FaClock, FaMapMarkerAlt,
  FaCalendarAlt, FaChevronLeft, FaChevronRight, FaExpand,
  FaWhatsapp, FaStar, FaIndustry, FaGraduationCap,
} from "react-icons/fa";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import { MdOutlineEmojiEvents, MdCorporateFare } from "react-icons/md";
import { BsImages, BsBuildingsFill } from "react-icons/bs";
import { IoMdTimer } from "react-icons/io";
import { GiFactory } from "react-icons/gi";

// ── Brand ──────────────────────────────────────────────────────
const BRAND = {
  primary: "#1A56DB",
  accent:  "#3B82F6",
  light:   "#EFF6FF",
  dark:    "#0F2A6E",
  text:    "#1E293B",
  muted:   "#64748B",
  border:  "#DBEAFE",
};

const VISIT_PHOTOS = {
  1: [
    "/images/iv/4.jpg",
    "/images/iv/7.jpg",
    "/images/iv/8.jpg",
    "/images/iv/9.jpg",
    "/images/iv/11.jpg",
    "/images/iv/17.jpg",
  ],
  2: [
    "/images/iv/1.jpg",
    "/images/iv/2.jpg",
    "/images/iv/3.jpg",
    "/images/iv/4.jpg",
    "/images/iv/5.jpg",
    "/images/iv/10.jpg",
    "/images/iv/18.jpg",
  ],
  3: [
    "/images/iv/11.jpg",
    "/images/iv/12.jpg",
    "/images/iv/13.jpg",
    "/images/iv/14.jpg",
    "/images/iv/15.jpg",
    "/images/iv/16.jpg",
    "/images/iv/6.jpg",
  ],
};

const visits = [
  {
    id: 1,
    company: "Jio",
    fullName: "Reliance Jio Infocomm Limited",
    location: "Navi Mumbai, Maharashtra",
    date: "2025-01-18",
    branch: "CSE & IT",
    year: "3rd Year",
    students: 62,
    status: "completed",
    fallbackImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    ],
    description: "Students explored Jio's state-of-the-art 5G infrastructure, digital platforms, and cloud ecosystem. The visit included hands-on interaction with Jio's telecom network operations and AI-powered services.",
    highlights: ["5G Network Lab Tour", "Cloud & Edge Computing", "JioFiber Demo", "Career Talk by Engineers"],
    icon: MdCorporateFare,
  },
  {
    id: 2,
    company: "IFEX E2026",
    fullName: "IFEX EXPO International 2026",
    location: "Mumbai, Maharashtra",
    date: "2026-01-22",
    branch: "Finance & IT",
    year: "2nd & 3rd Year",
    students: 48,
    status: "completed",
    fallbackImages: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=700&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=700&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80",
    ],
    description: "India's premier fintech and forex industry expo. Students will gain insights into trading technology, financial analytics platforms, blockchain applications, and global fintech innovations.",
    highlights: ["FinTech Exhibition", "Trading Platform Demo", "Blockchain Workshop", "Industry Networking"],
    icon: BsBuildingsFill,
  },
  {
    id: 3,
    company: "IIT Bombay",
    fullName: "Indian Institute of Technology Bombay",
    location: "Powai, Mumbai",
    date: "2025-03-05",
    branch: "All Branches",
    year: "All Years",
    students: 85,
    status: "completed",
    fallbackImages: [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1541829070764-845f7e24c422?w=700&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=700&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80",
    ],
    description: "An inspiring visit to IIT Bombay's research labs and innovation hub. Students witnessed cutting-edge research in robotics, AI, renewable energy, and interacted with PhD scholars and professors.",
    highlights: ["Research Lab Tour", "Robotics Demo", "Innovation Hub Visit", "Professor Interaction"],
    icon: FaGraduationCap,
  },
];

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, visible };
}

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useReveal();
  useEffect(() => {
    if (!visible) return;
    let n = 0;
    const step = Math.max(1, Math.ceil(target / 45));
    const t = setInterval(() => {
      n = Math.min(n + step, target);
      setCount(n);
      if (n >= target) clearInterval(t);
    }, 25);
    return () => clearInterval(t);
  }, [visible, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function PhotoSlider({ visitId, fallbackImages, title }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [imgErrors, setImgErrors] = useState({});

  const customPhotos = VISIT_PHOTOS[visitId] || [];
  const allPhotos = customPhotos.length > 0 ? customPhotos : fallbackImages;
  const total = allPhotos.length;

  const getSrc = (idx) => {
    if (imgErrors[idx]) return fallbackImages[idx % fallbackImages.length] || fallbackImages[0];
    return allPhotos[idx];
  };

  const prev = (e) => { e?.stopPropagation(); setCurrent((c) => (c === 0 ? total - 1 : c - 1)); };
  const next = (e) => { e?.stopPropagation(); setCurrent((c) => (c === total - 1 ? 0 : c + 1)); };

  return (
    <>
      <div className="relative h-56 overflow-hidden bg-gray-100 group/slider cursor-pointer"
        onClick={() => setLightbox(true)}>
        <img
          src={getSrc(current)}
          alt={`${title} ${current + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/slider:scale-105"
          onError={() => setImgErrors((e) => ({ ...e, [current]: true }))}
        />
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-sm border"
          style={{ background: "rgba(239,246,255,0.92)", color: BRAND.primary, borderColor: `${BRAND.primary}30` }}
        >
          <BsImages className="text-[10px]" />
          {total} Photos
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); setLightbox(true); }}
          className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 border"
          style={{ background: "rgba(255,255,255,0.92)", color: BRAND.primary, borderColor: `${BRAND.primary}20` }}
        >
          <FaExpand className="text-[9px]" />
        </button>
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
      </div>

      <div
        className="flex gap-1.5 p-2 overflow-x-auto"
        style={{ background: BRAND.light, scrollbarWidth: "none" }}
      >
        {allPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="flex-shrink-0 w-12 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200"
            style={{
              borderColor: i === current ? BRAND.primary : "transparent",
              opacity: i === current ? 1 : 0.65,
            }}
          >
            <img
              src={getSrc(i)}
              alt=""
              className="w-full h-full object-cover"
              onError={() => setImgErrors((e) => ({ ...e, [i]: true }))}
            />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.93)" }}
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-xl font-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            onClick={() => setLightbox(false)}
          >✕</button>
          <button
            onClick={prev}
            className="absolute left-4 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          ><FaChevronLeft className="text-xl" /></button>
          <button
            onClick={next}
            className="absolute right-4 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          ><FaChevronRight className="text-xl" /></button>
          <img
            src={getSrc(current)}
            alt={`${title} ${current + 1}`}
            className="max-w-[88vw] max-h-[82vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
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
          <p className="absolute bottom-6 right-6 text-white/50 text-xs">
            {current + 1} / {total}
          </p>
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2">
            {allPhotos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className="w-12 h-10 rounded-lg overflow-hidden border-2 transition-all"
                style={{ borderColor: i === current ? "white" : "rgba(255,255,255,0.2)" }}
              >
                <img src={getSrc(i)} alt="" className="w-full h-full object-cover"
                  onError={() => setImgErrors((e) => ({ ...e, [i]: true }))} />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function IVCard({ v, delay }) {
  const { ref, visible } = useReveal(delay);
  const Icon = v.icon;

  return (
    <div
      ref={ref}
      className="rounded-2xl border overflow-hidden bg-white transition-all duration-300"
      style={{
        borderColor: `${BRAND.primary}18`,
        boxShadow: `0 2px 16px ${BRAND.primary}0a`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s cubic-bezier(.22,.68,0,1.2) ${delay}ms, box-shadow 0.3s`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = `0 24px 48px ${BRAND.primary}1a`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = `0 2px 16px ${BRAND.primary}0a`;
      }}
    >
      <PhotoSlider visitId={v.id} fallbackImages={v.fallbackImages} title={v.company} />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
              style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})` }}
            >
              <Icon className="text-white text-lg" />
            </div>
            <div>
              <h3 className="font-black text-base leading-tight" style={{ color: BRAND.dark }}>{v.company}</h3>
              <p className="text-[11px] mt-0.5" style={{ color: BRAND.muted }}>{v.fullName}</p>
            </div>
          </div>
          <span
            className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 flex-shrink-0 border"
            style={
              v.status === "upcoming"
                ? { background: BRAND.light, color: BRAND.primary, borderColor: `${BRAND.primary}30` }
                : { background: "#f0fdf4", color: "#15803d", borderColor: "#bbf7d0" }
            }
          >
            {v.status === "upcoming"
              ? <FaClock className="text-[9px]" />
              : <FaCheckCircle className="text-[9px]" />}
            {v.status === "upcoming" ? "Upcoming" : "Completed"}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg" style={{ background: BRAND.light, color: BRAND.primary }}>{v.branch}</span>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg" style={{ background: "#fff7ed", color: "#9a3412" }}>{v.year}</span>
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: BRAND.muted }}>{v.description}</p>

        <div className="grid grid-cols-2 gap-1.5 mb-4">
          {v.highlights.map((h, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-2.5 py-2 rounded-lg border text-xs font-medium"
              style={{ borderColor: `${BRAND.primary}18`, background: BRAND.light, color: BRAND.text }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: idx % 2 === 0 ? BRAND.primary : BRAND.accent }}
              />
              {h}
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between pt-4 border-t"
          style={{ borderColor: `${BRAND.primary}15` }}
        >
          <div className="flex flex-col gap-1.5">
            <p className="flex items-center gap-1.5 text-xs" style={{ color: BRAND.muted }}>
              <FaCalendarAlt className="text-[10px]" style={{ color: BRAND.primary }} />
              {fmtDate(v.date)}
            </p>
            <p className="flex items-center gap-1.5 text-xs" style={{ color: BRAND.muted }}>
              <FaMapMarkerAlt className="text-[10px]" style={{ color: BRAND.primary }} />
              {v.location}
            </p>
          </div>
          <div
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white shadow-md"
            style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})` }}
          >
            <FaUsers className="text-[10px]" />
            {v.students} Students
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IVPage() {
  const [filter, setFilter] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const filtered = filter === "all" ? visits : visits.filter((v) => v.status === filter);
  const totalStudents = visits.reduce((s, v) => s + v.students, 0);

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>Industrial Visits | Jio, IIT Bombay, IFEX | BVOC AI & ML Program</title>
        <meta
          name="description"
          content="BVOC AI & ML students explore top industry leaders like Reliance Jio, IIT Bombay, and IFEX Expo. Real-world industrial visits bridging classroom knowledge with professional experience."
        />
        <meta
          name="keywords"
          content="BVOC AI ML industrial visits, Jio visit, IIT Bombay visit, IFEX expo, industry exposure program, BVOC student visits, real world learning, AI ML college Mumbai, industrial training, campus to corporate"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com/industrial-visits" />

        {/* Open Graph */}
        <meta property="og:title" content="Industrial Visits | Jio, IIT Bombay, IFEX | BVOC AI & ML Program" />
        <meta
          property="og:description"
          content="Our BVOC AI & ML students visit top organizations like Jio, IIT Bombay and IFEX to gain real-world industry exposure and professional insights."
        />
        <meta property="og:url" content="https://yourwebsite.com/industrial-visits" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/images/industrial-visits-og.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industrial Visits | BVOC AI & ML Program" />
        <meta
          name="twitter:description"
          content="Students visit Jio, IIT Bombay and IFEX for real-world industry exposure in the BVOC AI & ML program."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/images/industrial-visits-og.jpg" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* Dot pattern */}
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
            <div className="absolute inset-0 opacity-10" />

            <div className="max-w-6xl mx-auto relative z-10">
              <div
                className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-[11px] font-bold text-white tracking-widest uppercase mb-5"
                style={{ background: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.25)" }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "#f97316", boxShadow: "0 0 0 3px rgba(249,115,22,0.3)" }}
                />
                Industry Exposure Program
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none mb-4">
                    Industrial<br />
                    <span className="text-white/60">Visits</span>
                  </h1>
                  <p className="text-white/70 text-base sm:text-lg font-medium max-w-md">
                    Bridging classroom knowledge with real-world industry experience. Our students visit top organizations to gain practical insights and professional exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARDS SECTION ── */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: "#f97316" }}>
                  <span className="w-7 h-0.5 rounded" style={{ background: "#f97316" }} />
                  Our Visits
                </div>
                <h2 className="text-3xl font-black" style={{ color: BRAND.dark }}>
                  Exploring <span style={{ color: BRAND.primary }}>Industry Leaders</span>
                </h2>
              </div>
            </div>

            <p className="text-sm mb-6" style={{ color: BRAND.muted }}>
              Hover on photos to browse gallery · Click expand or photo for fullscreen
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((v, i) => (
                <IVCard key={v.id} v={v} delay={i * 130} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}