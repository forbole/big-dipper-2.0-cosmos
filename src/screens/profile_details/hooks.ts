import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { chainConfig } from '@src/configs';
import { useDesmosProfile } from '@hooks';
import { ProfileDetailState } from './types';

const initialState: ProfileDetailState = {
  loading: true,
  exists: true,
  desmosProfile: null,
};

export const useProfileDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<ProfileDetailState>(initialState);
  console.log('state 1  => ', state);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
    console.log('state 3 => ', state);
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
      fetchDesmosProfile(R.pathOr('', ['query', 'dtag'], router));
      console.log('2', router.query.dtag);
    }
  },
  [R.pathOr('', ['query', 'dtag'], router)]);

  console.log('router => ', router);
  console.log('state 2  => ', state);

  return {
    state,
  };
};
