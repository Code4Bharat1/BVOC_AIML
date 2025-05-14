import React from 'react';
import { ChevronRight } from 'lucide-react';

const ShapeTheFuture = () => {
  return (
    <div className="p-5 lg:p-0 bg-[#181234] relative min-h-screen flex justify-center items-center">
      <img
        src="/elements/ShapeFutureRobo_Home.svg"
        alt="Shape the Future"
        className="absolute bottom-0 -left-14 lg:left-0 w-72 h-[17rem] lg:w-[30rem] lg:h-[50rem]"
      />

      {/* Card */}
      <div className="bg-[#3F1F55] rounded-xl p-8 text-center max-w-7xl w-full shadow-lg">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#fff] mb-4 py-6">
          Ready To Shape The Future?
        </h2>
        <p className="text-lg lg:text-3xl text-[#fff] mb-6 lg:px-28">
          The world needs innovators, problem-solvers, and tech leaders. Our program is designed to equip you with the skills and experience to jump right into the heart of the AI & ML revolution. Your future starts now— and we’re here to guide you every step of the way.
        </p>
        <button className="bg-[#EADAFF] text-[#AC6CFF] mt-16 mb-12 lg:my-6 rounded-full px-8 py-3 flex items-center justify-center gap-2 mx-auto">
          Get Started
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ShapeTheFuture;
