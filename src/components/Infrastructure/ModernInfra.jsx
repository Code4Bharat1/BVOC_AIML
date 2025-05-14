import React, { useState } from 'react';
import Image from 'next/image';

const ModernInfra = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {/* Desktop View */}
      <div
        className={`hidden lg:flex min-h-screen items-center justify-center transition-all duration-500 ease-in-out ${
          isHovered
            ? 'bg-gradient-to-b from-[#3A0B57] via-[#3D0B67] to-[#160E6E]'
            : 'bg-gradient-to-b from-[#160E6E] via-[#3D0B67] to-[#3A0B57]'
        }`}
      >
        <Image
          src="/ModernInfra.svg"
          alt="Modern Infrastructure"
          width={700}
          height={700}
          className="max-w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
          priority
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      {/* Mobile View */}
      <div className="lg:hidden min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#160E6E] via-[#3D0B67] via-50% to-[#451053] to-75% bg-[#3A0B57] px-1">
          <p className="text-white text-3xl text-center my-10">Modern <span className="text-[#AC6CFF]"> Infrastructure: </span><br /> Experience Our Campus</p>
        <div className="flex items-center justify-center mb-4">
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