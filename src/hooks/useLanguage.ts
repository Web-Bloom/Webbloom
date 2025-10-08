import { useState, useEffect } from 'react';
import { Language } from '../types';

export const useLanguage = () => {
    const getDefaultLanguage = (): Language => {
        // 1️⃣ Check localStorage first
        const stored = localStorage.getItem('language') as Language | null;
        if (stored === 'de' || stored === 'en') return stored;

        // 2️⃣ Use navigator.languages fallback
        const langs = navigator.languages?.map(l => l.toLowerCase()) || [];
        const browserLang =
            langs.find(l => l.startsWith('de')) ||
            navigator.language?.toLowerCase() ||
            'en';

        return browserLang.startsWith('de') ? 'de' : 'en';
    };

    const [language, setLanguage] = useState<Language>(getDefaultLanguage);

    useEffect(() => {
        document.documentElement.lang = language;
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'en' ? 'de' : 'en'));
    };

    return { language, toggleLanguage };
};
