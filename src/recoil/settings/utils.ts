import {
  themeList,
  themeDictionary,
} from '@styles';

import {
  Theme,
} from './types';

// ================================
// CONSTANTS
// ================================

export const THEME_LIST: Theme[] = themeList;

export const THEME_DICTIONARY = themeDictionary;

export const getThemeTemplate = (theme: Theme) => {
  if (THEME_DICTIONARY[theme]) {
    return THEME_DICTIONARY[theme];
  }
  return THEME_DICTIONARY[THEME_LIST[0]];
};

export const DATE_LIST = [
  'locale',
  'utc',
];

export const TX_LIST = [
  'compact',
  'detailed',
];
