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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton className="bg-primary text-black hover:bg-yellow-300 text-lg font-bold">
                💬 {currentLanguage === 'pl' ? 'Porozmawiaj z Adrian' : currentLanguage === 'es' ? 'Hablar con Adrian' : 'Talk with Adrian'}
              </WhatsAppButton>

              <a
                href="https://instagram.com/kolumbijski_przewodnik"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group shadow-lg"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                📸 {currentLanguage === 'pl' ? 'Obserwuj na Instagram' : currentLanguage === 'es' ? 'Sígueme en Instagram' : 'Follow on Instagram'}
              </a>
            </div>
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