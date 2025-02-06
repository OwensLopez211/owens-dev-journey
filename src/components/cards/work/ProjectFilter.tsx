// src/components/work/ProjectFilter.tsx
interface ProjectFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
  }
  
  const ProjectFilter: React.FC<ProjectFilterProps> = ({
    categories,
    activeCategory,
    onCategoryChange
  }) => {
    return (
      <div className="mb-8 flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full px-4 py-2 transition-colors ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };

  export default ProjectFilter;