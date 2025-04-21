"use client";
import React from "react";
import SyllabusSidebar from "./SyllabusSidebar";

const courses = [
  {
    title: "Basics of cybersecurity",
    description:
      "The course is designed for those who want to gain fundamental knowledge of digital security.",
    duration: "3 Weeks",
    level: "Beginner level",
    price: "Free",
    category: "Cybersecurity & data protection",
  },
  {
    title: "Application Security",
    description:
      "Participants will learn the principles of application security against various types of threats.",
    duration: "5 Weeks",
    level: "Middle level",
    price: "$10.00",
    category: "Cybersecurity & data protection",
  },
  // Add more courses as needed
];

const categories = [
  "All",
  "Programming basics",
  "Web design & UX/UI",
  "Graphic design",
  "Cybersecurity & data protection",
  "Data analysis & business",
  "Artificial intelligence & robotics",
  "Systems administration",
  "Digital marketing",
];

const CourseCards = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [currentPage, setCurrentPage] = React.useState(1);
  const coursesPerPage = 2;

  // Filter courses by category
  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  return (
    <div className="flex">
      <SyllabusSidebar
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Syllabus</h1>

          {/* Course Cards */}
          <div className="space-y-6 mb-8">
            {currentCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full mb-2">
                        {course.price}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                    </div>
                    <button className="text-lime-400 font-semibold hover:text-lime-500">
                      View more
                    </button>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{course.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{course.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
