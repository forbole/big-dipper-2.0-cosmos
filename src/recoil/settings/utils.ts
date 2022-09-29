import {
  lightTemplate,
  ThemeDictionary,
} from '@styles';
import {
  chainConfig,
} from '@configs';
import {
  Theme,
} from './types';

// ================================
// CONSTANTS
// ================================

export const THEME_LIST: Theme[] = chainConfig.style.themes.themeList as Theme[];

export const THEME_DICTIONARY = ThemeDictionary;

export const getThemeTemplate = (theme: Theme) => {
  if (THEME_DICTIONARY[theme]) {
    return THEME_DICTIONARY[theme];
  }
  return lightTemplate;
};

export const DATE_LIST = [
  'locale',
  'utc',
];

export const TX_LIST = [
  'compact',
  'detailed',
];
