'use client';
import React from 'react';
import Image from 'next/image';

const NextLevelRole = () => {
  const topRoles = [
    'AI \nSOFTWARE \nENGINEER',
    'ROBOTICS \nENGINEER \n(AI/ML FOCUS)',
    'DATA \nSCIENTIST',
    'AI \nCONSULTANT',
  ];

  const bottomRoles = [
    'AI \nRESEARCH \nSCIENTIST',
    'DEEP \nLEARNING \nENGINEER',
    'NLP \nENGINEER',
    'AI ETHICIST',
    'AUTONOMOUS \nSYSTEMS ENGINEER',
  ];

  // Split roles roughly in half for two columns
  const splitArray = (arr) => {
    const middle = Math.ceil(arr.length / 2);
    return [arr.slice(0, middle), arr.slice(middle)];
  };

  const [topLeft, topRight] = splitArray(topRoles);
  const [bottomLeft, bottomRight] = splitArray(bottomRoles);

  return (
    <div className="bg-white relative w-full overflow-hidden bg-[url('/CareerDemand_Home-mob-bg.svg')] lg:bg-[url('/CareerDemand_Home-bg.svg')] bg-no-repeat bg-cover bg-center min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* SVG Elements */}
        <Image
          src="/elements/CareerStarElement_Home.svg"
          alt="Top Star"
          width={100}
          height={100}
          className="absolute top-12 right-10 lg:top-9 lg:right-2/6 w-6 h-16 lg:w-10 lg:h-24 z-0"
        />
        <Image
          src="/elements/PlanetElement_Home.svg"
          alt="Planet Element"
          width={100}
          height={100}
          className="absolute top-[420px] -left-14 lg:top-1/2 lg:-left-10 transform -translate-y-1/2 w-48 h-48 lg:w-56 lg:h-56 z-10 lg:z-0"
        />
        <Image
          src="/elements/NextLevelElement_Home.svg"
          alt="Next Level BG"
          width={100}
          height={100}
          className="absolute -bottom-44 lg:top-80 right-0 transform translate-x-1/4 -translate-y-1/2 w-72 h-72 lg:w-[30rem] lg:h-[30rem] z-0"
        />
        <Image
          src="/elements/CareerStarElement_Home.svg"
          alt="Bottom Star"
          width={100}
          height={100}
          className="absolute bottom-36 right-16 lg:bottom-28 lg:left-10 w-6 h-6 lg:w-8 lg:h-7 z-0"
        />

        {/* Title */}
        <h2 className="text-center text-white text-2xl md:text-4xl font-bold mb-16 z-10 relative">
          NEXT-LEVEL ROLES
        </h2>

        {/* MOBILE: Top Section */}
        <div className="lg:hidden mb-16">
          <div className="flex gap-6 px-4">
            {/* Left column */}
            <div className="flex flex-col gap-6 flex-1">
              {topLeft.map((role, i) => (
                <div
                  key={i}
                  style={{ zIndex: 20 - i }} // dynamic z-index for stacking order
                  className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center relative"
                >
                  <p className="text-[#06071B] font-extrabold whitespace-pre-line leading-snug break-words">
                    {role}
                  </p>
                </div>
              ))}
            </div>
            {/* Right column with padding top */}
            <div className="flex flex-col gap-6 flex-1 pt-10">
              {topRight.map((role, i) => (
                <div
                  key={i}
                  style={{ zIndex: 10 - i }} // different range for right column
                  className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center relative"
                >
                  <p className="text-[#06071B] font-extrabold whitespace-pre-line leading-snug break-words">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE: Bottom Section */}
        <div className="lg:hidden pb-20">
          <h3 className="text-center text-white text-2xl font-bold mb-8 relative z-10 ">
            GO BIG WITH IMPACT
          </h3>
          <div className="flex gap-6 px-4">
            {/* Left column */}
            <div className="flex flex-col gap-6 flex-1">
              {bottomLeft.map((role, i) => (
                <div
                  key={i}
                  style={{ zIndex: 30 - i }}
                  className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center relative"
                >
                  <p className="text-[#06071B] font-extrabold whitespace-pre-line leading-snug break-words">
                    {role}
                  </p>
                </div>
              ))}
            </div>
            {/* Right column with padding top */}
            <div className="flex flex-col gap-6 flex-1 pt-10">
              {bottomRight.map((role, i) => (
                <div
                  key={i}
                  style={{ zIndex: 20 - i }}
                  className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center relative"
                >
                  <p className="text-[#06071B] font-extrabold whitespace-pre-line leading-snug break-words">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP: Keep original layout */}
        <div className="hidden lg:block">
          {/* Top Roles */}
          <div className="grid grid-cols-4 gap-6 mb-16 px-44 relative z-20">
            {topRoles.map((role, index) => (
              <div
                key={index}
                className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center z-20"
              >
                <p className="text-[#06071B] font-extrabold whitespace-pre-line leading-snug break-words">
                  {role}
                </p>
              </div>
            ))}
          </div>

          {/* Impact Title */}
          <h3 className="text-center text-white text-2xl md:text-3xl font-bold mb-12 pt-8 z-10 relative">
            GO BIG WITH IMPACT
          </h3>

          {/* Bottom Roles */}
          <div className="grid grid-cols-5 gap-6 px-20 relative z-10 mt-12">
            {bottomRoles.map((role, index) => (
              <div
                key={index}
                className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center"
              >
                <p className="text-[#06071B] font-extrabold whitespace-pre-line leading-snug break-words">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextLevelRole;
