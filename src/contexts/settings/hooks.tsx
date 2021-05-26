import {
  useEffect,
  useState,
} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  // darkTheme,
  // lightTheme,
  lightTemplate,
  darkTemplate,
  deuteranopiaTemplate,
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

  const themeList = [
    'light',
    'dark',
    'deuteranopia',
    // 'tritanopia',
    // 'achromatopsia',
  ];

  const themeDictionary = {
    light: lightTemplate,
    dark: darkTemplate,
    deuteranopia: deuteranopiaTemplate,
    // tritanopia: darkTheme,
    // achromatopsia: darkTheme,
  };

  useEffect(() => {
    const isClient = typeof window === 'object';
    if (themeSelection === 'device') {
      if (
        isClient
        && window?.matchMedia('(prefers-color-scheme: dark)')?.matches
      ) {
        setTheme('dark');
      }
    } else if (themeDictionary[themeSelection]) {
      setTheme(themeSelection as any);
    } else {
      setTheme('light');
    }
  }, [themeSelection]);

  // const toggleThemeMode = () => {
  //   const value = theme === 'light' ? 'dark' : 'light';
  //   setThemeSelection(value);
  // };

  const changeTheme = (value: string) => {
    if (themeDictionary[theme]) {
      setThemeSelection(value);
    }
  };

  return {
    theme,
    muiTheme: createMuiTheme(themeDictionary[theme] ?? lightTemplate),
    // toggleThemeMode,
    themeSelection,
    themeList,
    themeDictionary,
    changeTheme,
  };
};
