import React from "react";
import Image from "next/image";
import { IoMdPlay } from "react-icons/io";

const AdmissionCard = () => {
  return (
    <div className="flex w-full justify-center items-center py-6 lg:py-10 px-4">
      <div className="relative lg:py-16 border border-white bg-[#2F1C48] text-white text-center rounded-2xl p-8 lg:p-10 w-[90%]">
        {/* Decorative SVGs */}
        <Image
          src="/elements/EllipseElemens_Home.svg"
          alt="Ellipse"
          width={80}
          height={80}
          className="absolute top-48 lg:bottom-30 w-14 lg:w-30 left-0"
        />

        <Image
          src="/elements/RocketElement_Home.svg"
          alt="Rocket"
          width={60}
          height={60}
          className="absolute top-60 right-5 lg:bottom-44 lg:left-64 w-10 lg:w-20" 
        />

        <Image
          src="/elements/AdmissionRobot_Home.svg"
          alt="Robot"
          width={140}
          height={140}
          className="absolute bottom-0 right-0 w-44 lg:w-lg"
        />

        {/* Text Content */}
        <h2 className="text-2xl lg:text-5xl font-bold mb-6">
          Admissions Now Open!
        </h2>
        <p className="hidden md:block text-base lg:text-3xl font-extralight mb-16 lg:leading-10">
          Step into the future with a NAAC A++ Accredited program and gain the<br />
          edge with a UGC-approved B.Voc course in AI & ML—crafted to prepare<br />
          you for the real world, not just a classroom.
        </p>
        <p className="md:hidden text-base lg:text-3xl font-extralight mb-16 lg:leading-10">
          Step into the future with a NAAC A++ Accredited program and gain the
          edge with a UGC-approved B.Voc course in AI & ML—crafted to prepare
          you for the real world, not just a classroom.
        </p>


        <h3 className="hidden md:block text-xl lg:text-4xl font-bold mb-6">
          A Unique Blend of Industry & Academia
        </h3>

        {/* mobile text */}
        <h3 className="md:hidden text-2xl font-bold mb-6">
          A Unique Blend of <br /> 
          Industry & Academia
        </h3>
        <p className="md:hidden block text-base lg:text-3xl font-extralight mb-6 lg:leading-10">
          Join a course that goes beyond theory. Experience practical, hands-on
          learning in collaboration with top industry leaders.
        </p>
        <p className="hidden md:block text-base lg:text-3xl font-extralight mb-6 leading-10">
          Join a course that goes beyond theory. <br />
          Experience practical, hands-on learning <br />
          in collaboration with top industry <br />
          leaders.
        </p>

        {/* Enroll Button */}
        <button className="bg-[#EADAFF] text-[#AC6CFF] font-semibold mb-24 lg:mb-4 py-2.5 lg:py-3 px-3 lg:px-10 rounded-full transition-transform hover:scale-105 flex items-center space-x-2 mx-auto">
          <IoMdPlay />
          <span>Enroll Now</span>
        </button>
      </div>
    </div>
  );
};

export default AdmissionCard;
