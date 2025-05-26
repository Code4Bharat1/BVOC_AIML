"use client";

// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function /SelectionPolicy/SelectionPolicy() {
//   const [loaded, setLoaded] = useState(false);
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 0,
//     height: typeof window !== 'undefined' ? window.innerHeight : 0,
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener('resize', handleResize);
//     setLoaded(true);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   if (!loaded) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-800">
//         <div className="text-white text-xl">Loading selection policy...</div>
//       </div>
//     );
//   }

//   // Dynamically calculate image size
//   const imageMaxWidth = Math.min(1000, windowSize.width * 0.9);

//   return (
//     <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center px-4 py-8">
//       {/* Header */}
//       <div className="text-center mb-6 max-w-4xl">
//         <h1 className="text-2xl md:text-5xl font-bold text-white my-8">
//           Internal Selection Process Policy for <br />
//           <span className="text-[#A33DFF]"> B.Voc</span> in <span className="text-[#A33DFF]"> Artificial Intelligence</span> <br /> and <span className="text-[#A33DFF]">Machine Learning</span>
//         </h1>
//       </div>

//       {/* Centered and Responsive Image */}
//       <div
//         className="flex justify-center items-center"
//         style={{ width: imageMaxWidth }}
//       >
//         <Image
//           src="/selection-policy/SELECTION-POLICY.svg"
//           alt="Selection Policy Diagram"
//           width={imageMaxWidth}
//           height={imageMaxWidth * 0.75} // assuming 4:3 aspect ratio
//           className="w-full h-auto"
//           priority
//         />
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SelectionPolicy = () => {
  // Array of policy items
  const policyItems = [
    {
      id: 1,
      heading: "1. Objective",
      image:
        "/SelectionPolicy/SelectionPolicy1.png",
      description:
        "To establish a transparent, fair, and merit-based internal selection process for admitting students into the B.Voc in AI and ML program, ensuring compliance with academic and government regulations.",
    },
    {
      id: 2,
      heading: "2. Application Submission",
      image:
        "/SelectionPolicy/SelectionPolicy2.png",
      description:
        "Candidates must submit a duly filled application form along with all required documents by the specified deadline.Incomplete applications or those without valid documents will not be considered.",
    },
    {
      id: 3,
      heading: "3. Verification of Eligibility",
      image:
        "/SelectionPolicy/SelectionPolicy3.png",
      description:
        "All applications will be screened for minimum eligibility criteria (educational qualification, minimum marks, age, etc.) as per the Admission Eligibility Criteria. Applications not meeting eligibility standards will be rejected outright",
    },
    {
      id: 4,
      heading: "4. Evaluation Criteria",
      image:
        "/SelectionPolicy/SelectionPolicy4.png",
      description:
        "Candidates who meet eligibility will be evaluated based on the following: Academic Performance: 10+2 marks percentage or equivalent (weightage 70%). Entrance Test (if applicable): A written or online test assessing basic knowledge related to Mathematics, Logical Reasoning, and English (weightage 20%). Personal Interview: To evaluate candidate's motivation, communication skills, and interest in AI & ML (weightage 10%). Note: The entrance test and interview may be waived off based on the merit of 10+2 scores or as per policy.",
    },
    {
      id: 5,
      heading: "5. Merit List Preparation",
      image:
        "/SelectionPolicy/SelectionPolicy5.png",
      description:
        "A consolidated score will be calculated based on the evaluation criteria. Candidates will be ranked according to their total scores. Separate merit lists will be prepared for General and Reserved category candidates.",
    },
    {
      id: 6,
      heading: "6. Selection and Admission Offer",
      image:
        "/SelectionPolicy/SelectionPolicy6.png",
      description:
        "To establish a transparent, fair, and merit-based internal selection process for admitting students into the B.Voc in AI and ML program, ensuring compliance with academic and government regulations.",
    },
    {
      id: 7,
      heading: "7. Waitlist and Vacancies",
      image:
        "/SelectionPolicy/SelectionPolicy7.png",
      description:
        "Candidates not initially selected may be placed on a waitlist. Waitlisted candidates will be offered admission if seats become available. The waitlist will be valid for the duration of the admission cycle only.",
    },
    {
      id: 8,
      heading: "8. Object Reservation and Relaxationtive",
      image:
        "/SelectionPolicy/SelectionPolicy8.png",
      description:
        "Reservation for SC, ST, OBC, and PwD candidates will be implemented as per government norms. Relaxation in eligibility criteria and selection process will be applied accordingly.",
    },
    {
      id: 9,
      heading: "9. Final Authority",
      image:
        "/SelectionPolicy/SelectionPolicy9.png",
      description:
        "The Admissions Committee reserves the right to modify, relax, or waive any clause of the selection policy in exceptional cases. All decisions of the Admissions Committee shall be final and binding.",
    },
  ];

  // Check if there's an odd number of items
  const hasOddItems = policyItems.length % 2 !== 0;

  return (
    <div className="py-12 px-4 bg-gray-900 min-h-screen">
      <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-12 tracking-tight">
        Internal Selection Process Policy <br />
        <span className="text-[#AC6CFF]">B.Voc</span> in{" "}
        <span className="text-[#AC6CFF]">Artificial Intelligence</span>
        <br />
        and <span className="text-[#AC6CFF]">Machine Learning</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-12 justify-items-center p-6 max-w-7xl mx-auto">
        {policyItems.map((item, index) => (
          <div
            key={item.id}
            className={
              hasOddItems && index === policyItems.length - 1
                ? "lg:col-span-2 flex justify-center w-full"
                : "w-full flex justify-center"
            }
          >
            <PolicyCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Card component with read more functionality
const PolicyCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className="w-full max-w-sm bg-[#D9D9D9] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
      style={{ height: expanded ? "auto" : "490px" }}
    >
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800">{item.heading}</h3>
        <hr className="border-gray-400 my-2" />

        <div className="mb-4 mt-3">
          <img
            src={item.image}
            alt={item.heading}
            className="w-full h-56 object-cover rounded-2xl"
          />
        </div>

        <div
          className={`relative ${expanded ? "" : "max-h-28 overflow-hidden"}`}
        >
          <p className="text-gray-700">{item.description}</p>

          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#D9D9D9] to-transparent"></div>
          )}
        </div>

        <button
          onClick={toggleExpand}
          className="mt-2 flex items-center text-[#AC6CFF] font-medium hover:text-purple-800 transition-colors"
        >
          {expanded ? (
            <>
              Read less <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Read more <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SelectionPolicy;
