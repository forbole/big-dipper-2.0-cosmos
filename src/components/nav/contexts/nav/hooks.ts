import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { chainConfig } from '@src/chain_config';
import { formatDenom } from '@utils/format_denom';
import {
  useMarketDataQuery, MarketDataQuery,
} from '@graphql/types';
import { NavState } from './types';

export const useNav = (initalState: NavState) => {
  const [state, setState] = useState<NavState>(initalState);

  useMarketDataQuery(
    {
      variables: {
        denom: chainConfig.display,
      },
      onCompleted: (data) => {
        setState((prevState) => ({
          ...prevState,
          rawData: formatUseChainIdQuery(data),
        }));
      },
    },
  );

  const formatUseChainIdQuery = (data: MarketDataQuery) => {
    // initial
    const { rawData } = initalState;
    const { inflation } = rawData; // update once on market
    let { communityPool } = rawData;
    // formats
    const price = data.tokenPrice[0]?.price ?? state.rawData.price;
    const marketCap = data.tokenPrice[0]?.marketCap ?? state.rawData.marketCap;
    const [communityPoolCoin] = R.pathOr([], ['communityPool', 0, 'coins'], data).filter((x) => x.denom === chainConfig.base);
    if (communityPoolCoin) {
      communityPool = communityPoolCoin.amount;
    }

    return ({
      price,
      marketCap,
      inflation,
      communityPool,
    });
  };

  const formatUi = () => {
    const {
      rawData,
    } = state;
    return ({
      price: `$${numeral(state.rawData.price).format('0,0.[00]')}`,
      marketCap: `$${numeral(state.rawData.marketCap).format('0,0.[00]')}`,
      inflation: 'N/A',
      communityPool: `${numeral(formatDenom(rawData.communityPool)).format('0,0.00')} ${chainConfig.display.toUpperCase()}`,
    });
  };

  return {
    rawData: state.rawData,
    uiData: formatUi(),
  };
};
