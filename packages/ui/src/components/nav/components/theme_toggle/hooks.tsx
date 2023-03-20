/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { THEME_DICTIONARY, writeTheme, Theme } from '@/recoil/settings';

const useThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(writeTheme) as [Theme, SetterOrUpdater<Theme>];
  const [disabled, setDisabled] = useState<boolean>(false);

  const themeChange = () => {
    setTheme((prevTheme: Theme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const defineVisibility = () => {
    if (theme === 'light') {
      if ('dark' in THEME_DICTIONARY) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
    if (theme === 'dark') {
      if ('light' in THEME_DICTIONARY) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  };

  useEffect(() => {
    defineVisibility();
  }, []);

  return {
    theme,
    themeChange,
    disabled,
  };
};

export default useThemeToggle;
