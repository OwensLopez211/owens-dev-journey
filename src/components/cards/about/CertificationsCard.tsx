import { motion } from "framer-motion";
import { Award, Calendar, Building2, ExternalLink, ScrollText } from 'lucide-react';

const CertificationsCard = () => {
  const certifications = [
    {
      title: "Certificación C1 en Inglés",
      organization: "EF Standard English Test (EF SET)",
      date: "2024",
      description: "Nivel avanzado de competencia en inglés, equivalente a C1 en el Marco Común Europeo de Referencia (MCER).",
      color: "emerald",
      icon: ScrollText
    },
    {
      title: "Certificación en Power BI",
      organization: "Udemy",
      date: "2024",
      description: "Especialización en análisis de datos y creación de dashboards interactivos con Microsoft Power BI.",
      color: "amber",
      icon: ExternalLink
    },
    {
      title: "Certificación Full Stack Developer",
      organization: "INACAP",
      date: "2022",
      description: "Desarrollo web integral abarcando tecnologías frontend y backend, con énfasis en aplicaciones web modernas.",
      color: "blue",
      icon: Building2
    }
  ];

  return (
    <div className="w-full">
      <div className="relative rounded-2xl bg-white shadow-xl border border-indigo-100 p-8">
        {/* Encabezado mejorado */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative">
            <motion.div
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 blur-sm" />
              <Award className="w-6 h-6 text-indigo-500 relative" />
            </motion.div>
          </div>
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Certificaciones
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Mis logros y acreditaciones profesionales
            </p>
          </div>
        </div>

        {/* Lista de certificaciones */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-xl bg-white border border-gray-100 
                            hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent 
                              via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="space-y-4">
                  {/* Título y fecha */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-${cert.color}-50`}>
                        <cert.icon className={`w-5 h-5 text-${cert.color}-500`} />
                      </div>
                      <h4 className="font-bold text-lg text-gray-800">{cert.title}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Organización */}
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1.5 rounded-lg text-sm font-medium 
                                   bg-gradient-to-r from-${cert.color}-50 to-${cert.color}-50/50 
                                   text-${cert.color}-700 border border-${cert.color}-100`}>
                      {cert.organization}
                    </span>
                  </div>

                  {/* Descripción */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Barra lateral decorativa */}
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b 
                                from-${cert.color}-500 to-${cert.color}-600 rounded-l-xl 
                                opacity-75 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default CertificationsCard;