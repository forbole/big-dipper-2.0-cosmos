import {
  useEffect,
  useState,
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
import { chainConfig } from '@configs';
import dayjs from '@utils/dayjs';

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState(writeTheme) as [Theme, SetterOrUpdater<Theme>];
  const [savedTheme] = usePersistedState('themeSelection', theme);

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
