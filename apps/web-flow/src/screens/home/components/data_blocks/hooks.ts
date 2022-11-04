import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import {
  useLatestBlockHeightListenerSubscription,
  useAverageBlockTimeQuery,
  AverageBlockTimeQuery,
  useTokenPriceListenerSubscription,
  TokenPriceListenerSubscription,
  useActiveValidatorCountQuery,
  ActiveValidatorCountQuery,
} from '@graphql/types';
import chainConfig from 'ui/dist/chainConfig';

export const useDataBlocks = () => {
  const [state, setState] = useState<{
    blockHeight: number;
    blockTime: number;
    price: number | null;
    validators: {
      active: number;
      total: number;
    };
  }>({
    blockHeight: 0,
    blockTime: 0,
    price: null,
    validators: {
      active: 0,
      total: 0,
    },
  });

  // ====================================
  // block height
  // ====================================

  useLatestBlockHeightListenerSubscription({
    onData: (data) => {
      setState((prevState) => ({
        ...prevState,
        blockHeight: R.pathOr(0, ['height', 0, 'height'], data.data.data),
      }));
    },
  });

  // ====================================
  // block time
  // ====================================
  useAverageBlockTimeQuery({
    onCompleted: (data) => {
      setState((prevState) => ({
        ...prevState,
        blockTime: formatAverageBlockTime(data),
      }));
    },
  });

  const formatAverageBlockTime = (data: AverageBlockTimeQuery) => {
    return data.averageBlockTime[0]?.averageTime ?? state.blockTime;
  };

  // ====================================
  // token price
  // ====================================
  useTokenPriceListenerSubscription({
    variables: {
      denom: chainConfig?.tokenUnits[chainConfig.primaryTokenUnit]?.display,
    },
    onData: (data) => {
      setState((prevState) => ({
        ...prevState,
        price: data.data.data ? formatTokenPrice(data.data.data) : 0,
      }));
    },
  });

  const formatTokenPrice = (data: TokenPriceListenerSubscription) => {
    if (data?.tokenPrice[0]?.price) {
      return numeral(numeral(data?.tokenPrice[0]?.price).format('0.[00]', Math.floor)).value();
    }
    return state.price;
  };

  // ====================================
  // validators
  // ====================================
  useActiveValidatorCountQuery({
    onCompleted: (data) => {
      setState((prevState) => ({
        ...prevState,
        validators: formatActiveValidatorsCount(data),
      }));
    },
  });

  const formatActiveValidatorsCount = (data: ActiveValidatorCountQuery) => {
    return {
      active: data.total.aggregate.count,
      total: data.total.aggregate.count,
    };
  };

  return {
    state,
  };
};
