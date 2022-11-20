/* eslint-disable max-len */
import * as R from 'ramda';
import numeral from 'numeral';
import { useRecoilState, SetterOrUpdater } from 'recoil';
import Big from 'big.js';
import { QueryHookOptions, QueryResult } from '@apollo/client';
import { formatToken } from '@utils/format_token';
import { getDenom } from '@utils/get_denom';
import chainConfig from 'ui/chainConfig';
import type { AtomState } from './types';
import { writeMarket } from './selectors';

export type UseMarketDataQuery<TData, TVariables> = (
  baseOptions?: QueryHookOptions<TData, TVariables>
) => QueryResult<TData, TVariables>;

/**
 * It takes a query hook and returns a Recoil state hook
 * @param useMarketDataQuery - UseMarketDataQuery<TData, TVariables>
 */
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

  /**
   * It takes in a data object and returns an object with the following properties: price, supply,
   * marketCap, inflation, communityPool, and apr
   * @param {TData} data - TData
   * @returns return {
   *     price,
   *     supply,
   *     marketCap,
   *     inflation,
   *     communityPool,
   *     apr,
   *   };
   */
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

    const [communityPoolCoin] = (data?.communityPool?.[0].coins ?? []).filter(
      (x: any) => x.denom === chainConfig.primaryTokenUnit
    );
    const inflation = R.pathOr(0, ['inflation', 0, 'value'], data);

    /* Getting the supply amount and formatting it. */
    const rawSupplyAmount = getDenom(
      R.pathOr([], ['supply', 0, 'coins'], data),
      chainConfig.primaryTokenUnit
    ).amount;
    const supply = formatToken(rawSupplyAmount, chainConfig.primaryTokenUnit);

    if (communityPoolCoin) {
      communityPool = formatToken(communityPoolCoin.amount, communityPoolCoin.denom);
    }

    const bondedTokens = R.pathOr(1, ['bondedTokens', 0, 'bonded_tokens'], data);
    const communityTax = R.pathOr('0', ['distributionParams', 0, 'params', 'community_tax'], data);

    /* Calculating the APR. */
    const inflationWithCommunityTax = Big(1).minus(communityTax).times(inflation).toPrecision(2);
    const apr = bondedTokens
      ? Big(rawSupplyAmount).times(inflationWithCommunityTax).div(bondedTokens).toNumber()
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
