import {
  getThemes,
} from './utils';

import { themes as baseThemes } from './themes/base_theme';

const chainName = process.env.CHAIN_NAME;

const {
  themeDictionary,
  themeList,
} = getThemes(chainName);

export {
  themeDictionary,
  themeList,
  baseThemes,
};
