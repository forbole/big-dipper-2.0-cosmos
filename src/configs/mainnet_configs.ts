import chainConfigAgoricMainnet from './chain_configs/agoric-mainnet.json';
import chainConfigAssetmantleMainnet from './chain_configs/assetmantle-mainnet.json';
import chainConfigBandMainnet from './chain_configs/band-mainnet.json';
import chainConfigBitsongMainnet from './chain_configs/bitsong-mainnet.json';
import chainConfigComdexMainnet from './chain_configs/comdex-mainnet.json';
import chainConfigCosmosMainnet from './chain_configs/cosmos-mainnet.json';
import chainConfigEMoneyMainnet from './chain_configs/emoney-mainnet.json';
import chainConfigLikecoinMainnet from './chain_configs/likecoin-mainnet.json';
import chainConfigOsmosisMainnet from './chain_configs/osmosis-mainnet.json';
import chainConfigProvenanceMainnet from './chain_configs/provenance-mainnet.json';
import chainConfigRegenMainnet from './chain_configs/regen-mainnet.json';
import chainConfigRizonMainnet from './chain_configs/rizon-mainnet.json';
import chainConfigShentuMainnet from './chain_configs/shentu-mainnet.json';
import chainConfigSifchainMainnet from './chain_configs/sifchain-mainnet.json';
import baseChainConfig from './chain_configs/base-config.json';

const getMainnetChainConfig = (chainName: string) => {
  switch (chainName) {
    case 'agoric':
      return chainConfigAgoricMainnet;
    case 'assetmantle':
      return chainConfigAssetmantleMainnet;
    case 'band':
      return chainConfigBandMainnet;
    case 'bitsong':
      return chainConfigBitsongMainnet;
    case 'comdex':
      return chainConfigComdexMainnet;
    case 'cosmos':
      return chainConfigCosmosMainnet;
    case 'emoney':
      return chainConfigEMoneyMainnet;
    case 'likecoin':
      return chainConfigLikecoinMainnet;
    case 'osmosis':
      return chainConfigOsmosisMainnet;
    case 'provenance':
      return chainConfigProvenanceMainnet;
    case 'regen':
      return chainConfigRegenMainnet;
    case 'rizon':
      return chainConfigRizonMainnet;
    case 'shentu':
      return chainConfigShentuMainnet;
    case 'sifchain':
      return chainConfigSifchainMainnet;

    default:
      return baseChainConfig;
  }
};

export {
  getMainnetChainConfig,
};
