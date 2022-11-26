import chainConfig from '@/chainConfig';
import { writeMarket } from '@/recoil/market/selectors';
import type { AtomState } from '@/recoil/market/types';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';
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
    let { price, marketCap } = market;

    if (data?.tokenPrice?.length) {
      price = numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
      marketCap = data.tokenPrice[0]?.marketCap;
    }

    const inflation = parseInt(data?.inflation?.[0]?.value ?? '0', 10) ?? 0;

    const rawSupplyAmount = getDenom(data?.supply?.[0]?.coins, chainConfig.primaryTokenUnit).amount;
    const supply = formatToken(rawSupplyAmount, chainConfig.primaryTokenUnit);

    // const bondedTokens = data?.bondedTokens?.[0]?.bonded_tokens ?? 1;

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
