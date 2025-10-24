import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import WhatsAppButton from './WhatsAppButton';

const DestinationsSection = () => {
  const { t, currentLanguage } = useLanguage();
  const [activeDestination, setActiveDestination] = useState(0);

  const destinations = [
    {
      key: 'cartagena',
      image: '/images/cartagena.jpg',
      color: 'from-orange-400 to-red-500'
    },
    {
      key: 'medellin',
      image: '/images/medellin-comuna.jpg',
      color: 'from-green-400 to-blue-500'
    },
    {
      key: 'eje',
      image: '/images/mano-eje.jpg',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      key: 'tayrona',
      image: '/images/tayrona.jpg',
      color: 'from-blue-400 to-green-500'
    },
    {
      key: 'leticia',
      image: '/images/leticia.jpg',
      color: 'from-green-600 to-emerald-500'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t.destinations.title}
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start mb-24">
          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={destinations[activeDestination].image}
                alt={t.destinations[destinations[activeDestination].key].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${destinations[activeDestination].color} opacity-20`}></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {destinations.map((dest, index) => (
              <div
                key={dest.key}
                className={`cursor-pointer p-6 md:p-8 rounded-xl transition-all duration-300 ${
                  activeDestination === index
                    ? 'bg-gradient-to-r from-primary to-yellow-300 text-black shadow-xl scale-105'
                    : 'hover:bg-gray-50 hover:shadow-md'
                }`}
                onClick={() => setActiveDestination(index)}
              >
                <h3 className="text-2xl font-bold mb-3">
                  {t.destinations[dest.key].title}
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  {t.destinations[dest.key].description}
                </p>
                {activeDestination === index && (
                  <WhatsAppButton
                    destination={t.destinations[dest.key].title}
                    className="animate-slide-up mt-4"
                  >
                    📱 {currentLanguage === 'pl' ? 'Rezerwuj teraz' : currentLanguage === 'es' ? 'Reservar ahora' : 'Book now'}
                  </WhatsAppButton>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6 md:space-y-8">
          {destinations.map((dest, index) => (
            <div key={dest.key} className="bg-white rounded-2xl shadow-xl overflow-hidden mx-2">
              {/* Image */}
              <div className="relative h-56 sm:h-64">
                <img
                  src={dest.image}
                  alt={t.destinations[dest.key].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${dest.color} opacity-30`}></div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900">
                  {t.destinations[dest.key].title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-base sm:text-lg">
                  {t.destinations[dest.key].description}
                </p>
                <WhatsAppButton
                  destination={t.destinations[dest.key].title}
                  className="w-full justify-center text-sm sm:text-base"
                >
                  📱 {currentLanguage === 'pl' ? 'Rezerwuj' : currentLanguage === 'es' ? 'Reservar' : 'Book'} {t.destinations[dest.key].title.split(' - ')[0]}
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;