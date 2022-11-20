import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import chainConfig from 'ui/chainConfig';
import { useDesmosProfile } from 'ui/hooks';
import type { ProfileDetailState } from './types';

const initialState: ProfileDetailState = {
  loading: true,
  exists: true,
  desmosProfile: null,
};

export const useProfileDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<ProfileDetailState>(initialState);

  const shouldShowProfile = useCallback(() => {
    const dtagConnections = state.desmosProfile?.connections ?? [];
    const dtagConnectionsNetwork = dtagConnections.map((x) => x.identifier);
    const chainPrefix = chainConfig.prefix.account;
    const containNetwork = dtagConnectionsNetwork.some((x) => x.startsWith(chainPrefix));
    return !!containNetwork
  }, [state.desmosProfile?.connections]);

  const handleSetState = useCallback((stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  }, []);

  // ==========================
  // Desmos Profile
  // ==========================
  const { fetchDesmosProfile, formatDesmosProfile } = useDesmosProfile({
    onComplete: (data) => {
      handleSetState({
        loading: false,
        exists: !!data.profile.length,
        desmosProfile: formatDesmosProfile(data),
      });
    },
  });

  const profileDtag = (router?.query?.dtag as string) ?? '';

  useEffect(() => {
    const regex = /^@/;
    const regexCheck = regex.test(profileDtag);
    const configProfile = chainConfig.extra.profile;
    handleSetState(initialState);

    if (!regexCheck || !configProfile) {
      router.replace('/');
    }

    if (configProfile) {
      fetchDesmosProfile(profileDtag);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileDtag]);

  useEffect(() => {
    if (state.desmosProfile) {
      const showProfile = shouldShowProfile();

      if (showProfile) {
        const dtagInput = router.query.dtag as string;
        if (
          `@${state.desmosProfile.dtag}` !== dtagInput &&
          `@${state.desmosProfile.dtag.toUpperCase()}` === dtagInput.toUpperCase()
        ) {
          router.push(
            { pathname: `/@${state.desmosProfile.dtag}` },
            `/@${state.desmosProfile.dtag}`,
            { shallow: true }
          );
        }
      } else {
        handleSetState({
          exists: false,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.desmosProfile]);

  return {
    state,
    shouldShowProfile,
  };
};
