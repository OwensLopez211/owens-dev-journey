import ProfileCard from "../cards/about/ProfileCard";
import AboutMeCard from "../cards/about/AboutMeCard";
import EducationCard from "../cards/about/EducationCard";
import SkillsCard from "../cards/about/SkillsCard";
import ExperienceCard from "../cards/about/ExperienceCard";
import ExtraSkillsCard from "../cards/about/ExtraSkillsCard";
import CertificationsCard from "../cards/about/CertificationsCard";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <section 
      className="w-full max-w-screen-xl md:min-h-screen flex flex-col items-center justify-start px-5 md:px-10 relative mx-auto rounded-xl overflow-hidden mt-10"
    >
      {/* Background con gradientes */}
      <div 
        className="absolute inset-0 backdrop-blur-xl w-full rounded-xl"
        style={{ backgroundColor: `${theme.background.dark}e6` }} // 90% opacity
      >
        <div 
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom right, ${theme.primary.light}33, ${theme.secondary.light}33)` }} // 20% opacity
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at bottom left, transparent 0%, ${theme.background.dark} 100%)`
          }}
        />
      </div>

      {/* Líneas de gradiente */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]" 
        style={{ background: `linear-gradient(to right, transparent, ${theme.primary.light}33, transparent)` }} 
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-[1px]" 
        style={{ background: `linear-gradient(to right, transparent, ${theme.secondary.light}33, transparent)` }} 
      />

      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(
              circle at 2px 2px,
              ${theme.text.muted}22 0.5px, // 10% opacity
              transparent 1px
            )`,
            backgroundSize: '32px 32px',
            transform: 'rotate(5deg) scale(1.2)'
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Columna izquierda */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <ProfileCard />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <SkillsCard />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <ExtraSkillsCard />
                </motion.div>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="lg:col-span-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <AboutMeCard />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ExperienceCard />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <EducationCard />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <CertificationsCard />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
