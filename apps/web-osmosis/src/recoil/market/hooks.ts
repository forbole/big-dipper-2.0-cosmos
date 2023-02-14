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
    const inflation = parseFloat(data?.inflation?.[0]?.value ?? '0') ?? 0;

    const rawSupplyAmount = getDenom(data?.supply?.[0]?.coins, primaryTokenUnit).amount;
    const supply = formatToken(rawSupplyAmount, primaryTokenUnit);

    if (communityPoolCoin) {
      communityPool = formatToken(communityPoolCoin.amount, communityPoolCoin.denom);
    }

    const bondedTokens = Big(data?.bondedTokens?.[0]?.bonded_tokens || 0);
    const staking = Big(data?.mintParams?.[0]?.params?.distribution_proportions?.staking || 0);

    const annualProvisions = !bondedTokens.eq(0)
      ? Big(rawSupplyAmount)?.times(inflation).div(bondedTokens).toNumber()
      : 0;
    const apr = Big(annualProvisions)?.times(staking).toNumber();

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
