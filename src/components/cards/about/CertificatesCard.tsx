

const CertificatesCard = () => {
  return (
    <div className="flex flex-col items-start justify-center rounded-2xl shadow-lg p-6 h-40 w-full bg-white/80 backdrop-blur-lg border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900">Educación</h3>
      <div className="flex items-center gap-3 mt-2">
        <div>
          <p className="text-lg font-semibold text-gray-900">Ingeniero en Informática</p>
          <p className="text-sm text-gray-600">INACAP - Santiago, Chile (2021 - 2024)</p>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <div>
          <p className="text-lg font-semibold text-gray-900">Técnico en Analista Programador</p>
          <p className="text-sm text-gray-600">INACAP - Santiago, Chile (2021 - 2023)</p>
        </div>
      </div>
    </div>
  );
};

export default CertificatesCard;
