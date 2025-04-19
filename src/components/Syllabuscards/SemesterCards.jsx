"use client";
import React from "react";

const card1 = {
  title: "Noteworthy technology acquisitions 2021",
  description:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  image: "pdf.png",
};

const card2 = {
  title: "The future of AI in healthcare",
  description: "Exploring the advancements in AI technologies for healthcare.",
  image: "pdf.png",
};

const card3 = {
  title: "The role of blockchain in finance",
  description:
    "A deep dive into blockchain technology in the financial sector.",
  image: "pdf.png",
};

const card4 = {
  title: "Cloud computing trends 2022",
  description: "Examining the latest trends in cloud computing for 2022.",
  image: "pdf.png",
};

const card5 = {
  title: "Artificial Intelligence in everyday life",
  description: "How AI is making its way into our daily routines and devices.",
  image: "pdf.png",
};

const card6 = {
  title: "Cybersecurity in 2021: Challenges and solutions",
  description:
    "An overview of cybersecurity challenges faced in 2021 and their solutions.",
  image: "pdf.png",
};

const SemesterCards = () => {
  const handleDownload = () => {
    alert("Download Started");
  };

  const data = [card1, card2, card3, card4, card5, card6];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-white border border-transparent rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:border-gradient-card dark:bg-gray-800 dark:border-gray-700 animate-fadeInUp"
        >
          <div className="p-5 md:w-1/2">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-4 py-2 font-semibold text-white bg-lime-400 bg-gradient-to-r rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <span className="text-white">Download</span>
            </button>
          </div>
          <div className="p-5 md:w-1/2 flex justify-center items-center">
            <img
              className="rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"
              src={item.image}
              alt={item.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SemesterCards;
