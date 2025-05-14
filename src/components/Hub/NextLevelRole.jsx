import React from "react";
import Image from "next/image";

const NextLevelRole = () => {
  const topRoles = [
    "AI \nSOFTWARE \nENGINEER",
    "ROBOTICS \nENGINEER \n(AI/ML FOCUS)",
    "DATA \nSCIENTIST",
    "AI \nCONSULTANT",
  ];

  const bottomRoles = [
    "AI \nRESEARCH \nSCIENTIST",
    "DEEP \nLEARNING \nENGINEER",
    "NLP \nENGINEER",
    "AI ETHICIST",
    "AUTONOMOUS \nSYSTEMS ENGINEER",
  ];

  return (
    <div className="bg-white relative w-full overflow-hidden bg-[url('/CareerDemand_Home-mob-bg.svg')] lg:bg-[url('/CareerDemand_Home-bg.svg')] bg-no-repeat bg-cover bg-center min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="">
          {/* SVG Elements - Positioned Behind Cards */}
          <Image
            src="/elements/CareerStarElement_Home.svg"
            alt="Top SVG"
            width={100}
            height={100}
            className="absolute top-12 right-10 lg:top-9 lg:right-2/6 w-6 h-16 lg:w-10 lg:h-24 z-0"
          />
          <Image
            src="/elements/PlanetElement_Home.svg"
            alt="Middle Left SVG"
            width={100}
            height={100}
            className="absolute top-80 -left-14 lg:top-1/2 lg:-left-10 transform -translate-y-1/2 w-48 h-48 lg:w-56 lg:h-56 z-0"
          />
          <Image
            src="/elements/NextLevelElement_Home.svg"
            alt="Middle Right SVG"
            width={100}
            height={100}
            className="absolute -bottom-44 lg:top-80 right-0 transform translate-x-1/4 -translate-y-1/2 w-72 h-72 lg:w-[30rem] lg:h-[30rem] z-0"
          />
          <Image
            src="/elements/CareerStarElement_Home.svg"
            alt="Bottom Left SVG"
            width={100}
            height={100}
            className="absolute bottom-36 right-16 lg:bottom-28 lg:left-10 w-6 h-6 lg:w-8 lg:h-7 z-0"
          />
        </div>

        {/* Main Title */}
        <h2 className="text-center text-white text-2xl md:text-4xl font-bold mb-16">
          NEXT-LEVEL ROLES
        </h2>

        {/* Top Row Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 px-4 lg:px-44 relative z-10">
          {topRoles.map((role, index) => (
            <div
              key={index}
              className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center relative z-10"
            >
              <p className="text-[#06071B] font-extrabold break-words leading-snug whitespace-pre-line">
                {role}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Title */}
        <h3 className="text-center text-white text-2xl md:text-3xl font-bold mb-12 pt-8">
          GO BIG WITH IMPACT
        </h3>

        {/* Bottom Row Cards - Mobile View */}
        <div className="grid grid-cols-2 gap-6 px-4 lg:hidden relative z-10">
          {bottomRoles.slice(0, 4).map((role, index) => (
            <div
              key={index}
              className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center"
            >
              <p className="text-[#06071B] font-extrabold break-words leading-snug whitespace-pre-line">
                {role}
              </p>
            </div>
          ))}
        </div>
        {bottomRoles.length === 5 && (
          <div className="flex justify-center mt-6 px-4 lg:hidden relative z-10">
            <div className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center w-full max-w-[200px]">
              <p className="text-[#06071B] font-extrabold break-words leading-snug whitespace-pre-line">
                {bottomRoles[4]}
              </p>
            </div>
          </div>
        )}

        {/* Bottom Row Cards - Desktop View */}
        <div className="hidden lg:grid grid-cols-5 gap-6 px-20 relative z-10">
          {bottomRoles.map((role, index) => (
            <div
              key={index}
              className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center"
            >
              <p className="text-[#06071B] font-extrabold break-words leading-snug whitespace-pre-line">
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextLevelRole;
