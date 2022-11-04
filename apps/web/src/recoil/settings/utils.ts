import { lightTemplate, themeDictionary } from '@styles';
import chainConfig from 'ui/dist/chainConfig';
import { Theme } from './types';

// ================================
// CONSTANTS
// ================================

export const THEME_LIST: Theme[] = chainConfig.themes.themeList as Theme[];

export const THEME_DICTIONARY = themeDictionary;

export const getThemeTemplate = (theme: Theme) => {
  if (THEME_DICTIONARY[theme]) {
    return THEME_DICTIONARY[theme];
  }
  return lightTemplate;
};

export const DATE_LIST = ['locale', 'utc'];

export const TX_LIST = ['compact', 'detailed'];
