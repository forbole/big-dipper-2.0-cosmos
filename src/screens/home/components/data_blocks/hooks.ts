import { useState } from 'react';
import * as R from 'ramda';
import {
  useLatestBlockHeightListenerSubscription,
  useAverageBlockTimeQuery,
  AverageBlockTimeQuery,
  useTokenPriceListenerSubscription,
  TokenPriceListenerSubscription,
  useActiveValidatorCountQuery,
  ActiveValidatorCountQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';

export const useDataBlocks = () => {
  const [state, setState] = useState<{
    blockHeight: number;
    blockTime: number;
    price: number;
    validators: {
      active: number;
      total: number;
    }
  }>({
    blockHeight: 0,
    blockTime: 0,
    price: 0,
    validators: {
      active: 0,
      total: 0,
    },
  });

  // ====================================
  // block height
  // ====================================

  useLatestBlockHeightListenerSubscription({
    onSubscriptionData: (data) => {
      setState((prevState) => ({
        ...prevState,
        blockHeight: R.pathOr(0, ['height', 0, 'height'], data.subscriptionData.data),
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
      denom: chainConfig.display,
    },
    onSubscriptionData: (data) => {
      setState((prevState) => ({
        ...prevState,
        price: formatTokenPrice(data.subscriptionData.data),
      }));
    },
  });

  const formatTokenPrice = (data: TokenPriceListenerSubscription) => {
    return data?.tokenPrice[0]?.price ?? state.price;
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
      active: data.activeTotal.aggregate.count,
      total: data.total.aggregate.count,
    };
  };

  return {
    state,
  };
};
