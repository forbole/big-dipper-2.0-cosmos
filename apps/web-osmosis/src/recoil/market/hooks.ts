import chainConfig from '@/chainConfig';
import { writeMarket } from '@/recoil/market/selectors';
import type { AtomState } from '@/recoil/market/types';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';
import Big from 'big.js';
import numeral from 'numeral';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { useMarketDataQuery, MarketDataQuery } from '@/graphql/types/general_types';

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
    const inflation = parseInt(data?.inflation?.[0]?.value ?? '0', 10) ?? 0;

    const rawSupplyAmount = getDenom(data?.supply?.[0]?.coins, chainConfig.primaryTokenUnit).amount;
    const supply = formatToken(rawSupplyAmount, chainConfig.primaryTokenUnit);

    if (communityPoolCoin) {
      communityPool = formatToken(communityPoolCoin.amount, communityPoolCoin.denom);
    }

    const bondedTokens = data?.bondedTokens?.[0]?.bonded_tokens ?? 1;
    const distributionProportions = data?.mintParams?.[0]?.params?.distribution_proportions ?? '0';

    const annualProvisions = Big(rawSupplyAmount).times(inflation).div(bondedTokens).toNumber();
    const apr = Big(annualProvisions).times(distributionProportions.staking).toNumber();

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
