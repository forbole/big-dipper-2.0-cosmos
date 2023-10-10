import numeral from 'numeral';
import { useState } from 'react';
import chainConfig from '@/chainConfig';
import {
  AverageBlockTimeQuery,
  TokenPriceListenerSubscription,
  useAverageBlockTimeQuery,
  useLatestBlockHeightListenerSubscription,
  useTokenPriceListenerSubscription,
} from '@/graphql/types/general_types';
import {
  ActiveValidatorCountQuery,
  useActiveValidatorCountQuery,
} from '@/graphql/types/provider_types';

const { primaryTokenUnit, tokenUnits } = chainConfig();

type DataBlocksState = {
  blockHeight: number;
  blockTime: number;
  price: number | null;
  validators: {
    active: number;
    total: number;
  };
};

const formatAverageBlockTime = (data: AverageBlockTimeQuery, state: DataBlocksState) =>
  data.averageBlockTime[0]?.averageTime ?? state.blockTime;

const formatTokenPrice = (data: TokenPriceListenerSubscription, state: DataBlocksState) => {
  if (data?.tokenPrice[0]?.price) {
    return numeral(numeral(data?.tokenPrice[0]?.price).format('0.0000', Math.floor)).value();
  }
  return state.price;
};

const formatActiveValidatorsCount = (data: ActiveValidatorCountQuery) => ({
  active: data.bdjuno_provider?.activeTotal.aggregate?.count ?? 0,
  total: data.bdjuno_provider?.total?.aggregate?.count ?? 0,
});

export const useDataBlocks = () => {
  const [state, setState] = useState<DataBlocksState>({
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
        blockHeight: data.data.data?.height?.[0]?.height ?? 0,
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
        blockTime: formatAverageBlockTime(data, state),
      }));
    },
  });

  // ====================================
  // token price
  // ====================================
  useTokenPriceListenerSubscription({
    variables: {
      denom: tokenUnits?.[primaryTokenUnit]?.display,
    },
    onData: (data) => {
      setState((prevState) => ({
        ...prevState,
        price: data.data.data ? formatTokenPrice(data.data.data, state) : 0,
      }));
    },
  });

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

  return {
    state,
  };
};
