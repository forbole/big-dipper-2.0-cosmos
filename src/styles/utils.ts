import { themes as desmosThemes } from './themes/desmos';
import { themes as agoricThemes } from './themes/agoric';
import { themes as akashThemes } from './themes/akash';
import { themes as assetmantleThemes } from './themes/assetmantle';
import { themes as bandThemes } from './themes/band';
import { themes as bitsongThemes } from './themes/bitsong';
import { themes as comdexThemes } from './themes/comdex';
import { themes as cosmosThemes } from './themes/cosmos';
import { themes as crescentThemes } from './themes/crescent';
import { themes as eMoneyThemes } from './themes/eMoney';
import { themes as evmosThemes } from './themes/evmos';
import { themes as likecoinThemes } from './themes/likecoin';
import { themes as nomicThemes } from './themes/nomic';
import { themes as osmosisThemes } from './themes/osmosis';
import { themes as persistenceThemes } from './themes/persistence';
import { themes as provenanceThemes } from './themes/provenance';
import { themes as regenThemes } from './themes/regen';
import { themes as rizonThemes } from './themes/rizon';
import { themes as shentuThemes } from './themes/shentu';
import { themes as sifchainThemes } from './themes/sifchain';
import { themes as strideThemes } from './themes/stride';

export const getTemplates = (chainName: string) => {
  switch (chainName) {
    case 'desmos':
      return {
        lightTemplate: desmosThemes.lightTemplate,
        darkTemplate: desmosThemes.darkTemplate,
        deuteranopiaTemplate: desmosThemes.deuteranopiaTemplate,
        tritanopiaTemplate: desmosThemes.tritanopiaTemplate,
      };
    case 'agoric':
      return {
        lightTemplate: agoricThemes.lightTemplate,
        darkTemplate: agoricThemes.darkTemplate,
        deuteranopiaTemplate: agoricThemes.deuteranopiaTemplate,
        tritanopiaTemplate: agoricThemes.tritanopiaTemplate,
      };
    case 'akash':
      return {
        lightTemplate: akashThemes.lightTemplate,
        darkTemplate: akashThemes.darkTemplate,
        deuteranopiaTemplate: akashThemes.deuteranopiaTemplate,
        tritanopiaTemplate: akashThemes.tritanopiaTemplate,
      };
    case 'assetmantle':
      return {
        lightTemplate: assetmantleThemes.lightTemplate,
        darkTemplate: assetmantleThemes.darkTemplate,
        deuteranopiaTemplate: assetmantleThemes.deuteranopiaTemplate,
        tritanopiaTemplate: assetmantleThemes.tritanopiaTemplate,
      };
    case 'band':
      return {
        lightTemplate: bandThemes.lightTemplate,
        darkTemplate: bandThemes.darkTemplate,
        deuteranopiaTemplate: bandThemes.deuteranopiaTemplate,
        tritanopiaTemplate: bandThemes.tritanopiaTemplate,
      };
    case 'bitsong':
      return {
        lightTemplate: bitsongThemes.lightTemplate,
        darkTemplate: bitsongThemes.darkTemplate,
        deuteranopiaTemplate: bitsongThemes.deuteranopiaTemplate,
        tritanopiaTemplate: bitsongThemes.tritanopiaTemplate,
      };
    case 'comdex':
      return {
        lightTemplate: comdexThemes.lightTemplate,
        darkTemplate: comdexThemes.darkTemplate,
        deuteranopiaTemplate: comdexThemes.deuteranopiaTemplate,
        tritanopiaTemplate: comdexThemes.tritanopiaTemplate,
      };
    case 'cosmos':
      return {
        lightTemplate: cosmosThemes.lightTemplate,
        darkTemplate: cosmosThemes.darkTemplate,
        deuteranopiaTemplate: cosmosThemes.deuteranopiaTemplate,
        tritanopiaTemplate: cosmosThemes.tritanopiaTemplate,
      };
    case 'crescent':
      return {
        lightTemplate: crescentThemes.lightTemplate,
        darkTemplate: crescentThemes.darkTemplate,
        deuteranopiaTemplate: crescentThemes.deuteranopiaTemplate,
        tritanopiaTemplate: crescentThemes.tritanopiaTemplate,
      };
    case 'eMoney':
      return {
        lightTemplate: eMoneyThemes.lightTemplate,
        darkTemplate: eMoneyThemes.darkTemplate,
        deuteranopiaTemplate: eMoneyThemes.deuteranopiaTemplate,
        tritanopiaTemplate: eMoneyThemes.tritanopiaTemplate,
      };
    case 'evmos':
      return {
        lightTemplate: evmosThemes.lightTemplate,
        darkTemplate: evmosThemes.darkTemplate,
        deuteranopiaTemplate: evmosThemes.deuteranopiaTemplate,
        tritanopiaTemplate: evmosThemes.tritanopiaTemplate,
      };
    case 'likecoin':
      return {
        lightTemplate: likecoinThemes.lightTemplate,
        darkTemplate: likecoinThemes.darkTemplate,
        deuteranopiaTemplate: likecoinThemes.deuteranopiaTemplate,
        tritanopiaTemplate: likecoinThemes.tritanopiaTemplate,
      };
    case 'nomic':
      return {
        lightTemplate: nomicThemes.lightTemplate,
        darkTemplate: nomicThemes.darkTemplate,
        deuteranopiaTemplate: nomicThemes.deuteranopiaTemplate,
        tritanopiaTemplate: nomicThemes.tritanopiaTemplate,
      };
    case 'osmosis':
      return {
        lightTemplate: osmosisThemes.lightTemplate,
        darkTemplate: osmosisThemes.darkTemplate,
        deuteranopiaTemplate: osmosisThemes.deuteranopiaTemplate,
        tritanopiaTemplate: osmosisThemes.tritanopiaTemplate,
      };
    case 'persistence':
      return {
        lightTemplate: persistenceThemes.lightTemplate,
        darkTemplate: persistenceThemes.darkTemplate,
        deuteranopiaTemplate: persistenceThemes.deuteranopiaTemplate,
        tritanopiaTemplate: persistenceThemes.tritanopiaTemplate,
      };
    case 'provenance':
      return {
        lightTemplate: provenanceThemes.lightTemplate,
        darkTemplate: provenanceThemes.darkTemplate,
        deuteranopiaTemplate: provenanceThemes.deuteranopiaTemplate,
        tritanopiaTemplate: provenanceThemes.tritanopiaTemplate,
      };
    case 'regen':
      return {
        lightTemplate: regenThemes.lightTemplate,
        darkTemplate: regenThemes.darkTemplate,
        deuteranopiaTemplate: regenThemes.deuteranopiaTemplate,
        tritanopiaTemplate: regenThemes.tritanopiaTemplate,
      };
    case 'rizon':
      return {
        lightTemplate: rizonThemes.lightTemplate,
        darkTemplate: rizonThemes.darkTemplate,
        deuteranopiaTemplate: rizonThemes.deuteranopiaTemplate,
        tritanopiaTemplate: rizonThemes.tritanopiaTemplate,
      };
    case 'shentu':
      return {
        lightTemplate: shentuThemes.lightTemplate,
        darkTemplate: shentuThemes.darkTemplate,
        deuteranopiaTemplate: shentuThemes.deuteranopiaTemplate,
        tritanopiaTemplate: shentuThemes.tritanopiaTemplate,
      };
    case 'sifchain':
      return {
        lightTemplate: sifchainThemes.lightTemplate,
        darkTemplate: sifchainThemes.darkTemplate,
        deuteranopiaTemplate: sifchainThemes.deuteranopiaTemplate,
        tritanopiaTemplate: sifchainThemes.tritanopiaTemplate,
      };
    case 'stride':
      return {
        lightTemplate: strideThemes.lightTemplate,
        darkTemplate: strideThemes.darkTemplate,
        deuteranopiaTemplate: strideThemes.deuteranopiaTemplate,
        tritanopiaTemplate: strideThemes.tritanopiaTemplate,
      };

    default:
      return {
        lightTemplate: desmosThemes.lightTemplate,
        darkTemplate: desmosThemes.darkTemplate,
        deuteranopiaTemplate: desmosThemes.deuteranopiaTemplate,
        tritanopiaTemplate: desmosThemes.tritanopiaTemplate,
      };
  }
};
