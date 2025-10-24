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

  useEffect(() => {
    // Update document title when language changes
    const t = content[currentLanguage];
    if (t && t.siteTitle) {
      document.title = t.siteTitle;
    }
  }, [currentLanguage]);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('colombia-magica-language', lang);
    // Force page reload to ensure all content updates immediately
    window.location.reload();
  };

  const t = content[currentLanguage];

  return {
    currentLanguage,
    changeLanguage,
    t
  };
};