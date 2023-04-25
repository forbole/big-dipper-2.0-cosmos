import numeral from 'numeral';
import * as R from 'ramda';
import { useState, useCallback } from 'react';
import chainConfig from '@/chainConfig';
import {
  ActiveValidatorCountQuery,
  AverageBlockTimeQuery,
  TokenPriceListenerSubscription,
  useActiveValidatorCountQuery,
  useAverageBlockTimeQuery,
  useLatestBlockHeightListenerSubscription,
  useTokenPriceListenerSubscription,
  useTopAccountsParamsQuery,
  TopAccountsParamsQuery,
} from '@/graphql/types/general_types';

const { primaryTokenUnit, tokenUnits } = chainConfig();

type DataBlocksState = {
  blockHeight: number;
  blockTime: number;
  price: number | null;
  validators: {
    active: number;
    total: number;
  };
  cheqdWallets: number;
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
  active: data.activeTotal.aggregate?.count ?? 0,
  total: data.total?.aggregate?.count ?? 0,
});

const formatTopAccountsParams = (data: TopAccountsParamsQuery) => {
  const {
    top_accounts_params: [{ total_accounts }],
  } = data;
  return total_accounts;
};

export const useDataBlocks = () => {
  const [state, setState] = useState<DataBlocksState>({
    blockHeight: 0,
    blockTime: 0,
    price: null,
    validators: {
      active: 0,
      total: 0,
    },
    cheqdWallets: 0,
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

  const handleSetState = useCallback(
    (stateChange: (prevState: DataBlocksState) => DataBlocksState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  // ====================================
  // Cheqd Wallets
  // ====================================
  useTopAccountsParamsQuery({
    onCompleted: (data) => {
      handleSetState((prevState) => ({
        ...prevState,
        cheqdWallets: formatTopAccountsParams(data),
      }));
    },
  });

  return {
    state,
  };
};
