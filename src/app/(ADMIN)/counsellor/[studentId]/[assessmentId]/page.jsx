"use client";

import { use, useEffect, useState } from "react";
import {
  ArrowLeft,
  User,
  Award,
  AlertTriangle,
  Save,
  Target,
  Lock,
} from "lucide-react";
import axios from "axios";

export default function CounsellorStudent({ params }) {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const { studentId, assessmentId } = use(params);

  const [alerts, setAlerts] = useState([]);
  const [student, setStudent] = useState(null);
  const [scores, setScores] = useState([]);
  const [isAdmitted, setIsAdmitted] = useState(false);

  const [aiReport, setAiReport] = useState(null);
  const [generating, setGenerating] = useState(false);

  const [form, setForm] = useState({
    counsellor_name: "",
    remarks: "",
    parent_concerns: "",
    final_course: "",
    status: "FOLLOW_UP",
  });

  /* ================= FETCH DATA ================= */
const downloadPDF = () => {
  const token = localStorage.getItem("token");

  window.open(
    `${API}/ai/pdf/${assessmentId}`,
    "_blank"
  );
};

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
       const [alertsRes, studentRes, reportRes] = await Promise.all([
  axios.get(`${API}/alerts/${studentId}/${assessmentId}`, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  axios.get(`${API}/counsellor/student/${studentId}/${assessmentId}`, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  axios.get(`${API}/ai/${assessmentId}`, {
    headers: { Authorization: `Bearer ${token}` },
  }).catch(() => null), // 👈 if report not generated yet
]);

        setAlerts(alertsRes.data || []);
        if (reportRes?.data) {
  setAiReport(reportRes.data);
}


        setStudent(studentRes.data.student);
        setScores(studentRes.data.scores || []);

        if (studentRes.data.counselling) {
          setForm({
            counsellor_name: studentRes.data.counselling.counsellor_name || "",
            remarks: studentRes.data.counselling.remarks || "",
            parent_concerns:
              studentRes.data.counselling.parent_concerns || "",
            final_course:
              studentRes.data.counselling.final_course || "",
            status: studentRes.data.counselling.status || "FOLLOW_UP",
          });

          if (studentRes.data.counselling.status === "ADMITTED") {
            setIsAdmitted(true);
          }
        }
      } catch (e) {
        console.error("Student detail load error:", e);
        alert("Failed to load student data");
      }
    };

    fetchData();
  }, [API, studentId, assessmentId]);

  /* ================= SAVE ================= */

  const save = async () => {
    if (isAdmitted) return;
    
    if (!form.final_course) {
      alert("Please select final recommended course");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${API}/counsellor/save`,
        {
          student_id: studentId,
          assessment_id: assessmentId,
          ...form,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Saved successfully");
      window.location.href = "/counsellor/student";
    } catch (e) {
      console.error("Save failed:", e);
      alert("Save failed");
    }
  };

  /* ================= AI REPORT ================= */

  const generateAIReport = async () => {
    try {
      setGenerating(true);
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${API}/ai/generate/${assessmentId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setAiReport({ ai_summary: res.data.report });
    } catch (e) {
      console.error(e);
      alert("AI Report generation failed");
    } finally {
      setGenerating(false);
    }
  };

  /* ================= HELPERS ================= */

  const courseName = (code) =>
    ({
      A: "AI & ML",
      R: "AI & Robotics",
      C: "Cyber Security",
      S: "Computer Science",
      G: "Graphic Design",
    }[code] || "-");

  const getCourseColor = (code) =>
    ({
      A: "from-purple-500 to-purple-600",
      R: "from-blue-500 to-blue-600",
      C: "from-red-500 to-red-600",
      S: "from-emerald-500 to-emerald-600",
      G: "from-orange-500 to-orange-600",
    }[code] || "from-gray-400 to-gray-500");

  const maxScore =
    scores.length > 0
      ? scores.reduce((max, s) =>
          s.normalized_score > max.normalized_score ? s : max
        )
      : null;

  /* ================= LOADING ================= */

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-b-2 border-blue-600 rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading student details...</p>
        </div>
      </div>
    );
  }

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Back */}
        <button
          onClick={() => history.back()}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-all hover:-translate-x-1"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </button>

        {/* Student Card */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-xl ring-4 ring-white/60">
              <User className="w-10 h-10 text-white" />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                {student.full_name}
              </h1>

              <div className="text-sm text-gray-600 flex flex-wrap gap-4">
                <span>Student: {studentId.slice(-6)}</span>
                <span>Assessment: {assessmentId.slice(-6)}</span>
              </div>

              {maxScore && (
                <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg">
                  <Target className="w-4 h-4" />
                  Top Interest: {courseName(maxScore.course_code)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* LOCKED */}
        {isAdmitted && (
          <div className="mb-8 glass-card border border-green-200 bg-green-50/60 flex items-center gap-3 text-green-800 px-6 py-4">
            <Lock />
            Student is already admitted. Counselling record is locked.
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Scores + Alerts + AI */}
          <div className="space-y-6">

            {/* Scores */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <Award className="text-blue-600" />
                <h3 className="font-bold text-gray-800">
                  Assessment Scores
                </h3>
              </div>

              <div className="space-y-4">
                {scores.map((s) => (
                  <div key={s._id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">
                        {courseName(s.course_code)}
                      </span>
                      <span className="font-semibold text-gray-800">
                        {s.normalized_score}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getCourseColor(
                          s.course_code
                        )}`}
                        style={{ width: `${s.normalized_score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="glass-card p-6 border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="text-red-600" />
                  <h3 className="font-bold text-gray-800">
                    Risk Alerts
                  </h3>
                </div>

                <div className="space-y-3">
                  {alerts.map((a, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl text-sm ${
                        a.level === "HIGH"
                          ? "bg-red-100/70 text-red-700"
                          : "bg-yellow-100/70 text-yellow-800"
                      }`}
                    >
                      {a.message}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI REPORT */}
            <div className="glass-card p-6">
              <h3 className="font-bold text-gray-800 mb-3">
                🧠 AI Career Report
              </h3>

              {!aiReport && (
                <button
                  onClick={generateAIReport}
                  disabled={generating}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-[1.02] transition"
                >
                  {generating ? "Generating Report..." : "Generate AI Report"}
                </button>
              )}

              {aiReport && (
                <div className="mt-4 text-sm text-gray-700 whitespace-pre-line leading-relaxed max-h-[300px] overflow-y-auto pr-2">
                  {aiReport.ai_summary}
                </div>
              )}
              {aiReport && (
  <button
    onClick={downloadPDF}
    className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:scale-[1.02] transition"
  >
    📄 Download Counselling Report (PDF)
  </button>
)}

            </div>

          </div>

          {/* Counselling Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">

              <div className="space-y-6">

                <Input
                  label="Counsellor Name"
                  disabled={isAdmitted}
                  value={form.counsellor_name}
                  onChange={(v) =>
                    setForm({ ...form, counsellor_name: v })
                  }
                />

                <Textarea
                  label="Counsellor Remarks"
                  disabled={isAdmitted}
                  value={form.remarks}
                  onChange={(v) => setForm({ ...form, remarks: v })}
                />

                <Textarea
                  label="Parent Concerns"
                  disabled={isAdmitted}
                  value={form.parent_concerns}
                  onChange={(v) =>
                    setForm({ ...form, parent_concerns: v })
                  }
                />

                <Select
                  label="Final Recommended Course"
                  disabled={isAdmitted}
                  value={form.final_course}
                  onChange={(v) =>
                    setForm({ ...form, final_course: v })
                  }
                >
                  <option value="">Select</option>
                  <option value="A">AI & ML</option>
                  <option value="R">AI & Robotics</option>
                  <option value="C">Cyber Security</option>
                  <option value="S">Computer Science</option>
                  <option value="G">Graphic Design</option>
                </Select>

                <Select
                  label="Counselling Status"
                  disabled={isAdmitted}
                  value={form.status}
                  onChange={(v) => setForm({ ...form, status: v })}
                >
                  <option value="FOLLOW_UP">Follow Up</option>
                  <option value="READY_FOR_ADMISSION">
                    Ready For Admission
                  </option>
                  <option value="NOT_INTERESTED">
                    Not Interested
                  </option>
                </Select>

                {!isAdmitted && (
                  <button
                    onClick={save}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-[1.02] font-semibold text-lg mt-8 transition"
                  >
                    <Save className="w-5 h-5" />
                    Save Counselling Details
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Glass Effect */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(14px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 25px 40px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
}

/* ---------------- UI Helpers ---------------- */

const Input = ({ label, value, onChange, disabled }) => (
  <div>
    <label className="text-sm font-semibold text-gray-700 mb-1 block">
      {label}
    </label>
    <input
      disabled={disabled}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-xl bg-white/70 disabled:bg-gray-100 border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
    />
  </div>
);

const Textarea = ({ label, value, onChange, disabled }) => (
  <div>
    <label className="text-sm font-semibold text-gray-700 mb-1 block">
      {label}
    </label>
    <textarea
      disabled={disabled}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={4}
      className="w-full px-4 py-3 rounded-xl bg-white/70 disabled:bg-gray-100 border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
    />
  </div>
);

const Select = ({ label, value, onChange, disabled, children }) => (
  <div>
    <label className="text-sm font-semibold text-gray-700 mb-1 block">
      {label}
    </label>
    <select
      disabled={disabled}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-xl bg-white/70 disabled:bg-gray-100 border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
    >
      {children}
    </select>
  </div>
);
