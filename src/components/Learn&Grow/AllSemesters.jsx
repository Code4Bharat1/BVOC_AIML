"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MdFileDownload } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const semesters = [
  {
    id: 1,
    name: "Semester 1",
    pdfUrl: "/docs/sem1.pdf",
    description:
      "You will learn how to create user-friendly and efficient interfaces",
  },
  {
    id: 2,
    name: "Semester 2",
    pdfUrl: "/docs/sem2.pdf",
    description: "Fundamental knowledge of digital security for beginners",
  },
  {
    id: 3,
    name: "Semester 3",
    pdfUrl: "/docs/sem3.pdf",
    description:
      "A deep dive into protecting complex systems and architectures.",
  },
  {
    id: 4,
    name: "Semester 4",
    pdfUrl: "/docs/sem4.pdf",
    description: "You will learn: Middle level.",
  },
  {
    id: 5,
    name: "Semester 5",
    pdfUrl: "/docs/sem5.pdf",
    description: "You will learn: Beginner level.",
  },
  {
    id: 6,
    name: "Semester 6",
    pdfUrl: "/docs/sem6.pdf",
    description: "You will learn: Advanced level.",
  },
];

const DesktopAllSemesters = () => {
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

  // Animation variants (unchanged)
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: `${semesters.length * 200 + 40}px`,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const connectorVariants = {
    hidden: (isEven) => ({
      x: isEven ? -20 : 20,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="hidden sm:block py-12 px-4 from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="hidden lg:flex items-start justify-center py-3 mt-14 text-center w-3xl mx-auto rounded-4xl bg-[#D8BCFD]">
        <motion.h2
          className="text-5xl font-extrabold py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All <span className="text-purple-500">Semester</span>
        </motion.h2>
      </div>
      <div className="container mx-auto max-w-4xl relative pt-20">
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700"
          style={{ top: "100px" }}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>

        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate="visible"
        >
          {semesters.map((semester, index) => (
            <motion.div
              key={semester.id}
              className={`relative flex items-center mb-10 ${
                index % 2 !== 0
                  ? "justify-start text-center"
                  : "justify-end text-center"
              }`}
            >
              <motion.div
                className={`w-5/12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-purple-200 dark:border-purple-700 cursor-pointer group relative z-10 ${
                  index % 2 !== 0 ? "mr-12" : "ml-12"
                }`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(109, 40, 217, 0.3)",
                }}
                onClick={() => openModal(semester)}
                variants={cardVariants}
              >
                <h2 className="text-xl font-bold text-purple-900 dark:text-purple-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {semester.name}
                </h2>
                <motion.p
                  key={`description-${semester.id}`}
                  className="text-sm text-gray-600 dark:text-gray-300 mt-2 group-hover:block"
                  variants={descriptionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {semester.description}
                </motion.p>
                <motion.div
                  key={`button-${semester.id}`}
                  className="mt-4 flex justify-center"
                  variants={descriptionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <button className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-400 transition-colors duration-300 flex items-center gap-2">
                    Preview
                  </button>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-200/20 to-transparent dark:from-purple-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </motion.div>

              <motion.div
                className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-600 dark:bg-purple-400 rounded-full z-20 border-2 border-white dark:border-gray-800 shadow-md top-1/2 -translate-y-1/2`}
                variants={dotVariants}
              ></motion.div>
              <motion.div
                className={`absolute w-12 h-1.5 bg-purple-400 dark:bg-purple-500 rounded-full z-10 transition-all duration-300 group-hover:bg-purple-600 dark:group-hover:bg-purple-400 top-1/2 -translate-y-1/2 ${
                  index % 2 === 0
                    ? "left-1/2 translate-x-2"
                    : "left-1/2 -translate-x-12"
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
            className="fixed inset-0 bg-#2C2E33 bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[100vh] overflow-y-auto border border-purple-300 dark:border-purple-600"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-300">
                  {selectedSemester.name}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-purple-500 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-2xl"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              <iframe
                src={`${selectedSemester.pdfUrl}#toolbar=0&navpanes=0`}
                className="w-full h-[60vh] sm:h-[70vh] rounded-lg border border-purple-200 dark:border-purple-600"
                title={`${selectedSemester.name} Preview`}
              />
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-purple-100 dark:bg-gray-700 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() => handleDownload(selectedSemester)}
                  className="px-6 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-400 transition-colors duration-300 flex items-center gap-2"
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

const MobileAllSemesters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfPath, setPdfPath] = useState("");
  const [filename, setFilename] = useState("");
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 800,
        once: true,
      });
    });
  }, []);

  const handlePreview = (path, name) => {
    setPdfPath(path);
    setFilename(name);
    setPdfError(false);
    setIsModalOpen(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPdfPath("");
    setFilename("");
    setPdfError(false);
  };

  const handleIframeError = () => {
    setPdfError(true);
  };

  return (
    <div>
      {/* Mobile View */}
      <div className="block md:hidden overflow-x-hidden">
        <div className="relative w-full max-w-6xl mx-auto h-[1400px] px-4 py-8 overflow-x-hidden">
          {/* Heading */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#D8BCFD] border-2 border-white rounded-2xl p-6 text-[#903BFF] w-fit font-extrabold">
              <p>All Semesters</p>
            </div>
          </div>

          {/* Semester 1 */}
          <div
            data-aos="fade-right"
            className="absolute top-[160px] left-1/7 text-2xl text-white cursor-pointer"
            onClick={() => handlePreview("/docs/sem1.pdf", "semester-1.pdf")}
          >
            <div className="flex items-center gap-2 hover:text-[#D8BCFD] transition-colors duration-200">
              <MdFileDownload size={20} />
              <h1>Semester 1</h1>
            </div>
          </div>
          <div data-aos="fade-right" className="absolute top-[200px] left-4">
            <Image
              src="/elements/SemesterLeft.svg"
              alt="Left Top"
              width={250}
              height={200}
            />
          </div>
          <div
            data-aos="fade-right"
            className="absolute top-[210px] left-18 text-white"
          >
            <p>
              You will learn how to <br />
              create user-friendly <br />
              and efficient interfaces <br />
              for large System
            </p>
          </div>

          {/* Semester 2 */}
          <div
            data-aos="fade-left"
            className="absolute top-[360px] right-1/7 text-2xl text-white cursor-pointer"
            onClick={() => handlePreview("/docs/sem2.pdf", "semester-2.pdf")}
          >
            <div className="flex items-center gap-2 hover:text-[#D8BCFD] transition-colors duration-200">
              <MdFileDownload size={20} />
              <h1>Semester 2</h1>
            </div>
          </div>
          <div data-aos="fade-left" className="absolute top-[400px] right-4">
            <Image
              src="/elements/SemesterRight.svg"
              alt="Right Mid"
              width={250}
              height={200}
            />
          </div>
          <div
            data-aos="fade-left"
            className="absolute top-[410px] right-20 text-white"
          >
            <p>
              Fundamental <br />
              knowledge <br />
              of digital security <br />
              for beginners
            </p>
          </div>

          {/* Semester 3 */}
          <div
            data-aos="fade-right"
            className="absolute top-[560px] left-1/7 text-2xl text-white cursor-pointer"
            onClick={() => handlePreview("/docs/sem3.pdf", "semester-3.pdf")}
          >
            <div className="flex items-center gap-2 hover:text-[#D8BCFD] transition-colors duration-200">
              <MdFileDownload size={20} />
              <h1>Semester 3</h1>
            </div>
          </div>
          <div data-aos="fade-right" className="absolute top-[600px] left-4">
            <Image
              src="/elements/SemesterLeft.svg"
              alt="Left Lower"
              width={250}
              height={200}
            />
          </div>
          <div
            data-aos="fade-right"
            className="absolute top-[610px] left-20 text-white"
          >
            <p>
              A deep dive into <br />
              protecting complex <br />
              systems and <br />
              architectures
            </p>
          </div>

          {/* Semester 4 */}
          <div
            data-aos="fade-left"
            className="absolute top-[760px] right-1/7 text-2xl text-white cursor-pointer"
            onClick={() => handlePreview("/docs/sem4.pdf", "semester-4.pdf")}
          >
            <div className="flex items-center gap-2 hover:text-[#D8BCFD] transition-colors duration-200">
              <MdFileDownload size={20} />
              <h1>Semester 4</h1>
            </div>
          </div>
          <div data-aos="fade-left" className="absolute top-[800px] right-4">
            <Image
              src="/elements/SemesterRight.svg"
              alt="Right Lower"
              width={250}
              height={200}
            />
          </div>
          <div
            data-aos="fade-left"
            className="absolute top-[825px] right-20 text-white"
          >
            <p>
              You will Learn <br />
              Level: Middle <br />
              level
            </p>
          </div>

          {/* Semester 5 */}
          <div
            data-aos="fade-right"
            className="absolute top-[960px] left-1/7 text-2xl text-white cursor-pointer"
            onClick={() => handlePreview("/docs/sem5.pdf", "semester-5.pdf")}
          >
            <div className="flex items-center gap-2 hover:text-[#D8BCFD] transition-colors duration-200">
              <MdFileDownload size={20} />
              <h1>Semester 5</h1>
            </div>
          </div>
          <div data-aos="fade-right" className="absolute top-[1000px] left-4">
            <Image
              src="/elements/SemesterLeft.svg"
              alt="Left Lower"
              width={250}
              height={200}
            />
          </div>
          <div
            data-aos="fade-right"
            className="absolute top-[1025px] left-20 text-white"
          >
            <p>
              You will Learn <br />
              Level: beginner <br />
              level
            </p>
          </div>

          {/* Semester 6 */}
          <div
            data-aos="fade-left"
            className="absolute top-[1160px] right-1/7 text-2xl text-white cursor-pointer"
            onClick={() => handlePreview("/docs/sem6.pdf", "semester-6.pdf")}
          >
            <div className="flex items-center gap-2 hover:text-[#D8BCFD] transition-colors duration-200">
              <MdFileDownload size={20} />
              <h1>Semester 6</h1>
            </div>
          </div>
          <div data-aos="fade-left" className="absolute top-[1200px] right-4">
            <Image
              src="/elements/SemesterRight.svg"
              alt="Right Lower"
              width={250}
              height={200}
            />
          </div>
          <div
            data-aos="fade-left"
            className="absolute top-[1220px] right-20 text-white"
          >
            <p>
              You will Learn <br />
              Level: Advanced <br />
              level
            </p>
          </div>
        </div>
      </div>

      {/* Modal for PDF Preview */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          <div className="bg-white rounded-lg p-6 w-full max-w-[90vw] sm:max-w-3xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 id="modal-title" className="text-xl font-bold">
                PDF Preview: {filename}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800 text-2xl"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="flex justify-center mb-4">
              {pdfError ? (
                <div className="text-red-600 text-center">
                  <p>Unable to load PDF preview.</p>
                  <p>
                    Please{" "}
                    <button
                      onClick={handleDownload}
                      className="underline text-[#903BFF] hover:text-[#7A32D9]"
                    >
                      download
                    </button>{" "}
                    the file directly.
                  </p>
                </div>
              ) : (
                <iframe
                  src={`${pdfPath}#toolbar=0&navpanes=0`}
                  className="w-full h-[50vh] sm:h-[60vh]"
                  title={`PDF Preview: ${filename}`}
                  onError={handleIframeError}
                />
              )}
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                aria-label="Close"
              >
                Close
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-[#903BFF] text-white rounded hover:bg-[#7A32D9] flex items-center gap-2"
                aria-label={`Download ${filename}`}
              >
                <MdFileDownload size={20} />
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const AllSemesters = () => {
  return (
    <>
      <DesktopAllSemesters />
      <MobileAllSemesters />
    </>
  );
};

export default AllSemesters;
