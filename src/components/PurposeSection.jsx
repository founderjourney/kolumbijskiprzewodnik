import { useLanguage } from '../hooks/useLanguage';

const PurposeSection = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "150", label: t.purpose.stats.children },
    { number: "250+", label: t.purpose.stats.trips },
    { number: "100%", label: t.purpose.stats.satisfaction }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-colombia-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {t.purpose.title}
          </h2>
          <p className="text-xl md:text-2xl text-white text-opacity-90 max-w-4xl mx-auto leading-relaxed">
            {t.purpose.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white border-opacity-20 shadow-xl">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Heart with Poland and Colombia flags */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-8 py-4 border border-white border-opacity-20">
            <span className="text-3xl">🇵🇱</span>
            <span className="text-3xl text-red-400">❤️</span>
            <span className="text-3xl">🇨🇴</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;