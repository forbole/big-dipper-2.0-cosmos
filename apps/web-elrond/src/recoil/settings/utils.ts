import {
  lightTemplate,
} from '@styles';
import {
  Theme,
} from './types';

// ================================
// CONSTANTS
// ================================

export const THEME_LIST: Theme[] = [
  'light',
];

export const THEME_DICTIONARY = {
  light: lightTemplate,
};

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
