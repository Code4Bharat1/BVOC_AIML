"use client";

import { use, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AssessmentPage({ params }) {
  const { assessmentId } = use(params);
  const router = useRouter();
  const API = process.env.NEXT_PUBLIC_API_URL;

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const token = localStorage.getItem("token");
  useEffect(() => {
    axios.get(`${API}/questions`,{
       headers : {
      Authorization: `Bearer ${token}`
    }
  })
      .then(res => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [API]);

  const selectOption = (qid, oid) => {
    setAnswers(prev => ({ ...prev, [qid]: oid }));
  };

  const next = () => {
    if (!answers[questions[current]._id]) {
      toast("Please select an option");
      return;
    }
    setCurrent(c => c + 1);
  };

  const prev = () => setCurrent(c => c - 1);

  const submitTest = async () => {
    setSubmitting(true);

    const answerArray = Object.keys(answers).map(qid => ({
      question_id: qid,
      option_id: answers[qid]
    }));

    try {
      await axios.post(`${API}/answers/submit`,
     {
        assessment_id: assessmentId,
        answers: answerArray
      });

      await axios.post(`${API}/scores/calculate/${assessmentId}`);  

      router.push(`/result/${assessmentId}`);
    } catch (e) {
      alert("Submission failed. Please try again.");
      console.error(e);
    }

    setSubmitting(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-blue-700 font-medium animate-pulse">
          Loading assessment...
        </div>
      </div>
    );
  }

  const q = questions[current];
  const progress = Math.round(((current + 1) / questions.length) * 100);

  return (
    <div className=" bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-blue-100 p-8 md:p-10">

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Career Interest Assessment
          </h1>
          <p className="text-gray-500 text-sm">
            Choose the option that suits you best
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Question {current + 1} of {questions.length}</span>
            <span>{progress}% Completed</span>
          </div>

          <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            {q.question_text}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {q.options.map(o => {
            const selected = answers[q._id] === o._id;
            return (
              <label
                key={o._id}
                className={`flex items-center gap-4 border rounded-2xl px-5 py-4 cursor-pointer transition-all
                ${selected
                  ? "border-indigo-600 bg-indigo-50 shadow-md"
                  : "border-gray-200 hover:border-blue-400 hover:shadow-sm bg-white"}
                `}
              >
                <input
                  type="radio"
                  name={q._id}
                  className="hidden"
                  checked={selected}
                  onChange={() => selectOption(q._id, o._id)}
                />

                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center
                  ${selected ? "border-indigo-600" : "border-gray-400"}`}
                >
                  {selected && (
                    <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full" />
                  )}
                </div>

                <span className="text-gray-800">{o.option_text}</span>
              </label>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-10">
          <button
            disabled={current === 0}
            onClick={prev}
            className="px-6 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {current < questions.length - 1 ? (
            <button
              onClick={next}
              className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={submitTest}
              disabled={submitting}
              className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md hover:shadow-lg disabled:opacity-60 transition"
            >
              {submitting ? "Submitting..." : "Submit Test"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
