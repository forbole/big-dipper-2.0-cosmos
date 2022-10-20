import chainConfigTestnet from './chain_config.testnet.json';
import chainConfigMainnet from './chain_config.mainnet.json';
import generalConfig from './general_config.json';

/**
 * Helper function to return different configs based on the same chain
 * @returns config
 */
const getChainConfig = () => {
  const chainType = process.env.NEXT_PUBLIC_CHAIN_TYPE || process.env.NEXT_PUBLIC_CHAIN_STATUS;
  if (chainType === 'mainnet') {
    return chainConfigMainnet;
  }
  return chainConfigTestnet;
};

const chainConfig = getChainConfig();

export {
  chainConfig,
  generalConfig,
};
