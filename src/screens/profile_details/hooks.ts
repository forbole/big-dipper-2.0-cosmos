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
    handleSetState(initialState);

    if (!regexCheck || !configProfile) {
      router.replace('/');
    }
    if (configProfile) {
      fetchDesmosProfile(R.pathOr('', ['query', 'dtag'], router));
    }
  }, [R.pathOr('', ['query', 'dtag'], router)]);

  if (state.desmosProfile) {
    const { dtag } = state.desmosProfile;
    if (state.desmosProfile.dtag !== router.query.dtag) {
      console.log('should go shallow path');
      router.push({ pathname: `/${dtag}` }, `/${dtag}`, { shallow: true });
    }
  }

  return {
    state,
  };
};
