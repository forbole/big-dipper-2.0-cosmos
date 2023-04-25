import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import chainConfig from '@/chainConfig';
import { atomState } from '@/recoil/settings/atom';
import type { AtomState, Theme } from '@/recoil/settings/types';
import { THEME_DICTIONARY } from '@/recoil/settings/utils';
import { DATE_KEY, getItem, THEME_KEY, TX_KEY, TIME_FORMAT_KEY } from '@/utils/localstorage';

const { themes } = chainConfig();
const isClient = typeof window === 'object';

export const useSettingsRecoil = () => {
  const [settings, setSettings] = useRecoilState(atomState);

  useEffect(() => {
    if (isClient) {
      const savedTheme = getItem(THEME_KEY, 'device');
      let currentTheme: Theme = settings.theme;
      if (savedTheme === 'device') {
        if (
          themes.themeList.includes('dark') &&
          window?.matchMedia('(prefers-color-scheme: dark)')?.matches
        ) {
          currentTheme = 'dark';
        }
      } else if (THEME_DICTIONARY[savedTheme]) {
        currentTheme = savedTheme;
      }

      const savedDate = getItem(DATE_KEY, settings.dateFormat);
      const savedTimeFormat = getItem(TIME_FORMAT_KEY, settings.timeFormat);
      const savedTx = getItem(TX_KEY, settings.txListFormat);
      const initSettings: AtomState = {
        theme: currentTheme,
        dateFormat: savedDate,
        timeFormat: savedTimeFormat,
        txListFormat: savedTx,
      };
      setSettings(initSettings);
    }
  }, [
    setSettings,
    settings.dateFormat,
    settings.timeFormat,
    settings.theme,
    settings.txListFormat,
  ]);
};
