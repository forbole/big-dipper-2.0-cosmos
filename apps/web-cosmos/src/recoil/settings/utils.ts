import { themeDictionary } from '@styles';
import chainConfig from 'ui/chainConfig';
import { Theme } from './types';

// ================================
// CONSTANTS
// ================================

export const THEME_LIST: Theme[] = chainConfig.themes.themeList;

export const THEME_DICTIONARY = themeDictionary;

export const getThemeTemplate = (theme: Theme) => {
  if (THEME_DICTIONARY[theme]) {
    return THEME_DICTIONARY[theme];
  }
  const first = Object.keys(THEME_DICTIONARY)[0];
  if (!first) throw new Error('No theme found');
  return first;
};

export const DATE_LIST = ['locale', 'utc'];

export const TX_LIST = ['compact', 'detailed'];
