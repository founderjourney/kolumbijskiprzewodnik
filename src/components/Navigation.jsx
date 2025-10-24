import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Navigation = () => {
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'pl', flag: '🇵🇱', name: 'Polski' },
    { code: 'es', flag: '🇨🇴', name: 'Español' },
    { code: 'en', flag: '🇺🇸', name: 'English' }
  ];

  const menuItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'destinations', label: t.nav.destinations },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-secondary">{t.siteTitle.split(' ')[0]}</span>
              <span className="text-2xl font-bold text-primary ml-1">{t.siteTitle.split(' ')[1]}</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-secondary font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Compact Language Flags */}
            <div className="flex items-center space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200
                    ${currentLanguage === lang.code
                      ? 'bg-primary shadow-lg scale-110 ring-2 ring-yellow-300'
                      : 'hover:bg-gray-100 hover:scale-105'
                    }
                  `}
                  title={lang.name}
                >
                  <span className="text-lg">{lang.flag}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-secondary p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white bg-opacity-95 backdrop-blur-sm border-t shadow-lg">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-3 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;