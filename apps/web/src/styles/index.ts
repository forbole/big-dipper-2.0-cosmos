import chainConfig from 'ui/chainConfig';
import { ThemeOptions } from '@material-ui/core/styles';

import { lightTemplate, darkTemplate, deuteranopiaTemplate, tritanopiaTemplate } from './theme';

type ThemeDictionaryType = {
  light?: ThemeOptions;
  dark?: ThemeOptions;
  deuteranopia?: ThemeOptions;
  tritanopia?: ThemeOptions;
};

// getThemeDictionary allows to return a theme dictionary according to the config theme list
const getThemeDictionary = (list: string[]): ThemeDictionaryType => {
  const themeDict: ThemeDictionaryType = {};
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === 'light') themeDict.light = lightTemplate;
    if (list[i] === 'dark') themeDict.dark = darkTemplate;
    if (list[i] === 'deuteranopia') themeDict.deuteranopia = deuteranopiaTemplate;
    if (list[i] === 'tritanopia') themeDict.tritanopia = tritanopiaTemplate;
  }

  return themeDict;
};

const themeDictionary = getThemeDictionary(chainConfig.themes.themeList);

export { themeDictionary };
