import chainConfigComdexTestnet from './chain_configs/comdex-testnet.json';
import chainConfigCosmosTestnet from './chain_configs/cosmos-testnet.json';
import chainConfigLikecoinTestnet from './chain_configs/likecoin-testnet.json';
import baseChainConfig from './chain_configs/base-config.json';

const getTestnetChainConfig = (chainName: string) => {
  switch (chainName) {
    case 'comdex':
      return chainConfigComdexTestnet;
    case 'cosmos':
      return chainConfigCosmosTestnet;
    case 'likecoin':
      return chainConfigLikecoinTestnet;

    default:
      return baseChainConfig;
  }
};

export {
  getTestnetChainConfig,
};
