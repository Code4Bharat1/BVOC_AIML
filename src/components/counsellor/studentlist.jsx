"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import {
  User, Phone, BookOpen, Download, Search, Filter,
  ChevronLeft, ChevronRight, ArrowLeft
} from "lucide-react";

export default function CounsellorPage() {
  const API = process.env.NEXT_PUBLIC_API_URL;

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCourse, setFilterCourse] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  /* ================= LOAD WITH CACHE ================= */

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 1. Load instantly from cache
    const cached = sessionStorage.getItem("counsellor_students");
    if (cached) {
      setStudents(JSON.parse(cached));
      setLoading(false);
    }

    // 2. Refresh in background
    axios
      .get(`${API}/counsellor/students`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setStudents(res.data || []);
        sessionStorage.setItem(
          "counsellor_students",
          JSON.stringify(res.data || [])
        );
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [API]);

  /* ================= HELPERS ================= */

  const courseName = (code) =>
    ({ A: "AI", R: "Robotics", C: "Cyber", S: "CS", G: "Design", "-": "-" }[code] || "-");

  const getCourseColor = (code) =>
    ({
      A: "bg-purple-50 text-purple-700 border-purple-200",
      R: "bg-blue-50 text-blue-700 border-blue-200",
      C: "bg-red-50 text-red-700 border-red-200",
      S: "bg-emerald-50 text-emerald-700 border-emerald-200",
      G: "bg-orange-50 text-orange-700 border-orange-200",
    }[code] || "bg-gray-50 text-gray-600 border-gray-200");

  const getStatusColor = (status) =>
    ({
      NEW: "bg-blue-600 text-white",
      FOLLOW_UP: "bg-amber-500 text-white",
      READY_FOR_ADMISSION: "bg-purple-600 text-white",
      ADMITTED: "bg-emerald-600 text-white",
      NOT_INTERESTED: "bg-gray-500 text-white",
    }[status] || "bg-gray-500 text-white");

  const statusLabel = (s) =>
    ({
      NEW: "New",
      FOLLOW_UP: "Follow Up",
      READY_FOR_ADMISSION: "Ready for Admission",
      ADMITTED: "Admitted",
      NOT_INTERESTED: "Not Interested",
    }[s] || s);

  /* ================= FILTER ================= */

  const filteredStudents = students.filter((s) => {
    const name = (s.name || "").toLowerCase();
    const mobile = (s.mobile || "").toString();

    const matchesSearch =
      name.includes(searchTerm.toLowerCase()) || mobile.includes(searchTerm);

    const matchesStatus =
      filterStatus === "all" || s.status === filterStatus;

    const matchesCourse =
      filterCourse === "all" || s.topCourse === filterCourse;

    return matchesSearch && matchesStatus && matchesCourse;
  });

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStudents = filteredStudents.slice(startIndex, endIndex);

  useEffect(() => setCurrentPage(1), [searchTerm, filterStatus, filterCourse]);

  /* ================= CSV ================= */

  const exportToCSV = () => {
    const headers = ["Name", "Mobile", "Top Course", "Status"];
    const csvData = filteredStudents.map((s) => [
      s.name,
      s.mobile,
      courseName(s.topCourse),
      statusLabel(s.status),
    ]);

    const csvContent = [
      headers.join(","),
      ...csvData.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `students-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => history.back()}
            className="flex items-center text-blue-600 mb-4 hover:-translate-x-1 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-1">
                Counsellor Dashboard
              </h1>
              <p className="text-gray-600">
                Manage and track student assessments
              </p>
            </div>

            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              <Download className="w-5 h-5" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="glass-card p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                placeholder="Search by name or mobile..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200"
            >
              <option value="all">All Status</option>
              <option value="NEW">New</option>
              <option value="FOLLOW_UP">Follow Up</option>
              <option value="READY_FOR_ADMISSION">Ready for Admission</option>
              <option value="ADMITTED">Admitted</option>
              <option value="NOT_INTERESTED">Not Interested</option>
            </select>

            <select
              value={filterCourse}
              onChange={(e) => setFilterCourse(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200"
            >
              <option value="all">All Courses</option>
              <option value="A">AI</option>
              <option value="R">Robotics</option>
              <option value="C">Cyber</option>
              <option value="S">CS</option>
              <option value="G">Design</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="glass-card overflow-hidden">
          {loading ? (
            <div className="p-10 text-center text-gray-500">Loading...</div>
          ) : (
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="p-4 text-left text-sm font-semibold">Name</th>
                  <th className="p-4">Mobile</th>
                  <th className="p-4">Course</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {currentStudents.map((s) => (
                  <tr key={s._id} className=" shadow-sm hover:bg-blue-50 transition">
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-semibold">{s.name}</span>
                    </td>

                    <td className="p-4 text-sm text-gray-600">
                      <Phone className="inline w-4 h-4 mr-1" />
                      {s.mobile}
                    </td>

                    <td className="p-4">
                      <span className={`px-3 py-1 text-xs rounded-lg border ${getCourseColor(s.topCourse)}`}>
                        {courseName(s.topCourse)}
                      </span>
                    </td>

                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold ${getStatusColor(s.status)}`}>
                        {statusLabel(s.status)}
                      </span>
                    </td>

                    <td className="p-4">
                      {s.assessment_id && (
                        <Link
                          href={`/counsellor/${s._id}/${s.assessment_id}`}
                          className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-semibold hover:opacity-90 transition"
                        >
                          View
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredStudents.length)} of{" "}
              {filteredStudents.length}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border rounded disabled:opacity-40"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border rounded disabled:opacity-40"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Glass Effect */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(14px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 20px 35px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
}
