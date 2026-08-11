'use client';
import { createContext, useContext, useState, useEffect } from 'react';

export type LogoMode = 'tamawal' | 'tamweel' | 'blur';

type GlobalSettings = {
  logoMode: LogoMode;
};

type GlobalSettingsContextType = {
  settings: GlobalSettings;
  updateSettings: (updates: Partial<GlobalSettings>) => void;
};

const defaultSettings: GlobalSettings = {
  logoMode: 'tamawal',
};

const GlobalSettingsContext = createContext<GlobalSettingsContextType>({
  settings: defaultSettings,
  updateSettings: () => {},
});

export function GlobalSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<GlobalSettings>(defaultSettings);

  useEffect(() => {
    const stored = localStorage.getItem('globalSettings');
    if (stored) {
      try {
        setSettings({ ...defaultSettings, ...JSON.parse(stored) });
      } catch {
        // ignore malformed data
      }
    }
  }, []);

  const updateSettings = (updates: Partial<GlobalSettings>) => {
    const next = { ...settings, ...updates };
    setSettings(next);
    localStorage.setItem('globalSettings', JSON.stringify(next));
  };

  return (
    <GlobalSettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </GlobalSettingsContext.Provider>
  );
}

export function useGlobalSettings() {
  return useContext(GlobalSettingsContext);
}
