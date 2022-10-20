import { useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useVoteAccountDetailsQuery,
  VoteAccountDetailsQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import { formatToken } from '@utils/format_token';
import { VoteAccountState } from './types';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

export const useVoteAccount = () => {
  const router = useRouter();
  const [state, setState] = useState<VoteAccountState>({
    loading: false,
    overview: {
      address: '',
      balance: defaultTokenUnit,
      voter: '',
      withdrawer: '',
    },
    validatorProfile: {
      name: '',
      address: '',
      description: '',
      imageUrl: '',
      website: '',
      active: false,
      voteDistance: 0,
      commission: 0,
      rootDistance: 0,
    },
    skipRate: {
      epoch: 0,
      skip: 0,
      skipRate: 0,
      total: 0,
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useVoteAccountDetailsQuery({
    variables: {
      address: router.query.address as string,
    },
    onCompleted: (data) => {
      handleSetState(formatNonceAccounts(data));
    },
  });

  const formatNonceAccounts = (data: VoteAccountDetailsQuery) => {
    const { address } = router.query;
    const stateChange: any = {
      loading: false,
    };
    // ==========================
    // Overview
    // ==========================
    const formatOverview = () => {
      return ({
        address,
        balance: formatToken(
          R.pathOr(0, ['validator', 0, 'nativeBalance', 'balance'], data),
          chainConfig.primaryTokenUnit,
        ),
        voter: R.pathOr('', ['validator', 0, 'voter'], data),
        withdrawer: R.pathOr('', ['validator', 0, 'withdrawer'], data),
      });
    };
    stateChange.overview = formatOverview();

    // ==========================
    // Validator Profile
    // ==========================
    const formatValidatorProfile = () => {
      const lastVote = R.pathOr(0, ['validator', 0, 'validatorStatus', 'lastVote'], data);
      const rootSlot = R.pathOr(0, ['validator', 0, 'validatorStatus', 'rootSlot'], data);
      const slot = R.pathOr(0, ['validator', 0, 'validatorStatus', 'slot'], data);
      return ({
        address,
        description: R.pathOr('', ['validator', 0, 'validatorConfig', 'details'], data),
        website: R.pathOr('', ['validator', 0, 'validatorConfig', 'website'], data),
        name: R.pathOr(address, ['validator', 0, 'validatorConfig', 'name'], data),
        imageUrl: R.pathOr('', ['validator', 0, 'validatorConfig', 'avatarUrl'], data),
        active: R.pathOr(false, ['validator', 0, 'validatorStatus', 'active'], data),
        commission: R.pathOr(0, ['validator', 0, 'commission'], data),
        voteDistance: slot - lastVote,
        rootDistance: slot - rootSlot,
      });
    };
    stateChange.validatorProfile = formatValidatorProfile();

    // ==========================
    // Skip Rate
    // ==========================
    const formatSkipRate = () => {
      return ({
        epoch: R.pathOr(0, ['validator', 0, 'validatorSkipRate', 'epoch'], data),
        skip: R.pathOr(0, ['validator', 0, 'validatorSkipRate', 'skip'], data),
        skipRate: R.pathOr(0, ['validator', 0, 'validatorSkipRate', 'skipRate'], data),
        total: R.pathOr(0, ['validator', 0, 'validatorSkipRate', 'total'], data),
      });
    };
    stateChange.skipRate = formatSkipRate();

    return stateChange;
  };

  return ({
    state,
  });
};
