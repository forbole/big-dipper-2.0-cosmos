import chainConfig from '@/chainConfig';
import {
  useValidatorDelegationsQuery,
  useValidatorRedelegationsQuery,
  useValidatorUndelegationsQuery,
} from '@/graphql/types/general_types';
import type {
  DelegationType,
  RedelegationType,
  StakingState,
  UnbondingType,
} from '@/screens/validator_details/components/staking/types';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';
import Tabs from '@material-ui/core/Tabs';
import Big from 'big.js';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { ComponentProps, useCallback, useMemo, useState } from 'react';

const { primaryTokenUnit } = chainConfig();

const stakingDefault = {
  data: {},
  count: 0,
  loading: true,
};

const LIMIT = 10;

type Delegations = {
  coins: MsgCoin[];
  entries: Array<{
    balance: string;
  }>;
};

type Redelegations = {
  delegator_address: string;
  validator_dst_address: string;
  entries: Array<{
    balance: string;
  }>;
};

type Undelegations = {
  entries: Array<{
    balance: string;
  }>;
};

const formatDelegations = (data: Delegations[]) =>
  data
    .map<DelegationType>((x): UnbondingType => {
      const address = R.pathOr('', ['delegator_address'], x);
      const delegation = getDenom(x.coins, primaryTokenUnit);
      return {
        address,
        amount: formatToken(delegation.amount, delegation.denom),
      };
    })
    .sort(R.comparator((a, b) => Big(a.amount?.value).gt(b.amount?.value)));

const formatRedelegations = (data: Redelegations[]) => {
  const results: RedelegationType[] = [];
  data.forEach((x) => {
    R.pathOr<NonNullable<typeof x['entries']>>([], ['entries'], x).forEach((y) => {
      results.push({
        address: x?.delegator_address ?? '',
        to: x?.validator_dst_address ?? '',
        amount: formatToken(y.balance, primaryTokenUnit),
        completionTime: R.pathOr('', ['completion_time'], y),
      });
    });
  });
  results.sort(R.comparator((a, b) => a.completionTime < b.completionTime));

  return results;
};

const formatUnbondings = (data: Undelegations[]) => {
  const results: UnbondingType[] = [];
  data.forEach((x) => {
    x?.entries?.forEach((y) => {
      results.push({
        address: R.pathOr('', ['delegator_address'], x),
        amount: formatToken(y.balance, primaryTokenUnit),
        completionTime: R.pathOr('', ['completion_time'], y),
      });
    });
  });

  results.sort((a, b) => ((a.completionTime ?? '') < (b.completionTime ?? '') ? -1 : 1));

  return results;
};

export const useStaking = () => {
  const router = useRouter();
  const [state, setState] = useState<StakingState>({
    tab: 0,
    delegations: stakingDefault,
    redelegations: stakingDefault,
    unbondings: stakingDefault,
  });
  const validatorAddress = Array.isArray(router?.query?.address)
    ? router.query.address[0]
    : router?.query?.address ?? '';

  // =====================================
  // delegations
  // =====================================
  const [delegationsPages, setDelegationsPages] = useState<DelegationType[][]>([]);
  const [delegationsCount, setDelegationsCount] = useState(0);
  const { loading: delegationsLoading } = useValidatorDelegationsQuery({
    variables: {
      validatorAddress,
      limit: LIMIT,
      offset: delegationsPages.length * LIMIT,
    },
    onCompleted: (data) => {
      if (!data?.delegations?.delegations?.length) return;
      setDelegationsPages((prevState) => {
        const newState = [...prevState, formatDelegations(data?.delegations?.delegations ?? [])];
        return R.equals(newState, prevState) ? prevState : newState;
      });
      setDelegationsCount(data?.delegations?.pagination?.total ?? 0);
    },
  });

  // =====================================
  // redelegations
  // =====================================
  const [redelegationsPages, setRedelegationsPages] = useState<RedelegationType[][]>([]);
  const [redelegationsCount, setRedelegationsCount] = useState(0);
  const { loading: redelegationsLoading } = useValidatorRedelegationsQuery({
    variables: {
      validatorAddress,
      limit: LIMIT,
      offset: redelegationsPages.length * LIMIT,
    },
    onCompleted: (data) => {
      if (!data?.redelegations?.redelegations?.length) return;
      setRedelegationsPages((prevState) => {
        const newState = [
          ...prevState,
          formatRedelegations(data?.redelegations?.redelegations?.filter((d) => d) ?? []),
        ];
        return R.equals(newState, prevState) ? prevState : newState;
      });
      setRedelegationsCount(data?.redelegations?.pagination?.total ?? 0);
    },
  });

  // =====================================
  // unbondings
  // =====================================
  const [undelegationsPages, setUndelegationsPages] = useState<UnbondingType[][]>([]);
  const [undelegationsCount, setUndelegationsCount] = useState(0);
  const { loading: undelegationsLoading } = useValidatorUndelegationsQuery({
    variables: {
      validatorAddress,
      limit: LIMIT,
      offset: undelegationsPages.length * LIMIT,
    },
    onCompleted: (data) => {
      if (!data?.undelegations?.undelegations?.length) return;
      setUndelegationsPages((prevState) => {
        const newState = [
          ...prevState,
          formatUnbondings(data?.undelegations?.undelegations?.filter((d) => d) ?? []),
        ];
        return R.equals(newState, prevState) ? prevState : newState;
      });
      setUndelegationsCount(data?.undelegations?.pagination?.total ?? 0);
    },
  });

  const handleTabChange: ComponentProps<typeof Tabs>['onChange'] = useCallback(
    (_event, newValue) => {
      setState((prevState) => {
        const newState = { ...prevState, tab: newValue };
        return R.equals(newState, prevState) ? prevState : newState;
      });
    },
    []
  );

  return {
    state: useMemo(
      () => ({
        ...state,
        delegations: {
          loading: delegationsLoading,
          count: delegationsCount,
          data: delegationsPages,
        },
        redelegations: {
          loading: redelegationsLoading,
          count: redelegationsCount,
          data: redelegationsPages,
        },
        unbondings: {
          loading: undelegationsLoading,
          count: undelegationsCount,
          data: undelegationsPages,
        },
      }),
      [
        state,
        delegationsLoading,
        delegationsCount,
        delegationsPages,
        redelegationsLoading,
        redelegationsCount,
        redelegationsPages,
        undelegationsLoading,
        undelegationsCount,
        undelegationsPages,
      ]
    ),
    handleTabChange,
  };
};
