"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "./sidebar";

export default function AdminUsers() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    role: "COUNSELLOR"
  });
 
  
  const load = () => {
    const token = localStorage.getItem("token");
    axios.get(`${API}/auth/list`, {
      headers : {
      Authorization: `Bearer ${token}`
    }
  }).
    then(r => setUsers(r.data));
  };

  useEffect(load, []);

  const create = async () => {
    
    if (!form.full_name || !form.email || !form.password) {
      alert("All fields required");
      return;
    }
     const token = localStorage.getItem("token");
    await axios.post(`${API}/auth/create`,form,{ 
      headers : {
      Authorization: `Bearer ${token}`
    }});

    setForm({ full_name: "", email: "", password: "", role: "COUNSELLOR" });
    setShowForm(false);
    load();
  };

  const toggle = async id => {
   try {
    const token = localStorage.getItem("token");
    await axios.patch(`${API}/auth/toggle/${id}`,{},{
      headers : {
      Authorization: `Bearer ${token}`
    }});
    load();
    } catch (err) {
    console.error("Toggle error:", err.response?.data || err.message);
    alert("Failed to update user status");
  };}

  return (
 
     <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
 <AdminSidebar />
           <div className="relative ml-72 flex-1 overflow-y-auto px-6 py-12 max-w-7xl">
 

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              User Management
            </h1>
            <p className="text-gray-600 mt-1">
              Manage counsellor and admission staff accounts
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            ➕ Add New User
          </button>
        </div>

        {/* USER TABLE */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">

          <table className="w-full text-sm">
            <thead className="bg-gray-100/80">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th className="text-right pr-6">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {users.map(u => (
                <tr
                  key={u._id}
                  className="hover:bg-blue-50/40 transition"
                >
                  <td className="p-4 font-semibold text-gray-800">
                    {u.full_name}
                  </td>

                  <td className="text-gray-600">{u.email}</td>

                  <td>
                    <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-100 text-indigo-700">
                      {u.role}
                    </span>
                  </td>

                  <td>
                    {u.is_active ? (
                      <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-green-100 text-green-700">
                        Active
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-red-100 text-red-700">
                        Disabled
                      </span>
                    )}
                  </td>

                  <td className="text-right pr-6">
                    <button
                      onClick={() => toggle(u._id)}
                      className={`px-4 py-2 rounded-lg text-white text-xs font-semibold transition ${
                        u.is_active
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-green-500 hover:bg-green-600"
                      }`}
                    >
                      {u.is_active ? "Disable" : "Enable"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {users.length === 0 && (
            <div className="p-10 text-center text-gray-500">
              No users found
            </div>
          )}
        </div>
      </div>

      {/* ================= MODAL FORM ================= */}

      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 animate-fade-in">

            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Add New User
            </h2>

            <div className="space-y-3">

              <input
                placeholder="Full Name"
                className="input"
                value={form.full_name}
                onChange={e => setForm({ ...form, full_name: e.target.value })}
              />

              <input
                placeholder="Email"
                className="input"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />

              <input
                placeholder="Password"
                type="password"
                className="input"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
              />

              <select
                className="input"
                value={form.role}
                onChange={e => setForm({ ...form, role: e.target.value })}
              >
                <option value="COUNSELLOR">Counsellor</option>
                <option value="ADMISSION">Admission</option>
                <option value="SUPER_ADMIN">Super Admin</option>
              </select>

            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowForm(false)}
                className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={create}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow hover:shadow-lg"
              >
                Create User
              </button>
            </div>

          </div>
        </div>
      )}

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 10px;
          outline: none;
        }
        .input:focus {
          border-color: #6366f1;
        }
      `}</style>

    </div>
  );
}
