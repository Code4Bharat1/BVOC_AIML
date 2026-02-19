"use client";
import { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const students = [
  { id: 1, name: "Piyush", batch: "2025-28", branch: "IT", skills: ["React", "Node.js"] },
  { id: 2, name: "Pravin", batch: "2025-28", branch: "CS", skills: ["Python", "ML"] },
  { id: 3, name: "Ramzan", batch: "2025-28", branch: "IT", skills: ["Java", "Spring"] },
  { id: 4, name: "Sahil", batch: "2025-28", branch: "CS", skills: ["UI/UX", "Figma"] },
  { id: 5, name: "Sajiya", batch: "2025-28", branch: "IT", skills: ["Flutter", "Dart"] },
  { id: 6, name: "Kazim", batch: "2025-28", branch: "CS", skills: ["React", "TS"] },
  { id: 7, name: "Sanskar", batch: "2025-28", branch: "IT", skills: ["Django", "Python"] },
  { id: 8, name: "Sudeep", batch: "2025-28", branch: "CS", skills: ["AWS", "DevOps"] },
  { id: 9, name: "Taha", batch: "2025-28", branch: "IT", skills: ["Vue.js", "CSS"] },
  { id: 10, name: "Tamanna", batch: "2025-28", branch: "CS", skills: ["Data Science", "R"] },
  { id: 11, name: "Uzer", batch: "2025-28", branch: "IT", skills: ["Next.js", "MongoDB"] },
  { id: 12, name: "Vishesh", batch: "2025-28", branch: "CS", skills: ["C++", "DSA"] },
  { id: 13, name: "Yaseen", batch: "2025-28", branch: "IT", skills: ["React Native", "Expo"] },
  { id: 14, name: "Zaid", batch: "2025-28", branch: "CS", skills: ["Blockchain", "Web3"] },
  { id: 15, name: "Affan", batch: "2025-28", branch: "IT", skills: ["Angular", "RxJS"] },
  { id: 16, name: "Ahmed", batch: "2025-28", branch: "CS", skills: ["MySQL", "PHP"] },
  { id: 17, name: "Asif", batch: "2025-28", branch: "IT", skills: ["Swift", "iOS"] },
  { id: 18, name: "Faiz", batch: "2025-28", branch: "CS", skills: ["Kotlin", "Android"] },
  { id: 19, name: "Farhan", batch: "2025-28", branch: "IT", skills: ["Go", "Docker"] },
  { id: 20, name: "Iqfat", batch: "2025-28", branch: "CS", skills: ["Redis", "Kafka"] },
  { id: 22, name: "Nafisa", batch: "2025-28", branch: "CS", skills: ["NLP", "TensorFlow"] },
  { id: 23, name: "Obaidullah", batch: "2025-28", branch: "IT", skills: ["Rust", "Wasm"] },
];

const gradients = [
  ["#007BFF", "#00C6FF"],
  ["#FF7F00", "#FFD200"],
  ["#007BFF", "#7B2FFF"],
  ["#00C853", "#007BFF"],
  ["#FF7F00", "#FF2D55"],
  ["#007BFF", "#00E5FF"],
  ["#9C27B0", "#007BFF"],
];

function getInitials(name) {
  return name.slice(0, 2).toUpperCase();
}

function getProfileUrl(name) {
  return `https://profile.nexcoreinstitute.org/${name.toLowerCase()}.html`;
}

function getGradient(id) {
  return gradients[id % gradients.length];
}

export default function StudentDirectory() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filtered = students.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || s.branch === filter;
    return matchSearch && matchFilter;
  });

  useEffect(() => {
    setVisible([]);
    filtered.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, i]);
      }, i * 60);
    });
  }, [search, filter]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F4F7FC] relative overflow-hidden">

        {/* Subtle dot pattern */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #007BFF 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Soft corner glows */}
        <div
          className="fixed -top-28 -left-28 w-96 h-96 rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(0,123,255,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="fixed -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(255,127,0,0.07) 0%, transparent 70%)" }}
        />

        <div className="px-5 pt-28 pb-20 relative z-10">

          {/* ── Header ── */}
          <div className="text-center mb-10 mt-2">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-1.5 text-[11px] font-semibold text-gray-400 tracking-widest uppercase mb-5">
              🎓 Nexcore Institute of Technology
            </div>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2"
            //   style={{
            //     background: "linear-gradient(135deg, #1a1a2e 40%, #007BFF)",
            //     WebkitBackgroundClip: "text",
            //     WebkitTextFillColor: "transparent",
            //   }}
            >
              Student Directory
            </h1>
            <p className="text-gray-400 text-sm font-medium">B.Voc  · Batch 2025–2028</p>
          </div>

          {/* ── Controls ── */}
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            {/* Search */}
            {/* <div className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-xl px-4 py-2.5 min-w-[260px]">
              <span className="text-gray-400">🔍</span>
              <input
                className="bg-transparent border-none outline-none text-gray-700 text-sm w-full placeholder-gray-300"
                placeholder="Search students..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div> */}

            {/* Branch filter */}
            {/* <div className="flex gap-2 items-center">
              {["All", "IT", "CS"].map((b) => (
                <button
                  key={b}
                  onClick={() => setFilter(b)}
                  className={`px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer
                    ${filter === b
                      ? "bg-blue-500 border-blue-500 text-white shadow-md shadow-blue-200"
                      : "bg-white border-gray-200 text-gray-500 hover:border-blue-300 hover:text-blue-500"
                    }`}
                >
                  {b}
                </button>
              ))}
            </div> */}
          </div>

          {/* Count */}
          {/* <p className="text-center text-gray-400 text-xs mb-8">
            {filtered.length} students found
          </p> */}

          {/* ── Cards Grid ── */}
          <div
            className="grid gap-5 max-w-6xl mx-auto"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))" }}
          >
            {filtered.map((student, i) => {
              const [c1, c2] = getGradient(student.id);
              const isVis = visible.includes(i);

              return (
                <div
                  key={student.id}
                  className="relative flex flex-col items-center text-center rounded-2xl px-5 py-7 border border-gray-200 bg-white shadow-sm overflow-hidden cursor-pointer"
                  style={{
                    opacity: isVis ? 1 : 0,
                    transform: isVis ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
                    e.currentTarget.style.boxShadow = `0 20px 40px ${c1}22`;
                    e.currentTarget.style.borderColor = `${c1}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }}
                >
                  {/* Top color bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${c1}, ${c2})` }}
                  />

                  {/* Avatar */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black text-white mb-3 shadow-md"
                    style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
                  >
                    {getInitials(student.name)}
                  </div>

                  {/* Name & Branch */}
                  <h3 className="text-gray-800 font-bold text-base tracking-tight mb-1">{student.name}</h3>
                  <span className="text-gray-400 text-xs font-medium mb-5">
                    {student.batch}
                  </span>

                  {/* View Profile link */}
                  <a
                    href={getProfileUrl(student.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center text-white text-xs font-bold py-2.5 px-4 rounded-xl tracking-wide no-underline hover:opacity-85 transition-all duration-200"
                    style={{
                      background: `linear-gradient(135deg, ${c1}, ${c2})`,
                      boxShadow: `0 4px 12px ${c1}33`,
                    }}
                  >
                    View Profile →
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Modal ── */}
        {selectedStudent && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[1000] px-5"
            onClick={() => setSelectedStudent(null)}
          >
            <div
              className="bg-white border border-gray-200 rounded-3xl px-9 pt-12 pb-9 max-w-sm w-full text-center relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-gray-500 text-sm flex items-center justify-center hover:bg-gray-200 transition cursor-pointer border-none"
                onClick={() => setSelectedStudent(null)}
              >✕</button>

              {(() => {
                const [c1, c2] = getGradient(selectedStudent.id);
                return (
                  <>
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black text-white mx-auto mb-4 shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
                    >
                      {getInitials(selectedStudent.name)}
                    </div>

                    <h2 className="text-gray-800 text-2xl font-extrabold tracking-tight mb-1">
                      {selectedStudent.name}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      {selectedStudent.branch} · Batch {selectedStudent.batch}
                    </p>

                    <div className="h-px bg-gray-100 my-5" />

                    <p className="text-gray-300 text-[10px] font-semibold uppercase tracking-widest mb-3">Skills</p>
                    <div className="flex flex-wrap gap-1.5 justify-center mb-5">
                      {selectedStudent.skills.map((sk) => (
                        <span
                          key={sk}
                          className="text-xs font-semibold px-3 py-1 rounded-full border"
                          style={{ borderColor: `${c1}50`, color: c1, background: `${c1}0D` }}
                        >
                          {sk}
                        </span>
                      ))}
                    </div>

                    <div className="h-px bg-gray-100 my-5" />

                    <a
                      href={getProfileUrl(selectedStudent.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-white font-bold text-sm px-6 py-3 rounded-xl no-underline hover:opacity-85 transition-opacity duration-200"
                      style={{
                        background: `linear-gradient(135deg, ${c1}, ${c2})`,
                        boxShadow: `0 4px 16px ${c1}33`,
                      }}
                    >
                      🔗 Visit Profile
                    </a>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}