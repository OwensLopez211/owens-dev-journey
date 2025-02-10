interface Project {
    title: string;
    dateRange: string;
    website: string;
    imageSrc: string;
    description: string;
    tags: string[];
}
interface ProjectCarouselProps {
    projects: Project[];
}
declare const ProjectCarousel: React.FC<ProjectCarouselProps>;
export default ProjectCarousel;
