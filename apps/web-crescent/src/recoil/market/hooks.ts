import Big from 'big.js';
import numeral from 'numeral';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import chainConfig from '@/chainConfig';
import { MarketDataQuery, useMarketDataQuery } from '@/graphql/types/general_types';
import { writeMarket } from '@/recoil/market/selectors';
import type { AtomState } from '@/recoil/market/types';
import { formatToken } from '@/utils/format_token';
import getCurrentInflationAmount from '@/utils/get_current_inflation';
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
    const inflation = data?.inflation?.[0]?.value ?? 0;

    const rawSupplyAmount = getDenom(data?.supply?.[0]?.coins, primaryTokenUnit).amount;
    const supply = formatToken(rawSupplyAmount, primaryTokenUnit);

    if (communityPoolCoin) {
      communityPool = formatToken(communityPoolCoin.amount, communityPoolCoin.denom);
    }

    // Get the annual inflation amount of current inflation shedule
    const inflationSchedules = data?.mintParams?.[0]?.params?.inflation_schedules ?? [];
    const inflationAmount = getCurrentInflationAmount(inflationSchedules);

    const bondedTokens = data?.bondedTokens?.[0]?.bonded_tokens ?? 1;

    // The annual token provision distributed to staking is 6.25% => this number is obtained from cummunity telegram
    const stakingDistribution = 0.0625;

    const apr = bondedTokens
      ? Big(inflationAmount)?.times(stakingDistribution).div(bondedTokens).toNumber()
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
