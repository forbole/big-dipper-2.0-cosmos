import chainConfig from '@/chainConfig';
import { MarketDataQuery, useMarketDataQuery } from '@/graphql/types/general_types';
import { writeMarket } from '@/recoil/market/selectors';
import type { AtomState } from '@/recoil/market/types';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';
import Big from 'big.js';
import numeral from 'numeral';
import { SetterOrUpdater, useRecoilState } from 'recoil';

export function useMarketRecoil() {
  const [market, setMarket] = useRecoilState(writeMarket) as [
    AtomState,
    SetterOrUpdater<AtomState>
  ];

  useMarketDataQuery({
    variables: {
      denom: chainConfig?.tokenUnits[chainConfig.primaryTokenUnit]?.display,
    },
    onCompleted: (data) => {
      if (data) {
        setMarket(formatUseChainIdQuery(data));
      }
    },
  });

  function formatUseChainIdQuery(data: MarketDataQuery): AtomState {
    let { communityPool, price, marketCap } = market;

    if (data?.tokenPrice?.length) {
      price = numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
      marketCap = data.tokenPrice[0]?.marketCap;
    }

    const [communityPoolCoin] =
      (data?.communityPool?.[0]?.coins as MsgCoin[])?.filter(
        (x) => x.denom === chainConfig.primaryTokenUnit
      ) ?? [];
    const inflation =
      (data?.inflation?.[0]?.inflation as Array<{ denom?: string; inflation?: number }>)?.filter(
        (x) => x.denom === chainConfig.primaryTokenUnit
      )?.[0]?.inflation ?? 0;

    const rawSupplyAmount = getDenom(
      data?.supply?.[0]?.coins ?? [],
      chainConfig.primaryTokenUnit
    ).amount;
    const supply = formatToken(rawSupplyAmount, chainConfig.primaryTokenUnit);

    if (communityPoolCoin) {
      communityPool = formatToken(communityPoolCoin.amount, communityPoolCoin.denom);
    }

    const bondedTokens = data?.bondedTokens?.[0]?.bonded_tokens ?? 1;
    const communityTax = data?.distributionParams?.[0]?.params?.community_tax ?? '0';

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
