"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Report({ params }) {
  const { studentId, assessmentId } = params;
  const API = process.env.NEXT_PUBLIC_API_URL;

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${API}/report/${studentId}/${assessmentId}`)
      .then(r => setData(r.data));
  }, []);

  if (!data) return <p className="p-10">Loading report...</p>;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow rounded-xl mt-20">

      <h1 className="text-2xl font-bold mb-4">Career Guidance Report</h1>

      <p><b>Name:</b> {data.student.full_name}</p>
      <p><b>Stream:</b> {data.student.stream}</p>

      <hr className="my-4"/>

      <h3 className="font-semibold mb-2">Interest Scores</h3>
      {data.scores.map(s => (
        <p key={s._id}>
          {courseName(s.course_code)} : {s.normalized_score}%
        </p>
      ))}

      <hr className="my-4"/>

      <p><b>AI Suggested Course:</b> {courseName(data.topCourse)}</p>

      {data.finalCourse && (
        <p><b>Counsellor Final Course:</b> {courseName(data.finalCourse)}</p>
      )}

      <p className="mt-4"><b>Remarks:</b> {data.remarks || "-"}</p>

    </div>
  );
}

function courseName(code) {
  return {
    A: "AI & Machine Learning",
    R: "AI & Robotics",
    C: "Cyber Security",
    S: "Computer Science",
    G: "Graphic Design"
  }[code] || "-";
}
