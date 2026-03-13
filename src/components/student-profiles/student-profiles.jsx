"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

// ── Brand ──────────────────────────────────────────────────────
const BRAND = {
  primary: "#1A56DB",
  accent:  "#3B82F6",
  light:   "#EFF6FF",
  dark:    "#0F2A6E",
  text:    "#1E293B",
  muted:   "#64748B",
};

const STUDENT_PHOTOS = {
  1:  "/images/students/piyush.jpeg",
  2:  "/images/students/pravin.jpeg",
  3:  "/images/students/ramzan.jpeg",
  4:  "/images/students/sahil.jpeg",
  5:  "/images/students/sajiya.jpeg",
  6:  "/images/students/kazim.jpeg",
  7:  "/images/students/sanskar.jpeg",
  8:  "/images/students/sudeep.jpeg",
  9:  "/images/students/taha.jpeg",
  10: "/images/students/tamanna.jpeg",
  11: "/images/students/uzer.jpeg",
  12: "/images/students/vishesh.jpeg",
  13: "/images/students/yaseen.jpeg",
  14: "/images/students/zaid.jpeg",
  15: "/images/students/affan.jpeg",
  16: "/images/students/ahmed.jpeg",
  17: "/images/students/asif.jpeg",
  18: "/images/students/faiz.jpeg",
  19: "/images/students/farhan.jpeg",
  20: "/images/students/iqfat.jpeg",
  22: "/images/students/nafisa.jpeg",
  23: "/images/students/obaidullah.jpeg",
};

const students = [
  { id: 1,  name: "Piyush",     batch: "2025-28", branch: "IT", skills: ["React", "Node.js"] },
  { id: 2,  name: "Pravin",     batch: "2025-28", branch: "CS", skills: ["Python", "ML"] },
  { id: 3,  name: "Ramzan",     batch: "2025-28", branch: "IT", skills: ["Java", "Spring"] },
  { id: 4,  name: "Sahil",      batch: "2025-28", branch: "CS", skills: ["UI/UX", "Figma"] },
  { id: 5,  name: "Sajiya",     batch: "2025-28", branch: "IT", skills: ["Flutter", "Dart"] },
  { id: 6,  name: "Kazim",      batch: "2025-28", branch: "CS", skills: ["React", "TS"] },
  { id: 7,  name: "Sanskar",    batch: "2025-28", branch: "IT", skills: ["Django", "Python"] },
  { id: 8,  name: "Sudeep",     batch: "2025-28", branch: "CS", skills: ["AWS", "DevOps"] },
  { id: 9,  name: "Taha",       batch: "2025-28", branch: "IT", skills: ["Vue.js", "CSS"] },
  { id: 10, name: "Tamanna",    batch: "2025-28", branch: "CS", skills: ["Data Science", "R"] },
  { id: 11, name: "Uzer",       batch: "2025-28", branch: "IT", skills: ["Next.js", "MongoDB"] },
  { id: 12, name: "Vishesh",    batch: "2025-28", branch: "CS", skills: ["C++", "DSA"] },
  { id: 13, name: "Yaseen",     batch: "2025-28", branch: "IT", skills: ["React Native", "Expo"] },
  { id: 14, name: "Zaid",       batch: "2025-28", branch: "CS", skills: ["Blockchain", "Web3"] },
  { id: 15, name: "Affan",      batch: "2025-28", branch: "IT", skills: ["Angular", "RxJS"] },
  { id: 16, name: "Ahmed",      batch: "2025-28", branch: "CS", skills: ["MySQL", "PHP"] },
  { id: 17, name: "Asif",       batch: "2025-28", branch: "IT", skills: ["Swift", "iOS"] },
  { id: 18, name: "Faiz",       batch: "2025-28", branch: "CS", skills: ["Kotlin", "Android"] },
  { id: 19, name: "Farhan",     batch: "2025-28", branch: "IT", skills: ["Go", "Docker"] },
  { id: 20, name: "Iqfat",      batch: "2025-28", branch: "CS", skills: ["Redis", "Kafka"] },
  { id: 22, name: "Nafisa",     batch: "2025-28", branch: "CS", skills: ["NLP", "TensorFlow"] },
  { id: 23, name: "Obaidullah", batch: "2025-28", branch: "IT", skills: ["Rust", "Wasm"] },
];

function getInitials(name) {
  return name.slice(0, 2).toUpperCase();
}

function StudentCard({ student, photo, isVis, index }) {
  const [imgError, setImgError] = useState(false);
  const showPhoto = photo && !imgError;

  return (
    <div
      className="relative flex flex-col items-center text-center rounded-2xl px-5 py-7 border bg-white shadow-sm overflow-hidden cursor-pointer"
      style={{
        borderColor: `${BRAND.primary}18`,
        opacity: isVis ? 1 : 0,
        transform: isVis ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
        transition: `opacity 0.4s ease ${index * 50}ms, transform 0.4s ease ${index * 50}ms, box-shadow 0.25s`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
        e.currentTarget.style.boxShadow = `0 20px 40px ${BRAND.primary}1a`;
        e.currentTarget.style.borderColor = `${BRAND.primary}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
        e.currentTarget.style.borderColor = `${BRAND.primary}18`;
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
      />

      <div
        className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center text-xl font-black text-white mb-3 shadow-md border-2"
        style={{
          background: showPhoto ? "transparent" : `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})`,
          borderColor: `${BRAND.primary}30`,
        }}
      >
        {showPhoto ? (
          <img
            src={photo}
            alt={student.name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          getInitials(student.name)
        )}
      </div>

      <h3 className="font-bold text-base tracking-tight mb-1" style={{ color: BRAND.text }}>
        {student.name}
      </h3>

      <span className="text-xs font-medium mb-5" style={{ color: BRAND.muted }}>
        {student.batch}
      </span>

      <a
        href={`https://profile.nexcoreinstitute.org/${student.name.toLowerCase()}.html`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center text-white text-xs font-bold py-2.5 px-4 rounded-xl tracking-wide no-underline transition-all duration-200 hover:opacity-85 hover:scale-105"
        style={{
          background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})`,
          boxShadow: `0 4px 12px ${BRAND.primary}33`,
        }}
      >
        View Profile →
      </a>
    </div>
  );
}

export default function StudentDirectory() {
  const [search, setSearch]   = useState("");
  const [filter, setFilter]   = useState("All");
  const [visible, setVisible] = useState([]);

  const filtered = students.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || s.branch === filter;
    return matchSearch && matchFilter;
  });

  useEffect(() => {
    setVisible([]);
    filtered.forEach((_, i) => {
      setTimeout(() => setVisible((prev) => [...prev, i]), i * 60);
    });
  }, [search, filter]);

  return (
    <>
      <Head>
        <title>Student Directory | B.Voc Batch 2025-28 | Nexcore Institute of Technology</title>
        <meta
          name="description"
          content="Meet the talented students of Nexcore Institute of Technology — B.Voc batch 2025-28. Skilled in React, Python, ML, DevOps, Blockchain, Flutter and more. View student profiles."
        />
        <meta
          name="keywords"
          content="Nexcore student directory, BVOC students 2025 2028, Nexcore Institute of Technology students, student profiles Nexcore, IT CS students Mumbai, BVOC AI ML students, Nexcore batch 2025"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/explore/student-profiles" />
        <meta property="og:title" content="Student Directory | B.Voc Batch 2025-28 | Nexcore Institute" />
        <meta
          property="og:description"
          content="Browse the student directory of Nexcore Institute of Technology — B.Voc batch 2025-28 with skills in AI, ML, React, DevOps, Blockchain and more."
        />
        <meta property="og:url" content="https://yourwebsite.com/explore/student-profiles" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/images/students-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Student Directory | Nexcore Institute of Technology" />
        <meta
          name="twitter:description"
          content="Meet Nexcore's B.Voc 2025-28 students skilled in AI, ML, React, DevOps and more."
        />
        <meta name="twitter:image" content="https://yourwebsite.com/images/students-og.jpg" />
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

        <div className="px-5 pt-28 pb-20 relative z-10">

          {/* ── Header ── */}
          <div className="text-center mb-10 mt-2">
            <div
              className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase mb-5"
              style={{ background: BRAND.light, borderColor: `${BRAND.primary}30`, color: BRAND.primary }}
            >
              🎓 Nexcore Institute of Technology
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-2" style={{ color: BRAND.dark }}>
              Student <span style={{ color: BRAND.primary }}>Directory</span>
            </h1>
            <p className="text-sm font-medium" style={{ color: BRAND.muted }}>B.Voc · Batch 2025–2028</p>
          </div>

          {/* ── Controls ── */}
          <div className="flex flex-wrap gap-3 justify-center mb-4">
          </div>

          {/* ── Cards Grid ── */}
          <div
            className="grid gap-5 max-w-6xl mx-auto"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))" }}
          >
            {filtered.map((student, i) => (
              <StudentCard
                key={student.id}
                student={student}
                photo={STUDENT_PHOTOS[student.id]}
                isVis={visible.includes(i)}
                index={i}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}