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
    let { price, marketCap } = market;

    if (data?.tokenPrice?.length) {
      price = numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
      marketCap = data.tokenPrice[0]?.marketCap;
    }

    const inflation = parseFloat(data?.inflation?.[0]?.value ?? '0') ?? 0;

    const rawSupplyAmount = getDenom(data?.supply?.[0]?.coins, primaryTokenUnit).amount;
    const supply = formatToken(rawSupplyAmount, primaryTokenUnit);

    // const bondedTokens = Big(data?.bondedTokens?.[0]?.bonded_tokens || 0);

    // const inflationWithCommunityTax = Big(1)?.times(inflation).toPrecision(2); // without community tax, need to change naming later

    const apr = 0;
    // const apr = !bondedTokens.eq(0) ? Big(rawSupplyAmount)?.times(inflationWithCommunityTax).div(bondedTokens).toNumber() : 0;

    return {
      price,
      supply,
      marketCap,
      inflation,
      apr,
    };
  }
}
