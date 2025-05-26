"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { MdFileDownload } from "react-icons/md";

const AllSemesters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfPath, setPdfPath] = useState("");
  const [filename, setFilename] = useState("");
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
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

export default AllSemesters;
