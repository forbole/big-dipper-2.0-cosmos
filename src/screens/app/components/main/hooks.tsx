import {
  useEffect,
  useState,
} from 'react';
import {
  useRecoilState, SetterOrUpdater,
} from 'recoil';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  writeTheme,
  getThemeTemplate,
  THEME_DICTIONARY,
} from '@recoil/settings';
import {
  Theme,
} from '@recoil/settings/types';
import { chainConfig } from '@configs';
import dayjs from '@utils/dayjs';
import {
  getItem, THEME_KEY,
} from '@utils/localstorage';

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState(writeTheme) as [Theme, SetterOrUpdater<Theme>];

  useEffect(() => {
    const isClient = typeof window === 'object';
    let currentTheme: Theme = theme;
    if (isClient) {
      const savedTheme = getItem(THEME_KEY, 'device');
      if (savedTheme === 'device') {
        if (window?.matchMedia('(prefers-color-scheme: dark)')?.matches) {
          currentTheme = 'dark';
        }
      } else if (THEME_DICTIONARY[savedTheme]) {
        currentTheme = savedTheme;
      }
    }
    setTheme(currentTheme);
  }, [theme]);

  return ({
    muiTheme: createMuiTheme(getThemeTemplate(theme)),
  });
};

export const useGenesis = () => {
  const utcTimeNow = dayjs.utc().format('YYYY-MM-DDTHH:mm:ss');
  const [genesisStarted, setGenesis] = useState(chainConfig.genesis.time < utcTimeNow);

  const startGenesis = () => {
    setTimeout(() => {
      setGenesis(true);
    }, 10000);
  };

  return {
    genesisStarted,
    startGenesis,
  };
};
