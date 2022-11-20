import chainConfig from 'ui/chainConfig';
import { ThemeOptions } from '@material-ui/core/styles';

import { lightTemplate, darkTemplate, deuteranopiaTemplate, tritanopiaTemplate } from './theme';

type ThemeDictionaryType = { [theme: string]: ThemeOptions };

// getThemeDictionary allows to return a theme dictionary according to the config theme list
const getThemeDictionary = (list: string[]): ThemeDictionaryType => {
  const themeDict: ThemeDictionaryType = {};
  for (let i = 0; i < list.length; i += 1) {
    switch (list[i]) {
      case 'light':
        themeDict.light = lightTemplate;
        break;
      case 'dark':
        themeDict.dark = darkTemplate;
        break;
      case 'deuteranopia':
        themeDict.deuteranopia = deuteranopiaTemplate;
        break;
      case 'tritanopia':
        themeDict.tritanopia = tritanopiaTemplate;
        break;
      default:
        break;
    }
  }

  return themeDict;
};

const themeDictionary = getThemeDictionary(chainConfig.themes.themeList);
const defaultTheme = isThemeSupported(chainConfig.themes.default)
  ? themeDictionary[chainConfig.themes.default]
  : themeDictionary[chainConfig.themes.themeList[0]];

function isThemeSupported(theme: string) {
  return theme in themeDictionary;
}

export { defaultTheme, isThemeSupported, themeDictionary };
