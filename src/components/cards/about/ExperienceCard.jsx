import React from 'react';
import { Briefcase, ExternalLink, Calendar } from 'lucide-react';

const ExperienceCard = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Flowco Studio",
      period: "2024 - Presente",
      description: "Desarrollo de aplicaciones web escalables utilizando React y Django. Implementación de soluciones de comercio electrónico y analíticas.",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      link: "https://flowcostudio.com"
    },
    {
      role: "Desarrollador Frontend",
      company: "Freelance",
      period: "2023 - 2024",
      description: "Diseño y desarrollo de interfaces de usuario responsivas y optimización de rendimiento para diversos clientes.",
      technologies: ["React", "TailwindCSS", "TypeScript"],
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="h-5 w-5 text-blue-500" />
        <h3 className="text-xl font-bold text-slate-800">Experiencia</h3>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-blue-100 last:border-l-0">
            <div className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-blue-500" />
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-800">{exp.role}</h4>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-blue-500">
                <span className="font-medium">{exp.company}</span>
                {exp.link && (
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              <p className="text-sm text-slate-600">{exp.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;