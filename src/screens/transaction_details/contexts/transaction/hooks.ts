import {
  useState,
  useEffect,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useTransactionDetailsQuery,
  TransactionDetailsQuery,
} from '@graphql/types';
import { TransactionState } from './types';

export const useTransaction = (initalState: TransactionState) => {
  const router = useRouter();
  const [state, setState] = useState(initalState);

  useTransactionDetailsQuery({
    variables: {
      hash: router.query.tx as string,
    },
    onCompleted: (data) => {
      handleSetState(formatTransactionDetails(data));
    },
  });

  const handleSetState = (stateChange: typeof state) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const formatTransactionDetails = (data: TransactionDetailsQuery) => {
    return ({
      height: data.height,
    });
  };

  const fakeData = {
    height: '812,768,640',
    hash: '4SGxuRMcseNbwki3tGxXPpfz7iFnuo9FUpTfiM4gJ8rhH59uZYSBBK2zW27xRdGX8Sb2N4VkGUnBYt59SBKEhPfB',
    fee: '123 udaric',
    success: true,
    time: 1615187146246,
    memo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel cursus tortor. Fusce lobortis sollicitudin dolor id mollis. Nullam quam ex, dignissim eu eros vel, tincidunt ultrices ligula.',
    messages: [],
  };

  const {
    item,
  } = state;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      item: fakeData,
    }));
  }, []);

  const onMessageFilterCallback = (value: string) => {
    console.log(`filtered value: ${value}`);
  };

  return {
    item,
    onMessageFilterCallback,
  };
};
