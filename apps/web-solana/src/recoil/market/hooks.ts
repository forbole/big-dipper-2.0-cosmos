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
      price,
      marketCap,
    } = market;

    if (data?.tokenPrice?.length) {
      price = numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
      marketCap = data.tokenPrice[0]?.marketCap;
    }

    const inflation = R.pathOr(0, ['inflationRate', 'total'], data);

    const supply = formatToken(
      R.pathOr(0, ['supplyInfo', 0, 'total'], data),
      chainConfig.primaryTokenUnit,
    );

    return ({
      price,
      marketCap,
      inflation,
      maxSupply: supply,
    });
  };

  return ({
    ...market,
  });
};
