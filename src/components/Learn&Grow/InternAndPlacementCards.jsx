import Image from "next/image";
import { motion } from "framer-motion";

const InternAndPlacementCards = () => {
  return (
    <>
      {/* For Desktop View */}
      <div className="hidden lg:flex flex-col items-center gap-24 relative overflow-visible px-4">
        {/* Animated SVG on Left of Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute left-0 top-10 z-0 w-54 h-54 pointer-events-none"
        >
          <Image
            src="/elements/AI-left.svg"
            alt="Decorative Left"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Card 1 - Internship */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="self-end w-full max-w-6xl z-10"
        >
          <a
            href="#"
            className="flex flex-col md:flex-row rounded-3xl shadow-md w-full overflow-hidden"
          >
            {/* Text */}
            <div className="flex flex-col justify-between p-8 pl-14 leading-normal flex-1 bg-[#EADAFF]">
              <h5 className="mb-4 text-4xl font-bold tracking-tight text-[#A33DFF]">
                Internship Before Graduation
              </h5>
              <p className="mb-3 text-3xl font-normal text-black">
                Apply your skills with <strong>real-world</strong> internships <br />
                that give you <strong>hands-on experience</strong> and <br />
                industry exposure.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/4 w-full h-[260px] relative">
              <Image
                src="/internship-image.png"
                alt="Internship Graduate"
                fill
                className="object-cover"
              />
            </div>
          </a>
        </motion.div>

        {/* Animated SVG on Right of Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute right-0 bottom-10 z-0 w-54 h-54 pointer-events-none"
        >
          <Image
            src="/elements/AI-right.svg"
            alt="Decorative Right"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Card 2 - Job Placement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="self-start w-full max-w-6xl z-10"
        >
          <a
            href="#"
            className="flex flex-col md:flex-row-reverse rounded-3xl shadow-md w-full overflow-hidden"
          >
            {/* Text */}
            <div className="flex flex-col justify-between p-8 pl-14 leading-normal flex-1 bg-[#EADAFF]">
              <h5 className="mb-4 text-4xl font-bold tracking-tight text-[#A33DFF]">
                Job Placement After Completion
              </h5>
              <p className="mb-3 text-3xl font-normal text-black">
                We connect you directly with hiring companies, offering{" "}
                <strong>mock interviews</strong>, <strong>resume building</strong>, and a{" "}
                <strong>network</strong> of employers looking for fresh talent.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/4 w-full h-[260px] relative">
              <Image
                src="/placement-image.png"
                alt="Job Placement"
                fill
                className="object-cover"
              />
            </div>
          </a>
        </motion.div>
      </div>

      {/* For Mobile View */}
      <div className="flex flex-col items-center px-6 gap-12 lg:hidden">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#2F1C48] rounded-2xl flex flex-col items-center text-center p-6 w-full max-w-md border border-white shadow-sm shadow-white"
        >
          <div className="w-full h-72 relative mb-4">
            <Image
              src="/internship-image.png"
              alt="Internship"
              fill
              className="object-cover border border-white rounded-2xl"
            />
          </div>
          <h2 className="text-[#D99BFF] text-2xl font-bold mb-2">
            Internship Before Graduation
          </h2>
          <p className="text-white text-base">
            Apply your skills with real-world internships that give you hands-on
            experience and industry exposure.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#AC6CFF] rounded-2xl flex flex-col items-center text-center p-6 w-full max-w-md border border-white shadow-sm shadow-white"
        >
          <div className="w-full h-72 relative mb-4">
            <Image
              src="/placement-image.png"
              alt="Job Placement"
              fill
              className="object-cover rounded-2xl border border-white"
            />
          </div>
          <h2 className="text-black text-2xl font-bold mb-2">
            Job Placement After Completion
          </h2>
          <p className="text-[#F5F5F5] text-base">
            Apply your skills with real-world internships that give you hands-on
            experience and industry exposure.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default InternAndPlacementCards;
