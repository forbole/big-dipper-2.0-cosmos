import { Cw20TokenInfoDocument } from '@src/graphql/cw20_tokens';
import axios from 'axios';
import * as R from 'ramda';
import { Cw20TokenInfo } from './types';

export const fetchCW20TokenInfo = async (address: string):Promise<Cw20TokenInfo> => {
  const defaultReturnValue = {
    cw20TokenInfo: {
      address: '',
      name: '',
      denom: '',
      logo: '',
      exponent: 0,
      circulatingSupply: 0,
      maxSupply: 0,
      minterAddress: '',
      projectUrl: '',
    },
  };

  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        address,
      },
      query: Cw20TokenInfoDocument,
    });
    const tokenInfo = R.pathOr(defaultReturnValue, ['data', 'cw20token_info_by_pk'], data);

    return {
      address,
      name: tokenInfo.name,
      denom: tokenInfo.symbol,
      circulatingSupply: tokenInfo.circulating_supply,
      exponent: tokenInfo.decimals,
      maxSupply: tokenInfo.max_supply,
      minterAddress: tokenInfo.minter,
      projectUrl: tokenInfo.project_url,
    };
  } catch (error) {
    return defaultReturnValue.cw20TokenInfo;
  }
};
