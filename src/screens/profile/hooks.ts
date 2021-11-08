import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import dayjs from '@utils/dayjs';
import {
  AccountQuery,
  useAccountQuery,
} from '@graphql/types';
import { useDesmosProfile } from '@hooks';
import { chainConfig } from '@src/configs';
import { ProfileDetailState } from './types';

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
    return stateChange;
  };

  return {
    state,
  };
};
