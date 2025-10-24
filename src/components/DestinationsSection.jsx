import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import WhatsAppButton from './WhatsAppButton';

const DestinationsSection = () => {
  const { t } = useLanguage();
  const [activeDestination, setActiveDestination] = useState(0);

  const destinations = [
    {
      key: 'cartagena',
      image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-orange-400 to-red-500'
    },
    {
      key: 'medellin',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2128&q=80',
      color: 'from-green-400 to-blue-500'
    },
    {
      key: 'eje',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      key: 'tayrona',
      image: 'https://images.unsplash.com/photo-1580500700597-75d49f7e4bf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      color: 'from-blue-400 to-green-500'
    },
    {
      key: 'leticia',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80',
      color: 'from-green-600 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.destinations.title}
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center mb-20">
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
          <div className="space-y-8">
            {destinations.map((dest, index) => (
              <div
                key={dest.key}
                className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                  activeDestination === index
                    ? 'bg-gradient-to-r from-primary to-yellow-300 text-black shadow-lg scale-105'
                    : 'hover:bg-gray-50'
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
                    className="animate-slide-up"
                  >
                    📱 Reservar ahora
                  </WhatsAppButton>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {destinations.map((dest, index) => (
            <div key={dest.key} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Image */}
              <div className="relative h-64">
                <img
                  src={dest.image}
                  alt={t.destinations[dest.key].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${dest.color} opacity-30`}></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {t.destinations[dest.key].title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.destinations[dest.key].description}
                </p>
                <WhatsAppButton
                  destination={t.destinations[dest.key].title}
                  className="w-full justify-center"
                >
                  📱 Reservar {t.destinations[dest.key].title.split(' - ')[0]}
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