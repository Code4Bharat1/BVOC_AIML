"use client";

import { useState, useRef } from "react";
import { Download, X } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

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
  const timelineVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } };
  const lineVariants = { hidden: { height: 0 }, visible: { height: "100%", transition: { duration: 1.5, ease: "easeOut" } } };
  const dotVariants = { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } } };
  const connectorVariants = { hidden: (isEven) => ({ x: isEven ? -20 : 20, opacity: 0 }), visible: { x: 0, opacity: 1, transition: { duration: 0.5 } } };
  const cardVariants = { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } };
  const descriptionVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🌌 Background Theme Start */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-[#00d4ff]/20 blur-[150px] rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#ff6b35]/20 blur-[180px] rounded-full"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 22, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#AC6CFF]/20 blur-[140px] rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>
      {/* 🌌 Background Theme End */}

      {/* Main Content */}
      <div className="py-8 sm:py-12 px-4 bg-gradient-to-br from-[#1a1a2e]/80 via-[#16213e]/80 to-[#0f3460]/80 text-white relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center py-3 mt-6 sm:mt-14 text-center mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#ff6b35] via-[#ff8c42] to-[#ffb86c] shadow-xl max-w-4xl">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold py-4 sm:py-6 tracking-wide px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            All <span className="text-white drop-shadow-md">Semesters</span>
          </motion.h2>
        </div>

        {/* Desktop & Tablet Timeline View */}
        <div ref={containerRef} className="hidden md:block container mx-auto max-w-4xl relative pt-20">
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#ff6b35] via-[#ff8c42] to-[#ffb86c]"
            style={{ top: "0px", bottom: "0px" }}
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
                    index % 2 !== 0 ? "mr-8 lg:mr-12" : "ml-8 lg:ml-12"
                  }`}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,140,66,0.5)" }}
                  onClick={() => openModal(semester)}
                  variants={cardVariants}
                >
                  <h2 className="text-xl lg:text-2xl font-bold text-[#ffb86c] group-hover:text-[#ff6b35] transition-colors">
                    {semester.name}
                  </h2>
                  <motion.p className="text-sm text-gray-200 mt-2" variants={descriptionVariants} initial="hidden" animate="visible">
                    {semester.description}
                  </motion.p>
                  <motion.div className="mt-4 flex justify-center" variants={descriptionVariants} initial="hidden" animate="visible">
                    <button className="px-4 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(255,107,53,0.5)] transition text-sm lg:text-base">
                      Preview
                    </button>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ff8c42]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </motion.div>

                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-br from-[#ff6b35] to-[#ffb86c] rounded-full z-20 border-2 border-white shadow-lg top-1/2 -translate-y-1/2"
                  variants={dotVariants}
                ></motion.div>

                <motion.div
                  className={`absolute w-8 lg:w-12 h-1.5 bg-[#ff8c42] rounded-full z-10 top-1/2 -translate-y-1/2 ${
                    index % 2 === 0 ? "left-1/2 translate-x-2" : "left-1/2 -translate-x-8 lg:-translate-x-12"
                  }`}
                  variants={connectorVariants}
                  custom={index % 2 === 0}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden container mx-auto max-w-2xl pt-8">
          <motion.div className="grid grid-cols-1 gap-6" variants={timelineVariants} initial="hidden" animate="visible">
            {semesters.map((semester) => (
              <motion.div
                key={semester.id}
                className="bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl shadow-lg p-5 cursor-pointer group relative overflow-hidden"
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal(semester)}
                variants={cardVariants}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ffb86c] flex items-center justify-center font-bold text-white shadow-lg">
                    {semester.id}
                  </div>
                  <h2 className="text-xl font-bold text-[#ffb86c] group-active:text-[#ff6b35] transition-colors">
                    {semester.name}
                  </h2>
                </div>

                <p className="text-sm text-gray-200 mb-4 leading-relaxed">{semester.description}</p>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white font-semibold rounded-xl shadow-lg active:shadow-[0_0_20px_rgba(255,107,53,0.5)] transition text-sm">
                    Preview & Download
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedSemester && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#1f1f2f] rounded-2xl sm:rounded-3xl p-4 sm:p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#ff8c42]/30 shadow-[0_0_25px_rgba(255,140,66,0.4)]"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#ffb86c]">{selectedSemester.name}</h2>
                  <button
                    onClick={closeModal}
                    className="text-[#ff8c42] hover:text-[#ff6b35] p-2 rounded-lg hover:bg-white/10 transition"
                  >
                    <X size={24} />
                  </button>
                </div>

                <iframe
                  src={`${selectedSemester.pdfUrl}#toolbar=0&navpanes=0`}
                  className="w-full h-[50vh] sm:h-[65vh] rounded-xl border border-[#ffb86c]/40"
                  title={`${selectedSemester.name} Preview`}
                />

                <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <button
                    onClick={closeModal}
                    className="w-full sm:w-auto px-6 py-2.5 sm:py-2 bg-white/10 rounded-lg hover:bg-white/20 transition font-medium"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleDownload(selectedSemester)}
                    className="w-full sm:w-auto px-6 py-2.5 sm:py-2 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white rounded-lg hover:shadow-[0_0_20px_rgba(255,140,66,0.5)] flex items-center justify-center gap-2 font-medium transition"
                  >
                    <Download size={20} />
                    Download
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AllSemesters;
