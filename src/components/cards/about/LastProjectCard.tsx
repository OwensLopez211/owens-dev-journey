import { motion } from "framer-motion";
import { Briefcase, Clock, DollarSign } from "lucide-react";

const LastProjectCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="col-span-2 w-full"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/95 to-white/90 shadow-lg border border-gray-100">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Contenido */}
        <div className="relative p-6 space-y-4">
          {/* Encabezado */}
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Briefcase className="w-6 h-6 text-blue-500" />
            </motion.div>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Último Proyecto
            </h3>
          </div>

          {/* Descripción */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-gray-600 leading-relaxed">
              Configuración de seguimiento de comercio electrónico de Google Analytics. 
              Buscando un nuevo diseño fresco para nuestra firma boutique de asesoría comercial.
            </p>

            {/* Detalles del proyecto */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-600">Medio tiempo</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-green-500">₹500 / hora</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decoración de borde */}
        <div className="absolute inset-px bg-gradient-to-r from-blue-200/20 via-blue-300/20 to-blue-200/20 blur opacity-50 rounded-2xl" />

        {/* Indicador de estado activo */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-green-600">Activo</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LastProjectCard;