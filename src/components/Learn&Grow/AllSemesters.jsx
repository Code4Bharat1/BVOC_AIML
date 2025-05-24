"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdFileDownload } from "react-icons/md";

const AllSemesters = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleDownload = (pdfPath, filename) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* mobile view */}
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
            onClick={() => handleDownload("/docs/sem1.pdf", "semester-1.pdf")}
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
            onClick={() => handleDownload("/docs/sem2.pdf", "semester-2.pdf")}
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
            onClick={() => handleDownload("/docs/sem3.pdf", "semester-3.pdf")}
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
            onClick={() => handleDownload("/docs/sem4.pdf", "semester-4.pdf")}
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
            onClick={() => handleDownload("/docs/sem5.pdf", "semester-5.pdf")}
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
            onClick={() => handleDownload("/docs/sem6.pdf", "semester-6.pdf")}
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
    </div>
  );
};

export default AllSemesters;