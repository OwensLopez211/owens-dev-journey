import { motion } from "framer-motion";
import ProjectsGrid from "../cards/work/ProjectsGrid";

const ProjectList = ({ filter, setSelectedProject }) => {
  return (
    <motion.div className="w-full">
      <ProjectsGrid filter={filter} setSelectedProject={setSelectedProject} />
    </motion.div>
  );
};

export default ProjectList;
