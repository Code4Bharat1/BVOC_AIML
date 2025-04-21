"use client";

import { useState } from "react";
import SyllabusSidebar from "./SyllabusSidebar";

const courses = [
  {
    title: "Sistem design in Figma",
    description:
      "You will learn how to create user-friendly and efficient interfaces for large systems.",
    duration: "4 Weeks",
    level: "Middle level",
    image: "pdf.png",
    category: "Web design & UX/UI",
  },
  {
    title: "Basics of cybersecurity",
    description:
      "The course is designed for those who want to gain fundamental knowledge of digital security.",
    duration: "3 Weeks",
    level: "Beginner level",
    image: "pdf.png",
    category: "Cybersecurity & data protection",
  },
  {
    title: "Basics of cybersecurity",
    description:
      "The course is designed for those who want to gain fundamental knowledge of digital security.",
    duration: "3 Weeks",
    level: "Beginner level",
    image: "pdf.png",
    category: "Cybersecurity & data protection",
  },
  {
    title: "Basics of cybersecurity",
    description:
      "The course is designed for those who want to gain fundamental knowledge of digital security.",
    duration: "3 Weeks",
    level: "Beginner level",
    image: "pdf.png",
    category: "Cybersecurity & data protection",
  },
];

const categories = [
  "All",
  "Programming basics",
  "Web design & UX/UI",
  "Graphic design",
  "Cybersecurity & data protection",
];

const CourseCards = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <div className="mx-20">
      {/* Main Container */}
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <h1 className="text-6xl font-bold text-gray-900 mt-8 mb-12">
          Syllabus
        </h1>

        {/* Content Area */}
        <div className="flex gap-8 flex-1">
          <div className="w-80">
            {" "}
            {/* This is the changed line */}
            <SyllabusSidebar
              categories={categories}
              setActiveCategory={setActiveCategory}
              activeCategory={activeCategory}
            />
          </div>

          {/* <div className="flex-1 overflow-x-auto pb-4">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}

          {/* Modified cards container */}
          <div className="flex-1 overflow-x-auto pb-4">
            <div className="px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex gap-6 flex-nowrap">
                {filteredCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                    style={{ minWidth: "calc(50% - 12px)" }}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-56 object-cover"
                    />

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {course.description}
                        </p>
                      </div>

                      <div className="mt-4">
                        <button className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition-colors">
                          View more
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
