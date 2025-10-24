import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import WhatsAppButton from './WhatsAppButton';

const AboutAdrianSection = () => {
  const { t, currentLanguage } = useLanguage();
  const [currentPhoto, setCurrentPhoto] = useState(0);

  // Adrian's photos - selecting the best ones
  const photos = [
    '/images/adrian/IMG-20251023-WA0024.jpg', // Main photo
    '/images/adrian/IMG-20251023-WA0036.jpg',
    '/images/adrian/IMG-20251023-WA0037.jpg',
    '/images/adrian/IMG-20251023-WA0038.jpg',
    '/images/adrian/IMG-20251023-WA0013.jpg',
    '/images/adrian/IMG-20251023-WA0014.jpg',
    '/images/adrian/IMG-20251023-WA0015.jpg',
    '/images/adrian/IMG-20251023-WA0028.jpg',
    '/images/adrian/motion_photo_7314328854799102258.jpg',
    '/images/adrian/motion_photo_7545525483534739027.jpg'
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-secondary rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.about.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            {t.about.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Photo Gallery */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src={photos[currentPhoto]}
                alt="Adrian en Colombia"
                className="w-full h-auto max-h-[600px] object-contain transition-all duration-500 bg-white"
                style={{ minHeight: '300px' }}
              />
              {/* Photo overlay with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black from-0% via-transparent via-80% to-transparent opacity-20 pointer-events-none"></div>
            </div>

            {/* Photo navigation */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={prevPhoto}
                className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 ml-4"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={nextPhoto}
                className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 mr-4"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Photo counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentPhoto + 1} / {photos.length}
              </div>
            </div>

            {/* Photo indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhoto(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPhoto === index ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Story Content */}
          <div className="space-y-6">
            {/* Main story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🇵🇱</span>
                {currentLanguage === 'pl' ? 'Moja Historia' : currentLanguage === 'es' ? 'Mi Historia' : 'My Story'}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {t.about.story}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.about.mission}
              </p>
            </div>

            {/* Experience badges */}
            <div className="bg-gradient-to-r from-primary to-yellow-300 rounded-2xl p-6 text-black">
              <h4 className="font-bold text-lg mb-3">{currentLanguage === 'pl' ? 'Moje Doświadczenie' : currentLanguage === 'es' ? 'Mi Experiencia' : 'My Experience'}</h4>
              <p className="font-medium">{t.about.experience}</p>
            </div>
          </div>
        </div>

        {/* Why Choose Adrian */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.about.why}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {t.about.reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-black font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary to-colombia-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {currentLanguage === 'pl' ? 'Gotowy na wyjątkowe doświadczenie? 🌟' : currentLanguage === 'es' ? '¿Listo para vivir una experiencia única? 🌟' : 'Ready for a unique experience? 🌟'}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {currentLanguage === 'pl' ? 'Porozmawiajmy bezpośrednio i zaprojektujmy Twoją idealną przygodę w Kolumbii' : currentLanguage === 'es' ? 'Hablemos directamente y diseñemos tu aventura perfecta en Colombia' : 'Let\'s talk directly and design your perfect adventure in Colombia'}
            </p>
            <WhatsAppButton className="bg-primary text-black hover:bg-yellow-300 text-lg font-bold">
              💬 {currentLanguage === 'pl' ? 'Porozmawiaj z Adrian' : currentLanguage === 'es' ? 'Hablar con Adrian' : 'Talk with Adrian'}
            </WhatsAppButton>
          </div>
        </div>

        {/* Polish-Colombian connection */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white bg-opacity-80 rounded-full px-8 py-4 shadow-lg">
            <span className="text-4xl">🇵🇱</span>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-600">
                {currentLanguage === 'pl' ? 'Łącząc' : currentLanguage === 'es' ? 'Conectando' : 'Connecting'}
              </div>
              <div className="text-xs text-gray-500">
                {currentLanguage === 'pl' ? 'Kultury' : currentLanguage === 'es' ? 'Culturas' : 'Cultures'}
              </div>
            </div>
            <span className="text-3xl text-red-400">❤️</span>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-600">
                {currentLanguage === 'pl' ? 'Z miłością' : currentLanguage === 'es' ? 'Con amor' : 'With love'}
              </div>
              <div className="text-xs text-gray-500">
                {currentLanguage === 'pl' ? 'I pasją' : currentLanguage === 'es' ? 'Y pasión' : 'And passion'}
              </div>
            </div>
            <span className="text-4xl">🇨🇴</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAdrianSection;