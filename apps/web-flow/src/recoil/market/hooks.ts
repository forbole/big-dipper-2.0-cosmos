/* eslint-disable max-len */
import numeral from 'numeral';
import {
  useRecoilState,
  SetterOrUpdater,
} from 'recoil';
import {
  useMarketDataQuery,
  MarketDataQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import {
  writeMarket,
} from '@recoil/market';
import { AtomState } from '@recoil/market/types';
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

    let rawSupplyAmount = market.supply.value;

    if (data?.tokenPrice?.length) {
      price = numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
      marketCap = data.tokenPrice[0]?.marketCap;
      rawSupplyAmount = data.supply[0]?.supply;
    }

    const supply = formatToken(rawSupplyAmount, chainConfig.primaryTokenUnit);

    return ({
      price,
      supply,
      marketCap,
    });
  };
};
