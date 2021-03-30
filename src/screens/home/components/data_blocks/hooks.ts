import { useState } from 'react';
import numeral from 'numeral';
import {
  useLatestBlockHeightSubscription, LatestBlockHeightSubscription,
} from '@graphql/types';

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

  useLatestBlockHeightSubscription({
    onSubscriptionData: (data) => {
      setState((prevState) => ({
        ...prevState,
        blockHeight: formatLatestBlockHeightSubscription(data.subscriptionData.data),
      }));
    },
  });

  const formatLatestBlockHeightSubscription = (data: LatestBlockHeightSubscription) => {
    return data.height[0]?.height ?? 0;
  };

  const formatUi = () => {
    const {
      blockHeight,
      blockTime,
      price,
      validators,
    } = state;

    return ({
      blockHeight: numeral(blockHeight).format('0,0'),
      blockTime: `${numeral(blockTime).format('0.00')}s`,
      price: `$${numeral(price).format('0.00')}`,
      validators: {
        active: numeral(validators.active).format('0,0'),
        total: numeral(validators.total).format('0,0'),
      },
    });
  };

  return {
    rawData: state,
    uiData: formatUi(),
  };
};
