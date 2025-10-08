"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { MdFileDownload } from "react-icons/md";
import { motion, AnimatePresence, useInView } from "framer-motion";

const semesters = [
  { id: 1, name: "Semester 1", pdfUrl: "/docs/sem1.pdf", description: "You will learn how to create user-friendly and efficient interfaces" },
  { id: 2, name: "Semester 2", pdfUrl: "/docs/sem2.pdf", description: "Fundamental knowledge of digital security for beginners" },
  { id: 3, name: "Semester 3", pdfUrl: "/docs/sem3.pdf", description: "A deep dive into protecting complex systems and architectures." },
  { id: 4, name: "Semester 4", pdfUrl: "/docs/sem4.pdf", description: "You will learn: Middle level." },
  { id: 5, name: "Semester 5", pdfUrl: "/docs/sem5.pdf", description: "You will learn: Beginner level." },
  { id: 6, name: "Semester 6", pdfUrl: "/docs/sem6.pdf", description: "You will learn: Advanced level." },
];

// ----------------------------- DESKTOP -----------------------------
const DesktopAllSemesters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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

  // Motion Variants
  const timelineVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
  const lineVariants = { hidden: { height: 0 }, visible: { height: `${semesters.length * 200 + 40}px`, transition: { duration: 1.5, ease: "easeOut" } } };
  const dotVariants = { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } } };
  const connectorVariants = { hidden: (isEven) => ({ x: isEven ? -20 : 20, opacity: 0 }), visible: { x: 0, opacity: 1, transition: { duration: 0.5 } } };
  const cardVariants = { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } };
  const descriptionVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

  return (
    <div className="hidden sm:block py-12 px-4 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
      <div className="hidden lg:flex items-start justify-center py-3 mt-14 text-center mx-auto rounded-3xl bg-gradient-to-r from-[#ff6b35] via-[#ff8c42] to-[#ffb86c] shadow-xl">
        <motion.h2
          className="text-5xl font-extrabold py-6 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All <span className="text-white drop-shadow-md">Semesters</span>
        </motion.h2>
      </div>

      <div ref={containerRef} className="container mx-auto max-w-4xl relative pt-20">
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#ff6b35] via-[#ff8c42] to-[#ffb86c]"
          style={{ top: "100px" }}
          variants={lineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        ></motion.div>

        <motion.div variants={timelineVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {semesters.map((semester, index) => (
            <motion.div
              key={semester.id}
              className={`relative flex items-center mb-10 ${index % 2 !== 0 ? "justify-start" : "justify-end"}`}
            >
              <motion.div
                className={`w-5/12 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl shadow-lg p-6 cursor-pointer group relative z-10 ${
                  index % 2 !== 0 ? "mr-12" : "ml-12"
                }`}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,140,66,0.5)" }}
                onClick={() => openModal(semester)}
                variants={cardVariants}
              >
                <h2 className="text-2xl font-bold text-[#ffb86c] group-hover:text-[#ff6b35] transition-colors">
                  {semester.name}
                </h2>
                <motion.p
                  className="text-sm text-gray-200 mt-2"
                  variants={descriptionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {semester.description}
                </motion.p>
                <motion.div className="mt-4 flex justify-center" variants={descriptionVariants} initial="hidden" animate="visible">
                  <button className="px-5 py-2.5 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(255,107,53,0.5)] transition">
                    Preview
                  </button>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff8c42]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </motion.div>

              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-[#ff6b35] to-[#ffb86c] rounded-full z-20 border-2 border-white shadow-lg top-1/2 -translate-y-1/2"
                variants={dotVariants}
              ></motion.div>

              <motion.div
                className={`absolute w-12 h-1.5 bg-[#ff8c42] rounded-full z-10 top-1/2 -translate-y-1/2 ${
                  index % 2 === 0 ? "left-1/2 translate-x-2" : "left-1/2 -translate-x-12"
                }`}
                variants={connectorVariants}
                custom={index % 2 === 0}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedSemester && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-[#1f1f2f] rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#ff8c42]/30 shadow-[0_0_25px_rgba(255,140,66,0.4)]"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#ffb86c]">{selectedSemester.name}</h2>
                <button onClick={closeModal} className="text-[#ff8c42] hover:text-[#ff6b35] text-2xl">✕</button>
              </div>
              <iframe
                src={`${selectedSemester.pdfUrl}#toolbar=0&navpanes=0`}
                className="w-full h-[65vh] rounded-xl border border-[#ffb86c]/40"
                title={`${selectedSemester.name} Preview`}
              />
              <div className="flex justify-end gap-4 mt-6">
                <button onClick={closeModal} className="px-6 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                  Close
                </button>
                <button
                  onClick={() => handleDownload(selectedSemester)}
                  className="px-6 py-2 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white rounded-lg hover:shadow-[0_0_20px_rgba(255,140,66,0.5)] flex items-center gap-2"
                >
                  <MdFileDownload size={20} />
                  Download
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ----------------------------- MOBILE (unchanged logic, same theme colors) -----------------------------
/* keep your MobileAllSemesters code unchanged; just replace purple colors with the same 
   gradient palette (#ff6b35 → #ff8c42 → #ffb86c) and glassmorphism effects */

export const AllSemesters = () => (
  <>
    <DesktopAllSemesters />
    {/* Keep your existing <MobileAllSemesters /> below with same logic but updated colors */}
  </>
);

export default AllSemesters;
