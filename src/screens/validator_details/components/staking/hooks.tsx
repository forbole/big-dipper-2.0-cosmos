import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  ValidatorDelegationsDocument,
  ValidatorRedelegationsDocument,
  ValidatorUndelegationsDocument,
} from '@graphql/validator_details_documents';
import { formatToken } from '@utils/format_token';
import { getDenom } from '@utils/get_denom';
import { chainConfig } from '@configs';
import { StakingState } from './types';

const stakingDefault = {
  data: {},
  count: 0,
  loading: true,
};

const LIMIT = 10;

export const useStaking = () => {
  const router = useRouter();
  const [state, setState] = useState<StakingState>({
    tab: 0,
    delegations: stakingDefault,
    redelegations: stakingDefault,
    unbondings: stakingDefault,
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
  const delegationsQuery = useValidatorDelegationsQuery({
    variables: {
      validatorAddress: R.pathOr('', ['query', 'address'], router),
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
    onError: () => {
      handleSetState({
        delegations: {
          loading: false,
        },
      });
    },
  });

  const formatDelegations = (data: ValidatorDelegationsQuery) => {
    const delegations = R.pathOr([], ['delegations', 'delegations'], data);
    return delegations
      .map((x) => {
        const address = R.pathOr('', ['delegator_address'], x);
        const delegation = getDenom(x.coins, chainConfig.primaryTokenUnit);
        return ({
          address,
          amount: formatToken(delegation.amount, delegation.denom),
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

  // =====================================
  // redelegations
  // =====================================
  const redelegationsQuery = useValidatorRedelegationsQuery({
    variables: {
      validatorAddress: R.pathOr('', ['query', 'address'], router),
      limit: LIMIT,
    },
    onCompleted: (data) => {
      const formattedData = formatRedelegations(data);
      handleSetState({
        redelegations: {
          loading: false,
          count: R.pathOr(0, ['redelegations', 'pagination', 'total'], data),
          data: {
            0: formattedData,
          },
        },
      });
    },
    onError: () => {
      handleSetState({
        redelegations: {
          loading: false,
        },
      });
    },
  });

  const formatRedelegations = (data: ValidatorRedelegationsQuery) => {
    const redelegations = R.pathOr([], ['redelegations', 'redelegations'], data);
    return redelegations
      .map((x) => {
        const to = R.pathOr('', ['validator_dst_address'], x);
        const address = R.pathOr('', ['delegator_address'], x);
        const entries = R.pathOr([], ['entries'], x).map((y) => ({
          amount: formatToken(y.balance, chainConfig.primaryTokenUnit),
          completionTime: R.pathOr('', ['completion_time'], y),
        }));

        return ({
          address,
          to,
          entries,
        });
      });
  };

  const handleRedelegationPageCallback = async (page: number, _rowsPerPage: number) => {
    if (!state.unbondings.data[page]) {
      handleSetState({
        redelegations: {
          loading: true,
        },
      });

      await redelegationsQuery.fetchMore({
        variables: {
          offset: page * LIMIT,
          limit: LIMIT,
        },
      }).then(({ data }) => {
        handleSetState({
          redelegations: {
            loading: false,
            data: {
              [page]: formatRedelegations(data),
            },
          },
        });
      });
    }
  };

  // =====================================
  // unbondings
  // =====================================
  const unbondingsQuery = useValidatorUndelegationsQuery({
    variables: {
      validatorAddress: R.pathOr('', ['query', 'address'], router),
      limit: LIMIT,
    },
    onCompleted: (data) => {
      const formattedData = formatUnbondings(data);
      handleSetState({
        unbondings: {
          loading: false,
          count: R.pathOr(0, ['undelegations', 'pagination', 'total'], data),
          data: {
            0: formattedData,
          },
        },
      });
    },
    onError: () => {
      handleSetState({
        unbondings: {
          loading: false,
        },
      });
    },
  });

  const formatUnbondings = (data: ValidatorUndelegationsQuery) => {
    const unbondings = R.pathOr([], ['undelegations', 'undelegations'], data);
    return unbondings
      .map((x) => {
        const address = R.pathOr('', ['delegator_address'], x);
        const entries = R.pathOr([], ['entries'], x).map((y) => ({
          amount: formatToken(y.balance, chainConfig.primaryTokenUnit),
          completionTime: R.pathOr('', ['completion_time'], y),
        }));

        return ({
          address,
          entries,
        });
      });
  };

  const handleUnbondingPageCallback = async (page: number, _rowsPerPage: number) => {
    if (!state.unbondings.data[page]) {
      handleSetState({
        unbondings: {
          loading: true,
        },
      });

      await unbondingsQuery.fetchMore({
        variables: {
          offset: page * LIMIT,
          limit: LIMIT,
        },
      }).then(({ data }) => {
        handleSetState({
          unbondings: {
            loading: false,
            data: {
              [page]: formatUnbondings(data),
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
    handleUnbondingPageCallback,
    handleRedelegationPageCallback,
  };
};
