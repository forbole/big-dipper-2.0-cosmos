import { chainConfig } from '@configs';
import { ThemeOptions } from '@material-ui/core/styles';

import {
  lightTemplate,
  darkTemplate,
  deuteranopiaTemplate,
  tritanopiaTemplate,
} from './theme';

type ThemeDictionaryType = {
  light?: ThemeOptions;
  dark?: ThemeOptions;
  deuteranopia?: ThemeOptions;
  tritanopia?: ThemeOptions;
};

const getThemeDictionary = (list: string[]) :ThemeDictionaryType => {
  const themeDict: ThemeDictionaryType = {};

  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === 'light') {
      themeDict.light = lightTemplate;
    }
    if (list[i] === 'dark') {
      themeDict.dark = darkTemplate;
    }
    if (list[i] === 'deuteranopia') {
      themeDict.deuteranopia = deuteranopiaTemplate;
    }
    if (list[i] === 'tritanopia') {
      themeDict.tritanopia = tritanopiaTemplate;
    }
  }

  return themeDict;
};

const themeDictionary = getThemeDictionary(chainConfig.style.themes.themeList);

export {
  lightTemplate,
  themeDictionary,
};
