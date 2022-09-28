import { themes as agoricThemes } from './themes/agoric';
import { themes as assetmantleThemes } from './themes/assetmantle';
import { themes as bandThemes } from './themes/band';
import { themes as bitsongThemes } from './themes/bitsong';
import { themes as comdexThemes } from './themes/comdex';
import { themes as cosmosThemes } from './themes/cosmos';
import { themes as emoneyThemes } from './themes/eMoney';
import { themes as likecoinThemes } from './themes/likecoin';
import { themes as osmosisThemes } from './themes/osmosis';
import { themes as provenanceThemes } from './themes/provenance';
import { themes as regenThemes } from './themes/regen';
import { themes as rizonThemes } from './themes/rizon';
import { themes as sifchainThemes } from './themes/sifchain';

import { themes as baseThemes } from './themes/base_theme';

const getThemes = (chainName: string) => {
  switch (chainName) {
    case 'agoric':
      return {
        themeDictionary: agoricThemes.themeDictionary,
        themeList: agoricThemes.themeList,
      };
    case 'assetmantle':
      return {
        themeDictionary: assetmantleThemes.themeDictionary,
        themeList: assetmantleThemes.themeList,
      };
    case 'band':
      return {
        themeDictionary: bandThemes.themeDictionary,
        themeList: bandThemes.themeList,
      };
    case 'bitsong':
      return {
        themeDictionary: bitsongThemes.themeDictionary,
        themeList: bitsongThemes.themeList,
      };
    case 'comdex':
      return {
        themeDictionary: comdexThemes.themeDictionary,
        themeList: comdexThemes.themeList,
      };
    case 'cosmos':
      return {
        themeDictionary: cosmosThemes.themeDictionary,
        themeList: cosmosThemes.themeList,
      };
    case 'emoney':
      return {
        themeDictionary: emoneyThemes.themeDictionary,
        themeList: emoneyThemes.themeList,
      };
    case 'likecoin':
      return {
        themeDictionary: likecoinThemes.themeDictionary,
        themeList: likecoinThemes.themeList,
      };
    case 'osmosis':
      return {
        themeDictionary: osmosisThemes.themeDictionary,
        themeList: osmosisThemes.themeList,
      };
    case 'provenance':
      return {
        themeDictionary: provenanceThemes.themeDictionary,
        themeList: provenanceThemes.themeList,
      };
    case 'regen':
      return {
        themeDictionary: regenThemes.themeDictionary,
        themeList: regenThemes.themeList,
      };
    case 'rizon':
      return {
        themeDictionary: rizonThemes.themeDictionary,
        themeList: rizonThemes.themeList,
      };
    case 'sifchain':
      return {
        themeDictionary: sifchainThemes.themeDictionary,
        themeList: sifchainThemes.themeList,
      };

    default:
      return {
        themeDictionary: baseThemes.themeDictionary,
        themeList: baseThemes.themeList,
      };
  }
};

export {
  getThemes,
};
