import chainConfig from '@/chainConfig';
import { writeMarket } from '@/recoil/market/selectors';
import type { AtomState } from '@/recoil/market/types';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';
import { QueryHookOptions, QueryResult } from '@apollo/client';
import Big from 'big.js';
import numeral from 'numeral';
import * as R from 'ramda';
import { SetterOrUpdater, useRecoilState } from 'recoil';

export type UseMarketDataQuery<TData, TVariables> = (
  baseOptions?: QueryHookOptions<TData, TVariables>
) => QueryResult<TData, TVariables>;

export function useMarketRecoil<TData, TVariables>(
  useMarketDataQuery: UseMarketDataQuery<TData, TVariables>
) {
  const [market, setMarket] = useRecoilState(writeMarket) as [
    AtomState,
    SetterOrUpdater<AtomState>
  ];

  useMarketDataQuery({
    variables: {
      denom: chainConfig?.tokenUnits[chainConfig.primaryTokenUnit]?.display,
    } as TVariables,
    onCompleted: (data) => {
      if (data) {
        setMarket(formatUseChainIdQuery(data));
      }
    },
  });

  function formatUseChainIdQuery(
    data: TData & {
      communityPool?: Array<{ coins?: Array<{ amount: number; denom: string }> }>;
      tokenPrice?: Array<{
        marketCap: number;
        price: number;
      }>;
    }
  ): AtomState {
    let { communityPool, price, marketCap } = market;

    if (data?.tokenPrice?.length) {
      price = numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
      marketCap = data.tokenPrice[0]?.marketCap;
    }

    const [communityPoolCoin] = R.pathOr([], ['communityPool', 0, 'coins'], data).filter(
      (x: any) => x.denom === chainConfig.primaryTokenUnit
    ) as any;

    const rawSupplyAmount = getDenom(
      R.pathOr([], ['supply', 0, 'coins'], data),
      chainConfig.primaryTokenUnit
    ).amount;
    const supply = formatToken(rawSupplyAmount, chainConfig.primaryTokenUnit);

    if (communityPoolCoin) {
      communityPool = formatToken(communityPoolCoin.amount, communityPoolCoin.denom);
    }

    // Get Evmos inflation rate
    const inflation = R.pathOr(0, ['evmosInflationData', 0, 'inflation_rate'], data);

    // Get Bonded token ratio: bonded tokens/ circulating supply
    const bondedTokens = R.pathOr(1, ['bondedTokens', 0, 'bonded_tokens'], data);
    const circulatingSupply = R.pathOr(
      1,
      ['evmosInflationData', 0, 'circulating_supply', 0, 'amount'],
      data
    );
    const bondedTokenRatio = Big(bondedTokens).div(circulatingSupply);

    // Get inflation distributed to staking rewards
    const stakingDistribution = R.pathOr(
      1,
      ['evmosInflationParams', 0, 'params', 'inflation_distribution', 'staking_rewards'],
      data
    );

    const inflationWithStakingDistribution = Big(inflation)
      .times(stakingDistribution)
      .toPrecision(5);
    const apr = bondedTokenRatio
      ? Big(inflationWithStakingDistribution).div(bondedTokenRatio).toNumber()
      : 0;

    return {
      price,
      supply,
      marketCap,
      inflation,
      communityPool,
      apr,
    };
  }
}
