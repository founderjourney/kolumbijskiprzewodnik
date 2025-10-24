import { useLanguage } from '../hooks/useLanguage';
import WhatsAppButton from './WhatsAppButton';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 56, 147, 0.3), rgba(252, 209, 22, 0.2)), url('/images/eje-cafetero.jpg')`
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary bg-opacity-20 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent bg-opacity-20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-secondary bg-opacity-20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-10 leading-tight px-4 drop-shadow-lg">
            <span className="block animate-slide-up text-shadow-lg">
              {t.hero.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-opacity-95 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up px-4 drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up px-4" style={{ animationDelay: '0.4s' }}>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold rounded-full border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base">
              {t.hero.cta}
            </button>

            <WhatsAppButton className="w-full sm:w-auto bg-primary text-gray-900 hover:bg-yellow-300 hover:text-black shadow-lg text-sm sm:text-base font-bold">
              {t.hero.whatsapp}
            </WhatsAppButton>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white bg-opacity-50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent"></div>
    </section>
  );
};

export default HeroSection;