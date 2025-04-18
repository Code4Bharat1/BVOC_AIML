'use client';   
import { motion } from "framer-motion";

const roles = [
  ["Machine Learning Engineer", "AI Product Manager", "Robotics Engineer (AI/ML Focus)"],
  ["Computer Vision Engineer", "Natural Language Processing (NLP) Engineer", "AI Software Engineer"],
  ["AI Research Scientist", "Deep Learning Engineer", "Data Scientist"],
  ["AI Ethicist", "Autonomous Systems Engineer", "AI Consultant"],
  ["Data Analyst (AI/ML Focus)", "Speech Recognition Engineer", "AI Engineer in Healthcare"]
];

const rowVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export default function CareerOpportunitiesTable() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
          Career Opportunities
        </h2>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md bg-white transition-all duration-500">
          <motion.table
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="min-w-full table-fixed border-collapse"
          >
            <tbody>
              {roles.map((row, rowIndex) => (
                <motion.tr
                  key={rowIndex}
                  variants={rowVariants}
                  custom={rowIndex}
                  className={`${
                    rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } transition duration-300`}
                >
                  {row.map((role, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-6 py-5 text-gray-800 text-sm sm:text-base font-medium border border-gray-200 hover:shadow-lg hover:scale-[1.02] hover:z-10 relative transition-all duration-300 rounded-md"
                    >
                      <span className="block">{role}</span>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 scale-x-0 hover:scale-x-100 origin-left transition-transform duration-500" />
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  );
}
