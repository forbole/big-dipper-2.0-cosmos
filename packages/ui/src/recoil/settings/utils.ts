import chainConfig from 'ui/chainConfig';
import { defaultTheme, isThemeSupported, themeDictionary } from 'ui/styles';
import type { Theme } from './types';

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
