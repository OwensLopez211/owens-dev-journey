import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
const ProjectGrid = ({ projects }) => {
    return (_jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", initial: "hidden", animate: "visible", variants: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.1
                }
            }
        }, children: projects.map((project) => (_jsx(motion.div, { variants: {
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 }
                }
            }, children: _jsx(ProjectCard, { project: project }) }, project.id))) }));
};
export default ProjectGrid;
