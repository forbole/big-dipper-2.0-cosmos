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
  const [dtag, setDtag] = useState('');

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
      setDtag(data.profile[0].dtag);
    },
  });

  useEffect(() => {
    const regex = /^@/;
    const profileDtag = router.query.dtag as string;
    const regexCheck = regex.test(profileDtag);
    const configProfile = chainConfig.extra.profile;
    handleSetState(initialState);

    console.log(profileDtag, regexCheck, configProfile);
    console.log('router', router);
    console.log('dtag', dtag);

    if (!regexCheck || !configProfile) {
      router.replace('/');
    }

    if (dtag) {
      if (dtag !== router.query.dtag) {
        console.log('should go shallow path');
      }
    }

    if (configProfile) {
      fetchDesmosProfile(R.pathOr('', ['query', 'dtag'], router));
    }
  }, [R.pathOr('', ['query', 'dtag'], router)]);

  return {
    state,
  };
};
