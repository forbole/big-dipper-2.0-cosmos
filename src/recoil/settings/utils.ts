import {
  lightTemplate,
  // darkTemplate,
  deuteranopiaTemplate,
  tritanopiaTemplate,
} from '@styles';
import {
  Theme,
} from './types';

// ================================
// CONSTANTS
// ================================

export const THEME_LIST: Theme[] = [
  'light',
  // 'dark',
  'deuteranopia',
  'tritanopia',
];

export const THEME_DICTIONARY = {
  light: lightTemplate,
  // dark: darkTemplate,
  deuteranopia: deuteranopiaTemplate,
  tritanopia: tritanopiaTemplate,
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
