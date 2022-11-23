import chainConfig from '@/chainConfig';
import { writeMarket } from '@/recoil/market/selectors';
import type { AtomState } from '@/recoil/market/types';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';
import { QueryHookOptions, QueryResult } from '@apollo/client';
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
    let { price, marketCap } = market;

    if (data?.tokenPrice?.length) {
      price = numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
      marketCap = data.tokenPrice[0]?.marketCap;
    }

    const inflation = R.pathOr(0, ['inflation', 0, 'value'], data);

    const rawSupplyAmount = getDenom(
      R.pathOr([], ['supply', 0, 'coins'], data),
      chainConfig.primaryTokenUnit
    ).amount;
    const supply = formatToken(rawSupplyAmount, chainConfig.primaryTokenUnit);

    // const bondedTokens = R.pathOr(1, ['bondedTokens', 0, 'bonded_tokens'], data);

    // const inflationWithCommunityTax = Big(1).times(inflation).toPrecision(2); // without community tax, need to change naming later

    const apr = 0;
    // const apr = bondedTokens ? Big(rawSupplyAmount).times(inflationWithCommunityTax).div(bondedTokens).toNumber() : 0;

    return {
      price,
      supply,
      marketCap,
      inflation,
      apr,
    };
  }
}
