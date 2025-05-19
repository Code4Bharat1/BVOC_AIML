import Image from "next/image";

// Desktop Component
function ThreeCardsDesktop() {
  return (
    <>
      <div className="hidden sm:block max-h-full relative">
        {/* Circles */}
        <div className="absolute bottom-0 left-0 z-0">
          <Image
            src="/elements/circle.svg"
            alt="Bottom Left Circle"
            width={100}
            height={100}
            className=""
          />
        </div>
        <div className="absolute top-0 right-0 z-0">
          <Image
            src="/elements/circle.svg"
            alt="Top Right Circle"
            width={100}
            height={100}
            className="-scale-x-100"
          />
        </div>

        {/* Main content */}
        <div className="container mx-auto p-10 space-y-4 relative z-10">
          {/* Left Card */}
          <div className="flex justify-start mb-4">
            <div className="relative">
              <Image
                width={500}
                height={500}
                src="/elements/big_arrow_box.svg"
                alt="Image 1"
                className="h-48"
              />
              <h2 className="absolute top-10 left-35 text-lg font-semibold text-white">
                Merit-based, Need
                <br />
                -based, and Women
                <br />
                -in-Tech Scholarships
                <br />
                are available.
              </h2>
            </div>
          </div>

          {/* Center Card */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Image
                width={500}
                height={500}
                src="/elements/big_arrow_box.svg"
                alt="Image 2"
                className="h-48"
              />
              <h2 className="absolute top-14 left-35 text-lg font-semibold text-white">
                Paid Internships <br />
                (from 2nd year) offer
                <br />
                ₹3,000–₹10,000/month.
              </h2>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex justify-end">
            <div className="relative">
              <Image
                width={500}
                height={500}
                src="/elements/big_arrow_box.svg"
                alt="Image 3"
                className="h-48"
              />
              <h2 className="absolute top-10 left-35 text-lg font-semibold text-white">
                Special installment plans <br />
                may be considered for
                <br />
                genuine financial
                <br /> hardship cases.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Mobile Component
function ThreeCardsMobile() {
  return (
    <div>
      <div className="block sm:hidden max-h-full">
        <div className="container mx-auto p-10 flex flex-col gap-10">
          {/* First Card */}
          <div className="flex flex-col items-center">
            <div className="relative flex justify-center items-center">
              <Image
                width={600}
                height={600}
                src="/elements/big_arrow_box.svg"
                alt="Image 1"
                className="h-48 w-[36rem] rotate-90"
              />
              <h2 className="absolute top-6 px-4 mx-10 text-center text-base font-medium text-white z-10">
                Merit-based, Need
                <br />
                -based, and Women
                <br />
                -in-Tech Scholarships
                <br />
                are available.
              </h2>
            </div>
          </div>
          {/* Second Card */}
          <div className="flex flex-col items-center">
            <div className="relative flex justify-center items-center">
              <Image
                width={600}
                height={600}
                src="/elements/big_arrow_box.svg"
                alt="Image 2"
                className="h-48 w-[36rem] rotate-90"
              />
              <h2 className="absolute top-6 px-4 text-center text-base font-medium text-white z-10">
                Paid Internships <br />
                (from 2nd year)
                <br /> offer ₹3,000–
                <br />
                ₹10,000/month.
              </h2>
            </div>
          </div>
          {/* Third Card */}
          <div className="flex flex-col items-center">
            <div className="relative flex justify-center items-center">
              <Image
                width={600}
                height={600}
                src="/elements/big_arrow_box.svg"
                alt="Image 3"
                className="h-48 w-[36rem] rotate-90"
              />
              <h2 className="absolute top-6 px-4 text-center text-base font-medium text-white z-10">
                Special installment
                <br /> plans may be <br />
                considered for genuine <br />
                financial hardship <br />
                cases.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Wrapper Component
export default function ThreeCards() {
  return (
    <>
      <h1 className="text-4xl font-semibold text-white text-center m-20">
        Financial Assistance
      </h1>
      <ThreeCardsMobile />
      <ThreeCardsDesktop />
    </>
  );
}
