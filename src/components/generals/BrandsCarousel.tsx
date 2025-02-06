import { motion } from "framer-motion";

const brands = [
  "/logos/tasky.webp",
  "/logos/daradda.png",
  "/logos/lini.png",
  "/logos/hed.png",
  "/logos/newland.png",
  "FLOW",
];

const BrandsCarousel = () => {
  return (
    <div className="relative w-full py-12 flex flex-col items-center overflow-hidden mt-16">
      {/* Título ahora centrado en móvil y alineado a la izquierda en pantallas grandes */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
        Empresas con las que he colaborado
      </h2>

      <div
        className="w-full max-w-[1200px] relative overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        }}
      >
        <motion.div
          className="flex items-center flex-nowrap gap-x-16"
          animate={{ x: ["0%", "-50%"] }} // Desplazamiento fluido sin cortes
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
          style={{
            display: "flex",
            width: "max-content",
            flexWrap: "nowrap",
          }}
        >
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div key={index} className="w-32 h-20 flex items-center justify-center">
              {typeof brand === "string" && brand.includes("/") ? (
                <img src={brand} alt="Brand logo" className="h-full w-full object-contain" />
              ) : (
                <span className="text-2xl font-semibold text-gray-800 font-montserrat">{brand}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandsCarousel;
