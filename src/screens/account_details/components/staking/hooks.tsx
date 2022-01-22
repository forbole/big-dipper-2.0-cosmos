import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useAccountDelegationsQuery,
  AccountDelegationsQuery,
} from '@graphql/types';
import {
  formatToken,
} from '@utils/format_token';
import { StakingState } from './types';
import {
  RewardsType,
  // RedelegationType, UnbondingType, DelegationType,
} from '../../types';

const stakingDefault = {
  data: [],
  count: 0,
  loading: true,
};

export const useStaking = (rewards: RewardsType) => {
  const router = useRouter();
  const [state, setState] = useState<StakingState>({
    tab: 0,
    delegations: stakingDefault,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const handleTabChange = (_event: any, newValue: number) => {
    setState((prevState) => ({
      ...prevState,
      tab: newValue,
    }));
  };

  // =====================================
  // delegations
  // =====================================
  const delegationsQuery = useAccountDelegationsQuery({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
    },
    onCompleted: (data) => {
      const formattedData = formatDelegations(data);
      console.log(formattedData, 'results');
      handleSetState({
        loading: false,
        count: R.pathOr(0, ['delegations', 'pagination', 'total'], data),
      });

      // const itemsLength = data.messagesByAddress.length;
      // const newItems = R.uniq([...state.transactions.data, ...formatTransactions(data)]);
      // const stateChange = {
      //   transactions: {
      //     data: newItems,
      //     hasNextPage: itemsLength === 51,
      //     isNextPageLoading: false,
      //     offsetCount: state.transactions.offsetCount + LIMIT,
      //   },
      // };

      // handleSetState(stateChange);
    },
  });

  const formatDelegations = (data: AccountDelegationsQuery) => {
    const delegations = R.pathOr([], ['delegations', 'delegations'], data);
    return delegations
      .filter((x) => R.pathOr('0', ['coins', 'amount'], x) !== '0')
      .map((x) => {
        const validator = R.pathOr('', ['validator_address'], x);
        return ({
          validator,
          amount: formatToken(x.coins.amount, x.coins.denom),
          reward: rewards[validator],
        });
      });
  };

  const handleDelegationPageCallback = async (page: number, _rowsPerPage: number) => {
    console.log(page, 'page');
    // handleSetState({
    //   page,
    //   loading: true,
    // });
    // await getBlocksByPage(page);
  };

  return {
    state,
    handleTabChange,
    handleDelegationPageCallback,
  };
};
