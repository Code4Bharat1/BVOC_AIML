'use client'
import React from "react";

// Define the card values as constants inside the component
const card1 = {
  title: "Noteworthy technology acquisitions 2021",
  description:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  image: "/docs/images/blog/image-1.jpg",
};

const card2 = {
  title: "The future of AI in healthcare",
  description: "Exploring the advancements in AI technologies for healthcare.",
  image: "/docs/images/blog/image-2.jpg",
};

const card3 = {
  title: "The role of blockchain in finance",
  description: "A deep dive into blockchain technology in the financial sector.",
  image: "/docs/images/blog/image-3.jpg",
};

const card4 = {
  title: "Cloud computing trends 2022",
  description: "Examining the latest trends in cloud computing for 2022.",
  image: "/docs/images/blog/image-4.jpg",
};

const card5 = {
  title: "Artificial Intelligence in everyday life",
  description: "How AI is making its way into our daily routines and devices.",
  image: "/docs/images/blog/image-5.jpg",
};

const card6 = {
  title: "Cybersecurity in 2021: Challenges and solutions",
  description: "An overview of cybersecurity challenges faced in 2021 and their solutions.",
  image: "/docs/images/blog/image-6.jpg",
};

const SemesterCards = () => {
  // Declaring a function before the return
  const handleDownload = () => {
    alert("Download Started"); // Replace this with actual download logic
  };

  // Data is now defined within this component
  const data = [card1, card2, card3, card4, card5, card6];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
  {data.map((item, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto"
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
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Download
        </button>
      </div>
      <div className="p-5 md:w-1/2 flex justify-center">
        <img className="rounded-lg" src={item.image} alt={item.title} />
      </div>
    </div>
  ))}
</div>


    
  );
};

export default SemesterCards;
