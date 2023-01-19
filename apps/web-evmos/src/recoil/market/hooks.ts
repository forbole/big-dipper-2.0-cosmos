import Big from 'big.js';
import numeral from 'numeral';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import chainConfig from '@/chainConfig';
import { MarketDataQuery, useMarketDataQuery } from '@/graphql/types/general_types';
import { writeMarket } from '@/recoil/market/selectors';
import type { AtomState } from '@/recoil/market/types';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';

const { primaryTokenUnit, tokenUnits } = chainConfig();

export function useMarketRecoil() {
  const [market, setMarket] = useRecoilState(writeMarket) as [
    AtomState,
    SetterOrUpdater<AtomState>
  ];

  useMarketDataQuery({
    variables: {
      denom: tokenUnits?.[primaryTokenUnit]?.display,
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
      (data?.communityPool?.[0]?.coins as MsgCoin[])?.filter((x) => x.denom === primaryTokenUnit) ??
      [];

    const rawSupplyAmount = getDenom(data?.supply?.[0]?.coins ?? [], primaryTokenUnit).amount;
    const supply = formatToken(rawSupplyAmount, primaryTokenUnit);

    if (communityPoolCoin) {
      communityPool = formatToken(communityPoolCoin.amount, communityPoolCoin.denom);
    }

    // Get Evmos inflation rate
    const inflation = data?.evmosInflationData?.[0]?.inflation_rate ?? 0;

    // Get Bonded token ratio: bonded tokens/ circulating supply
    const bondedTokens = Big(data?.bondedTokens?.[0]?.bonded_tokens || 0);
    const circulatingSupply = Big(
      data?.evmosInflationData?.[0]?.circulating_supply?.[0]?.amount || 0
    );
    const bondedTokenRatio = !circulatingSupply.eq(0)
      ? bondedTokens.div(circulatingSupply)
      : Big(0);

    // Get inflation distributed to staking rewards
    const stakingDistribution =
      data?.evmosInflationParams?.[0]?.params?.inflation_distribution?.staking_rewards ?? 1;

    const inflationWithStakingDistribution = Big(inflation)
      ?.times(stakingDistribution)
      .toPrecision(5);
    const apr = !bondedTokenRatio.eq(0)
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
