import React, { useState } from "react";
import Image from "next/image";

const ModernInfra = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  // Function to handle mouse enter for each section
  const handleMouseEnter = (section) => {
    setHoveredSection(section);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <>
      <div className="modern-desktop bg-gradient-to-b from-[#3A0B57] via-[#3D0B67] to-[#160E6E] py-40">
        <div className="relative w-full max-w-4xl h-[600px] mx-auto">
          {/* Center Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Image
              src="/Modern_infra_main.svg"
              alt="Center"
              width={250}
              height={250}
            />
          </div>
          {/* center text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <p className="text-white text-2xl text-center my-10">
              Modern <br />
              <span className="text-[#AC6CFF]"> Infrastructure: </span>
              <br /> Experience Our <br /> Campus
            </p>
          </div>

          {/* Top Left */}
          <div
            className="absolute top-0 left-30 transform -translate-x-1/4 -translate-y-1/4 transition-all duration-300 ease-in-out cursor-pointer"
            onMouseEnter={() => handleMouseEnter("topLeft")}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`transition-all duration-300 ${
                hoveredSection === "topLeft"
                  ? "filter drop-shadow-lg brightness-150 scale-110 "
                  : ""
              }`}
            >
              <Image
                src="/Modern_infra_1.svg"
                alt="Top Left"
                width={400}
                height={400}
              />
            </div>
            <div className="absolute top-35 left-25">
              <p
                className={`text-white text-3xl text-center my-10 transition-transform duration-300 ${
                  hoveredSection === "topLeft" ? "scale-110 font-bold" : ""
                }`}
              >
                Explore Through <br /> Videos & Photos
              </p>
            </div>
          </div>

          {/* Top Right */}
          <div
            className="absolute top-0 right-30 transform translate-x-1/4 -translate-y-1/4 transition-all duration-300 ease-in-out cursor-pointer"
            onMouseEnter={() => handleMouseEnter("topRight")}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`transition-all duration-300 ${
                hoveredSection === "topRight"
                  ? "filter drop-shadow-lg brightness-150 scale-110"
                  : ""
              }`}
            >
              <Image
                src="/Modern_infra_2.svg"
                alt="Top Right"
                width={400}
                height={400}
              />
            </div>
            <div className="absolute top-35 right-5 -translate-x-16">
              <p
                className={`text-white text-3xl text-center my-10 transition-transform duration-300 ${
                  hoveredSection === "topRight" ? "scale-110 font-bold" : ""
                }`}
              >
                Innovation-Driven <br /> Workspaces
              </p>
            </div>
          </div>

          {/* Bottom Left */}
          <div
            className="absolute bottom-0 left-30 transform -translate-x-1/4 translate-y-1/4 transition-all duration-300 ease-in-out cursor-pointer"
            onMouseEnter={() => handleMouseEnter("bottomLeft")}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`transition-all duration-300 ${
                hoveredSection === "bottomLeft"
                  ? "filter drop-shadow-lg brightness-150 scale-110"
                  : ""
              }`}
            >
              <Image
                src="/Modern_infra_3.svg"
                alt="Bottom Left"
                width={400}
                height={400}
              />
            </div>
            <div className="absolute bottom-35 left-20">
              <p
                className={`text-white text-3xl text-center my-10 transition-transform duration-300 ${
                  hoveredSection === "bottomLeft" ? "scale-110 font-bold" : ""
                }`}
              >
                Dynamic & <br /> Comfortable Spaces
              </p>
            </div>
          </div>

          {/* Bottom Right */}
          <div
            className="absolute bottom-0 right-30 transform translate-x-1/4 translate-y-1/4 transition-all duration-300 ease-in-out cursor-pointer"
            onMouseEnter={() => handleMouseEnter("bottomRight")}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`transition-all duration-300 ${
                hoveredSection === "bottomRight"
                  ? "filter drop-shadow-lg brightness-150 scale-110 font-bold"
                  : ""
              }`}
            >
              <Image
                src="/Modern_infra_4.svg"
                alt="Bottom Right"
                width={400}
                height={400}
              />
            </div>
            <div className="absolute bottom-35 right-15 -translate-x-16">
              <p
                className={`text-white text-3xl text-center my-10 transition-transform duration-300 ${
                  hoveredSection === "bottomRight" ? "scale-110 font-bold" : ""
                }`}
              >
                Cutting-Edge <br /> Technology
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="modern-mobile flex flex-col items-center justify-start pt-6 pb-6 bg-gradient-to-b from-[#160E6E] via-[#3D0B67] via-50% to-[#451053] to-75% bg-[#3A0B57] px-1">
        <p className="text-white text-3xl text-center mb-6">
          Modern <span className="text-[#AC6CFF]"> Infrastructure: </span>
          <br /> Experience Our Campus
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/infrastructure/modernInfrastructure.svg"
            alt="Modern Infrastructure Mobile"
            width={500}
            height={650}
            className="max-w-full h-full"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default ModernInfra;
