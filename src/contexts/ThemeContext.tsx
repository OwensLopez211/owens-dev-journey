// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { themes, ThemeColors, ThemeNames } from '../config/theme';

interface ThemeContextType {
  theme: ThemeColors;
  themeName: ThemeNames;
  setTheme: (name: ThemeNames) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeNames>('dark');
  const theme = themes[themeName];

  const setTheme = (name: ThemeNames) => {
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};