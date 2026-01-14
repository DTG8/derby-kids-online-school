import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from './translations/en';
import { nl } from './translations/nl';

const LanguageContext = createContext();

const translations = {
    en,
    nl,
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');

    // Load language preference from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('derbykids-language');
        if (savedLanguage && translations[savedLanguage]) {
            setLanguage(savedLanguage);
        }
    }, []);

    // Save language preference to localStorage whenever it changes
    const changeLanguage = (newLanguage) => {
        if (translations[newLanguage]) {
            setLanguage(newLanguage);
            localStorage.setItem('derbykids-language', newLanguage);
        }
    };

    // Translation function with dot notation support (e.g., 'nav.home')
    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                // Fallback to English if translation not found
                value = translations.en;
                for (const fallbackKey of keys) {
                    if (value && typeof value === 'object') {
                        value = value[fallbackKey];
                    } else {
                        return key; // Return key if translation not found
                    }
                }
                break;
            }
        }

        return value || key;
    };

    const value = {
        language,
        changeLanguage,
        t,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
