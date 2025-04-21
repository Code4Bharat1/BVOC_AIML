const SyllabusSidebar = ({ categories, setActiveCategory, activeCategory }) => {
  return (
    <div className="hidden md:flex flex-col w-80 bg-white p-8 rounded-3xl shadow-md">
      {" "}
      {/* Increased width to w-80 and padding to p-8 */}
      <nav className="flex flex-col space-y-3">
        {" "}
        {/* Increased space between items */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`w-full text-left px-6 py-4 rounded-3xl text-lg font-semibold transition-all duration-300 ease-in-out
              ${
                activeCategory === category
                  ? "bg-lime-500 text-black shadow-inner"
                  : "text-[#333] hover:bg-[#eeeeea] hover:text-lime-600 hover:shadow-md" /* Increased text contrast */
              }`}
          >
            {category}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SyllabusSidebar;
