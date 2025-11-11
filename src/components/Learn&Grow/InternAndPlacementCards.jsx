"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const InternAndPlacementCards = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col items-center gap-24 relative overflow-visible px-8 bg-gradient-to-b from-white via-slate-50 to-blue-50 py-16">
        {/* Decorative Left Element */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative w-full max-w-7xl mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-0 w-[150px] h-[150px] pointer-events-none"
          >
            <Image
              src="/elements/AI-left.svg"
              alt="Decorative Left"
              fill
              className="object-contain opacity-40"
            />
          </motion.div>

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="z-10 flex-1"
          >
            <div className="flex flex-col md:flex-row rounded-3xl shadow-xl w-full overflow-hidden border-2 border-blue-200 bg-white">
              {/* Text Section */}
              <div className="flex flex-col justify-between p-8 pl-14 leading-normal flex-1">
                <h5 className="mb-4 text-4xl font-bold tracking-tight text-blue-600">
                  Internship Before Graduation
                </h5>
                <p className="mb-3 text-2xl font-normal text-slate-600">
                  Apply your skills with{" "}
                  <span className="text-teal-600 font-semibold">
                    real-world
                  </span>{" "}
                  internships that give you{" "}
                  <span className="text-purple-600 font-semibold">
                    hands-on experience
                  </span>{" "}
                  and industry exposure.
                </p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/4 w-full h-[260px] relative bg-blue-50">
                <Image
                  src="/learn&grow/internship-image.svg"
                  alt="Internship Graduate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative w-full max-w-7xl mx-auto px-4 z-10">
          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="z-10 flex-1"
          >
            <div className="flex flex-col md:flex-row-reverse rounded-3xl shadow-xl w-full overflow-hidden border-2 border-orange-200 bg-white">
              {/* Text Section */}
              <div className="flex flex-col justify-between p-8 pl-14 leading-normal flex-1">
                <h5 className="mb-4 text-4xl font-bold tracking-tight text-orange-600">
                  Job Placement After Completion
                </h5>
                <p className="mb-3 text-2xl font-normal text-slate-600">
                  We connect you directly with{" "}
                  <span className="text-blue-600 font-semibold">
                    hiring companies
                  </span>
                  , offering{" "}
                  <span className="text-purple-600 font-semibold">
                    mock interviews
                  </span>
                  ,{" "}
                  <span className="text-orange-600 font-semibold">
                    resume building
                  </span>
                  , and a strong{" "}
                  <span className="text-blue-600 font-semibold">
                    network
                  </span>{" "}
                  of employers looking for fresh talent.
                </p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/4 w-full h-[260px] relative bg-orange-50">
                <Image
                  src="/learn&grow/placement-image.svg"
                  alt="Job Placement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Decorative Right Element */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-0 w-[150px] h-[150px] pointer-events-none"
          >
            <Image
              src="/elements/AI-right.svg"
              alt="Decorative Right"
              fill
              className="object-contain opacity-40"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center px-6 gap-12 lg:hidden bg-gradient-to-b from-white via-slate-50 to-blue-50 py-12 relative overflow-hidden">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl flex flex-col items-center text-center p-6 w-full max-w-md border-2 border-blue-200 shadow-lg relative z-10"
        >
          <div className="w-full h-72 relative mb-4">
            <Image
              src="/learn&grow/internship-image.svg"
              alt="Internship"
              fill
              className="object-cover border-2 border-blue-100 rounded-2xl"
            />
          </div>
          <h2 className="text-blue-600 text-2xl font-bold mb-2">
            Internship Before Graduation
          </h2>
          <p className="text-slate-600 text-base">
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
          className="bg-white rounded-2xl flex flex-col items-center text-center p-6 w-full max-w-md border-2 border-orange-200 shadow-lg relative z-10"
        >
          <div className="w-full h-72 relative mb-4">
            <Image
              src="/learn&grow/placement-image.svg"
              alt="Job Placement"
              fill
              className="object-cover rounded-2xl border-2 border-orange-100"
            />
          </div>
          <h2 className="text-orange-600 text-2xl font-bold mb-2">
            Job Placement After Completion
          </h2>
          <p className="text-slate-600 text-base">
            We connect you directly with hiring companies, offering mock
            interviews, resume building, and a network of employers.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default InternAndPlacementCards;