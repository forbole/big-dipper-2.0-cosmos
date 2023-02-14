import { ThemeOptions } from '@mui/material/styles';
import chainConfig from '@/chainConfig';
import {
  darkTemplate,
  deuteranopiaTemplate,
  lightTemplate,
  tritanopiaTemplate,
} from '@/styles/theme';

const { themes } = chainConfig();
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

const themeDictionary = getThemeDictionary(themes.themeList);
const defaultTheme = isThemeSupported(themes.default)
  ? themeDictionary[themes.default]
  : themeDictionary[themes.themeList[0]];

function isThemeSupported(theme: string) {
  return theme in themeDictionary;
}

export { defaultTheme, isThemeSupported, themeDictionary };
