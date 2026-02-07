"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminSidebar from "./sidebar";

export default function Students() {
  const API = process.env.NEXT_PUBLIC_API_URL;

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStream, setFilterStream] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterRisk, setFilterRisk] = useState("all");

  const router = useRouter();

 useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${API}/admin/students`, {
      headers : {
      Authorization: `Bearer ${token}`
    }
 })
      .then(res => {
        setStudents(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [API]);

  // Filter students based on search and stream
const filteredStudents = students.filter((s) => {

  const name = (s.full_name || "").toLowerCase();
  const mobile = (s.mobile || "").toString();

  const matchesSearch =
    name.includes(searchTerm.toLowerCase()) ||
    mobile.includes(searchTerm);

  const matchesStream =
    filterStream === "all" || (s.stream || "") === filterStream;

  const matchesStatus =
    filterStatus === "all" || (s.status || "") === filterStatus;

  const matchesRisk =
    filterRisk === "all" || (s.risk || "") === filterRisk;

  return matchesSearch && matchesStream && matchesStatus && matchesRisk;
});
const streams = [
  ...new Set(students.map((s) => s.stream).filter(Boolean))
];


  return (
    <>
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
          background: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
          background-size: 1000px 100%;
        }
      `}</style>

    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
<AdminSidebar />
          <div className="relative ml-72 flex-1 overflow-y-auto px-6 py-12 max-w-7xl">

          {/* Top Bar */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
          

              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                      Students
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">
                      {filteredStudents.length} student{filteredStudents.length !== 1 ? 's' : ''} found
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="appearance-none w-full sm:w-48 pl-4 pr-10 py-3.5 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="NEW">New</option>
                <option value="FOLLOW_UP">Follow Up</option>
                <option value="ADMITTED">Admitted</option>
                <option value="NOT_INTERESTED">Not Interested</option>
              </select>

              <select
                value={filterRisk}
                onChange={(e) => setFilterRisk(e.target.value)}
                className="appearance-none w-full sm:w-48 pl-4 pr-10 py-3.5 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm cursor-pointer"
              >
                <option value="all">All Risk</option>
                <option value="HIGH">🔴 High Risk</option>
                <option value="MEDIUM">🟡 Medium Risk</option>
                <option value="NONE">No Risk</option>
              </select>

              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by name or mobile..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                />
              </div>

              <div className="relative">
                <select
                  value={filterStream}
                  onChange={(e) => setFilterStream(e.target.value)}
                  className="appearance-none w-full sm:w-48 pl-4 pr-10 py-3.5 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm cursor-pointer"
                >
                  <option value="all">All Streams</option>
                  {streams.map(stream => (
                    <option key={stream} value={stream}>{stream}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Table Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-md shadow-md border border-white/20 overflow-hidden hover:shadow-md transition-all duration-300">

            {loading ? (
              <div className="p-8">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="h-12 bg-gray-200 rounded-lg animate-shimmer flex-1"></div>
                      <div className="h-12 bg-gray-200 rounded-lg animate-shimmer w-32"></div>
                      <div className="h-12 bg-gray-200 rounded-lg animate-shimmer w-24"></div>
                    </div>
                  ))}
                </div>
              </div>
            ) : filteredStudents.length === 0 ? (
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">No students found</p>
                <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filter</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-gray-100">
                      <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Mobile
                      </th>
                      <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Stream
                      </th>
                      <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Top Interest
                      </th>

                      <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase">
                        Risk
                      </th>
                      <th className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                        Action
                      </th>

                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {filteredStudents.map(s => (
                      <tr
                        key={s._id}
                        className="group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/30 transition-all duration-200"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                              {(s.full_name?.trim()?.charAt(0) || "?").toUpperCase()}

                            </div>
                            <div>
                              <p className="font-semibold text-gray-800 group-hover:text-blue-900 transition-colors">
                                {s.full_name || "Unnamed Student"}

                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-2 py-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="font-medium">{s.mobile}</span>
                          </div>
                        </td>

                        <td className="px-8 py-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
                            {s.stream}
                          </span>
                        </td>

                        <td className="px-8 py-6">
                          <CourseBadge code={s.topCourse} />
                        </td>
  <td className="px-8 py-6">
                            <span className="text-sm font-medium text-gray-700">
                              {s.status}
                            </span>
                          </td>
      
                          <td className="px-8 py-6">
                            {s.risk === "HIGH" && <span className="text-red-600 font-bold">🔴 High</span>}
                            {s.risk === "MEDIUM" && <span className="text-yellow-600 font-bold">🟡 Medium</span>}
                            {s.risk === "NONE" && <span className="text-gray-400">—</span>}
                          </td>

                        <td className="px-8 py-6 text-right">
                  
                          <Link
                            href={`/admin/student/${s._id}`}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 font-medium text-sm"
                          >
                            View Details
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>

          {/* Summary Stats */}
          {!loading && filteredStudents.length > 0 && (
            <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Showing <strong className="text-gray-800">{filteredStudents.length}</strong> of <strong className="text-gray-800">{students.length}</strong> students</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

/* ---------------- COURSE BADGE ---------------- */

const CourseBadge = ({ code }) => {
  const map = {
    A: {
      text: "AI & ML",
      gradient: "from-blue-500 to-cyan-500",
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    R: {
      text: "AI & Robotics",
      gradient: "from-purple-500 to-pink-500",
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      )
    },
    C: {
      text: "Cyber Security",
      gradient: "from-red-500 to-orange-500",
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    S: {
      text: "Computer Science",
      gradient: "from-green-500 to-emerald-500",
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    G: {
      text: "Graphic Design",
      gradient: "from-yellow-500 to-amber-500",
      icon: (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    }
  };

  const c = map[code] || {
    text: "Not Scored",
    gradient: "from-gray-400 to-gray-500",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    )
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r ${c.gradient} text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
      {c.icon}
      {c.text}
    </span>
  );
};