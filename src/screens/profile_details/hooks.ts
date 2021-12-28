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

  useEffect(() => {
    if (state.desmosProfile) {
      const dtagConnections = state.desmosProfile.connections;
      const dtagConnectionsNetwork = dtagConnections.map((x) => { return x.identifier; });
      const chainPrefix = chainConfig.prefix.account;
      const containNetwork = dtagConnectionsNetwork.some((x) => x.startsWith(chainPrefix));
      // let containNetwork = false;
      // dtagConnectionsNetwork.map((x) => {
      //   if (x.startsWith(chainPrefix)) { containNetwork = true; }
      //   return containNetwork;
      // });

      if (containNetwork) {
        console.log('render ui');
        const dtagInput = router.query.dtag as string;
        if ((`@${state.desmosProfile.dtag}` !== dtagInput) && (`@${state.desmosProfile.dtag.toUpperCase()}` === dtagInput.toUpperCase())) {
          router.push({ pathname: `/@${state.desmosProfile.dtag}` }, `/@${state.desmosProfile.dtag}`, { shallow: true });
        }
      } else {
        handleSetState({
          exists: false,
        });
      }
    }
  }, [state.desmosProfile]);

  return {
    state,
  };
};
