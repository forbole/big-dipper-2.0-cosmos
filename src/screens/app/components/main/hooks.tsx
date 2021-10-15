import {
  useEffect, useState,
} from 'react';
import {
  useRecoilValue, useRecoilState,
} from 'recoil';
import { usePersistedState } from '@hooks';
import {
  getTheme,
  THEME_DICTIONARY,
} from '@recoil/settings';

export const useMain = () => {
  const [theme, setTheme] = useRecoilState(getTheme);
  const themeTwo = useRecoilValue(getTheme);
  const [savedTheme, setSavedTheme] = usePersistedState('themeSelection', theme);

  useEffect(() => {
    const isClient = typeof window === 'object';
    if (savedTheme === 'device') {
      if (
        isClient
        && window?.matchMedia('(prefers-color-scheme: dark)')?.matches
      ) {
        setTheme('dark');
      }
    } else if (THEME_DICTIONARY[savedTheme]) {
      setTheme(savedTheme);
    } else {
      setTheme('light');
    }
  }, [savedTheme]);
};
