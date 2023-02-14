import { useCallback, useEffect, useState } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { writeTheme, type Theme } from '@/recoil/settings';

export const useLanguageDrawer = (lang: string, toggleNavMenus: () => void) => {
  const [currentLang, setLang] = useState(lang);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (lang !== currentLang) {
      setDrawerOpen(false);
      toggleNavMenus();
      setLang(lang);
    }
  }, [currentLang, lang, toggleNavMenus]);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen]);

  return {
    toggleDrawer,
    drawerOpen,
  };
};

export const useThemeDrawer = (toggleNavMenus: (toggle?: boolean) => void) => {
  const [theme, setTheme] = useRecoilState(writeTheme) as [Theme, SetterOrUpdater<Theme>];

  const [currentTheme, setCurrentTheme] = useState(theme);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (theme !== currentTheme) {
      setDrawerOpen(false);
      toggleNavMenus(false);
      setCurrentTheme(theme);
    }
  }, [currentTheme, theme, toggleNavMenus]);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen]);

  const handleThemeChange = useCallback(
    (newTheme: Theme) => {
      setTheme(newTheme);
    },
    [setTheme]
  );

  return {
    toggleDrawer,
    drawerOpen,
    theme,
    handleThemeChange,
  };
};
