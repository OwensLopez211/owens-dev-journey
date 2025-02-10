import { MapPin, Code2, Sparkles, Rocket, Target, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
const AboutMeCard = () => {
  // El objeto fadeInUp ha sido eliminado debido a que no se utilizaba en el componente.

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-indigo-100">
        <div className="relative p-8">
          {/* Encabezado */}
          <div className="flex items-center gap-3 mb-8">
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-sm" />
                <Sparkles className="w-6 h-6 text-blue-500 relative" />
              </motion.div>
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sobre mí
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Mi viaje en el desarrollo de software
              </p>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="space-y-8">
            {/* Información personal */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-lg text-gray-800">
                  Soy <span className="font-bold text-blue-600">Owens</span>
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-blue-50 to-blue-50/50 border border-blue-100">
                  <Code2 className="w-5 h-5 text-blue-500" />
                  <p className="font-bold text-gray-800">Ingeniero en Informática</p>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-purple-50 to-purple-50/50 border border-purple-100">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  <p className="text-sm text-gray-600">Santiago, Chile</p>
                </div>
              </div>
            </div>

            {/* Objetivos y pasiones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-100">
                <Rocket className="w-5 h-5 text-blue-500 mb-2" />
                <h4 className="font-semibold text-gray-800 mb-1">Desarrollo</h4>
                <p className="text-sm text-gray-600">Experiencia en React y Django</p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50/50 border border-purple-100">
                <Target className="w-5 h-5 text-purple-500 mb-2" />
                <h4 className="font-semibold text-gray-800 mb-1">Enfoque</h4>
                <p className="text-sm text-gray-600">Interfaces intuitivas y escalables</p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50/50 border border-indigo-100">
                <Lightbulb className="w-5 h-5 text-indigo-500 mb-2" />
                <h4 className="font-semibold text-gray-800 mb-1">Objetivo</h4>
                <p className="text-sm text-gray-600">Soluciones de impacto positivo</p>
              </div>
            </div>

            {/* Descripción */}
            <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
              Desarrollador apasionado con experiencia en React y Django, 
              enfocado en crear interfaces intuitivas y sistemas escalables. 
              Busco soluciones eficientes y colaboro en proyectos con un impacto positivo.
            </p>
          </div>
        </div>

        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default AboutMeCard;