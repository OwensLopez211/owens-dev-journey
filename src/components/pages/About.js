import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProfileCard from "../cards/about/ProfileCard";
import AboutMeCard from "../cards/about/AboutMeCard";
import EducationCard from "../cards/about/EducationCard";
import SkillsCard from "../cards/about/SkillsCard";
import ExperienceCard from "../cards/about/ExperienceCard";
import ExtraSkillsCard from "../cards/about/ExtraSkillsCard";
// Clases base para las cards con estilo más orgánico
const cardStyles = `
  bg-white
  rounded-[20px]
  shadow-[0_8px_30px_rgb(0,0,0,0.04)]
  backdrop-blur-sm
  border border-slate-100
  transition-all
  duration-300
  ease-in-out
  hover:shadow-[0_15px_35px_rgb(0,0,0,0.06)]
  hover:-translate-y-0.5
`;
const About = () => {
    return (_jsxs("section", { className: "container mx-auto px-4 py-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg mt-10", children: [_jsx("div", { className: "fixed inset-0 opacity-[0.015]", children: _jsx("div", { className: "absolute inset-0", style: {
                        backgroundImage: `radial-gradient(
              circle at 2px 2px,
              rgba(0,0,0,0.1) 0.5px,
              transparent 1px
            )`,
                        backgroundSize: '32px 32px',
                        transform: 'rotate(5deg) scale(1.2)'
                    } }) }), _jsx("div", { className: "relative container mx-auto px-4 ", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [_jsx("div", { className: "lg:col-span-4 space-y-8", children: _jsxs("div", { className: "sticky top-24 space-y-8", children: [_jsx("div", { className: cardStyles, children: _jsx(ProfileCard, {}) }), _jsx("div", { className: cardStyles, children: _jsx(SkillsCard, {}) }), _jsx("div", { className: cardStyles, children: _jsx(ExtraSkillsCard, {}) })] }) }), _jsxs("div", { className: "lg:col-span-8 space-y-8", children: [_jsx("div", { className: cardStyles, children: _jsx(AboutMeCard, {}) }), _jsx("div", { className: cardStyles, children: _jsx(EducationCard, {}) }), _jsx("div", { className: cardStyles, children: _jsx(ExperienceCard, {}) })] })] }) }) })] }));
};
export default About;
