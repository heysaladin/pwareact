'use client';
import { createContext, useContext, useState } from 'react';

export type LogoMode = 'tamawal' | 'tamweel' | 'blur';

export function getBrandName(mode: LogoMode): string {
  return mode === 'tamweel' ? 'Tamweel' : 'Tamawal';
}

type GlobalSettings = {
  logoMode: LogoMode;
};

type GlobalSettingsContextType = {
  settings: GlobalSettings;
  updateSettings: (updates: Partial<GlobalSettings>) => void;
  brandName: string;
};

const defaultSettings: GlobalSettings = {
  logoMode: 'tamawal',
};

const GlobalSettingsContext = createContext<GlobalSettingsContextType>({
  settings: defaultSettings,
  updateSettings: () => {},
  brandName: getBrandName(defaultSettings.logoMode),
});

export function GlobalSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<GlobalSettings>(() => {
    if (typeof window === 'undefined') return defaultSettings;
    try {
      const stored = localStorage.getItem('globalSettings');
      return stored ? { ...defaultSettings, ...JSON.parse(stored) } : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  const updateSettings = (updates: Partial<GlobalSettings>) => {
    const next = { ...settings, ...updates };
    setSettings(next);
    localStorage.setItem('globalSettings', JSON.stringify(next));
  };

  return (
    <GlobalSettingsContext.Provider value={{ settings, updateSettings, brandName: getBrandName(settings.logoMode) }}>
      {children}
    </GlobalSettingsContext.Provider>
  );
}

export function useGlobalSettings() {
  return useContext(GlobalSettingsContext);
}
