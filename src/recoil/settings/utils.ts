import {
  lightTemplate,
  // darkTemplate,
  // deuteranopiaTemplate,
  // tritanopiaTemplate,
  ThemeDictionary,
} from '@styles';
import {
  themeList,
} from '@configs';
import {
  Theme,
} from './types';

// ================================
// CONSTANTS
// ================================

export const THEME_LIST: Theme[] = themeList;

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
