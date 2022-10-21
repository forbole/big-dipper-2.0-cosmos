import { Theme } from '@recoil/settings/types';
import { getMainnetChainConfig } from './mainnet_configs';
import { getTestnetChainConfig } from './testnet_configs';
import baseChainConfig from './chain_configs/base-config.json';
import generalConfig from './general_config.json';

const { chainName } = generalConfig;

/**
 * Helper function to return different configs based on the same chain
 * @returns config
 */
const getChainConfig = () => {
  if (!process.env.CHAIN_TYPE) throw new Error('CHAIN_TYPE is not defined');
  const chainType = process.env.CHAIN_TYPE;

  if (!chainName) throw new Error('chainName is not defined');

  switch (chainType) {
    case 'mainnet':
      return getMainnetChainConfig(chainName);
    case 'testnet':
      return getTestnetChainConfig(chainName);
    default:
      return baseChainConfig;
  }
};

const chainConfig = getChainConfig();
const themeList = chainConfig.style.themes.themeList as Theme[];

export {
  chainConfig,
  generalConfig,
  themeList,
};
