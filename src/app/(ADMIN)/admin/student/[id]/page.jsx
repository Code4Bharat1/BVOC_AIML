"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Phone,
  GraduationCap,
  MapPin,
  Percent,
  Trophy,
  BarChart3,
  Layers,
} from "lucide-react";
import AdminSidebar from "@/components/admin/sidebar";

export default function StudentDetail({ params }) {
  const { id } = params;
  const router = useRouter();

  const [data, setData] = useState(null);
  const API = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
     const token = localStorage.getItem("token");
    if (!id) return;
    axios
      .get(`${API}/admin/student/${id}`,{
         headers : {
      Authorization: `Bearer ${token}`
    }
      })
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [API, id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-indigo-50 to-white">
        <div className="text-center text-gray-700">
          <div className="w-14 h-14 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          Loading student profile...
        </div>
      </div>
    );
  }

  const { student, scores = [] } = data;

  const topScore =
    scores.length > 0
      ? scores.reduce((max, s) =>
          s.normalized_score > max.normalized_score ? s : max,
          scores[0]
        )
      : null;

  return (
<div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
<AdminSidebar />
      {/* soft blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-24 right-10 w-96 h-96 bg-indigo-300/30 blur-[120px]" />
        <div className="absolute bottom-24 left-10 w-96 h-96 bg-sky-300/30 blur-[120px]" />
      </div>

  <div className="relative ml-72 flex-1 overflow-y-auto px-6 py-12 max-w-7xl">

        {/* Header */}
        <div className="flex items-center gap-5 mb-10">
          <button
            onClick={() => router.back()}
            className="p-3 rounded-xl bg-white/60 backdrop-blur hover:bg-white transition shadow"
          >
            <ArrowLeft className="text-gray-700" />
          </button>

          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {student.full_name}
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Student Career Assessment Profile
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">

          {/* Profile Card */}
          <div className="lg:col-span-2 bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl">

            <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-3xl font-bold text-white shadow">
                {student.full_name.charAt(0).toUpperCase()}
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {student.full_name}
                </h2>
                <p className="text-gray-500 text-sm">
                  Student ID • {id.slice(-8)}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Info icon={<Phone size={18} />} label="Mobile" value={student.mobile} />
              <Info icon={<GraduationCap size={18} />} label="Stream" value={student.stream} />
              <Info icon={<MapPin size={18} />} label="City" value={student.city || "Not Specified"} />
              <Info icon={<Percent size={18} />} label="12th %" value={student.percentage_range || "Not Provided"} />
            </div>
          </div>

          {/* Top Interest */}
          <div className="bg-gradient-to-br from-indigo-600 to-sky-500 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

            <div className="relative z-10">
              <p className="uppercase text-xs tracking-widest opacity-80 mb-4">
                Top Interest
              </p>

              {topScore ? (
                <>
                  <h3 className="text-3xl font-bold mb-3">
                    {courseName(topScore.course_code)}
                  </h3>

                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-6xl font-bold">
                      {topScore.normalized_score}
                    </span>
                    <span className="text-2xl mb-1">%</span>
                  </div>

                  <div className="bg-white/20 rounded-xl p-4 text-sm">
                    Highest affinity based on assessment results.
                  </div>
                </>
              ) : (
                <div className="bg-white/20 rounded-xl p-6 text-center">
                  <p className="font-semibold text-lg">Assessment Pending</p>
                  <p className="text-sm opacity-80 mt-2">
                    No career data available yet
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Interest Breakdown */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-xl">

          <div className="flex items-center gap-3 mb-8 text-gray-800">
            <BarChart3 />
            <h3 className="text-2xl font-semibold">
              Career Interest Breakdown
            </h3>
          </div>

          {scores.length > 0 ? (
            <div className="space-y-8">
              {scores
                .sort((a, b) => b.normalized_score - a.normalized_score)
                .map((s, index) => (
                  <ScoreBar
                    key={s._id}
                    course={courseName(s.course_code)}
                    score={s.normalized_score}
                    rank={index + 1}
                    isTop={index === 0}
                  />
                ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-16">
              No assessment data available.
            </p>
          )}

          {scores.length > 0 && (
            <div className="grid grid-cols-3 gap-6 mt-12">
              <StatBox icon={<Trophy />} label="Highest" value={`${Math.max(...scores.map(s => s.normalized_score))}%`} />
              <StatBox icon={<BarChart3 />} label="Average" value={`${Math.round(scores.reduce((a, b) => a + b.normalized_score, 0) / scores.length)}%`} />
              <StatBox icon={<Layers />} label="Courses" value={scores.length} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

const Info = ({ icon, label, value }) => (
  <div className="bg-white/50 rounded-2xl p-5 shadow hover:shadow-md transition">
    <div className="flex items-center gap-2 text-gray-500 mb-2">
      {icon}
      <span className="text-xs uppercase tracking-widest">{label}</span>
    </div>
    <p className="text-lg font-semibold text-gray-800">{value}</p>
  </div>
);

const ScoreBar = ({ course, score, rank, isTop }) => (
  <div>
    <div className="flex justify-between mb-2 text-gray-700">
      <span className="font-medium">
        {rank}. {course}
      </span>
      <span>{score}%</span>
    </div>

    <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
      <div
        className={`h-full rounded-full ${
          isTop
            ? "bg-gradient-to-r from-yellow-400 to-orange-500"
            : "bg-gradient-to-r from-sky-400 to-indigo-500"
        }`}
        style={{ width: `${score}%` }}
      />
    </div>
  </div>
);

const StatBox = ({ icon, label, value }) => (
  <div className="bg-white/50 rounded-2xl p-6 shadow hover:shadow-md transition">
    <div className="flex items-center gap-2 text-gray-500 mb-2">
      {icon}
      <span className="text-xs uppercase tracking-widest">{label}</span>
    </div>
    <p className="text-3xl font-bold text-gray-800">{value}</p>
  </div>
);

function courseName(code) {
  return {
    A: "AI & Machine Learning",
    R: "AI & Robotics",
    C: "Cyber Security",
    S: "Computer Science",
    G: "Graphic Design & Multimedia",
  }[code] || "Unknown";
}
