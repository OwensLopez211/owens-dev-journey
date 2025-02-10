interface ProjectFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}
declare const ProjectFilter: React.FC<ProjectFilterProps>;
export default ProjectFilter;
