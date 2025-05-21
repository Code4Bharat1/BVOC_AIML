import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FlexibleCareerSupport = () => {
  return (
    <>
      {/* Desktop View (visible on lg and up) */}
      <div className="hidden lg:block overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#E8D7FF] p-10 overflow-hidden my-10"
        >
          {/* Left Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between z-10 relative">
            {/* Left Image */}
            <div className="w-full lg:w-[60%] flex justify-center lg:justify-start">
              <Image
                src="/path-to-left-image.svg"
                alt="Left Icon"
                width={740}
                height={440}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Positioned Image */}
          <div className="absolute right-0 bottom-0 hidden lg:block">
            <Image
              src="/path-to-right-image.svg"
              alt="Right Icon"
              width={580}
              height={500}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Desktop Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-start pl-6 lg:pl-24"
        >
          <h1 className="text-white text-2xl lg:text-5xl font-bold">
            NexCore Alliance LLP– <br className="lg:hidden" />A Clear Path
            Forward
          </h1>
          <p className="text-[#AC6CFF] text-xl lg:text-3xl pt-4 mb-10">
            With exit points tailored to your goals, our NSQF-certified{" "}
            <br className="hidden lg:block" />
            program offers flexibility
          </p>
        </motion.div>
      </div>

      {/* Mobile View (visible on small screens only) */}
      <div className="block lg:hidden overflow-x-hidden">
        <div className="mt-20 text-start pl-6 lg:pl-24">
          <h1 className="text-white text-2xl lg:text-5xl font-bold text-center">
            Flexible Career Support
          </h1>
        </div>
        <div className="w-full max-w-xs relative h-[600px] mx-auto overflow-x-hidden">
          {/* Step 1 */}
          <motion.div
            className="absolute top-[50px] left-4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Image src="/circle_1.svg" alt="Step 1" width={144} height={144} />
          </motion.div>

          <motion.div
            className="absolute top-[95px] left-10 text-white text-20px font-bold"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Personalized <br />
            coaching
          </motion.div>

          {/* Arrow 1 (static) */}
          <div className="absolute top-[130px] right-20">
            <Image src="/Arrow_2.svg" alt="Arrow 1" width={68} height={68} />
          </div>

          {/* Step 2 */}
          <motion.div
            className="absolute top-[230px] right-6"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Image src="/circle_2.svg" alt="Step 2" width={144} height={144} />
          </motion.div>

          <motion.div
            className="absolute top-[255px] right-11 text-white text-20px font-bold text-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Mock <br />
            interviews <br />& workshops
          </motion.div>

          {/* Arrow 2 (static) */}
          <div className="absolute top-[340px] right-44">
            <Image src="/Arrow_1.svg" alt="Arrow 2" width={68} height={68} />
          </div>

          {/* Step 3 */}
          <motion.div
            className="absolute top-[420px] left-4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Image src="/circle_1.svg" alt="Step 3" width={144} height={144} />
          </motion.div>

          <motion.div
            className="absolute top-[460px] left-9 text-white text-20px font-bold text-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Direct access <br />
            to industry <br />
            jobs
          </motion.div>
        </div>
        <div className="mt-10 text-start pl-6 lg:hidden">
          <h1 className="text-white text-3xl font-bold">
            NexCore Alliance LLP– <br className="lg:hidden" />A Clear Path
            Forward
          </h1>
          <p className="text-[#AC6CFF] text-xl lg:text-3xl pt-4 mb-10">
            With exit points tailored to your goals, our NSQF-certified{" "}
            <br className="hidden lg:block" />
            program offers flexibility
          </p>
        </div>
      </div>
    </>
  );
};

export default FlexibleCareerSupport;
