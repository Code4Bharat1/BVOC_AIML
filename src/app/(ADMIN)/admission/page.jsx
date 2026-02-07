"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function AdmissionPanel() {
  const [list, setList] = useState([]);
  const API = process.env.NEXT_PUBLIC_API_URL;

 useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(`${API}/admission/students`,{
      headers : {
      Authorization: `Bearer ${token}`
    }})
      .then(res => setList(res.data));
  }, [API]);

  return (
    <div className="p-6 bg-[#f6f8fb] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admission Executive Panel</h1>

      <div className="bg-white rounded-md shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 p-3 text-left">
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Course</th>
              <th>Fee Paid</th>
              <th>Confirmed</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {list.map(s => (
              <tr key={s.studentId} className="shadow-sm">
                <td className="p-3">{s.name}</td>
                <td>{s.mobile}</td>
                <td>{courseName(s.final_course)}</td>
                <td>{s.fee_paid ? "Yes" : "No"}</td>
                <td>{s.admission_confirmed ? "Yes" : "No"}</td>
                <td>
                  <Link
                    className="text-blue-600"
                    href={`/admission/${s.studentId}/${s.assessmentId}`}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function courseName(code) {
  return {
    A: "AI & ML",
    R: "AI & Robotics",
    C: "Cyber Security",
    S: "Computer Science",
    G: "Graphic Design"
  }[code];
}
