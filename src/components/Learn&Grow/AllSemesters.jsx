"use client";

import { useState } from "react";
import { Download, X } from "lucide-react";

const semesters = [
  { id: 1, name: "Semester 1", pdfUrl: "/docs/sem1.pdf", description: "You will learn how to create user-friendly and efficient interfaces" },
  { id: 2, name: "Semester 2", pdfUrl: "/docs/sem2.pdf", description: "Fundamental knowledge of digital security for beginners" },
  { id: 3, name: "Semester 3", pdfUrl: "/docs/sem3.pdf", description: "A deep dive into protecting complex systems and architectures." },
  { id: 4, name: "Semester 4", pdfUrl: "/docs/sem4.pdf", description: "You will learn: Middle level." },
  { id: 5, name: "Semester 5", pdfUrl: "/docs/sem5.pdf", description: "You will learn: Beginner level." },
  { id: 6, name: "Semester 6", pdfUrl: "/docs/sem6.pdf", description: "You will learn: Advanced level." },
];

const AllSemesters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(null);

  const openModal = (semester) => {
    setSelectedSemester(semester);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSemester(null);
  };

  const handleDownload = (semester) => {
    const link = document.createElement("a");
    link.href = semester.pdfUrl;
    link.download = `${semester.name}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeModal();
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">

      {/* ===== HEADER ===== */}
      <div className="text-center py-16 px-4">
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-200 text-[#007BFF]">
          PROGRAM STRUCTURE
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
          Semester-wise Curriculum
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#2C2C2C]/70">
          Explore what you will learn in each phase of your academic journey
        </p>
      </div>

      {/* ===== DESKTOP TIMELINE ===== */}
      <div className="hidden md:block max-w-5xl mx-auto relative px-6 pb-24">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-100 -translate-x-1/2" />

        {semesters.map((semester, index) => (
          <div
            key={semester.id}
            className={`relative flex mb-16 ${
              index % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12"
            }`}
          >
            {/* Card */}
            <div
              onClick={() => openModal(semester)}
              className="w-[45%] bg-white border border-blue-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-[#007BFF] mb-2">
                {semester.name}
              </h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
                {semester.description}
              </p>

              <button className="mt-4 text-sm font-semibold text-[#FF7F00]">
                Preview →
              </button>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-[#007BFF] rounded-full border-4 border-white shadow" />
          </div>
        ))}
      </div>

      {/* ===== MOBILE CARDS ===== */}
      <div className="md:hidden max-w-xl mx-auto px-4 pb-20 space-y-6">
        {semesters.map((semester) => (
          <div
            key={semester.id}
            onClick={() => openModal(semester)}
            className="bg-white border border-blue-200 rounded-2xl p-5 shadow-md active:scale-[0.98] transition cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-[#007BFF]">
              {semester.name}
            </h3>
            <p className="text-sm text-[#2C2C2C]/70 mt-2">
              {semester.description}
            </p>

            <button className="mt-3 text-sm font-semibold text-[#FF7F00]">
              Preview & Download →
            </button>
          </div>
        ))}
      </div>

      {/* ===== MODAL ===== */}
      {isModalOpen && selectedSemester && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-4xl rounded-2xl p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-[#007BFF]">
                {selectedSemester.name}
              </h3>
              <button onClick={closeModal} className="p-2 rounded-lg hover:bg-gray-100">
                <X size={22} />
              </button>
            </div>

            {/* PDF */}
            <iframe
              src={`${selectedSemester.pdfUrl}#toolbar=0&navpanes=0`}
              className="w-full h-[55vh] rounded-xl border border-blue-200"
              title={`${selectedSemester.name} Preview`}
            />

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-5">
              <button
                onClick={closeModal}
                className="px-6 py-2 rounded-lg bg-blue-50 text-[#2C2C2C] font-semibold hover:bg-blue-100 transition"
              >
                Close
              </button>
              <button
                onClick={() => handleDownload(selectedSemester)}
                className="px-6 py-2 rounded-lg bg-[#007BFF] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                <Download size={18} />
                Download
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AllSemesters;
