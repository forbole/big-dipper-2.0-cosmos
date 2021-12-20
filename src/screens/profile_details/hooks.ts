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
        loading: false,
        exists: !!data.profile.length,
        desmosProfile: formatDesmosProfile(data),
      });
    },
  });

  useEffect(() => {
    console.log('useEffect 1');
    const regex = /^@/;
    const profileDtag = router.query.dtag as string;
    const regexCheck = regex.test(profileDtag);
    const configProfile = chainConfig.extra.profile;
    handleSetState(initialState);

    if (!regexCheck || !configProfile) {
      router.replace('/');
    }
    if (configProfile) {
      fetchDesmosProfile(R.pathOr('', ['query', 'dtag'], router));
    }
  }, [R.pathOr('', ['query', 'dtag'], router)]);

  console.log('state 3', state);
  useEffect(() => {
    console.log('useEffect 2');
    console.log('state 4', state);
    if (state.desmosProfile) {
      const dtagInput = router.query.dtag as string;
      if (state.desmosProfile.dtag.toUpperCase() !== dtagInput.toUpperCase()) {
        console.log('should go shallow path');
        router.push({ pathname: `/@${state.desmosProfile.dtag}` }, `/@${state.desmosProfile.dtag}`, { shallow: true });
      }
    }
  }, [state.desmosProfile]);

  return {
    state,
  };
};
