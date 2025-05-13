import Image from "next/image";

const CareerOpportunities = () => {
  return (
    <section className="z-10 bg-cover lg:h-[600px] bg-center py-16 bg-[url('/CareerOpp-bg_Home-mob.svg')] lg:bg-[url('/CareerOpp-bg_Home.svg')] ">
      <div className="container mx-auto p-8 text-start">
        {/* Heading and Subheading */}
        <div className="mb-7 lg:mb-12 lg:pl-20">
          {/* For mobile */}
          <h1 className="lg:hidden text-3xl text-center font-bold text-[#2B2038]">
            Career & <br />
            Opportunities: <br />
            The Future of Tech <br />
            Starts Here
          </h1>
          <h2 className="lg:hidden text-2xl text-center font-bold text-[#AC6CFF] pt-3">
            Step Into High-Demand <br />
            Careers
          </h2>

          {/* For desktop */}
          <h1 className="hidden lg:block text-6xl font-bold text-[#2B2038]">
            Career & Opportunities: <br />
            The Future of Tech Starts Here
          </h1>
          <h2 className="hidden lg:block text-xl lg:text-4xl font-bold text-[#AC6CFF] pt-8">
            Step Into High-Demand Careers
          </h2>
        </div>

        {/* Mobile Career Grid */}
        <div className="lg:hidden grid grid-cols-2 gap-6 text-center">
          {/* Career Item 1 */}
          <div className="group flex flex-col justify-center items-center w-full max-w-[140px] mx-auto">
            <div className="w-24 h-24 flex justify-center items-center">
              <Image
                src="/career1.svg"
                alt="Career 1"
                width={150}
                height={150}

              />
            </div>
            <p className="mt-4 text-center break-words whitespace-normal text-sm text-black font-bold">
              Adoption
            </p>
          </div>

          {/* Career Item 2 */}
          <div className="group flex flex-col justify-center items-center w-full max-w-[140px] mx-auto">
            <div className="w-24 h-24 flex justify-center items-center">
              <Image
                src="/career2.svg"
                alt="Career 2"
                width={150}
                height={150}

              />
            </div>
            <p className="mt-4 text-center break-words whitespace-normal text-sm text-white font-bold">
              Opportunities
            </p>
          </div>

          {/* Career Item 3 */}
          <div className="group flex flex-col justify-center items-center w-full max-w-[140px] mx-auto">
            <div className="w-24 h-24 flex justify-center items-center">
              <Image
                src="/career3.svg"
                alt="Career 3"
                width={150}
                height={150}

              />
            </div>
            <p className="mt-4 text-center break-words whitespace-normal text-sm text-white font-bold">
              Preparedness
            </p>
          </div>

          {/* Career Item 4 */}
          <div className="group flex flex-col justify-center items-center w-full max-w-[140px] mx-auto">
            <div className="w-24 h-24 flex justify-center items-center">
              <Image
                src="/career4.svg"
                alt="Career 4"
                width={150}
                height={150}

              />
            </div>
            <p className="mt-4 text-center break-words whitespace-normal text-sm text-white font-bold">
              Innovation
            </p>
          </div>

          {/* Career Item 5 */}
          <div className="group flex flex-col justify-center items-center w-full max-w-[140px] mx-auto">
            <div className="w-24 h-24 flex justify-center items-center">
              <Image
                src="/career5.svg"
                alt="Career 5"
                width={150}
                height={150}

              />
            </div>
            <p className="mt-4 text-center break-words whitespace-normal text-sm text-white font-bold">
              Practicality
            </p>
          </div>

          {/* Career Item 6 */}
          <div className="group flex flex-col justify-center items-center w-full max-w-[140px] mx-auto">
            <div className="w-24 h-24 flex justify-center items-center">
              <Image
                src="/career6.svg"
                alt="Career 6"
                width={150}
                height={150}

              />
            </div>
            <p className="mt-4 text-center break-words whitespace-normal text-sm text-white font-bold">
              Integration
            </p>
          </div>
        </div>

        {/* Desktop Career Grid */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-6 lg:pl-16">
          {/* Career Item 1 */}
          <div className="group flex flex-col justify-center items-center transition-transform transform hover:scale-110 w-full max-w-[140px] mx-auto">
            <div className="w-24 h-24 flex justify-center items-center">
              <Image
                src="/career1.svg"
                alt="Career 1"
                width={150}
                height={150}
                className="lg:transition-transform lg:transform lg:group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-center break-words whitespace-normal text-sm text-black lg:text-black lg:text-2xl font-bold">
              Adoption
            </p>
          </div>

          {/* Career Item 2 */}
          <div className="group flex flex-col justify-center items-center transition-transform transform hover:scale-110 w-full max-w-[140px] mx-auto">
            <div className="w-24 h-24 flex justify-center items-center">
              <Image
                src="/career2.svg"
                alt="Career 2"
                width={150}
                height={150}
                className="lg:transition-transform lg:transform lg:group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-center break-words whitespace-normal text-sm text-white lg:text-black lg:text-2xl font-bold">
              Opportunities
            </p>
          </div>

          {/* Career Item 3 */}
          <div className="group flex flex-col justify-center items-center transition-transform transform hover:scale-110 w-full max-w-[140px] mx-auto">
            <div className="w-24 h-24 flex justify-center items-center">
              <Image
                src="/career3.svg"
                alt="Career 3"
                width={150}
                height={150}
                className="lg:transition-transform lg:transform lg:group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-center break-words whitespace-normal text-sm text-white lg:text-black lg:text-2xl font-bold">
              Preparedness
            </p>
          </div>

          {/* Career Item 4 */}
          <div className="group flex flex-col justify-center items-center transition-transform transform hover:scale-110 w-full max-w-[140px] mx-auto">
            <div className="w-24 h-24 flex justify-center items-center">
              <Image
                src="/career4.svg"
                alt="Career 4"
                width={150}
                height={150}
                className="lg:transition-transform lg:transform lg:group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-center break-words whitespace-normal text-sm text-white lg:text-white lg:text-2xl font-bold">
              Innovation
            </p>
          </div>

          {/* Career Item 5 */}
          <div className="group flex flex-col justify-center items-center transition-transform transform hover:scale-110 w-full max-w-[140px] mx-auto">
            <div className="w-24 h-24 flex justify-center items-center">
              <Image
                src="/career5.svg"
                alt="Career 5"
                width={150}
                height={150}
                className="lg:transition-transform lg:transform lg:group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-center break-words whitespace-normal text-sm text-white lg:text-white lg:text-2xl font-bold">
              Practicality
            </p>
          </div>

          {/* Career Item 6 */}
          <div className="group flex flex-col justify-center items-center transition-transform transform hover:scale-110 w-full max-w-[140px] mx-auto">
            <div className="w-24 h-24 flex justify-center items-center">
              <Image
                src="/career6.svg"
                alt="Career 6"
                width={150}
                height={150}
                className="lg:transition-transform lg:transform lg:group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-center break-words whitespace-normal text-sm text-white lg:text-white lg:text-2xl font-bold">
              Integration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;
