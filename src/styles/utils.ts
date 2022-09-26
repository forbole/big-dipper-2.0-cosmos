import {
  desmosLightTemplate, desmosDarkTemplate, desmosDeuteranopiaTemplate, desmosTritanopiaTemplate,
} from './theme/desmos';

import {
  agoricLightTemplate, agoricDarkTemplate, agoricDeuteranopiaTemplate, agoricTritanopiaTemplate,
} from './theme/agoric';

import {
  akashLightTemplate, akashDarkTemplate, akashDeuteranopiaTemplate, akashTritanopiaTemplate,
} from './theme/akash';

import {
  assetmantleLightTemplate, assetmantleDarkTemplate,
  assetmantleDeuteranopiaTemplate, assetmantleTritanopiaTemplate,
} from './theme/assetmantle';

import {
  bandLightTemplate, bandDarkTemplate, bandDeuteranopiaTemplate, bandTritanopiaTemplate,
} from './theme/band';

import {
  bitsongLightTemplate, bitsongDarkTemplate, bitsongDeuteranopiaTemplate, bitsongTritanopiaTemplate,
} from './theme/bitsong';

import {
  comdexLightTemplate, comdexDarkTemplate, comdexDeuteranopiaTemplate, comdexTritanopiaTemplate,
} from './theme/comdex';

import {
  cosmosLightTemplate, cosmosDarkTemplate, cosmosDeuteranopiaTemplate, cosmosTritanopiaTemplate,
} from './theme/cosmos';

import {
  crescentLightTemplate, crescentDarkTemplate,
  crescentDeuteranopiaTemplate, crescentTritanopiaTemplate,
} from './theme/crescent';

import {
  eMoneyLightTemplate, eMoneyDarkTemplate, eMoneyDeuteranopiaTemplate, eMoneyTritanopiaTemplate,
} from './theme/eMoney';

import {
  evmosLightTemplate, evmosDarkTemplate, evmosDeuteranopiaTemplate, evmosTritanopiaTemplate,
} from './theme/evmos';

import {
  likecoinLightTemplate, likecoinDarkTemplate,
  likecoinDeuteranopiaTemplate, likecoinTritanopiaTemplate,
} from './theme/likecoin';

import {
  nomicLightTemplate, nomicDarkTemplate, nomicDeuteranopiaTemplate, nomicTritanopiaTemplate,
} from './theme/nomic';

import {
  osmosisLightTemplate, osmosisDarkTemplate,
  osmosisDeuteranopiaTemplate, osmosisTritanopiaTemplate,
} from './theme/osmosis';

import {
  persistenceLightTemplate, persistenceDarkTemplate,
  persistenceDeuteranopiaTemplate, persistenceTritanopiaTemplate,
} from './theme/persistence';

import {
  provenanceLightTemplate, provenanceDarkTemplate,
  provenanceDeuteranopiaTemplate, provenanceTritanopiaTemplate,
} from './theme/provenance';

import {
  regenLightTemplate, regenDarkTemplate, regenDeuteranopiaTemplate, regenTritanopiaTemplate,
} from './theme/regen';

import {
  rizonLightTemplate, rizonDarkTemplate, rizonDeuteranopiaTemplate, rizonTritanopiaTemplate,
} from './theme/rizon';

import {
  shentuLightTemplate, shentuDarkTemplate, shentuDeuteranopiaTemplate, shentuTritanopiaTemplate,
} from './theme/shentu';

import {
  sifchainLightTemplate, sifchainDarkTemplate,
  sifchainDeuteranopiaTemplate, sifchainTritanopiaTemplate,
} from './theme/sifchain';

import {
  strideLightTemplate, strideDarkTemplate, strideDeuteranopiaTemplate, strideTritanopiaTemplate,
} from './theme/stride';

export const getTemplates = (chainName: string) => {
  switch (chainName) {
    case 'desmos':
      return {
        lightTemplate: desmosLightTemplate,
        darkTemplate: desmosDarkTemplate,
        deuteranopiaTemplate: desmosDeuteranopiaTemplate,
        tritanopiaTemplate: desmosTritanopiaTemplate,
      };
    case 'agoric':
      return {
        lightTemplate: agoricLightTemplate,
        darkTemplate: agoricDarkTemplate,
        deuteranopiaTemplate: agoricDeuteranopiaTemplate,
        tritanopiaTemplate: agoricTritanopiaTemplate,
      };
    case 'akash':
      return {
        lightTemplate: akashLightTemplate,
        darkTemplate: akashDarkTemplate,
        deuteranopiaTemplate: akashDeuteranopiaTemplate,
        tritanopiaTemplate: akashTritanopiaTemplate,
      };
    case 'assetmantle':
      return {
        lightTemplate: assetmantleLightTemplate,
        darkTemplate: assetmantleDarkTemplate,
        deuteranopiaTemplate: assetmantleDeuteranopiaTemplate,
        tritanopiaTemplate: assetmantleTritanopiaTemplate,
      };
    case 'band':
      return {
        lightTemplate: bandLightTemplate,
        darkTemplate: bandDarkTemplate,
        deuteranopiaTemplate: bandDeuteranopiaTemplate,
        tritanopiaTemplate: bandTritanopiaTemplate,
      };
    case 'bitsong':
      return {
        lightTemplate: bitsongLightTemplate,
        darkTemplate: bitsongDarkTemplate,
        deuteranopiaTemplate: bitsongDeuteranopiaTemplate,
        tritanopiaTemplate: bitsongTritanopiaTemplate,
      };
    case 'comdex':
      return {
        lightTemplate: comdexLightTemplate,
        darkTemplate: comdexDarkTemplate,
        deuteranopiaTemplate: comdexDeuteranopiaTemplate,
        tritanopiaTemplate: comdexTritanopiaTemplate,
      };
    case 'cosmos':
      return {
        lightTemplate: cosmosLightTemplate,
        darkTemplate: cosmosDarkTemplate,
        deuteranopiaTemplate: cosmosDeuteranopiaTemplate,
        tritanopiaTemplate: cosmosTritanopiaTemplate,
      };
    case 'crescent':
      return {
        lightTemplate: crescentLightTemplate,
        darkTemplate: crescentDarkTemplate,
        deuteranopiaTemplate: crescentDeuteranopiaTemplate,
        tritanopiaTemplate: crescentTritanopiaTemplate,
      };
    case 'eMoney':
      return {
        lightTemplate: eMoneyLightTemplate,
        darkTemplate: eMoneyDarkTemplate,
        deuteranopiaTemplate: eMoneyDeuteranopiaTemplate,
        tritanopiaTemplate: eMoneyTritanopiaTemplate,
      };
    case 'evmos':
      return {
        lightTemplate: evmosLightTemplate,
        darkTemplate: evmosDarkTemplate,
        deuteranopiaTemplate: evmosDeuteranopiaTemplate,
        tritanopiaTemplate: evmosTritanopiaTemplate,
      };
    case 'likecoin':
      return {
        lightTemplate: likecoinLightTemplate,
        darkTemplate: likecoinDarkTemplate,
        deuteranopiaTemplate: likecoinDeuteranopiaTemplate,
        tritanopiaTemplate: likecoinTritanopiaTemplate,
      };
    case 'nomic':
      return {
        lightTemplate: nomicLightTemplate,
        darkTemplate: nomicDarkTemplate,
        deuteranopiaTemplate: nomicDeuteranopiaTemplate,
        tritanopiaTemplate: nomicTritanopiaTemplate,
      };
    case 'osmosis':
      return {
        lightTemplate: osmosisLightTemplate,
        darkTemplate: osmosisDarkTemplate,
        deuteranopiaTemplate: osmosisDeuteranopiaTemplate,
        tritanopiaTemplate: osmosisTritanopiaTemplate,
      };
    case 'persistence':
      return {
        lightTemplate: persistenceLightTemplate,
        darkTemplate: persistenceDarkTemplate,
        deuteranopiaTemplate: persistenceDeuteranopiaTemplate,
        tritanopiaTemplate: persistenceTritanopiaTemplate,
      };
    case 'provenance':
      return {
        lightTemplate: provenanceLightTemplate,
        darkTemplate: provenanceDarkTemplate,
        deuteranopiaTemplate: provenanceDeuteranopiaTemplate,
        tritanopiaTemplate: provenanceTritanopiaTemplate,
      };
    case 'regen':
      return {
        lightTemplate: regenLightTemplate,
        darkTemplate: regenDarkTemplate,
        deuteranopiaTemplate: regenDeuteranopiaTemplate,
        tritanopiaTemplate: regenTritanopiaTemplate,
      };
    case 'rizon':
      return {
        lightTemplate: rizonLightTemplate,
        darkTemplate: rizonDarkTemplate,
        deuteranopiaTemplate: rizonDeuteranopiaTemplate,
        tritanopiaTemplate: rizonTritanopiaTemplate,
      };
    case 'shentu':
      return {
        lightTemplate: shentuLightTemplate,
        darkTemplate: shentuDarkTemplate,
        deuteranopiaTemplate: shentuDeuteranopiaTemplate,
        tritanopiaTemplate: shentuTritanopiaTemplate,
      };
    case 'sifchain':
      return {
        lightTemplate: sifchainLightTemplate,
        darkTemplate: sifchainDarkTemplate,
        deuteranopiaTemplate: sifchainDeuteranopiaTemplate,
        tritanopiaTemplate: sifchainTritanopiaTemplate,
      };
    case 'stride':
      return {
        lightTemplate: strideLightTemplate,
        darkTemplate: strideDarkTemplate,
        deuteranopiaTemplate: strideDeuteranopiaTemplate,
        tritanopiaTemplate: strideTritanopiaTemplate,
      };

    default:
      return {
        lightTemplate: desmosLightTemplate,
        darkTemplate: desmosDarkTemplate,
        deuteranopiaTemplate: desmosDeuteranopiaTemplate,
        tritanopiaTemplate: desmosTritanopiaTemplate,
      };
  }
};
