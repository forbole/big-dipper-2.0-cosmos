import {
  useEffect,
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
  const [theme, setTheme] = usePersistedState('theme', initialState.theme);
  const [firstTime, setFirstTime] = usePersistedState('firstTime', initialState.firstTime);

  useEffect(() => {
    const isClient = typeof window === 'object';
    if (
      firstTime
      && isClient
      && window?.matchMedia('(prefers-color-scheme: dark)')?.matches
    ) {
      setTheme('dark');
      setFirstTime(false);
    }
  }, []);

  const toggleThemeMode = () => {
    const value = theme === 'light' ? 'dark' : 'light';
    setTheme(value);
  };

  return {
    theme,
    muiTheme: theme === 'dark' ? darkTheme : lightTheme,
    toggleThemeMode,
    firstTime,
  };
};
