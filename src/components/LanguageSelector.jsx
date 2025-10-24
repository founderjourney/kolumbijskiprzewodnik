import { useLanguage } from '../hooks/useLanguage';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: 'pl', flag: '🇵🇱', name: 'Polski' },
    { code: 'es', flag: '🇨🇴', name: 'Español' },
    { code: 'en', flag: '🇺🇸', name: 'English' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${currentLanguage === lang.code
              ? 'bg-primary text-black shadow-lg scale-110'
              : 'bg-white bg-opacity-90 text-gray-700 hover:bg-opacity-100 hover:scale-105'
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