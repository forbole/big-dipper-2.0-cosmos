import chainConfigAkashTestnet from './chain_configs/akash-testnet.json';
import chainConfigCosmosTestnet from './chain_configs/cosmos-testnet.json';
import chainConfigDesmosTesnet from './chain_configs/desmos-testnet.json';
import chainConfigEvmosTestnet from './chain_configs/evmos-testnet.json';
import chainConfigLikecoinTestnet from './chain_configs/likecoin-testnet.json';

const getTestnetChainConfig = (chainName: string) => {
  switch (chainName) {
    case 'akash':
      return chainConfigAkashTestnet;
    case 'cosmos':
      return chainConfigCosmosTestnet;
    case 'desmos':
      return chainConfigDesmosTesnet;
    case 'evmos':
      return chainConfigEvmosTestnet;
    case 'likecoin':
      return chainConfigLikecoinTestnet;

    default:
      return chainConfigDesmosTesnet;
  }
};

export {
  getTestnetChainConfig,
};
