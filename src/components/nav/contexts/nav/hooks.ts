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
    { onCompleted: (data) => {
      setState((prevState) => ({
        ...prevState,
        rawData: formatUseChainIdQuery(data),
      }));
    } },
  );

  const formatUseChainIdQuery = (data: MarketDataQuery) => {
    // initial
    const { rawData } = initalState;
    const { price } = rawData; // update once on market
    const { marketCap } = rawData; // update once on market
    const { inflation } = rawData; // update once on market
    let { communityPool } = rawData;

    // formats
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
      rawData, uiData,
    } = state;
    return ({
      price: uiData.price,
      marketCap: uiData.marketCap,
      inflation: uiData.inflation,
      communityPool: `${numeral(formatDenom(rawData.communityPool)).format('0,0.00')} ${chainConfig.display.toUpperCase()}`,
    });
  };

  return {
    rawData: state.rawData,
    uiData: formatUi(),
  };
};
