const SyllabusSidebar = ({ categories, setActiveCategory, activeCategory }) => {
  return (
    <div className="hidden md:flex flex-col w-64 bg-[#f9f9f6] p-6 rounded-3xl shadow-md">
      <nav className="flex flex-col space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`w-full text-left px-5 py-3 rounded-2xl text-[15px] font-medium transition-all duration-300 ease-in-out
              ${
                activeCategory === category
                  ? "bg-lime-400 text-black shadow-inner"  // Active button color: lime text, light background
                  : "text-[#333] hover:bg-[#eeeeea] hover:text-lime-400 hover:shadow-sm"  // Default text black, hover changes to lime text
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