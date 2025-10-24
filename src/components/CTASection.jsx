import { useLanguage } from '../hooks/useLanguage';
import WhatsAppButton from './WhatsAppButton';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-colombia-blue to-poland-crimson relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-16 h-16 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main CTA */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.cta.title}
          </h2>
          <p className="text-xl md:text-2xl text-white text-opacity-95 leading-relaxed mb-8">
            {t.cta.subtitle}
          </p>
        </div>

        {/* Main CTA Button */}
        <div className="mb-8">
          <WhatsAppButton className="bg-primary text-black hover:bg-yellow-300 text-lg px-10 py-5 text-xl font-bold">
            {t.cta.button}
          </WhatsAppButton>
        </div>

        {/* Subtext */}
        <p className="text-lg text-white text-opacity-80 mb-12">
          {t.cta.subtext}
        </p>

        {/* Contact info card */}
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Adrian's info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-black">A</span>
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-xl">Adrian</div>
                <div className="text-white text-opacity-80">Tu guía polaco en Colombia</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-white bg-opacity-30"></div>

            {/* Contact options */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <div className="text-white text-sm">WhatsApp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✈️</div>
                <div className="text-white text-sm">Tours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">❤️</div>
                <div className="text-white text-sm">Con propósito</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-white text-opacity-90 text-lg font-medium">
            {t.footer.text}
          </p>
          <div className="flex justify-center gap-4 mt-4 text-4xl">
            <span>🇨🇴</span>
            <span className="text-red-400">❤️</span>
            <span>🇵🇱</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;