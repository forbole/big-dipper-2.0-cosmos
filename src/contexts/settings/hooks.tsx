import {
  useEffect,
  useState,
} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  lightTemplate,
  // darkTemplate,
  deuteranopiaTemplate,
  tritanopiaTemplate,
} from '@styles';
import { usePersistedState } from '@hooks';
import {
  Theme,
  ThemeState,
  DateFormatState,
  TxListFormatState,
} from './types';

/**
 *
 * @param initialState
 */
export const useTheme = (initialState:ThemeState) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [themeSelection, setThemeSelection] = usePersistedState('themeSelection', initialState.themeSelection);

  const themeList = [
    'light',
    // 'dark',
    'deuteranopia',
    'tritanopia',
  ];

  const themeDictionary = {
    light: lightTemplate,
    // dark: darkTemplate,
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
        setTheme('light');
      }
    } else if (themeDictionary[themeSelection]) {
      setTheme(themeSelection as Theme);
    } else {
      setTheme('light');
    }
  }, [themeSelection]);

  const changeTheme = (value: string) => {
    if (themeDictionary[value]) {
      setThemeSelection(value);
    }
  };

  return {
    theme,
    muiTheme: createMuiTheme(themeDictionary[theme] || lightTemplate),
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

export const useTxListFormat = (initialState:TxListFormatState) => {
  const [txListSelection, setTxListSelection] = usePersistedState('txListFormatSelection', initialState.txListFormat);

  const txListFormatList = [
    'compact',
    'detailed',
  ];

  const changeTxListFormat = (value: 'compact' | 'detailed') => {
    setTxListSelection(value);
  };

  return {
    txListFormat: txListSelection,
    changeTxListFormat,
    txListFormatList,
  };
};
