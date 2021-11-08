import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { formatDenom } from '@utils/format_denom';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import { convertMsgsToModels } from '@msg';
import {
  AccountQuery,
  useAccountQuery,
} from '@graphql/types';
import { getDenom } from '@utils/get_denom';
import { useDesmosProfile } from '@hooks';
import { chainConfig } from '@src/configs';
import { ProfileDetailState } from './types';

// const defaultTokenUnit = {
//   value: 0,
//   denom: '',
//   format: '',
// };

const initialState: ProfileDetailState = {
  loading: true,
  exists: true,
  desmosProfile: null,
};

export const useProfileDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<ProfileDetailState>(initialState);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Desmos Profile
  // ==========================
  const {
    fetchDesmosProfile, formatDesmosProfile,
  } = useDesmosProfile({
    onComplete: (data) => {
      handleSetState({
        desmosProfile: formatDesmosProfile(data),
      });
    },
  });

  useEffect(() => {
    handleSetState(initialState);
    if (chainConfig.extra.profile) {
      fetchDesmosProfile(R.pathOr('', ['query', 'address'], router));
    }
  },
  [R.pathOr('', ['query', 'address'], router)]);

  // ==========================
  // Fetch Data
  // ==========================
  const LIMIT = 50;

  useAccountQuery({
    variables: {
      address: R.pathOr('', ['query', 'address'], router),
      utc: dayjs.utc().format('YYYY-MM-DDTHH:mm:ss'),
    },
    onCompleted: (data) => {
      handleSetState(formatAccountQuery(data));
    },
  });

  // ==========================
  // Format Data
  // ==========================

  const formatAccountQuery = (data: AccountQuery) => {
    const stateChange: any = {
      loading: false,
    };

    if (!data.account.length) {
      stateChange.exists = false;
      return stateChange;
    }

    const rewardsDict = {};
    // log all the rewards
    data.account[0].delegationRewards.forEach((x) => {
      const denomAmount = getDenom(x.amount, chainConfig.primaryTokenUnit);
      const denomFormat = formatDenom(denomAmount.amount, chainConfig.primaryTokenUnit);
      rewardsDict[x.validator.validatorInfo.operatorAddress] = denomFormat;
    });
    // set default rewards for delegations without parsed rewards
    data.account[0].delegations.forEach((x) => {
      const validatorAddress = x.validator.validatorInfo.operatorAddress;
      if (!rewardsDict[validatorAddress]) {
        rewardsDict[validatorAddress] = formatDenom(0, chainConfig.primaryTokenUnit);
      }
    });

    return stateChange;
  };

  return {
    state,
  };
};
