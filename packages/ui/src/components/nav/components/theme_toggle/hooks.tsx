/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { THEME_DICTIONARY, writeTheme, Theme } from '@/recoil/settings';

const useThemeToggle = () => {
  // set the initial value to be themes.default, which has been set by recoil get(atomState);
  const [theme, setTheme] = useRecoilState(writeTheme) as [Theme, SetterOrUpdater<Theme>];
  // if default is light, find if dark exists in THEME_DICTIONARY, setDisabled to true if the find is false
  const [disabled, setDisabled] = useState<boolean>(false);

  // onChange function to update the value;
  // function signature
  const themeChange = () => {
    // check if theme is light or dark, if 'light' change to 'dark' and vice versa;
    // if there's no dark or light present, move on to the next theme on the themeList
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
