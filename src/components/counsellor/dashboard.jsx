"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CounsellorDashboard() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const [overview, setOverview] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${API}/counsellor/overview`,{
    headers : {
      Authorization: `Bearer ${token}`
    }
  })
  .then(r => setOverview(r.data));
});

  if (!overview) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
        <p className="text-gray-500 animate-pulse">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 px-2 py-12">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Counsellor Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Student counselling activity overview
          </p>
        </div>

        {/* ACTION BUTTON */}
        <button
          onClick={() => router.push("/counsellor/student")}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
        >
          View Students →
        </button>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="New Today"
          value={overview.newStudents}
          gradient="from-sky-400 to-blue-500"
        />

        <StatCard
          title="Follow Ups"
          value={overview.followUps}
          gradient="from-amber-400 to-orange-500"
        />

        <StatCard
          title="Ready for Admission"
          value={overview.ready}
          gradient="from-emerald-400 to-green-500"
        />

        <StatCard
          title="High Risk Students"
          value={overview.highRisk}
          gradient="from-rose-400 to-red-500"
        />

      </div>

      {/* INFO PANEL */}
      <div className="max-w-7xl mx-auto mt-14 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          🎯 Your Role as Counsellor
        </h2>
        <ul className="text-gray-600 space-y-2 text-sm">
          <li>• Review student interest & psychology</li>
          <li>• Provide course recommendation</li>
          <li>• Mark Follow-up or Ready for Admission</li>
          <li>• Highlight high-risk students for extra guidance</li>
        </ul>
      </div>

    </div>
  );
}

/* ---------------- STAT CARD ---------------- */
const StatCard = ({ title, value, gradient }) => (
  <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">

    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`} />

    <div className="relative p-8 text-white">
      <p className="text-sm opacity-90">{title}</p>
      <p className="text-5xl font-bold mt-2">{value}</p>
      <div className="mt-6 h-1 w-14 bg-white/40 rounded-full" />
    </div>

  </div>
);
