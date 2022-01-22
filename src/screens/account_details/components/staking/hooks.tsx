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
import { RewardsType } from '../../types';

const stakingDefault = {
  data: {},
  count: 0,
  loading: true,
};

const LIMIT = 10;

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
      limit: LIMIT,
    },
    onCompleted: (data) => {
      const formattedData = formatDelegations(data);
      handleSetState({
        delegations: {
          loading: false,
          count: R.pathOr(0, ['delegations', 'pagination', 'total'], data),
          data: {
            0: formattedData,
          },
        },
      });
    },
  });

  const formatDelegations = (data: AccountDelegationsQuery) => {
    const delegations = R.pathOr([], ['delegations', 'delegations'], data);
    return delegations
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
    if (!state.delegations.data[page]) {
      handleSetState({
        delegations: {
          loading: true,
        },
      });

      await delegationsQuery.fetchMore({
        variables: {
          offset: page * LIMIT,
          limit: LIMIT,
        },
      }).then(({ data }) => {
        handleSetState({
          delegations: {
            loading: false,
            data: {
              [page]: formatDelegations(data),
            },
          },
        });
      });
    }
  };

  return {
    state,
    handleTabChange,
    handleDelegationPageCallback,
  };
};
