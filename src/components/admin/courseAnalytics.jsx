"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "@/components/admin/sidebar";

/* ===================================================== */

export default function CourseAnalytics() {
  const API = process.env.NEXT_PUBLIC_API_URL;

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${API}/admin/students`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setStudents(res.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [API]);

  /* ================== DATA MAPS ================== */

  const courses = {
    A: "AI & ML",
    R: "AI & Robotics",
    C: "Cyber Security",
    S: "Computer Science",
    G: "Graphic Design",
    NA: "Not Scored",
  };

  const barColors = {
    A: "bg-blue-500",
    R: "bg-purple-500",
    C: "bg-red-500",
    S: "bg-green-500",
    G: "bg-yellow-500",
    NA: "bg-gray-400",
  };

  /* ================== COURSE COUNTS ================== */

  const totalStudents = students.length || 1;

  const courseCounts = students.reduce((acc, s) => {
    const code = s.topCourse || "NA";
    acc[code] = (acc[code] || 0) + 1;
    return acc;
  }, {});

  /* ================== RISK MATRIX ================== */

  const riskByCourse = {};

  students.forEach((s) => {
    const c = s.topCourse || "NA";
    const r = s.risk || "NONE";

    if (!riskByCourse[c]) riskByCourse[c] = { HIGH: 0, MEDIUM: 0, NONE: 0 };
    riskByCourse[c][r]++;
  });

  /* ================== ADMISSION ANALYTICS ================== */

  const admissionCounts = students.reduce(
    (acc, s) => {
      if (s.status === "ADMITTED") acc.admitted++;
      else acc.notAdmitted++;
      return acc;
    },
    { admitted: 0, notAdmitted: 0 }
  );

  const admissionByCourse = {};

  students.forEach((s) => {
    const c = s.topCourse || "NA";
    if (!admissionByCourse[c]) admissionByCourse[c] = { admitted: 0, total: 0 };

    admissionByCourse[c].total++;
    if (s.status === "ADMITTED") admissionByCourse[c].admitted++;
  });

  /* ================== TOP COURSE ================== */

  const topCourseEntry = Object.entries(courseCounts).sort((a, b) => b[1] - a[1])[0];
  const topCourse = topCourseEntry ? courses[topCourseEntry[0]] : "-";

  /* ================== UI ================== */

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <AdminSidebar />

      <div className="ml-72 flex-1 px-10 py-12 max-w-7xl">

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Course Analytics Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Demand, risk distribution and admission success overview
          </p>
        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <StatCard title="Total Students" value={students.length} />
          <StatCard title="Courses Offered" value={5} />
          <StatCard title="Highest Demand Course" value={topCourse} />
        </div>

        {/* ================= BAR CHART ================= */}
        <GlassCard title="Course Demand (Bar Chart)">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="h-72 flex items-end justify-between gap-8 px-6">

              {Object.keys(courses).map((code) => {
                const count = courseCounts[code] || 0;
                const percent = Math.round((count / totalStudents) * 100);

                return (
                  <div key={code} className="flex flex-col items-center w-full">

                    <div className="h-full flex items-end">
                      <div
                        className={`w-12 rounded-t-xl ${barColors[code]} transition-all duration-700`}
                        style={{ height: `${percent * 2}px` }}
                      />
                    </div>

                    <p className="mt-3 text-sm font-semibold text-center">
                      {courses[code]}
                    </p>
                    <p className="text-xs text-gray-500">{count} students</p>
                  </div>
                );
              })}
            </div>
          )}
        </GlassCard>

        {/* ================= RISK ANALYTICS ================= */}
        <GlassCard title="Risk Distribution by Course">

          <div className="space-y-6">
            {Object.keys(courses).map((code) => {
              const stats = riskByCourse[code] || { HIGH: 0, MEDIUM: 0, NONE: 0 };
              const sum = stats.HIGH + stats.MEDIUM + stats.NONE || 1;

              return (
                <div key={code}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold">{courses[code]}</span>
                    <span className="text-gray-500">
                      H:{stats.HIGH} | M:{stats.MEDIUM} | N:{stats.NONE}
                    </span>
                  </div>

                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden flex">
                    <div
                      className="bg-red-500 transition-all duration-700"
                      style={{ width: `${(stats.HIGH / sum) * 100}%` }}
                    />
                    <div
                      className="bg-yellow-400 transition-all duration-700"
                      style={{ width: `${(stats.MEDIUM / sum) * 100}%` }}
                    />
                    <div
                      className="bg-green-500 transition-all duration-700"
                      style={{ width: `${(stats.NONE / sum) * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-8 mt-8 text-sm">
            <Legend color="bg-red-500" label="High Risk" />
            <Legend color="bg-yellow-400" label="Medium Risk" />
            <Legend color="bg-green-500" label="No Risk" />
          </div>
        </GlassCard>

        {/* ================= ADMISSION ANALYTICS ================= */}
        <GlassCard title="Admission Analytics">

          {/* OVERALL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <MiniStat title="Admitted Students" value={admissionCounts.admitted} color="text-emerald-600" />
            <MiniStat title="Not Admitted" value={admissionCounts.notAdmitted} color="text-red-500" />
          </div>

          {/* COURSE-WISE */}
          <div className="space-y-6">
            {Object.keys(courses).map((code) => {
              const stat = admissionByCourse[code];
              if (!stat) return null;

              const percent =
                stat.total > 0 ? Math.round((stat.admitted / stat.total) * 100) : 0;

              return (
                <div key={code}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-semibold">{courses[code]}</span>
                    <span className="text-gray-500">
                      {stat.admitted}/{stat.total} admitted · {percent}%
                    </span>
                  </div>

                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-green-600 transition-all duration-700"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </GlassCard>

      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const GlassCard = ({ title, children }) => (
  <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-10 mb-14">
    <h2 className="text-2xl font-bold mb-8">{title}</h2>
    {children}
  </div>
);

const StatCard = ({ title, value }) => (
  <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-xl">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
  </div>
);

const MiniStat = ({ title, value, color }) => (
  <div className="bg-white/60 rounded-2xl p-6 shadow">
    <p className="text-sm text-gray-500 mb-1">{title}</p>
    <p className={`text-4xl font-bold ${color}`}>{value}</p>
  </div>
);

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded-full ${color}`} />
    <span>{label}</span>
  </div>
);
