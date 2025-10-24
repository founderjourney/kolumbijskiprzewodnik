import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const BackToTopButton = () => {
  const { currentLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getButtonText = () => {
    switch (currentLanguage) {
      case 'pl':
        return 'Do góry';
      case 'es':
        return 'Arriba';
      case 'en':
      default:
        return 'Top';
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-yellow-300 text-black font-bold py-3 px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
      aria-label={getButtonText()}
    >
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        <span className="text-sm hidden sm:inline">{getButtonText()}</span>
      </div>
    </button>
  );
};

export default BackToTopButton;