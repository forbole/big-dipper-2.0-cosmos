/* eslint-disable max-len */
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useRecoilState,
  SetterOrUpdater,
} from 'recoil';
import Big from 'big.js';
import {
  useMarketDataQuery,
  MarketDataQuery,
} from '@graphql/types/general_types';
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

    if (data?.tokenPrice?.length) {
      price = numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
      marketCap = data.tokenPrice[0]?.marketCap;
    }

    const [communityPoolCoin] = R.pathOr([], ['communityPool', 0, 'coins'], data).filter((x) => x.denom === chainConfig.primaryTokenUnit);
    const inflation = R.pathOr(0, ['inflation', 0, 'value'], data);

    const rawSupplyAmount = getDenom(
      R.pathOr([], ['supply', 0, 'coins'], data),
      chainConfig.primaryTokenUnit,
    ).amount;
    const supply = formatToken(
      rawSupplyAmount,
      chainConfig.primaryTokenUnit,
    );

    if (communityPoolCoin) {
      communityPool = formatToken(communityPoolCoin.amount, communityPoolCoin.denom);
    }

    const totalLiquidTokens = R.pathOr(1, ['liquidStakingState', 0, 'state', 'total_liquid_tokens'], data);
    const bondedTokenRatio = Big(totalLiquidTokens).div(rawSupplyAmount);
    // 0.05 is the staking distribution according to crescent doc
    const inflationWithStakingDistribution = Big(inflation).times(0.05).toPrecision(5);

    const apr = Big(1).times(inflationWithStakingDistribution).div(bondedTokenRatio).toNumber();

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
