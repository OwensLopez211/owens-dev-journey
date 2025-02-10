interface Technology {
    name: string;
    icon: string;
    description: string;
}
interface TechGridProps {
    technologies: Technology[];
}
declare const TechGrid: React.FC<TechGridProps>;
export default TechGrid;
