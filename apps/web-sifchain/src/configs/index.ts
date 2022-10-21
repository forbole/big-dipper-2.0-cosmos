import chainConfigTestnet from './chain_config.testnet.json';
import chainConfigMainnet from './chain_config.mainnet.json';
import chainConfigBetanet from './chain_config.betanet.json';
import generalConfig from './general_config.json';

/**
 * Helper function to return different configs based on the same chain
 * @returns config
 */
const getChainConfig = () => {
  const chainType = process.env.NEXT_PUBLIC_CHAIN_TYPE;
  if (chainType === 'mainnet') {
    return chainConfigMainnet;
  }
  if (chainType === 'betanet') {
    return chainConfigBetanet;
  }
  return chainConfigTestnet;
};

const chainConfig = getChainConfig();

export {
  chainConfig,
  generalConfig,
};
