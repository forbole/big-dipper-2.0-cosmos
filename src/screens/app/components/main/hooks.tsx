import {
  useEffect,
} from 'react';
import {
  useRecoilState, SetterOrUpdater,
} from 'recoil';
import { usePersistedState } from '@hooks';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  writeTheme,
  getThemeTemplate,
  THEME_DICTIONARY,
} from '@recoil/settings';
import {
  Theme,
} from '@recoil/settings/types';

export const useMain = () => {
  const [theme, setTheme] = useRecoilState(writeTheme) as [Theme, SetterOrUpdater<Theme>];
  const [savedTheme] = usePersistedState('themeSelection', theme);
  // const [savedTheme, setSavedTheme] = usePersistedState('themeSelection', theme);

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

  // const changeTheme = (value: Theme) => {
  //   if (THEME_DICTIONARY[value]) {
  //     setSavedTheme(value);
  //   }
  // };

  return ({
    muiTheme: createMuiTheme(getThemeTemplate(theme)),
  });
};
