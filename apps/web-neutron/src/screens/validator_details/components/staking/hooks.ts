import Big from 'big.js';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import chainConfig from '@/chainConfig';
import {
  useValidatorDelegationsQuery,
  useValidatorRedelegationsQuery,
  useValidatorUndelegationsQuery,
  ValidatorDelegationsQuery,
} from '@/graphql/types/provider_types';
import type {
  DelegationType,
  RedelegationType,
  StakingState,
  UnbondingType,
} from '@/screens/validator_details/components/staking/types';
import { getDenom } from '@/utils/get_denom';
import {
  Delegations,
  Redelegations,
  Undelegations,
} from '@/screens/validator_details/components/staking/types';
import { formatProviderToken } from '../../../../utils/format_provider_token';

const provider = chainConfig();
export const ROWS_PER_PAGE = 10;

export const formatDelegations = (data: Delegations[]) =>
  data
    .map<DelegationType>((x): UnbondingType => {
      const address = R.pathOr('', ['delegator_address'], x);
      const delegation = getDenom(x.coins, provider.primaryTokenUnit);
      return {
        address,
        amount: formatProviderToken(delegation.amount, delegation.denom),
      };
    })
    .sort(R.comparator((a, b) => Big(a.amount?.value).gt(b.amount?.value)));

export const formatRedelegations = (data: Redelegations[]) => {
  const results: RedelegationType[] = [];
  data.forEach((x) => {
    R.pathOr<NonNullable<(typeof x)['entries']>>([], ['entries'], x).forEach((y) => {
      results.push({
        address: x?.delegator_address ?? '',
        to: x?.validator_dst_address ?? '',
        amount: formatProviderToken(y.balance, provider.primaryTokenUnit),
        completionTime: R.pathOr('', ['completion_time'], y),
      });
    });
  });
  results.sort(R.comparator((a, b) => a.completionTime < b.completionTime));

  return results;
};

export const formatUnbondings = (data: Undelegations[]) => {
  const results: UnbondingType[] = [];
  data.forEach((x) => {
    x?.entries?.forEach((y) => {
      results.push({
        address: R.pathOr('', ['delegator_address'], x),
        amount: formatProviderToken(y.balance, provider.primaryTokenUnit),
        completionTime: R.pathOr('', ['completion_time'], y),
      });
    });
  });

  results.sort((a, b) => ((a.completionTime ?? '') < (b.completionTime ?? '') ? -1 : 1));

  return results;
};

export const useStaking = (
  delegationsPage: number,
  redelegationsPage: number,
  unbondingsPage: number,
  address?: string
) => {
  const router = useRouter();
  const [state, setState] = useState<StakingState>({
    tab: 0,
  });
  const validatorAddress =
    address ||
    (Array.isArray(router?.query?.address)
      ? router.query.address[0]
      : router?.query?.address ?? '');

  // =====================================
  // delegations
  // =====================================
  const {
    data: delegationsData,
    loading: delegationsLoading,
    error: delegationsError,
    refetch: delegationsRefetch,
  } = useValidatorDelegationsQuery({
    variables: {
      validatorAddress,
      limit: ROWS_PER_PAGE,
      offset: delegationsPage * ROWS_PER_PAGE,
      pagination: false,
    },
  });

  useEffect(() => {
    if (delegationsLoading) return;
    if (delegationsError) {
      delegationsRefetch({ pagination: false });
    }
  }, [delegationsError, delegationsLoading, delegationsRefetch]);
  useValidatorDelegationsQuery({
    variables: {
      validatorAddress,
      limit: ROWS_PER_PAGE,
      offset: (delegationsPage + 1) * ROWS_PER_PAGE,
      pagination: false,
    },
  });

  const [delegationsPagination, setDelegationsPagination] = useState<number | undefined>();
  const {
    data: dData,
    error: dError,
    refetch: dRefetch,
  }: { data?: ValidatorDelegationsQuery; error?: any; refetch: any } = useValidatorDelegationsQuery(
    {
      variables: {
        validatorAddress,
        limit: 0,
        offset: 0,
        pagination: true,
      },
      skip: delegationsPagination !== undefined,
    }
  );
  useEffect(() => {
    if (dError) {
      dRefetch();
    } else if (dData) {
      setDelegationsPagination(dData?.bdjuno_provider?.delegations?.pagination?.total ?? 0);
    }
  }, [dData, dError, dRefetch]);

  // =====================================
  // redelegations
  // =====================================
  const {
    data: redelegationsData,
    loading: redelegationsLoading,
    error: redelegationsError,
    refetch: redelegationsRefetch,
  } = useValidatorRedelegationsQuery({
    variables: {
      validatorAddress,
      limit: ROWS_PER_PAGE,
      offset: redelegationsPage * ROWS_PER_PAGE,
    },
  });
  useEffect(() => {
    if (redelegationsLoading) return;
    if (redelegationsError) {
      redelegationsRefetch({ pagination: false });
    }
  }, [redelegationsError, redelegationsLoading, redelegationsRefetch]);
  useValidatorRedelegationsQuery({
    variables: {
      validatorAddress,
      limit: ROWS_PER_PAGE,
      offset: (redelegationsPage + 1) * ROWS_PER_PAGE,
    },
  });

  const [redelegationsPagination, setRedelegationsPagination] = useState<number | undefined>();
  const {
    data: rData,
    error: rError,
    refetch: rRefetch,
  } = useValidatorRedelegationsQuery({
    variables: {
      validatorAddress,
      limit: 0,
      offset: 0,
      pagination: true,
    },
    skip: redelegationsPagination !== undefined,
  });
  useEffect(() => {
    if (rError) {
      rRefetch();
    } else if (rData) {
      setRedelegationsPagination(rData?.bdjuno_provider?.redelegations?.pagination?.total ?? 0);
    }
  }, [rData, rError, rRefetch]);

  // =====================================
  // unbondings
  // =====================================
  const {
    data: undelegationsData,
    loading: undelegationsLoading,
    error: undelegationsError,
    refetch: undelegationsRefetch,
  } = useValidatorUndelegationsQuery({
    variables: {
      validatorAddress,
      limit: ROWS_PER_PAGE,
      offset: unbondingsPage * ROWS_PER_PAGE,
    },
  });
  useEffect(() => {
    if (undelegationsLoading) return;
    if (undelegationsError) {
      undelegationsRefetch({ pagination: false });
    }
  }, [undelegationsError, undelegationsLoading, undelegationsRefetch]);
  useValidatorUndelegationsQuery({
    variables: {
      validatorAddress,
      limit: ROWS_PER_PAGE,
      offset: (unbondingsPage + 1) * ROWS_PER_PAGE,
    },
  });

  const [undelegationsPagination, setUndelegationsPagination] = useState<number | undefined>();
  const {
    data: uData,
    error: uError,
    refetch: uRefetch,
  } = useValidatorUndelegationsQuery({
    variables: {
      validatorAddress,
      limit: 0,
      offset: 0,
      pagination: true,
    },
    skip: undelegationsPagination !== undefined,
  });
  useEffect(() => {
    if (uError) {
      uRefetch();
    } else if (uData) {
      setUndelegationsPagination(uData?.bdjuno_provider?.undelegations?.pagination?.total ?? 0);
    }
  }, [uData, uError, uRefetch]);

  const handleTabChange = useCallback(
    (_event: SyntheticEvent<Element, globalThis.Event>, newValue: number) => {
      setState((prevState) => {
        const newState = { ...prevState, tab: newValue };
        return R.equals(newState, prevState) ? prevState : newState;
      });
    },
    []
  );

  return {
    state,
    delegations: {
      loading: delegationsLoading,
      count: delegationsPagination,
      data: formatDelegations(delegationsData?.bdjuno_provider?.delegations?.delegations ?? []),
      error: delegationsError,
    },
    redelegations: {
      loading: redelegationsLoading,
      count: redelegationsPagination,
      data: formatRedelegations(
        redelegationsData?.bdjuno_provider?.redelegations?.redelegations ?? []
      ),
      error: redelegationsError,
    },
    unbondings: {
      loading: undelegationsLoading,
      count: undelegationsPagination,
      data: formatUnbondings(
        undelegationsData?.bdjuno_provider?.undelegations?.undelegations ?? []
      ),
      error: undelegationsError,
    },
    handleTabChange,
  };
};
