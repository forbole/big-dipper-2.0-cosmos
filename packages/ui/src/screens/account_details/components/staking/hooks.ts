import chainConfig from '@/chainConfig';
import {
  useAccountDelegationsQuery,
  useAccountRedelegationsQuery,
  useAccountUndelegationsQuery,
  useValidatorsQuery,
  ValidatorsQuery,
} from '@/graphql/types/general_types';
import type {
  DelegationType,
  RedelegationType,
  StakingState,
  UnbondingType,
} from '@/screens/account_details/components/staking/types';
import type { RewardsType } from '@/screens/account_details/types';
import { ValidatorType } from '@/screens/validators/components/list/types';
import { formatToken } from '@/utils/format_token';
import { getDenom } from '@/utils/get_denom';
import { Tabs } from '@material-ui/core';
import Big from 'big.js';
import { useRouter } from 'next/router';
import numeral from 'numeral';
import * as R from 'ramda';
import { ComponentProps, useCallback, useMemo, useState } from 'react';

const { primaryTokenUnit } = chainConfig();

const stakingDefault = {
  data: {},
  count: 0,
  loading: true,
};

const LIMIT = 100;

const formatDelegations = (
  data: Array<{
    validator_address?: string;
    coins?: MsgCoin[];
  }>,
  commission: number | undefined,
  rewards: RewardsType
) =>
  data
    .map((x): DelegationType => {
      const validator = x?.validator_address ?? '';
      const delegation = getDenom(x.coins, primaryTokenUnit);
      return {
        validator,
        commission: numeral(commission?.toFixed(3)).value() ?? 0,
        amount: formatToken(delegation.amount, delegation.denom),
        reward: rewards[validator],
      };
    })
    .sort((a, b) => (Big(a.amount?.value).gt(b.amount?.value) ? -1 : 1));

const formatRedelegations = (
  data: Array<{
    entries?: Array<{ balance: string | number; completion_time?: string }>;
    validator_src_address?: string;
    validator_dst_address?: string;
  }>
) => {
  const results: RedelegationType[] = [];
  data.forEach((x) => {
    x.entries?.forEach((y) => {
      results.push({
        from: x?.validator_src_address ?? '',
        to: x?.validator_dst_address ?? '',
        amount: formatToken(y.balance, primaryTokenUnit),
        completionTime: y?.completion_time ?? '',
      });
    });
  });

  results.sort((a, b) => (a.completionTime < b.completionTime ? -1 : 1));

  return results;
};

const formatUnbondings = (
  data: Array<{
    entries?: Array<{ balance: string | number; completion_time?: string }>;
    validator_address?: string;
  }>
) => {
  const results: Array<{ validator: string; amount: TokenUnit; completionTime: string }> = [];
  data.forEach((x) => {
    x?.entries?.forEach((y) => {
      results.push({
        validator: x?.validator_address ?? '',
        amount: formatToken(y.balance, primaryTokenUnit),
        completionTime: y?.completion_time ?? '',
      });
    });
  });

  results.sort((a, b) => (a.completionTime < b.completionTime ? -1 : 1));

  return results;
};

export const useStaking = (rewards: RewardsType) => {
  const router = useRouter();
  const [state, setState] = useState<StakingState>({
    tab: 0,
    delegations: stakingDefault,
    redelegations: stakingDefault,
    unbondings: stakingDefault,
  });

  const [validatorsCommission, setValidatorsCommission] = useState<
    Pick<ValidatorType, 'validator' | 'commission'>[]
  >([]);

  // ==========================
  // Fetch Data
  // ==========================
  useValidatorsQuery({
    onCompleted: (data) => {
      formatValidators(data);
    },
  });

  // return a list of all validators with their address and commission rate
  const formatValidators = useCallback(
    (data: ValidatorsQuery): { items: Pick<ValidatorType, 'validator' | 'commission'>[] } => {
      const formattedItems: Pick<ValidatorType, 'validator' | 'commission'>[] = data.validator
        .filter((x) => x.validatorInfo)
        .map((x) => ({
          validator: x.validatorInfo?.operatorAddress ?? '',
          commission: (x?.validatorCommissions?.[0]?.commission ?? 0) * 100,
        }));

      setValidatorsCommission(formattedItems);

      return {
        items: formattedItems,
      };
    },
    []
  );

  const address = Array.isArray(router?.query?.address)
    ? router.query.address[0]
    : router?.query?.address ?? '';

  // =====================================
  // delegations
  // =====================================
  const [delegationsPages, setDelegationsPages] = useState<DelegationType[][]>([]);
  const [delegationsCount, setDelegationsCount] = useState(0);
  const { loading: delegationsLoading } = useAccountDelegationsQuery({
    variables: {
      address,
      limit: LIMIT,
      offset: delegationsPages.length * LIMIT,
    },
    onCompleted: (data) => {
      if (!data?.delegations?.delegations?.length) return;
      setDelegationsPages((prevState) => {
        const newState = [
          ...prevState,
          formatDelegations(
            data?.delegations?.delegations ?? [],
            validatorsCommission.find(
              (c) => c.validator === data?.delegations?.delegations?.[0]?.validator_address
            )?.commission,
            rewards
          ),
        ];
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
  const { loading: redelegationsLoading } = useAccountRedelegationsQuery({
    variables: {
      address,
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
  const { loading: undelegationsLoading } = useAccountUndelegationsQuery({
    variables: {
      address,
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
        return R.equals(prevState, newState) ? prevState : newState;
      });
      setUndelegationsCount(data?.undelegations?.pagination?.total ?? 0);
    },
  });

  const handleTabChange: ComponentProps<typeof Tabs>['onChange'] = useCallback(
    (_event, newValue) => {
      setState((prevState) => {
        const newState = { ...prevState, tab: newValue };
        return R.equals(prevState, newState) ? prevState : newState;
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
