'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Lang = 'en' | 'ar';

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'en',
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    const stored = localStorage.getItem('lang') as Lang | null;
    return stored === 'ar' || stored === 'en' ? stored : 'en';
  });

  function toggle() {
    const next: Lang = lang === 'en' ? 'ar' : 'en';
    setLang(next);
    localStorage.setItem('lang', next);
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
