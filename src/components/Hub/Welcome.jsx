import React from "react";
import Image from "next/image";
import { IoMdPlay } from "react-icons/io";

const Welcome = () => {
  return (
    <section className="bg-[#1712331B] relative lg:mt-6 py-16 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
      {/* Decorative Stars SVGs */}
      <Image
        src="/elements/StarsElement.svg"
        alt="Star Top Right"
        width={50}
        height={50}
        className="absolute top-4 left-4 w-8 h-8 lg:w-12 lg:h-7" //this is the top right star
      />
      <Image
        src="/elements/StarsElement.svg"
        alt="Star Bottom Right"
        width={50}
        height={50}
        className="absolute bottom-28 right-20 lg:bottom-8 lg:right-52 w-8 h-6 lg:w-12 lg:h-12" //this is the bottom right star
      />
      <Image
        src="/elements/StarsElement.svg"
        alt="Star Bottom Left"
        width={50}
        height={50}
        className="absolute right-6 top-40 lg:bottom-28 lg:left-72 w-8 h-5 lg:w-12 lg:h-8"
      />

      {/* Text Section */}
      <div className="relative lg:w-1/2 text-center lg:text-left">
        {/* SVG Element Positioned Above Heading */}
        <div className="absolute top-5 right-10 lg:left-1/2 lg:top-6 transform -translate-x-1/2 lg:-translate-x-0 z-10">
          <Image
            src="/elements/HeroElement.svg"
            alt="Decorative Element"
            width={80}
            height={30}
            className="w-8 h-4 lg:w-16 lg:h-8"
          />
        </div>

        <h1 className="text-white text-4xl lg:text-6xl font-bold mb-6 mt-6 lg:mt-14">
          Welcome to <br />
          the Future of <br />
          <span className="text-[#AC6CFF]">Learning!</span>
        </h1>

        <p className="hidden lg:block text-[28px] text-white mb-8">
          We’re excited to introduce a game-changing partnership between{" "}
          <span className="text-[#AC6CFF]">Nexcore Alliance LLP</span> and{" "}
          <span className="text-[#AC6CFF]">Guru Kashi University (GKU)</span>—an
          alliance designed to bring you the{" "}
          <span className="text-[#AC6CFF]">B.Voc (Bachelor of Vocation)</span>{" "}
          degree programs that fuse industry expertise with academic excellence.
        </p>
        <p className="lg:hidden text-lg text-white mb-8">
          We’re excited to introduce a game-changing partnership between{" "}
          <span className="text-[#AC6CFF]">Nexcore Alliance LLP</span> and{" "}
          <span className="text-[#AC6CFF]">Guru Kashi University (GKU)</span>—an
          alliance designed to bring you the{" "}
          <span className="text-[#AC6CFF]">B.Voc (Bachelor of Vocation)</span>{" "}
          degree programs that fuse industry expertise with academic excellence.
        </p>

        {/* Enroll Button */}
        <button className="bg-[#EADAFF] text-[#AC6CFF] font-semibold py-4 px-5 lg:px-10 rounded-full transition-transform hover:scale-105 flex items-center space-x-2 mx-auto">
          <IoMdPlay />
          <span>Enroll Now</span>
        </button>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block md:w-1/2">
        <Image
          src="/elements/AI_Element_Home.svg"
          alt="Hero Illustration"
          width={200}
          height={150}
          className="mx-auto"  // Center the image in its container
        />
      </div>
    </section>
  );
};

export default Welcome;
