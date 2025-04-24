"use client";
import React, { useState, useEffect } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
const courses = [
  {
    title: "SEM I",
    description:
      "You will learn how to create user-friendly and efficient interfaces for large systems.",
    image: "pdf.png",
    semester: "Semester I & II",
    pdf: "/pdfs/sem1.pdf",
  },
  { 
    title: "SEM II",
    description: "Fundamental knowledge of digital security for beginners.",
    image: "pdf.png",
    semester: "Semester I & II",
    pdf: "/pdfs/sem2.pdf",
  },
  {
    title: "SEM III",
    description:
      "A deep dive into protecting complex systems and architectures.",
    image: "pdf.png",
    semester: "Semester III & IV",
    pdf: "/pdfs/sem3.pdf",
  },
  {
    title: "SEM IV",
    level: "Middle level",
    image: "pdf.png",
    semester: "Semester III & IV",
    pdf: "/pdfs/sem4.pdf",
  },
  {
    title: "SEM V",
    level: "Beginner level",
    image: "pdf.png",
    semester: "Semester V & VI",
    pdf: "/pdfs/sem5.pdf",
  },
  {
    title: "SEM VI",
    level: "Advanced level",
    image: "pdf.png",
    semester: "Semester V & VI",
    pdf: "/pdfs/sem6.pdf",
  },
];

const CourseFilterBar = () => {
  const courseFilters = [
    "All Semester",
    "Semester I & II",
    "Semester III & IV",
    "Semester V & VI",
  ];
  const [selectedFilter, setSelectedFilter] = useState("All Semester");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");

  // State for mobile carousel
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset carousel index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedFilter]);

  const filteredCourses =
    selectedFilter === "All Semester"
      ? courses
      : courses.filter((course) => course.semester === selectedFilter);

  const openModal = (pdfPath) => {
    setSelectedPdf(pdfPath);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPdf("");
  };

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = selectedPdf;
    link.download = selectedPdf.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handlers for carousel navigation
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredCourses.length - 1 : prev - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredCourses.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full py-6">
      {/* Section Heading */}
      <h2 className="text-center text-[6vw] md:text-[2.5vw] font-bold">
        About Our <span className="text-lime-400">Syllabus</span> 
      </h2>

      {/* Filter Bar */}
      <div className="flex items-center gap-2 md:gap-5 w-[90%] md:w-[60%] mx-auto justify-center mt-8 flex-wrap">
        {courseFilters.map((filter) => (
          <button
            key={filter}
            aria-label={`Filter by ${filter}`}
            className={`px-2 md:px-4 text-[3vw] md:text-[1.2vw] py-1 md:py-2 rounded-md font-medium hover:cursor-pointer ${
              selectedFilter === filter
                ? "bg-lime-400 text-white "
                : "border-[#818C96] border-[1.5px] text-black"
            }`}
            onClick={() => {
              if (typeof window !== "undefined" && typeof gtag === "function") {
                gtag("event", "filter_click", {
                  event_category: "Filter",
                  event_label: filter,
                });
              }
              setSelectedFilter(filter);
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Course Cards / Carousel */}
      <div className="mt-12 mx-auto px-4">
        {selectedFilter === "All Semester" && isMobile ? (
          <div className="relative w-full max-w-xs mx-auto">
            {/* Single Card View */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={filteredCourses[currentIndex].image}
                alt={filteredCourses[currentIndex].title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-lime-400">
                  {filteredCourses[currentIndex].title}
                </h3>
                {filteredCourses[currentIndex].description && (
                  <p className="text-gray-600 mt-2 text-sm">
                    {filteredCourses[currentIndex].description}
                  </p>
                )}
                <div className="mt-4">
                  {filteredCourses[currentIndex].duration && (
                    <span className="text-sm text-gray-500 block">
                      Duration: {filteredCourses[currentIndex].duration}
                    </span>
                  )}
                  {filteredCourses[currentIndex].level && (
                    <span className="text-sm text-gray-500 block">
                      Level: {filteredCourses[currentIndex].level}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => openModal(filteredCourses[currentIndex].pdf)}
                  className="mt-4 w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition-colors hover:cursor-pointer"
                >
                  View Syllabus
                </button>
              </div>
            </div>
            {/* Navigation Arrows */}
                  <button
        onClick={handlePrev}
        disabled={currentIndex <= 0}
        className={`
          absolute left-2 top-1/2 transform -translate-y-1/2
          bg-lime-400 text-white p-2 rounded-full
          transition-all duration-300
          ${currentIndex <= 0
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-lime-600 hover:cursor-pointer"}
        `}
      >
        <ArrowBack />
        </button>
          <button
          onClick={handleNext}
          disabled={currentIndex >= filteredCourses.length - 1}
          className={`
            absolute right-2 top-1/2 transform -translate-y-1/2
            bg-lime-400 text-white p-2 rounded-full
            transition-all duration-300
            ${currentIndex >= filteredCourses.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-lime-600 hover:cursor-pointer"}
          `}
        >
          <ArrowForward />
        </button>
          </div>
        ) : selectedFilter === "All Semester" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 max-w-7xl mx-auto">
            {filteredCourses.map((course, index) => (
              <div
                key={index}
                className="w-full md:w-[300px] bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-lime-400">
                    {course.title}
                  </h3>
                  {course.description && (
                    <p className="text-gray-600 mt-2 text-sm">
                      {course.description}
                    </p>
                  )}
                  <div className="mt-4">
                    {course.duration && (
                      <span className="text-sm text-gray-500 block">
                        Duration: {course.duration}
                      </span>
                    )}
                    {course.level && (
                      <span className="text-sm text-gray-500 block">
                        Level: {course.level}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => openModal(course.pdf)}
                    className="mt-4 w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition-colors hover:cursor-pointer"
                  >
                    View Syllabus
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {filteredCourses.map((course, index) => (
              <div
                key={index}
                className="w-full md:w-[300px] bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-lime-400">
                    {course.title}
                  </h3>
                  {course.description && (
                    <p className="text-gray-600 mt-2 text-sm">
                      {course.description}
                    </p>
                  )}
                  <div className="mt-4">
                    {course.duration && (
                      <span className="text-sm text-gray-500 block">
                        Duration: {course.duration}
                      </span>
                    )}
                    {course.level && (
                      <span className="text-sm text-gray-500 block">
                        Level: {course.level}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => openModal(course.pdf)}
                    className="mt-4 w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition-colors hover:cursor-pointer"
                  >
                    View Syllabus
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 w-3/4 md:w-2/3 lg:w-1/2 rounded-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-lg font-semibold text-black hover:cursor-pointer"
            >
              X
            </button>
            <h3 className="text-2xl font-bold text-black mb-4">Syllabus</h3>
            <div className="w-full h-[500px]">
              <iframe
                src={selectedPdf}
                width="100%"
                height="100%"
                title="Syllabus PDF"
              ></iframe>
            </div>
            <button
              onClick={downloadPdf}
              className="mt-4 w-1/2 mx-auto block bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-6  00 transition-colors hover:cursor-pointer"
            >
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseFilterBar;
