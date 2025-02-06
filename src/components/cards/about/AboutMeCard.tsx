import React from 'react';
import { User, MapPin, Code2, Sparkles } from 'lucide-react';

const AboutMeCard = () => {
  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-lg border border-slate-200">
        <div className="relative text-slate-800">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-blue-500" />
            <h3 className="text-xl font-bold">Sobre mí</h3>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg">
              Soy <span className="font-bold">Owens</span>
            </p>
            
            <div className="flex items-center gap-3">
              <Code2 className="h-5 w-5 text-blue-500" />
              <p className="font-bold">Ingeniero en Informática</p>
            </div>
            
            <div className="flex items-center gap-3 text-slate-600">
              <MapPin className="h-4 w-4 text-blue-500" />
              <p className="text-sm">Santiago, Chile</p>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              Desarrollador apasionado con experiencia en React y Django, 
              enfocado en crear interfaces intuitivas y sistemas escalables. 
              Busco soluciones eficientes y colaboro en proyectos con un impacto positivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;