import chainConfigAgoricMainnet from './chain_configs/agoric-mainnet.json';
import chainConfigAkashMainnet from './chain_configs/akash-mainnet.json';
import chainConfigAssetmantleMainnet from './chain_configs/assetmantle-mainnet.json';
import chainConfigBandMainnet from './chain_configs/band-mainnet.json';
import chainConfigBitsongMainnet from './chain_configs/bitsong-mainnet.json';
import chainConfigComdexMainnet from './chain_configs/comdex-mainnet.json';
import chainConfigCosmosMainnet from './chain_configs/cosmos-mainnet.json';
import chainConfigCrescentMainnet from './chain_configs/crescent-mainnet.json';
import chainConfigDesmosMainnet from './chain_configs/desmos-mainnet.json';
import chainConfigEMoneyMainnet from './chain_configs/emoney-mainnet.json';
import chainConfigEvmosMainnet from './chain_configs/evmos-mainnet.json';
import chainConfigLikecoinMainnet from './chain_configs/likecoin-mainnet.json';
import chainConfigNomicMainnet from './chain_configs/nomic-mainnet.json';
import chainConfigOsmosisMainnet from './chain_configs/osmosis-mainnet.json';
import chainConfigPersistenceMainnet from './chain_configs/persistence-mainnet.json';
import chainConfigProvenanceMainnet from './chain_configs/provenance-mainnet.json';
import chainConfigRegenMainnet from './chain_configs/regen-mainnet.json';
import chainConfigRizonMainnet from './chain_configs/rizon-mainnet.json';
import chainConfigShentuMainnet from './chain_configs/shentu-mainnet.json';
import chainConfigSifchainMainnet from './chain_configs/sifchain-mainnet.json';
import chainConfigStrideMainnet from './chain_configs/stride-mainnet.json';

const getMainnetChainConfig = (chainName: string) => {
  switch (chainName) {
    case 'agoric':
      return chainConfigAgoricMainnet;
    case 'akash':
      return chainConfigAkashMainnet;
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
    case 'crescent':
      return chainConfigCrescentMainnet;
    case 'desmos':
      return chainConfigDesmosMainnet;
    case 'emoney':
      return chainConfigEMoneyMainnet;
    case 'evmos':
      return chainConfigEvmosMainnet;
    case 'likecoin':
      return chainConfigLikecoinMainnet;
    case 'nomic':
      return chainConfigNomicMainnet;
    case 'osmosis':
      return chainConfigOsmosisMainnet;
    case 'persistence':
      return chainConfigPersistenceMainnet;
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
    case 'stride':
      return chainConfigStrideMainnet;

    default:
      return chainConfigDesmosMainnet;
  }
};

export {
  getMainnetChainConfig,
};
