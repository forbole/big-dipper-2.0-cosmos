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
    const regex = /^@/;
    const profileDtag = router.query.dtag as string;
    const regexCheck = regex.test(profileDtag);
    const configProfile = chainConfig.extra.profile;

    if (!regexCheck || !configProfile) {
      router.replace('/');
    }
  }, []);

  useEffect(() => {
    handleSetState(initialState);
    if (chainConfig.extra.profile) {
      fetchDesmosProfile(R.pathOr('', ['query', 'dtag'], router));
    }
  },
  [R.pathOr('', ['query', 'dtag'], router)]);

  return {
    state,
  };
};
