import {
  useEffect,
  useState,
} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  // lightTemplate,
  darkTemplate,
  deuteranopiaTemplate,
  tritanopiaTemplate,
} from '@styles';
import { usePersistedState } from '@hooks';
import {
  Theme,
  ThemeState,
  DateFormatState,
} from './types';

/**
 *
 * @param initialState
 */
export const useTheme = (initialState:ThemeState) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [themeSelection, setThemeSelection] = usePersistedState('themeSelection', initialState.themeSelection);

  const themeList = [
    // 'light',
    'dark',
    'deuteranopia',
    'tritanopia',
  ];

  const themeDictionary = {
    // light: lightTemplate,
    dark: darkTemplate,
    deuteranopia: deuteranopiaTemplate,
    tritanopia: tritanopiaTemplate,
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
      setTheme(themeSelection as Theme);
    } else {
      // setTheme('light');
    }
  }, [themeSelection]);

  const changeTheme = (value: string) => {
    if (themeDictionary[value]) {
      setThemeSelection(value);
    }
  };

  return {
    theme,
    muiTheme: createMuiTheme(themeDictionary[theme] || darkTemplate),
    themeSelection,
    themeList,
    themeDictionary,
    changeTheme,
  };
};

export const useDateFormat = (initialState:DateFormatState) => {
  const [dateSelection, setDateSelection] = usePersistedState('dateFormatSelection', initialState.dateFormat);

  const dateFormatList = [
    'locale',
    'utc',
  ];

  const changeDateFormat = (value: 'locale' | 'utc') => {
    setDateSelection(value);
  };

  return {
    dateFormat: dateSelection,
    changeDateFormat,
    dateFormatList,
  };
};
