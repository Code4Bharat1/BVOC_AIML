"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const CARD_SIZE = "w-72 h-80 lg:w-[25rem] lg:h-96";

// Infrastructure data
const infraData = [
  {
    heading: "Conference",
    items: [
      { type: "image", src: "/infrastructure/conference3/conference3_1.jpeg", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_6.png", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_7.png", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_8.png", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_10.jpg", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_11.jpg", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_12.jpg", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_12.png", alt: "Conference Room" },
      { type: "image", src: "/infrastructure/conference3/conference3_13.png", alt: "Conference Room" },
    ],
  },
  {
    heading: "Workspaces",
    items: [
      { type: "image", src: "/infrastructure/work_space_4/workspace_1.png", alt: "Workspace 1" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_2.png", alt: "Workspace 2" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_3.png", alt: "Workspace 3" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_4.png", alt: "Workspace 4" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_5.png", alt: "Workspace 5" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_6.png", alt: "Workspace 6" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_7.png", alt: "Workspace 7" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_8.png", alt: "Workspace 8" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_9.png", alt: "Workspace 9" },
      { type: "image", src: "/infrastructure/work_space_4/workspace_10.png", alt: "Workspace 10" },
    ],
  },
];

// CARD
function InfraCard({ item, onClick }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-md border border-slate-200 ${CARD_SIZE} flex justify-center items-center flex-shrink-0`}
      onClick={() => onClick(item)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={item.src} alt={item.alt} className="object-cover w-full h-full rounded-2xl" />
      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100/40 blur-xl"></div>
    </motion.div>
  );
}

// MODAL
function Modal({ item, onClose, onNext, onPrev, hasNext, hasPrev }) {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative bg-white border border-slate-200 rounded-2xl p-4 max-w-5xl w-[95%] max-h-[90vh] shadow-2xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.src} alt={item.alt} className="max-w-full max-h-[85vh] rounded-xl object-contain" />

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-slate-700 text-3xl font-bold"
        >
          ×
        </button>

        {hasPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800 text-white rounded-full w-12 h-12 flex items-center justify-center"
          >
            ‹
          </button>
        )}

        {hasNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800 text-white rounded-full w-12 h-12 flex items-center justify-center"
          >
            ›
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

// MAIN
function InfraImgVid() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState({ sectionIndex: 0, itemIndex: 0 });
  const [activeFilter, setActiveFilter] = useState("All");
  const scrollContainerRefs = useRef([]);

  const filteredData =
    activeFilter === "All" ? infraData : infraData.filter((s) => s.heading === activeFilter);

  return (
    <div className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 py-16 bg-[#F8FAFC] overflow-hidden">
      {/* Filter Buttons */}
      <div className="mb-12 w-full flex justify-center">
        <div className="flex gap-4 overflow-x-auto px-4 py-2">
          {["All", "Conference", "Workspaces"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full font-semibold border ${
                activeFilter === filter
                  ? "bg-[#0A2540] text-white border-transparent"
                  : "bg-white text-slate-700 border-slate-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {filteredData.map((section, index) => (
        <div key={index} className="p-5">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-10 text-center text-[#0A2540]">
            {section.heading}
          </h2>

          <div
            className="flex space-x-4 overflow-x-auto justify-center pb-4"
            ref={(el) => (scrollContainerRefs.current[index] = el)}
          >
            {section.items.map((item, idx) => (
              <InfraCard
                key={idx}
                item={item}
                onClick={(item) => setSelectedItem(item)}
              />
            ))}
          </div>
        </div>
      ))}

      <Modal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onNext={() => {}}
        onPrev={() => {}}
        hasNext={false}
        hasPrev={false}
      />
    </div>
  );
}

export default InfraImgVid;
