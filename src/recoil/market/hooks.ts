/* eslint-disable max-len */
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useRecoilState,
  SetterOrUpdater,
} from 'recoil';
import {
  useMarketDataQuery,
  MarketDataQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import {
  writeMarket,
} from '@recoil/market';
import { AtomState } from '@recoil/market/types';
import { getDenom } from '@utils/get_denom';
import { formatToken } from '@utils/format_token';

export const useMarketRecoil = () => {
  const [market, setMarket] = useRecoilState(writeMarket) as [AtomState, SetterOrUpdater<AtomState>];

  useMarketDataQuery(
    {
      variables: {
        denom: chainConfig?.tokenUnits[chainConfig.primaryTokenUnit]?.display,
      },
      onCompleted: (data) => {
        if (data) {
          setMarket(formatUseChainIdQuery(data));
        }
      },
    },
  );

  const formatUseChainIdQuery = (data: MarketDataQuery): AtomState => {
    let {
      communityPool, price, marketCap,
    } = market;

    console.log('data', data);

    if (data?.tokenPrice?.length) {
      price = numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
      marketCap = data.tokenPrice[0]?.marketCap;
    }

    const [communityPoolCoin] = R.pathOr([], ['communityPool', 0, 'coins'], data).filter((x) => x.denom === chainConfig.primaryTokenUnit);
    const inflation = R.pathOr(0, ['inflation', 0, 'value'], data);

    const supply = formatToken(
      getDenom(
        R.pathOr([], ['supply', 0, 'coins'], data),
        chainConfig.primaryTokenUnit,
      ).amount,
      chainConfig.primaryTokenUnit,
    );
    if (communityPoolCoin) {
      communityPool = formatToken(communityPoolCoin.amount, communityPoolCoin.denom);
    }

    const bondedTokens = R.pathOr(0, ['bondedTokens', 0, 'bonded_tokens'], data);
    const aprSupply = R.pathOr(0, ['supply', 0, 'coins', 0, 'amount'], data);
    const apr = (aprSupply * inflation) / bondedTokens;

    return ({
      price,
      supply,
      marketCap,
      inflation,
      communityPool,
      apr,
    });
  };
};
