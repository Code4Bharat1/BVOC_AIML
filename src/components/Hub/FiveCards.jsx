'use client';
import React, { useState } from 'react';
import { CircleChevronDown, CircleChevronUp } from 'lucide-react';

const cardData = [
  {
    title: 'Strategic \nPartnerships \nwith Industry \nGiants',
    content:
      'We’ve joined forces with world-renowned tech companies like Microsoft, Google, and Amazon, offering co-branded certifications upon completion of your course. This means you’re not just gaining a degree—you’re earning credentials that are recognized globally.',
  },
  {
    title: 'Hands-on \nLearning \nwith Real-\nWorld Impact',
    content:
      'Gain practical experience through projects, internships, and industry case studies. This helps students apply their knowledge to solve real-world challenges.',
  },
  {
    title: 'Career \nGuidance \nand \nMentorship',
    content:
      'Our experienced mentors and career advisors guide you through your academic and professional journey, providing personalized support and growth strategies.',
  },
  {
    title: 'NAAC A++ \nAccreditation – \nExcellence \nRecognized',
    content:
      'Achieving NAAC A++ accreditation showcases our unwavering commitment to academic excellence and continuous improvement.',
  },
  {
    title: 'Empowering \nIndia’s Digital \nFuture',
    content:
      'Our curriculum is built to equip students with digital-first skills, driving innovation and transformation across India’s tech ecosystem.',
  },
];

const FiveCards = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#2F1C48] text-white p-6 lg:p-12 shadow-sm shadow-white  m-10 rounded-3xl">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 text-center">
          {cardData.map((card, index) => (
            <div key={index} className="flex flex-col items-center h-full">
              {/* Card Box */}
              <div className="bg-[#AC6CFF] rounded-3xl p-4 w-[200px] lg:w-full shadow-md h-full">
                <h3 className="text-lg font-semibold">
                  {card.title.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </h3>
              </div>

              {/* Mobile Arrow */}
              <div className="block lg:hidden mt-2">
                <button onClick={() => toggleCard(index)}>
                  {openCard === index ? (
                    <CircleChevronUp size={32} />
                  ) : (
                    <CircleChevronDown size={32} />
                  )}
                </button>
              </div>

              {/* Mobile Expanded Content */}
              {openCard === index && (
                <div className="block lg:hidden mt-3 transition-all duration-500 ease-in-out p-4 rounded-xl text-white w-full">
                  <p className="text-base">{card.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Large Screen Arrow Row */}
        <div className="hidden lg:flex justify-around mt-4">
          {cardData.map((_, index) => (
            <button key={index} onClick={() => toggleCard(index)}>
              {openCard === index ? (
                <CircleChevronUp size={32} />
              ) : (
                <CircleChevronDown size={32} />
              )}
            </button>
          ))}
        </div>

        {/* Large Screen Expanded Content */}
        {openCard !== null && (
          <div className="hidden lg:block mt-6 transition-all duration-500 ease-in-out p-6 rounded-xl text-center text-white w-full">
            <p className="text-lg">{cardData[openCard].content}</p>
          </div>
        )}
      </div>
      </>
  );
};

export default FiveCards;
