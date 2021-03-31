import {
  useEffect,
  useState,
} from 'react';
import {
  darkTheme,
  lightTheme,
} from '@styles';
import { usePersistedState } from '@hooks';
import { SettingsState } from './types';

/**
 *
 * @param initialState
 */
export const useTheme = (initialState:SettingsState) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [themeSelection, setThemeSelection] = usePersistedState('themeSelection', initialState.themeSelection);

  useEffect(() => {
    const isClient = typeof window === 'object';
    if (themeSelection === 'device') {
      if (
        isClient
        && window?.matchMedia('(prefers-color-scheme: dark)')?.matches
      ) {
        setTheme('dark');
      }
    } else if (themeSelection === 'dark') {
      setTheme('dark');
    } else if (themeSelection === 'light') {
      setTheme('light');
    }
  }, [themeSelection]);

  const toggleThemeMode = () => {
    const value = theme === 'light' ? 'dark' : 'light';
    setThemeSelection(value);
  };

  return {
    theme,
    muiTheme: theme === 'dark' ? darkTheme : lightTheme,
    toggleThemeMode,
    themeSelection,
  };
};
