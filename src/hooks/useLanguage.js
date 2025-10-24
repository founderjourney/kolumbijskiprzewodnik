import { useState, useEffect } from 'react';
import { content } from '../data/content.js';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('pl'); // Polish as default

  useEffect(() => {
    const savedLanguage = localStorage.getItem('colombia-magica-language');
    if (savedLanguage && ['pl', 'es', 'en'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('colombia-magica-language', lang);
  };

  const t = content[currentLanguage];

  return {
    currentLanguage,
    changeLanguage,
    t
  };
};