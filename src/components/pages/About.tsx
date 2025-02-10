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
  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg mt-10">
      {/* Patrón de fondo orgánico */}
      <div className="fixed inset-0 opacity-[0.015]">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `radial-gradient(
              circle at 2px 2px,
              rgba(0,0,0,0.1) 0.5px,
              transparent 1px
            )`,
            backgroundSize: '32px 32px',
            transform: 'rotate(5deg) scale(1.2)'
          }} 
        />
      </div>

      {/* Contenido principal */}
      <div className="relative container mx-auto px-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Columna izquierda */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">
                <div className={cardStyles}>
                  <ProfileCard />
                </div>
                <div className={cardStyles}>
                  <SkillsCard />
                </div>
                <div className={cardStyles}>
                  <ExtraSkillsCard />
                </div>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="lg:col-span-8 space-y-8">
              <div className={cardStyles}>
                <AboutMeCard />
              </div>
              <div className={cardStyles}>
                <EducationCard />
              </div>
              <div className={cardStyles}>
                <ExperienceCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;