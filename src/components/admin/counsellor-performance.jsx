"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, Award, UserCheck, UserX, Target } from "lucide-react";
import AdminSidebar from "./sidebar";

export default function CounsellorPerformance() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const axios = (await import('axios')).default;
        const response = await axios.get(`${API}/admin/counsellor-performance`, { 
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [API]);

  // Calculate totals
  const totals = data.reduce((acc, c) => ({
    students: acc.students + c.handled,
    admitted: acc.admitted + c.admitted,
    followUp: acc.followUp + c.followUp,
    notInterested: acc.notInterested + c.notInterested,
  }), { students: 0, admitted: 0, followUp: 0, notInterested: 0 });

  const avgConversion = data.length > 0 
    ? (data.reduce((sum, c) => sum + c.conversionRate, 0) / data.length).toFixed(1)
    : 0;

  // Prepare chart data
  const barChartData = data.map(c => ({
    name: c.counsellor.split(' ')[0],
    Admitted: c.admitted,
    "Follow-up": c.followUp,
    "Not Interested": c.notInterested,
  }));

  const pieChartData = [
    { name: "Admitted", value: totals.admitted, color: "#10b981" },
    { name: "Follow-up", value: totals.followUp, color: "#6366f1" },
    { name: "Not Interested", value: totals.notInterested, color: "#ef4444" },
  ];

  const conversionChartData = data.map(c => ({
    name: c.counsellor.split(' ')[0],
    conversion: c.conversionRate,
    aiMatch: c.aiMatchRate,
  }));

  return (
   <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
  <AdminSidebar />
            <div className="relative ml-72 flex-1 overflow-y-auto px-6 py-12 max-w-7xl">
  
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Counsellor Performance Analytics
          </h1>
          <p className="text-slate-600">Track and analyze counsellor effectiveness and student outcomes</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          <StatCard
            icon={<Users className="w-6 h-6" />}
            label="Total Students"
            value={totals.students}
            color="indigo"
          />
          
          <StatCard
            icon={<Award className="w-6 h-6" />}
            label="Admitted"
            value={totals.admitted}
            color="emerald"
          />
          
          <StatCard
            icon={<UserCheck className="w-6 h-6" />}
            label="Follow-ups"
            value={totals.followUp}
            color="blue"
          />
          
          <StatCard
            icon={<Target className="w-6 h-6" />}
            label="Avg Conversion"
            value={`${avgConversion}%`}
            color="violet"
          />
          
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* Status Distribution Pie Chart */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
              </div>
              Student Status Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Students by Counsellor Bar Chart */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              Students by Counsellor
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" tick={{ fill: '#64748b' }} />
                <YAxis tick={{ fill: '#64748b' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Legend />
                <Bar dataKey="Admitted" fill="#10b981" radius={[8, 8, 0, 0]} />
                <Bar dataKey="Follow-up" fill="#6366f1" radius={[8, 8, 0, 0]} />
                <Bar dataKey="Not Interested" fill="#ef4444" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* Conversion & AI Match Rates */}
        <div className="glass-card p-6 mb-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
              <Target className="w-5 h-5 text-violet-600" />
            </div>
            Conversion & AI Match Rates by Counsellor
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fill: '#64748b' }} />
              <YAxis tick={{ fill: '#64748b' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Legend />
              <Bar dataKey="conversion" name="Conversion Rate %" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="aiMatch" name="AI Match %" fill="#06b6d4" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Individual Counsellor Cards */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Individual Performance</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((c, i) => (
            <div key={i} className="glass-card p-6 hover:shadow-lg transition-all">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-indigo-700">
                    {c.counsellor.charAt(0)}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {c.counsellor}
                  </h2>
                  <p className="text-sm text-slate-600">{c.handled} students handled</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <MetricBox label="Admitted" value={c.admitted} color="emerald" />
                <MetricBox label="Follow-up" value={c.followUp} color="blue" />
                <MetricBox label="Drop-outs" value={c.notInterested} color="rose" />
                <MetricBox label="Total" value={c.handled} color="slate" />
              </div>

              <div className="space-y-3">
                <ProgressBar
                  label="Conversion Rate"
                  value={c.conversionRate}
                  color="bg-emerald-500"
                />
                <ProgressBar
                  label="AI Match Rate"
                  value={c.aiMatchRate}
                  color="bg-indigo-500"
                />
              </div>

            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 
                      0 2px 4px -1px rgba(0, 0, 0, 0.03);
        }
      `}</style>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

const StatCard = ({ icon, label, value, color }) => {
  const colorClasses = {
    indigo: "bg-indigo-50 text-indigo-600",
    emerald: "bg-emerald-50 text-emerald-600",
    blue: "bg-blue-50 text-blue-600",
    violet: "bg-violet-50 text-violet-600",
  };

  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl ${colorClasses[color]} flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-slate-600 mb-1">{label}</p>
          <p className="text-2xl font-bold text-slate-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

const MetricBox = ({ label, value, color }) => {
  const colorClasses = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
    blue: "bg-blue-50 border-blue-200 text-blue-700",
    rose: "bg-rose-50 border-rose-200 text-rose-700",
    slate: "bg-slate-50 border-slate-200 text-slate-700",
  };

  return (
    <div className={`${colorClasses[color]} border rounded-xl p-3 text-center`}>
      <p className="text-xs font-medium opacity-80 mb-1">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

const ProgressBar = ({ label, value, color }) => (
  <div>
    <div className="flex justify-between text-sm mb-2">
      <span className="text-slate-700 font-medium">{label}</span>
      <span className="font-bold text-slate-900">{value}%</span>
    </div>
    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
      <div
        className={`h-full ${color} transition-all duration-500`}
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);