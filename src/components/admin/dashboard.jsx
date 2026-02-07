"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AdminSidebar from "./sidebar";

export default function AdminDashboard() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${API}/admin/overview`, {
      headers : {
      Authorization: `Bearer ${token}`
    }
  })
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [API]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

<div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">

  <AdminSidebar />

  {/* Decorative blobs */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-10 animate-blob"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-400 rounded-full blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
  </div>

  {/* MAIN CONTENT */}
  <div className="relative ml-72 flex-1 overflow-auto px-6 py-12 max-w-7xl">

          {/* HEADER */}
          <div className="mb-10 border-b">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                      Admin Dashboard
                    </h1>
                  </div>
                </div>
                <p className="text-gray-600 ml-15">
                  Student counselling overview & analytics
                </p>
              </div>

              {/* <div className="flex flex-wrap gap-3">
                <NavBtn 
                  label="All Students" 
                  onClick={() => router.push("/admin/students")} 
                />
                <NavBtn 
                  label="Pending" 
                  onClick={() => router.push("/admin/pending")} 
                />
                <NavBtn 
                  label="Admissions" 
                  onClick={() => router.push("/admin/admissions")} 
                />
              </div> */}
            </div>
          </div>

          {/* STAT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            <StatCard
              title="Total Walk-ins"
              value={data.totalStudents}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              gradient="from-blue-500 via-blue-600 to-indigo-600"
            />

            <StatCard
              title="Today's Walk-ins"
              value={data.todayStudents}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
              gradient="from-green-500 via-emerald-600 to-teal-600"
            />

            <StatCard
              title="Admissions Confirmed"
              value={data.admissions}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              gradient="from-purple-500 via-fuchsia-600 to-pink-600"
            />

            <StatCard
              title="Pending Counselling"
              value={data.pending}
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              gradient="from-orange-500 via-amber-500 to-yellow-500"
            />

          </div>

          {/* ACTION PANEL */}
          <div className="bg-white/80 backdrop-blur-xl mb-7 rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Student Management
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              <ActionCard
                title="View Students"
                desc="Browse all walk-in students"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                }
                gradient="from-blue-500 to-indigo-600"
                onClick={() => router.push("/admin/student")}
              />

              <ActionCard
                title="Counselling Queue"
                desc="Students waiting for counselling"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                gradient="from-green-500 to-emerald-600"
                onClick={() => router.push("/counsellor")}
              />

              <ActionCard
                title="Admission Status"
                desc="Confirmed & pending admissions"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                }
                gradient="from-purple-500 to-fuchsia-600"
                onClick={() => router.push("/admin/admissions")}
              />

              <ActionCard
                title="Reports"
                desc="Download counselling reports"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                }
                gradient="from-orange-500 to-amber-500"
                onClick={() => router.push("/admin/reports")}
              />

            </div>
          </div>

          {/* COURSE DEMAND */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 mb-12 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Course Demand Analysis
              </h2>
            </div>

            <div className="space-y-5">
              {Object.entries(data.demand).map(([code, val]) => (
                <DemandBar key={code} label={courseName(code)} value={val} />
              ))}
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

/* ---------------- COMPONENTS ---------------- */

// const NavBtn = ({ label, onClick }) => (
//   <button
//     onClick={onClick}
//     className="group px-5 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 text-sm text-gray-700 hover:bg-white hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 font-medium"
//   >
//     {label}
//   </button>
// );

const StatCard = ({ title, value, icon, gradient }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
    
    {/* Animated shine effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
    </div>
    
    <div className="relative p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium opacity-90">{title}</p>
        <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          {icon}
        </div>
      </div>
      <p className="text-5xl font-bold mb-3">{value}</p>
      <div className="h-1 w-16 bg-white/30 rounded-full group-hover:w-24 transition-all duration-500" />
    </div>
  </div>
);

const DemandBar = ({ label, value }) => (
  <div className="group">
    <div className="flex justify-between text-sm mb-2">
      <span className="text-gray-700 font-semibold">{label}</span>
      <span className="text-gray-500 font-medium">{value}%</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden shadow-inner">
      <div
        className="h-4 rounded-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 transition-all duration-700 ease-out relative overflow-hidden group-hover:shadow-lg"
        style={{ width: `${value}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </div>
  </div>
);

const ActionCard = ({ title, desc, icon, gradient, onClick }) => (
  <button
    onClick={onClick}
    className="group relative text-left bg-white/60 backdrop-blur-sm hover:bg-white border border-gray-200/50 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-full transform translate-x-16 -translate-y-16 transition-all duration-500 blur-2xl`} />
    
    <div className="relative">
      <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      <p className="font-bold text-gray-800 text-lg mb-2 group-hover:text-gray-900 transition-colors">
        {title}
      </p>
      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
        {desc}
      </p>
    </div>
    
    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-500 rounded-full" />
  </button>
);

function courseName(code) {
  return {
    A: "AI & ML",
    R: "AI & Robotics",
    C: "Cyber Security",
    S: "Computer Science",
    G: "Graphic Design"
  }[code];
}