import chainConfig from '@/chainConfig';
import type { Theme } from '@/recoil/settings/types';
import { defaultTheme, isThemeSupported, themeDictionary } from '@/styles';

const { themes } = chainConfig();

// ================================
// CONSTANTS
// ================================
export const THEME_LIST: Theme[] = themes.themeList;

export const THEME_DICTIONARY = themeDictionary;

export const getThemeTemplate = (theme: Theme) => {
  if (isThemeSupported(theme)) {
    return THEME_DICTIONARY[theme];
  }
  return defaultTheme;
};

export const DATE_LIST = ['locale', 'utc'];

export const TX_LIST = ['compact', 'detailed'];
