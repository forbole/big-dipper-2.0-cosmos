import {
  useState, useEffect,
} from 'react';

export const useLanguageDrawer = (lang: string, toggleNavMenus: () => void) => {
  const [currentLang, setLang] = useState(lang);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (lang !== currentLang) {
      setDrawerOpen(false);
      toggleNavMenus();
      setLang(lang);
    }
  }, [lang]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return {
    toggleDrawer,
    drawerOpen,
  };
};

export const useThemeDrawer = (theme: string, toggleNavMenus: () => void) => {
  const [currentTheme, setTheme] = useState(theme);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (theme !== currentTheme) {
      setDrawerOpen(false);
      toggleNavMenus();
      setTheme(theme);
    }
  }, [theme]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return {
    toggleDrawer,
    drawerOpen,
  };
};
