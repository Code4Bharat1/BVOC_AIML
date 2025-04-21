const SyllabusSidebar = ({ categories, setActiveCategory, activeCategory }) => {
  return (
    <div className="hidden md:block w-64 pr-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
      <nav className="space-y-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
            }}
            className={`w-full text-left px-4 py-2 rounded-lg text-base font-medium ${
              activeCategory === category
                ? "bg-lime-400 text-gray-900 font-semibold"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
