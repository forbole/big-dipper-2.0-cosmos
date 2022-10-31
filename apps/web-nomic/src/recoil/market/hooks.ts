/* eslint-disable max-len */
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useRecoilState,
  SetterOrUpdater,
} from 'recoil';
import {
  useMarketDataQuery,
  MarketDataQuery,
} from '@graphql/types/general_types';
import { chainConfig } from 'ui/dist';
import {
  writeMarket,
} from '@recoil/market';
import { AtomState } from '@recoil/market/types';
import { getDenom } from '@utils/get_denom';
import { formatToken } from '@utils/format_token';

export const useMarketRecoil = () => {
  const [market, setMarket] = useRecoilState(writeMarket) as [AtomState, SetterOrUpdater<AtomState>];

  useMarketDataQuery(
    {
      variables: {
        denom: chainConfig?.tokenUnits[chainConfig.primaryTokenUnit]?.display,
      },
      onCompleted: (data) => {
        if (data) {
          setMarket(formatUseChainIdQuery(data));
        }
      },
    },
  );

  const formatUseChainIdQuery = (data: MarketDataQuery): AtomState => {
    let {
      price, marketCap,
    } = market;

    if (data?.tokenPrice?.length) {
      price = numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
      marketCap = data.tokenPrice[0]?.marketCap;
    }

    const inflation = R.pathOr(0, ['inflation', 0, 'value'], data);

    const rawSupplyAmount = getDenom(
      R.pathOr([], ['supply', 0, 'coins'], data),
      chainConfig.primaryTokenUnit,
    ).amount;
    const supply = formatToken(
      rawSupplyAmount,
      chainConfig.primaryTokenUnit,
    );

    // const bondedTokens = R.pathOr(1, ['bondedTokens', 0, 'bonded_tokens'], data);

    // const inflationWithCommunityTax = Big(1).times(inflation).toPrecision(2); // without community tax, need to change naming later

    const apr = 0;
    // const apr = bondedTokens ? Big(rawSupplyAmount).times(inflationWithCommunityTax).div(bondedTokens).toNumber() : 0;

    return ({
      price,
      supply,
      marketCap,
      inflation,
      apr,
    });
  };
};
