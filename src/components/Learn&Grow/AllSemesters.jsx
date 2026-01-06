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
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Subtle Background */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 123, 255, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 127, 0, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes growLine {
          from {
            height: 0;
          }
          to {
            height: 100%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideConnector {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .header-animate {
          animation: slideDown 0.5s ease-out;
        }

        .timeline-line {
          animation: growLine 1.5s ease-out;
        }

        .semester-card {
          animation: fadeInUp 0.6s ease-out;
          transition: all 0.3s ease;
        }

        .semester-card:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 10px 40px rgba(0, 123, 255, 0.3);
        }

        .timeline-dot {
          animation: scaleIn 0.5s ease-out;
        }

        .timeline-connector {
          animation: slideConnector 0.5s ease-out;
        }

        .card-overlay {
          transition: opacity 0.3s ease;
        }

        .semester-card:hover .card-overlay {
          opacity: 1;
        }

        .mobile-card {
          animation: fadeInUp 0.6s ease-out;
        }

        .mobile-card:active {
          transform: scale(0.98);
        }

        .modal-backdrop {
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          animation: modalSlideUp 0.3s ease-out;
        }

        .modal-exit {
          animation: fadeIn 0.3s ease-out reverse;
        }

        /* Stagger animation delays */
        .semester-card:nth-child(1) { animation-delay: 0s; }
        .semester-card:nth-child(2) { animation-delay: 0.2s; }
        .semester-card:nth-child(3) { animation-delay: 0.4s; }
        .semester-card:nth-child(4) { animation-delay: 0.6s; }
        .semester-card:nth-child(5) { animation-delay: 0.8s; }
        .semester-card:nth-child(6) { animation-delay: 1s; }

        .mobile-card:nth-child(1) { animation-delay: 0s; }
        .mobile-card:nth-child(2) { animation-delay: 0.1s; }
        .mobile-card:nth-child(3) { animation-delay: 0.2s; }
        .mobile-card:nth-child(4) { animation-delay: 0.3s; }
        .mobile-card:nth-child(5) { animation-delay: 0.4s; }
        .mobile-card:nth-child(6) { animation-delay: 0.5s; }
      `}</style>

      {/* Main Content */}
      <div className="py-8 sm:py-12 px-4 relative z-10">
        {/* Header */}
        <div 
          className="header-animate flex items-center justify-center py-3 mt-6 sm:mt-14 text-center mx-auto rounded-2xl sm:rounded-3xl shadow-xl max-w-4xl"
          style={{
            background: 'linear-gradient(135deg, #007BFF, #FF7F00)'
          }}
        >
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold py-4 sm:py-6 tracking-wide px-4 text-white"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
            }}
          >
            All <span className="drop-shadow-md">Semesters</span>
          </h2>
        </div>

        {/* Desktop & Tablet Timeline View */}
        <div className="hidden md:block container mx-auto max-w-4xl relative pt-20">
          <div
            className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1"
            style={{
              background: 'linear-gradient(to bottom, #007BFF, #FF7F00)',
              top: '0px',
              bottom: '0px'
            }}
          />

          <div>
            {semesters.map((semester, index) => (
              <div
                key={semester.id}
                className={`semester-card relative flex items-center mb-10 ${index % 2 !== 0 ? "justify-start" : "justify-end"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`w-5/12 bg-white border-2 rounded-2xl shadow-lg p-6 cursor-pointer group relative z-10 ${
                    index % 2 !== 0 ? "mr-8 lg:mr-12" : "ml-8 lg:ml-12"
                  }`}
                  onClick={() => openModal(semester)}
                  style={{
                    borderColor: 'rgba(0, 123, 255, 0.2)'
                  }}
                >
                  <h2 
                    className="text-xl lg:text-2xl font-bold transition-colors"
                    style={{ 
                      fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                      color: '#007BFF'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF7F00'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#007BFF'}
                  >
                    {semester.name}
                  </h2>
                  <p 
                    className="text-sm mt-2"
                    style={{ 
                      fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                      color: 'rgba(44, 44, 44, 0.7)'
                    }}
                  >
                    {semester.description}
                  </p>
                  <div className="mt-4 flex justify-center">
                    <button 
                      className="px-4 lg:px-5 py-2 lg:py-2.5 text-white font-bold rounded-xl shadow-lg transition text-sm lg:text-base"
                      style={{
                        background: 'linear-gradient(135deg, #007BFF, #FF7F00)',
                        fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
                      }}
                    >
                      Preview
                    </button>
                  </div>
                  <div 
                    className="card-overlay absolute inset-0 rounded-xl"
                    style={{
                      background: 'linear-gradient(to top, rgba(0, 123, 255, 0.05), transparent)',
                      opacity: 0
                    }}
                  />
                </div>

                <div
                  className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-4 h-4 lg:w-5 lg:h-5 rounded-full z-20 border-2 border-white shadow-lg top-1/2 -translate-y-1/2"
                  style={{
                    background: 'linear-gradient(135deg, #007BFF, #FF7F00)',
                    animationDelay: `${index * 0.2 + 0.1}s`
                  }}
                />

                <div
                  className={`timeline-connector absolute w-8 lg:w-12 h-1.5 rounded-full z-10 top-1/2 -translate-y-1/2 ${
                    index % 2 === 0 ? "left-1/2 translate-x-2" : "left-1/2 -translate-x-8 lg:-translate-x-12"
                  }`}
                  style={{
                    backgroundColor: '#FF7F00',
                    animationDelay: `${index * 0.2 + 0.2}s`
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden container mx-auto max-w-2xl pt-8">
          <div className="grid grid-cols-1 gap-6">
            {semesters.map((semester, index) => (
              <div
                key={semester.id}
                className="mobile-card bg-white border-2 rounded-2xl shadow-lg p-5 cursor-pointer group relative overflow-hidden"
                onClick={() => openModal(semester)}
                style={{
                  borderColor: 'rgba(0, 123, 255, 0.2)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #007BFF, #FF7F00)',
                      fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
                    }}
                  >
                    {semester.id}
                  </div>
                  <h2 
                    className="text-xl font-bold transition-colors"
                    style={{ 
                      fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                      color: '#007BFF'
                    }}
                  >
                    {semester.name}
                  </h2>
                </div>

                <p 
                  className="text-sm mb-4 leading-relaxed"
                  style={{ 
                    fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                    color: 'rgba(44, 44, 44, 0.7)'
                  }}
                >
                  {semester.description}
                </p>

                <div className="flex gap-3">
                  <button 
                    className="flex-1 px-4 py-2.5 text-white font-bold rounded-xl shadow-lg transition text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #007BFF, #FF7F00)',
                      fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
                    }}
                  >
                    Preview & Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedSemester && (
          <div
            className="modal-backdrop fixed inset-0 flex items-center justify-center z-50 p-4"
            style={{
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)'
            }}
            onClick={closeModal}
          >
            <div
              className="modal-content bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{
                borderColor: 'rgba(0, 123, 255, 0.2)'
              }}
            >
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h2 
                  className="text-xl sm:text-2xl font-bold"
                  style={{ 
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                    color: '#007BFF'
                  }}
                >
                  {selectedSemester.name}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-lg transition"
                  style={{
                    color: 'rgba(44, 44, 44, 0.7)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#007BFF';
                    e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(44, 44, 44, 0.7)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <X size={24} />
                </button>
              </div>

              <iframe
                src={`${selectedSemester.pdfUrl}#toolbar=0&navpanes=0`}
                className="w-full h-[50vh] sm:h-[65vh] rounded-xl border-2"
                style={{
                  borderColor: 'rgba(0, 123, 255, 0.2)'
                }}
                title={`${selectedSemester.name} Preview`}
              />

              <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-4 sm:mt-6">
                <button
                  onClick={closeModal}
                  className="w-full sm:w-auto px-6 py-2.5 sm:py-2 rounded-lg transition font-semibold"
                  style={{
                    backgroundColor: 'rgba(0, 123, 255, 0.1)',
                    color: '#2C2C2C',
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.1)'}
                >
                  Close
                </button>
                <button
                  onClick={() => handleDownload(selectedSemester)}
                  className="w-full sm:w-auto px-6 py-2.5 sm:py-2 text-white rounded-lg shadow-lg flex items-center justify-center gap-2 font-semibold transition"
                  style={{
                    background: 'linear-gradient(135deg, #007BFF, #FF7F00)',
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
                  }}
                >
                  <Download size={20} />
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllSemesters;
