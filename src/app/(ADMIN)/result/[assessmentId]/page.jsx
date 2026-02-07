"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ResultPage({ params }) {
  const { assessmentId } = params;

  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const [scores, setScores] = useState([]);
  const [psychology, setPsychology] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const [psyRes, scoreRes] = await Promise.all([
          axios.get(`${API}/psychology/${assessmentId}`),
          axios.get(`${API}/scores/student-result/${assessmentId}`)
        ]);

        setPsychology(psyRes.data || null);
        setScores(scoreRes.data || []);
      } catch (err) {
        console.error("Result fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [API, assessmentId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-blue-700 font-medium animate-pulse">
          Loading your result...
        </div>
      </div>
    );
  }

  const top =
    scores.length > 0
      ? [...scores].sort((a, b) => b.normalized_score - a.normalized_score)[0]
      : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Your Career Match Report
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Based on your answers, here is your best fit
          </p>
        </div>

        {/* Top Match */}
        {top && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-5 mb-8 text-center shadow-lg">
            <p className="text-sm opacity-90">Best Matched Program</p>
            <h2 className="text-xl font-bold mt-1">
              {courseName(top.course_code)}
            </h2>
            <p className="mt-1 text-lg font-semibold">
              {top.normalized_score}% Match
            </p>
          </div>
        )}

        {!top && (
          <p className="text-center text-gray-500 mb-6">
            No score data available.
          </p>
        )}

        {/* All Scores */}
        <div className="space-y-4">
          {scores.map((s) => (
            <div key={s._id}>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span className="text-gray-700">
                  {courseName(s.course_code)}
                </span>
                <span className="text-gray-800">
                  {s.normalized_score}%
                </span>
              </div>

              <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
                  style={{ width: `${s.normalized_score}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Psychology Section */}
        {psychology && (
          <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm text-gray-700">
            <p><b>Thinking Style:</b> {psychology.thinking || "—"}</p>
            <p><b>Learning Style:</b> {psychology.learning || "—"}</p>
            <p><b>Work Preference:</b> {psychology.work || "—"}</p>
          </div>
        )}

        {/* Guidance Message */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700">
          <p>
            Your interests and thinking style strongly match the top program.
            Our counsellor will explain the course structure, career options,
            and admission process in detail.
          </p>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-xs text-gray-500 text-center">
          This report is for guidance purpose only. Final decision should be
          taken after counsellor discussion.
        </p>
      </div>
    </div>
  );
}

function courseName(code) {
  return (
    {
      A: "AI & Machine Learning",
      R: "AI & Robotics",
      C: "Cyber Security",
      S: "Computer Science",
      G: "Graphic Design & Multimedia"
    }[code] || "Unknown Course"
  );
}
