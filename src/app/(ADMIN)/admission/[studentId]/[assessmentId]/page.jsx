"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  CalendarClock,
  MessageSquareText,
  Save,
  Lock,
} from "lucide-react";

export default function AdmissionDetail({ params }) {
  const { studentId, assessmentId } = params;
  const API = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const [form, setForm] = useState({
    fee_paid: false,
    admission_confirmed: false,
    follow_up_date: "",
    remarks: "",
    status: "", // ✅ we will store counselling status
  });
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${API}/admission/${studentId}/${assessmentId}`,{
        headers : {
         Authorization: `Bearer ${token}`
    }
      })
      .then((res) => {
        if (res.data) setForm(res.data); // must include status from backend
      })
      .catch(console.error);
  }, [API, studentId, assessmentId]);

  const isAdmitted = form.status === "ADMITTED";

  const save = async () => {
    try {
      setLoading(true);
      await axios.post(`${API}/admission/save`,{ 
      headers : {
      Authorization: `Bearer ${token}`
    }}, {
        student_id: studentId,
        assessment_id: assessmentId,
        ...form,
      });

      alert("Admission updated successfully");
      router.push("/admission");
    } catch (e) {
      alert(
        e?.response?.data?.error ||
          "Student already admitted. Updates are not allowed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-white">

      {/* soft background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-300/30 blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-300/30 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-14">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <button
            onClick={() => router.back()}
            className="p-3 rounded-xl bg-white/70 backdrop-blur hover:bg-white shadow transition"
          >
            <ArrowLeft className="text-gray-700" />
          </button>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Admission Verification
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Final confirmation before student admission
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-10 space-y-8">

          {/* LOCKED BANNER */}
          {isAdmitted && (
            <div className="flex items-center gap-3 bg-green-100 text-green-800 px-5 py-4 rounded-xl">
              <Lock size={18} />
              <span className="font-semibold">
                Student is already admitted. This record is locked.
              </span>
            </div>
          )}

          {/* Status Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Admission Status
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <StatusToggle
                disabled={isAdmitted}
                icon={<CreditCard />}
                title="Fee Paid"
                checked={form.fee_paid}
                onChange={(v) => setForm({ ...form, fee_paid: v })}
              />

              <StatusToggle
                disabled={isAdmitted}
                icon={<CheckCircle2 />}
                title="Admission Confirmed"
                checked={form.admission_confirmed}
                onChange={(v) =>
                  setForm({ ...form, admission_confirmed: v })
                }
              />
            </div>
          </div>

          {/* Follow Up */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Follow-up Schedule
            </h2>

            <div className="relative">
              <CalendarClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                disabled={isAdmitted}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed focus:bg-white outline-none focus:ring-2 ring-indigo-400 transition"
                value={form.follow_up_date || ""}
                onChange={(e) =>
                  setForm({ ...form, follow_up_date: e.target.value })
                }
              />
            </div>
          </div>

          {/* Remarks */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Counsellor / Admission Remarks
            </h2>

            <div className="relative">
              <MessageSquareText className="absolute left-4 top-4 text-gray-400" />
              <textarea
                rows={4}
                disabled={isAdmitted}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed focus:bg-white outline-none focus:ring-2 ring-indigo-400 transition resize-none"
                placeholder="Enter important remarks or notes about the student..."
                value={form.remarks || ""}
                onChange={(e) =>
                  setForm({ ...form, remarks: e.target.value })
                }
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-4 flex justify-end">
            {!isAdmitted ? (
              <button
                onClick={save}
                disabled={loading}
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-sky-500 text-white px-8 py-3 rounded-xl shadow hover:opacity-90 transition disabled:opacity-50"
              >
                <Save size={18} />
                {loading ? "Saving..." : "Save Admission"}
              </button>
            ) : (
              <div className="text-green-700 font-semibold flex items-center gap-2">
                <CheckCircle2 />
                Admission Completed
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

const StatusToggle = ({ icon, title, checked, onChange, disabled }) => (
  <div
    onClick={() => !disabled && onChange(!checked)}
    className={`rounded-2xl p-6 flex items-center justify-between transition shadow
      ${
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : checked
          ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white cursor-pointer"
          : "bg-gray-50 hover:bg-gray-100 text-gray-700 cursor-pointer"
      }`}
  >
    <div className="flex items-center gap-3">
      {icon}
      <span className="font-medium">{title}</span>
    </div>

    <div
      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
        ${
          checked
            ? "border-white bg-white text-green-600"
            : "border-gray-400"
        }
      `}
    >
      {checked && <CheckCircle2 size={16} />}
    </div>
  </div>
);
