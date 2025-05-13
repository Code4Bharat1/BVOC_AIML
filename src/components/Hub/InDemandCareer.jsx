// components/InDemandCareer.jsx

import Image from "next/image";

const InDemandCareer = () => {
  return (
    <>
      <h2 className="hidden md:block text-white text-center font-bold text-5xl my-16">
        In-Demand Careers in AI & Emerging Tech
      </h2>
      <section className="hidden md:block relative bg-white bg-[url('/CareerDemand_Home-bg.svg')] bg-cover bg-center py-16 px-4">
        <div className="text-center ">
          <div className="flex justify-center">
            <Image
              src="/Career-demand-imgs.svg"
              alt="In-Demand Careers"
              width={600} // Adjust width as needed
              height={400} // Adjust height as needed
              className="mx-auto w-7xl"
            />
          </div>
        </div>

        {/* Decorative Stars - adjust positioning as needed */}
        <Image
          src="/elements/StarsElementWhite.svg"
          alt="Stars Decoration Top Left"
          width={50}
          height={50}
          className="absolute top-1/3 left-4"
        />
        <Image
          src="/elements/StarsElementWhite.svg"
          alt="Stars Decoration Top Right"
          width={38}
          height={50}
          className="absolute top-20 right-16"
        />
        <Image
          src="/elements/StarsElement.svg"
          alt="Stars Decoration Bottom Left"
          width={40}
          height={50}
          className="absolute bottom-6 left-40"
        />
        <Image
          src="/elements/StarsElementWhite.svg"
          alt="Stars Decoration Bottom Right"
          width={35}
          height={50}
          className="absolute bottom-28 right-[35%]"
        />
      </section>
    </>
  );
};

export default InDemandCareer;
