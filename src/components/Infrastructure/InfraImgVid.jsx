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

// ========== CARD COMPONENT ==========
function InfraCard({ item, onClick }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-md border-2 border-slate-100 ${CARD_SIZE} flex justify-center items-center flex-shrink-0`}
      onClick={() => onClick(item)}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 40px rgba(74, 144, 226, 0.3)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {item.type === "image" ? (
        <img src={item.src} alt={item.alt} className="object-cover w-full h-full rounded-2xl" />
      ) : (
        <video className="w-full h-full rounded-2xl" muted>
          <source src={item.src} type="video/mp4" />
        </video>
      )}
      
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200/40 to-transparent blur-xl"></div>
    </motion.div>
  );
}

// ========== MODAL COMPONENT ==========
function Modal({ item, onClose, onNext, onPrev, hasNext, hasPrev }) {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative bg-white border-2 border-slate-200 rounded-2xl p-4 max-w-5xl w-[95%] max-h-[90vh] shadow-2xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <img src={item.src} alt={item.alt} className="max-w-full max-h-[85vh] w-auto h-auto rounded-xl object-contain" />
        ) : (
          <video src={item.src} controls autoPlay className="max-w-full max-h-[85vh] w-auto h-auto rounded-xl" />
        )}
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-slate-700 text-3xl font-bold hover:text-blue-600 transition-colors hover:rotate-90 duration-300"
        >
          ×
        </button>

        {/* Left Arrow */}
        {hasPrev && (
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-white"
          >
            <span className="text-2xl">‹</span>
          </motion.button>
        )}

        {/* Right Arrow */}
        {hasNext && (
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-white"
          >
            <span className="text-2xl">›</span>
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
}

// ========== MAIN COMPONENT ==========
function InfraImgVid() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState({ sectionIndex: 0, itemIndex: 0 });
  const [activeFilter, setActiveFilter] = useState("All");
  const scrollContainerRefs = useRef([]);
  const scrollStatesRef = useRef(
    Array(infraData.length)
      .fill(null)
      .map(() => ({
        scrollPosition: 0,
        scrollDirection: 1,
        atEnd: false,
        isPaused: false,
      }))
  );

  // Filter the data based on active filter
  const filteredData = activeFilter === "All" 
    ? infraData 
    : infraData.filter(section => section.heading === activeFilter);

  // Handle card click
  const handleCardClick = (item, sectionIndex, itemIndex) => {
    setSelectedItem(item);
    setSelectedIndex({ sectionIndex, itemIndex });
  };

  // Navigate to next item
  const handleNext = () => {
    const { sectionIndex, itemIndex } = selectedIndex;
    const currentSection = filteredData[sectionIndex];
    
    if (itemIndex < currentSection.items.length - 1) {
      const newIndex = { sectionIndex, itemIndex: itemIndex + 1 };
      setSelectedIndex(newIndex);
      setSelectedItem(currentSection.items[itemIndex + 1]);
    } else if (sectionIndex < filteredData.length - 1) {
      const newIndex = { sectionIndex: sectionIndex + 1, itemIndex: 0 };
      setSelectedIndex(newIndex);
      setSelectedItem(filteredData[sectionIndex + 1].items[0]);
    }
  };

  // Navigate to previous item
  const handlePrev = () => {
    const { sectionIndex, itemIndex } = selectedIndex;
    
    if (itemIndex > 0) {
      const newIndex = { sectionIndex, itemIndex: itemIndex - 1 };
      setSelectedIndex(newIndex);
      setSelectedItem(filteredData[sectionIndex].items[itemIndex - 1]);
    } else if (sectionIndex > 0) {
      const prevSection = filteredData[sectionIndex - 1];
      const newIndex = { sectionIndex: sectionIndex - 1, itemIndex: prevSection.items.length - 1 };
      setSelectedIndex(newIndex);
      setSelectedItem(prevSection.items[prevSection.items.length - 1]);
    }
  };

  const hasNext = () => {
    const { sectionIndex, itemIndex } = selectedIndex;
    const currentSection = filteredData[sectionIndex];
    return itemIndex < currentSection.items.length - 1 || sectionIndex < filteredData.length - 1;
  };

  const hasPrev = () => {
    const { sectionIndex, itemIndex } = selectedIndex;
    return itemIndex > 0 || sectionIndex > 0;
  };

  // Auto scroll animation
  useEffect(() => {
    const animationFrames = [];
    scrollContainerRefs.current.forEach((container, index) => {
      if (!container) return;

      if (container.scrollWidth > container.clientWidth) {
        const scrollState = scrollStatesRef.current[index];
        const animate = () => {
          if (scrollState.isPaused) {
            animationFrames[index] = requestAnimationFrame(animate);
            return;
          }

          let { scrollPosition, scrollDirection, atEnd } = scrollState;
          const scrollSpeed = 0.7;

          if (scrollDirection === 1) {
            scrollPosition += scrollSpeed;
            if (scrollPosition >= container.scrollWidth - container.clientWidth) {
              scrollPosition = container.scrollWidth - container.clientWidth;
              if (!atEnd) {
                atEnd = true;
                setTimeout(() => {
                  scrollState.scrollDirection = -1;
                  scrollState.atEnd = false;
                }, 2000);
              }
            }
          } else {
            scrollPosition -= scrollSpeed;
            if (scrollPosition <= 0) {
              scrollPosition = 0;
              if (!atEnd) {
                atEnd = true;
                setTimeout(() => {
                  scrollState.scrollDirection = 1;
                  scrollState.atEnd = false;
                }, 2000);
              }
            }
          }

          container.scrollLeft = scrollPosition;
          scrollState.scrollPosition = scrollPosition;
          scrollState.atEnd = atEnd;

          animationFrames[index] = requestAnimationFrame(animate);
        };
        animationFrames[index] = requestAnimationFrame(animate);
      }
    });

    return () => {
      animationFrames.forEach((frameId) => frameId && cancelAnimationFrame(frameId));
    };
  }, [filteredData]);

  const handleMouseEnter = (index) => {
    if (scrollStatesRef.current[index]) scrollStatesRef.current[index].isPaused = true;
  };

  const handleMouseLeave = (index) => {
    if (scrollStatesRef.current[index]) scrollStatesRef.current[index].isPaused = false;
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 py-16 bg-gradient-to-b from-white via-slate-50 to-blue-50 overflow-hidden">
      {/* Filter Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12 w-full flex justify-center"
      >
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 md:px-0 py-2 max-w-full justify-start md:justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {["All", "Conference", "Workspaces"].map((filter, i) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`flex-shrink-0 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 border-2 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white shadow-lg border-transparent"
                  : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200 hover:border-blue-400"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {filteredData.map((section, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative z-10 p-5"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold mb-10 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            {section.heading}
          </h2>

          <div
            className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center pb-4"
            ref={(el) => (scrollContainerRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {section.items.map((item, idx) => (
              <InfraCard key={idx} item={item} onClick={(item) => handleCardClick(item, index, idx)} />
            ))}
          </div>
        </motion.div>
      ))}

      <Modal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={hasNext()}
        hasPrev={hasPrev()}
      />
    </div>
  );
}

export default InfraImgVid;