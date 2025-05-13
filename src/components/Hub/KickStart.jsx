import React from "react";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    image: "/MachineLearning_Home.png",
    title: "Machine Learning\nEngineer",
  },
  {
    id: 2,
    image: "/AiSoftware_Home.png",
    title: "AI Software\nEngineer",
  },
  {
    id: 3,
    image: "/DA_Home.png",
    title: "Data Analyst\n(AI/ML Focus)",
  },
  {
    id: 4,
    image: "/AiHealthcare_Home.png",
    title: "AI Engineer\nin Healthcare",
  },
  {
    id: 5,
    image: "/AiSoftware_Home.png",
    title: "Speech Recognition\nEngineer",
  },
];

const KickStart = () => {
  return (
    <div className="bg-[#EADAFF] p-3 lg:p-8 ">
      <h1 className="lg:hidden text-center text-[#2B2038] text-4xl font-extrabold pb-16 pt-9 leading-tight">
        Kickstart <br /> Your Career
      </h1>
      <h1 className="hidden lg:block text-center text-[#2B2038] text-3xl lg:text-6xl font-extrabold lg:pb-16 pt-9 leading-tight">
        Kickstart Your Career
      </h1>

      <div className="overflow-x-auto">
        <div className="flex gap-8 w-max pr-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="w-[320px] lg:w-[350px] h-[400px] lg:h-[440px] bg-[#2B2038] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 flex flex-col items-center justify-start p-6"
            >
              <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={350}
                  height={220}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              <h3 className="text-white font-bold text-center text-base lg:text-2xl mt-8 uppercase leading-snug whitespace-pre-line">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KickStart;
