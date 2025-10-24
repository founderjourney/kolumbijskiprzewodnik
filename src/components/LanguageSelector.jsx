import { useLanguage } from '../hooks/useLanguage';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: 'pl', flag: '🇵🇱', name: 'Polski' },
    { code: 'es', flag: '🇨🇴', name: 'Español' },
    { code: 'en', flag: '🇺🇸', name: 'English' }
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-3">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`
            flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg backdrop-blur-sm
            ${currentLanguage === lang.code
              ? 'bg-primary text-black shadow-xl scale-110 ring-2 ring-yellow-300'
              : 'bg-white bg-opacity-90 text-gray-700 hover:bg-opacity-100 hover:scale-105 hover:shadow-xl'
            }
          `}
        >
          <span className="text-lg">{lang.flag}</span>
          <span className="hidden md:inline">{lang.name}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;