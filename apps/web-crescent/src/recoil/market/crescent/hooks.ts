/* eslint-disable max-len */
import * as R from 'ramda';
import numeral from 'numeral';
import { useRecoilState, SetterOrUpdater } from 'recoil';
import Big from 'big.js';
import { useMarketDataQuery, MarketDataQuery } from '@graphql/types/general_types';
import chainConfig from 'ui/chainConfig';
import { AtomState, writeMarket } from 'ui/recoil/market';
import { getDenom } from 'ui/utils/get_denom';
import { getCurrentInflationAmount } from '@utils/get_current_inflation';
import { formatToken } from 'ui/utils/format_token';

export const useMarketRecoil = () => {
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

  const formatUseChainIdQuery = (data: MarketDataQuery): AtomState => {
    let { communityPool, price, marketCap } = market;

    if (data?.tokenPrice?.length) {
      price = numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
      marketCap = data.tokenPrice[0]?.marketCap;
    }

    const [communityPoolCoin] = R.pathOr([], ['communityPool', 0, 'coins'], data).filter(
      (x: any) => x.denom === chainConfig.primaryTokenUnit
    ) as any;
    const inflation = R.pathOr(0, ['inflation', 0, 'value'], data);

    const rawSupplyAmount = getDenom(
      R.pathOr([], ['supply', 0, 'coins'], data),
      chainConfig.primaryTokenUnit
    ).amount;
    const supply = formatToken(rawSupplyAmount, chainConfig.primaryTokenUnit);

    if (communityPoolCoin) {
      communityPool = formatToken(communityPoolCoin.amount, communityPoolCoin.denom);
    }

    // Get the annual inflation amount of current inflation shedule
    const inflationSchedules = R.pathOr(
      [],
      ['mintParams', 0, 'params', 'inflation_schedules'],
      data
    );
    const inflationAmount = getCurrentInflationAmount(inflationSchedules);

    const bondedTokens = R.pathOr(1, ['bondedTokens', 0, 'bonded_tokens'], data);

    // The annual token provision distributed to staking is 6.25% => this number is obtained from cummunity telegram
    const stakingDistribution = 0.0625;

    const apr = Big(inflationAmount).times(stakingDistribution).div(bondedTokens).toNumber();

    return {
      price,
      supply,
      marketCap,
      inflation,
      communityPool,
      apr,
    };
  };
};
