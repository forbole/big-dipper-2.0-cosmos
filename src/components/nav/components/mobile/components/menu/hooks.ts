import {
  useState, useEffect,
} from 'react';

export const useMenu = (lang: string, toggleNavMenus: () => void) => {
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
