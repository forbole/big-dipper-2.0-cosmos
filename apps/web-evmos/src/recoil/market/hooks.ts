import chainConfig from '@/chainConfig';
import { writeMarket } from '@/recoil/market/selectors';
import type { AtomState } from '@/recoil/market/types';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';
import Big from 'big.js';
import numeral from 'numeral';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { MarketDataQuery, useMarketDataQuery } from '@/graphql/types/general_types';

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

    const rawSupplyAmount = getDenom(
      data?.supply?.[0]?.coins ?? [],
      chainConfig.primaryTokenUnit
    ).amount;
    const supply = formatToken(rawSupplyAmount, chainConfig.primaryTokenUnit);

    if (communityPoolCoin) {
      communityPool = formatToken(communityPoolCoin.amount, communityPoolCoin.denom);
    }

    // Get Evmos inflation rate
    const inflation = data?.evmosInflationData?.[0]?.inflation_rate ?? 0;

    // Get Bonded token ratio: bonded tokens/ circulating supply
    const bondedTokens = data?.bondedTokens?.[0]?.bonded_tokens ?? 1;
    const circulatingSupply = data?.evmosInflationData?.[0]?.circulating_supply?.[0]?.amount ?? 1;
    const bondedTokenRatio = Big(bondedTokens).div(circulatingSupply);

    // Get inflation distributed to staking rewards
    const stakingDistribution =
      data?.evmosInflationParams?.[0]?.params?.inflation_distribution?.staking_rewards ?? 1;

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
