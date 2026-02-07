"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function StartAssessment() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const [form, setForm] = useState({
    full_name: "",
    mobile: "",
    city: "",
    stream: "",
    percentage_range: "",
    source: "Walk-in"
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const startTest = async () => {
    if (!form.full_name || !form.mobile || !form.stream) {
      alert("Please fill required fields");
      return;
    }

    try {
      setLoading(true);
     
      // 1. Create student
      const studentRes = await axios.post(`${API}/student/register`,form );

      const studentId = studentRes.data._id;

      // 2. Start assessment
      const assessRes = await axios.post(`${API}/assessments/start`, { student_id: studentId });

      const assessmentId = assessRes.data._id;
      console.log(assessmentId);
      
      // 3. Go to test page
      router.push(`./assessment/${assessmentId}`);

    } catch (err) {
      console.error(err);
      alert("Failed to start assessment");
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100 flex justify-center items-center p-4">
        <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-blue-100 p-8 md:p-10">
          Loading assessment...
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#f6f8fb] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow max-w-md w-full p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Student Entry Form
        </h1>

        <input
          name="full_name"
          placeholder="Full Name"
          className="input"
          onChange={handleChange}
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          className="input"
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="City"
          className="input"
          onChange={handleChange}
        />

        <select name="stream" className="input" onChange={handleChange}>
          <option value="">Select 12th Stream</option>
          <option>Science (PCM)</option>
          <option>Science (PCB)</option>
          <option>Commerce</option>
          <option>Arts</option>
          <option>Diploma</option>
        </select>

        <select
          name="percentage_range"
          className="input"
          onChange={handleChange}
        >
          <option value="">12th Percentage</option>
          <option>Below 50%</option>
          <option>50% – 60%</option>
          <option>60% – 70%</option>
          <option>70% – 80%</option>
          <option>80% & above</option>
        </select>

        <button
          onClick={startTest}
          disabled={loading}
          className="mt-4 bg-blue-600 text-white w-full py-2 rounded-lg disabled:opacity-50"
        >
          {loading ? "Starting..." : "Start Assessment"}
        </button>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 12px;
        }
      `}</style>
    </div>
  );
}
