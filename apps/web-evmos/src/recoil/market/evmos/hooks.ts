/* eslint-disable max-len */
import * as R from 'ramda';
import numeral from 'numeral';
import { useRecoilState, SetterOrUpdater } from 'recoil';
import Big from 'big.js';
import { useMarketDataQuery, MarketDataQuery } from '@graphql/types/general_types';
import chainConfig from 'ui/chainConfig';
import { AtomState, writeMarket } from 'ui/recoil/market';
import { getDenom } from 'ui/utils/get_denom';
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

    const rawSupplyAmount = getDenom(
      R.pathOr([], ['supply', 0, 'coins'], data),
      chainConfig.primaryTokenUnit
    ).amount;
    const supply = formatToken(rawSupplyAmount, chainConfig.primaryTokenUnit);

    if (communityPoolCoin) {
      communityPool = formatToken(communityPoolCoin.amount, communityPoolCoin.denom);
    }

    // Get Evmos inflation rate
    const inflation = R.pathOr(0, ['evmosInflationData', 0, 'inflation_rate'], data);

    // Get Bonded token ratio: bonded tokens/ circulating supply
    const bondedTokens = R.pathOr(1, ['bondedTokens', 0, 'bonded_tokens'], data);
    const circulatingSupply = R.pathOr(
      1,
      ['evmosInflationData', 0, 'circulating_supply', 0, 'amount'],
      data
    );
    const bondedTokenRatio = Big(bondedTokens).div(circulatingSupply);

    // Get inflation distributed to staking rewards
    const stakingDistribution = R.pathOr(
      1,
      ['evmosInflationParams', 0, 'params', 'inflation_distribution', 'staking_rewards'],
      data
    );

    const inflationWithStakingDistribution = Big(inflation)
      .times(stakingDistribution)
      .toPrecision(5);
    const apr = Big(inflationWithStakingDistribution).div(bondedTokenRatio).toNumber();

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
