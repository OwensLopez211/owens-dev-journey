// src/components/work/ProjectSearch.tsx
interface ProjectSearchProps {
    onSearch: (searchTerm: string) => void;
  }
  
  const ProjectSearch: React.FC<ProjectSearchProps> = ({ onSearch }) => {
    return (
      <div className="mb-8">
        <input
          type="text"
          placeholder="Buscar proyectos..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
      </div>
    );
  };

  export default ProjectSearch;