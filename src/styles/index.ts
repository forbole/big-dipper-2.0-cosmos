import {
  getThemes,
} from './utils';

const chainName = process.env.CHAIN_NAME;

const {
  themeDictionary,
  themeList,
} = getThemes(chainName);

export {
  themeDictionary,
  themeList,
};
