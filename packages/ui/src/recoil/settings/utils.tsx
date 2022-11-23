import chainConfig from '@/chainConfig';
import { defaultTheme, isThemeSupported, themeDictionary } from '@/styles';
import type { Theme } from '@/recoil/settings/types';

// ================================
// CONSTANTS
// ================================

export const THEME_LIST: Theme[] = chainConfig.themes.themeList;

export const THEME_DICTIONARY = themeDictionary;

export const getThemeTemplate = (theme: Theme) => {
  if (isThemeSupported(theme)) {
    return THEME_DICTIONARY[theme];
  }
  return defaultTheme;
};

export const DATE_LIST = ['locale', 'utc'];

export const TX_LIST = ['compact', 'detailed'];
