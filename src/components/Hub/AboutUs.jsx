import React from "react";  
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      {/* Desktop / Large screen layout */}
      <div className="hidden lg:flex bg-[#AC6CFF] p-8 rounded-lg justify-center px-28">
        <div className="flex justify-between items-center w-full">
          {/* Left Side (Image) */}
          <div className="flex-1">
            <Image
              src="/AboutUs_Home.png"
              alt="About Us Image"
              width={500}
              height={384}
              className="rounded-2xl h-96"
            />
          </div>

          {/* Right Side (Text) */}
          <div className="flex-1 text-[#2F1C48]">
            <h2 className="lg:text-5xl font-extrabold mb-6">About Us</h2>
            <h3 className="lg:text-4xl font-bold text-white mb-1">Our Vision</h3>
            <p className="lg:text-3xl text-white mb-4">Empowering You for the Future</p>
            <p className="text-base lg:text-lg text-white leading-6 lg:leading-8">
              At <span className="text-[#2F1C48] font-bold">Nexcore Alliance LLP</span>, we’re dedicated to shaping India’s next generation of digital leaders by offering cutting-edge programs designed for the real world. In partnership with <span className="text-[#2F1C48] font-bold">Guru Kashi University (GKU)</span>, we bring you a <span className="text-[#2F1C48] font-bold">B.Voc AI & ML</span> program that’s built to make you industry-ready and globally competitive.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile / Default layout */}
      <div className="block lg:hidden bg-[#AC6CFF] p-6 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-[#2F1C48]">About Us</h2>
        <Image
          src="/AboutUs_Home.png"
          alt="About Us Image"
          width={400}
          height={300}
          className="rounded-2xl w-full h-auto"
        />
        <div className="text-[#2F1C48]">
          <h3 className="text-2xl font-bold text-white">Our Vision</h3>
          <p className="text-lg text-white mb-4">Empowering You for the Future</p>
          <p className="text-base text-white leading-6">
            At <span className="text-[#2F1C48] font-bold">Nexcore Alliance LLP</span>, we’re <br /> 
            dedicated to shaping India’s next <br /> 
            generation of digital leaders by offering <br />
            cutting-edge programs designed for <br /> 
            the real world. In partnership with <br />
            <span className="text-[#2F1C48] font-bold">Guru Kashi University (GKU)</span>, we bring <br />
            you a <span className="text-[#2F1C48] font-bold">B.Voc AI & ML</span> program that’s <br />
            built to make you industry-ready and <br /> 
            globally competitive.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
